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
        <div className="flex w-1/2 gap-2 items-center">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="flex-1 px-5 py-2.5 
                    text-base font-medium tracking-wide
                    text-white bg-transparent
                    rounded-lg border border-blue-400
                    shadow-[0_0_15px_rgba(0,140,255,0.3)]
                    transition-all duration-500
                    placeholder:text-blue-200/50
                    focus:outline-none
                    focus:border-blue-500
                    focus:shadow-[0_0_5px_rgb(0,140,255),0_0_25px_rgb(0,140,255)]
                    hover:shadow-[0_0_5px_rgb(0,140,255),0_0_25px_rgb(0,140,255)]"
            />
            <button
                onClick={handleSubmit}
                className="px-5 py-2.5 text-base font-bold tracking-[4px] text-white 
                 uppercase rounded-lg bg-blue-500 
                 shadow-[0_0_25px_rgb(0,140,255)] 
                 transition-all duration-500 
                 hover:shadow-[0_0_5px_rgb(0,140,255),0_0_25px_rgb(0,140,255),0_0_50px_rgb(0,140,255),0_0_100px_rgb(0,140,255)]
                 hover:bg-blue-600"
            >
                {buttonText}
            </button>
        </div>
    )
}

export default DesignInput
