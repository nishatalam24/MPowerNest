import { useState } from "react";
import { motion } from "framer-motion";

const catalogCards = [
  {
    text: "Are you a Professional or an Entrepreneur looking to improve focus, productivity, and goal-setting abilities?",
    base: "bg-[#67D392]",
    hover: "bg-[#67D392]",
    container: "bg-[#67D392]",
  },
  {
    text: "Are you a Student or in the learning discipline who want to build mental clarity, resilience, and emotional intelligence?",
    base: "bg-[#EAF475]",
    hover: "bg-[#EAF475]",
    container: "bg-[#EAF475]",
  },
  {
    text: "Are you a Parent or a Caregiver who need to cultivate patience, compassion, and inner calm amidst demanding responsibilities?",
    base: "bg-[#A0D8E1]",
    hover: "bg-[#A0D8E1]",
    container: "bg-[#A0D8E1]",
  },
  {
    text: "Are you a Spiritual person seeking deeper connection with your inner selves or a higher consciousness?",
    base: "bg-[#EAB8FF]",
    hover: "bg-[#EAB8FF]",
    container: "bg-[#EAB8FF]",
  },
  {
    text: "Are you a Personal Growth Enthusiast who enjoy practices like gratitude journaling, visualization or mindfulness practice?",
    base: "bg-[#EAF475]",
    hover: "bg-[#EAF475]",
    container: "bg-[#EAF475]",
  },
  {
    text: "Are you an Individual whose experiencing Stress or Anxiety and looking for a practical method to reduce negative emotions and promote mindfulness?",
    base: "bg-[#FFB8B2]",
    hover: "bg-[#FFB8B2]",
    container: "bg-[#FFB8B2]",
  },
  {
    text: "Are you a beginner and intimidated by traditional meditation?",
    base: "bg-[#A0D8E1]",
    hover: "bg-[#A0D8E1]",
    container: "bg-[#A0D8E1]",
  },
];

export default function CatalogCardsWithDynamicBg() {
  const [containerBg, setContainerBg] = useState("");

  return (


 <div className={`flex flex-col items-center py-10 px-4 min-h-screen rounded-xl transition-colors duration-500 ${containerBg}`}>
      {/* Heading moved inside container */}
      <div className="w-full text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Who Can Benefit from this?
        </h2>
      </div>

      {/* Cards container */}
      <div className="flex flex-wrap gap-[50px] justify-center w-full">
        {catalogCards.map((card, idx) => (
          <motion.div
            key={idx}
            onMouseEnter={() => setContainerBg(card.container)}
            onMouseLeave={() => setContainerBg("#ffff")}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.35 }}
            className={`min-w-[300px] max-w-xl w-full md:w-[45%] rounded-md shadow-md p-6 text-lg font-medium transition-colors duration-300 cursor-pointer ${card.base} hover:${card.hover}`}
            style={{ minHeight: "105px" }}
          >
            {card.text}
          </motion.div>
        ))}
      </div>
    </div>

  );
}