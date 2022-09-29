import React, { useEffect, useState } from 'react';
import './Break.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Break = ({ list }) => {
    const [sec, setSec] = useState('');
    let times = 0;
    for (const time of list) {
        times = parseFloat(times + time.time);

    }
    // toast 
    const notify = () => toast("Wow so easy!");


    const handleBreak = (seconds) => {
        setSec(seconds);
        // setBreak(seconds)
    }

    return (
        <div className='informatin-list'>
            <h4 className='my-4'>Add A Break</h4>
            <div className='button'>
                <button onClick={() => handleBreak('10s')} className='btn flex-button'>10s</button>
                <button onClick={() => handleBreak('20s')} className='btn flex-button text-center'>20s</button>
                <button onClick={() => handleBreak('30s')} className='btn flex-button'>30s</button>
                <button onClick={() => handleBreak('40s')} className='btn flex-button'>40s</button>
                <button onClick={() => handleBreak('50s')} className='btn flex-button'>50s</button>
            </div>
            <div className='mt-5'>
                <h4 className=''>Exercise Details</h4>
                <h5 className='my-4 time'>Exercise time :{times} seconds </h5>
                <h5 className='time'>Break time : {sec ? sec : '0'} </h5>

            </div>

            <button onClick={notify} className='btn-cart mt-5'>
                <h5 className='btn-text'>Activity Completed</h5>

            </button>
            <ToastContainer />
        </div>
    );
};

export default Break;