import { ThemeProvider } from "@/app/components/theme-provider";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
