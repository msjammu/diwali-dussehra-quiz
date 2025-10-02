import { useState } from 'react';
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

  const [, setTotalAttempts] = useKV<number>('total-quiz-attempts', 0);
  const [, setDiwaliAttempts] = useKV<number>('diwali-attempts', 0);
  const [, setDussehraAttempts] = useKV<number>('dussehra-attempts', 0);
  const [, setSikhWisdomAttempts] = useKV<number>('sikh-wisdom-attempts', 0);

  const handleSelectQuiz = (quiz: Quiz) => {
    setCurrentQuiz(quiz);
    setAppState('quiz');
  };

  const handleQuizComplete = (score: number, answers: QuizAnswer[]) => {
    setQuizScore(score);
    setQuizAnswers(answers);
    setAppState('results');

    setTotalAttempts(prev => (prev || 0) + 1);
    
    if (currentQuiz?.category === 'diwali') {
      setDiwaliAttempts(prev => (prev || 0) + 1);
    } else if (currentQuiz?.category === 'dussehra') {
      setDussehraAttempts(prev => (prev || 0) + 1);
    } else if (currentQuiz?.category === 'sikh-wisdom') {
      setSikhWisdomAttempts(prev => (prev || 0) + 1);
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