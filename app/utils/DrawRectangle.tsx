import { selectedObjectType } from "@/store/store";
import { fabric } from "fabric";
import uuid4 from "uuid4";

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
  originX?: string;
  originY?: string;
};

export const DrawRectangle = (
  {
    canvas,
    width = 1,
    height = 1,
    fill = "#D9D9D9",
    stroke = "#000000",
    strokeWidth = 0,
    opacity = 1,
    angle = 0,
    scaleX = 1,
    scaleY = 1,
    left,
    top,
    originX='left',
    originY='top',
  }: RectangleProps,
  objectsHistory: selectedObjectType[] | [],
  setObjectsHistory: (object: selectedObjectType) => void
) => {
  const RectangleProperties = {
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
    top,originX,originY,
  };

  class CustomRect extends fabric.Rect {
    id?: string;
    label?: string;

    toObject(propertiesToInclude: string[] = []) {
      return super.toObject(propertiesToInclude.concat("id", "label"));
    }
  }

  if (canvas) {
    const rectangle = new CustomRect(RectangleProperties);
    // console.log("1",rectangle);
    const id = uuid4();
    // console.log("2.1",id);
    rectangle.id = id;
    canvas.add(rectangle);
    // console.log("2",rectangle);
    setObjectsHistory({
      key: id,
      type: "rectangle",
      value: rectangle,
    });
    // console.log("3",objectsHistory);
    canvas.requestRenderAll();
    return rectangle;
  } else {
    return null;
  }

};
