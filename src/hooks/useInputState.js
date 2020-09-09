import { useState } from 'react';

/**
 * - Sets the default value of the input field
 * - Can clear the input field
 */
export default (initialValue) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (event) => setValue(event.target.value) 
	const reset = () => setValue('');

	return [value, reset, onChange];
};
