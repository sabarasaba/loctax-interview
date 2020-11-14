import React, { FC, useRef } from 'react';
import cn from 'classnames';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { Transition } from '@headlessui/react';
import { useOverlay, useModal, OverlayContainer } from '@react-aria/overlays';

import s from './Modal.module.css';
import { Close } from 'src/components/icons';

interface Props {
  className?: string;
  children?: any;
  open: boolean;
  onClose: () => void;
}

const Modal: FC<Props> = ({
  className,
  children,
  open = false,
  onClose,
  ...props
}) => {
  const rootClassName = cn(s.root, className);
  let ref = useRef();
  let { modalProps } = useModal();
  // @ts-ignore
  let { dialogProps } = useDialog({}, ref);
  let { overlayProps } = useOverlay({
    isOpen: open,
    isDismissable: true,
    onClose,
    ...props,
  // @ts-ignore
  }, ref);

  return (
    <Transition show={open}>
      <OverlayContainer>
        <FocusScope contain restoreFocus autoFocus>
          <div className={rootClassName}>
            <Transition.Child
              enter="transition-opacity ease-linear duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-0"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className={s.modal}
                {...overlayProps}
                {...dialogProps}
                {...modalProps}
                // @ts-ignore
                ref={ref}
              >
                <button
                  onClick={onClose}
                  aria-label="Close Modal"
                  className="absolute top-0 right-0 p-3 pt-4 text-accents-5 transition ease-in-out duration-150 focus:outline-none hover:text-base-fg"
                >
                  <Close width={22} height={22} />
                </button>

                {children}
              </div>
            </Transition.Child>
          </div>
        </FocusScope>
      </OverlayContainer>
    </Transition>
  );
};

export default Modal;
