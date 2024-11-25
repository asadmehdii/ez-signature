/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 25/11/2024 - 22:39:08
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2024
    * - Author          : 
    * - Modification    : 
**/
"use client"
import { usePathname } from 'next/navigation';
import Sidebar from "@/app/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
//  ------- set routes here on which you want to show the side bar -------
  const routesWithSidebar = ["/pages/dashboard","/pages/documents", "/pages/templates", "/pages/contacts"];
  const shouldShowSidebar = routesWithSidebar.includes(pathname);
 
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
