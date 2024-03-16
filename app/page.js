'use client'
// Project 1
// import Image from "next/image";
// import React,{useState} from 'react';
// export default function Home() {
//  const [myname,setmyname] = useState("mohit");
// let flag = false;
//  const findmyname = () => {
//   !flag ? setmyname('goyal') : setmyname('mohit');
//   flag = !flag ;
//  }
// return (
//   <>
//   <p>{myname}</p>
//    <button onClick={findmyname}>click me</button></>
//   );
// }

// Project 2
// import React, { useState } from 'react'

// const Home = () => {
//   const biodata = [
//     {
//       id: 1,
//       name: 'mohit',
//       age: 19
//     },
//     {
//       id:2,
//       name: 'rahul',
//       age: 19
//     }
//   ]
//   const [arr,setarr] = useState(biodata);
//   const  clear = () => {
//    setarr([]);
//   }
//   return (
//  <>
//  <div className='flex flex-col gap-0.5 m-2 h-full w-full justify-between items-center '>
//  {
//   arr.map((item) => {
//     return <h1 key = {item.id} className='bg-blue-400 text-color-white rounded-md m-auto'>Name : {item.name} age : {item.age} </h1>
//   })
// }
// <button onClick={clear} className='bg-yellow-500 rounded-lg font-bold'>Clear</button>
//  </div>
//  </>
//   )
// }

// export default Home

// Project 3
// import React,{useState} from 'react'

// const Home = () => {
//     const biodata = [
//     {
//       id: 1,
//       name: 'mohit',
//       age: 19
//     },
//     {
//       id:2,
//       name: 'rahul',
//       age: 19
//     }
//   ]  
//   const [arr,setarr] = useState(biodata);
//   const [myobj,setmyobj] = useState(biodata[0]);
//   const update = () => {
//      setmyobj({...myobj, name : "gurug"});
//   }
//   const  clear = () => {
//    setarr([]);}
//   return (
//     <>
//     <div className='flex flex-col gap-0.5 m-2 h-full w-full justify-between items-center '>
//     <button onClick={update} className='bg-yellow-500 rounded-lg font-bold'>update</button>
//    {
//   arr.map((item) => {
//     return <h1 key = {item.id} className='bg-blue-400 text-color-white rounded-md m-auto'>Name : {item.name} age : {item.age} </h1>
//   })
// }
// <h1 key = {myobj.id} className='bg-blue-400 text-color-white rounded-md m-auto'>Name : {myobj.name} age : {myobj.age} </h1>
//  <button onClick={clear} className='bg-yellow-500 rounded-lg font-bold'>Clear</button>
//     </div>
//     </>
//   )
// }

// export default Home
