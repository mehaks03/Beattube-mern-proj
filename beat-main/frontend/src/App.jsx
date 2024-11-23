import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Body from "./components/Body";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
      <div className="h-screen bg-gradient-to-r from-slate-900 to-slate-700">
        <Body />
      </div>
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;
