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
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  // Color scheme: ClickTricks in primary blue, DB in secondary blue
  const clickTricksColor = variant === 'light' ? '#01a2f1' : '#ffffff';
  const dbColor = variant === 'light' ? '#0182c4' : '#ffffff';
  const iconColor = variant === 'light' ? '#01a2f1' : '#ffffff';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* 3D Database Icon */}
      <div className="relative">
        <svg 
          className={`${iconSizes[size]} transition-all duration-300`}
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 3D Database Base */}
          <defs>
            <linearGradient id="dbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={iconColor} stopOpacity="1" />
              <stop offset="100%" stopColor={iconColor} stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="dbShadow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={iconColor} stopOpacity="0.3" />
              <stop offset="100%" stopColor={iconColor} stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Database cylinder - bottom shadow */}
          <ellipse 
            cx="16" 
            cy="26" 
            rx="11" 
            ry="3" 
            fill="url(#dbShadow)"
            transform="translate(1, 1)"
          />
          
          {/* Database cylinder - main body */}
          <rect 
            x="5" 
            y="8" 
            width="22" 
            height="16" 
            fill="url(#dbGradient)"
            rx="1"
          />
          
          {/* Database cylinder - top ellipse */}
          <ellipse 
            cx="16" 
            cy="8" 
            rx="11" 
            ry="3" 
            fill={iconColor}
          />
          
          {/* Database cylinder - bottom ellipse */}
          <ellipse 
            cx="16" 
            cy="24" 
            rx="11" 
            ry="3" 
            fill="url(#dbGradient)"
          />
          
          {/* Database layers/records */}
          <ellipse 
            cx="16" 
            cy="12" 
            rx="8" 
            ry="2" 
            fill={iconColor}
            opacity="0.4"
          />
          <ellipse 
            cx="16" 
            cy="16" 
            rx="8" 
            ry="2" 
            fill={iconColor}
            opacity="0.3"
          />
          <ellipse 
            cx="16" 
            cy="20" 
            rx="8" 
            ry="2" 
            fill={iconColor}
            opacity="0.2"
          />
          
          {/* 3D highlight */}
          <ellipse 
            cx="16" 
            cy="8" 
            rx="8" 
            ry="2" 
            fill="white"
            opacity="0.3"
          />
        </svg>
        
        {/* Subtle glow effect */}
        <div 
          className={`absolute inset-0 ${iconSizes[size]} rounded-full blur-lg opacity-20`}
          style={{ backgroundColor: iconColor }}
        ></div>
      </div>
      
      {/* Logo Text */}
      <div className={`${sizeClasses[size]} font-bold typewriter tracking-tight`}>
        <span className="relative">
          <span style={{ color: clickTricksColor }}>ClickTricks</span>
          <span style={{ color: dbColor }} className="ml-1">DB</span>
        </span>
      </div>
    </div>
  );
}