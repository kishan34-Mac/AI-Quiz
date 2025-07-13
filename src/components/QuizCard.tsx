
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizCardProps {
  question: Question;
  selectedAnswer: number | null;
  showExplanation: boolean;
  isAnswered: boolean;
  theme: 'cyber' | 'neon' | 'galaxy';
  onAnswerSelect: (index: number) => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

const QuizCard = ({
  question,
  selectedAnswer,
  showExplanation,
  isAnswered,
  theme,
  onAnswerSelect,
  onNextQuestion,
  isLastQuestion
}: QuizCardProps) => {
  const themeColors = {
    cyber: 'from-cyan-500 via-blue-600 to-purple-700',
    neon: 'from-pink-500 via-purple-600 to-indigo-700',
    galaxy: 'from-purple-500 via-indigo-600 to-blue-700'
  };

  const getButtonClass = (index: number) => {
    let buttonClass = "w-full text-left p-4 h-auto justify-start hover-scale transition-all duration-200";
    
    if (selectedAnswer !== null) {
      if (index === question.correctAnswer) {
        buttonClass += " bg-green-500/30 border-green-400 text-green-100";
      } else if (index === selectedAnswer && index !== question.correctAnswer) {
        buttonClass += " bg-red-500/30 border-red-400 text-red-100";
      } else {
        buttonClass += " bg-white/5 border-white/20 text-white/70";
      }
    } else {
      buttonClass += " bg-white/10 border-white/20 text-white hover:bg-white/20";
    }
    
    return buttonClass;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white animate-fade-in">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => onAnswerSelect(index)}
                variant="outline"
                className={getButtonClass(index)}
                disabled={isAnswered}
              >
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </Button>
            ))}
          </div>

          {showExplanation && (
            <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20 animate-fade-in">
              <h4 className="font-semibold text-yellow-400 mb-2">Explanation:</h4>
              <p className="text-white/90">{question.explanation}</p>
            </div>
          )}

          {isAnswered && (
            <div className="flex justify-end mt-6">
              <Button
                onClick={onNextQuestion}
                className={`bg-gradient-to-r ${themeColors[theme]} hover:opacity-90 text-white border-none hover-scale`}
              >
                {isLastQuestion ? 'See Results' : 'Next Question'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizCard;
