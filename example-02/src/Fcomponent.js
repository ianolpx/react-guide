import React, { useState } from 'react';

function FCounter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
        <p>Functional Component</p>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default FCounter;