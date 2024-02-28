"use client";
import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import SideNavBar from "./components/SideNav.tsx/SideNavBar";
import useDrawingStatus, { DrawingStatusProps } from "@/store/store";
import { DrawRectangle } from "./utils/DrawRectangle";
import { DrawEllipse } from "./utils/DrawEllipse";

export default function Home() {
  const [canvas, setCanvas] = useState<fabric.Canvas>();
  // const [currentDrawingStatus, setCurrentDrawingStatus] = useState<
  //   string | null
  // >(null);

  const currentDrawingStatus = useDrawingStatus(
    (state: DrawingStatusProps) => state.currentDrawingStatus
  );
  const setCurrentDrawingStatus = useDrawingStatus(
    (state: DrawingStatusProps) => state.setCurrentDrawingStatus
  );

  // useEffect(() => {
  //   const c = new fabric.Canvas("canvas", {
  //     height: window.innerHeight,
  //     width: window.innerWidth,
  //     backgroundColor: "pink",
  //   });
  //   const handleResize = () => {
  //     c.setHeight(window.innerHeight);
  //     c.setWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   setCanvas(c);
  //   c.on("mouse:down", (e: any) => {
  //     console.log(e.pointer.x, e.pointer.y, currentDrawingStatus);
  //     if (currentDrawingStatus === "rectangle") {
  //       DrawRectangle({ canvas: c, left: e.pointer.x, top: e.pointer.y });
  //     }
  //   });
  //   return () => {
  //     c.dispose();
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   const c = new fabric.Canvas("canvas", {
  //     height: window.innerHeight,
  //     width: window.innerWidth,
  //     backgroundColor: "pink",
  //   });
  //   const handleMouseDown = (e: any) => {
  //     console.log(c);
  //     console.log(e.pointer.x, e.pointer.y, currentDrawingStatus);
  //     if (currentDrawingStatus === "rectangle") {
  //       DrawRectangle({ canvas: c, left: e.pointer.x, top: e.pointer.y });
  //       setCurrentDrawingStatus(null);
  //     }
  //   };
  //   const handleResize = () => {
  //     c.setHeight(window.innerHeight);
  //     c.setWidth(window.innerWidth);
  //   };

  //   c.on("mouse:down", handleMouseDown); // Add event listener

  //   window.addEventListener("resize", handleResize);

  //   setCanvas(c);

  //   return () => {
  //     c.off("mouse:down", handleMouseDown); // Remove event listener
  //     c.dispose();
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [currentDrawingStatus]);

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

    const handleMouseDown = (e: any) => {
      // console.log(c);
      console.log(e.pointer.x, e.pointer.y, currentDrawingStatus);
      if (currentDrawingStatus === "rectangle") {
        console.log(currentDrawingStatus);
        DrawRectangle({
          canvas: canvas,
          left: e.pointer.x,
          top: e.pointer.y,
          
        });
        setCurrentDrawingStatus(null);
      } else if (currentDrawingStatus === "ellipse") {
        console.log(currentDrawingStatus);
        DrawEllipse({
          canvas: canvas,
          left: e.pointer.x,
          top: e.pointer.y,
          
        });
        setCurrentDrawingStatus(null);
      }
    };

    canvas.on("mouse:down", handleMouseDown);

    return () => {
      canvas.off("mouse:down", handleMouseDown);
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
