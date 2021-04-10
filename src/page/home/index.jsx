import React, { useEffect } from 'react';
import { Button } from 'antd';
import { get } from '../../utils/http';

const Home = () => {
  console.log('import.meta.env', import.meta.env)

  useEffect(() => {
    get('/index-infos').then(() => {
      
    })
  }, [])
  return (
    <div>
      <span>Home</span>
      <br />
      <Button type='primary'>首页按钮</Button>
    </div>
  )
}

export default Home;