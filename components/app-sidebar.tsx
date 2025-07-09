"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Home, Network, Wifi, Globe, Server, Shield, Bot, BookOpen, HelpCircle, Mail, Award } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const domains = [
  {
    title: "Network Fundamentals",
    icon: Network,
    percentage: 20,
    color: "text-blue-600",
    topics: [
      { name: "Compare OSI and TCP/IP Models", href: "/topic/network-fundamentals/compare-osi-and-tcpip-models" },
      { name: "MAC and IP Addressing", href: "/topic/network-fundamentals/mac-and-ip-addressing" },
      { name: "IPv4/IPv6 Configuration", href: "/topic/network-fundamentals/ipv4-ipv6-configuration" },
      { name: "TCP vs UDP", href: "/topic/network-fundamentals/tcp-vs-udp" },
      { name: "Cabling and Interfaces", href: "/topic/network-fundamentals/cabling-and-interfaces" },
    ],
  },
  {
    title: "Network Access",
    icon: Wifi,
    percentage: 20,
    color: "text-green-600",
    topics: [
      { name: "VLANs Configuration", href: "/topic/network-access/vlans-configuration" },
      { name: "Trunking (802.1Q)", href: "/topic/network-access/trunking-8021q" },
      { name: "Inter-VLAN Routing", href: "/topic/network-access/inter-vlan-routing" },
      { name: "EtherChannel", href: "/topic/network-access/etherchannel" },
      { name: "STP and RSTP", href: "/topic/network-access/stp-and-rstp" },
    ],
  },
  {
    title: "IP Connectivity",
    icon: Globe,
    percentage: 25,
    color: "text-purple-600",
    topics: [
      { name: "Routing Table Structure", href: "/topic/ip-connectivity/routing-table-structure" },
      { name: "Static Routing", href: "/topic/ip-connectivity/static-routing" },
      { name: "OSPFv2 Single-Area", href: "/topic/ip-connectivity/ospfv2-single-area" },
      { name: "First-Hop Redundancy", href: "/topic/ip-connectivity/first-hop-redundancy" },
      { name: "Packet Forwarding", href: "/topic/ip-connectivity/packet-forwarding" },
    ],
  },
  {
    title: "IP Services",
    icon: Server,
    percentage: 10,
    color: "text-orange-600",
    topics: [
      { name: "NTP Configuration", href: "/topic/ip-services/ntp-configuration" },
      { name: "DHCP Client/Server", href: "/topic/ip-services/dhcp-client-server" },
      { name: "DNS Operation", href: "/topic/ip-services/dns-operation" },
      { name: "SNMP and Syslog", href: "/topic/ip-services/snmp-and-syslog" },
      { name: "SSH and File Transfer", href: "/topic/ip-services/ssh-and-file-transfer" },
    ],
  },
  {
    title: "Security Fundamentals",
    icon: Shield,
    percentage: 15,
    color: "text-red-600",
    topics: [
      { name: "Device Access Control", href: "/topic/security-fundamentals/device-access-control" },
      { name: "Remote Access with SSH", href: "/topic/security-fundamentals/remote-access-ssh" },
      { name: "Access Control Lists", href: "/topic/security-fundamentals/access-control-lists" },
      { name: "Layer 2 Security", href: "/topic/security-fundamentals/layer-2-security" },
      { name: "Wireless Security", href: "/topic/security-fundamentals/wireless-security" },
    ],
  },
  {
    title: "Automation & Programmability",
    icon: Bot,
    percentage: 10,
    color: "text-indigo-600",
    topics: [
      {
        name: "Controller-based vs Traditional",
        href: "/topic/automation-programmability/controller-based-vs-traditional",
      },
      { name: "REST APIs and HTTP", href: "/topic/automation-programmability/rest-apis-and-http" },
      { name: "Configuration Management", href: "/topic/automation-programmability/configuration-management" },
      { name: "JSON Structure Basics", href: "/topic/automation-programmability/json-structure-basics" },
    ],
  },
]

const otherPages = [
  {
    title: "Resources & Downloads",
    url: "/resources",
    icon: BookOpen,
  },
  {
    title: "Practice Quizzes",
    url: "/quizzes",
    icon: HelpCircle,
  },
  {
    title: "Contact & Support",
    url: "/contact",
    icon: Mail,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
            <Award className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="font-semibold">CCNA Learning</div>
            <div className="text-xs text-muted-foreground">200-301 v1.1</div>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {domains.map((domain, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <domain.icon className={`h-4 w-4 ${domain.color}`} />
                <span>{domain.title}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {domain.percentage}%
              </Badge>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {domain.topics.map((topic, topicIndex) => (
                  <SidebarMenuItem key={topicIndex}>
                    <SidebarMenuButton asChild className="h-auto py-2 text-sm">
                      <Link href={topic.href}>
                        <div className="w-2 h-2 rounded-full bg-muted-foreground/40 shrink-0" />
                        <span className="truncate">{topic.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        <SidebarGroup>
          <SidebarGroupLabel>Study Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {otherPages.map((page) => (
                <SidebarMenuItem key={page.title}>
                  <SidebarMenuButton asChild>
                    <Link href={page.url}>
                      <page.icon className="h-4 w-4" />
                      <span>{page.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="text-center space-y-2">
          <Badge variant="secondary" className="text-xs">
            v1.1 - 2024 Edition
          </Badge>
          <div className="text-xs text-muted-foreground">Complete CCNA Course</div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
