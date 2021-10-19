import { resizeCanvasToDisplaySize } from '../utils/canvas';


export default function mainDraw() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  resizeCanvasToDisplaySize(ctx.canvas);

  const width = canvas.width;
  const height = canvas.height;

  ctx.beginPath();
  ctx.arc(width * 0.5, height * 0.5, 50, 0, 2 * Math.PI);
  ctx.stroke();

  requestAnimationFrame(mainDraw);
}
