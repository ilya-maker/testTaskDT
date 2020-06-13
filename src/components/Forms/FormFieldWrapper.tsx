import React from 'react';
import { Field, Label } from "./index";

interface Props {
    children: JSX.Element;
    id: string;
}

const FormFieldWrapper = ({
  children,
  id,
}: Props) => {

    return (
        <Field>
            <Label htmlFor={id}>
                {children}
            </Label>
        </Field>
    )
};

export default FormFieldWrapper;
