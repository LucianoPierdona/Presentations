import Presentation from "./components/Presentation/Presentation";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Attendee from "./components/Attendee/Attendee";
import PresentationAttendee from "./components/PresentationAttendee/PresentationAttendee";

function App() {
  return (
    <>
      <div className="block">
        <Presentation />
        <div>
          <Attendee />
          <PresentationAttendee />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
