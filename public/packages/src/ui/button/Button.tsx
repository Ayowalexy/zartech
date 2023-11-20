'use client';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { forwardRef, createElement, ReactNode } from 'react';
import classNames from '../../utils/classNames';
import { SVGComponent } from '../../types/@global.module';

type InferredVariantProps = VariantProps<typeof buttonClasses>;
export type ButtonColor = NonNullable<InferredVariantProps['color']>;

export type ButtonBaseProps = {
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  StartIcon?: ReactNode;
} & Omit<InferredVariantProps, 'color'> & {
    color?: ButtonColor;
  };

const buttonClasses = cva(
  'whitespace-nowrap relative inline-flex items-center text-sm font-medium  rounded-md transition-colors disabled:cursor-not-allowed',
  {
    variants: {
      intent: {
        primary: [
          'bg-primary',
          'text-white',
          'hover:bg-primary',
          'hover:border border-[1px] hover:text-white',
          'transition',
        ],
        secondary: [
          'bg-white',
          'hover:bg-primary',
          'hover:border border-[1px] hover:border-primary hover:text-white',
          'transition',
        ],
      },
      color: {
        primary: 'bg-primary text-white',
        secondary: 'bg-white text-black',
      },
      rounded: {
        sm: 'rounded-sm',
        lg: 'rounded-full',
      },
      loading: {
        true: 'cursor-wait',
      },
      size: {
        base: 'h-9 px-4 py-2.5 ',
        lg: 'h-[36px] px-4 py-2.5 ',
      },
    },
    compoundVariants: [
      // Primary variants
      {
        loading: true,
        intent: 'primary',
        color: 'primary',
        className: 'bg-brand-subtle text-brand-subtle',
      },
      // Secondary variants
      {
        loading: true,
        intent: 'secondary',
        className: 'bg-subtle text-emphasis/80',
      },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'base',
    },
  }
);

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonBaseProps
>(function Button(props: ButtonBaseProps, forwardedRef) {
  const {
    loading = false,
    disabled,
    onClick,
    color,
    size,
    rounded,
    children,
    StartIcon,
    ...otherProps
  } = props;

  const element = createElement(
    'button',
    {
      ...otherProps,
      disabled,
      type: 'button',
      ref: forwardRef,
      className: classNames(buttonClasses({ size, color, loading, rounded })),
      onClick: disabled
        ? (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            e.preventDefault();
          }
        : props.onClick,
    },
    <>
      <div className="transition btn">
        {loading ? (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <svg
              className={classNames(
                'mx-4 h-5 w-5 animate-spin',
                color === 'primary' ? 'text-inverted' : 'text-emphasis'
              )}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        ) : (
          <div className='flex justify-between items-center gap-2'>
            {StartIcon && <div>{StartIcon}</div>}
            <div>{children}</div>
          </div>
        )}
      </div>
    </>
  );
  return element;
});
