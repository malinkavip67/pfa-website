import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/stadium-hero.jpg"
        alt="Football Stadium"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[6px] text-green-400">
            PREMIER FOOTBALL AGENCY
          </p>

          <h1 className="mb-8 text-5xl font-black uppercase leading-none text-white lg:text-7xl">
            МЫ СОЗДАЕМ
            <br />
            ЧЕМПИОНОВ
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-8 text-gray-300">
            Мы сопровождаем профессиональных футболистов,
            заключаем контракты, организуем трансферы,
            защищаем интересы игроков и строим карьеру
            мирового уровня.
          </p>

          {/* Кнопки — вертикально на мобильных, горизонтально на больших */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
            <button className="rounded-xl bg-green-500 px-6 py-3 text-sm font-bold text-black transition duration-300 hover:bg-green-400 sm:px-10 sm:py-5 sm:text-base">
              Наши игроки
            </button>
            <button className="rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition duration-300 hover:border-green-500 hover:bg-green-500 hover:text-black sm:px-10 sm:py-5 sm:text-base">
              Связаться
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}