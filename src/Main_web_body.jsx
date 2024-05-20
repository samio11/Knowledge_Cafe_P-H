import React, { useState } from 'react';
import Left_main from './Left_main';
import Right_main from './Right_main';

const Main_web_body = () => {
    const [storeData,setStoreData] = useState([]);
    const [storeTime,setStoreTime] = useState([]);
   function load_Blog_Data(blog)
    {
      let newData = blog.title;
       setStoreData([...storeData,newData]);
    }
    function load_time(blog)
    {
        let newTime = blog.blog_duration;
        setStoreTime([...storeTime,newTime]);
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex justify-between items-center shadow-md w-full h-[15vh] px-4'>
                <h2 className='text-3xl font-bold'>Knowledge Cafe</h2>
                 <img className='w-[70px] rounded-full' src="https://i.ibb.co/2KPTB13/author.jpg" alt="" />
            </div>
            <div className='flex flex-col-reverse lg:flex-row justify-between gap-4'>
                {/* Left Part */}
                 <div className='w-full lg:w-[65%] mt-4'>
                     <Left_main load_Blog_Data={load_Blog_Data} load_time={load_time}></Left_main>
                 </div>
                 {/* Right Part */}
                 <div className='w-full lg:w-[30%] mt-4'>
                     <Right_main Data_Bookmarked={storeData} time={storeTime}></Right_main>
                 </div>
            </div>
        </div>
    );
};

export default Main_web_body;