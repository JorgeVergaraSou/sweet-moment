// src/declarations.d.ts
declare module "@mui/material/Unstable_Grid2" {
  import * as React from "react";
  import { SxProps } from "@mui/material";
  import { Theme } from "@mui/material/styles";

  export interface Grid2Props {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    container?: boolean;
    children?: React.ReactNode;
    sx?: SxProps<Theme>;
  }

  const Grid2: React.FC<Grid2Props>;
  export default Grid2;
}
