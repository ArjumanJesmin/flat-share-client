import FooterGrid from "@/components/shared/Footer/FooterGrid";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <FooterGrid />
    </div>
  );
}
