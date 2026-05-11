import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
}
