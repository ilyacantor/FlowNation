export default function Hero({ image, height = "min-h-[70vh]", children }: { image: string; height?: string; children: React.ReactNode }) {
  return (
    <section
      className={`relative w-full ${height} overflow-hidden rounded-none`}
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
