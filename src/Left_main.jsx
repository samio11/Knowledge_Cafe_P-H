import React, { useEffect, useState } from 'react';
import Load_blog from './Load_blog';

const Left_main = ({load_Blog_Data,load_time}) => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('web_data.json')
        .then(res=>res.json())
        .then(data=>{
            setData(data);
        })
    },[])
    return (
        <div>
           {
            data?.map((x,idx)=><Load_blog key={idx} blog={x} load_Blog_Data={load_Blog_Data} load_time={load_time}></Load_blog>)
           }
        </div>
    );
};

export default Left_main;