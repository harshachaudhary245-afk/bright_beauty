import { Link } from "@tanstack/react-router";
import { COLLECTIONS, BRANDS, SKIN_CONCERNS } from "@/lib/placeholder-data";

export function MegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  const shopBy = COLLECTIONS.slice(0, 6);
  const types = COLLECTIONS.slice(7, 12);

  return (
    <div className="grid grid-cols-4 gap-8 p-8">
      <div>
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Shop by concern
        </div>
        <ul className="space-y-2">
          {shopBy.map((c) => (
            <li key={c.handle}>
              <Link
                to="/collections/$handle"
                params={{ handle: c.handle }}
                onClick={onNavigate}
                className="text-sm text-foreground hover:text-primary"
              >
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Shop by category
        </div>
        <ul className="space-y-2">
          {types.map((c) => (
            <li key={c.handle}>
              <Link
                to="/collections/$handle"
                params={{ handle: c.handle }}
                onClick={onNavigate}
                className="text-sm text-foreground hover:text-primary"
              >
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Top brands
        </div>
        <ul className="space-y-2">
          {BRANDS.slice(0, 6).map((b) => (
            <li key={b.handle}>
              <Link
                to="/brands/$handle"
                params={{ handle: b.handle }}
                onClick={onNavigate}
                className="text-sm text-foreground hover:text-primary"
              >
                {b.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/brands"
              onClick={onNavigate}
              className="text-sm font-medium text-primary hover:underline"
            >
              View all brands →
            </Link>
          </li>
        </ul>
      </div>
      <div className="rounded-2xl bg-clinical p-5">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-clinical-foreground">
          Skin Quiz
        </div>
        <div className="mt-1 text-base font-semibold text-foreground">
          Find your perfect routine
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Answer 5 questions and get a personalised dermatologist-inspired routine.
        </p>
        <Link
          to="/routine-builder"
          onClick={onNavigate}
          className="mt-3 inline-flex h-9 items-center rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground"
        >
          Start the quiz
        </Link>
        <div className="mt-4 flex flex-wrap gap-2">
          {SKIN_CONCERNS.slice(0, 4).map((c) => (
            <Link
              key={c.handle}
              to="/concerns/$handle"
              params={{ handle: c.handle }}
              onClick={onNavigate}
              className="rounded-full bg-background px-2.5 py-1 text-[11px] text-foreground"
            >
              {c.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
