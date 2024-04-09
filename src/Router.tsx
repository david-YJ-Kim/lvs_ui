import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import LogView from "./routes/logview";
import Actionpage from "./routes/actionpage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actionpage" element={<Actionpage />} />
        <Route path="/logview" element={<LogView />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
