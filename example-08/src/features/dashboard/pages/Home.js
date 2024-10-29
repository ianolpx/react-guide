import React, { useState } from "react";
import InputComponent from "../components/InputComponent";

function Home() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`You typed: ${inputValue}`);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <InputComponent value={inputValue} onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Home;