import ColorPickerInput from "@/app/customComponents/PropertiesSideBar/Form/ColorPickerInput";
import DropdownInput from "@/app/customComponents/PropertiesSideBar/Form/DropdownInput";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useDrawingStatus from "@/store/store";
import React from "react";
import { changeCanvasBackgroundColor } from "../Canvas/changeCanvasBackgroundColor";

interface canvas {
  globalCanvas: fabric.Canvas | null;
}

const RenderCanvasProperties = ({ globalCanvas }: canvas) => {
  const handleColorChange = () => {
    changeCanvasBackgroundColor(globalCanvas, "#ffffff");
  };
  // const handleOpacityChange = () => {
  //   // add png type image or something similar solution as it will create png images
  //   console.log("opacity");
  // };
  // const handleExport = () =>{
  //     console.log("export")
  // }
  // const handleExportType = () =>{
  //     console.log("export type")
  // }

  return (
    <div>
      <div className="px-4 py-3  text-sm font-bold">
        <h3>Page</h3>
      </div>
      <div className="px-4 pb-3">
        <ColorPickerInput
          label="Fill"
          value="#ffffff"
          handleChange={() => {}}
        />
      </div>
      <Separator className="" />
      <div className="px-4 py-3  text-sm font-bold">
        <h3>Export</h3>
      </div>
      <div className="px-4 pb-3">
        <Button className="w-full">Export</Button>
      </div>
      <div className="px-4 pb-10">
        <DropdownInput />
      </div>
      <Separator className="" />
    </div>
  );
};

export default RenderCanvasProperties;
