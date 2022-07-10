import Presentation from "./components/Presentation/Presentation";
import "./app.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Presentation />
      <ToastContainer />
    </div>
  );
}

export default App;
