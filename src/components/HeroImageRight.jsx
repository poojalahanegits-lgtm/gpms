import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGE_DELAY = 3000;
export default function HeroRightImage({ rightImages }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rightImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rightImages.length]);

  return (
    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={rightImages[index]}
          alt={`Hero image ${index + 1}`}
          className="absolute inset-0 w-full h-full object-contain  md:object-contain md:object-top"
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const IMAGE_DELAY = 3000;

// export default function HeroRightImage({ rightImages }) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % rightImages.length);
//     }, IMAGE_DELAY);

//     return () => clearInterval(interval);
//   }, [rightImages.length]);

//   return (
//     <div className="relative w-full h-[450px] sm:h-[380px] lg:h-[450px]  rounded-2xl bg-transparent">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={index}
//           src={rightImages[index]}
//           alt={`Hero image ${index + 1}`}
//           className="absolute inset-0 w-full h-full object-cover"
//           // initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           // exit={{ opacity: 0, scale: 0.98 }}
//           transition={{
//             duration: 1,
//             ease: "easeInOut",
//           }}
//         />
//       </AnimatePresence>
//     </div>
//   );
// }
