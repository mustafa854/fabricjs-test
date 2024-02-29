"use client";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import Link from "next/link";
import useDrawingStatus from "@/store/store";
import ComponentHistoryItem from "./ComponentHistoryItem";
import { RectangleHorizontal } from "lucide-react";
import  classNames  from 'classnames';
import { usePathname } from "next/navigation";

const ComponentHistory = () => {
    const pathname = usePathname()
    console.log(pathname)
    const objectsHistory = useDrawingStatus((state) => state.objectsHistory);
  return (
    <div className="absolute left-0 top-0 z-50">
      <div className="fixed top-0 left-0">
        <ResizablePanelGroup direction="horizontal" className="max-w-[510px]">
          <ResizablePanel className="bg-white min-w-[240px] max-w-[500px]">
            <div className="flex flex-col h-screen">
              <Collapsible className="border-b-2 border-muted" defaultOpen={true}>
                <CollapsibleTrigger className="px-4 my-2 font-bold">Navigation</CollapsibleTrigger>
                <CollapsibleContent>
                  <ul>
                    <li className={pathname==="/"? "hover:bg-muted pl-8 py-2 bg-muted": "hover:bg-muted pl-8 py-2"}>
                      <Link className="" href={"/"}>Home</Link>
                    </li>
                    <li className={pathname==="/components"? "hover:bg-muted pl-8 py-2 bg-muted": "hover:bg-muted pl-8 py-2"}>
                      <Link href={"/components"}>Components</Link>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
              <ScrollArea className="rounded-md ">
                {objectsHistory.map((object, index) =>(
                <ComponentHistoryItem
                  key={object.key}
                  label={object.key.slice(0,10)}
  icon={<RectangleHorizontal strokeWidth={1} size={16} />}
  onClick ={()=>{}}
  id={object.key}
  active={false}
                  
                  />
                )
                )}
              </ScrollArea>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="" />
          <ResizablePanel  className="w-[200px] z-0 h-0"></ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default ComponentHistory;
