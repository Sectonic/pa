import { useRef } from "react"

export const Type512Input = ({ Type512, setType512 }) => {
    const modalities = useRef(null);
    const function1 = useRef(null);
    const function2 = useRef(null);
    const saviorAnimals = useRef(null);
    const animal3 = useRef(null);
    const animal4 = useRef(null);

    const Type512Handler = (e) => {

        const uppercaseVoidCatcher = (val) => {
            if (val === 'x') {
                return 'x';
            } else {
                return val.toUpperCase();
            }
        }

        const capitalizeHandler = (type, val) => {
            if (type.startsWith('function')) {
                return `${uppercaseVoidCatcher(val.substring(0,1))}${val.substring(1).toLowerCase()}`;
            }  else {
                return `${uppercaseVoidCatcher(val.substring(0,1))}${uppercaseVoidCatcher(val.substring(1))}`;
            } 
        }

        const changeType = (name, value) => {
            let temp = {...Type512};
            temp[name] = capitalizeHandler(name, value);
            setType512(temp);
        }

        const inputArr = [modalities, function1, function2, saviorAnimals, animal3, animal4];
        const maxLength = ['animal3', 'animal4'].includes(e.target.name) ? 1 : 2;

        if (e.target.value.length > maxLength) {
            const nextInput = inputArr[Number(e.target.id) + 1];
            if (e.target.id != 5) {
                changeType(nextInput.current.name, e.target.value.substring(maxLength, maxLength + 1));
                nextInput.current.focus();
            }
        } else if (e.target.value === '') {
            const lastInput = inputArr[Number(e.target.id) - 1];
            changeType(e.target.name, '');
            if (Number(e.target.id) !== 0) {
                lastInput.current.focus();
            }
        } else {
            changeType(e.target.name, e.target.value);
        }

    }

    const Type512Focusing = () => {
        const typeLength = Object.values(Type512).join('').length;
        const inputArr = [modalities, function1, function2, saviorAnimals, animal3, animal4];
        let inputIndex;
        if (typeLength >= 9) {
            inputIndex = 5;
        } else if (typeLength >= 8) {
            inputIndex = 4;
        } else if (typeLength >= 6) {
            inputIndex = 3;
        } else if (typeLength >= 4) {
            inputIndex = 2;
        } else if (typeLength >= 2) {
            inputIndex = 1;
        } else {
            inputIndex = 0;
        }
        const focusingInput = inputArr[inputIndex];
        focusingInput.current.focus();
    }

    const checkBackSpace = (e) => {
        const inputArr = [modalities, function1, function2, saviorAnimals, animal3];
        if (e.key === 'Backspace' && e.target.value.length === 0) {
            const lastInput = inputArr[Number(e.target.id) - 1];
            lastInput.current.focus();
        }
    }

    return (
        <div className="functions_input">
            <div className="functions_input-section">
                <input type="text" name="modalities" className="functions_input-long" 
                ref={modalities} id={0} onChange={Type512Handler} value={Type512.modalities} onClick={Type512Focusing} />
            </div>
            <div className="functions_input-section">
                <input type="text" name="function1" className="functions_input-medium" 
                ref={function1} id={1} onChange={Type512Handler} onKeyDown={checkBackSpace} value={Type512.function1} onClick={Type512Focusing} />
                <div>/</div>
                <input type="text" name="function2" className="functions_input-medium" 
                ref={function2} id={2} onChange={Type512Handler} onKeyDown={checkBackSpace} value={Type512.function2} onClick={Type512Focusing} />
            </div>
            <div className="functions_input-section">
                <input type="text" name="saviorAnimals" className="functions_input-medium" 
                ref={saviorAnimals} id={3} onChange={Type512Handler} onKeyDown={checkBackSpace} value={Type512.saviorAnimals} onClick={Type512Focusing} />
                <div>/</div>
                <input type="text" name="animal3" className="functions_input-short" 
                ref={animal3} id={4} onChange={Type512Handler} onKeyDown={checkBackSpace} value={Type512.animal3} onClick={Type512Focusing} />
                <div>{'('}</div>
                <input type="text" name="animal4" className="functions_input-short" 
                ref={animal4} id={5} onChange={Type512Handler} onKeyDown={checkBackSpace} value={Type512.animal4} onClick={Type512Focusing} />
                <div>{')'}</div>
            </div>
        </div>
    )
}