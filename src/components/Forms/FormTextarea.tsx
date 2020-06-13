import React from 'react';
import FormFieldWrapper from './FormFieldWrapper';
import { Textarea } from "./index";

interface Props {
    name: string;
    id: string;
    placeholder?: string;
    value: string | number;
    onChange: (value: string) => void;
}

const FormTextarea = ({
  name,
  id,
  placeholder,
  value,
  onChange,
}: Props) => {
    return (
    <FormFieldWrapper id={id}>
    <Textarea
    name={name}
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    />
    </FormFieldWrapper>
)
};

export default FormTextarea;
