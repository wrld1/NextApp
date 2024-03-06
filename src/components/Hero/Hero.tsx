import Image from "next/image";
import ActionButton from "../ActionButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/Hero.png"
        alt="Hero image"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        width={1366}
        height={400}
        priority
      />
      <div className="relative z-10 px-60 pb-24 pt-20 mx-auto container flex justify-between items-center">
        <div className="flex flex-col gap-6 text-start">
          <h1 className="text-5xl font-bold text-white">Чіп Чендж</h1>
          <p className="text-xl text-gray-300 font-medium">
            Обмінник валют - навчальний
          </p>
          <ActionButton variant="link" style="secondary" href="/exchange">
            Конвертер валют
          </ActionButton>
        </div>
        <div>
          <Image
            src="/DebitCard.png"
            alt="Debit Card Example"
            width={341}
            height={216}
          />
        </div>
      </div>
    </section>
  );
}
