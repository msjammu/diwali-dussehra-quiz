import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Trophy, Star, House, ArrowClockwise, CheckCircle, XCircle } from "@phosphor-icons/react";
import { type Quiz, type Question } from "@/lib/quizData";

interface QuizResultsProps {
  quiz: Quiz;
  score: number;
  totalQuestions: number;
  answers: { question: Question; selectedAnswer: number; correct: boolean }[];
  onBackToHome: () => void;
  onRetakeQuiz: () => void;
}

export function QuizResults({ quiz, score, totalQuestions, answers, onBackToHome, onRetakeQuiz }: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return { message: "Outstanding! Perfect Festival Knowledge!", icon: "🏆", color: "text-yellow-600" };
    if (percentage >= 80) return { message: "Excellent! You know your festivals well!", icon: "🌟", color: "text-yellow-500" };
    if (percentage >= 70) return { message: "Great job! Good festival knowledge!", icon: "🎉", color: "text-green-600" };
    if (percentage >= 60) return { message: "Well done! Keep learning!", icon: "👏", color: "text-blue-600" };
    if (percentage >= 50) return { message: "Good effort! Room for improvement!", icon: "📚", color: "text-orange-600" };
    return { message: "Keep studying! You'll do better next time!", icon: "💪", color: "text-red-600" };
  };

  const scoreInfo = getScoreMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="mb-8 bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-12 h-12 text-primary" weight="fill" />
              <div>
                <CardTitle className="text-3xl font-bold text-foreground">
                  Quiz Complete!
                </CardTitle>
                <p className="text-lg text-muted-foreground mt-1">{quiz.title}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-base">
                {quiz.category === 'diwali' ? 'Diwali' : 'Dussehra'}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="text-center space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
              <div className="text-6xl font-bold text-primary mb-2">
                {score}/{totalQuestions}
              </div>
              <div className="text-3xl font-semibold mb-3 text-primary">
                {percentage}%
              </div>
              <div className={`text-xl font-medium flex items-center justify-center gap-2 ${scoreInfo.color}`}>
                <span className="text-2xl">{scoreInfo.icon}</span>
                {scoreInfo.message}
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button 
                onClick={onRetakeQuiz}
                variant="outline"
                className="flex items-center gap-2 border-primary/30 text-primary hover:bg-primary/10"
              >
                <ArrowClockwise className="w-4 h-4" />
                Retake Quiz
              </Button>
              <Button 
                onClick={onBackToHome}
                className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground"
              >
                <House className="w-4 h-4" />
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Star className="w-5 h-5 text-primary" weight="fill" />
              Answer Review
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {answers.map((answer, index) => (
                <div key={answer.question.id} className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      answer.correct 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="font-medium text-foreground leading-relaxed">
                        {answer.question.question}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground font-medium">Your answer:</span>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm ${answer.correct ? 'text-green-700' : 'text-red-700'}`}>
                              {answer.question.options[answer.selectedAnswer]}
                            </span>
                            {answer.correct ? (
                              <CheckCircle className="w-4 h-4 text-green-600" weight="fill" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" weight="fill" />
                            )}
                          </div>
                        </div>
                        
                        {!answer.correct && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground font-medium">Correct answer:</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-green-700">
                                {answer.question.options[answer.question.correctAnswer]}
                              </span>
                              <CheckCircle className="w-4 h-4 text-green-600" weight="fill" />
                            </div>
                          </div>
                        )}
                        
                        {answer.question.explanation && (
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-2">
                            <p className="text-sm text-blue-800">
                              <span className="font-medium">Explanation:</span> {answer.question.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {index < answers.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}