
import React, { useState, useEffect } from 'react';
import AnimatedBackground from './AnimatedBackground';
import QuizHeader from './QuizHeader';
import QuizCard from './QuizCard';
import QuizResults from './QuizResults';
import LoadingScreen from './LoadingScreen';
import { useToast } from '@/hooks/use-toast';
import { getRandomQuiz } from '../data/quizTopics';
import { calculateProgress } from '../utils/quizUtils';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const Quiz = () => {
  const [currentTopic, setCurrentTopic] = useState<string>('');
  const [quizData, setQuizData] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [theme, setTheme] = useState<'cyber' | 'neon' | 'galaxy'>('cyber');
  const [showExplanation, setShowExplanation] = useState(false);
  const { toast } = useToast();

  // Initialize quiz on component mount
  useEffect(() => {
    initializeNewQuiz();
  }, []);

  const initializeNewQuiz = () => {
    const newQuiz = getRandomQuiz();
    setQuizData(newQuiz.questions);
    setCurrentTopic(newQuiz.topic);
    setAnsweredQuestions(new Array(newQuiz.questions.length).fill(false));
    
    toast({
      title: "New Quiz Generated! 🎯",
      description: `Topic: ${newQuiz.topic}`,
      duration: 3000,
    });
  };

  const currentQuestionData: Question = quizData[currentQuestion];
  const progress = calculateProgress(currentQuestion, quizData.length);

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return;
    
    setSelectedAnswer(answerIndex);
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);

    if (answerIndex === currentQuestionData.correctAnswer) {
      setScore(score + 1);
      toast({
        title: "Correct! 🎉",
        description: "Great job! You got it right.",
        duration: 2000,
      });
    } else {
      toast({
        title: "Incorrect 😔",
        description: "Don't worry, keep trying!",
        variant: "destructive",
        duration: 2000,
      });
    }
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    initializeNewQuiz();
  };

  // Show loading state while quiz is being generated
  if (quizData.length === 0) {
    return <LoadingScreen theme={theme} />;
  }

  if (showResult) {
    return (
      <QuizResults
        score={score}
        totalQuestions={quizData.length}
        currentTopic={currentTopic}
        theme={theme}
        onThemeChange={setTheme}
        onResetQuiz={resetQuiz}
      />
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground theme={theme} />
      <div className="relative z-10 min-h-screen p-4">
        <QuizHeader
          currentTopic={currentTopic}
          currentQuestion={currentQuestion}
          totalQuestions={quizData.length}
          score={score}
          progress={progress}
          theme={theme}
          onThemeChange={setTheme}
        />
        
        <QuizCard
          question={currentQuestionData}
          selectedAnswer={selectedAnswer}
          showExplanation={showExplanation}
          isAnswered={answeredQuestions[currentQuestion]}
          theme={theme}
          onAnswerSelect={handleAnswerSelect}
          onNextQuestion={handleNextQuestion}
          isLastQuestion={currentQuestion >= quizData.length - 1}
        />
      </div>
    </div>
  );
};

export default Quiz;
