import { DateObject } from "@/types/IDateObject";
import React, { useState } from "react";
import { ArrowRight } from "react-feather";

type HistoryListItemProps = {
  date: DateObject;
  sellAmount: number;
  buyAmount: number;
  sellCurrency: string;
  buyCurrency: string;
};

const HistoryListItem: React.FC<HistoryListItemProps> = ({
  date,
  sellAmount,
  buyAmount,
  sellCurrency,
  buyCurrency,
}) => {
  return (
    <div className="bg-[#FFFFFF] p-4 min-w-[392px] flex gap-5 items-center justify-between">
      <span className="text-[#C1C2CA] text-lg flex-grow">
        {`${date.day}.${date.month}.${date.year}`}
      </span>
      <span className="text-[#707C87] text-lg font-semibold flex-grow">
        {sellAmount} {sellCurrency}
      </span>
      <ArrowRight className="text-[#707C87]" />
      <span className="text-[#707C87] text-lg font-semibold flex-grow">
        {buyAmount} {buyCurrency}
      </span>
    </div>
  );
};

export default HistoryListItem;
