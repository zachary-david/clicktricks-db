import { ReactElement } from 'react';

interface SectionHeaderProps {
  text: string;
  apps: Array<{
    name: string;
    icon: string | ReactElement; // Now supports both emoji and React icons
  }>;
}

export default function SectionHeader({ text, apps }: SectionHeaderProps) {
  return (
    <div className="text-center mb-6">
      <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full shadow-lg border-2 hover:shadow-xl transition-all duration-300" style={{borderColor: '#01a2f1'}}>
        <span className="text-xs font-bold uppercase tracking-wider typewriter" style={{color: '#01a2f1'}}>
          {text}
        </span>
        
        {apps.length > 0 && (
          <>
            <div className="w-px h-4" style={{backgroundColor: '#01a2f1', opacity: 0.3}}></div>
            <div className="flex items-center gap-1.5">
              {apps.map((app, index) => (
                <div key={app.name} className="flex items-center">
                  {index > 0 && (
                    <span className="text-xs mx-1.5 font-bold" style={{color: '#01a2f1'}}>+</span>
                  )}
                  <div 
                    className="w-6 h-6 flex items-center justify-center text-sm bg-gradient-to-br from-blue-50 to-blue-100 rounded-md border hover:shadow-md hover:scale-110 transition-all duration-200 cursor-pointer"
                    style={{borderColor: '#01a2f1', borderWidth: '1px'}}
                    title={app.name}
                  >
                    {app.icon}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Database-style connection line */}
      <div className="flex justify-center mt-3">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
      </div>
    </div>
  );
}