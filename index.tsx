import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// --- Types ---
interface CourseItem {
  day: string;
  lesson?: string;
  topic: string;
  details: string[];
  sessions: number;
  hours: number;
}

interface CourseData {
  title: string;
  duration: string;
  totalHours: string;
  items: CourseItem[];
}

// --- Data extracted from PDF OCR ---

const dataScienceCourse: CourseData = {
  title: 'DATA SCIENCE BOOTCAMP',
  duration: '10 Days',
  totalHours: '20 hours',
  items: [
    {
      day: 'Day-1',
      lesson: '1',
      topic: 'Data Science Introduction',
      details: [
        'Introduction to Data Science',
        "Python IDE's, Interactive Python, Google Colab Notebooks",
        'Exploratory Data Analysis, Python Libraries - Numpy, Pandas',
        'Statistical Computing: Probability Distributions',
        'AI for Data Science'
      ],
      sessions: 5,
      hours: 3.0
    },
    {
      day: 'Day-2 & 3',
      lesson: '2 & 3',
      topic: 'Machine Learning',
      details: [
        'Introduction to Machine Learning',
        'Machine Learning Algorithms',
        'Predictive Analytics',
        'Regression Techniques - Simple linear regression',
        'Regression Techniques - Logistic regression',
        'Regression Techniques - Logistic regression',
        'Regression Assumptions, Instrumental variables'
      ],
      sessions: 6,
      hours: 2.25
    },
    {
      day: 'Day-4',
      lesson: '4',
      topic: 'Classification Techniques',
      details: [
        'Classification Techniques, Iris data set, Titanic dataset',
        'KNN Classifier, SVM, Kernel SVM',
        'Bayes Theorem',
        'Naive Bayes Classification, Decision Trees, Random Forests'
      ],
      sessions: 4,
      hours: 4.0
    },
    {
      day: 'Day-5 & 6',
      lesson: '6, 7 & 8',
      topic: 'Unsupervised Learning',
      details: [
        'K-Means clustering',
        'Hierarchical clustering',
        'DBSCAN clustering',
        'Hyperparameter tuning (GridSearchCV)',
        'Dimensionality reduction with PCA, Model evaluation',
        'California housing price prediction'
      ],
      sessions: 6,
      hours: 2.25
    },
    {
      day: 'Day-7 & 8',
      lesson: '9, 10 & 11',
      topic: 'Introduction to Neural Networks',
      details: [
        'Artificial Neural Networks(ANN), RNN, CNN',
        'Activation functions, Sigmoid, Relu',
        'Tensorflow keras',
        'Handwritten Digits Recognition with MNIST Dataset',
        'Flask: Multiple disease prediction'
      ],
      sessions: 6,
      hours: 4.0
    },
    {
      day: 'Day-9 & 10',
      lesson: '12 & 13',
      topic: 'Generative AI',
      details: [
        'Introduction to Generative AI',
        'LLM-Large Language Models',
        'RAG- Retrieval Augmented Generation, Hands-On Exercise',
        'Agentic AI, Hands-On Exercise: WebScraping Agent, SQL Agent',
        'MCP-Model Context Protocol'
      ],
      sessions: 6,
      hours: 5.0
    }
  ]
};

const javaCourse: CourseData = {
  title: 'JAVA BOOTCAMP',
  duration: '24 days',
  totalHours: '40 Hours',
  items: [
    {
      day: 'Day-1 & 2',
      lesson: 'Lesson-1',
      topic: 'Java Basics',
      details: [
        'Basics of Java',
        'Data Types, Declarations',
        'Variables, Constants and Literals'
      ],
      sessions: 4,
      hours: 5.0
    },
    {
      day: 'Day-3 to 8',
      lesson: 'Lesson-2',
      topic: 'Classes and Objects',
      details: [
        'Class, Object and Types of Classes',
        'Methods in Java',
        'Constructor in Java',
        'Modifiers in Java',
        'Static Keyword, Final Keyword'
      ],
      sessions: 7,
      hours: 9.0
    },
    {
      day: 'Day-9 & 10',
      lesson: 'Lesson-3',
      topic: 'Basic OOP concepts',
      details: [
        'Encapsulation',
        'Inheritance',
        'Polymorphism',
        'Abstraction'
      ],
      sessions: 4,
      hours: 6.0
    },
    {
      day: 'Day-11 to 14',
      lesson: 'Lesson-4',
      topic: 'Arrays and Strings',
      details: [
        'String, String Buffer, StringBuilder',
        'Arrays'
      ],
      sessions: 4,
      hours: 5.0
    },
    {
      day: 'Day-15 to 22',
      lesson: 'Lesson-5',
      topic: 'Controlling Program Flow',
      details: [
        'Conditional Statements',
        'Iterations',
        'Scanner, Math, Random',
        'Accessors, mutators'
      ],
      sessions: 8,
      hours: 10.0
    },
    {
      day: 'Day-23 & 24',
      lesson: 'Lesson-6',
      topic: 'Project Work',
      details: [
        'Project Scope & Design',
        'Project Build & Test',
        'Project Build, Test & Deploy'
      ],
      sessions: 3,
      hours: 5.0
    }
  ]
};

