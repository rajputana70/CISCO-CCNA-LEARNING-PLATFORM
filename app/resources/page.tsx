import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Video, BookOpen, Network, Wifi, Globe, Server, Shield, Bot } from "lucide-react"

export default function ResourcesPage() {
  const domainResources = [
    {
      domain: "Network Fundamentals",
      icon: Network,
      color: "text-blue-600",
      resources: [
        { name: "OSI vs TCP/IP Models Guide", type: "PDF", size: "2.1 MB" },
        { name: "Subnetting Practice Worksheets", type: "PDF", size: "3.4 MB" },
        { name: "IPv6 Addressing Reference", type: "PDF", size: "1.8 MB" },
        { name: "Network Devices Comparison", type: "PDF", size: "2.7 MB" },
      ]
    },
    {
      domain: "Network Access",
      icon: Wifi,
      color: "text-green-600",
      resources: [
        { name: "VLAN Configuration Labs", type: "PKT", size: "8.2 MB" },
        { name: "STP Troubleshooting Guide", type: "PDF", size: "2.9 MB" },
        { name: "EtherChannel Setup Examples", type: "PKT", size: "5.1 MB" },
        { name: "Wireless Security Protocols", type: "PDF", size: "1.6 MB" },
      ]
    },
    {
      domain: "IP Connectivity",
      icon: Globe,
      color: "text-purple-600",
      resources: [
        { name: "OSPF Configuration Guide", type: "PDF", size: "4.2 MB" },
        { name: "Static Routing Labs", type: "PKT", size: "6.8 MB" },
        { name: "Routing Table Analysis", type: "PDF", size: "2.3 MB" },
        { name: "FHRP Implementation", type: "PKT", size: "4.7 MB" },
      ]
    },
    {
      domain: "IP Services",
      icon: Server,
      color: "text-orange-600",
      resources: [
        { name: "DHCP Server Configuration", type: "PDF", size: "1.9 MB" },
        { name: "DNS Setup and Troubleshooting", type: "PDF", size: "2.4 MB" },
        { name: "NTP Configuration Examples", type: "TXT", size: "245 KB" },
        { name: "SNMP Monitoring Setup", type: "PDF", size: "3.1 MB" },
      ]
    },
    {
      domain: "Security Fundamentals",
      icon: Shield,
      color: "text-red-600",
      resources: [
        { name: "ACL Configuration Guide", type: "PDF", size: "3.8 MB" },
        { name: "SSH Security Setup", type: "PDF", size: "1.7 MB" },
        { name: "Port Security Labs", type: "PKT", size: "4.3 MB" },
        { name: "Wireless Security Protocols", type: "PDF", size: "2.6 MB" },
      ]
    },
    {
      domain: "Automation & Programmability",
      icon: Bot,
      color: "text-indigo-600",
      resources: [
        { name: "REST API Basics Guide", type: "PDF", size: "2.8 MB" },
        { name: "JSON Structure Examples", type: "TXT", size: "156 KB" },
        { name: "Ansible Playbook Templates", type: "TXT", size: "892 KB" },
        { name: "Network Automation Overview", type: "PDF", size: "3.5 MB" },
      ]
    }
  ]

  const videoResources = [
    { name: "Complete CCNA Course Overview", duration: "15:30", size: "245 MB" },
    { name: "Subnetting Made Simple", duration: "22:45", size: "387 MB" },
    { name: "VLAN Configuration Walkthrough", duration: "18:20", size: "298 MB" },
    { name: "OSPF Configuration Demo", duration: "25:15", size: "421 MB" },
    { name: "Network Security Best Practices", duration: "19:40", size: "334 MB" },
  ]

  const externalLinks = [
    { name: "Cisco Learning Network", description: "Official Cisco study community and resources" },
    { name: "Packet Tracer Download", description: "Free network simulation software from Cisco" },
    { name: "CCNA Exam Registration", description: "Schedule your certification exam with Pearson VUE" },
    { name: "Cisco Documentation", description: "Official configuration guides and references" },
    { name: "Network Simulator Tools", description: "Additional tools for network practice and simulation" },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-4 w-4 text-red-500" />
      case "PKT":
        return <BookOpen className="h-4 w-4 text-blue-500" />
      case "TXT":
        return <FileText className="h-4 w-4 text-gray-500" />
      case "MP4":
        return <Video className="h-4 w-4 text-purple-500" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Resources & Downloads</h1>
        <p className="text-muted-foreground">
          Complete collection of study materials, lab files, and reference guides for CCNA 200-301
        </p>
      </div>

      {/* Download All Button */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Complete CCNA Resource Package</h3>
              <p className="text-muted-foreground">
                Download all study materials, lab files, videos, and reference guides in one package
              </p>
              <div className="flex gap-2 mt-2">
                <Badge>Total Size: 1.2 GB</Badge>
                <Badge variant="secondary">150+ Files</Badge>
              </div>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Download className="mr-2 h-5 w-5" />
              Download Complete Package
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Domain-Specific Resources */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Study Materials by Domain</h2>
        
        {domainResources.map((domain, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <domain.icon className={`h-5 w-5 ${domain.color}`} />
                {domain.domain}
              </CardTitle>
              <CardDescription>
                Domain-specific study guides, lab files, and reference materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {domain.resources.map((resource, resourceIndex) => (
                  <div
                    key={resourceIndex}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {getIcon(resource.type)}
                      <div>
                        <div className="font-medium text-sm">{resource.name}</div>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {resource.size}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Video Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-purple-600" />
            Video Learning Materials
          </CardTitle>
          <CardDescription>
            Visual explanations and demonstrations of key CCNA concepts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {videoResources.map((video, index) => (\
