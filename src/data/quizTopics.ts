
export interface QuizTopic {
  name: string;
  questions: Array<{
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }>;
}

export const quizTopics: QuizTopic[] = [
  {
    name: "AI & Machine Learning Fundamentals",
    questions: [
      {
        id: 1,
        question: "What does AI stand for?",
        options: [
          "Artificial Intelligence",
          "Automated Integration",
          "Advanced Interface",
          "Algorithmic Implementation"
        ],
        correctAnswer: 0,
        explanation: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines that are programmed to think and act like humans."
      },
      {
        id: 2,
        question: "Which of the following is a type of machine learning?",
        options: [
          "Supervised Learning",
          "Database Learning",
          "Interface Learning",
          "Protocol Learning"
        ],
        correctAnswer: 0,
        explanation: "Supervised Learning is a type of machine learning where algorithms learn from labeled training data to make predictions or decisions."
      },
      {
        id: 3,
        question: "What is a neural network inspired by?",
        options: [
          "Computer circuits",
          "The human brain",
          "Mathematical equations",
          "Database structures"
        ],
        correctAnswer: 1,
        explanation: "Neural networks are inspired by the human brain and nervous system, mimicking how biological neurons process and transmit information."
      },
      {
        id: 4,
        question: "What does NLP stand for in AI?",
        options: [
          "Network Learning Protocol",
          "Natural Language Processing",
          "Neural Logic Programming",
          "Numerical Linear Processing"
        ],
        correctAnswer: 1,
        explanation: "NLP stands for Natural Language Processing, which is a branch of AI that helps computers understand, interpret, and manipulate human language."
      },
      {
        id: 5,
        question: "Which algorithm is commonly used for image recognition?",
        options: [
          "Linear Regression",
          "Decision Trees",
          "Convolutional Neural Networks (CNN)",
          "K-Means Clustering"
        ],
        correctAnswer: 2,
        explanation: "Convolutional Neural Networks (CNNs) are specifically designed for processing grid-like data such as images, making them ideal for image recognition tasks."
      }
    ]
  },
  {
    name: "Generative AI & Large Language Models",
    questions: [
      {
        id: 1,
        question: "Which company developed ChatGPT?",
        options: [
          "Google",
          "Microsoft",
          "OpenAI",
          "Meta"
        ],
        correctAnswer: 2,
        explanation: "ChatGPT was developed by OpenAI, an AI research company focused on developing and promoting friendly AI for the benefit of humanity."
      },
      {
        id: 2,
        question: "What does GPT stand for in ChatGPT?",
        options: [
          "General Purpose Technology",
          "Generative Pre-trained Transformer",
          "Global Processing Tool",
          "Graphical Programming Template"
        ],
        correctAnswer: 1,
        explanation: "GPT stands for Generative Pre-trained Transformer, a type of neural network architecture designed for natural language processing tasks."
      },
      {
        id: 3,
        question: "What is the main advantage of transformer architecture?",
        options: [
          "Lower memory usage",
          "Attention mechanism",
          "Faster training",
          "Smaller model size"
        ],
        correctAnswer: 1,
        explanation: "The attention mechanism in transformers allows the model to focus on relevant parts of the input sequence, making it highly effective for language tasks."
      },
      {
        id: 4,
        question: "What is prompt engineering?",
        options: [
          "Building AI hardware",
          "Creating software prompts",
          "Crafting effective AI inputs",
          "Engineering AI responses"
        ],
        correctAnswer: 2,
        explanation: "Prompt engineering is the practice of crafting effective inputs to get desired outputs from AI language models."
      },
      {
        id: 5,
        question: "What is fine-tuning in the context of LLMs?",
        options: [
          "Adjusting hardware settings",
          "Customizing models for specific tasks",
          "Reducing model size",
          "Increasing processing speed"
        ],
        correctAnswer: 1,
        explanation: "Fine-tuning involves training a pre-trained model on specific data to adapt it for particular tasks or domains."
      }
    ]
  },
  {
    name: "AI Ethics & Society",
    questions: [
      {
        id: 1,
        question: "What is algorithmic bias?",
        options: [
          "AI preference for certain algorithms",
          "Unfair discrimination in AI decisions",
          "Technical errors in code",
          "Speed differences in processing"
        ],
        correctAnswer: 1,
        explanation: "Algorithmic bias refers to systematic unfair discrimination that can occur in AI systems, often reflecting biases present in training data."
      },
      {
        id: 2,
        question: "What does 'explainable AI' aim to achieve?",
        options: [
          "Faster AI processing",
          "Transparent AI decision-making",
          "Smaller AI models",
          "Better AI accuracy"
        ],
        correctAnswer: 1,
        explanation: "Explainable AI focuses on making AI decision-making processes transparent and understandable to humans."
      },
      {
        id: 3,
        question: "What is deepfake technology?",
        options: [
          "Advanced data encryption",
          "AI-generated fake media",
          "Deep learning optimization",
          "Enhanced image quality"
        ],
        correctAnswer: 1,
        explanation: "Deepfake technology uses AI to create realistic but fake audio, video, or images of people saying or doing things they never actually did."
      },
      {
        id: 4,
        question: "What is the main concern with AI job displacement?",
        options: [
          "AI systems breaking down",
          "Automation replacing human workers",
          "Increased energy consumption",
          "Higher development costs"
        ],
        correctAnswer: 1,
        explanation: "AI job displacement refers to concerns about automation and AI systems potentially replacing human workers in various industries."
      },
      {
        id: 5,
        question: "What does 'AI alignment' refer to?",
        options: [
          "Proper AI hardware setup",
          "AI systems acting according to human values",
          "Synchronized AI processing",
          "AI model optimization"
        ],
        correctAnswer: 1,
        explanation: "AI alignment refers to ensuring that AI systems act in accordance with human values and intentions, especially as they become more capable."
      }
    ]
  },
  {
    name: "Computer Vision & Robotics",
    questions: [
      {
        id: 1,
        question: "What is computer vision?",
        options: [
          "AI that can see computers",
          "AI that interprets visual information",
          "Computer screen technology",
          "Virtual reality systems"
        ],
        correctAnswer: 1,
        explanation: "Computer vision is a field of AI that enables computers to interpret and understand visual information from images and videos."
      },
      {
        id: 2,
        question: "What is object detection in AI?",
        options: [
          "Finding lost objects",
          "Identifying and locating objects in images",
          "Creating 3D objects",
          "Object-oriented programming"
        ],
        correctAnswer: 1,
        explanation: "Object detection is the task of identifying and locating specific objects within images or video frames."
      },
      {
        id: 3,
        question: "What does LIDAR stand for in autonomous vehicles?",
        options: [
          "Light Detection and Ranging",
          "Linear Data Recognition",
          "Location Identification and Routing",
          "Logical Interface Data Retrieval"
        ],
        correctAnswer: 0,
        explanation: "LIDAR stands for Light Detection and Ranging, a remote sensing technology that uses light pulses to measure distances and create 3D maps."
      },
      {
        id: 4,
        question: "What is facial recognition?",
        options: [
          "AI that creates faces",
          "AI that identifies individuals by facial features",
          "Face animation technology",
          "Facial expression analysis"
        ],
        correctAnswer: 1,
        explanation: "Facial recognition is a biometric technology that identifies or verifies individuals by analyzing and comparing facial features."
      },
      {
        id: 5,
        question: "What is autonomous navigation?",
        options: [
          "Manual robot control",
          "Self-directed movement without human input",
          "GPS-only navigation",
          "Remote-controlled movement"
        ],
        correctAnswer: 1,
        explanation: "Autonomous navigation allows robots and vehicles to move and navigate through environments without direct human control."
      }
    ]
  },
  {
    name: "AI in Healthcare & Science",
    questions: [
      {
        id: 1,
        question: "How is AI used in medical diagnosis?",
        options: [
          "Replacing all doctors",
          "Analyzing medical images and data",
          "Only for scheduling appointments",
          "Just for billing purposes"
        ],
        correctAnswer: 1,
        explanation: "AI assists in medical diagnosis by analyzing medical images, patient data, and symptoms to help healthcare professionals identify diseases and conditions."
      },
      {
        id: 2,
        question: "What is drug discovery AI?",
        options: [
          "AI that finds lost medications",
          "AI that accelerates pharmaceutical research",
          "AI for drug delivery",
          "AI for drug pricing"
        ],
        correctAnswer: 1,
        explanation: "Drug discovery AI uses machine learning to accelerate the identification and development of new pharmaceutical compounds and treatments."
      },
      {
        id: 3,
        question: "What is precision medicine?",
        options: [
          "Exact dosage calculations",
          "Personalized treatment based on individual data",
          "Surgical precision tools",
          "Accurate medical billing"
        ],
        correctAnswer: 1,
        explanation: "Precision medicine uses AI and data analysis to tailor medical treatment to individual patient characteristics, genetics, and lifestyle."
      },
      {
        id: 4,
        question: "How does AI help in radiology?",
        options: [
          "Operating X-ray machines",
          "Analyzing medical images for abnormalities",
          "Scheduling radiology appointments",
          "Maintaining imaging equipment"
        ],
        correctAnswer: 1,
        explanation: "AI in radiology helps analyze medical images like X-rays, MRIs, and CT scans to detect abnormalities and assist radiologists in diagnosis."
      },
      {
        id: 5,
        question: "What is telemedicine AI?",
        options: [
          "AI for television",
          "Remote healthcare delivery with AI assistance",
          "Telecommunication for hospitals",
          "AI for medical telecommunications"
        ],
        correctAnswer: 1,
        explanation: "Telemedicine AI combines remote healthcare delivery with artificial intelligence to provide medical consultations and diagnoses at a distance."
      }
    ]
  }
];

export function getRandomQuiz(): { topic: string; questions: any[] } {
  const randomTopic = quizTopics[Math.floor(Math.random() * quizTopics.length)];
  
  // Shuffle questions and take up to 10
  const shuffledQuestions = [...randomTopic.questions]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(10, randomTopic.questions.length));
  
  return {
    topic: randomTopic.name,
    questions: shuffledQuestions
  };
}
