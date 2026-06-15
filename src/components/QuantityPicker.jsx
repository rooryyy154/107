import { useState } from "react"; 

function QuantityPicker(props){
    //const [state, setState] = useState(initialValue);
    const [quantity, setQuantity] = useState(1);

    function onDecrease(){
        console.log("onDecrease Clicked!");

        setQuantity(quantity-1)
        props.onChange(quantity-1);//Notify the parent
    }

    function onIncrease(){
        console.log("onIncrease Clicked!");

        setQuantity(quantity+1)
        props.onChange(quantity+1);
    }

    return(
        <div>
            <button className="btn btn-primary" onClick={onDecrease} disabled={quantity==1} >-</button>
            <label className="mx-2">{quantity}</label>
            <button className="btn btn-primary" onClick={onIncrease}>+</button>
        </div>
    )
}

export default QuantityPicker;