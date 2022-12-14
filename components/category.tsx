import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CategoryProps {
  shouldRun: boolean;
  name: string;
}

const Category = ({ shouldRun, name }: CategoryProps) => {
  const nameRef = useRef<HTMLDivElement>(null);
  const [elementWidth, setElementWidth] = useState<number | null>(null);
  useEffect(() => {
    if (nameRef.current) {
      setElementWidth(nameRef.current.offsetWidth);
    }
  }, []);
  return (
    <div className="relative">
      <span ref={nameRef} className="font-bold">
        {name.toUpperCase()}
      </span>
      {shouldRun ? (
        <motion.div
          className="absolute"
          style={{
            bottom: -3,
            backgroundColor: "black",
            height: 2,
          }}
          initial={{ width: 0 }}
          animate={{ width: elementWidth || 0 }}
          transition={{ duration: 10 }}
        />
      ) : null}
    </div>
  );
};

export default Category;
