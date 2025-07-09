"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, Clock, CheckCircle, RotateCcw, Trophy, Target, BookOpen } from "lucide-react"

export default function QuizzesPage() {
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const quizzes = [
    {
      title: "Network Fundamentals",
      description: "Test your knowledge of basic networking concepts",
      questions: 15,
      timeLimit: 20,
      difficulty: "Beginner",
      completed: true,
      score: 87,
    },
    {
      title: "Network Access",
      description: "VLANs, switching, and Ethernet concepts",
      questions: 12,
      timeLimit: 15,
      difficulty: "Intermediate",
      completed: true,
      score: 92,
    },
    {
      title: "IP Connectivity",
      description: "Routing protocols and IP addressing",
      questions: 18,
      timeLimit: 25,
      difficulty: "Intermediate",
      completed: false,
      score: null,
    },
    {
      title: "IP Services",
      description: "DHCP, DNS, NAT, and network services",
      questions: 14,
      timeLimit: 18,
      difficulty: "Intermediate",
      completed: false,
      score: null,
    },
    {
      title: "Security Fundamentals",
      description: "Network security and access control",
      questions: 16,
      timeLimit: 22,
      difficulty: "Advanced",
      completed: false,
      score: null,
    },
    {
      title: "Final Practice Exam",
      description: "Complete CCNA simulation exam",
      questions: 60,
      timeLimit: 90,
      difficulty: "Expert",
      completed: false,
      score: null,
    },
  ]

  const sampleQuestions = [
    {
      question: "What layer of the OSI model is responsible for routing?",
      options: ["Layer 2 - Data Link", "Layer 3 - Network", "Layer 4 - Transport", "Layer 5 - Session"],
      correct: 1,
      explanation:
        "Layer 3 (Network layer) is responsible for routing packets between different networks using logical addressing (IP addresses).",
    },
    {
      question: "Which command is used to save the running configuration?",
      options: ["save config", "write memory", "copy running-config startup-config", "Both B and C are correct"],
      correct: 3,
      explanation:
        "Both 'write memory' and 'copy running-config startup-config' can be used to save the current configuration to NVRAM.",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Advanced":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      case "Expert":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  if (selectedQuiz !== null) {
    const quiz = quizzes[selectedQuiz]
    const question = sampleQuestions[currentQuestion]

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{quiz.title} Quiz</h1>
            <p className="text-muted-foreground">
              Question {currentQuestion + 1} of {sampleQuestions.length}
            </p>
          </div>
          <Button variant="outline" onClick={() => setSelectedQuiz(null)}>
            Back to Quizzes
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge className={getDifficultyColor(quiz.difficulty)}>{quiz.difficulty}</Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>15:30 remaining</span>
              </div>
            </div>
            <Progress value={((currentQuestion + 1) / sampleQuestions.length) * 100} className="mt-2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAnswer(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      selectedAnswer === index
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedAnswer === index ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      >
                        {selectedAnswer === index && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <span>
                        {String.fromCharCode(65 + index)}. {option}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                Previous
              </Button>
              <Button
                disabled={selectedAnswer === null}
                onClick={() => {
                  if (currentQuestion < sampleQuestions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1)
                    setSelectedAnswer(null)
                  } else {
                    setShowResult(true)
                  }
                }}
              >
                {currentQuestion === sampleQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Practice Quizzes</h1>
        <p className="text-muted-foreground">Test your knowledge with topic-specific quizzes and practice exams</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
            <div className="text-2xl font-bold">89%</div>
            <div className="text-sm text-muted-foreground">Average Score</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold">2/6</div>
            <div className="text-sm text-muted-foreground">Quizzes Completed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">45m</div>
            <div className="text-sm text-muted-foreground">Total Study Time</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <BookOpen className="h-8 w-8 mx-auto mb-2 text-purple-500" />
            <div className="text-2xl font-bold">127</div>
            <div className="text-sm text-muted-foreground">Questions Answered</div>
          </CardContent>
        </Card>
      </div>

      {/* Quiz List */}
      <div className="grid gap-4 md:grid-cols-2">
        {quizzes.map((quiz, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{quiz.title}</CardTitle>
                  <CardDescription className="mt-1">{quiz.description}</CardDescription>
                </div>
                {quiz.completed && <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{quiz.questions} questions</span>
                <span>{quiz.timeLimit} minutes</span>
              </div>
              <Badge className={getDifficultyColor(quiz.difficulty)} variant="secondary">
                {quiz.difficulty}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {quiz.completed && quiz.score && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Best Score</span>
                    <span className="font-medium">{quiz.score}%</span>
                  </div>
                  <Progress value={quiz.score} className="h-2" />
                </div>
              )}
              <div className="flex gap-2">
                <Button className="flex-1" onClick={() => setSelectedQuiz(index)}>
                  <Play className="mr-2 h-4 w-4" />
                  {quiz.completed ? "Retake Quiz" : "Start Quiz"}
                </Button>
                {quiz.completed && (
                  <Button variant="outline" size="icon">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Study Tips */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300">Quiz Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Before Taking a Quiz:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Review the topic materials first</li>
                <li>• Practice with lab exercises</li>
                <li>• Take notes on key concepts</li>
                <li>• Ensure you have enough time</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">During the Quiz:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Read questions carefully</li>
                <li>• Eliminate wrong answers first</li>
                <li>• Don't spend too long on one question</li>
                <li>• Review your answers before submitting</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
