export const changePosition = (
  shape: fabric.Object,
  value: number,
  propertyName: string,
  canvas: fabric.Canvas
) => {
  if (propertyName === "left") {
    if (shape.originX === "right") {
      shape.set({ left: value + shape.width! });
    } else if (shape.originX === "left") {
      shape.set({ left: value });
    }
  } else if (propertyName === "angle") {
    shape.rotate(value);
  } else if (propertyName === "top") {
    if (shape.originY === "bottom") {
      shape.set({ top: value + shape.height! });
    } else if (shape.originY === "top") {
      shape.set({ top: value });
    }
  } else if (shape.type === "rect" && propertyName === "width") {
    shape.set({ width: value });
  } else if (shape.type === "rect" && propertyName === "height") {
    shape.set({ height: value });
  } else if (shape.type === "ellipse" && propertyName === "rx") {
    const ellipse = shape as fabric.Ellipse;
    ellipse.set({ rx: value / 2 });
  } else if (shape.type === "ellipse" && propertyName === "ry") {
    const ellipse = shape as fabric.Ellipse;
    ellipse.set({ ry: value / 2 });
  }
  canvas.requestRenderAll();
};
