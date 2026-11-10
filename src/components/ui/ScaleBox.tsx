"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  /** Largura de desenho, em px. O conteúdo é escalado para caber no contentor. */
  width: number;
  children: ReactNode;
  className?: string;
};

type Box = { scale: number; height: number; offset: number };

/**
 * Mantém a composição dos mocks fiel ao PDF em qualquer largura:
 * desenha a uma largura fixa e reduz proporcionalmente em ecrãs pequenos.
 */
export function ScaleBox({ width, children, className }: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<Box | null>(null);

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const update = () => {
      const available = outer.clientWidth;
      const scale = Math.min(1, available / width);
      setBox({
        scale,
        height: inner.offsetHeight * scale,
        offset: Math.max(0, (available - width * scale) / 2),
      });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(outer);
    observer.observe(inner);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div ref={outerRef} className={`relative ${className ?? ""}`} style={{ height: box?.height }}>
      <div
        ref={innerRef}
        style={{
          width,
          transform: `translateX(${box?.offset ?? 0}px) scale(${box?.scale ?? 1})`,
          transformOrigin: "top left",
          visibility: box ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
