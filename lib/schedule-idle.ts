/** Diffère une tâche non critique après le rendu interactif (TBT). */
export function scheduleIdleTask(
  task: () => void,
  options?: { timeout?: number },
): () => void {
  const timeout = options?.timeout ?? 3000;
  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(task, { timeout });
    return () => window.cancelIdleCallback(id);
  }
  const t = window.setTimeout(task, 300);
  return () => window.clearTimeout(t);
}
