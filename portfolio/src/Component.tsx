import React from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect } from "react";

interface ProjectItem {
  name: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  thumbnail?: string;
}

interface SpinWheelProps {
  items: ProjectItem[];
  onProjectSelect: (project: ProjectItem) => void;
}

export default function SpinWheel({ items, onProjectSelect }: SpinWheelProps) {
  const wheelRef = useRef<HTMLDivElement>(null);
  const rotation = useMotionValue(0);
  const isDragging = useRef(false);
  const startRotation = useRef(0);
  const startY = useRef(0);
  const velocity = useRef(0);

  const radius = 180;
  const centerX = 200;
  const centerY = 200;

  const getSelectedProject = (currentRotation: number): ProjectItem => {
    const normalizedRotation = (currentRotation % 360 + 360) % 360;
    const segmentAngle = 360 / items.length;
    const pointerAngle = 270; // stânga
    const selectedIndex = Math.floor(((pointerAngle - normalizedRotation + 360) % 360) / segmentAngle) % items.length;
    return items[selectedIndex];
  };

  useEffect(() => {
    const unsubscribe = rotation.on("change", (value) => {
      if (!isDragging.current) {
        const selectedProject = getSelectedProject(value);
        onProjectSelect(selectedProject);
      }
    });

    return unsubscribe;
  }, [rotation, items, onProjectSelect]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startRotation.current = rotation.get();
    startY.current = e.clientY;
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging.current) return;
    
    const deltaY = startY.current - e.clientY;
    rotation.set(startRotation.current + deltaY * 2);
    
    velocity.current = deltaY;
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    const targetRotation = rotation.get() + velocity.current * 30;
    
    animate(rotation, targetRotation, {
      type: "tween",
      ease: "easeOut",
      duration: 2,
      onComplete: () => {
        const finalRotation = Math.round(rotation.get() / (360/items.length)) * (360/items.length);
        animate(rotation, finalRotation, { 
          duration: 0.5,
          onComplete: () => {
            const selectedProject = getSelectedProject(finalRotation);
            onProjectSelect(selectedProject);
          }
        });
      }
    });

    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerup", handlePointerUp);
  };

  const createSpiralEdge = (angle: number, spiralOffsetDeg: number) => {
    const startRad = (angle - 90) * Math.PI / 180;
    const x1 = centerX;
    const y1 = centerY;
    const x2 = centerX + radius * Math.cos(startRad);
    const y2 = centerY + radius * Math.sin(startRad);
    const control1Angle = angle + spiralOffsetDeg;
    const control1Rad = (control1Angle - 90) * Math.PI / 180;
    const c1x = centerX + radius * 0.5 * Math.cos(control1Rad);
    const c1y = centerY + radius * 0.5 * Math.sin(control1Rad);
    const control2Angle = angle + spiralOffsetDeg * 1.4;
    const control2Rad = (control2Angle - 90) * Math.PI / 180;
    const c2x = centerX + radius * 0.9 * Math.cos(control2Rad);
    const c2y = centerY + radius * 0.9 * Math.sin(control2Rad);
    return { x1, y1, c1x, c1y, c2x, c2y, x2, y2 };
  };

  const createSpiralSectorPath = (startAngle: number, endAngle: number, spiralOffsetDeg = 110) => {
    const edge1 = createSpiralEdge(startAngle, spiralOffsetDeg);
    const edge2 = createSpiralEdge(endAngle, -spiralOffsetDeg);
    const arcStartX = edge1.x2;
    const arcStartY = edge1.y2;
    const arcEndX = edge2.x2;
    const arcEndY = edge2.y2;
    return [
      `M ${edge1.x1} ${edge1.y1}`,
      `C ${edge1.c1x} ${edge1.c1y}, ${edge1.c2x} ${edge1.c2y}, ${edge1.x2} ${edge1.y2}`,
      `A ${radius} ${radius} 0 0 1 ${arcEndX} ${arcEndY}`,
      `C ${edge2.c2x} ${edge2.c2y}, ${edge2.c1x} ${edge2.c1y}, ${edge2.x1} ${edge2.y1}`,
      'Z'
    ].join(' ');
  };

  return (
    <div className="relative w-[400px] h-[400px] mx-auto my-8">
      <div className="absolute left-0 top-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-r-[24px] border-t-transparent border-b-transparent border-r-red-500 transform -translate-y-1/2 -translate-x-2 z-20"></div>
      
      <motion.div
        ref={wheelRef}
        className="absolute w-full h-full rounded-full top-0 left-0 origin-center cursor-grab active:cursor-grabbing"
        style={{ rotate: rotation }}
        onPointerDown={handlePointerDown}
      >
        <svg width="400" height="400" className="absolute top-0 left-0">
          {/* Desenăm segmentele cu margini spiralate */}
          {items.map((item, index) => {
            const startAngle = (360 / items.length) * index;
            const endAngle = (360 / items.length) * (index + 1);
            const midAngle = (startAngle + endAngle) / 2;
            const textRadius = radius * 0.5;
            const textRad = (midAngle - 90) * Math.PI / 180;
            const textX = centerX + textRadius * Math.cos(textRad);
            const textY = centerY + textRadius * Math.sin(textRad);
            const rotate = midAngle + 90;
            return (
              <g key={index}>
                <path
                  d={createSpiralSectorPath(startAngle, endAngle, 110)}
                  fill={index % 2 === 0 ? '#3b82f6' : '#1d4ed8'}
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text
                  x={textX}
                  y={textY}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontSize="16"
                  fill="#fff"
                  style={{ userSelect: 'none' }}
                  transform={`rotate(${rotate} ${textX} ${textY})`}
                >
                  {item.title}
                </text>
              </g>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
}