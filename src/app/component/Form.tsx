"use client";
import React, { useState, useEffect } from "react";
import { ReactPixelTrack } from "./reactPixel";

function Form({ formElement }: { formElement: any }) {
  // const submitCalback = () => {
  //   ReactPixelTrack().then((ReactPixel) => {
  //     ReactPixel.track("Lead");
  //   });
  // };

  // useEffect(() => {
  //   let form = document.getElementById("form");
  //   form?.addEventListener("submit", submitCalback);

  //   return () => {
  //     form?.removeEventListener("submit", submitCalback);
  //   };
  // }, []);

  return (
    <div
      className="form"
      dangerouslySetInnerHTML={{ __html: formElement.fForm }}
    />
  );
}

export default Form;
