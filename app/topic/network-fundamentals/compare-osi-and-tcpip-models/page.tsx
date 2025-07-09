"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Progress } from "@/components/ui/progress"
import {
  Network,
  Router,
  Monitor,
  Download,
  ChevronRight,
  CheckCircle,
  Circle,
  Play,
  Lightbulb,
  BookOpen,
} from "lucide-react"

export default function OSITCPIPModelsPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const devices = [
    { name: "Router", icon: Router, description: "Works at Layer 3 (Network) - routes between networks" },
    { name: "Switch", icon: Network, description: "Works at Layer 2 (Data Link) - forwards within networks" },
    { name: "PC/Laptop", icon: Monitor, description: "End device using all 7 layers of OSI model" },
  ]

  const osiLayers = [
    {
      number: 7,
      name: "Application",
      description: "User interface (HTTP, FTP, SMTP)",
      color: "bg-red-100 text-red-800",
    },
    {
      number: 6,
      name: "Presentation",
      description: "Data formatting, encryption (SSL/TLS)",
      color: "bg-orange-100 text-orange-800",
    },
    {
      number: 5,
      name: "Session",
      description: "Establishes connections (NetBIOS, RPC)",
      color: "bg-yellow-100 text-yellow-800",
    },
    { number: 4, name: "Transport", description: "Reliable delivery (TCP, UDP)", color: "bg-green-100 text-green-800" },
    {
      number: 3,
      name: "Network",
      description: "Routing and addressing (IP, ICMP)",
      color: "bg-blue-100 text-blue-800",
    },
    {
      number: 2,
      name: "Data Link",
      description: "Frame switching (Ethernet, WiFi)",
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      number: 1,
      name: "Physical",
      description: "Cables, signals, bits (Copper, Fiber)",
      color: "bg-purple-100 text-purple-800",
    },
  ]

  const tcpipLayers = [
    { number: 4, name: "Application", description: "Combines OSI layers 5-7", color: "bg-red-100 text-red-800" },
    { number: 3, name: "Transport", description: "Same as OSI Layer 4", color: "bg-green-100 text-green-800" },
    { number: 2, name: "Internet", description: "Same as OSI Layer 3", color: "bg-blue-100 text-blue-800" },
    {
      number: 1,
      name: "Network Access",
      description: "Combines OSI layers 1-2",
      color: "bg-purple-100 text-purple-800",
    },
  ]

  const questions = [
    {
      text: "How many layers does the OSI model have?",
      options: ["4 layers", "5 layers", "7 layers", "9 layers"],
      correct: 2,
      explanation:
        "The OSI (Open Systems Interconnection) model has 7 layers, from Physical (Layer 1) to Application (Layer 7). Think of it like a 7-story building where each floor has a specific job!",
    },
    {
      text: "Which layer is responsible for routing between different networks?",
      options: ["Layer 2 - Data Link", "Layer 3 - Network", "Layer 4 - Transport", "Layer 7 - Application"],
      correct: 1,
      explanation:
        "Layer 3 (Network layer) handles routing between different networks using IP addresses. Think of it like a GPS system that finds the best path between cities.",
    },
    {
      text: "What is the main difference between OSI and TCP/IP models?",
      options: [
        "OSI has 7 layers, TCP/IP has 4 layers",
        "OSI is practical, TCP/IP is theoretical",
        "OSI is newer than TCP/IP",
        "There is no difference",
      ],
      correct: 0,
      explanation:
        "OSI model has 7 layers and is more theoretical/educational, while TCP/IP has 4 layers and is the practical model used in real networks today.",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Compare OSI and TCP/IP Models</h1>
          <p className="text-muted-foreground">Understanding the foundation of network communication</p>
        </div>
        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          <Network className="mr-1 h-3 w-3" />
          Network Fundamentals
        </Badge>
      </div>

      {/* Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Topic Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={0} className="mb-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Just started</span>
            <span>0%</span>
          </div>
        </CardContent>
      </Card>

      {/* Theory Section */}
      <Tabs defaultValue="theory" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="theory">📘 Theory</TabsTrigger>
          <TabsTrigger value="lab">🧪 Lab</TabsTrigger>
          <TabsTrigger value="notes">📥 Notes</TabsTrigger>
          <TabsTrigger value="quiz">❓ Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="theory" className="space-y-6">
          {/* Simple Definition */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                What are Network Models?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg">
                Network models are like <strong>blueprints for building houses</strong>. They show us how data travels
                from one computer to another by breaking the process into organized layers or steps.
              </p>

              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                  Real-World Analogy: Sending a Letter
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Think of sending a letter through the postal system. You write the message (Application), put it in an
                  envelope with addresses (Network), the postal service sorts and routes it (Transport), and finally
                  delivers it physically (Physical). Network models work the same way!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* OSI Model */}
          <Card>
            <CardHeader>
              <CardTitle>OSI Model - The 7-Layer Cake</CardTitle>
              <CardDescription>
                OSI (Open Systems Interconnection) - Think of it as a 7-story building where each floor has a specific
                job
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {osiLayers.map((layer) => (
                  <div key={layer.number} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-muted/50">
                    <Badge className={`${layer.color} font-bold min-w-[60px] justify-center`}>
                      Layer {layer.number}
                    </Badge>
                    <div className="flex-1">
                      <div className="font-semibold">{layer.name}</div>
                      <div className="text-sm text-muted-foreground">{layer.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Memory Trick:</h5>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  <strong>"All People Seem To Need Data Processing"</strong>
                  <br />
                  (Application, Presentation, Session, Transport, Network, Data Link, Physical)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* TCP/IP Model */}
          <Card>
            <CardHeader>
              <CardTitle>TCP/IP Model - The Practical 4-Layer Model</CardTitle>
              <CardDescription>
                TCP/IP is what the internet actually uses - simpler and more practical than OSI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {tcpipLayers.map((layer) => (
                  <div key={layer.number} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-muted/50">
                    <Badge className={`${layer.color} font-bold min-w-[60px] justify-center`}>
                      Layer {layer.number}
                    </Badge>
                    <div className="flex-1">
                      <div className="font-semibold">{layer.name}</div>
                      <div className="text-sm text-muted-foreground">{layer.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>OSI vs TCP/IP - Side by Side</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">OSI Model (7 Layers)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✅ More detailed and educational</li>
                    <li>✅ Better for understanding concepts</li>
                    <li>✅ Industry standard for teaching</li>
                    <li>❌ More complex than needed</li>
                    <li>❌ Not used in real implementations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">TCP/IP Model (4 Layers)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Simpler and more practical</li>
                    <li>✅ Actually used by the internet</li>
                    <li>✅ Easier to implement</li>
                    <li>❌ Less detailed for learning</li>
                    <li>❌ Combines multiple functions per layer</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lab" className="space-y-6">
          {/* Devices Used */}
          <Card>
            <CardHeader>
              <CardTitle>Network Devices and Their Layers</CardTitle>
              <CardDescription>Understanding which devices work at which layers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {devices.map((device) => (
                  <Card key={device.name} className="text-center hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <device.icon className="h-12 w-12 mx-auto mb-2 text-blue-600" />
                      <h4 className="font-semibold">{device.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{device.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Lab Exercise */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-green-600" />
                Hands-On Lab: Identify Network Layers
              </CardTitle>
              <CardDescription>
                Practice identifying which layer different protocols and devices operate at
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Network Topology</h4>
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 rounded-lg mb-2">
                        <Monitor className="h-12 w-12 text-blue-600" />
                      </div>
                      <div className="text-sm font-medium">PC1</div>
                      <div className="text-xs text-muted-foreground">192.168.1.10</div>
                    </div>

                    <div className="flex-1 h-px bg-border"></div>

                    <div className="text-center">
                      <div className="inline-block p-4 bg-green-100 dark:bg-green-900 rounded-lg mb-2">
                        <Network className="h-12 w-12 text-green-600" />
                      </div>
                      <div className="text-sm font-medium">Switch1</div>
                      <div className="text-xs text-muted-foreground">Layer 2 Device</div>
                    </div>

                    <div className="flex-1 h-px bg-border"></div>

                    <div className="text-center">
                      <div className="inline-block p-4 bg-purple-100 dark:bg-purple-900 rounded-lg mb-2">
                        <Router className="h-12 w-12 text-purple-600" />
                      </div>
                      <div className="text-sm font-medium">Router1</div>
                      <div className="text-xs text-muted-foreground">Layer 3 Device</div>
                    </div>
                  </div>
                </div>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-muted rounded-lg hover:bg-muted/80">
                    <ChevronRight className="h-4 w-4" />
                    <span className="font-medium">Step 1: Analyze Data Flow</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div className="mb-2"># When PC1 sends data to another network:</div>
                      <div className="mb-1">Layer 7 (Application): User opens web browser</div>
                      <div className="mb-1">Layer 4 (Transport): TCP adds port numbers</div>
                      <div className="mb-1">Layer 3 (Network): IP adds source/destination addresses</div>
                      <div className="mb-1">Layer 2 (Data Link): Ethernet adds MAC addresses</div>
                      <div className="mb-1">Layer 1 (Physical): Electrical signals on cable</div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-muted rounded-lg hover:bg-muted/80">
                    <ChevronRight className="h-4 w-4" />
                    <span className="font-medium">Step 2: Device Layer Analysis</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-semibold text-blue-600">Switch (Layer 2)</h5>
                        <p className="text-sm text-muted-foreground">
                          Reads MAC addresses in Ethernet frames, maintains MAC address table, forwards frames within
                          the same network
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-semibold text-purple-600">Router (Layer 3)</h5>
                        <p className="text-sm text-muted-foreground">
                          Reads IP addresses, maintains routing table, forwards packets between different networks
                        </p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Study Notes & Downloads</CardTitle>
              <CardDescription>Comprehensive study materials for OSI and TCP/IP models</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-dashed">
                  <CardContent className="p-4 text-center">
                    <Download className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-semibold mb-1">OSI vs TCP/IP Comparison Chart</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Visual comparison with examples and memory tricks
                    </p>
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-dashed">
                  <CardContent className="p-4 text-center">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <h4 className="font-semibold mb-1">Layer Functions Reference</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Quick reference for each layer's responsibilities
                    </p>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download Guide
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Key Points Summary */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-blue-50 dark:bg-blue-950/20">
                  <CardHeader>
                    <CardTitle className="text-blue-800 dark:text-blue-200 text-lg">Key Points - OSI Model</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div>
                      • <strong>7 layers</strong> - More detailed and educational
                    </div>
                    <div>
                      • <strong>Theoretical</strong> - Great for understanding concepts
                    </div>
                    <div>
                      • <strong>Layer 3</strong> - Network layer handles routing
                    </div>
                    <div>
                      • <strong>Layer 2</strong> - Data Link handles switching
                    </div>
                    <div>
                      • <strong>Memory trick</strong> - "All People Seem To Need Data Processing"
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 dark:bg-green-950/20">
                  <CardHeader>
                    <CardTitle className="text-green-800 dark:text-green-200 text-lg">
                      Key Points - TCP/IP Model
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div>
                      • <strong>4 layers</strong> - Simpler and more practical
                    </div>
                    <div>
                      • <strong>Real-world</strong> - Actually used by the internet
                    </div>
                    <div>
                      • <strong>Application layer</strong> - Combines OSI layers 5-7
                    </div>
                    <div>
                      • <strong>Network Access</strong> - Combines OSI layers 1-2
                    </div>
                    <div>
                      • <strong>Industry standard</strong> - What networks actually use
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quiz" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Practice Questions</CardTitle>
              <CardDescription>Test your understanding of OSI and TCP/IP models</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <Progress value={((currentQuestion + 1) / questions.length) * 100} className="w-32 h-2" />
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <h4 className="font-semibold mb-3">{questions[currentQuestion].text}</h4>
                <div className="space-y-2">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedAnswer(index)
                        setShowExplanation(true)
                      }}
                      className={`w-full text-left p-3 rounded-lg border transition-colors ${
                        selectedAnswer === index
                          ? index === questions[currentQuestion].correct
                            ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                            : "border-red-500 bg-red-50 dark:bg-red-950/20"
                          : "border-border hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {selectedAnswer === index ? (
                          index === questions[currentQuestion].correct ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Circle className="h-4 w-4 text-red-600" />
                          )
                        ) : (
                          <Circle className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span>
                          {String.fromCharCode(65 + index)}. {option}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {showExplanation && (
                  <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Explanation:</h5>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      {questions[currentQuestion].explanation}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  disabled={currentQuestion === 0}
                  onClick={() => {
                    setCurrentQuestion(currentQuestion - 1)
                    setSelectedAnswer(null)
                    setShowExplanation(false)
                  }}
                >
                  Previous Question
                </Button>
                <Button
                  disabled={currentQuestion === questions.length - 1}
                  onClick={() => {
                    setCurrentQuestion(currentQuestion + 1)
                    setSelectedAnswer(null)
                    setShowExplanation(false)
                  }}
                >
                  Next Question
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
