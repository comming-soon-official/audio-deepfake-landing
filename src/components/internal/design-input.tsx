import React from 'react'

interface DesignInputProps {
    onSubmit?: (value: string) => void
    placeholder?: string
    buttonText?: string
}

const DesignInput: React.FC<DesignInputProps> = ({
    onSubmit,
    placeholder = 'Enter your email',
    buttonText = 'Join WaitList'
}) => {
    const [value, setValue] = React.useState('')

    const handleSubmit = () => {
        if (onSubmit) onSubmit(value)
    }

    return (
        <div className="flex flex-col sm:flex-row w-full md:w-1/2 gap-4 px-4">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="flex-1 px-6 py-3 
                    text-base font-medium
                    text-white bg-transparent
                    rounded-lg border border-purple-400
                    shadow-[0_0_15px_rgba(147,51,234,0.3)]
                    transition-all duration-300
                    placeholder:text-purple-200/50
                    focus:outline-none
                    focus:border-purple-500
                    focus:shadow-[0_0_5px_rgb(147,51,234),0_0_25px_rgb(147,51,234)]
                    hover:shadow-[0_0_5px_rgb(147,51,234),0_0_25px_rgb(147,51,234)]"
            />
            <button
                onClick={handleSubmit}
                className="px-8 py-3 text-base font-semibold tracking-wide text-white 
                    rounded-lg bg-gradient-to-r from-blue-600 to-purple-600
                    shadow-[0_0_25px_rgba(147,51,234,0.5)] 
                    transition-all duration-300 
                    hover:shadow-[0_0_5px_rgb(147,51,234),0_0_25px_rgb(147,51,234)]
                    hover:from-blue-700 hover:to-purple-700
                    active:transform active:scale-95"
            >
                {buttonText}
            </button>
        </div>
    )
}

export default DesignInput
