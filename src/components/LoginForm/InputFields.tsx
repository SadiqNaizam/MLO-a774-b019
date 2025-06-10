import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { X, Eye, EyeOff } from 'lucide-react';

interface InputFieldsProps {
  email: string;
  onEmailChange: (email: string) => void;
  password: string;
  onPasswordChange: (password: string) => void;
  keepMeSignedIn: boolean;
  onKeepMeSignedInChange: (checked: boolean) => void;
  onForgotPassword: () => void;
  className?: string;
}

const InputFields: React.FC<InputFieldsProps> = ({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  keepMeSignedIn,
  onKeepMeSignedInChange,
  onForgotPassword,
  className,
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handlePasswordToggle = React.useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const handleClearEmail = React.useCallback(() => {
    onEmailChange('');
  }, [onEmailChange]);
  
  const handleKeepMeSignedInChange = React.useCallback((checked: boolean | 'indeterminate') => {
    // Radix Checkbox onCheckedChange can return 'indeterminate'
    if (typeof checked === 'boolean') {
        onKeepMeSignedInChange(checked);
    }
  }, [onKeepMeSignedInChange]);

  return (
    <div className={cn("space-y-4", className)}>
      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Username or Email *
        </Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className="pr-10"
          />
          {email && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
              onClick={handleClearEmail}
              aria-label="Clear email"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="password" className="text-sm font-medium text-foreground">
          Password *
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            className="pr-10"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
            onClick={handlePasswordToggle}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="keep-signed-in"
            checked={keepMeSignedIn}
            onCheckedChange={handleKeepMeSignedInChange}
          />
          <Label
            htmlFor="keep-signed-in"
            className="text-sm font-normal text-foreground cursor-pointer select-none"
          >
            Keep me signed in
          </Label>
        </div>
        <Button
          type="button"
          variant="link"
          className="p-0 h-auto text-sm font-medium text-primary hover:text-primary/90"
          onClick={onForgotPassword}
        >
          Forgot password?
        </Button>
      </div>
    </div>
  );
};

export default InputFields;
