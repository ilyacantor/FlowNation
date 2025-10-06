export default function Hero({ image, height = "min-h-[70vh]", children }: { image: string; height?: string; children: React.ReactNode }) {
  const path = image.startsWith("/") ? image : `/assets/${image}`;
  return (
    <section
      className={`relative w-full ${height} overflow-hidden rounded-none flex items-center justify-center text-center`}
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}${path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full px-6">{children}</div>
    </section>
  );
}
