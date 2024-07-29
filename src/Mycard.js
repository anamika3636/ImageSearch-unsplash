import React from 'react'

const Mycard = ({info}) => {
    console.log(info,"meals.....")
  return (
    <div className='bg-black m-2 p-2 flex-wrap  rounded-lg  '>
        <div className='p-2 m-2 '>
    <div>
   <img className='w-72 m-2 p-2 h-96 h rounded-xl bg-slate-600 sp '
   src={info.urls.full} alt='img'/>
   </div>
   <div className='text-wrap rounded-xl overflow-hidden h-36 w-80 bg-slate-500 text-white m-2 p-2'x>
   <h1 className='m-2 p-2 '>{info.urls.full}</h1>
   </div>

    
    </div>
    </div>
  )
}

export default Mycard