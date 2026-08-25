import { useEffect, useRef, useState } from "react";

/**
 * Renders text that automatically scrolls horizontally when it overflows
 * its container, so long labels stay fully readable.
 */
export function MarqueeText({ text, className = "" }: { text: string; className?: string }) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    const measure = () => {
      const w = wrapRef.current;
      const t = textRef.current;
      if (!w || !t) return;
      setOverflow(t.scrollWidth > w.clientWidth + 1);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text]);

  return (
    <span ref={wrapRef} className={`relative block min-w-0 overflow-hidden whitespace-nowrap ${className}`}>
      <span ref={textRef} className={overflow ? "inline-block marquee-track" : "inline-block"}>
        {text}
        {overflow && <span aria-hidden="true" className="pl-6">{text}</span>}
      </span>
    </span>
  );
}
