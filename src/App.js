import { Header, Bot } from "./components";
import { UserProvider } from "./util/authProvider";

function App() {
  return (
    <UserProvider>
      <div className="" style={{ height: "100vh", width: "100vw" }}>
        <>
          <Header />
        </>
        <Bot />
      </div>
    </UserProvider>
  );
}

export default App;
