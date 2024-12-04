"use client"

import { Cog, Command, LayoutDashboard, Package, Send, User } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import AppSidebarPrimary from "./AppSidebarPrimary"
import AppSidebarSecondary from "./AppSidebarSecondary"
import AppSidebarUser from "./AppSidebarUser"

const sidebarConfig = {
  primary: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Analytics",
          url: "/dashboard/analytics",
        },
      ],
    },
    {
      title: "Referrals",
      url: "/dashboard/referrals",
      icon: Package,
    },
    {
      title: "Accounts",
      url: "/dashboard/accounts",
      icon: User,
    },
  ],
  secondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Cog,
    },
    {
      title: "Feedback",
      url: "/dashboard/feedback",
      icon: Send,
    },
  ],
}

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Strike</span>
                  <span className="truncate text-xs">Referral Management</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarPrimary items={sidebarConfig.primary} />
        <AppSidebarSecondary
          items={sidebarConfig.secondary}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarFooter>
        <AppSidebarUser />
      </SidebarFooter>
    </Sidebar>
  )
}
