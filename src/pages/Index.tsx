import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import FormCard from '../components/LoginForm/FormCard';

/**
 * IndexPage serves as the main entry point for the login interface.
 * It utilizes AuthLayout to provide the overall page structure and centers the FormCard component.
 */
const IndexPage: React.FC = () => {
  return (
    <AuthLayout>
      <FormCard />
    </AuthLayout>
  );
};

export default IndexPage;
