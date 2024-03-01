"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { useState } from "react";

interface props {
  label: React.ReactNode;
  data: number;
  propertyName: string;
  handleChange: (value: number, propertyName: string) => void;
}

const PositionInput = ({ label, data, handleChange, propertyName }: props) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [initialState, setInitialState] = useState<number>(data);
  const [state, setState] = useState<number>(data);
  return (
    <div
      className={`flex flex-row items-center border-2 rounded-[2px]  hover:border hover:border-muted-foreground hover:rounded-[2px] + ${
        selected === true ? " border-blue-500 " : "border-white"
      }`}
    >
      <label className="flex justify-center items-center text-xs text-muted-foreground pt-2 px-3 pb-[7px]">
        {label}
      </label>
      <input
        type="number"
        value={state}
        className="my-auto h-6 w-full max-w-16 text-xs focus:outline-none remove-arrow py-2 "
        onChange={(e) => setState(parseInt(e.target.value))}
        onFocus={() => {
          setSelected(true);
          setInitialState(state);
        }}
        onBlur={() => {
          setSelected(false);
          handleChange(state, propertyName);
        }}
      />
    </div>
  );
};

export default PositionInput;
