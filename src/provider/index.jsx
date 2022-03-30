import { HabitsProvider } from "./HabitsContext";

export default function AppProvider({ children }) {
  return <HabitsProvider>{children}</HabitsProvider>;
}
