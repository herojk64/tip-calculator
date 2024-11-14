import React from 'react';
import { strToUpper } from '../util/helper';
import './Input.scss'

interface InputInterface {
    name: string;
    type?: string;
    placeholder?: string;
    value?:string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?:string;
    icon?:string;
    className?:string
}

const Input = ({
    name,
    type = "text",
    placeholder,
    value,
    className="form-control",
    onChange,
    label,
    icon,
}: InputInterface) => {
    return (
        <div className={className}>
            <label htmlFor={name}>{label ?? strToUpper(name)}</label>
            <span data-icon={Boolean(icon)}>
                {icon
                ?
                <img src={icon} alt="icon"/>
                :
                undefined
                }
                <input 
                    type={type}
                    name={name}
                    id={name}
                    defaultValue={value ?? ''}
                    onChange={onChange ? (event) => onChange(event) : undefined}
                    placeholder={placeholder ?? ''}
                />
            </span>
        </div>
    );
}

export default Input;
