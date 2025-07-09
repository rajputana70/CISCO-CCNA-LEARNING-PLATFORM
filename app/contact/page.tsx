"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Clock, CheckCircle, HelpCircle, BookOpen, Bug } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const categories = [
    { value: "technical", label: "Technical Support", icon: Bug },
    { value: "content", label: "Content Question", icon: HelpCircle },
    { value: "lab", label: "Lab Help", icon: BookOpen },
    { value: "general", label: "General Inquiry", icon: MessageCircle },
  ]

  const faqs = [
    {
      question: "How long does it take to complete the CCNA course?",
      answer:
        "Most students complete the course in 3-6 months with 2-3 hours of daily study. The self-paced format allows you to go faster or slower based on your schedule.",
    },
    {
      question: "Do I need any prior networking experience?",
      answer:
        "No! This course is designed for absolute beginners. We start with the very basics and build up your knowledge step by step.",
    },
    {
      question: "What software do I need for the labs?",
      answer:
        "You'll need Cisco Packet Tracer, which is free to download. We provide all the lab files and step-by-step instructions.",
    },
    {
      question: "How often is the content updated?",
      answer:
        "We update the content regularly to match the latest CCNA 200-301 exam objectives. All updates are free for enrolled students.",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Contact & Support</h1>
        <p className="text-muted-foreground">Get help with your CCNA learning journey. We're here to support you!</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Send us a Message
              </CardTitle>
              <CardDescription>We typically respond within 24 hours during business days</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Category</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: category.value })}
                        className={`p-3 rounded-lg border text-left transition-colors ${
                          formData.category === category.value
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
                            : "border-border hover:bg-muted"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <category.icon className="h-4 w-4" />
                          <span className="text-sm font-medium">{category.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please provide as much detail as possible about your question or issue..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info & Response Times */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Response Times</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">Technical Support</div>
                  <div className="text-sm text-muted-foreground">Within 24 hours</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <HelpCircle className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">Content Questions</div>
                  <div className="text-sm text-muted-foreground">Within 12 hours</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium">General Inquiries</div>
                  <div className="text-sm text-muted-foreground">Within 48 hours</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Other Ways to Get Help</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <MessageCircle className="mr-2 h-4 w-4" />
                Join Study Group Chat
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse Knowledge Base
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <HelpCircle className="mr-2 h-4 w-4" />
                Schedule 1-on-1 Help
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Quick answers to common questions about the CCNA course</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Support Hours */}
      <Card className="bg-blue-50 dark:bg-blue-950/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100">Support Hours</h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm">Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm">Weekend: Limited support via email</p>
            </div>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Currently Online
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
