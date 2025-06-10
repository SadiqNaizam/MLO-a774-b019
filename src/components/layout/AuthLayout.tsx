import React from 'react';
import { cn } from '@/lib/utils';

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen flex flex-col lg:flex-row bg-background", className)}>
      {/* Left Decorative Panel - Hidden on small screens, takes half width on large screens */}
      <div className="relative hidden lg:flex lg:w-1/2 flex-col items-start justify-between p-8 overflow-hidden">
        {/* Ascendion Logo - Top Left */} 
        <div className="z-10">
          <span className="text-2xl font-bold text-primary">ASCENDION</span>
          <p className="text-xs text-muted-foreground -mt-0.5">TECH IS THE NEW REALITY</p>
        </div>
        
        {/* Decorative Abstract Background Shapes */}
        {/* These are simplified representations using theme colors and opacities */}
        <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
          {/* Large primary color shape (approximates blue swoosh) */}
          <div className="absolute w-[calc(100%+200px)] h-[calc(100%+100px)] 
                          bg-primary/10 rounded-full 
                          -bottom-[35%] -left-[30%] transform">
          </div>
          {/* Secondary lighter card color shape (approximates white/grey swoosh) */}
          <div className="absolute w-[calc(80%+150px)] h-[calc(80%+50px)] 
                          bg-card/40 rounded-full 
                          -top-[25%] -right-[35%] transform">
          </div>
           {/* Central subtle primary color accent */}
           <div className="absolute w-[calc(60%+100px)] h-[calc(60%+100px)] 
                          bg-primary/5 rounded-full 
                          top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          </div>
        </div>

        {/* Footer text or small logo at the bottom of left panel */}
        <div className="z-10 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Ascendion. All rights reserved.
        </div>
      </div>

      {/* Right Content Panel (for login/signup form) */}
      {/* Takes full width on small screens, half on large screens */}
      {/* Centers its content vertically and horizontally */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8 relative">
        {/* Ascendion Logo - Top Left (for mobile/smaller screens where left panel is hidden) */}
        <div className="lg:hidden absolute top-6 left-6 z-20 sm:top-8 sm:left-8">
          <span className="text-xl font-bold text-primary">ASCENDION</span>
          <p className="text-xs text-muted-foreground -mt-0.5">TECH IS THE NEW REALITY</p>
        </div>
        <div className="w-full max-w-md mt-16 lg:mt-0"> {/* Added margin-top for mobile to clear logo */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
