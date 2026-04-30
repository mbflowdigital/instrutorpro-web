import { cn, getInitials } from '@/lib/utils';
import Image from 'next/image';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  className?: string;
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
  xl: 'h-16 w-16 text-xl',
};

const imageSizes: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

export function Avatar({
  src,
  alt = '',
  name,
  size = 'md',
  className,
}: AvatarProps) {
  const px = imageSizes[size];

  if (src) {
    return (
      <div
        className={cn(
          'relative overflow-hidden rounded-full bg-gray-200',
          sizeClasses[size],
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={px}
          height={px}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full bg-blue-600 font-semibold text-white',
        sizeClasses[size],
        className
      )}
    >
      {name ? getInitials(name) : '?'}
    </div>
  );
}
