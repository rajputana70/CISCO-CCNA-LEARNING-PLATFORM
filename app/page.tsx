import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, Users, Award, CheckCircle, Network, Wifi, Globe, Server, Shield, Bot } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const domains = [
    {
      title: "Network Fundamentals",
      percentage: 20,
      description: "OSI/TCP-IP models, addressing, subnetting, and basic networking concepts",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      topics: 13,
      href: "/domain/network-fundamentals",
    },
    {
      title: "Network Access",
      percentage: 20,
      description: "VLANs, trunking, switching, EtherChannel, and wireless architecture",
      icon: Wifi,
      color: "from-green-500 to-emerald-500",
      topics: 7,
      href: "/domain/network-access",
    },
    {
      title: "IP Connectivity",
      percentage: 25,
      description: "Routing protocols, OSPF, static routing, and packet forwarding",
      icon: Globe,
      color: "from-purple-500 to-violet-500",
      topics: 5,
      href: "/domain/ip-connectivity",
    },
    {
      title: "IP Services",
      percentage: 10,
      description: "DHCP, DNS, NTP, SNMP, and network services configuration",
      icon: Server,
      color: "from-orange-500 to-red-500",
      topics: 5,
      href: "/domain/ip-services",
    },
    {
      title: "Security Fundamentals",
      percentage: 15,
      description: "Access control, ACLs, wireless security, and device hardening",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      topics: 5,
      href: "/domain/security-fundamentals",
    },
    {
      title: "Automation & Programmability",
      percentage: 10,
      description: "APIs, JSON, configuration management, and network automation",
      icon: Bot,
      color: "from-indigo-500 to-purple-500",
      topics: 4,
      href: "/domain/automation-programmability",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 p-8 text-white">
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-left">
            <div className="flex-1 space-y-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30">CCNA 200-301 v1.1 Complete Course</Badge>
              <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
                Start Your Cisco CCNA
                <span className="block text-cyan-200">200-301 Journey</span>
              </h1>
              <p className="text-xl text-blue-100 lg:text-2xl">
                Master all 6 domains of CCNA certification with hands-on labs, real-world examples, and
                beginner-friendly explanations. No networking background required!
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start Learning Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Complete Syllabus
                </Button>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <div className="relative">
                <div className="h-64 w-64 rounded-full bg-white/10 p-8">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white/20">
                    <Award className="h-24 w-24 text-yellow-300" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-full bg-green-500 p-3">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CCNA Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-blue-700 dark:text-blue-300">What is CCNA 200-301?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              CCNA (Cisco Certified Network Associate) is like getting a driver's license for computer networks. The
              200-301 exam proves you can design, implement, and troubleshoot enterprise networks.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Think of it this way:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Networks are like city transportation systems</li>
                <li>• Routers are like highway interchanges directing traffic</li>
                <li>• Switches are like local road intersections</li>
                <li>• You'll become the "network architect and engineer"</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-300">Who Should Take CCNA?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$85K+</div>
                <div className="text-sm text-muted-foreground">Average Salary</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">750K+</div>
                <div className="text-sm text-muted-foreground">Job Openings</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Perfect for:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Complete beginners to networking</li>
                <li>• IT professionals seeking advancement</li>
                <li>• Students pursuing tech careers</li>
                <li>• Anyone wanting network expertise</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CCNA Domains Overview */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Complete CCNA 200-301 v1.1 Curriculum</h2>
          <p className="text-muted-foreground text-lg">
            Master all 6 domains with hands-on labs and real-world examples
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${domain.color} p-4 mb-4`}>
                  <domain.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{domain.title}</CardTitle>
                  <Badge variant="secondary" className="font-bold">
                    {domain.percentage}%
                  </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed">{domain.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{domain.topics} Topics</span>
                  <span className="font-medium">0% Complete</span>
                </div>
                <Progress value={0} className="h-2" />
                <Link href={domain.href}>
                  <Button className="w-full group-hover:shadow-md transition-shadow">Start Domain {index + 1}</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Features */}
      <Card className="bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-950/20 dark:to-pink-950/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Why Choose Our CCNA Course?</CardTitle>
          <CardDescription className="text-lg">
            Designed specifically for beginners with comprehensive hands-on learning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 p-4 mx-auto">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h4 className="font-semibold">Beginner Friendly</h4>
              <p className="text-sm text-muted-foreground">
                No technical background needed. We explain everything in simple terms with real-world analogies.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 p-4 mx-auto">
                <Users className="h-8 w-8 text-green-600 dark:text-green-300" />
              </div>
              <h4 className="font-semibold">Hands-on Labs</h4>
              <p className="text-sm text-muted-foreground">
                Practice with real CLI commands, network topologies, and troubleshooting scenarios.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 p-4 mx-auto">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h4 className="font-semibold">Practice Questions</h4>
              <p className="text-sm text-muted-foreground">
                Test your knowledge with hundreds of practice questions similar to the real exam.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-orange-100 dark:bg-orange-900 p-4 mx-auto">
                <Download className="h-8 w-8 text-orange-600 dark:text-orange-300" />
              </div>
              <h4 className="font-semibold">Study Materials</h4>
              <p className="text-sm text-muted-foreground">
                Download comprehensive PDF notes, lab files, and reference guides for offline study.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Start */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-left">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold">Ready to Begin Your CCNA Journey?</h3>
              <p className="text-blue-100">
                Start with Domain 1: Network Fundamentals - the foundation of all networking concepts. Learn about OSI
                models, IP addressing, and basic network devices.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <Link href="/topic/network-fundamentals/compare-osi-and-tcpip-models">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Network className="mr-2 h-5 w-5" />
                  Start with Network Fundamentals
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Study Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">39</div>
            <div className="text-sm text-muted-foreground">Total Topics</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">150+</div>
            <div className="text-sm text-muted-foreground">Hands-on Labs</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">500+</div>
            <div className="text-sm text-muted-foreground">Practice Questions</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">50+</div>
            <div className="text-sm text-muted-foreground">PDF Study Guides</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
