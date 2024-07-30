import { Routes, useLocation } from "react-router-dom";
import routes from "./routes";
import MainLayout from "./components/Home/Layout/MainLayout";

export default function App() {
  const { pathname } = useLocation();
  const nonLayoutRoutes = ["/"];

  return <>
   {nonLayoutRoutes.includes(pathname) ? (
        <div className="w-full h-max  font-poppins bg-white">
          <Routes>{routes}</Routes>
        </div>
      ) : (
        <MainLayout >
          <Routes>{routes}</Routes>
        </MainLayout>
      )}
  </>;
}
