import React from "react";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
const Alert = ({ message, alertDisplay, setAlertDisplay }) => {
  return (
    <motion.div
      animate={{ opacity: alertDisplay !== "hidden" ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`font-Jost px-4 space-x-4 border-2 border-red-600 bg-red-600 w-full ${alertDisplay} justify-between items-center `}
      >
        <p className="text-lg py-2 text-white text-center"> {message}</p>
        <RxCross1
          onClick={(e) => {
            setAlertDisplay("hidden");
          }}
          className="text-white hover:scale-150 transition-all hover:cursor-pointer"
        />
      </div>
    </motion.div>
  );
};

export default Alert;
