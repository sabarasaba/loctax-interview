import React, { FC, useRef } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { useTextField } from '@react-aria/textfield';

interface Props extends SelectProps<OptionTypeBase> {
  className?: string;
  children?: any;
  style?: any;
}

const Select: FC<Props> = ({ className, children, style, ...rest }) => {
  let ref = useRef();
  // @ts-ignore
  let { labelProps } = useTextField(rest, ref);

  return (
    <div className={className} style={style}>
      <label {...labelProps} className="text-sm text-accents-6">{rest.label}</label>
      <ReactSelect
        {...rest}
        styles={{
          container: base => ({
            ...base,
            borderWidth: 0,
          }),
          control: base => ({
            ...base,
            borderWidth: 1,
            boxShadow: '0 !important',
            borderColor: 'var(--accents-2)',
            '&:hover': {
              borderColor: 'inherit',
            },
          }),
        }}
        // @ts-ignore
        ref={ref}
      />
    </div>
  );
};

export default Select;
