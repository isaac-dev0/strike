import { Public_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { UserProvider } from "@/hooks/UserProvider";
import { createClient } from "@/utils/supabase/server";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

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
            {children}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
