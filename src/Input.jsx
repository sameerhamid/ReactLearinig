import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export default Input;
