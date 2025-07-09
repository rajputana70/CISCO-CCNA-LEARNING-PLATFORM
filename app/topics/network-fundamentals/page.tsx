"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Progress } from "@/components/ui/progress"
import { Network, Router, Monitor, Wifi, Download, ChevronRight, CheckCircle, Circle, Play } from "lucide-react"

export default function NetworkFundamentalsPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const devices = [
    { name: "Router", icon: Router, description: "Connects different networks together" },
    { name: "Switch", icon: Network, description: "Connects devices within the same network" },
    { name: "PC/Laptop", icon: Monitor, description: "End devices that use the network" },
    { name: "Access Point", icon: Wifi, description: "Provides wireless network access" },
  ]

  const labSteps = [
    {
      title: "Initial Setup",
      commands: [
        "Router> enable",
        "Router# configure terminal",
        "Router(config)# hostname R1",
        "R1(config)# enable secret cisco123",
      ],
    },
    {
      title: "Interface Configuration",
      commands: [
        "R1(config)# interface gigabitEthernet 0/0",
        "R1(config-if)# ip address 192.168.1.1 255.255.255.0",
        "R1(config-if)# no shutdown",
        "R1(config-if)# exit",
      ],
    },
    {
      title: "Verification",
      commands: ["R1# show ip interface brief", "R1# show running-config", "R1# ping 192.168.1.10"],
    },
  ]

  const question = {
    text: "What is the primary function of a router in a network?",
    options: [
      "To connect devices within the same network",
      "To connect different networks together",
      "To provide wireless access",
      "To store network data",
    ],
    correct: 1,
    explanation:
      "A router's primary function is to connect different networks together and route traffic between them. Think of it like a traffic officer at an intersection directing cars (data) to their correct destinations.",
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Network Fundamentals</h1>
          <p className="text-muted-foreground">Understanding the basics of computer networking</p>
        </div>
        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          <CheckCircle className="mr-1 h-3 w-3" />
          Completed
        </Badge>
      </div>

      {/* Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Topic Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={100} className="mb-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>5 of 5 sections completed</span>
            <span>100%</span>
          </div>
        </CardContent>
      </Card>

      {/* Overview */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="h-5 w-5 text-blue-600" />
            What are Network Fundamentals?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Network fundamentals are like learning the alphabet before reading. They're the basic building blocks that
            help computers talk to each other, just like how people use roads, traffic signs, and addresses to navigate
            a city.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold">What You'll Learn:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• How networks are like postal systems</li>
                <li>• OSI Model (7-layer network cake)</li>
                <li>• TCP/IP (the internet's language)</li>
                <li>• Cables and wireless connections</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Real-World Example:</h4>
              <p className="text-sm text-muted-foreground">
                Think of a network like a postal system. Your computer is like your house, the router is like the post
                office, and data packets are like letters with addresses that need to be delivered to the right
                destination.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Devices Used */}
      <Card>
        <CardHeader>
          <CardTitle>Network Devices You'll Work With</CardTitle>
          <CardDescription>These are the main "characters" in our network story</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

      {/* Lab Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5 text-green-600" />
            Hands-On Lab: Basic Router Configuration
          </CardTitle>
          <CardDescription>Practice configuring a router step-by-step</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="topology" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="topology">Network Diagram</TabsTrigger>
              <TabsTrigger value="addressing">IP Addressing</TabsTrigger>
              <TabsTrigger value="commands">CLI Commands</TabsTrigger>
            </TabsList>

            <TabsContent value="topology" className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                <div className="text-center">
                  <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                    <Router className="h-16 w-16 text-blue-600" />
                    <div className="text-sm font-medium mt-2">R1 (Router)</div>
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">Gig0/0: 192.168.1.1/24</div>
                  <div className="h-px bg-border w-24 mx-auto mb-4"></div>
                  <div className="inline-block p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Monitor className="h-16 w-16 text-green-600" />
                    <div className="text-sm font-medium mt-2">PC1</div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">IP: 192.168.1.10/24</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="addressing" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Router R1</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Interface:</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">Gig0/0</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">IP Address:</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">192.168.1.1</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Subnet Mask:</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">255.255.255.0</code>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">PC1</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">IP Address:</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">192.168.1.10</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Subnet Mask:</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">255.255.255.0</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Gateway:</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">192.168.1.1</code>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="commands" className="space-y-4">
              {labSteps.map((step, index) => (
                <Collapsible key={index}>
                  <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-muted rounded-lg hover:bg-muted/80">
                    <ChevronRight className="h-4 w-4" />
                    <span className="font-medium">
                      Step {index + 1}: {step.title}
                    </span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      {step.commands.map((command, cmdIndex) => (
                        <div key={cmdIndex} className="mb-1">
                          {command}
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Notes & PDF */}
      <Card>
        <CardHeader>
          <CardTitle>Study Notes & Resources</CardTitle>
          <CardDescription>Download comprehensive notes and reference materials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-dashed">
              <CardContent className="p-4 text-center">
                <Download className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <h4 className="font-semibold mb-1">Network Fundamentals Notes</h4>
                <p className="text-sm text-muted-foreground mb-3">Complete study guide with diagrams and examples</p>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
            <Card className="border-dashed">
              <CardContent className="p-4 text-center">
                <Download className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h4 className="font-semibold mb-1">Lab Configuration Files</h4>
                <p className="text-sm text-muted-foreground mb-3">Ready-to-use Packet Tracer files</p>
                <Button size="sm" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Lab
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Question</CardTitle>
          <CardDescription>Test your understanding of network fundamentals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <h4 className="font-semibold mb-3">{question.text}</h4>
            <div className="space-y-2">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedAnswer(index)
                    setShowExplanation(true)
                  }}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedAnswer === index
                      ? index === question.correct
                        ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                        : "border-red-500 bg-red-50 dark:bg-red-950/20"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {selectedAnswer === index ? (
                      index === question.correct ? (
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
                <p className="text-sm text-yellow-700 dark:text-yellow-300">{question.explanation}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
