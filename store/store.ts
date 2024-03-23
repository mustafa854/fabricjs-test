import { create } from "zustand";

export interface selectedObjectType {
  key: string;
  value: fabric.Object;
  type: string;
}


export interface ObjectShape{
  key: string;
  value: fabric.Object;
  type: string;
  canvas: fabric.Canvas;
  label: string;
  id: number;
}

export interface CanvasShape{
  key: string;
  value: fabric.Canvas;
  type: string;
  label: string;
  id: number;
  isGlobalCanvas: boolean;
  parentCanvas: fabric.Canvas | null;
}



export interface DrawingStatusProps {
  globalCanvas: fabric.Canvas | null;
  setGlobalCanvas: (canvas: fabric.Canvas | null) => void;

  activeCanvas: fabric.Canvas | null;                                       //Currently Active Canvas will be added here   
  setActiveCanvas: (canvas: fabric.Canvas | null) => void;

  allCanvasArray: fabric.Canvas[];                                          // All Canvas will be added here
  setAllCanvasArray: (canvasName:fabric.Canvas) => void;

  allCanvasObjects: { [key: string]: fabric.Object[] };                     // All the Objects on the specific Canvas will be added here in historical manner
  setAllCanvasObjects: (canvasName:string, object: fabric.Object) => void;

  globalCanvasContentArray: (fabric.Canvas | fabric.Object)[];            // All Canvases on the Global Canvas and All the Objects on the Canvas will be added here
  setGlobalCanvasContentArray: (canvasOrObjectName: fabric.Canvas | fabric.Object) => void;

  currentSelectedObjectsArray : selectedObjectType[];                     // All the Currently Selected Object Or Objects will be added here
  setCurrentSelectedObjectsArray : (object: selectedObjectType) => void;

  currentDrawingType: string | null;                                      // Current Drawing Type or Not Drawing(NULL) will be added here
  setCurrentDrawingType: (newType: string | null) => void;

  labelLast: {[key: string]: number};                                     // Last Label Number for each type of object will be added here
  setLabelLast: (label: string, last: number) => void;

  

  
  currentDrawingStatus: string | null;
  setCurrentDrawingStatus: (newStatus: string | null) => void;
  objectsHistory: selectedObjectType[] | [];
  setObjectsHistory: (object: selectedObjectType) => void;
  clickedObject: selectedObjectType | null;
  setClickedObject: (object: selectedObjectType | null) => void;
}

const useDrawingStatus = create<DrawingStatusProps>((set) => ({
  globalCanvas: null,
  setGlobalCanvas: (canvas: fabric.Canvas | null) => set({ globalCanvas: canvas }),
  
  activeCanvas: null,
  setActiveCanvas: (canvas: fabric.Canvas | null) => set({ activeCanvas: canvas }), // Add setActiveCanvas property

  allCanvasArray: [], // Add allCanvasArray property
  setAllCanvasArray: (canvasName: fabric.Canvas) => set((prevState) => ({ allCanvasArray: [...prevState.allCanvasArray, canvasName] })), // Add setAllCanvasArray property

  allCanvasObjects: {}, // Add allCanvasObjects property
  setAllCanvasObjects: (canvasName: string, object: fabric.Object) => 
  set((prevState)=>({allCanvasObjects: {...prevState.allCanvasObjects, [canvasName]: [...prevState.allCanvasObjects[canvasName], object]}})), // Add setAllCanvasObjects property

  globalCanvasContentArray: [], // Add globalCanvasContentArray property
  setGlobalCanvasContentArray: (canvasOrObjectName: fabric.Canvas | fabric.Object) => set((prevState) => ({ ...prevState, globalCanvasContentArray: [...prevState.globalCanvasContentArray, canvasOrObjectName] })), // Add setGlobalCanvasContentArray property
  

  currentSelectedObjectsArray: [], // Add currentSelectedObjectsArray property
  setCurrentSelectedObjectsArray: (object: selectedObjectType) => set((prevState)=>({...prevState, currentSelectedObjectsArray: [...prevState.currentSelectedObjectsArray, object] })), // Add setCurrentSelectedObjectsArray property

  currentDrawingType: null, // Add currentDrawingType property
  setCurrentDrawingType: (newType: string | null) => set({ currentDrawingType: newType }), // Add setCurrentDrawingType property

  labelLast: {rectangle: 1, ellipse: 1, },
  setLabelLast: (label: string, last: number) => set((prevState) => ({ labelLast: {...prevState.labelLast, [label]: last} })),
  /**
   * Old States
   * 
   */
  
  
  currentDrawingStatus: null,
  setCurrentDrawingStatus: (newStatus: string | null) =>
    set({ currentDrawingStatus: newStatus }),

  objectsHistory: [],
  setObjectsHistory: (object: selectedObjectType) =>
    set((state) => ({
      objectsHistory: [
        object,...state.objectsHistory,
        
      ]
    })),

  clickedObject: null,
  setClickedObject: (newObject: selectedObjectType | null) =>
    set({ clickedObject: newObject }),
}));

export default useDrawingStatus;
