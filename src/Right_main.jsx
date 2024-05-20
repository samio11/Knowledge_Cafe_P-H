import React, { useState } from 'react';

const Right_main = ({ Data_Bookmarked, time }) => {
    const [s1,setS1] = useState(0);
    return (
        <div className='space-y-4 w-full'>
            <div className='bg-blue-100 w-full rounded-lg'>
            
               <h2 className='font-semibold text-2xl'> Total Readed Time:-
               {
                 time?.reduce((pre, cur) => pre+cur, 0)
               }
               </h2>
            </div>
            <div className='bg-slate-100 w-full rounded-lg'>
                <h2 className='font-semibold text-2xl'>Your BookMarked</h2>
                <div className='w-full'>
                    {
                        Data_Bookmarked?.map((x, id) => <h2 className='font-bold text-sm' key={id}>{x}</h2>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Right_main;