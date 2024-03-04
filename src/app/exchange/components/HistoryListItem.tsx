import React, { useState } from "react";
import { ArrowRight } from "react-feather";

const HistoryListItem = () => {
  return (
    <div className="bg-[#FFFFFF] p-4 min-w-[392px] flex gap-5 items-center">
      <span className="text-[#C1C2CA] text-lg">25.11.2020</span>
      <span className="text-[#707C87] text-lg font-semibold">1000 UAH</span>
      <ArrowRight className="text-[#707C87]" />
      <span className="text-[#707C87] text-lg font-semibold">36,65 USD</span>
    </div>
  );
};

export default HistoryListItem;
