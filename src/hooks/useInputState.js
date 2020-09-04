import { useState } from 'react';

export default (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const reset = () => setValue('')


    return [ value, reset ]
};