export const required = value => {
	if (value) return undefined;
	return 'Field is required';
}

const maxLength = max => value => {
	return value && value.length > max ? `Must be ${max} characters or less` : undefined
}
export const maxLength15 = maxLength(15)
export const maxLength20 = maxLength(20)
export const maxLength40 = maxLength(40)