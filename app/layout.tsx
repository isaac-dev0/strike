import { Public_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import AppHeader from "@/components/global/AppHeader";
import AppFooter from "@/components/global/AppFooter";

import { UserProvider } from "@/hooks/UserProvider";
import { getUser } from "@/utils/supabase/server";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  return (
    <html lang="en" className={publicSans.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider value={user}>
            <AppHeader />
            {children}
            <AppFooter />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
