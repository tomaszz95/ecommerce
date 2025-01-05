import { useState } from 'react'

const useInput = (
    validateValue: (value: string) => boolean,
    initialValue: string = '',
    filterValue?: (value: string) => string,
) => {
    const [value, setValue] = useState(initialValue)
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(value)
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let inputValue = event.target.value
        if (filterValue) {
            inputValue = filterValue(inputValue)
        }
        setValue(inputValue)
    }

    const inputBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setValue('')
        setIsTouched(false)
    }

    return {
        value,
        hasError,
        valueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    }
}

export default useInput
