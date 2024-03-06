"use client";

import ActionButton from "@/components/ActionButton";
import React from "react";
import HistoryListItem from "./HistoryListItem";
import { useConverter } from "@/app/_stores/converter.store";

const HistoryList = () => {
  const { exchangeHistory, clearExchangeHistory } = useConverter();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-[#1F1E3F] text-3xl">
          Історія конвертації
        </h3>
        <ActionButton
          style="primary"
          variant="action"
          onClick={clearExchangeHistory}
        >
          Очистити результат
        </ActionButton>
      </div>
      <div className="flex flex-wrap gap-x-12 gap-y-4 justify-between">
        {exchangeHistory.map((item) => (
          <HistoryListItem
            key={item.id}
            date={item.date}
            sellAmount={item.sellAmount}
            buyAmount={item.buyAmount}
            sellCurrency={item.sellCurrency}
            buyCurrency={item.buyCurrency}
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryList;
