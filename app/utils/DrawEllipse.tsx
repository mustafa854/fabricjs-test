import { fabric } from "fabric";
type EllipseProps = {
  canvas?: fabric.Canvas;
  rx?: number;
  ry?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  opacity?: number;
  angle?: number;
  scaleX?: number;
  scaleY?: number;
  left: number;
  top: number;
};

export const DrawEllipse = ({
  canvas,
  rx = 100,
  ry = 100,
  fill = "#D9D9D9",
  stroke = "#000000",
  strokeWidth = 0,
  opacity = 1,
  angle = 0,
  scaleX = 1,
  scaleY = 1,
  left,
  top,
}: EllipseProps) => {
  const RectangleOrEllipseProperties = {
    rx: rx,
    ry: ry,
    fill,
    stroke,
    strokeWidth,
    opacity,
    angle,
    scaleX,
    scaleY,
    left,
    top,
  };

  if (canvas) {
    const ellipse = new fabric.Ellipse(RectangleOrEllipseProperties);
    canvas.add(ellipse);

    canvas.requestRenderAll();
  }
};
