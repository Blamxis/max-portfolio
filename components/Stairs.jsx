import { motion } from "framer-motion";

// Variants pour chaque marche
const stairAnimations = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
};

// Calculer le reverse de l'index
const reverseIndex = (index) => {
    const totalSteps = 6;  // Nombre total de marches
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {Array.from({ length: 6 }, (_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimations}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-accent animate-neon relative"
                />
            ))}
        </>
    );
}

export default Stairs;
