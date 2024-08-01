import { XMarkIcon } from '@heroicons/react/24/solid';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import styles from './index.module.css';
import type { FC, PropsWithChildren } from 'react';

type EditModalProps = {
  title?: string;
  description?: string;
  onClose: () => void;
};

const EditModal: FC<PropsWithChildren<EditModalProps>> = ({
  title,
  description,
  children,
  onClose,
}) => {
  return (
    <>
      <DialogPrimitive.Overlay className={styles.modalOverlay} />
      <DialogPrimitive.Content
        className={styles.modalContent}
        onCloseAutoFocus={() => onClose()}
      >
        <DialogPrimitive.Close asChild>
          <XMarkIcon className={styles.closeIcon} onClick={() => onClose()} />
        </DialogPrimitive.Close>
        <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
        <DialogPrimitive.Description>{description}</DialogPrimitive.Description>
        {children}
      </DialogPrimitive.Content>
    </>
  );
};

export default EditModal;
