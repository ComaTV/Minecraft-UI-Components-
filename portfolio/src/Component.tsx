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

  // Function to determine which project is at the top (selected)
  const getSelectedProject = (currentRotation: number): ProjectItem => {
    const normalizedRotation = (currentRotation % 360 + 360) % 360;
    const segmentAngle = 360 / items.length;
    const selectedIndex = Math.floor(((360 - normalizedRotation) + segmentAngle / 2) / segmentAngle) % items.length;
    return items[selectedIndex];
  };

  // Update selected project when rotation changes
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

  const createSectorPath = (startAngle: number, endAngle: number) => {
    const startRad = (startAngle - 90) * Math.PI / 180;
    const endRad = (endAngle - 90) * Math.PI / 180;
    
    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);
    
    const largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  return (
    <div className="relative w-[400px] h-[400px] mx-auto my-8">
      {/* Pointer */}
      <div className="absolute top-0 left-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[24px] border-l-transparent border-r-transparent border-b-red-500 transform -translate-x-1/2 -translate-y-2 z-20"></div>
      
      <motion.div
        ref={wheelRef}
        className="absolute w-full h-full rounded-full top-0 left-0 origin-center cursor-grab active:cursor-grabbing"
        style={{ rotate: rotation }}
        onPointerDown={handlePointerDown}
      >
        <svg width="400" height="400" className="absolute top-0 left-0">
          {items.map((item, index) => {
            const startAngle = (360 / items.length) * index;
            const endAngle = (360 / items.length) * (index + 1);
            
            return (
              <path
                key={index}
                d={createSectorPath(startAngle, endAngle)}
                fill={index % 2 === 0 ? '#3b82f6' : '#1d4ed8'}
                stroke="#ffffff"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* Text and emoji elements */}
        {items.map((item, index) => {
          const startAngle = (360 / items.length) * index;
          const endAngle = (360 / items.length) * (index + 1);
          const midAngle = (startAngle + endAngle) / 2;
          
          // Calculate positions for text and emoji
          const textRadius = radius * 0.75;
          const emojiRadius = radius * 0.45;
          
          const textX = centerX + textRadius * Math.cos((midAngle - 90) * Math.PI / 180);
          const textY = centerY + textRadius * Math.sin((midAngle - 90) * Math.PI / 180);
          const emojiX = centerX + emojiRadius * Math.cos((midAngle - 90) * Math.PI / 180);
          const emojiY = centerY + emojiRadius * Math.sin((midAngle - 90) * Math.PI / 180);
          
          return (
            <React.Fragment key={index}>
              {/* Project name */}
              <motion.div
                className="absolute pointer-events-none z-10"
                style={{
                  left: textX,
                  top: textY,
                  transform: 'translate(-50%, -50%)',
                  rotate: -rotation
                }}
              >
                <div className="text-white font-bold text-sm text-center whitespace-nowrap">
                  {item.name}
                </div>
              </motion.div>
              
              {/* Project emoji */}
              <motion.div
                className="absolute pointer-events-none z-10"
                style={{
                  left: emojiX,
                  top: emojiY,
                  transform: 'translate(-50%, -50%)',
                  rotate: -rotation
                }}
              >
                <div className="text-white text-xl">
                  {item.image}
                </div>
              </motion.div>
            </React.Fragment>
          );
        })}

        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-yellow-400 rounded-full border-4 border-yellow-600 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center shadow-lg">
          <div className="text-2xl">🎯</div>
        </div>
      </motion.div>
    </div>
  );
}