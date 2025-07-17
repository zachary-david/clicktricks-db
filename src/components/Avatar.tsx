"use client";

interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  seed?: string;
}

export default function Avatar({ name, size = 'md', className = '', seed }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-xl',
    xl: 'w-20 h-20 text-2xl'
  };

  // Generate consistent colors based on name
  const getAvatarColor = (name: string) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-purple-500 to-purple-600',
      'from-red-500 to-red-600',
      'from-yellow-500 to-yellow-600',
      'from-pink-500 to-pink-600',
      'from-indigo-500 to-indigo-600',
      'from-teal-500 to-teal-600',
      'from-orange-500 to-orange-600',
      'from-gray-500 to-gray-600'
    ];
    
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
  };

  // Generate professional avatar using DiceBear API
  const generateAvatar = (name: string, seed?: string) => {
    const avatarSeed = seed || name.toLowerCase().replace(/\s+/g, '');
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}&backgroundColor=transparent&radius=50`;
  };

  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className={`relative ${className}`}>
      {/* Professional avatar image */}
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden shadow-lg border-2 border-white/20`}>
        <img
          src={generateAvatar(name, seed)}
          alt={`${name}'s avatar`}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to gradient avatar with initials
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.style.display = 'flex';
            }
          }}
        />
        {/* Fallback gradient avatar */}
        <div 
          className={`${sizeClasses[size]} bg-gradient-to-br ${getAvatarColor(name)} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
          style={{ display: 'none' }}
        >
          {initials}
        </div>
      </div>
      
      {/* Professional status indicator */}
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
    </div>
  );
}