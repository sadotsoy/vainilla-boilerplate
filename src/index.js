import './styles/globals.css';
import mainDraw from './draws/';

(() => {
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas';
  document.body.appendChild(canvas);

  // DRAW
  mainDraw();
})();
