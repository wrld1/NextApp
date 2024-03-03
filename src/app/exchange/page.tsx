import Hero from "@/components/Hero";
import ConverterSection from "./components/ConverterSection";

export default function ExchangePage() {
  return (
    <>
      <Hero />
      <section className="bg-[#F6F7FF] py-20">
        <div className="container bg-[#FFFFFF] flex flex-col mx-auto py-14 px-60">
          <h2 className="font-bold text-[#1F1E25] text-4xl">Конвертер валют</h2>
          <ConverterSection />
        </div>
      </section>
      <section className="bg-[#FFFFFF] py-20">
        <div className="container bg-[#F6F7FF] flex flex-col mx-auto py-14 px-60"></div>
      </section>
    </>
  );
}
