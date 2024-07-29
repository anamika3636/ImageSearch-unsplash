import React, { useEffect, useState } from 'react'
import Mycard from './Mycard';

// https://api.unsplash.com/search/photos?page=1&query=office
// 1nUY8sAeGWNkObHbeN-FKjuC4f5ElWR8x6zFiel5bAU
// (`https://api.unsplash.com/search/photos?page=1&query=${btn}&client_id=1nUY8sAeGWNkObHbeN-FKjuC4f5ElWR8x6zFiel5bAU`)
const Searchmy = () => {
    const [data,setdata]=useState([]);
    const [btn,setbtn]= useState();
   
     useEffect(()=>{
      fetchapi();
     },[])
    
    const fetchapi = async()=>{
        const data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${btn}&client_id=1nUY8sAeGWNkObHbeN-FKjuC4f5ElWR8x6zFiel5bAU`)
        const json = await data.json();
        console.log(json.results)
        setdata(json.results)
        
    }
    const handlechange = (e)=>{
     setbtn(e.target.value)
    }
    // const handleclick = ()=>{
    // const filter = data.filter((res)=>
    //     res?.meals?.strMeal.toLowereCase().includes(btn.toLowerCase()))
    //      setdata(filter)
   
    // }

   
  return (
    <div className=' bg-black  p-2 text-center flex-wrap w-full height-full '>
    <h1 className='   font-semibold  text-white font-sans text-3xl'>Find Images</h1>
    <div className='items-center m-2 p-2 '>
        <input className='border   border-black text-blue m-2 p-2 rounded-xl pl-' type="text" value={btn || ''} onChange={handlechange} placeholder='search image'></input>
        <button type="submit" className=' p-2 m-2 rounded-xl bg-blue-400' onClick={fetchapi}>search</button>
        
    
    </div>
    <div className='flex  p-32 space-x-3 w-full h-full items-center flex-wrap hover:border-l-amber-950 bg-slate-400 rounded-2xl'>
    {/* {data.map((res)=><Mycard info={res}/>)} */}
   
     {data.map((res)=>
    
      (<Mycard info={res}/>)
   
     )}
    </div>
    </div>
  )
}

export default Searchmy