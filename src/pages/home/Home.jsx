
import React, { useState } from 'react'
import BannerHome from '../../components/Banner/BannerHome'
import './Home.css'
import Menu from '../../components/Menus/Menu'
import DishesList from '../../components/DishesList/DishesList'
function Home() {
  const [category, setCategory] = useState('all')
  return (
    <div>
      <BannerHome />
      <Menu category={category} setCategory={setCategory} />
      <DishesList category={category} />
    </div>
  )
}

export default Home
