# Part 3: Debugging Report

## Broken Component - ToggleBox.jsx

### Original Code with Issues:
```jsx
import React, { useState } from 'react';

function ToggleBox() {
    const [isOn, setIsOn] = false;

    const handleClick = () => {
       setIsOn(!isOn);
    };

    return (
        <div>
        <button onClick={handleClick}>{isOn ? 'ON' : 'OFF'}</button>
        <p>Status: {isOn ? 'Active' : 'Inactive'}</p>
        </div>
    ); 
}

export default ToggleBox;
```

## Identified Issues & Fixes

1. **Incorrect useState Initialization**
* Issue: The initial state of `isOn` is set to `false` instead of a function that returns the initial state.

### Error:
```jsx
    const [isOn, setIsOn] = false;
```
### Fix:
```jsx
    const [isOn, setIsOn] = useState(false);
```

* Reason: The useState hook must be called as a function to initialize state properly.S

## Indentation & Formatting
* Error: Inconsistent indentation
* Fix: Properly format code for readability

Corrected Component Code
```jsx
import React, { useState } from 'react';

function ToggleBox() {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <div>
            <button onClick={handleClick}>
                {isOn ? 'ON' : 'OFF'}
            </button>
            <p>Status: {isOn ? 'Active' : 'Inactive'}</p>
        </div>
    );
}

export default ToggleBox;
```