import ActionButton from "@/components/ActionButton";
import Hero from "@/components/Hero";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Hero />
      <section className="flex container mx-auto gap-12 py-[120px] px-60 justify-between">
        <div className="flex flex-col gap-7 w-1/3">
          <h2 className="font-bold text-4xl text-[#1F1E25]">Конвертер валют</h2>
          <p className="text-xl text=[#707C87]">
            Переважна діяльність банківської групи за останні чотири звітні
            квартали становить 50 і більше відсотків.
          </p>
          <ActionButton variant="link" style="primary" href="/exchange">
            Конвертувати валюту
          </ActionButton>
        </div>
        <Image
          src="/CardInHands.png"
          alt="Exchange Currency"
          className="rounded"
          width={436}
          height={314}
        />
      </section>
    </>
  );
}
