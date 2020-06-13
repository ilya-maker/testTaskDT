import React from 'react';
import FormFieldWrapper from './FormFieldWrapper';
import { Input } from "./index";

interface Props {
    type: string;
    name: string;
    id: string;
    placeholder?: string;
    value: string | number;
    onChange: (value: string) => void;
}

const FormInput = ({
   type = 'text',
   name,
   id,
   placeholder,
   value,
   onChange,
}: Props) => {

    return (
        <FormFieldWrapper id={id}>
            <Input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </FormFieldWrapper>
    )
};

export default FormInput;
