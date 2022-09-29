import React, { useEffect, useState } from 'react';
import './Break.css'

const Break = ({ list }) => {
    let times = 0;
    for (const time of list) {
        times = parseFloat(times + time.time);

    }


    return (
        <div className='informatin-list'>
            <h4 className='my-4'>Add A Break</h4>
            <div className='button'>
                <button className='btn flex-button'>10s</button>
                <button className='btn flex-button text-center'>20s</button>
                <button className='btn flex-button'>30s</button>
                <button className='btn flex-button'>40s</button>
                <button className='btn flex-button'>50s</button>
            </div>
            <div className='mt-5'>
                <h4 className=''>Exercise Details</h4>
                <h5 className='my-4 time'>Exercise time :{times} seconds </h5>
                <h5 className='time'>Break time :</h5>

            </div>
            <button className='btn-cart mt-5'>
                <h5 className='btn-text'>Activity Completed</h5>

            </button>
        </div>
    );
};

export default Break;