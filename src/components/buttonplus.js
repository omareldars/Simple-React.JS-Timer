import '../App.css';
const ButtonPlus = (props) => {

    const {minutes,setMinutes} = props;

    const increaseMinuts = () =>{
        if(minutes < 5 ) setMinutes(minutes +1);
      };
    
    return <button class="btn2" onClick={increaseMinuts}>+</button>
};

export default ButtonPlus;