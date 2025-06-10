import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HelperLinksProps {
  onTroubleSigningIn: () => void;
  className?: string;
}

const HelperLinks: React.FC<HelperLinksProps> = ({ onTroubleSigningIn, className }) => {
  return (
    <p className={cn("text-center text-sm text-muted-foreground pt-2", className)}> {/* Added pt-2 for slight separation */}
      Still have trouble signing in?{' '}
      <Button
        variant="link"
        className="p-0 h-auto text-sm font-medium text-primary hover:text-primary/90"
        onClick={onTroubleSigningIn}
      >
        Click Here
      </Button>
    </p>
  );
};

export default HelperLinks;
