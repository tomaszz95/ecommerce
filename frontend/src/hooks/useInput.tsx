import { useState } from 'react'

const useInput = (validateValue: (value: string) => boolean) => {
    const [value, setValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(value)
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value)
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
