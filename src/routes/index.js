import { Route } from "react-router-dom";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import { HomeProvider } from "../context/HomeContext";
import FaceScan from "../pages/Scan/FaceScan";
import IrisScan from "../pages/Scan/IrisScan";
import FingerPrint from "../pages/Scan/FingerPrint";
import { ProtectedRoute } from "./ProtectedRoute";
import ScanLayout from "../components/Scan/ScanLayout";

const routes = (
  <>
    <Route path="/" element={<Auth />} />
    <Route
      path="/home"
      element={
        <>
          <ProtectedRoute />
          <HomeProvider>
            <Home />
          </HomeProvider>
        </>
      }
    />

    <Route
      path="/scan/face"
      element={
        <>
          <ProtectedRoute />
          <FaceScan />
        </>
      }
    />
    <Route
      path="/scan/fingerprint"
      element={
        <>
          <ProtectedRoute />
          <FingerPrint />
        </>
      }
    />
    <Route
      path="iris"
      element={
        <ScanLayout>
          <IrisScan />
        </ScanLayout>
      }
    />
  </>
);

export default routes;
