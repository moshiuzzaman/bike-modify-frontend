import React from "react";
import Label from "./Label";

type InputProps = {
    register: any;
    defaultValue: any;
    name: string;
    label: string;
    type: string;
    placeholder: string;
    Icon?: any;
    required?: boolean;
    pattern?: string;
    readOnly?: boolean;
    title?: string;
};

const InputField = ({
    register,
    defaultValue,
    name,
    label,
    type,
    placeholder,
    Icon,
    required,
    pattern,
    readOnly,
    title,
}: InputProps) => {
    return (
        <>
            <Label required={true} label={label} />
            <div className="relative">
                {Icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-800 focus-within:text-gray-900 sm:text-base">
                            <Icon />{" "}
                        </span>
                    </div>
                )}
                <input
                    {...register(`${name}`, {
                        required: `${label} is required!`,
                        pattern: `Please Enter valid ${label}`,
                    })}
                    // pattern={pattern}
                    defaultValue={defaultValue}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    readOnly={readOnly}
                    title={title}
                    className={
                        Icon
                            ? "py-2 pl-10 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                            : "py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                    }
                />
            </div>
        </>
    );
};

export default InputField;
