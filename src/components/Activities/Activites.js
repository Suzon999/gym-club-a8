import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Information from '../Information/Information';
import Item from '../Item/Item';
import './Activites.css'
const Activites = () => {
    const [activites, setActivites] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivites(data))
    }, [])
    // button handler 
    const handleAddToLIst = (item) => {
        console.log(item);
    }

    return (
        <div className='activites-container'>

            <div className="activites-item-container my-3 ">
                <h2 className='  title'>ACTIVE GYM & FEETNESS CLUB</h2>
                <h5 className='mb-5'>Select today’s exercise</h5>
                <div className='grid-items'>
                    {
                        activites.map(item => <Item
                            kye={item.id}
                            item={item}
                            handleAddToLIst={handleAddToLIst}
                        ></Item>)
                    }
                </div>
            </div>
            <div className="activites-cart-container">
                <Information></Information>
                <Break></Break>
            </div>
        </div>
    );
};

export default Activites;