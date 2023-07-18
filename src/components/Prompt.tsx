/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { useTerminalContext } from "../context/terminalContext.tsx";
import { Hostnames, checkValidResponse } from "./utils.tsx";

interface PromptProps {
  clear?: boolean;
}
const Prompt: React.FC<PromptProps> = ({ clear }) => {
  const [inputEnabled, toggleInputEnabled] = React.useState<boolean>(true);
  const [currentCommand, setCurrentCommand] = React.useState<string>("");
  const { hostname, promptSubmitted, clearCommand } = useTerminalContext();
  const [result, setResult] = React.useState<React.ReactElement | null>(null);
  const updateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentCommand(e.target.value);
  };

  const submit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      toggleInputEnabled(false);
      if (currentCommand === "clear") {
        clearCommand();
      } else {
        setResult(checkValidResponse(currentCommand));
        promptSubmitted();
      }
    }
  };

  React.useEffect(() => {
    toggleInputEnabled(true);
    setCurrentCommand("");
    setResult(null);
  }, [clear]);

  React.useEffect(() => {}, []);
  return (
    <>
      <Grid container xs={12} spacing={0}>
        <Grid
          item
          xs={
            hostname === Hostnames.Articuno
              ? 2.4
              : hostname === Hostnames.Zapdos
              ? 2.3
              : 2.3
          }
          css={css`
            min-height: 100%;
          `}
        >
          <span
            css={css`
              background-color: rgba(62, 70, 125, 0.5);
              padding: 2px 5px 0px 5px;
              font-family: "Fira Code";
              font-size: 12px;
              font-weight: semi-bold;
            `}
          >
            root@{hostname} :: ~
          </span>
        </Grid>
        <Grid
          item
          xs={
            hostname === Hostnames.Articuno
              ? 9
              : hostname === Hostnames.Zapdos
              ? 9
              : 9
          }
        >
          <input
            disabled={!inputEnabled}
            autoFocus
            onChange={updateChange}
            onKeyDown={submit}
            css={css`
              border: none;
              min-width: 100%;
              background-color: transparent;
              color: white;
              outline: none;

              font-family: "Fira Code";
              font-size: 12px;
              box-shadow: none;
              border-color: transparent;
            `}
          />
        </Grid>
      </Grid>
      {result ? (
        <Grid container xs={12}>
          {result}
        </Grid>
      ) : null}
    </>
  );
};

export { Prompt };
