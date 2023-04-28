// 1. useState import
import { useState } from "react";

const MyClockTime = () => {
    // let myTime = new Date().toLocaleTimeString();
    // 2. state변수 선언 
    const [myTime, setMyTime] = useState()
    // 3. 1초에 한번씩 state 변수 변경 
    setInterval(() => setMyTime(new Date().toLocaleTimeString()), 1000);

    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime;