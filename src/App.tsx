import React from "react";
import Builder from "./routes/Builder";

const App: React.FC = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">CV Builder</h1>
      <Builder />
    </div>
  );
};

export default App;
