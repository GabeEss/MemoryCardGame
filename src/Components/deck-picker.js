import React from "react";

const DeckPicker = (props) => {
    const { options, selectedOption, onOptionSelect } = props;
    return(
        <select value={selectedOption} onChange={(e) => onOptionSelect(e.target.value)}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
            ))}
        </select>
    )
}

export default DeckPicker;