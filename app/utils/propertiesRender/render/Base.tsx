import ColorPickerInput from "@/app/components/PropertiesSideBar/Form/ColorPickerInput";
import DropdownInput from "@/app/components/PropertiesSideBar/Form/DropdownInput";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-menubar";
import {
  AlignHorizontalJustifyStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignStartHorizontal,
  AlignVerticalSpaceAround,
} from "lucide-react";
import React from "react";

const Base1 = () => {
  return (
    <>
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
    </>
  );
};
const Base2 = () => {
  return (
    <>
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
    </>
  );
};

export { Base1, Base2 };
