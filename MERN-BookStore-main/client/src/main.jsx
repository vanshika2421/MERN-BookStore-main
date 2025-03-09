import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ClerkProvider } from "@clerk/clerk-react";

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "missing-key";

console.log("Clerk Key:", clerkKey); // ✅ Debugging

if (clerkKey === "missing-key") {
  console.error("❌ Clerk Publishable Key is missing! Check .env file.");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkKey}>
    <BrowserRouter>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </ClerkProvider>
);
