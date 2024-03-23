"use client";
import Angle from "@/app/customComponents/Icons/Angle";
import ColorPickerInput from "@/app/customComponents/PropertiesSideBar/Form/ColorPickerInput";
import DropdownInput from "@/app/customComponents/PropertiesSideBar/Form/DropdownInput";
import PositionInput from "@/app/customComponents/PropertiesSideBar/Form/PositionInput";
import { Button } from "@/components/ui/button";
import useDrawingStatus, { selectedObjectType } from "@/store/store";
import { Separator } from "@radix-ui/react-menubar";
import {
  AlignHorizontalJustifyStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignStartHorizontal,
  AlignVerticalSpaceAround,
} from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { Base1, Base2 } from "./Base";

interface props {
  clickedObject: selectedObjectType;
  handlePositionpropertyChange: (value: number, propertyName: string) => void;
}
function useForceUpdate() {
  const [, setValue] = useState(0); // The state value itself isn't important

  return () => setValue((value) => value + 1); // Update the state value to trigger re-render
}
const RenderEllipseProperties = ({
  clickedObject,
  handlePositionpropertyChange,
}: props) => {
  const globalCanvas = useDrawingStatus((state) => state.globalCanvas);
  const forceUpdate = useForceUpdate();
  const [ellipsePositionProperties, setEllipsePositionProperties] =
    useState<any>([
      {
        label: "X",
        propertyName: "left",
        data: parseFloat(clickedObject.value.left!.toPrecision(3)),
        handleChange: handlePositionpropertyChange,
      },
      {
        label: "Y",
        propertyName: "top",
        data: parseFloat(clickedObject.value.top!.toPrecision(3)),
        handleChange: handlePositionpropertyChange,
      },
      {
        label: "W",
        propertyName: "rx",
        data: parseFloat(clickedObject.value.width!.toPrecision(3)),
        handleChange: handlePositionpropertyChange,
      },
      {
        label: "H",
        propertyName: "ry",
        data: parseFloat(clickedObject.value.height!.toPrecision(3)),
        handleChange: handlePositionpropertyChange,
      },
      {
        label: <Angle />,
        data: clickedObject.value.angle!,
        propertyName: "angle",
        handleChange: handlePositionpropertyChange,
      },
      // {
      //   label: <Radius />,
      //   data: clickedObject.value.rx,
      //   propertyName: "left",
      //   handleChange: handlePositionpropertyChange,
      // },
    ]);

  //   useEffect(() => {
  //     if (globalCanvas === null) return;
  //     console.log("changed1", ellipsePositionProperties);
  //     setEllipsePositionProperties((prevState) => {
  //       return prevState.map((item: any) => ({
  //         ...item,
  //         data: parseFloat(
  //           clickedObject.value.get(item.propertyName!)!.toPrecision(3)
  //         ),
  //       }));
  //     });
  //     console.log("changed2", ellipsePositionProperties);
  //   }, [clickedObject]);
  //   useEffect(() => {
  //     if (globalCanvas === null) return;

  //     setEllipsePositionProperties((prevState: any) => {
  //       console.log("prevState", prevState);
  //       const newState = prevState.map((item: any) => ({
  //         ...item,
  //         data: parseFloat(
  //           clickedObject.value.get(item.propertyName!)!.toPrecision(3)
  //         ),
  //       }));
  //       console.log("newState", newState);

  //       return newState;
  //     });
  //     console.log("changed2", ellipsePositionProperties);
  //     return () => forceUpdate();
  //   }, [clickedObject]);

  return (
    <div>
      <Base1 />
      <div className="grid grid-cols-2 gap-y-2 px-4 py-3">
        {ellipsePositionProperties.map((item: any, index: number) => (
          <PositionInput
            key={index + 1}
            label={item.label}
            data={item.data}
            propertyName={item.propertyName}
            handleChange={item.handleChange}
          />
        ))}
      </div>

      <Base2 />
    </div>
  );
};

export default RenderEllipseProperties;
