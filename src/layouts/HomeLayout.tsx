// src/layouts/HomeLayout.tsx
import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <>{children}</>; // nada más, sin header/footer
}
