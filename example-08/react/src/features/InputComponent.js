import React from "react";

function InputComponent({ value, onChange }) {
    return (
        <div>
            <label>
                Name:
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    />
            </label>
        </div>
        
    );
}

export default InputComponent;
