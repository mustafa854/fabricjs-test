import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CommandInput, CommandEmpty, CommandGroup, CommandItem } from "cmdk"
import { Command, CheckIcon, Scroll } from "lucide-react"
import { useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@radix-ui/react-scroll-area"
const dropdownInput = [
    {
        label: "Pass through",
        value: "passthrough"
    },
    {
        label: "Normal",
        value: "Normal"
    },
    {
        label:"",
        value:""
    },
    {
        label:"darken",
        value:"darken"
    },
    {
        label:"multiply",
        value:"multiply"
    },
    {
        label:"Plus Darker",
        value:"plusdarker"
    },
    {
        label:"Color Burn",
        value:"colorburn"
    },
    {
        label:"",
        value:""
    },
    {
        label:"Lighten",
        value:"lighten"
    },
    {
        label:"Screen",
        value:"screen"
    },
    {
        label:"Plus Lighter",
        value:"pluslighter"
    },
    {
        label:"Dodger",
        value:"dodger"
    },
    {
        label:"",
        value:""
    },
    {
        label:"Overlay",
        value:"overlay"
    },
    {
        label:"Soft Light",
        value:"softlight"
    },
    {
        label:"Hard Light",
        value:"hardlight"
    },
]


const DropdownInput = () => {

  return (<>

<DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button
          variant="outline"
          role="combobox"
          
          className="w-[200px] justify-between"
        >
          Select input...
            <><svg className="ml-2 h-4 w-4 shrink-0 opacity-50" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 15 15">
    <path fill="currentColor" fillRule="evenodd" d="M4.932 5.432a.45.45 0 1 0 .636.636L7.5 4.136l1.932 1.932a.45.45 0 0 0 .636-.636l-2.25-2.25a.45.45 0 0 0-.636 0l-2.25 2.25Zm5.136 4.136a.45.45 0 0 0-.636-.636L7.5 10.864L5.568 8.932a.45.45 0 0 0-.636.636l2.25 2.25a.45.45 0 0 0 .636 0l2.25-2.25Z" clipRule="evenodd"/>
</svg></>
          
        </Button>
      </DropdownMenuTrigger>
        
      <DropdownMenuContent className="w-56">
        
        <DropdownMenuGroup>
        <ScrollArea className="">
            {dropdownInput.map((input, index) => {
                if(input.label===""){
                    return <DropdownMenuSeparator key={index} />
                }
                return <DropdownMenuItem key={index}>{input.label}</DropdownMenuItem>
            })}
          </ScrollArea>
        </DropdownMenuGroup>
        
        
      </DropdownMenuContent>
      
    </DropdownMenu>





    {/* <Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild><Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? dropdownInput.find((input) => input.value === value)?.label
            : "Select input..."}
            <><svg className="ml-2 h-4 w-4 shrink-0 opacity-50" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 15 15">
    <path fill="currentColor" fillRule="evenodd" d="M4.932 5.432a.45.45 0 1 0 .636.636L7.5 4.136l1.932 1.932a.45.45 0 0 0 .636-.636l-2.25-2.25a.45.45 0 0 0-.636 0l-2.25 2.25Zm5.136 4.136a.45.45 0 0 0-.636-.636L7.5 10.864L5.568 8.932a.45.45 0 0 0-.636.636l2.25 2.25a.45.45 0 0 0 .636 0l2.25-2.25Z" clipRule="evenodd"/>
</svg></>
          
        </Button></PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
        <Command>
          
            {dropdownInput.map((input) => (
              <CommandItem
                key={input.value}
                value={input.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {input.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === input.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          
        </Command>
      </PopoverContent>
</Popover> */}
  </>)
}

export default DropdownInput