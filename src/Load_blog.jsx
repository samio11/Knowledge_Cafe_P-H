import React from 'react';
import { FaRegBookmark } from "react-icons/fa";

const Load_blog = ({ blog,load_Blog_Data,load_time }) => {
    return (
        <div className='space-y-3 mb-4'>
            <img className='w-full h-[400px] rounded-lg' src={blog.title_pic} alt={blog.title} />
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-3'>
                    <img className='w-[50px] rounded-full' src={blog.author_pic} alt="" />
                    <div>
                        <h3 className='text-xl font-bold'>{blog.author_name}</h3>
                        <p className='text-gray-500'>{blog.blog_published}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <p>{blog.blog_duration} Min</p>
                    <p onClick={()=>load_time(blog)} className='text-xl'><FaRegBookmark /></p>
                </div>
            </div>
            <h3 className='text-xl font-bold'>{blog.title}</h3>
            <div className='flex justify-start items-center gap-2'>
                {
                    blog.blog_hashtags?.map((x, idx) => <p className='text-gray-500 text-sm' key={idx}>{x}</p>)
                }
            </div>
            <button onClick={()=>load_Blog_Data(blog)} className='btn btn-info btn-outline'>Mark As Read</button>
        </div>
    );
};

export default Load_blog;