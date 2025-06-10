import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ActionButtonsProps {
  onSignIn: () => void;
  onLoginWithCompany: () => void;
  isSigningIn?: boolean;
  className?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onSignIn,
  onLoginWithCompany,
  isSigningIn = false,
  className,
}) => {
  return (
    <div className={cn("space-y-4 pt-2", className)}> {/* Added pt-2 for slight separation from inputs */}
      <Button
        type="submit" // This button will submit the form in FormCard.tsx
        variant="default" // Uses --primary and --primary-foreground by default
        className={cn(
          "w-full",
          // Overriding default variant colors to match image's dark button
          // Uses theme variables --foreground and --background
          "bg-foreground text-background hover:bg-foreground/90",
          "dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90" // Keep dark mode consistent with primary variant
        )}
        onClick={onSignIn} // Also call onSignIn handler directly if needed, though form's onSubmit is primary
        disabled={isSigningIn}
      >
        {isSigningIn ? 'Signing In...' : 'Sign In'}
        {!isSigningIn && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>

      <div className="relative my-2"> 
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-card px-2 text-muted-foreground">
            or
          </span>
        </div>
      </div>

      <Button
        type="button"
        variant="secondary" // Uses --secondary and --secondary-foreground
        className="w-full"
        onClick={onLoginWithCompany}
        disabled={isSigningIn}
      >
        Login with company
      </Button>
    </div>
  );
};

export default ActionButtons;
