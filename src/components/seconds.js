import {useEffect, useState} from 'react';
import '../App.css'
const Seconds = ({ minutes, setMinutes }) => {
    
    const [seconds, setSeconds] = useState();
    
    useEffect(() => {
        if(seconds === 0) setMinutes(0);
    },[seconds, setMinutes]);

    useEffect(() => {
        setSeconds(minutes * 60)
    }, [minutes]);

    useEffect(() => {
        const countdown = setInterval(()=>{
            setSeconds((prevstate) => prevstate -1);
        },1000);
        return () => clearInterval(countdown);
    },[]);
    return <label class="lbl" for="counter">{`${seconds} Second`}</label>
}
export default Seconds;