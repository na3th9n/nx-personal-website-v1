import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-12 px-6 py-16 sm:py-24">
      <Header />
      <div className="flex flex-col gap-12 divide-y divide-border [&>*+*]:pt-12">
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
      </div>
    </main>
  );
}
