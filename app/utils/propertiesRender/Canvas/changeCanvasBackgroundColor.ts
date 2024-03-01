export const changeCanvasBackgroundColor = (
  canvas: fabric.Canvas | null,
  color: string
) => {
  if (!canvas) return;

  canvas.backgroundColor = color;
  canvas.requestRenderAll();
};
