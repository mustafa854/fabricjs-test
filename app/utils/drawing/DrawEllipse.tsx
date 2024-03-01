import { selectedObjectType } from "@/store/store";
import { fabric } from "fabric";
import uuid4 from "uuid4";
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
  originX?: string;
  originY?: string;
};

export const DrawEllipse = (
  {
    canvas,
    rx = 1,
    ry = 1,
    fill = "#D9D9D9",
    stroke = "#000000",
    strokeWidth = 0,
    opacity = 1,
    angle = 0,
    scaleX = 1,
    scaleY = 1,
    left,
    top,
    originX = "left",
    originY = "top",
  }: EllipseProps,
  objectsHistory: selectedObjectType[] | [],
  setObjectsHistory: (object: selectedObjectType) => void
) => {
  const EllipseProperties = {
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
    width: rx * 2,
    height: ry * 2,
    originX,
    originY,
    type: "ellipse",
    cornerSize: 10,
    cornerStrokeColor: "black",
    borderColor: "black",
    cornerColor: "transparent",
    transparentCorners: false,
  };
  class CustomEllipse extends fabric.Ellipse {
    id?: string;
    label?: string;
    type?: string;

    toObject(propertiesToInclude: string[] = []) {
      return super.toObject(propertiesToInclude.concat("id", "label", "type"));
    }
  }

  if (canvas) {
    const ellipse = new CustomEllipse(EllipseProperties);
    // console.log("1",ellipse);
    const id = "Ellipse-" + uuid4();
    // console.log("2.1",id);
    ellipse.id = id;
    canvas.add(ellipse);
    // canvas.setActiveObject(ellipse);
    // console.log("2",ellipse);
    setObjectsHistory({
      key: id,
      type: "ellipse",
      value: ellipse,
    });
    // console.log("3",objectsHistory);
    canvas.requestRenderAll();
    return ellipse;
  } else {
    return null;
  }
};
