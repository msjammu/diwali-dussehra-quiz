import { useState, useEffect } from 'react';
import { QuizHome } from '@/components/QuizHome';
import { QuizGame } from '@/components/QuizGame';
import { QuizResults } from '@/components/QuizResults';
import { type Quiz, type Question } from '@/lib/quizData';
import { useKV } from '@github/spark/hooks';

type AppState = 'home' | 'quiz' | 'results';

interface QuizAnswer {
  question: Question;
  selectedAnswer: number;
  correct: boolean;
}

function App() {
  const [appState, setAppState] = useState<AppState>('home');
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);

  const [, setTotalSeekers] = useKV<number>('total-app-launches', 0);
  const [, setDiwaliCompletions] = useKV<number>('diwali-completions', 0);
  const [, setDussehraCompletions] = useKV<number>('dussehra-completions', 0);
  const [, setSikhWisdomCompletions] = useKV<number>('sikh-wisdom-completions', 0);
  const [, setRavanLifeCompletions] = useKV<number>('ravan-life-completions', 0);

  // Increment total seekers count when app loads
  useEffect(() => {
    setTotalSeekers(prev => (prev || 0) + 1);
  }, [setTotalSeekers]);

  const handleSelectQuiz = (quiz: Quiz) => {
    setCurrentQuiz(quiz);
    setAppState('quiz');
  };

  const handleQuizComplete = (score: number, answers: QuizAnswer[]) => {
    setQuizScore(score);
    setQuizAnswers(answers);
    setAppState('results');

    if (currentQuiz?.category === 'diwali') {
      setDiwaliCompletions(prev => (prev || 0) + 1);
    } else if (currentQuiz?.category === 'dussehra') {
      setDussehraCompletions(prev => (prev || 0) + 1);
    } else if (currentQuiz?.category === 'sikh-wisdom') {
      setSikhWisdomCompletions(prev => (prev || 0) + 1);
    } else if (currentQuiz?.category === 'ravan-life') {
      setRavanLifeCompletions(prev => (prev || 0) + 1);
    }
  };

  const handleBackToHome = () => {
    setAppState('home');
    setCurrentQuiz(null);
    setQuizScore(0);
    setQuizAnswers([]);
  };

  const handleRetakeQuiz = () => {
    setAppState('quiz');
    setQuizScore(0);
    setQuizAnswers([]);
  };

  if (appState === 'home') {
    return <QuizHome onSelectQuiz={handleSelectQuiz} />;
  }

  if (appState === 'quiz' && currentQuiz) {
    return (
      <QuizGame
        quiz={currentQuiz}
        onBack={handleBackToHome}
        onComplete={handleQuizComplete}
      />
    );
  }

  if (appState === 'results' && currentQuiz) {
    return (
      <QuizResults
        quiz={currentQuiz}
        score={quizScore}
        totalQuestions={10}
        answers={quizAnswers}
        onBackToHome={handleBackToHome}
        onRetakeQuiz={handleRetakeQuiz}
      />
    );
  }

  return <QuizHome onSelectQuiz={handleSelectQuiz} />;
}

export default App;