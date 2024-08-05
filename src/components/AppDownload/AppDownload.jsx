import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
function AppDownload() {
  return (
    <div className='App-download' id='app-download'>
        <h1 className='text-center mb-3 mt-4'>Download Our App</h1>
     <div className="app-download-platform">
        <img src={assets.app_store} alt="" />
        <img src={assets.play_store} alt="" />
     </div>
    </div>
  )
}

export default AppDownload
