import React from "react";

import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";
import { LoadingWrapper } from "./style";

export default function Loading({ purple }) {
  return (
    <LoadingWrapper className={purple ? "purple" : ""}>
      <AiOutlineLoading className="-animated-inverse" />
      <AiOutlineLoading3Quarters className="-animated" />
    </LoadingWrapper>
  );
}
