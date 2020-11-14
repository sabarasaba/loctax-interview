import React, { FC, useRef, JSXElementConstructor } from 'react';
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield';

interface Props extends AriaTextFieldOptions {
  Component?: string | JSXElementConstructor<any>;
  onChange?: (...args: any[]) => any;
  label: string;
}

const Input: FC<Props> = (props) => {
  const {
    Component = 'input',
    onChange,
    ...rest
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps } = useTextField(rest, ref);

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }

    return null;
  };

  return (
    <div>
      <label {...labelProps}>{rest.label}</label>
      <Component
        {...rest}
        {...inputProps}
        ref={ref}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
    </div>
  );
};

export default Input;
