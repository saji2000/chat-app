import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AuthPage from "./components/AuthPage";
import ChatsPage from "./components/ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (user) {
    return <ChatsPage user={user} />;
  }
  return <AuthPage onAuth={(user) => setUser(user)} />;
}

export default App;
