import React from "react";
import ScanLayout from "../../components/Scan/ScanLayout";
import FacePreview from "../../components/Scan/FaceScan/FacePreview";
import FaceToolBar from "../../components/Scan/FaceScan/FaceToolBar";

const FaceScan = () => {
  return (
    <ScanLayout
      control={<FacePreview />}
      toolBarContent={<FaceToolBar />}
      title="Face Scan"
      description="Make sure the labor is sitting in the right position and face
                aligns with the guide hologram in the screen."
    >
      <div className="w-full h-[90%] bg-gray-400 rounded-xl"></div>
    </ScanLayout>
  );
};

export default FaceScan;
