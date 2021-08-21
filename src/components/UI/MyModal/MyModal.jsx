import React from "react";
import classes from "./MyModal.module.css";
function MyModal({ children, visible, setVisible }) {
  const rootCalsses = [classes.myModal];

  if (visible) {
    rootCalsses.push(classes.active);
  }

  return (
    <div className={rootCalsses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default MyModal;
