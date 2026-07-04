export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="mb-4 rounded-full border border-green-500 px-4 py-2 text-sm text-green-400">
          Premier Football Agency
        </span>

        <h1 className="mb-6 text-5xl font-extrabold md:text-7xl">
          PFA
        </h1>

        <h2 className="mb-6 max-w-3xl text-2xl font-semibold md:text-4xl">
          Developing Football Careers Worldwide
        </h2>

        <p className="mb-10 max-w-2xl text-lg text-gray-300">
          Professional football agency representing talented players,
          supporting career growth and connecting athletes with clubs
          around the world.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">

          <button className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-black transition hover:bg-green-400">
            Players
          </button>

          <button className="rounded-xl border border-green-500 px-8 py-4 font-semibold transition hover:bg-green-500 hover:text-black">
            Contact Us
          </button>

        </div>

      </section>
    </main>
  );
}