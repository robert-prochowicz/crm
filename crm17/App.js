import { createHeaderElement } from './components/Header.js';
import { createDashboardElement } from './components/Dashboard.js';

export function renderApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Could not find root element to mount to");
  }

  // Clear any previous content
  rootElement.innerHTML = '';

  const appContainer = document.createElement('div');
  appContainer.className = 'min-h-screen font-sans text-slate-800';
  
  const mainContent = document.createElement('main');
  mainContent.className = 'p-4 sm:p-6 lg:p-8';
  
  mainContent.appendChild(createDashboardElement());
  
  appContainer.appendChild(createHeaderElement());
  appContainer.appendChild(mainContent);
  
  rootElement.appendChild(appContainer);
}
