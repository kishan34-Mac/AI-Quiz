
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Brain } from 'lucide-react';

interface QuizHeaderProps {
  currentTopic: string;
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  progress: number;
  theme: 'cyber' | 'neon' | 'galaxy';
  onThemeChange: (theme: 'cyber' | 'neon' | 'galaxy') => void;
}

const QuizHeader = ({
  currentTopic,
  currentQuestion,
  totalQuestions,
  score,
  progress,
  theme,
  onThemeChange
}: QuizHeaderProps) => {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">AI Integration Quiz</h1>
            <p className="text-white/70">{currentTopic}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {(['cyber', 'neon', 'galaxy'] as const).map((t) => (
            <Button
              key={t}
              onClick={() => onThemeChange(t)}
              variant={theme === t ? "default" : "outline"}
              size="sm"
              className="capitalize hover-scale"
            >
              {t}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-white">
        <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
          Question {currentQuestion + 1} of {totalQuestions}
        </Badge>
        <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
          Score: {score}
        </Badge>
      </div>
      
      <div className="mt-4">
        <Progress value={progress} className="h-3 bg-white/20" />
      </div>
    </div>
  );
};

export default QuizHeader;
