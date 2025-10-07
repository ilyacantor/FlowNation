export default function Hero({ image, children }: { image: string; children: React.ReactNode }) {
  const resolvedImage = new URL(`../assets/${image}`, import.meta.url).href;
  console.log('Hero component mounted with image:', image);
  console.log("Hero resolved image:", resolvedImage);
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center bg-cover bg-center overflow-hidden py-32 md:py-48"
      style={{
        backgroundImage: `url(${resolvedImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 px-6 md:px-12 text-center max-w-4xl space-y-6">{children}</div>
    </section>
  );
}
