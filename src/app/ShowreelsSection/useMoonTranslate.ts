import { useScroll } from "@/hooks";
import { useEffect, useState } from "react";

const useMoonTranslate = ({
  sectionOffsetTop,
}: {
  sectionOffsetTop: number;
}) => {
  const [moonTranslateX, setMoonTranslateX] = useState(-1);

  const { scrollY } = useScroll();

  const translateX = scrollY - sectionOffsetTop + 200;

  useEffect(() => {
    const isReadyOffsetTop = sectionOffsetTop > 0;
    const isReachedMaxTranslateX = moonTranslateX === 0;

    if (!isReadyOffsetTop) return;
    if (isReachedMaxTranslateX) return;

    setMoonTranslateX(translateX >= 0 ? 0 : translateX);
  }, [moonTranslateX, translateX, sectionOffsetTop]);

  const moonTranslate = `${moonTranslateX}px 0px`;

  return moonTranslate;
};

export default useMoonTranslate;
