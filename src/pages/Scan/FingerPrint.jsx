import React from 'react'
import ScanLayout from '../../components/Scan/ScanLayout'
import FingerprintPreview from '../../components/Scan/FingerPrint/FingerprintPreview'
import FingerprintToolBar from '../../components/Scan/FingerPrint/FingerprintToolBar'

const FingerPrint = () => {
  return (
    <ScanLayout
    control={<FingerprintPreview />}
    toolBarContent={<FingerprintToolBar />}
    title="Fingerprint Scan"
    description="Make sure the labor gives finger print in a 4-2-4 format, four left two thumbs and right four."
  >
    <div className="w-full h-[90%] bg-white shadow rounded-xl"></div>
  </ScanLayout>
  )
}

export default FingerPrint
