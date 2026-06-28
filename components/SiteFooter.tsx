export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 lg:px-20 py-12 mt-auto border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-muted text-center">© {year} Lala Rukh</p>
      </div>
    </footer>
  );
}
