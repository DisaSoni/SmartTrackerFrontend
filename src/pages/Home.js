import React, { useEffect } from 'react'
import { BoardCard } from '../components'
import { get } from '../services/api'

const Home = () => {
  const getWorkspaces = async () => {
    const result = await get()
    console.log('result ', result);
  }

  useEffect(() => {
    getWorkspaces()
  }, [])

  return (
    <div className='container'>
      <h1 className='my-5'>Boards</h1>

      <div className='row g-4'>
        <div className='col-md-4'>
          <BoardCard />
        </div>
        <div className='col-md-4'>
          <BoardCard />
        </div>
        <div className='col-md-4'>
          <BoardCard />
        </div>
        <div className='col-md-4'>
          <BoardCard />
        </div>
        <div className='col-md-4'>
          <BoardCard />
        </div>
      </div>
    </div>
  )
}

export default Home