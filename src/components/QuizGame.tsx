import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, XCircle } from "@phosphor-icons/react";
import { type Quiz, type Question, getRandomQuestions } from "@/lib/quizData";

interface QuizGameProps {
  quiz: Quiz;
  onBack: () => void;
  onComplete: (score: number, answers: { question: Question; selectedAnswer: number; correct: boolean }[]) => void;
}

export function QuizGame({ quiz, onBack, onComplete }: QuizGameProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ question: Question; selectedAnswer: number; correct: boolean }[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const randomQuestions = getRandomQuestions(quiz, 10);
    setQuestions(randomQuestions);
  }, [quiz]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const answerRecord = {
      question: currentQuestion,
      selectedAnswer,
      correct: isCorrect
    };

    setAnswers(prev => [...prev, answerRecord]);
    setShowFeedback(true);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        const finalAnswers = [...answers, answerRecord];
        const score = finalAnswers.filter(a => a.correct).length;
        onComplete(score, finalAnswers);
      }
    }, 2000);
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-4 hover:bg-muted/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Quizzes
          </Button>

          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">{quiz.title}</h1>
              <p className="text-muted-foreground">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {quiz.category === 'diwali' ? 'Diwali' : 'Dussehra'}
            </Badge>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              
              let buttonClass = "w-full p-4 text-left transition-all duration-200 border-2 ";
              
              if (showFeedback) {
                if (isCorrect) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800 ";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800 ";
                } else {
                  buttonClass += "border-border bg-muted/50 text-muted-foreground ";
                }
              } else if (isSelected) {
                buttonClass += "border-primary bg-primary/10 text-primary ";
              } else {
                buttonClass += "border-border bg-background hover:border-primary/50 hover:bg-primary/5 ";
              }

              return (
                <Button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={buttonClass}
                  variant="outline"
                  disabled={showFeedback}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-base font-medium">{option}</span>
                    {showFeedback && isCorrect && (
                      <CheckCircle className="w-5 h-5 text-green-600" weight="fill" />
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-600" weight="fill" />
                    )}
                  </div>
                </Button>
              );
            })}

            {showFeedback && currentQuestion.explanation && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Explanation:</h4>
                <p className="text-blue-800">{currentQuestion.explanation}</p>
              </div>
            )}

            {!showFeedback && (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="w-full mt-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-medium"
              >
                {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}