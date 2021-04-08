import '../App.css';
const ButtonMinus = (props) => {

    const {minutes,setMinutes} = props;

    const decreaseMinuts = () =>{
        if(minutes > 0 ) setMinutes(minutes -1);
      };
    
    return <button class="btn2" onClick={decreaseMinuts}>-</button>
};

export default ButtonMinus;