import React from 'react'
import DeploymentForm from './DeploymentForm';
import GithubStatusPage from './GithubStatusPage';
import GotoHome from './GotoHome';

const ServicesNewPage = () => {
  return (
  <>
  <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <GotoHome/>
      <GithubStatusPage/>
      <DeploymentForm />
    </div>
  </>
    
  );
};

export default ServicesNewPage;
