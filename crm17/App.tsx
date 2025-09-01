import React from 'react';
import Header from './components/Header.tsx';
import Dashboard from './components/Dashboard.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        <Dashboard />
      </main>
    </div>
  );
};

export default App;