import { useState } from "react";
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
