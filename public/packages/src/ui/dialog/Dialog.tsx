'use client';
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Button } from '../button';

export type DialogProps = React.ComponentProps<
  (typeof DialogPrimitive)['Root']
>;

export const Dialog: React.FC<DialogProps> = ({ children, ...dialogProps }) => (
  <DialogPrimitive.Root {...dialogProps}>{children}</DialogPrimitive.Root>
);

interface DialogHeaderProps {
  title: string;
  sub_title?: string;
}

export const DialogHeader: React.FC<DialogHeaderProps> = ({
  title,
  sub_title,
}) => (
  <>
    <DialogPrimitive.Title className="text-mauve12 m-0 text-[17px] font-medium">
      <h3 className="font-regular text-black text-lg py-2">{title}</h3>
    </DialogPrimitive.Title>
    {
      <DialogPrimitive.Description className="text-black mt-[10px] mb-5 text-[15px] leading-normal">
        <p className="font-light text-sm text-black">{sub_title}</p>
      </DialogPrimitive.Description>
    }
  </>
);

type DialogContentProps = React.ComponentProps<
  (typeof DialogPrimitive)['Content']
>;

export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  ...dialogContentProps
}) => (
  <>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay style={{zIndex: 1000}} className="backdrop-blur-lg data-[state=open]:animate-overlayShow fixed inset-0" />
      <DialogPrimitive.Content
      style={{zIndex: 2000}}
        {...dialogContentProps}
        className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </>
);

interface DialogTriggerProps {
  children: React.ReactNode;
}

export const DialogTrigger: React.FC<DialogTriggerProps> = ({ children }) => (
  <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
);

interface DialogFooterProps {
  children: React.ReactNode;
}

export const DialogFooter: React.FC<DialogFooterProps> = ({ children }) => (
  <div className="mt-[25px] flex items-center gap-4 justify-end">
    <div>{children}</div>
    <DialogPrimitive.Close asChild>
      <Button color="primary">Close</Button>
    </DialogPrimitive.Close>
  </div>
);
