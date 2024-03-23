import React from "react";

interface ComponentHistoryItemProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  id: string;
  active: boolean;
}

const ComponentHistoryItem = ({ label, icon }: ComponentHistoryItemProps) => {
  return <div className="px-4 py-2 text-sm flex flex-row gap-2 items-center bg-background hover:bg-muted cursor-pointer">{icon}{label}</div>;
};

export default ComponentHistoryItem;
