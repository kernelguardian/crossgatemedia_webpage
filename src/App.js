import "./App.css";
import { Footer } from "./Footer";
import Main from "./Main";
import WhatsappButton from "./WhatsappButton";
import Socials from "./Socials";

function App() {
  return (
    <div className="bg w-screen min-h-screen ">
      <header></header>

      <div className="flex flex-col">
        <Main></Main>

        <WhatsappButton></WhatsappButton>

        <Socials></Socials>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
