import ActionButton from "@/components/ActionButton";
import React, { useState } from "react";
import HistoryListItem from "./HistoryListItem";

const HistoryList = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-[#1F1E3F] text-3xl">
          Історія конвертації
        </h3>
        <ActionButton style="primary" type="action">
          Очистити результат
        </ActionButton>
      </div>
      <div className="flex flex-wrap gap-x-12 gap-y-4 justify-between">
        <HistoryListItem />
        <HistoryListItem />
        <HistoryListItem />
        <HistoryListItem />
      </div>
    </div>
  );
};

export default HistoryList;
