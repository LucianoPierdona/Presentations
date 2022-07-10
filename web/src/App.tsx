import Presentation from "./components/Presentation/Presentation";
import "./app.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Attendee from "./components/Attendee/Attendee";

function App() {
  return (
    <>
      <div className="block">
        <Presentation />
        <Attendee />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
