import React, { useEffect, useState } from "react";
import PositionInput from "./PositionInput";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignStartHorizontal,
  AlignVerticalSpaceAround,
} from "lucide-react";
import DropdownInput from "./DropdownInput";
import ColorPickerInput from "./ColorPickerInput";
import useDrawingStatus from "@/store/store";
import RenderCanvasProperties from "@/app/utils/propertiesRender/render/RenderCanvasProperties";
import { changePosition } from "@/app/utils/propertiesRender/rectangle&Ellipse/changePosition";
import Angle from "@/app/customComponents/Icons/Angle";
import Radius from "@/app/customComponents/Icons/Radius";
import RenderRectangleProperties from "@/app/utils/propertiesRender/render/RenderRectangleProperties";
import RenderEllipseProperties from "@/app/utils/propertiesRender/render/RenderEllipseProperties";
export function useForceUpdate() {
  const [, setValue] = useState(0); // The state value itself isn't important

  return () => setValue((value) => value + 1); // Update the state value to trigger re-render
}
const PropertiesSideBarForm = () => {
  const forceUpdate = useForceUpdate();
  const clickedObject = useDrawingStatus((state) => state.clickedObject);
  const globalCanvas = useDrawingStatus((state) => state.globalCanvas);

  useEffect(() => {
    console.log("clickedObject", clickedObject);
    forceUpdate();
  }, [clickedObject]);

  if (clickedObject === null)
    return <RenderCanvasProperties globalCanvas={globalCanvas} />;

  const handlePositionpropertyChange = (
    value: number,
    propertyName: string
  ) => {
    if (clickedObject) {
      if (globalCanvas === null) return;
      changePosition(clickedObject.value, value, propertyName, globalCanvas);
      globalCanvas.renderAll();
    }
  };

  if (clickedObject.type === "rect") {
    return (
      <RenderRectangleProperties
        clickedObject={clickedObject}
        handlePositionpropertyChange={handlePositionpropertyChange}
      />
    );
  }
  if (clickedObject.type === "ellipse") {
    return (
      <RenderEllipseProperties
        clickedObject={clickedObject}
        handlePositionpropertyChange={handlePositionpropertyChange}
      />
    );
  }

  return (
    <div>
      <div className="flex flex-row justify-center items-center px-2 pb-3 gap-0">
        <Button className="w-8 h-8 hover:rounded-[2px] bg-background hover:bg-border text-black rounded-none p-0">
          <AlignHorizontalJustifyStart className="text-black w-4 h-4" />
        </Button>
        <Button className="w-8 h-8 hover:rounded-[2px] bg-background hover:bg-border text-black rounded-none p-0">
          <AlignHorizontalJustifyCenter className="text-black w-4 h-4" />
        </Button>
        <Button className="w-8 h-8 hover:rounded-[2px] bg-background hover:bg-border text-black rounded-none p-0">
          <AlignHorizontalJustifyEnd className="text-black w-4 h-4" />
        </Button>
        <Button className="w-8 h-8 hover:rounded-[2px] bg-background hover:bg-border text-black rounded-none p-0">
          <AlignStartHorizontal className="text-black w-4 h-4" />
        </Button>
        <Button className="w-8 h-8 hover:rounded-[2px] bg-background hover:bg-border text-black rounded-none p-0">
          <AlignHorizontalJustifyCenter className="text-black w-4 h-4" />
        </Button>
        <Button className="w-8 h-8 hover:rounded-[2px] bg-background hover:bg-border text-black rounded-none p-0">
          <AlignHorizontalJustifyEnd className="text-black w-4 h-4" />
        </Button>
        <Button className="w-8 h-8 hover:rounded-[2px] bg-background hover:bg-border text-black rounded-none p-0">
          <AlignVerticalSpaceAround className="text-black w-4 h-4" />
        </Button>
      </div>
      <Separator className="" />
      <div className="grid grid-cols-2 gap-y-2 px-4 py-3">
        {/* <PositionInput
          label={"Y"}
          data={500}
          propertyName="top"
          handleChange={() => {}}
        />
        <PositionInput
          label={"W"}
          data={500}
          propertyName="width"
          handleChange={() => {}}
        />
        <PositionInput
          label={"H"}
          data={500}
          propertyName="height"
          handleChange={() => {}}
        />
        <PositionInput
          label={}
          data={500}
          propertyName="angle"
          handleChange={() => {}}
        />
        <PositionInput
          label={}
          data={500}
          propertyName="angle"
          handleChange={() => {}}
        /> */}
      </div>

      <Separator className="" />
      <div className="px-4 py-3 text-sm font-bold">
        <h3>Layer</h3>
      </div>
      <div className="px-4 pb-3">
        <DropdownInput />
      </div>
      <Separator className="" />
      <div className="px-4 py-3  text-sm font-bold">
        <h3>Fill</h3>
      </div>
      <div className="px-4 pb-3">
        <ColorPickerInput
          label="Fill"
          value="{0o0000}"
          handleChange={() => {}}
        />
      </div>
      <Separator className="" />
      <div className="px-4 py-3  text-sm font-bold">
        <h3>Stroke</h3>
      </div>
      <div className="px-4 pb-3">
        <ColorPickerInput
          label="Fill"
          value="{0o0000}"
          handleChange={() => {}}
        />
      </div>
      <Separator className="" />
      <div className="px-4 py-3  text-sm font-bold">
        <h3>Effects</h3>
      </div>
      <div className="px-4 pb-3">
        <DropdownInput />
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

export default PropertiesSideBarForm;
