'use client';
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import classNames from '../../utils/classNames';

export type AvatarProps = {
  className?: string;
  size?: 'xxs' | 'xs' | 'xsm' | 'sm' | 'md' | 'mdLg' | 'lg' | 'xl';
  title?: string;
  alt: string;
  href?: string;
  fallback?: React.ReactNode;
  indicator?: React.ReactNode;
  asChild?: boolean;
};

const sizesPropsBySize = {
  xxs: 'w-3.5 h-3.5 min-w-3.5 min-h-3.5', // 14px
  xs: 'w-4 h-4 min-w-4 min-h-4 max-h-4', // 16px
  xsm: 'w-5 h-5 min-w-5 min-h-5', // 20px
  sm: 'w-6 h-6 min-w-6 min-h-6', // 24px
  md: 'w-8 h-8 min-w-8 min-h-8', // 32px
  mdLg: 'w-10 h-10 min-w-10 min-h-10', //40px
  lg: 'w-16 h-16 min-w-16 min-h-16', // 64px
  xl: 'w-24 h-24 min-w-24 min-h-24', // 96px
} as const;

export const Avatar = (props: AvatarProps) => {
  const { size = 'md', alt, title, href, indicator } = props;
  const rootClass = classNames(
    'aspect-square rounded-full',
    sizesPropsBySize[size]
  );
  return (
    <div className='flex gap-2 justisfy-start items-center'>
      <AvatarPrimitive.Root
        className={classNames(
          'bg-emphasis item-center relative inline-flex aspect-square justify-center rounded-full',
          indicator ? 'overflow-visible' : 'overflow-hidden',
          props.className,
          sizesPropsBySize[size]
        )}
      >
        <>
          <AvatarPrimitive.Image
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt={alt}
            className={classNames(
              'aspect-square rounded-full',
              sizesPropsBySize[size]
            )}
          />
          <AvatarPrimitive.Fallback
            delayMs={600}
            asChild={props.asChild}
            className="flex h-full items-center justify-center"
          >
            <>
              {props.fallback ? (
                props.fallback
              ) : (
                <img src="" alt={alt} className={rootClass} />
              )}
            </>
          </AvatarPrimitive.Fallback>
        </>
      </AvatarPrimitive.Root>
     {indicator}
    </div>
  );
};
