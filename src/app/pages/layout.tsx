import Sidebar from '@/app/components/sidebar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{display: 'flex'}}>
      <div>
        <Sidebar />
      </div>
      <div >{children}</div>
    </div>
  );
}