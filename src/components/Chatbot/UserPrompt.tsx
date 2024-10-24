import React from 'react';
import { User } from 'lucide-react';

interface UserPromptProps {
  prompt: string;
}

const UserPrompt: React.FC<UserPromptProps> = ({ prompt }) => {
  return (
    <div className="flex justify-end mb-2">
      <div className="flex p-4 items-center">
        <User className="w-8 h-8 mr-2" />
        <div className="bg-blue-100 p-6 text-black py-2 px-4 rounded-lg">
         <p className="text-lg"> {prompt}</p>
        </div>
      </div>
    </div>
  );
};

export default UserPrompt;