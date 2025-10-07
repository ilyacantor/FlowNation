export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="mt-24 border-t border-white/5">
      <div className="bg-footer-ribbon py-4">
        <div className="container flex flex-col items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-black md:flex-row">
          <span>© {year} FlowNation</span>
          <div className="flex items-center gap-6">
            <a href="#hero" className="transition hover:text-white">
              Flownation
            </a>
            <a href="#" className="transition hover:text-white">
              Support
            </a>
            <a href="#" className="transition hover:text-white">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
