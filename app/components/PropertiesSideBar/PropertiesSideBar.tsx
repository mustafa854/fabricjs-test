"use client";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import * as Tabs from "@radix-ui/react-tabs";
import useDrawingStatus from "@/store/store";
import PropertiesSideBarForm from "./Form/PropertiesSideBarForm";
import { Separator } from "@/components/ui/separator";

const PropertiesSideBar = () => {
  const clickedObject = useDrawingStatus((state) => state.clickedObject);

  return (
    <div className="absolute top-0 right-0  z-50">
      <div className="fixed top-0 right-0 bg-white">
        <ScrollArea className="h-screen w-[240px] border-l">
          <Tabs.Root defaultValue="tab1" orientation="vertical">
            <Tabs.List aria-label="tabs example" className="">
              <Tabs.Trigger value="tab1" className="px-4 my-2 tabsTrigger">
                Design
              </Tabs.Trigger>
              <Tabs.Trigger value="tab2" className="px-4 my-2 tabsTrigger">
                Prototype
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1" className="">
              <PropertiesSideBarForm />
            </Tabs.Content>
            <Tabs.Content value="tab2" className="">
              Protoype goes here
            </Tabs.Content>
          </Tabs.Root>
        </ScrollArea>
      </div>
    </div>
  );
};

export default PropertiesSideBar;
