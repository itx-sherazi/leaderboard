import React from 'react'
import Navbar from '../component/Navbar'
import Leaderboard from '../component/Leaderboard'
import UsersData from '../component/UsersData'


const Home = () => {
  return (
    <div >
        <Navbar/>
        <Leaderboard/>
        <UsersData/>
    
    </div>
  )
}

export default Home