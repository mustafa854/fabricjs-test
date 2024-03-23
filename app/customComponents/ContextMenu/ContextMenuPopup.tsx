'use client'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { ScrollArea } from "@radix-ui/react-scroll-area"
  

import React, { useEffect } from 'react'

const ContextMenuPopup = ({children, contextMenuLinks}: {children: React.ReactNode, contextMenuLinks: any[]}) => {
  

  return (
    
      <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">

      <ScrollArea>
        {contextMenuLinks.map((link, index) => {
          if(link.primaryLabel){
            return <ContextMenuSub key={index}>
            <ContextMenuSubTrigger inset>{link.primaryLabel}</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              
              {
                link.options.map((option:{label:string, shortcut?:string}, index: number) => {
                  return <ContextMenuItem key={index}>
                  {option.label}
                  if{option.shortcut}{
                    
                  <ContextMenuShortcut>{option.shortcut}</ContextMenuShortcut>
                  }
                </ContextMenuItem>
                })
              }

              </ContextMenuSubContent>
          </ContextMenuSub>
          }else if(link.label===""){
            return <ContextMenuSeparator key={index}/>
          }else{
            return <ContextMenuItem key={index}>
            {link.label}
            <ContextMenuShortcut>{link.shortcut}</ContextMenuShortcut>
          </ContextMenuItem>
          }
})}
        </ScrollArea>
      </ContextMenuContent>
    </ContextMenu>
    

  )
}

export default ContextMenuPopup