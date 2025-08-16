import React, { useState } from 'react';
import { MetricIndicator } from './MetricIndicator';

interface ImpactCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  metricIcon: React.ReactNode;
  metricLabel: string;
  metricVariant?: 'decrease' | 'increase' | 'neutral';
  backgroundColor?: string;
  onClick?: () => void;
}

export const ImpactCard: React.FC<ImpactCardProps> = ({
  icon,
  title,
  subtitle,
  metricIcon,
  metricLabel,
  metricVariant = 'neutral',
  backgroundColor = 'bg-gradient-to-br from-blue-50 to-green-50',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className={`
        flex w-[241px] min-h-[339px] items-center relative px-6 py-[33px] rounded-[33px] 
        max-md:w-[220px] max-md:min-h-80 max-md:px-5 max-md:py-7 
        max-sm:w-full max-sm:max-w-[280px] max-sm:min-h-[300px] max-sm:px-[18px] max-sm:py-[25px]
        transition-all duration-300 cursor-pointer
        ${isHovered ? 'transform scale-105 shadow-lg' : 'shadow-md'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
      aria-label={`Impact card: ${title} - ${subtitle}`}
    >
      <div 
        className={`absolute w-full h-full opacity-50 rounded-[33px] left-0 top-0 ${backgroundColor}`}
      />
      
      <div className="flex flex-col items-center gap-[22px] relative z-[1] w-full">
        <div className="transition-transform duration-300 hover:scale-110">
          {icon}
        </div>
        
        <div className="flex flex-col items-center gap-[18px] w-full">
          <header className="flex flex-col items-center gap-[9px] w-full">
            <h3 className="text-black text-center text-[17px] font-medium opacity-80 max-md:text-[15px] max-sm:text-sm">
              {title}
            </h3>
            <p className="text-[#2E7265] text-center text-[13px] font-medium w-full max-md:text-xs max-sm:text-[11px]">
              {subtitle}
            </p>
          </header>
          
          <MetricIndicator
            icon={metricIcon}
            label={metricLabel}
            variant={metricVariant}
          />
        </div>
      </div>
    </article>
  );
};
