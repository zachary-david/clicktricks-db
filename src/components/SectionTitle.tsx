import { ReactElement } from 'react';

interface SectionTitleProps {
  text: string;
  icon?: ReactElement;
  variant?: 'default' | 'bordered';
}

export default function SectionTitle({ text, icon, variant = 'default' }: SectionTitleProps) {
  const baseClasses = "text-xs sm:text-sm font-bold uppercase tracking-wider typewriter inline-flex items-center gap-2";
  const colorStyle = { color: '#01a2f1' };
  
  if (variant === 'bordered') {
    return (
      <div className="text-center mb-6">
        <span 
          className={`${baseClasses} px-4 py-2 rounded-lg border`}
          style={{ 
            ...colorStyle, 
            borderColor: '#041926',
            borderWidth: '1px'
          }}
        >
          {icon && (
            <span className="inline-flex items-center">
              {icon}
            </span>
          )}
          {text}
        </span>
      </div>
    );
  }

  return (
    <div className="text-center mb-6">
      <span className={baseClasses} style={colorStyle}>
        {icon && (
          <span className="inline-flex items-center">
            {icon}
          </span>
        )}
        {text}
      </span>
    </div>
  );
}