const VERT = `
attribute vec2 aPos;
attribute vec2 aUv;
varying vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAG = `
uniform float uTime;
uniform float uIntensity;
uniform vec3 uColorPrimary;
uniform vec3 uColorBg;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec2 uv = vUv;
  float lines = 0.0;
  for (int i = 0; i < 6; i++) {
    float fi = float(i);
    float x = fi / 6.0 + sin(uTime * 0.08 + fi) * 0.04;
    float dist = abs(uv.x - x);
    float y = fract(uv.y + uTime * (0.15 + fi * 0.02));
    lines += smoothstep(0.003, 0.0, dist) * smoothstep(0.0, 0.05, y) * smoothstep(0.12, 0.06, y);
  }
  float ambient = hash(uv * 8.0 + uTime * 0.02) * 0.04;
  float intensity = (lines * 0.9 + ambient) * uIntensity * 0.12;
  vec3 color = mix(uColorBg, uColorPrimary, intensity);
  gl_FragColor = vec4(color, intensity * 0.85);
}
`;

export type DataFlowHandle = {
  pause: () => void;
  resume: () => void;
  destroy: () => void;
  setScrollIntensity: (v: number) => void;
};

function hexToRgbNorm(hex: number): [number, number, number] {
  const r = ((hex >> 16) & 255) / 255;
  const g = ((hex >> 8) & 255) / 255;
  const b = (hex & 255) / 255;
  return [r, g, b];
}

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("WebGL: createShader failed");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader) ?? "shader compile failed";
    gl.deleteShader(shader);
    throw new Error(log);
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string): WebGLProgram {
  const vs = compileShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);
  const program = gl.createProgram();
  if (!program) throw new Error("WebGL: createProgram failed");
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program) ?? "program link failed";
    gl.deleteProgram(program);
    throw new Error(log);
  }
  return program;
}

/** WebGL data-flow — quality high uniquement (sans dépendance three). */
export async function createDataFlowBackground(canvas: HTMLCanvasElement): Promise<DataFlowHandle> {
  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: false,
    powerPreference: "high-performance",
  });
  if (!gl) throw new Error("WebGL not available");

  const dpr = Math.min(window.devicePixelRatio, 1.5);

  const program = createProgram(gl, VERT, FRAG);
  gl.useProgram(program);

  const aPos = gl.getAttribLocation(program, "aPos");
  const aUv = gl.getAttribLocation(program, "aUv");
  const uTime = gl.getUniformLocation(program, "uTime");
  const uIntensity = gl.getUniformLocation(program, "uIntensity");
  const uColorPrimary = gl.getUniformLocation(program, "uColorPrimary");
  const uColorBg = gl.getUniformLocation(program, "uColorBg");

  const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
  const uvs = new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]);

  const posBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const uvBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf);
  gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);
  gl.enableVertexAttribArray(aUv);
  gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, 0, 0);

  const [pr, pg, pb] = hexToRgbNorm(0xff8200);
  const [br, bg, bb] = hexToRgbNorm(0x0d0d0d);
  gl.uniform3f(uColorPrimary, pr, pg, pb);
  gl.uniform3f(uColorBg, br, bg, bb);
  gl.uniform1f(uIntensity, 0.6);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  let startTime = performance.now();
  let raf: number | null = null;
  let running = false;
  let targetIntensity = 0.6;
  let currentIntensity = 0.6;

  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w && h) {
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
  };
  resize();
  window.addEventListener("resize", resize);

  const render = () => {
    if (!running) return;
    raf = requestAnimationFrame(render);
    const t = (performance.now() - startTime) / 1000;
    currentIntensity += (targetIntensity - currentIntensity) * 0.06;
    gl.uniform1f(uTime, t);
    gl.uniform1f(uIntensity, currentIntensity);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  };

  return {
    pause: () => {
      running = false;
      if (raf != null) cancelAnimationFrame(raf);
      raf = null;
    },
    resume: () => {
      if (running) return;
      startTime = performance.now();
      running = true;
      render();
    },
    destroy: () => {
      running = false;
      if (raf != null) cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      gl.deleteBuffer(posBuf);
      gl.deleteBuffer(uvBuf);
      gl.deleteProgram(program);
    },
    setScrollIntensity: (v: number) => {
      targetIntensity = Math.max(0, Math.min(1, v));
    },
  };
}
