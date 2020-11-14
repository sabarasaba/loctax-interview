import React, {
  FC,
  forwardRef,
  ButtonHTMLAttributes,
  JSXElementConstructor,
  useRef,
} from 'react';
import cn from 'classnames';
import { useButton } from 'react-aria';
import mergeRefs from 'react-merge-refs';

import s from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  href?: string;
  active?: boolean;
  type?: 'submit' | 'reset' | 'button';
  Component?: string | JSXElementConstructor<any>;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FC<Props> = forwardRef((props, buttonRef) => {
  const {
    className,
    children,
    active,
    onClick,
    Component = 'button',
    disabled = false,
    ...rest
  } = props;

  const ref = useRef<typeof HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton({
    ...rest,
    // @ts-ignore onClick === onPress for our purposes since we dont care
    // about mobile, I guess?
    onPress: onClick,
    isDisabled: disabled,
    elementType: Component,
  }, ref);

  const rootClassName = cn(s.root, {
    [s.disabled]: disabled,
  }, className);

  return (
    <Component
      aria-pressed={isPressed}
      ref={mergeRefs([ref, buttonRef])}
      {...buttonProps}
      className={rootClassName}
      disabled={disabled}
    >
      {children}
    </Component>
  );
});

export default Button;
