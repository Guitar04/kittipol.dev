export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-foreground/[0.03] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/60 text-sm">
              &copy; {currentYear} Kittipol. All rights reserved.
            </p>
            <p className="text-foreground/60 text-sm">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
