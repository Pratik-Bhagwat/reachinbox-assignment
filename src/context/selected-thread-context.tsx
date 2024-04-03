import { useContext, useState } from "react";
import { createContext } from "react";

interface selectedThreadlContext {
  threadId: number;
  setThreadId: React.Dispatch<React.SetStateAction<number>>;
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const INITIAL_STATE = {
  threadId: 0,
  setThreadId: () => {},
  refresh: false,
  setRefresh: () => {},
};

export const SelectedThreadlContext =
  createContext<selectedThreadlContext>(INITIAL_STATE);

const SelectedThreadProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [threadId, setThreadId] = useState(0);
  const [refresh, setRefresh] = useState(false);

  return (
    <SelectedThreadlContext.Provider
      value={{ threadId, setThreadId, refresh, setRefresh }}
    >
      {children}
    </SelectedThreadlContext.Provider>
  );
};

export default SelectedThreadProvider;

export const useSelectedThread = () => {
  return useContext(SelectedThreadlContext);
};
