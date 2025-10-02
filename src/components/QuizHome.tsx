import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Sparkle, BookOpen } from "@phosphor-icons/react";
import { quizzes, type Quiz } from "@/lib/quizData";
import { useKV } from '@github/spark/hooks';

interface QuizHomeProps {
  onSelectQuiz: (quiz: Quiz) => void;
}

export function QuizHome({ onSelectQuiz }: QuizHomeProps) {
  const [totalAttempts] = useKV<number>("total-quiz-attempts", 0);
  const [diwaliAttempts] = useKV<number>("diwali-attempts", 0);
  const [dussehraAttempts] = useKV<number>("dussehra-attempts", 0);
  const [sikhWisdomAttempts] = useKV<number>("sikh-wisdom-attempts", 0);

  const diwaliQuizzes = quizzes.filter(q => q.category === 'diwali');
  const dussehraQuizzes = quizzes.filter(q => q.category === 'dussehra');
  const sikhWisdomQuizzes = quizzes.filter(q => q.category === 'sikh-wisdom');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkle className="w-8 h-8 text-primary" weight="fill" />
            <h1 className="text-4xl font-bold text-foreground">Festival Quiz</h1>
            <Sparkle className="w-8 h-8 text-primary" weight="fill" />
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            Test your knowledge about festivals and their spiritual significance
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-2 shadow-sm">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">
                {(totalAttempts || 0).toLocaleString()} Total Attempts
              </span>
            </div>
            <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-2 shadow-sm">
              <Trophy className="w-5 h-5 text-accent-foreground" />
              <span className="text-sm font-medium">Challenge Yourself!</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkle className="w-6 h-6 text-white" weight="fill" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Diwali Quizzes</h2>
                <p className="text-muted-foreground">Festival of Lights • {diwaliAttempts || 0} attempts</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {diwaliQuizzes.map((quiz) => (
                <Card key={quiz.id} className="hover:shadow-lg transition-all duration-200 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg font-semibold text-card-foreground">
                          {quiz.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {quiz.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        10 Questions
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      onClick={() => onSelectQuiz(quiz)}
                      className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-medium"
                    >
                      Start Quiz
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-destructive flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" weight="fill" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Dussehra Quizzes</h2>
                <p className="text-muted-foreground">Victory of Good over Evil • {dussehraAttempts || 0} attempts</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {dussehraQuizzes.map((quiz) => (
                <Card key={quiz.id} className="hover:shadow-lg transition-all duration-200 border-border/50 hover:border-secondary/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg font-semibold text-card-foreground">
                          {quiz.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {quiz.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                        10 Questions
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      onClick={() => onSelectQuiz(quiz)}
                      className="w-full bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground font-medium"
                    >
                      Start Quiz
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" weight="fill" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Spiritual Wisdom</h2>
                <p className="text-muted-foreground">Insights from Sri Guru Granth Sahib Ji • {sikhWisdomAttempts || 0} attempts</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {sikhWisdomQuizzes.map((quiz) => (
                <Card key={quiz.id} className="hover:shadow-lg transition-all duration-200 border-border/50 hover:border-accent/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg font-semibold text-card-foreground">
                          {quiz.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {quiz.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-accent/10 text-accent-foreground border-accent/20">
                        10 Questions
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      onClick={() => onSelectQuiz(quiz)}
                      className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-medium"
                    >
                      Start Quiz
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}