import React, { useEffect, useState } from 'react';

const Countdown = () => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    useEffect(() => {
        const countdown = setInterval(() => {

            // needs to be fetched from the server
            const difference = new Date('2024-07-25') - new Date();


            const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
            const remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const remainingMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(formatTimeUnit(remainingDays));
            setHours(formatTimeUnit(remainingHours));
            setMinutes(formatTimeUnit(remainingMinutes));
            setSeconds(formatTimeUnit(remainingSeconds));
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    // Function to format time units to always display two digits
    const formatTimeUnit = (time) => {
        return time < 10 ? `0${time}` : `${time}`;
    };

    return (
        <div className=" flex flex-wrap justify-center items-center gap-4 text-black">
            {renderTimeUnit(days, 'DAYS')}
            {renderTimeUnit(hours, 'HOURS')}
            {renderTimeUnit(minutes, 'MINUTES')}
            {renderTimeUnit(seconds, 'SECONDS')}
        </div>
    );

    function renderTimeUnit(time, label) {
        return (
            <div className='flex flex-col items-center justify-between'>
                <div className="flex justify-center items-center gap-1 md:gap-2">
                    <div className="flex justify-center items-center bg-purple-200 rounded-sm h-10 md:h-16 text-center border-4 border-purple-500 shadow-inner shadow-black w-8 md:w-12">
                        {time[0]}
                    </div>
                    <div className="flex justify-center items-center bg-purple-200 rounded-sm h-10 md:h-16 text-center border-4 border-purple-500 shadow-inner shadow-black w-8 md:w-12">
                        {time[1]}
                    </div>
                </div>
                <p className='text-white navcontent text-sm md:text-base'>
                    {label}
                </p>
            </div>
        );
    }
};

export default Countdown;
