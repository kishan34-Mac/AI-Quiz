
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

interface LoadingScreenProps {
  theme: 'cyber' | 'neon' | 'galaxy';
}

const LoadingScreen = ({ theme }: LoadingScreenProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground theme={theme} />
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20 text-white">
          <CardContent className="text-center py-12">
            <RefreshCw className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Generating New Quiz...</h2>
            <p className="text-white/70">Creating fresh questions on trending AI topics</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoadingScreen;
