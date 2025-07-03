import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// ✅ correct: matches your renamed file
import { AppThemeProvider } from './theme/ThemeProvider';
 // ✅ new

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>
);
