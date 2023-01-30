import { useEffect, useState } from "react";

export default function useMount() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    return () => {
      debugger;
      setMounted(false);
    };
  }, []);

  return mounted;
}
