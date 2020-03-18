import React from "react";

import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";

import { LoadingWrapper } from "./style";

export default function Loading() {
  return (
    <LoadingWrapper>
      <AiOutlineLoading className="-animated-inverse" />
      <AiOutlineLoading3Quarters className="-animated" />
    </LoadingWrapper>
  );
}
