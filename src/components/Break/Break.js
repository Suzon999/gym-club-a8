import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div className='informatin-list'>
            <h4 className='my-4'>Add A Break</h4>
            <div className='button'>
                <button className=' flex-button'><p className='btn-p'>10s</p></button>
                <button className=' flex-button'><p>20s</p></button>
                <button className=' flex-button'><p>30s</p></button>
                <button className=' flex-button'><p>40s</p></button>
                <button className=' flex-button'><p>50s</p></button>
            </div>
            <div className='mt-5'>
                <h4 className=''>Exercise Details</h4>
                <h5 className='my-4 time'>Exercise time :</h5>
                <h5 className='time'>Break time :</h5>

            </div>
            <button className='btn-cart mt-5'>
                <h5 className='btn-text'>Activity Completed</h5>

            </button>
        </div>
    );
};

export default Break;