import * as React from "react";
import { Hostnames, getHostName } from "../components/utils";
import { Prompt } from "../components/Prompt";

interface TerminalContextProps {
  hostname: Hostnames;
  prompts: React.ReactElement[];
  promptSubmitted: () => void;
  clearCommand: () => void;
}

const TerminalContext = React.createContext<TerminalContextProps | null>(null);
interface TerminalProviderProps {
  children: JSX.Element | JSX.Element[];
}
export const TerminalProvider: React.FC<TerminalProviderProps> = ({
  children,
}) => {
  const [host, _] = React.useState<Hostnames>(getHostName());
  const [prompts, setPrompts] = React.useState<React.ReactElement[]>([
    <Prompt />,
  ]);

  const promptSubmitted = () => {
    setPrompts((prev) => [...prev, <Prompt clear={false} />]);
  };
  const clearCommand = () => {
    setPrompts([]);
  };

  React.useEffect(() => {
    if (prompts.length == 0) {
      setPrompts([<Prompt />]);
    }
    if (prompts.length > 5) {
      const curPrompts = [...prompts];
      curPrompts.pop();
      clearCommand();
      setPrompts([...curPrompts, <Prompt />]);
    }
  }, [prompts]);
  return (
    <TerminalContext.Provider
      value={{
        hostname: host,
        prompts: prompts,
        promptSubmitted: promptSubmitted,
        clearCommand: clearCommand,
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminalContext = () => {
  const context = React.useContext(TerminalContext);

  if (!context) {
    throw new Error(
      "useTerminalContext must be used inside the TerminalProvider",
    );
  }

  return context;
};
