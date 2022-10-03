import React, { useEffect, useRef } from "react";

const useDidMountEffect = (
  func: () => void,
  deps: React.DependencyList | undefined
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    }
    return () => {
      didMount.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDidMountEffect;
