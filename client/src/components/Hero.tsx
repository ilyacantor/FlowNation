export default function Hero({ image, children }: { image: string; children: React.ReactNode }) {
  const resolvedImage = new URL(`../assets/${image}`, import.meta.url).href;
  return (
    <section
      className="relative w-full bg-cover bg-center py-24 md:py-40 flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${resolvedImage})` }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 w-full px-6 max-w-6xl text-center">{children}</div>
    </section>
  );
}
