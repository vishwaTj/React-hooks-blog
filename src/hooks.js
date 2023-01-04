// this file is a custom hook file
import {usestate} from "react";

export function useFormInput(initialValue){
    const[value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        value,
        onchange:handleChange
    }
}