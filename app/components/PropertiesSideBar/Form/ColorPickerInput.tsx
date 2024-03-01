"use client";

import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Eye, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ColorPicker from "react-best-gradient-color-picker";

interface props {
  label: string;
  value: string;
  handleChange: (value: string) => void;
}

const ColorPickerInput = ({ label, value, handleChange = () => {} }: props) => {
  const [selected, setSelected] = useState<boolean>(false);

  const [componentColor, setComponentColor] = useState(value);

  const [state, setState] = useState<string>(value);
  const [opacity, setOpacity] = useState("100%");

  return (
    <div className="flex flex-row justify-between items-center">
      <div
        className={`flex flex-row items-center border-2 rounded-[2px]  hover:border-2 hover:border-border hover:rounded-[2px] hover:divide-x-2 hover:divide-border + ${
          selected === true
            ? " border-blue-500 divide-x-2 divide-border"
            : "border-white divide-x-2 divide-white"
        }`}
      >
        <div className="flex flex-row items-center">
          <div className="px-2 py-[6px]  flex justify-center items-center">
            <Popover>
              <PopoverTrigger>
                <div
                  className={`w-4 my-auto h-4 bg-[${componentColor}] cursor-pointer border border-border`}
                ></div>{" "}
              </PopoverTrigger>
              <PopoverContent>
                <ColorPicker
                  value={componentColor}
                  onChange={setComponentColor}
                />
              </PopoverContent>
            </Popover>
          </div>
          <input
            type="text"
            value={state}
            className="h-full my-auto max-w-16 text-xs focus:outline-none remove-arrow py-2"
            onChange={(e) => setState(e.target.value)}
            onFocus={() => {
              setSelected(true);
            }}
            onBlur={() => {
              setSelected(false);
              handleChange(state);
            }}
          />
        </div>
        <input
          type="text"
          value={opacity}
          className="h-full my-auto max-w-12 text-xs focus:outline-none remove-arrow py-2 px-2"
          onChange={(e) => setOpacity(e.target.value)}
          onFocus={() => {
            setSelected(true);
          }}
          onBlur={() => {
            setSelected(false);
            handleChange(opacity);
          }}
        />
      </div>
      <div className="flex flex-row">
        <Button className="w-8 h-8 hover:rounded-[2px] bg-background hover:bg-border text-black rounded-none p-0">
          <Eye className="w-4 h-4 stroke-1" />
        </Button>
        <Button className="w-8 h-8 hover:rounded-[2px] bg-background hover:bg-border text-black rounded-none p-0">
          <Minus className="w-4 h-4 stroke-1" />
        </Button>
      </div>
    </div>
  );
};

export default ColorPickerInput;
