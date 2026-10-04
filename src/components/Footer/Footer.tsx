import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10">
      <div className="wrap">
        <div className="flex flex-col gap-3 border-t border-line py-10 text-[0.78rem] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono">Next.js · TypeScript · Tailwind</span>
            <a
              href="#main"
              className="transition-colors duration-200 hover:text-dim"
            >
              Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
