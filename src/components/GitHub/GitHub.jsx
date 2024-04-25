import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {
    const data = useLoaderData()
    //const [data, setData] = useState([]);
    //useEffect(() => {
    //    fetch("https://api.github.com/users/Kushagra-Malani")
    //    .then((response) => response.json())
    //    .then((data) => {
    //        console.log(data);
    //        setData(data)
    //    })
    //},[])

    return (
        <div className='text-center bg-gray-500 text-white m-4 p-4 text-3xl'>
            <div className='py-3'>Name: {data.name}</div>
            <div className='py-2'>Github followers: {data.followers}</div>
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
        
    );
}

export default GitHub;

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Kushagra-Malani')
    return response.json()
}