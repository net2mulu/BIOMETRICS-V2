import { useEffect } from "react";
import { Routes, useLocation } from "react-router-dom";
import MainLayout from "./components/Main/Layout/MainLayout";
import routes from "./routes";


export default function App() {
  const { pathname } = useLocation();
  const nonLayoutRoutes = ["/"];
  useEffect(() => {
    console.log(`The path is ${pathname}`);
  }, [pathname]);
  return <>
   {nonLayoutRoutes.includes(pathname) ? (
        <div className="w-full h-max font-poppins bg-white">
          <Routes>{routes}</Routes>
        </div>
      ) : (
        <MainLayout >
          <Routes>{routes}</Routes>
        </MainLayout>
      )}
  </>;
}
