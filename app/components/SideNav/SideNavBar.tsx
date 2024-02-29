"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import classNames from "classnames";

import React, { useEffect } from "react";

type props = {
  currentDrawingStatus: string | null;
  setCurrentDrawingStatus: (status: string | null) => void;
};

const SideNavBar = ({
  currentDrawingStatus,
  setCurrentDrawingStatus,
}: props) => {
  //   useEffect(() => {
  //     console.log(currentDrawingStatus);
  //   }, [currentDrawingStatus]);

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger
          className={classNames({
            "bg-accent text-accent-foreground":
              currentDrawingStatus === "rectangle" ||
              currentDrawingStatus === "line" ||
              currentDrawingStatus === "arrow" ||
              currentDrawingStatus === "ellipse" ||
              currentDrawingStatus === "polygon" ||
              currentDrawingStatus === "star" ||
              currentDrawingStatus === "image",
          })}
        >
          Draw
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            className={classNames({
              "bg-accent text-accent-foreground":
                currentDrawingStatus === "rectangle",
            })}
            onSelect={() => {
              setCurrentDrawingStatus("rectangle");
            }}
          >
            Rectangle <MenubarShortcut>R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem
            className={classNames({
              "bg-accent text-accent-foreground":
                currentDrawingStatus === "line",
            })}
            onSelect={() => {
              setCurrentDrawingStatus("line");
            }}
          >
            Line
          </MenubarItem>
          {/* <MenubarItem
            className={classNames({
              "bg-accent text-accent-foreground":
                currentDrawingStatus === "arrow",
            })}
            onSelect={() => {
              setCurrentDrawingStatus("arrow");
            }}
          >
            Arrow
          </MenubarItem> */}
          <MenubarItem
            className={classNames({
              "bg-accent text-accent-foreground":
                currentDrawingStatus === "ellipse",
            })}
            onSelect={() => {
              setCurrentDrawingStatus("ellipse");
            }}
          >
            Ellipse
          </MenubarItem>
          <MenubarItem
            className={classNames({
              "bg-accent text-accent-foreground":
                currentDrawingStatus === "polygon",
            })}
            onSelect={() => {
              setCurrentDrawingStatus("polygon");
            }}
          >
            Polygon
          </MenubarItem>
          {/* <MenubarItem
            className={classNames({
              "bg-accent text-accent-foreground":
                currentDrawingStatus === "star",
            })}
            onSelect={() => {
              setCurrentDrawingStatus("star");
            }}
          >
            Star
          </MenubarItem> */}
          <MenubarItem
            className={classNames({
              "bg-accent text-accent-foreground":
                currentDrawingStatus === "image",
            })}
            onSelect={() => {
              setCurrentDrawingStatus("image");
            }}
          >
            Place Image/Video
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          className={classNames({
            "bg-accent text-accent-foreground":
              currentDrawingStatus === "freeDraw",
          })}
          onClick={() => {
            setCurrentDrawingStatus("freeDraw");
          }}
        >
          Free Draw
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          className={classNames({
            "bg-accent text-accent-foreground": currentDrawingStatus === "text",
          })}
          onClick={() => {
            setCurrentDrawingStatus("text");
          }}
        >
          Text
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default SideNavBar;
