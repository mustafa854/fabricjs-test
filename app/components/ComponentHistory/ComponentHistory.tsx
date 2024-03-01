"use client";
import React, { useState } from "react";
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
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight, Menu,
  RectangleHorizontal,
} from "lucide-react";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const ComponentHistory = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const objectsHistory = useDrawingStatus((state) => state.objectsHistory);
  return (
    <div className="absolute left-0 top-0 z-50 ">
      <div className="fixed top-0 left-0">
        <div className="flex flex-row items-start">
          <ResizablePanelGroup
          direction="horizontal"
          className={`duration-500 transition ${isCollapsed ? "max-w-0" : "max-w-[510px]"}`}
        >
          <ResizablePanel className="bg-white min-w-[240px] max-w-[500px]">
            <div className="flex flex-col h-screen">
              <Collapsible
                className="border-b-2 border-muted"
                defaultOpen={true}
              >
                <CollapsibleTrigger className="px-4 my-2 text-sm font-bold flex flex-row items-center">
                  <div>Navigation</div>
                  <div className="ms-auto" onClick={()=>setIsCollapsed(true)}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </div></CollapsibleTrigger>
                <CollapsibleContent>
                  <ul>
                    <Link href={"/"}>
                      <li
                        className={
                          pathname === "/"
                            ? "hover:bg-muted pl-8 py-2 bg-muted text-sm flex flex-row gap-2 items-center font-semibold "
                            : "hover:bg-muted text-sm pl-8 py-2 flex flex-row gap-2  items-center"
                        }
                      >
                        <Check
                          size={12}
                          className={pathname === "/" ? "" : "invisible"}
                        />{" "}
                        <span>Home</span>
                      </li>
                    </Link>
                    <Link href={"/components"}>
                      <li
                        className={
                          pathname === "/components"
                            ? "hover:bg-muted pl-8 py-2 bg-muted text-sm flex font-semibold  flex-row gap-2 items-center"
                            : "text-sm hover:bg-muted pl-8 py-2 flex flex-row gap-2  items-center"
                        }
                      >
                        <Check
                          size={12}
                          className={
                            pathname === "/components" ? "" : "invisible"
                          }
                        />{" "}
                        <span>Components</span>
                      </li>
                    </Link>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
              <ScrollArea className="rounded-md ">
                {objectsHistory.map((object, index) => (
                  <ComponentHistoryItem
                    key={object.key}
                    label={object.key.slice(0, 15)}
                    icon={<RectangleHorizontal strokeWidth={1} size={16} />}
                    onClick={() => {}}
                    id={object.key}
                    active={false}
                  />
                ))}
              </ScrollArea>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="" />
          <ResizablePanel className="w-[200px] z-0 h-0"></ResizablePanel>
        </ResizablePanelGroup>
        
        {isCollapsed && <div className="bg-white p-2 border-border rounded-full cursor-pointer ml-2 mt-2" onClick={()=>setIsCollapsed(false)}><Menu /></div>}
      </div>
      </div>
      
    </div>
  );
};

export default ComponentHistory;
