

import { useState, useEffect } from 'react';
const CountdownCard = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000)
        return () => clearTimeout(timer);
    })

    return (
        <div className='countdown-card'>
            <TimeItem amount={timeLeft.days} label='days' />
            <TimeItem amount={timeLeft.hours} label='hours' />
            <TimeItem amount={timeLeft.minutes} label='minutes' />
            <TimeItem amount={timeLeft.seconds} label='seconds' />
        </div>
    );
}

export default CountdownCard;

const TimeItem = ({ amount, label }) => {

    return (
        <div className='time-item'>
            <span className="number">{amount}</span>
            <span className="label">{label}</span>
        </div>
    )
}


const calculateTimeLeft = () => {
    const endDate = `09/23/2022`
    const timeOffset = 1
    const difference = +new Date(endDate) - +new Date();
    const timeLeft = {};

    if (difference > 0) {
        timeLeft['days'] = Math.floor(difference / (1000 * 60 * 60 * 24))
        timeLeft['hours'] = Math.floor((difference / (1000 * 60 * 60)) % 24) + timeOffset
        timeLeft['minutes'] = Math.floor((difference / 1000 / 60) % 60)
        timeLeft['seconds'] = Math.floor((difference / 1000) % 60)
    }
    return timeLeft;
}