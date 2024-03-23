'use client'

import React, { useEffect } from 'react'

const ContextMenuDisable = ({children}:{children:React.ReactNode}) => {

useEffect(() => {
    
    const disableContextMenu = document.getElementsByClassName("context-menu-disable");
    const disableContextMenuFunc = (e:any) => {
        window.alert("Context Menu is disabled for this bar!");
        
        e.preventDefault();
    }
    for (let i = 0; i < disableContextMenu.length; i++) {
        
        disableContextMenu[i].addEventListener("contextmenu",disableContextMenuFunc );
    }
    
    return () => {
          
          for (let i = 0; i < disableContextMenu.length; i++) {
            
          disableContextMenu[i].removeEventListener("contextmenu", disableContextMenuFunc);
        }
      }
},[])




  return (
    <div className="context-menu-disable">{children}</div>
  )
}

export default ContextMenuDisable