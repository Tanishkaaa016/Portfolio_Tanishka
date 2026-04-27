import { useEffect, useRef } from "react";

export const BlobCursor = () => {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const r = ring.current, d = dot.current;
    if (!r || !d) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let tx = x, ty = y;
    let dx = x, dy = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      dx = e.clientX; dy = e.clientY;
      const t = e.target as HTMLElement | null;
      if (t && t.closest("a, button, [data-cursor='hover']")) r.classList.add("is-hover");
      else r.classList.remove("is-hover");
    };
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      r.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      d.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="blob-cursor" aria-hidden="true" />
      <div ref={dot} className="blob-dot" aria-hidden="true" />
    </>
  );
};

export default BlobCursor;