const pythonCourse: CourseData = {
  title: 'PYTHON BOOTCAMP',
  duration: '15 Days',
  totalHours: '22 Hours',
  items: [
    {
      day: 'Day-1',
      topic: 'Foundations of Programming',
      details: [
        'Concepts in Programming Language, Client Server Architecture',
        'Pseudo Logic, Common Errors and Best Practices',
        'Foundational Mathematics in Programming'
      ],
      sessions: 1,
      hours: 1.5
    },
    {
      day: 'Day-2 & 3',
      topic: 'Python Introduction',
      details: [
        'Introduction to Python, IDEs, Google Colab Notebooks',
        'Comments, Arithmetic & Relational Operators',
        'Variables, Data types, Type casting, Date formats',
        'Import, pip, Num2words',
        'Dice rolls, Guess the Dice roll, Built-in Functions, String strip'
      ],
      sessions: 2,
      hours: 3.0
    },
    {
      day: 'Day-4 & 5',
      topic: 'Python Basics-1: Decision Structures',
      details: [
        'Simple IF, IF-ELIF-ELSE conditions',
        'Tax calculation, Marks and grade calculation',
        'List expressions, FilteredList, Positive Integers List',
        'Palindrome, Range, Quiz, Password Generator',
        'Loops: while break, continue'
      ],
      sessions: 2,
      hours: 3.0
    },
    {
      day: 'Day-6 & 7',
      topic: 'Python Basics-2: Loops, Files, Functions',
      details: [
        'For Loop, List: Addition, Append and Remove',
        'File Handling, Exceptions, File Word Counter',
        'Min/Max products',
        'Functions and practice exercises'
      ],
      sessions: 2,
      hours: 3.0
    },
    {
      day: 'Day-8 & 9',
      topic: 'Object Oriented Programming',
      details: [
        'Introduction to OOP, Classes and Objects',
        'Inheritance',
        'Decorators',
        'Hands-on: Volvo Express Speed Governer'
      ],
      sessions: 2,
      hours: 3.0
    },
    {
      day: 'Day-10 & 11',
      topic: 'HTML, SQL & Javascript Basics',
      details: [
        'HTML Basics, Web Architectures, CSS, Bootstrap',
        'Introduction to Javascript basics',
        'SDLC, Database concepts, SQL Basics',
        'Oracle APEX'
      ],
      sessions: 2,
      hours: 3.0
    },
    {
      day: 'Day-12 & 13',
      topic: 'Python Advanced-1',
      details: [
        'Python Objects - Dictionary & Tuple',
        'Lambda, Map, Reduce, Bubble Sort',
        'PyCharm IDE Introduction'
      ],
      sessions: 2,
      hours: 3.0
    },
    {
      day: 'Day-14 & 15',
      topic: 'Python Advanced-2 & Tests',
      details: [
        'Introduction to JSON, Read/Write JSON files',
        'Live Forex currency conversion project',
        'REST API, JSON Placeholder API, Postman Testing',
        'MCQ Quizzes and Practice Tests (1-4)'
      ],
      sessions: 2,
      hours: 2.5
    }
  ]
};

// --- Components ---

