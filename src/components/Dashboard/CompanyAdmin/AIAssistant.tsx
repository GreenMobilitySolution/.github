import React, { useState } from 'react';
import { ChevronDown, Send } from 'lucide-react';
import { AIprompts } from '../../../../Database/AI/Prompts';
import PromptButton from '../../Buttons/PromptButton';
import UserPrompt from '../../Chatbot/UserPrompt';
import AIResponse from '../../Chatbot/AIResponse';

const AIAssistant: React.FC = () => {
  const [prompts, setPrompts] = useState<string[]>([]);
  const [responses, setResponses] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isPromptSelected, setIsPromptSelected] = useState(false);

  const handlePromptClick = (prompt: string) => {
    setPrompts([...prompts, prompt]);
    generateAIResponse(prompt);
    setIsPromptSelected(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = () => {
    if (inputValue.trim()) {
      setPrompts([...prompts, inputValue]);
      generateAIResponse(inputValue);
      setInputValue('');
      setIsPromptSelected(true);
    }
  };

  const generateAIResponse = (prompt: string) => {
    // Use the dummy data for AI response
    const response = AIprompts[0];
    setResponses([...responses, response]);
  };

  return (
    <div className="relative min-h-screen rounded-lg px-2 w-full">

      {/* History Dropdown Tab */}
      <div className="relative mb-6">
        <button className="bg-gray-500 text-white py-2 px-4 rounded-tl-full rounded-br-full flex items-center">
          History <ChevronDown className="ml-2 w-4 h-4" />
        </button>
        {/* Dropdown content */}
        <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg hidden">
          {/* Add history items here */}
        </div>
      </div>

      <div className='flex flex-col items-center justify-center flex-grow p-6'>

      {/* Prompt Options Section */}
      {!isPromptSelected && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <PromptButton label="Make Passenger Analysis" onClick={() => handlePromptClick("Make Passenger Analysis")} />
            <PromptButton label="Generate Driver Performance Report or Analysis" onClick={() => handlePromptClick("Generate Driver Performance Report or Analysis")} />
            <PromptButton label="Make Revenue Prediction" onClick={() => handlePromptClick("Make Revenue Prediction")} />
          </div>

          <div className="flex justify-around gap-4 mb-6 w-full md:w-2/3">
            <PromptButton label="Make Booking Analysis for Every Route and Comparison" onClick={() => handlePromptClick("Make Booking Analysis for Every Route and Comparison")} />
            <PromptButton label="Strategy Recommendation to Boost Passenger Numbers" onClick={() => handlePromptClick("Strategy Recommendation to Boost Passenger Numbers")} />
          </div>
        </>
      )}

      {/* Display Prompts and Responses */}
      {isPromptSelected && (
        <div className="w-full md:w-2/3">
          {prompts.map((prompt, index) => (
            <div key={index} className="mb-4">
              <UserPrompt prompt={prompt} />
              <AIResponse response={responses[index]} />
            </div>
          ))}
        </div>
      )}

      </div>

      {/* Prompt Input Field */}
      <div className="bg-white border border-gray-300 flex items-center mx-auto w-3/4 md:w-1/2 rounded-full fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <input
          type="text"
          placeholder="Write a prompt here"
          className="py-4 px-6 flex-1 text-lg rounded-full focus:outline-none"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="text-green-500 py-4 px-6 ml-2 flex items-center rounded-full" onClick={handleInputSubmit}>
          <Send className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;