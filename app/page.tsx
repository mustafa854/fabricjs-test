"use client";
import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import SideNavBar from "./components/SideNav/SideNavBar";
import useDrawingStatus, { DrawingStatusProps } from "@/store/store";
import { DrawRectangle } from "./utils/DrawRectangle";
import { DrawEllipse } from "./utils/DrawEllipse";

export default function Home() {
  const [canvas, setCanvas] = useState<fabric.Canvas>();

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
  

  useEffect(()=>{
console.log("final",objectsHistory);
  },[objectsHistory])

  useEffect(() => {
    const c = new fabric.Canvas("canvas", {
      height: window.innerHeight,
      width: window.innerWidth,
      backgroundColor: "pink",
    });

    const handleResize = () => {
      c.setHeight(window.innerHeight);
      c.setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    setCanvas(c);

    return () => {
      c.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!canvas) return;
    
    let startX: number, startY: number, shape:fabric.Object | null = null;
    const handleMouseDown = (e: any) => {
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
        shape = DrawEllipse({
          canvas: canvas,
          left: e.pointer.x,
          top: e.pointer.y,
        },
        objectsHistory,
        setObjectsHistory);
        
      }
    };
    
    const handleMouseMove = (e:any)=>{
      const pointer = canvas.getPointer(e.e)
      let originHorizontal = 'left';
      let originVertical ='top';
      if(pointer.x - startX < 0){
       originHorizontal = 'right'
      }
      if(pointer.y - startY < 0){
       originVertical = 'bottom'
      }
      const width = Math.abs(pointer.x - startX);
      const height = Math.abs(pointer.y - startY);
      if (shape && currentDrawingStatus === "rectangle") {
        // console.log("!!!!!!!!!!!!!!!!!!!!!");
        shape.set({ width: width, height: height, originX:originHorizontal, originY:originVertical });
        canvas.renderAll();
      }
      if (shape && currentDrawingStatus === "ellipse"  ) {
        const rx = width / 2;
        const ry = height / 2;
        // console.log(width);
        // console.log(height);

        const ellipse = shape as fabric.Ellipse;
        ellipse.set({ rx:  rx, ry: ry, originX:originHorizontal, originY:originVertical });
        canvas.renderAll();
      }

      
    }

    const handleMouseUp = (e:any)=>{
      setCurrentDrawingStatus(null);
      return
      
    }
    canvas.on("mouse:down", handleMouseDown);
    canvas.on('mouse:move', handleMouseMove);
    canvas.on('mouse:up', handleMouseUp);

    return () => {
      canvas.off("mouse:down", handleMouseDown);
      canvas.off('mouse:move', handleMouseMove);
      canvas.off('mouse:up', handleMouseUp);
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
          <canvas id="canvas" style={{ width: "100vw", height: "100vh" }} />
        </div>
      </main>
    </>
  );
}
