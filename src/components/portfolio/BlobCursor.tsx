import { useEffect, useRef } from "react";

export const BlobCursor = () => {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Skip on touch / coarse pointer devices
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (reduced || coarse) {
      document.body.style.cursor = "auto";
      return;
    }

    const r = ring.current, d = dot.current;
    if (!r || !d) return;

    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let tx = x, ty = y;
    let dx = x, dy = y;
    let raf = 0;
    let visible = false;

    const show = () => {
      if (visible) return;
      visible = true;
      r.style.opacity = "1";
      d.style.opacity = "1";
    };
    const hide = () => {
      visible = false;
      r.style.opacity = "0";
      d.style.opacity = "0";
    };

    const move = (e: MouseEvent) => {
      show();
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

    // Hide on keyboard focus / window blur so focus rings stay visible
    const onKey = (e: KeyboardEvent) => { if (e.key === "Tab") hide(); };
    const onBlur = () => hide();
    // Detect first touch — disable entirely
    const onTouch = () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      hide();
      document.body.style.cursor = "auto";
      window.removeEventListener("touchstart", onTouch);
    };

    r.style.opacity = "0";
    d.style.opacity = "0";
    r.style.transition = (r.style.transition || "") + ", opacity .2s ease";
    d.style.transition = "opacity .2s ease";

    window.addEventListener("mousemove", move);
    window.addEventListener("keydown", onKey);
    window.addEventListener("blur", onBlur);
    window.addEventListener("touchstart", onTouch, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("touchstart", onTouch);
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
