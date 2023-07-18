/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";

import Grid from "@mui/material/Grid";
import { useTerminalContext } from "src/context/terminalContext";
const Header: React.FC = () => {
  const { hostname } = useTerminalContext();
  const [display, setDisplay] = React.useState<string[] | null>(null);
  React.useEffect(() => {
    setDisplay([
      "Shell: zsh 5.8.1",
      `Host: ${hostname}`,
      "Terminal: google-chrome",
    ]);
  }, [hostname]);

  return (
    <Grid container xs={8}>
      <Grid xs={12}>
        {" "}
        <span
          css={css`
            font-family: "JetBrains Mono";
            font-size: 30px;
            font-weight: "semi-bold";
          `}
        >
          jingk.ai
        </span>
      </Grid>

      {display?.map((x: string): React.ReactElement => {
        return (
          <Grid xs={12}>
            <span
              css={css`
                font-family: "JetBrains Mono";
                font-size: 12px;
              `}
            >
              {x}{" "}
            </span>
          </Grid>
        );
      })}
    </Grid>
  );
};

export { Header };
