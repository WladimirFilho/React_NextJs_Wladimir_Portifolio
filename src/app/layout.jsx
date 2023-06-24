import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <div className="">
          <Navbar />
        </div>

        <main className="w-full flex items-center justify-center p-8 mx-auto max-w-[1640px] min-h-[calc(100vh-152px)] lg:min-h-[calc(100vh-88px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
