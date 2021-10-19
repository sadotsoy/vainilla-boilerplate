export function resizeCanvasToDisplaySize(canvas) {

  const { width, height } = canvas.getBoundingClientRect();

  const dpr = window.devicePixelRatio;
  const dWidth = Math.round(width * dpr);
  const dHeight = Math.round(height * dpr);

  const needResize = canvas.width !== dWidth || canvas.height !== dHeight;

  if (needResize) {
    canvas.width = dWidth;
    canvas.height = dHeight;
  }

  return needResize;
}
