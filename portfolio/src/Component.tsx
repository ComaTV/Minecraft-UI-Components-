import { motion, useMotionValue, animate } from "framer-motion";
import { useRef } from "react";

export default function SpinWheel({ items }: { items: { name: string; thumbnail?: string }[] }) {
  const wheelRef = useRef<HTMLDivElement>(null);
  const rotation = useMotionValue(0);
  const isDragging = useRef(false);
  const startRotation = useRef(0);
  const startY = useRef(0);
  const velocity = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startRotation.current = rotation.get();
    startY.current = e.clientY;
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging.current) return;
    
    // Calculăm diferența de poziție verticală
    const deltaY = startY.current - e.clientY;
    // Actualizăm rotația proporțional cu mișcarea mouse-ului
    rotation.set(startRotation.current + deltaY * 2);
    
    // Calculăm viteza pentru inerție
    velocity.current = deltaY;
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    // Aplicăm inerție
    const targetRotation = rotation.get() + velocity.current * 30;
    
    animate(rotation, targetRotation, {
      type: "tween",
      ease: "easeOut",
      duration: 2,
      onComplete: () => {
        // Ajustare finală pentru a alinia cu un segment
        const finalRotation = Math.round(rotation.get() / (360/items.length)) * (360/items.length);
        animate(rotation, finalRotation, { duration: 0.5 });
      }
    });

    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerup", handlePointerUp);
  };

  return (
    <div className="relative w-[400px] h-[400px] mx-auto my-8">
      {/* Indicator (săgeată) */}
      <div className="absolute top-0 left-1/2 w-6 h-12 bg-black transform -translate-x-1/2 -translate-y-4 z-10 clip-triangle"></div>
      
      {/* Roata principală */}
      <motion.div
        ref={wheelRef}
        className="absolute w-full h-full rounded-full top-0 left-0 origin-center cursor-grab active:cursor-grabbing"
        style={{ rotate: rotation }}
        onPointerDown={handlePointerDown}
      >
        {/* Segmentele roții */}
        {items.map((item, index) => {
          const angle = (360 / items.length) * index;
          const radius = 150;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={index}
              className={`absolute w-[100px] h-[100px] rounded-full flex items-center justify-center text-center font-bold pointer-events-none ${
                index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'
              }`}
              style={{
                top: `${200 + y - 50}px`,
                left: `${200 + x - 50}px`,
                transform: `rotate(${angle}deg)`,
                border: '2px solid white'
              }}
            >
              <span className="transform -rotate-90">{item.name}</span>
            </div>
          );
        })}

        {/* Centrul roții */}
        <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-yellow-400 rounded-full border-4 border-yellow-600 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
      </motion.div>
    </div>
  );
}

// Adăugăm CSS pentru triunghiul indicator
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    .clip-triangle {
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
  `;
  document.head.appendChild(style);
}