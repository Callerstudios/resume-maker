import React, { useState } from "react";
import { defaultFormData } from "./constants";
import type { FormData } from "./utils/types";
import CVForm from "./components/CVForm";

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const handleFormChange = (updatedData: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">CV Builder</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded-lg">
        <CVForm formData={formData} onChange={handleFormChange} />
      </div>
    </div>
  );
};

export default App;
