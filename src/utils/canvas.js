export function resizeCanvasToDisplaySize(canvas) {
  // Lookup the size the browser is displaying the canvas in CSS pixels
  const dWidth = canvas.clientWidth;
  const dHeight = canvas.clientHeight;

  // Check if the canvas is not the same size.
  const needResize = canvas.width !== dWidth || canvas.height !== dHeight;

  if (needResize) {
    // Make the canvas the same size
    console.log('sad: rezize');
    canvas.width = dWidth;
    canvas.height = dHeight;
  }

  return needResize;
}
