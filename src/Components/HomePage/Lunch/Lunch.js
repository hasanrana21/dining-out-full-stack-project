import React, { useEffect, useState } from 'react';
import LunchCard from '../LunchCard/LunchCard';

const Lunch = () => {
    const [lunch, setLunch] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/getFoods')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setLunch(data);
        })
    }, [])

    const getLunch = lunch.filter(lunches => lunches.foodType === 'Lunch');
    return (
        <div className="row">
            {
                getLunch.map(singleLunch => <LunchCard singleLunch={singleLunch} key={singleLunch._id}></LunchCard> )
            }
        </div>
    );
};

export default Lunch;