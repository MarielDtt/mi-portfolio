import FloatingSidebar from "@/components/floatingSidebar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#D7F4F7] to-[#FDE8D7] dark:bg-[#1a1a1a] text-black dark:text-white">
            <Navbar />
            <FloatingSidebar />
            {children}
            <Footer />
        </main>

    );
}

