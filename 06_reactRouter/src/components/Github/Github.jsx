import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData()
    //const [data, setData] = useState([]);

    /*useEffect (() => {
      fetch('https://api.github.com/users/RaviShreevastawa')
      .then(response => response.json())
      .then(data => {
        console.log(data),
        setData(data)
    });
    },[]);*/
  return (
    <div className='bg-gray-700 p-4 text-white text-center'>
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="avatar picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>  {
  const response = await fetch('https://api.github.com/users/RaviShreevastawa')
  return response.json()
}
