import { useEffect, useRef } from "react";

const useDetectOutside = (close) => {
  const ref = useRef();
  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    };
    document.addEventListener("click", handleOutside, true);
    return () => document.removeEventListener("click", handleOutside, true);
  }, [close]);
  return ref;
};
export default useDetectOutside;
