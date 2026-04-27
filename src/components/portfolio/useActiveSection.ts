import { useEffect, useState } from "react";

export const useActiveSection = (ids: string[], offset = 96) => {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const compute = () => {
      const y = window.scrollY + offset + 1;
      let current = sections[0].id;
      for (const s of sections) {
        if (s.offsetTop <= y) current = s.id;
        else break;
      }
      // Snap to last when at bottom
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = sections[sections.length - 1].id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [ids, offset]);

  return active;
};

export default useActiveSection;
