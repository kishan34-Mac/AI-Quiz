
export const getScoreMessage = (score: number, totalQuestions: number): string => {
  const percentage = (score / totalQuestions) * 100;
  if (percentage >= 80) return "🏆 AI Expert! Outstanding performance!";
  if (percentage >= 60) return "🎯 Well done! You have a good grasp of AI concepts.";
  if (percentage >= 40) return "📚 Not bad! Consider reviewing some AI fundamentals.";
  return "💪 Keep learning! AI is a vast field with lots to explore.";
};

export const calculateProgress = (currentQuestion: number, totalQuestions: number): number => {
  return totalQuestions > 0 ? ((currentQuestion + 1) / totalQuestions) * 100 : 0;
};
