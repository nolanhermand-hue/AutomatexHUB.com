const VERT = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
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

/** WebGL data-flow — quality high uniquement. */
export async function createDataFlowBackground(canvas: HTMLCanvasElement): Promise<DataFlowHandle> {
  const THREE = await import("three");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;

  const material = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms: {
      uTime: { value: 0 },
      uIntensity: { value: 0.6 },
      uColorPrimary: { value: new THREE.Color(0xff8200) },
      uColorBg: { value: new THREE.Color(0x0d0d0d) },
    },
    transparent: true,
    depthWrite: false,
  });

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  scene.add(mesh);

  const clock = new THREE.Clock();
  let raf: number | null = null;
  let running = false;
  let targetIntensity = 0.6;

  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w && h) renderer.setSize(w, h, false);
  };
  resize();
  window.addEventListener("resize", resize);

  const render = () => {
    if (!running) return;
    raf = requestAnimationFrame(render);
    material.uniforms.uTime.value = clock.getElapsedTime();
    const cur = material.uniforms.uIntensity.value as number;
    material.uniforms.uIntensity.value = cur + (targetIntensity - cur) * 0.06;
    renderer.render(scene, camera);
  };

  return {
    pause: () => {
      running = false;
      if (raf != null) cancelAnimationFrame(raf);
      raf = null;
    },
    resume: () => {
      if (running) return;
      running = true;
      render();
    },
    destroy: () => {
      running = false;
      if (raf != null) cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
    },
    setScrollIntensity: (v: number) => {
      targetIntensity = Math.max(0, Math.min(1, v));
    },
  };
}
