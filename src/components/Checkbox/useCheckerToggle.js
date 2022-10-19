import {useState} from "react";

export default function useCheckerToggle (initialValue) {

    const [value, setValue] = useState(initialValue)


    const toggle = () => {
        setValue(!value)
    }

    return [
        value,
        toggle
    ]
};

///////////////////////////////////////////////////////////////



/*
import useToggle  from "../Hook/useToggle";   //// импортируем из корневой папки


const [isVisible, toggleVisible] = useToggle(true) ////

//// деструктурируем функцию функция useToggle принимает один из двух параметров, либо true либо false
//// свойство isVisible является переключателем которое в зависимости от действий, переключается либо на true либо на false
//// toggleVisible помещается в слушатель события как функция которая обрабатывается.

<button onClick={toggleVisible}></button>  //// в button передается только ссылка на функцию, все оставльное она сделает сама.
/// при нажатии на button сработает  внутренняя функция toggle которая

{isVisible && (
<>
    <div>в зависимости от того будет ли isVisible равен true или false я появлюсь или исчезну</div>
</>
)}

 */