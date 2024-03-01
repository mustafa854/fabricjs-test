import { create } from "zustand";

export interface selectedObjectType {
  key: string;
  value: fabric.Object;
  type: string;
}

export interface DrawingStatusProps {
  globalCanvas: fabric.Canvas | null;
  setGlobalCanvas: (canvas: fabric.Canvas | null) => void;
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
