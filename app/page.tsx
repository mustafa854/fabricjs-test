"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import SideNavBar from "./components/SideNav/SideNavBar";
import useDrawingStatus, { DrawingStatusProps } from "@/store/store";
import ContextMenuPopup from "./components/ContextMenu/ContextMenuPopup";
import { ContextMenuPopupLinksCanvas } from "./components/ContextMenu/ContextMenuPopupLinksCanvas";
import { DrawRectangle } from "./utils/drawing/DrawRectangle";
import { DrawEllipse } from "./utils/drawing/DrawEllipse";
import PropertiesSideBar from "./components/PropertiesSideBar/PropertiesSideBar";
import Loading from "./loading";

export default function Home() {
  const [canvas, setCanvas] = useState<fabric.Canvas>();
  const globalCanvas = useDrawingStatus(
    (state: DrawingStatusProps) => state.globalCanvas
  );
  const setGlobalCanvas = useDrawingStatus(
    (state: DrawingStatusProps) => state.setGlobalCanvas
  );
  const currentDrawingStatus = useDrawingStatus(
    (state: DrawingStatusProps) => state.currentDrawingStatus
  );
  const setCurrentDrawingStatus = useDrawingStatus(
    (state: DrawingStatusProps) => state.setCurrentDrawingStatus
  );

  const objectsHistory = useDrawingStatus(
    (state: DrawingStatusProps) => state.objectsHistory
  );
  const setObjectsHistory = useDrawingStatus(
    (state: DrawingStatusProps) => state.setObjectsHistory
  );

  const clickedObject = useDrawingStatus(
    (state: DrawingStatusProps) => state.clickedObject
  );
  const setClickedObject = useDrawingStatus(
    (state: DrawingStatusProps) => state.setClickedObject
  );
  //     useEffect(()=>{
  //       console.log("clickedObject",clickedObject)
  //     },[clickedObject])
  //   useEffect(()=>{
  // console.log("final",objectsHistory);
  //   },[objectsHistory])
  // useEffect(() => {
  //   console.log("globalCanvas", globalCanvas);
  // }, [globalCanvas]);
  useEffect(() => {
    const c = new fabric.Canvas("canvas", {
      height: window.innerHeight,
      width: window.innerWidth,
      backgroundColor: "#e5e5e5",
      selectionBorderColor: "black",
      selectionColor: "#eae9ee",
    });
    fabric.Object.prototype.cornerSize = 10;
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = 'transparent'; // Change corner color to blue
    fabric.Object.prototype.cornerStrokeColor = 'black'; // Change corner stroke color to blue
    fabric.Object.prototype.borderColor = 'black'; // Change border color to blue
    setGlobalCanvas(c);
    const handleResize = () => {
      c.setHeight(window.innerHeight);
      c.setWidth(window.innerWidth);
    };
    c.on("selection:created", (e) => {
      if (e.selected && e.selected[0]) {
        const selectedObject = e.selected[0] as fabric.Object & {
          id: string;
          type: string;
        };
        setClickedObject({
          key: selectedObject.id,
          value: selectedObject,
          type: selectedObject.type,
        });
      }
    });
    c.on("selection:updated", (e) => {
      if (e.selected && e.selected[0]) {
        const selectedObject = e.selected[0] as fabric.Object & {
          id: string;
          type: string;
        };
        setClickedObject({
          key: selectedObject.id,
          value: selectedObject,
          type: selectedObject.type,
        });
      }
    });
    c.on("selection:cleared", (e) => {
      setClickedObject(null);
    });
    window.addEventListener("resize", handleResize);
    setCanvas(c);

    return () => {
      c.off("selection:created");
      c.off("selection:created");
      c.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (!canvas) return;

    let startX: number,
      startY: number,
      shape: fabric.Object | null = null;
    const handleMouseDown = (e: any) => {
      
      // if (currentDrawingStatus===null && e.target) {
      //   console.log("ghazipur ka khitta meri pehchaan e", e)
      //   handleSelection(e);
      // }
      // // console.log(c);
      // console.log(e.pointer.x, e.pointer.y, currentDrawingStatus);
      startX = e.pointer.x;
      startY = e.pointer.y;
      if (currentDrawingStatus === "rectangle") {
        // console.log(currentDrawingStatus);
        shape = DrawRectangle(
          {
            canvas: canvas,
            left: e.pointer.x,
            top: e.pointer.y,
          },
          objectsHistory,
          setObjectsHistory
        );
      } else if (currentDrawingStatus === "ellipse") {
        // console.log(currentDrawingStatus);
        shape = DrawEllipse(
          {
            canvas: canvas,
            left: e.pointer.x,
            top: e.pointer.y,
          },
          objectsHistory,
          setObjectsHistory
        );
      }
    };
    // function handleSelection(e:any) {
    //   const { target } = e;
    //   if (!canvas) return;
    //   if (target) {
       
    //     // If the target is already selected, deselect it
    //     if (target.selected) {
    //       target.set('borderColor', 'black'); // Change border color back to black
    //       target.set('cornerColor', 'black'); // Change corner color back to black
    //       target.set('cornerStrokeColor', 'black'); // Change corner stroke color back to black
    //     } else {
    //       target.set('borderColor', 'blue'); // Change border color to blue
    //       target.set('cornerColor', 'blue'); // Change corner color to blue
    //       target.set('cornerStrokeColor', 'blue'); // Change corner stroke color to blue
    //     }
    //     target.set('selected', !target.selected); // Toggle selected state
    //     canvas.renderAll();
    //   }
    // }
    const handleMouseMove = (e: any) => {
      const pointer = canvas.getPointer(e.e);
      let originHorizontal = "left";
      let originVertical = "top";
      if (pointer.x - startX < 0) {
        originHorizontal = "right";
      }
      if (pointer.y - startY < 0) {
        originVertical = "bottom";
      }
      const width = Math.abs(pointer.x - startX);
      const height = Math.abs(pointer.y - startY);
      if (shape && currentDrawingStatus === "rectangle") {
        // console.log("!!!!!!!!!!!!!!!!!!!!!");
        shape.set({
          width: width,
          height: height,
          originX: originHorizontal,
          originY: originVertical,
        });
        canvas.renderAll();
      }
      if (shape && currentDrawingStatus === "ellipse") {
        const rx = width / 2;
        const ry = height / 2;
        // console.log(width);
        // console.log(height);

        const ellipse = shape as fabric.Ellipse;
        ellipse.set({
          rx: rx,
          ry: ry,
          originX: originHorizontal,
          originY: originVertical,
        });
        canvas.renderAll();
      }
    };

    const handleMouseUp = (e: any) => {
      setCurrentDrawingStatus(null);
      return;
    };
    canvas.on("mouse:down", handleMouseDown);
    canvas.on("mouse:move", handleMouseMove);
    canvas.on("mouse:up", handleMouseUp);

    return () => {
      canvas.off("mouse:down", handleMouseDown);
      canvas.off("mouse:move", handleMouseMove);
      canvas.off("mouse:up", handleMouseUp);
    };
  }, [currentDrawingStatus, canvas]);

  return (
    <>
      <main className="">
        <div className="relative">
          <div className="absolute top-2 mx-auto z-50 left-1/2 transform -translate-x-1/2">
            <SideNavBar
              currentDrawingStatus={currentDrawingStatus}
              setCurrentDrawingStatus={setCurrentDrawingStatus}
            />
          </div>
          <ContextMenuPopup contextMenuLinks={ContextMenuPopupLinksCanvas}>
            <canvas id="canvas" style={{ width: "100vw", height: "100vh" }} />
            <PropertiesSideBar />
          </ContextMenuPopup>
        </div>
      </main>
    </>
  );
}
