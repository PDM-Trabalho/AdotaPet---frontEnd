import { ErrorOption } from "react-hook-form";
import React from "react";

import { TextErrorStyle } from "./style";

interface TextErrorProps {
  error: ErrorOption | undefined;
}

export default function TextError({ error }: TextErrorProps) {
  return error ? <TextErrorStyle>{error?.message}</TextErrorStyle> : null;
}