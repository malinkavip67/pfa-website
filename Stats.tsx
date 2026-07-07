export default function Stats() {
  const stats = [
    { number: "25+", title: "Профессиональных игроков" },
    { number: "18", title: "Стран сотрудничества" },
    { number: "40+", title: "Успешных трансферов" },
    { number: "100%", title: "Индивидуальный подход" },
  ];

  return (
    <section className="bg-[#08111F] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
          >
            <h2 className="text-5xl font-black text-emerald-400">
              {item.number}
            </h2>

            <p className="mt-4 text-sm uppercase tracking-widest text-zinc-300">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}