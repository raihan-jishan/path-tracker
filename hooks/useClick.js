"use client";
import { useState } from "react";

const useClick = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClose = () => setClick(false);

  return {
    click,
    handleClick,
    handleClose,
  };
};

export default useClick;
