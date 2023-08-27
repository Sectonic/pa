import { Children } from "react";

const DiagramContainer = ({ children }) => {
    
    const averageValue = (child) => (child.props.value[0] + child.props.value[1]) / 2;

    const oneValues = Children.map(children, child => {
        if (child.props.value.length === 1) return child;
    }).sort((a,b) => b.props.value - a.props.value);

    const twoValues = Children.map(children, child => {
        if (child.props.value.length === 2) return child;
    }).sort((a,b) => averageValue(b) - averageValue(a));

    return (
        <>
            {oneValues}
            {twoValues}
        </>
    )
}

export default DiagramContainer;