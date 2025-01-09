import RevolverSlider from "./components/revolver-slider";

export default function Home() {
  return (
    <section className="w-1/2 min-h-screen p-8">
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-6xl tracking-tighter">
          Jo/Menu<sup>&trade;</sup>
        </h1>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl tracking-tighter">
            Brands. Sites. Products. Designed and Developed in-house.
          </h2>
          <div className="text-slate-500">
            We pair an AI-native approach with over 16 years experience shipping
            work for brands like <span className="text-black">Nike</span>,{" "}
            <span className="text-black">Samsung</span>,{" "}
            <span className="text-black">Achieve</span> and startups like{" "}
            <span className="text-black">Poolside</span>,{" "}
            <span className="text-black">Exa</span>, and{" "}
            <span className="text-black">Superintelligent</span>.
          </div>
        </div>
      </div>
      <RevolverSlider />
    </section>
  );
}
