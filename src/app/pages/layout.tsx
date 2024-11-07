import Sidebar from "@/app/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Sidebar children={children} />;
}
