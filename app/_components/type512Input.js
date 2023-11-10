import { useRef } from "react"

export const Type512Input = ({ Type512, setType512, label }) => {
    const inputRef = useRef(null);

    const Type512Handler = (e) => {
        const inputValue = e.target.value;
        var lettersOnly = inputValue.replace(/[^A-Za-z]/g, ''); 
        
        if (inputValue.length < Type512.length) {
            lettersOnly = Type512.replace(/[^A-Za-z]/g, '').substring(0, Type512.replace(/[^A-Za-z]/g, '').length - 1);
        }

        let value = '';
        for (let i = 0; i < lettersOnly.length; i++) {
            if (i === 0) {
                value += lettersOnly[i].toLowerCase() === 'x' ? 'x' : lettersOnly[i].toUpperCase();
            } else if (i === 1) {
                value += (lettersOnly[i].toLowerCase() === 'x' ? 'x' : lettersOnly[i].toUpperCase()) + ' ';
            } else if (i === 2) {
                value += lettersOnly[i].toLowerCase() === 'x' ? 'x' : lettersOnly[i].toUpperCase();
            } else if (i === 3) {
                value += (lettersOnly[i].toLowerCase() === 'x' ? 'x' : lettersOnly[i].toLowerCase()) + '/';
            } else if (i === 4) {
                value += lettersOnly[i].toLowerCase() === 'x' ? 'x' : lettersOnly[i].toUpperCase();
            } else if (i === 5) {
                value += (lettersOnly[i].toLowerCase() === 'x' ? 'x' : lettersOnly[i].toLowerCase()) + ' ';
            } else if (i === 6) {
                 value += lettersOnly[i].toLowerCase() === 'x' ? 'x' : lettersOnly[i].toUpperCase()
            } else if (i === 7) {
                value += (lettersOnly[i].toLowerCase() === 'x' ? 'x' : lettersOnly[i].toUpperCase()) + '/';
            } else if (i === 8) {
                value += (lettersOnly[i].toLowerCase() === 'x' ? 'x' : lettersOnly[i].toUpperCase()) + '(';
            } else if (i === 9) {
                value += (lettersOnly[i].toLowerCase() === 'x' ? 'x' : lettersOnly[i].toUpperCase()) + ')'
            }
        }

        setType512(value);
    }

    return (
        label ? (
            <>
                <label className="register_label">{label}</label>
                <input type="text" value={Type512} onChange={Type512Handler} ref={inputRef} placeholder="xx xx/xx xx/x(x)" />
            </>
        ) : (
            <div className="functions_input">
            <input type="text" value={Type512} onChange={Type512Handler} ref={inputRef} placeholder="xx xx/xx xx/x(x)" />
        </div>
        )
    )
}