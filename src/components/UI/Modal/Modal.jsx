"use client";

import React, { useContext } from "react";
import { createPortal } from "react-dom";
import styled from "./Modal.module.css"
import AuthContext from "../Contexts/MyContext";

export default function Modal({ children }) {
  const {
    mounted,
    setMounted,
  } = useContext(AuthContext);

  const handleClose = () => {
    setMounted(false);
  };

  return mounted 
    ? createPortal(
        <div className={styled.div}>
          <button className={styled.button} onClick={() => handleClose()}>X</button>
          {children}
        </div>,
        document.body
      )
    : null;
}
