import React from 'react';
import './App.css';
// import  Axios  from 'axios';
import { useEffect, useState } from "react";

function App() {
  const[posts,setPosts]=useState([]);

  const fetchPost= async ()=>{
    const response= await fetch("https://all-the-weather.herokuapp.com/cities");
    const data= await response.json();
    setPosts(data.items);

  }; 
  useEffect(()=>{
    fetchPost();})

return(<div className='App'>
    <table >
    <thead>
        <tr>
            <th> Post ID </th>
            <th> City Name</th>
            <th> Region </th>
            <th> Country</th>
        </tr>
    </thead>
        <tbody>
            {posts.map((post)=>(
                <tr>
                    <td> {post.id} </td> 
                    <td> {post.name}</td>
                    <td> {post.regionCode}</td> 
                    <td> {post.countryCode}</td>            
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    )

            }

export default App;

