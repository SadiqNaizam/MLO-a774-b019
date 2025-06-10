import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import InputFields from './InputFields';
import ActionButtons from './ActionButtons';
import HelperLinks from './HelperLinks';

interface FormCardProps {
  className?: string;
}

const FormCard: React.FC<FormCardProps> = ({ className }) => {
  const [email, setEmail] = React.useState<string>('michaelscott@ascendion.com');
  const [password, setPassword] = React.useState<string>('••••••••••');
  const [keepMeSignedIn, setKeepMeSignedIn] = React.useState<boolean>(true);
  const [isSigningIn, setIsSigningIn] = React.useState<boolean>(false);

  const handleEmailChange = React.useCallback((value: string) => setEmail(value), []);
  const handlePasswordChange = React.useCallback((value: string) => setPassword(value), []);
  const handleKeepMeSignedInChange = React.useCallback((checked: boolean) => setKeepMeSignedIn(checked), []);

  const handleSignIn = React.useCallback(async () => {
    setIsSigningIn(true);
    console.log('Attempting Sign In with:', { email, password, keepMeSignedIn });
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Sign In action complete (simulated)');
    setIsSigningIn(false);
    // In a real app, handle success/error states, navigation, etc.
  }, [email, password, keepMeSignedIn]);

  const handleForgotPassword = React.useCallback(() => {
    console.log('Forgot Password clicked');
    // Navigation or modal logic for forgot password
  }, []);

  const handleLoginWithCompany = React.useCallback(() => {
    console.log('Login with Company clicked');
    // Logic for company SSO
  }, []);

  const handleTroubleSigningIn = React.useCallback(() => {
    console.log('Trouble Signing In clicked');
    // Navigation to help page or modal
  }, []);

  const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSignIn(); // Trigger the sign-in logic on form submission
  }, [handleSignIn]);

  return (
    <Card className={cn("w-full max-w-md shadow-xl bg-card text-card-foreground", className)}>
      <CardHeader className="text-center space-y-1 pt-8">
        <CardTitle className="text-3xl font-bold">Get Started</CardTitle>
        <CardDescription className="text-base text-muted-foreground pb-2">
          Sign In to Your Account
        </CardDescription>
      </CardHeader>
      <CardContent className="px-8 pb-8 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputFields
            email={email}
            onEmailChange={handleEmailChange}
            password={password}
            onPasswordChange={handlePasswordChange}
            keepMeSignedIn={keepMeSignedIn}
            onKeepMeSignedInChange={handleKeepMeSignedInChange}
            onForgotPassword={handleForgotPassword}
          />
          <ActionButtons
            onSignIn={handleSignIn} // Passed to the primary button's onClick
            onLoginWithCompany={handleLoginWithCompany}
            isSigningIn={isSigningIn}
          />
        </form>
        <HelperLinks onTroubleSigningIn={handleTroubleSigningIn} />
      </CardContent>
    </Card>
  );
};

export default FormCard;
