import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHandHoldingHeart } from "react-icons/fa"; // Example icon

const benefitBubbles = [
  {
    label: "Cultivates compassion and forgiveness, improving personal and professional connections.",
    short: "Stronger Relationships",
    bg: "bg-yellow-100",
    hoverBg: "bg-orange-100",
    height: "lg:h-[190px]",
    width: "lg:w-[190px]",
    top: "lg:top-[200px]",
    bottom: "bottom-0",
    icon: <FaHandHoldingHeart size={28} className="text-pink-400 mx-auto mb-2" />,
  },
  {
    label: "Enhances clarity and productivity by aligning your mind with your goals",
    short: "Improved Focus",
    bg: "bg-yellow-100",
    hoverBg: "bg-yellow-200",
    height: "lg:h-[300px]",
    width: "lg:w-[300px]",
        top: "top-0",
    bottom: "bottom-0",
    icon: <FaHandHoldingHeart size={28} className="text-yellow-400 mx-auto mb-2" />,
  },
  {
    label: "Builds emotional strength and adaptability by fostering gratitude and releasing negativity.",
    short: "Increased Resilience",
    bg: "bg-yellow-100",
    hoverBg: "bg-green-100",
        height: "lg:h-[180px]",
    width: "lg:w-[180px]",
        top: "lg:top-[150px]",
    bottom: "bottom-0",
    icon: <FaHandHoldingHeart size={28} className="text-green-400 mx-auto mb-2" />,
  },
  {
    label: "Reduce stress, anxiety, negative emotions while staying positive",
    short: "Emotional Health",
    bg: "bg-yellow-100",
    hoverBg: "bg-pink-100",
        height: "lg:h-[240px]",
    width: "lg:w-[240px]",
        top: "top-0",
    bottom: "bottom-0",
    icon: <FaHandHoldingHeart size={28} className="text-pink-300 mx-auto mb-2" />,
  },
];

const sizes = [
  "w-28 h-28 md:w-40 md:h-40",  // Made sizes more consistent
  "w-32 h-32 md:w-44 md:h-44",
  "w-28 h-28 md:w-40 md:h-40",
  "w-32 h-32 md:w-44 md:h-44",
];




export default function TherapyBubbles() {
  const [hovered, setHovered] = useState(null);

  return (
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 py-10 max-w-6xl mx-auto px-4">
      {benefitBubbles.map((bubble, i) => (
        <motion.button
          key={i}
          type="button"
          tabIndex={0}
          aria-label={bubble.short}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", duration: 0.4 }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered(i)}
          onBlur={() => setHovered(null)}
          className={`
            w-48 h-48 md:w-52 md:h-52 ${bubble.bg}
            rounded-full flex flex-col items-center justify-center shadow-lg
            text-center font-medium
             overflow-hidden
            transition-colors duration-500 ease-in-out
            outline-none focus:ring-2 focus:ring-yellow-400
            cursor-pointer mx-auto
            lg:relative

          ${bubble.height} ${bubble.width} 
            ${bubble.top}
            ${sizes[i % sizes.length]}
            ${bubble.bg} md:hover:${bubble.hoverBg}
          `}
        >
          <AnimatePresence initial={false} mode="wait">
            {hovered === i ? (
              <motion.div
                key="hover"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className={`absolute inset-0 flex flex-col items-center justify-center ${bubble.hoverBg} rounded-full p-6`}
              >
                {/* {bubble.icon} */}
                <span className="font-semibold text-lg mb-2">Try Now</span>
                <span className="text-sm px-3 line-clamp-3">{bubble.label}</span>
              </motion.div>
            ) : (
              <motion.span
                key="default"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="z-10 p-4 text-lg"
              >
                {bubble.short}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      ))}
    </div>
  );
}


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaHandHoldingHeart } from "react-icons/fa"; // Example icon

// const benefitBubbles = [
//   {
//     label: "Cultivates compassion and forgiveness, improving personal and professional connections.",
//     short: "Stronger Relationships",
//     bg: "bg-yellow-100",
//     hoverBg: "bg-orange-100",
//     height: "h-[100px]",
//     width: "w-[100px]",
//     icon: <FaHandHoldingHeart size={28} className="text-pink-400 mx-auto mb-2" />,
//   },
//   {
//     label: "Enhances clarity and productivity by aligning your mind with your goals",
//     short: "Improved Focus",
//     bg: "bg-yellow-100",
//     hoverBg: "bg-yellow-200",
//     height: "h-[100px]",
//     width: "w-[100px]",
//     icon: <FaHandHoldingHeart size={28} className="text-yellow-400 mx-auto mb-2" />,
//   },
//   {
//     label: "Builds emotional strength and adaptability by fostering gratitude and releasing negativity.",
//     short: "Increased Resilience",
//     bg: "bg-yellow-100",
//     hoverBg: "bg-green-100",
//         height: "h-[100px]",
//     width: "w-[100px]",
//     icon: <FaHandHoldingHeart size={28} className="text-green-400 mx-auto mb-2" />,
//   },
//   {
//     label: "Reduce stress, anxiety, negative emotions while staying positive",
//     short: "Emotional Health",
//     bg: "bg-yellow-100",
//     hoverBg: "bg-pink-100",
//         height: "h-[100px]",
//     width: "w-[100px]",
//     icon: <FaHandHoldingHeart size={28} className="text-pink-300 mx-auto mb-2" />,
//   },
// ];

// const sizes = [
//   "w-28 h-28 md:w-40 md:h-40",  // Made sizes more consistent
//   "w-32 h-32 md:w-44 md:h-44",
//   "w-28 h-28 md:w-40 md:h-40",
//   "w-32 h-32 md:w-44 md:h-44",
// ];




// export default function TherapyBubbles() {
//   const [hovered, setHovered] = useState(null);

//   return (
// <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 py-10 max-w-6xl mx-auto px-4">
//       {benefitBubbles.map((bubble, i) => (
//         <motion.button
//           key={i}
//           type="button"
//           tabIndex={0}
//           aria-label={bubble.short}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           transition={{ type: "spring", duration: 0.4 }}
//           onMouseEnter={() => setHovered(i)}
//           onMouseLeave={() => setHovered(null)}
//           onFocus={() => setHovered(i)}
//           onBlur={() => setHovered(null)}
//           className={`
//           ${bubble.bg}

//           md:w-52 md:h-52       w-48 h-48
//             rounded-full flex flex-col items-center justify-center shadow-lg
//             text-center font-medium
//             relative overflow-hidden
//             transition-colors duration-500 ease-in-out
//             outline-none focus:ring-2 focus:ring-yellow-400
//             cursor-pointer mx-auto
//           `}
//         >
//           <AnimatePresence initial={false} mode="wait">
//             {hovered === i ? (
//               <motion.div
//                 key="hover"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.35 }}
//                 className={`relative inset-0 flex flex-col items-center justify-center ${bubble.hoverBg} rounded-full p-6`}
//               >
//                 {bubble.icon}
//                 <span className="font-semibold text-lg mb-2">Try Now</span>
//                 <span className="text-sm px-3 line-clamp-3">{bubble.label}</span>
//               </motion.div>
//             ) : (
//               <motion.span
//                 key="default"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.35 }}
//                 className="z-10 p-4 text-lg"
//               >
//                 {bubble.short}
//               </motion.span>
//             )}
//           </AnimatePresence>
//         </motion.button>
//       ))}
//     </div>
//   );
// }


