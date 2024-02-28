import { fabric } from "fabric";
type RectangleProps = {
  canvas?: fabric.Canvas;
  width?: number;
  height?: number;
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

export const DrawRectangle = ({
  canvas,
  width = 100,
  height = 100,
  fill = "#D9D9D9",
  stroke = "#000000",
  strokeWidth = 0,
  opacity = 1,
  angle = 0,
  scaleX = 1,
  scaleY = 1,
  left,
  top,
}: RectangleProps) => {
  const RectangleOrEllipseProperties = {
    width: width,
    height: height,
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
    const rectangle = new fabric.Rect(RectangleOrEllipseProperties);
    canvas.add(rectangle);

    canvas.requestRenderAll();
  }
};
