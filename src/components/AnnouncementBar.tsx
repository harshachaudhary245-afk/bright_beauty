import { Link } from "@tanstack/react-router";

export function AnnouncementBar() {
  const items = [
    "Free UAE delivery on orders over AED 150",
    "Authentic products • Dermatologist trusted",
    "Same-day Dubai delivery available",
  ];
  return (
    <div className="bg-foreground text-background text-xs">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4">
        <div className="hidden gap-6 md:flex">
          {items.map((i) => (
            <span key={i} className="opacity-90">{i}</span>
          ))}
        </div>
        <div className="flex-1 truncate text-center md:hidden opacity-90">{items[0]}</div>
        <div className="hidden items-center gap-4 md:flex">
          <Link to="/contact" className="opacity-90 hover:opacity-100">Help</Link>
          <span className="opacity-50">|</span>
          <span className="opacity-90">EN • AED</span>
        </div>
      </div>
    </div>
  );
}
