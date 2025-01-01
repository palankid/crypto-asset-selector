import React, { FC } from "react";
import { allFontVariables } from "../src/theme/fonts";

const withFontProvider = (Story: FC) => (
  <div className={allFontVariables}>
    <Story />
  </div>
);

export default withFontProvider;
