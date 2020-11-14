import React, {
  FC,
  forwardRef,
  ButtonHTMLAttributes,
  JSXElementConstructor,
  useRef,
} from 'react';
import { useButton } from 'react-aria';
import mergeRefs from 'react-merge-refs';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
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
    style = {},
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

  return (
    <Component
      aria-pressed={isPressed}
      ref={mergeRefs([ref, buttonRef])}
      {...buttonProps}
      style={style}
      disabled={disabled}
    >
      {children}
    </Component>
  );
});

export default Button;
