import React from 'react'

const buttonList = [
    {
       id: 1,
       title: "All"
    },
    {
       id: 2,
       title: "ReactJs"
    },
    {
       id: 3,
       title: "Firebase"
    },
    {
       id: 4,
       title: "Tailwind CSS"
    },
    {
       id: 5,
       title: "Front-end"
    },
    {
       id: 6,
       title: "ExpressJs"
    },
    {
       id: 7,
       title: "Bootstrap"
    },
    {
       id: 8,
       title: "NodeJs"
    },
    {
       id: 9,
       title: "MongoDB"
    },
    {
       id: 10,
       title: "Web Development"
    },
    {
       id: 11,
       title: "Kedarnath"
    },
    {
       id: 12,
       title: "Vlog"
    },
    {
       id: 13,
       title: "ESports"
    },
   
]

const ButtonList = () => {
  return (
    <div className='flex gap-x-5 place-content-center items-center '>
 {
    buttonList.map((item,index)=>{
        return(
            <button key={buttonList.id} className='bg-gray-200 text-gray-900 rounded-lg px-1 py-1 text-sm font-semibold' >{item.title}</button>
        )
    })
 }
    </div>
  )
}

export default ButtonList