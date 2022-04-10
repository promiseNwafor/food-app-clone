import { Route, Routes } from "react-router-dom";
import Service from "./components/Service";
import Home from "./views/pages/Home";
import Wrapper from "./views/Wrapper";

const App = () => {
  return (
    <Routes>
      <Route element={<Wrapper />}>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path=":service" element={<Service />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
