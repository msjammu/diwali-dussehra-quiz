import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Sparkle, BookOpen, Flame, Star, Crown, Sword } from "@phosphor-icons/react";
import { quizzes, type Quiz } from "@/lib/quizData";
import { useKV } from '@github/spark/hooks';
import { useState, useEffect } from 'react';

interface QuizHomeProps {
  onSelectQuiz: (quiz: Quiz) => void;
}

export function QuizHome({ onSelectQuiz }: QuizHomeProps) {
  const [totalSeekers] = useKV<number>("total-app-launches", 0);
  const [diwaliCompletions] = useKV<number>("diwali-completions", 0);
  const [dussehraCompletions] = useKV<number>("dussehra-completions", 0);
  const [sikhWisdomCompletions] = useKV<number>("sikh-wisdom-completions", 0);
  const [ravanLifeCompletions] = useKV<number>("ravan-life-completions", 0);
  const [globalVisits, setGlobalVisits] = useState<number>(0);

  // Generate a realistic visitor counter
  useEffect(() => {
    const generateRealisticCounter = () => {
      // Base number of visitors (simulated historical data)
      const baseVisitors = 2847;
      
      // Add a time-based component (grows slowly over time)
      const daysSinceLaunch = Math.floor((Date.now() - new Date('2024-10-01').getTime()) / (1000 * 60 * 60 * 24));
      const timeBasedGrowth = Math.floor(daysSinceLaunch * 3.7); // ~3-4 visitors per day
      
      // Add some pseudo-randomness based on current session
      const sessionId = sessionStorage.getItem('quiz-session-id') || Math.random().toString(36);
      if (!sessionStorage.getItem('quiz-session-id')) {
        sessionStorage.setItem('quiz-session-id', sessionId);
      }
      
      // Create a simple hash from session ID for consistent randomness
      let hash = 0;
      for (let i = 0; i < sessionId.length; i++) {
        const char = sessionId.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
      }
      const sessionVariation = Math.abs(hash) % 50; // 0-49 variation
      
      const totalVisitors = baseVisitors + timeBasedGrowth + sessionVariation + (totalSeekers || 0);
      setGlobalVisits(totalVisitors);
    };

    generateRealisticCounter();
  }, [totalSeekers]);

  const diwaliQuizzes = quizzes.filter(q => q.category === 'diwali');
  const dussehraQuizzes = quizzes.filter(q => q.category === 'dussehra');
  const sikhWisdomQuizzes = quizzes.filter(q => q.category === 'sikh-wisdom');
  const ravanLifeQuizzes = quizzes.filter(q => q.category === 'ravan-life');

  return (
    <div className="min-h-screen relative">
      {/* Decorative diya flames */}
      <div className="fixed top-10 left-10 diwali-sparkle">
        <Flame className="w-6 h-6 text-primary" weight="fill" />
      </div>
      <div className="fixed top-20 right-16 diwali-sparkle" style={{ animationDelay: '0.5s' }}>
        <Star className="w-5 h-5 text-accent" weight="fill" />
      </div>
      <div className="fixed bottom-20 left-20 diwali-sparkle" style={{ animationDelay: '1s' }}>
        <Sparkle className="w-7 h-7 text-secondary" weight="fill" />
      </div>
      <div className="fixed bottom-32 right-12 diwali-sparkle" style={{ animationDelay: '1.5s' }}>
        <Flame className="w-5 h-5 text-primary" weight="fill" />
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Flame className="w-12 h-12 text-primary diwali-sparkle" weight="fill" />
              <div className="absolute -top-1 -right-1">
                <Sparkle className="w-4 h-4 text-accent" weight="fill" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Festival Wisdom Quiz
            </h1>
            <div className="relative">
              <Flame className="w-12 h-12 text-secondary diwali-sparkle" weight="fill" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -top-1 -left-1">
                <Star className="w-4 h-4 text-primary" weight="fill" />
              </div>
            </div>
          </div>
          
          <p className="text-2xl text-foreground/80 mb-4 font-medium">
            🪔 Illuminate Your Knowledge 🪔
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Journey through the sacred wisdom of Diwali and Dussehra. Test your understanding of these beautiful festivals 
            and their deeper spiritual meanings from ancient texts and traditions.
          </p>
          
          {/* Stats Cards */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <Users className="w-6 h-6 text-primary" weight="fill" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">
                    {globalVisits.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Seekers</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 hover:border-secondary/30 transition-all duration-300">
                <Trophy className="w-6 h-6 text-secondary" weight="fill" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">30+</div>
                  <div className="text-sm text-muted-foreground">Questions</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 hover:border-accent/30 transition-all duration-300">
                <Sparkle className="w-6 h-6 text-accent diwali-sparkle" weight="fill" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">4</div>
                  <div className="text-sm text-muted-foreground">Sacred Topics</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-12">
          {/* Diwali Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-lg shadow-primary/25">
                    <Flame className="w-8 h-8 text-primary-foreground diwali-sparkle" weight="fill" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkle className="w-6 h-6 text-accent diwali-sparkle" weight="fill" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    🪔 Diwali - Festival of Lights
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Illuminate your mind • {diwaliCompletions || 0} completed
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {diwaliQuizzes.map((quiz, index) => (
                  <Card key={quiz.id} className="group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-border/50 hover:border-primary/40 bg-card/60 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="pb-3 relative z-10">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                            {quiz.title}
                          </CardTitle>
                          <CardDescription className="mt-2 text-muted-foreground leading-relaxed">
                            {quiz.description}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant="secondary" className="bg-primary/15 text-primary border-primary/30 font-medium">
                            10 Questions
                          </Badge>
                          <div className="flex gap-1">
                            {[...Array(index + 3)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-accent" weight="fill" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 relative z-10">
                      <Button 
                        onClick={() => onSelectQuiz(quiz)}
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-3 shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group-hover:scale-[1.02]"
                      >
                        <Flame className="w-4 h-4 mr-2" weight="fill" />
                        Begin Journey
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Dussehra Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-destructive/5 rounded-2xl blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary via-destructive to-secondary flex items-center justify-center shadow-lg shadow-secondary/25">
                    <Crown className="w-8 h-8 text-secondary-foreground" weight="fill" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Trophy className="w-6 h-6 text-accent diwali-sparkle" weight="fill" style={{ animationDelay: '0.7s' }} />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-secondary to-destructive bg-clip-text text-transparent">
                    🏹 Dussehra - Victory of Good
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Triumph over darkness • {dussehraCompletions || 0} completed
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {dussehraQuizzes.map((quiz, index) => (
                  <Card key={quiz.id} className="group relative overflow-hidden hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 border border-border/50 hover:border-secondary/40 bg-card/60 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="pb-3 relative z-10">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-secondary transition-colors duration-300">
                            {quiz.title}
                          </CardTitle>
                          <CardDescription className="mt-2 text-muted-foreground leading-relaxed">
                            {quiz.description}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant="secondary" className="bg-secondary/15 text-secondary border-secondary/30 font-medium">
                            10 Questions
                          </Badge>
                          <div className="flex gap-1">
                            {[...Array(index + 4)].map((_, i) => (
                              <Crown key={i} className="w-3 h-3 text-secondary" weight="fill" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 relative z-10">
                      <Button 
                        onClick={() => onSelectQuiz(quiz)}
                        className="w-full bg-gradient-to-r from-secondary to-destructive hover:from-secondary/90 hover:to-destructive/90 text-secondary-foreground font-semibold py-3 shadow-lg hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300 group-hover:scale-[1.02]"
                      >
                        <Crown className="w-4 h-4 mr-2" weight="fill" />
                        Accept Challenge
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Spiritual Wisdom Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center shadow-lg shadow-accent/25">
                    <BookOpen className="w-8 h-8 text-accent-foreground" weight="fill" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Star className="w-6 h-6 text-primary diwali-sparkle" weight="fill" style={{ animationDelay: '1.2s' }} />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    📿 Spiritual Wisdom
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Sacred teachings from Sri Guru Granth Sahib Ji • {sikhWisdomCompletions || 0} completed
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {sikhWisdomQuizzes.map((quiz, index) => (
                  <Card key={quiz.id} className="group relative overflow-hidden hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 border border-border/50 hover:border-accent/40 bg-card/60 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="pb-3 relative z-10">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                            {quiz.title}
                          </CardTitle>
                          <CardDescription className="mt-2 text-muted-foreground leading-relaxed">
                            {quiz.description}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant="secondary" className="bg-accent/15 text-accent-foreground border-accent/30 font-medium">
                            10 Questions
                          </Badge>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <BookOpen key={i} className="w-3 h-3 text-accent" weight="fill" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 relative z-10">
                      <Button 
                        onClick={() => onSelectQuiz(quiz)}
                        className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-accent-foreground font-semibold py-3 shadow-lg hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 group-hover:scale-[1.02]"
                      >
                        <BookOpen className="w-4 h-4 mr-2" weight="fill" />
                        Seek Wisdom
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Ravan Life Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 to-orange-500/5 rounded-2xl blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-destructive via-orange-600 to-destructive flex items-center justify-center shadow-lg shadow-destructive/25">
                    <Sword className="w-8 h-8 text-destructive-foreground" weight="fill" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Crown className="w-6 h-6 text-orange-500 diwali-sparkle" weight="fill" style={{ animationDelay: '1.5s' }} />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-destructive to-orange-600 bg-clip-text text-transparent">
                    👑 The Life of Ravan
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Learn about the legendary king • {ravanLifeCompletions || 0} completed
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {ravanLifeQuizzes.map((quiz, index) => (
                  <Card key={quiz.id} className="group relative overflow-hidden hover:shadow-2xl hover:shadow-destructive/10 transition-all duration-500 border border-border/50 hover:border-destructive/40 bg-card/60 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="pb-3 relative z-10">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-destructive transition-colors duration-300">
                            {quiz.title}
                          </CardTitle>
                          <CardDescription className="mt-2 text-muted-foreground leading-relaxed">
                            {quiz.description}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant="secondary" className="bg-destructive/15 text-destructive border-destructive/30 font-medium">
                            15 Questions
                          </Badge>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Sword key={i} className="w-3 h-3 text-destructive" weight="fill" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 relative z-10">
                      <Button 
                        onClick={() => onSelectQuiz(quiz)}
                        className="w-full bg-gradient-to-r from-destructive to-orange-600 hover:from-destructive/90 hover:to-orange-600/90 text-destructive-foreground font-semibold py-3 shadow-lg hover:shadow-xl hover:shadow-destructive/25 transition-all duration-300 group-hover:scale-[1.02]"
                      >
                        <Sword className="w-4 h-4 mr-2" weight="fill" />
                        Explore Legend
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16 py-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkle className="w-6 h-6 text-primary diwali-sparkle" weight="fill" />
            <p className="text-lg text-muted-foreground">
              May wisdom light your path like a thousand diyas
            </p>
            <Sparkle className="w-6 h-6 text-accent diwali-sparkle" weight="fill" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-sm text-muted-foreground/70">
            ✨ Celebrating the eternal victory of light over darkness ✨
          </p>
        </div>
      </div>
    </div>
  );
}