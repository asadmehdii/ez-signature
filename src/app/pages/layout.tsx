"use client"
import { usePathname } from 'next/navigation';
import Sidebar from "@/app/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
//  ------- set routes here on which you want to show the side bar -------
  const routesWithSidebar = ["/pages/dashboard","/pages/documents", "/pages/templates", "/pages/contacts", "/pages/teams", "/pages/trash"];
  const shouldShowSidebar = routesWithSidebar.includes(pathname);

  console.log("shouldShowSidebar",shouldShowSidebar,routesWithSidebar.includes(pathname))
 
  return (
    <>
      {shouldShowSidebar ? (
        <Sidebar>{children}</Sidebar> 
      ) : (
        children
      )}
    </>
  );
}
