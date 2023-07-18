/** @jsxImportSource @emotion/react */
import "./App.css";
import { css } from "@emotion/react";
import { Header } from "./components/Header.tsx";
import { Prompt } from "./components/Prompt.tsx";
import { TerminalBox } from "./components/TerminalBox.tsx";
import Grid from "@mui/material/Grid";
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/600.css";
import "@fontsource/fira-code/700.css";
import "@fontsource/jetbrains-mono/600.css";
import { TerminalProvider } from "./context/terminalContext.tsx";
function App() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
      css={css`
        background-color: #272938;
      `}
    >
      <TerminalProvider>
        {<Header />}
        <TerminalBox>{}</TerminalBox>
      </TerminalProvider>
    </Grid>
  );
}

export default App;
