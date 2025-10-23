import React from 'react';

type ButtonProps<T extends React.ElementType> = {
  as?: T;
  variant?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as'>;

const Button = <T extends React.ElementType = 'button'>({
  as,
  variant = 'primary',
  className = '',
  children,
  ...props
// Fix: Changed return type from JSX.Element to React.ReactElement to resolve JSX namespace and type inference errors.
}: ButtonProps<T>): React.ReactElement => {
  const Component = as || 'button';
  
  const baseStyles = "inline-block font-bold text-center rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 px-8 py-3";
  
  const variantStyles = {
    primary: "bg-nexo-teal text-white hover:bg-nexo-teal/90 focus:ring-nexo-teal",
    secondary: "bg-transparent text-nexo-deep-blue border-2 border-nexo-deep-blue hover:bg-nexo-deep-blue hover:text-white focus:ring-nexo-deep-blue",
  };

  return (
    <Component className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Button;