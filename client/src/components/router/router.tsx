import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import Confession from "../Confession";
import Misdemeanour from "../Misdemeanour";
import MainLayout from "../main_layouts";


const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}></Route>
    <Route index element={<Home />} />
    <Route path="/confession" element={<Confession />} />
    <Route path="/misdemeanour" element={<Misdemeanour />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;