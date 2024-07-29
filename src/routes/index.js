import { Route } from "react-router-dom";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Register from "../pages/Register";
import { HomeProvider } from "../context/HomeContext";

const routes = (
  <>
    <Route path="/" element={<Auth />} />
    <Route
      path="/home"
      element={
        <HomeProvider>
          <Home />
        </HomeProvider>
      }
    />
    <Route path="/register" element={<Register />} />
  </>
);

export default routes;
