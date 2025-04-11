import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface BootcampCardProps {
  title: string;
  description: string;
  formats: string[];
  objectives: string[];
  index: number;
  icon?: React.ReactNode;
  imageSrc?: string;
  featured?: boolean;
  category?: 'bootcamp' | 'welcome-pack' | 'timely-support';
  showLearnMore?: boolean;
  hideFormats?: boolean;
  learnMoreUrl?: string;
}

const BootcampCard: React.FC<BootcampCardProps> = ({
  title,
  description,
  formats,
  objectives,
  index,
  icon,
  imageSrc,
  featured = false,
  category = 'bootcamp',
  showLearnMore = false,
  hideFormats = false,
  learnMoreUrl = ''
}) => {
  const [expanded, setExpanded] = useState(false);
  
  // Category-based styles - text only, no borders
  const categoryTextColor = {
    'bootcamp': 'text-educational-blue',
    'welcome-pack': 'text-teal-600',
    'timely-support': 'text-amber-600'
  };

  return (
    <Card 
      className={`border border-slate-100 
                 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden 
                 animate-fade-in-up
                 h-full flex flex-col ${featured ? 'ring-1 ring-educational-blue/10' : ''}`} 
      style={{ animationDelay: `${index * 75}ms` }}
    >
      <CardHeader className={`pb-2 flex items-start gap-3 ${featured ? 'border-b border-slate-100' : ''}`}>
        {imageSrc ? (
          <div className="w-full overflow-hidden rounded-md mb-2">
            <AspectRatio ratio={16/9} className="bg-slate-100">
              <img 
                src={imageSrc} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        ) : icon ? (
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 mt-1">{icon}</div>
        ) : null}
        <div className="flex-grow">
          <div className="mb-1">
            {category === 'bootcamp' && (
              <span className="text-xs font-medium text-educational-blue uppercase tracking-wider">Bootcamp</span>
            )}
            {category === 'welcome-pack' && (
              <span className="text-xs font-medium text-teal-600 uppercase tracking-wider">Welcome Pack</span>
            )}
            {category === 'timely-support' && (
              <span className="text-xs font-medium text-amber-600 uppercase tracking-wider">Timely Support</span>
            )}
          </div>
          <CardTitle className="text-xl text-educational-dark font-display">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardDescription className="text-sm text-slate-600 mb-4 flex-grow">
          {description}
        </CardDescription>
        
        <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[500px]' : 'max-h-0'}`}>
          <div className="pt-3">
            {!hideFormats && formats.length > 0 && (
              <div className="mb-3">
                <h4 className="font-medium text-xs uppercase tracking-wider text-slate-500 mb-2">Format</h4>
                <div className="flex flex-wrap gap-2">
                  {formats.map((format, i) => (
                    <span key={i} className="inline-block px-2 py-1 bg-blue-50 text-educational-blue rounded-full text-xs">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <h4 className="font-medium text-xs uppercase tracking-wider text-slate-500 mb-2">What you'll get</h4>
            <ul className="space-y-2">
              {objectives.map((objective, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-1.5 h-1.5 rounded-full bg-educational-blue mr-2 mt-1.5"></span>
                  <span className="text-slate-700 text-sm">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="mt-3 text-educational-blue hover:text-educational-blue hover:bg-blue-50 w-full"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>View Less <ChevronUp className="ml-1 h-3 w-3" /></>
          ) : (
            <>View Details <ChevronDown className="ml-1 h-3 w-3" /></>
          )}
        </Button>
      </CardContent>
      
      <CardFooter className="pt-4 pb-6 px-6 flex gap-3">
        <Button 
          className="flex-1 bg-educational-blue hover:bg-educational-blue/90"
          onClick={() => window.open('https://www.mindstretcher.com/journey-to-psle-bootcamp-bundles/checkout', '_blank')}
        >
          Register Now <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
        
        {showLearnMore && (
          <Button 
            variant="outline"
            className="flex-1 border-educational-blue text-educational-blue hover:bg-blue-50"
            onClick={() => window.open(learnMoreUrl, '_blank')}
          >
            Learn More <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default BootcampCard;
