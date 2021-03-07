import * as React from "react";
import { motion, MotionStyle, useMotionValue } from "framer-motion";
import { Page } from "./Page";

const range = [-1, 0, 1];

interface VirtualizedPageProps {
  children: (props: { index: number }) => JSX.Element;
}

const containerStyle: MotionStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflowX: "hidden",
};

export const VirtualizedPage: React.FunctionComponent<VirtualizedPageProps> = ({
  children,
}) => {
  const [index, setIndex] = React.useState(0);

  return (
    <motion.div style={containerStyle}>
      {range.map((rangeValue) => {
        return (
          <Page
            key={rangeValue + index}
            index={rangeValue + index}
            renderPage={children}
          />
        );
      })}
    </motion.div>
  );
};

VirtualizedPage.displayName = "VirtualizedPage";
