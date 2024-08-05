
import React, { useState } from 'react'
import BannerHome from '../../components/Banner/BannerHome'
import './Home.css'
import Menu from '../../components/Menus/Menu'
import DishesList from '../../components/DishesList/DishesList'
import AppDownload from '../../components/AppDownload/AppDownload'
function Home() {
  const [category, setCategory] = useState('all')
  return (
    <div>
      <BannerHome />
      <Menu category={category} setCategory={setCategory} />
      <DishesList category={category} />
      <AppDownload />
    </div>
  )
}

export default Home
