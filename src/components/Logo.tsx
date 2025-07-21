import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ size = 'md', variant = 'light', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const iconSizes = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 40, height: 40 }
  };

  // Color scheme: ClickTricks in primary blue, DB in secondary blue
  const clickTricksColor = variant === 'light' ? '#01a2f1' : '#ffffff';
  const dbColor = variant === 'light' ? '#0182c4' : '#ffffff';
  const logoIcon = variant === 'light' ? '/logo-icon-2.svg' : '/logo-icon-2-white.svg';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <Image 
        src={logoIcon}
        alt="ClickTricks DB Logo"
        width={iconSizes[size].width}
        height={iconSizes[size].height}
        className="transition-all duration-300"
      />
      
      {/* Logo Text */}
      <div className={`${sizeClasses[size]} font-bold font-jakarta tracking-tight`}>
        <span className="relative">
          <span style={{ color: clickTricksColor }}>ClickTricks</span>
          <span style={{ color: dbColor }} className="ml-1">DB</span>
        </span>
      </div>
    </div>
  );
}