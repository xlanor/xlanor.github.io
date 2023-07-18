import * as React from "react";

import Grid from "@mui/material/Grid";
import { useTerminalContext } from "../context/terminalContext";

interface TerminalBoxProps {
  children: JSX.Element | JSX.Element[] | null;
}

const TerminalBox: React.FC<TerminalBoxProps> = ({ children }) => {
  const { prompts } = useTerminalContext();
  return (
    <Grid
      container
      xs={8}
      sx={{
        minWidth: "20vw",
        maxWidth: "70vw",
        maxHeight: "50vh",
        overflowY: "scroll",
        overflowX: "scroll",
      }}
    >
      {children}
      {prompts}
    </Grid>
  );
};

export { TerminalBox };
