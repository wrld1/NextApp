import Hero from "@/components/Hero";
import Converter from "./components/Converter";
import HistoryList from "./components/HistoryList";

export default async function ExchangePage() {
  return (
    <>
      <Hero />
      <section className="bg-[#F6F7FF] py-20">
        <div className="container bg-[#FFFFFF] flex flex-col mx-auto py-14 px-60">
          <Converter />
        </div>
      </section>
      <section className="bg-[#FFFFFF] py-20">
        <div className="container bg-[#F6F7FF] flex flex-col mx-auto py-14 px-60">
          <HistoryList />
        </div>
      </section>
    </>
  );
}
