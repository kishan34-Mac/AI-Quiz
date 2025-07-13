
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, RotateCcw } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  currentTopic: string;
  theme: 'cyber' | 'neon' | 'galaxy';
  onThemeChange: (theme: 'cyber' | 'neon' | 'galaxy') => void;
  onResetQuiz: () => void;
}

const QuizResults = ({
  score,
  totalQuestions,
  currentTopic,
  theme,
  onThemeChange,
  onResetQuiz
}: QuizResultsProps) => {
  const getScoreMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return "🏆 AI Expert! Outstanding performance!";
    if (percentage >= 60) return "🎯 Well done! You have a good grasp of AI concepts.";
    if (percentage >= 40) return "📚 Not bad! Consider reviewing some AI fundamentals.";
    return "💪 Keep learning! AI is a vast field with lots to explore.";
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground theme={theme} />
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <Trophy className="w-16 h-16 text-yellow-400 animate-bounce" />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Quiz Complete!
            </CardTitle>
            <p className="text-white/70 mt-2">Topic: {currentTopic}</p>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-6xl font-bold text-yellow-400 animate-pulse">
              {score}/{totalQuestions}
            </div>
            <div className="text-xl">
              {getScoreMessage()}
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              {(['cyber', 'neon', 'galaxy'] as const).map((t) => (
                <Button
                  key={t}
                  onClick={() => onThemeChange(t)}
                  variant={theme === t ? "default" : "outline"}
                  className="capitalize hover-scale"
                >
                  {t} Theme
                </Button>
              ))}
            </div>
            <Button
              onClick={onResetQuiz}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-none hover-scale"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              New Quiz Challenge
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizResults;
