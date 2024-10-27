import React, { useState, useEffect } from 'react';

interface AIResponseProps {
  response: any;
}

const AIResponse: React.FC<AIResponseProps> = ({ response }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const steps = [
      { delay: 1000, action: () => setStep(1) }, // Thinking...
      { delay: 2000, action: () => setStep(2) }, // Generating...
      { delay: 3000, action: () => setStep(3) }, // Title and Introduction
      ...response.body.map((_: any, index: number) => ({
        delay: 4000 + index * 1000,
        action: () => setStep(4 + index),
      })), // Sections
      { delay: 4000 + response.body.length * 1000, action: () => setStep(4 + response.body.length) }, // Conclusion
    ];

    steps.forEach(({ delay, action }) => {
      setTimeout(action, delay);
    });
  }, [response]);

  return (
    <div className="bg-gray-100 text-black py-4 px-6 rounded-lg">
      {step === 0 && <p>Thinking...</p>}
      {step === 1 && <p>Generating...</p>}
      {step >= 2 && (
        <>
          <h3 className="font-bold text-xl mb-2">{response.title}</h3>
          <div className="bg-gray-200 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-lg mb-2">{response.intro.title}</h4>
            <p className="text-base">{response.intro.description}</p>
          </div>
        </>
      )}
      {step >= 3 &&
        response.body.map((section: any, sectionIndex: number) => (
          <div key={sectionIndex} className="mb-4">
            {step >= 4 + sectionIndex && (
              <>
                <h4 className="font-semibold text-blue-600 text-lg mb-3">{section.sectionTitle}</h4>
                {section.subSections.map((subSection: any, subSectionIndex: number) => (
                  <div key={subSectionIndex} className="mb-2">
                    <h5 className="font-semibold text-base mb-2">{subSection.title}:</h5>
                    <ul className="list-disc list-inside text-base">
                      {subSection.points.map((point: any, pointIndex: number) => (
                        <li key={pointIndex}>
                          <strong>{point.label}:</strong> {point.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      {step === 4 + response.body.length && (
        <div className="bg-gray-200 p-4 rounded-lg">
          <h4 className="font-semibold text-lg mb-2">{response.conclusion.title}</h4>
          <p className="text-base">{response.conclusion.description}</p>
        </div>
      )}
    </div>
  );
};

export default AIResponse;