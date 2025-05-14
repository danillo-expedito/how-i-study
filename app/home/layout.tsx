import SideNav from '@/app/ui/home/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-72">
        <SideNav />
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
}