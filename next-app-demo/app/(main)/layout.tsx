// app/(info)/layout.tsx
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1 }}>{children}</main>
      </div>
      <Footer />
    </>
  );
}
