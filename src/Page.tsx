import { motion, MotionStyle, MotionValue } from "framer-motion";
import React, { FunctionComponent } from "react";

interface PageProps {
  index: number;
  renderPage: ({ index }: { index: number }) => JSX.Element;
  x: MotionValue;
}

const pageStyle: MotionStyle = {
  position: "absolute",
  width: "100%",
  height: "100%"
};

export const Page: FunctionComponent<PageProps> = ({
  x,
  index,
  renderPage
}) => {
  const child = React.useMemo(() => renderPage({ index }), [index, renderPage]);

  return (
    <motion.div
      style={{
        x,
        ...pageStyle,
        left: `${index * 100}%`,
        right: `${index * 100}%`
      }}
      drag="x"
      dragElastic={1}
    >
      {child}
    </motion.div>
  );
};

Page.displayName = "page";
