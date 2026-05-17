import React, { useCallback, useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);

    const cvtDay = useCallback((day: number) => {
        const krDay = ["일", "월", "화", "수", "목", "금", "토"];
        return krDay[day];
    }, []);

    return (
        <div className="flex flex-col gap-2 items-center mx-auto text-white text-shadow-md text-shadow-black/40 tracking-widest">
            <p className="text-5xl font-bold">
                {time.getHours() + " : " + time.getMinutes()}
            </p>
            <p className="text-md">{`${time.getMonth() + 1}월 ${time.getDate()}일 ${cvtDay(time.getDay())}요일`}</p>
        </div>
    );
};

export default Clock;
