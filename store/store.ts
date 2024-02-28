import { create } from "zustand";

export interface DrawingStatusProps {
  currentDrawingStatus: string | null;
  setCurrentDrawingStatus: (newStatus: string | null) => void;
}

const useDrawingStatus = create<DrawingStatusProps>((set) => ({
  currentDrawingStatus: null,
  setCurrentDrawingStatus: (newStatus: string | null) =>
    set({ currentDrawingStatus: newStatus }),
}));

export default useDrawingStatus;
