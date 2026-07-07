import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="pt-24">
      <Header />
      <Hero />
      <Stats />
    </div>
  );
}