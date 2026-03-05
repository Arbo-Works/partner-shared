import { NavigationLayout } from "@/components/Navigation/Layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <NavigationLayout>{children}</NavigationLayout>;
}
