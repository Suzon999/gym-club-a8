import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Activites.css'
const Activites = () => {
    const [activites, setActivites] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivites(data))
    }, [])

    return (
        <div className='activites-container'>

            <div className="activites-item-container my-3 ">
                <h2 className='text-warning my-3'>ACTIVE GYM & FEETNESS CLUB</h2>
                <h5 className='mb-5'>Select today’s exercise</h5>
                <div className='grid-items'>
                    {
                        activites.map(item => <Item
                            kye={item.id}
                            item={item}
                        ></Item>)
                    }
                </div>
            </div>
            <div className="activites-cart-container">
                <div className='img-information'>
                    <img className='rounded-circle img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="" />
                    <div>
                        <h4>Zahid Hossain</h4>
                        <p>Sydney, Australia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activites;