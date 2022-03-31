import { Route, Routes } from "react-router-dom";
import Home from "./views/pages/Home";
import Wrapper from "./views/Wrapper";

const App = () => {
  return (
    <Routes>
      <Route element={<Wrapper />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
