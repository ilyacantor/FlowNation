export default function Hero({ image, children }: { image: string; children: React.ReactNode }) {
  const resolvedImage = new URL(`../assets/${image}`, import.meta.url).href;
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center text-center text-white"
      style={{
        backgroundImage: `url(${resolvedImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-40">
        {children}
      </div>
    </section>
  );
}
