import React from 'react';
import { ImpactCard } from './ImpactCard';
import { 
  HappyFaceIcon, 
  DocumentIcon, 
  TargetIcon, 
  AwardIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  MinusIcon
} from './icons';

export const ImpactSection: React.FC = () => {
  const handleCardClick = (cardTitle: string) => {
    console.log(`Clicked on ${cardTitle} card`);
    // Here you could add navigation, modal opening, or other interactions
  };

  const impactData = [
    {
      icon: <HappyFaceIcon />,
      title: "Employees feel calmer",
      subtitle: "Lower stress after just one session",
      metricIcon: <ArrowDownIcon />,
      metricLabel: "stress",
      metricVariant: "decrease" as const,
      backgroundColor: "bg-gradient-to-br from-green-50 to-blue-50"
    },
    {
      icon: <DocumentIcon />,
      title: "HR teams get fewer queries",
      subtitle: "Fewer CTC & Tax questions",
      metricIcon: <MinusIcon />,
      metricLabel: "queries",
      metricVariant: "decrease" as const,
      backgroundColor: "bg-gradient-to-br from-orange-50 to-yellow-50"
    },
    {
      icon: <TargetIcon />,
      title: "Managers see better focus",
      subtitle: "Improved morale & productivity",
      metricIcon: <ArrowUpIcon />,
      metricLabel: "focus",
      metricVariant: "increase" as const,
      backgroundColor: "bg-gradient-to-br from-teal-50 to-green-50"
    },
    {
      icon: <AwardIcon />,
      title: "Organisations retain talent",
      subtitle: "Happier, loyal teams",
      metricIcon: <ArrowUpIcon />,
      metricLabel: "retention",
      metricVariant: "increase" as const,
      backgroundColor: "bg-gradient-to-br from-purple-50 to-pink-50"
    }
  ];

  return (
    <section 
      className="flex w-full max-w-[1022px] flex-col items-center gap-[30px] mx-auto my-0 px-5 py-10 max-md:px-[15px] max-md:py-[30px] max-sm:gap-[25px] max-sm:px-2.5 max-sm:py-5"
      aria-labelledby="impact-section-title"
    >
      <header className="flex flex-col items-center gap-1 w-full max-w-[345px]">
        <h1 
          id="impact-section-title"
          className="text-[#357369] text-center text-[40px] font-black leading-[62px] max-md:text-[32px] max-md:leading-[50px] max-sm:text-[28px] max-sm:leading-[42px]"
        >
          The Finsage Impact
        </h1>
        <p className="text-[#2E7265] text-center text-[17px] font-medium max-md:text-[15px] max-sm:text-sm">
          Proven change you can see in your team
        </p>
      </header>
      
      <div 
        className="flex items-start gap-[19px] w-full flex-wrap justify-center max-md:gap-[15px] max-sm:flex-col max-sm:items-center max-sm:gap-5"
        role="list"
        aria-label="Impact metrics"
      >
        {impactData.map((impact, index) => (
          <div key={index} role="listitem">
            <ImpactCard
              icon={impact.icon}
              title={impact.title}
              subtitle={impact.subtitle}
              metricIcon={impact.metricIcon}
              metricLabel={impact.metricLabel}
              metricVariant={impact.metricVariant}
              backgroundColor={impact.backgroundColor}
              onClick={() => handleCardClick(impact.title)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
