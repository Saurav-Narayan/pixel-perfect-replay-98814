import { useEffect, useState } from "react";

const ids = ["hero", "about", "how", "learn", "faq", "feedback"];

export function DotNav() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return (
    <nav aria-hidden className="glass fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 rounded-full px-2 py-4 lg:flex">
      {ids.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          tabIndex={-1}
          className={`block w-1.5 rounded-full transition-all ${active === id ? "h-6 bg-primary" : "h-1.5 bg-muted-foreground/40 hover:bg-lime"}`}
        />
      ))}
    </nav>
  );
}