const CourseTable = ({ data }: { data: CourseData }) => {
  return (
    <div className="bg-white rounded-b-lg rounded-tr-lg shadow-lg overflow-hidden animate-fade-in border border-[#D7CCC8] border-t-0">
      {/* Header: Chocolate Background */}
      <div className="bg-[#3E2723] p-4 border-b-4 border-[#F57C00]">
        <h2 className="text-xl font-bold flex justify-between items-center flex-wrap">
          {/* Title: Gold */}
          <span className="text-[#FFC107] drop-shadow-sm tracking-wide">{data.title}</span>
          {/* Badge: Gold Background with Chocolate Text for readability */}
          <span className="text-sm font-semibold bg-[#FFC107] text-[#3E2723] px-3 py-1 rounded-full shadow-sm mt-2 sm:mt-0">
            Duration: {data.duration} | Total: {data.totalHours}
          </span>
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            {/* Table Header: Light Gold/Cream Background with Dark Brown Text */}
            <tr className="bg-[#FFECB3] border-b border-[#FFE082] text-[#3E2723] uppercase text-xs tracking-wider">
              <th className="p-4 font-bold w-28">Day</th>
              <th className="p-4 font-bold w-1/4">Topic</th>
              <th className="p-4 font-bold">Detailed Curriculum</th>
              <th className="p-4 font-bold w-24 text-right">Est. Hours</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.items.map((item, idx) => (
              <tr 
                key={idx} 
                className={`
                  border-b border-[#FFF3E0] transition-colors
                  ${idx % 2 === 0 ? 'bg-white' : 'bg-[#FFF8E1]'} 
                  hover:bg-[#FFE0B2]
                `}
              >
                {/* Day: Dark Pumpkin text */}
                <td className="p-4 font-bold align-top whitespace-nowrap text-[#E65100]">
                  {item.day}
                  {item.lesson && <div className="text-xs text-[#5D4037] opacity-80 mt-1">Lesson {item.lesson}</div>}
                </td>
                {/* Topic: Dark Chocolate text */}
                <td className="p-4 align-top font-bold text-[#3E2723]">
                  {item.topic}
                </td>
                <td className="p-4 align-top">
                  {/* Bullets: Pumpkin */}
                  <ul className="list-disc list-inside space-y-1 marker:text-[#F57C00]">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-[#4E342E] leading-relaxed">{detail}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-4 align-top text-right font-mono text-[#5D4037] font-medium">
                  {item.hours}h
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TabButton = ({ 
  label, 
  isActive, 
  onClick 
}: { 
  label: string; 
  isActive: boolean; 
  onClick: () => void; 
}) => (
  <button
    onClick={onClick}
    className={`
      flex-1 py-4 px-6 text-center font-bold focus:outline-none transition-all duration-200 uppercase tracking-wider text-sm
      ${isActive 
        ? 'bg-white text-[#E65100] border-t-4 border-[#E65100] rounded-t-lg z-10' 
        : 'bg-[#FFF8E1] text-[#5D4037] hover:bg-[#FFE0B2] border-b-2 border-[#D7CCC8] hover:text-[#E65100]'}
    `}
  >
    {label}
  </button>
);

const App = () => {
  const [activeTab, setActiveTab] = useState<'ds' | 'java' | 'python'>('ds');

  // Inject generic styles for animation and layout
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeIn 0.4s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    // Main Background: Light Warm Cream
    <div className="min-h-screen font-sans text-[#3E2723] p-4 sm:p-8 bg-[#FFF8E1]">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#3E2723] mb-2 tracking-tight">
            Bootcamp Training Coverage
          </h1>
          <p className="text-[#5D4037]">Comprehensive curriculum for Data Science, Java, and Python boot camps</p>
        </header>

        {/* Tabs Container */}
        <div className="flex flex-col sm:flex-row border-b border-[#D7CCC8]">
          <TabButton 
            label="Data Science" 
            isActive={activeTab === 'ds'} 
            onClick={() => setActiveTab('ds')} 
          />
          <TabButton 
            label="Java" 
            isActive={activeTab === 'java'} 
            onClick={() => setActiveTab('java')} 
          />
          <TabButton 
            label="Python" 
            isActive={activeTab === 'python'} 
            onClick={() => setActiveTab('python')} 
          />
        </div>

        {/* Content Area */}
        <div className="transition-all duration-300">
          {activeTab === 'ds' && <CourseTable data={dataScienceCourse} />}
          {activeTab === 'java' && <CourseTable data={javaCourse} />}
          {activeTab === 'python' && <CourseTable data={pythonCourse} />}
        </div>
      </div>
      
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);