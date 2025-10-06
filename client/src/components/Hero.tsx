export default function Hero({ image, children }: { image: string; children: React.ReactNode }) {
  const resolvedImage = new URL(`../assets/${image}`, import.meta.url).href;

  return (
    <section
      className={`relative w-full h-[100vh] flex items-center justify-center text-center overflow-hidden`}
      style={{
        backgroundImage: `url(${resolvedImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 w-full px-6">{children}</div>
    </section>
  );
}
