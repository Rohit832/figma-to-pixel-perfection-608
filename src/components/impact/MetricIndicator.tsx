import React from 'react';

interface MetricIndicatorProps {
  icon: React.ReactNode;
  label: string;
  variant?: 'decrease' | 'increase' | 'neutral';
  className?: string;
}

export const MetricIndicator: React.FC<MetricIndicatorProps> = ({
  icon,
  label,
  variant = 'neutral',
  className = ''
}) => {
  return (
    <div 
      className={`flex justify-center items-center gap-1 bg-[rgba(56,120,109,0.10)] p-[3px] rounded-[30px] max-sm:p-0.5 transition-all duration-200 hover:bg-[rgba(56,120,109,0.15)] ${className}`}
      role="status"
      aria-label={`${variant === 'decrease' ? 'Decreased' : variant === 'increase' ? 'Increased' : ''} ${label}`}
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <span className="text-[#2E7265] text-center text-xs font-normal opacity-80 max-sm:text-[11px]">
        {label}
      </span>
    </div>
  );
};
