import React, { FC, useRef, JSXElementConstructor } from 'react';
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield';
import cn from 'classnames';

import s from './Input.module.css';

interface Props extends AriaTextFieldOptions {
  Component?: string | JSXElementConstructor<any>;
  onChange?: (...args: any[]) => any;
  className?: string;
  label: string;
}

const Input: FC<Props> = (props) => {
  const {
    Component = 'input',
    className,
    onChange,
    ...rest
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const rootClassName = cn(s.root, {}, className);
  const { labelProps, inputProps } = useTextField(rest, ref);

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }

    return null;
  };

  return (
    <div className={rootClassName}>
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
