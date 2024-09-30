import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;
    if (isOpen) {
      modal?.showModal();
    }

    return () => modal?.close();
  }, [isOpen]);

  return (
    <>
      <dialog ref={dialog} onClose={onClose} className="rounded-lg">
        {children}
      </dialog>
    </>
  );
}
