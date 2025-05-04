import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Script from "next/script";
import { AuthProvider } from "../contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlobalLogistics - Your Trusted Logistics Partner",
  description:
    "Comprehensive clearing, forwarding, and logistics services for businesses worldwide.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <AuthProvider>
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />

            {/* MyAlice Web Chat Widget */}
            <Script id="myalice-webchat" strategy="afterInteractive">
              {`
                !function(){
                  var e,t,n,a;
                  window.MyAliceWebChat||(
                    (t=document.createElement("div")).id="myAliceWebChat",
                    (n=document.createElement("script")).type="text/javascript",
                    n.async=!0,
                    n.src="https://widget.myalice.ai/index.js",
                    (a=(e=document.body.getElementsByTagName("script"))[e.length-1]).parentNode.insertBefore(n,a),
                    a.parentNode.insertBefore(t,a),
                    n.addEventListener("load",(function(){
                      MyAliceWebChat.init({
                        selector:"myAliceWebChat",
                        number:"2349060360506",
                        message:"Welcome to Global Logistic",
                        color:"#25D366",
                        channel:"wa",
                        boxShadow:"none",
                        text:"Message Us",
                        theme:"light",
                        position:"right",
                        mb:"20px",
                        mx:"20px",
                        radius:"20px"
                      })
                    }))
                  );
                }();
              `}
            </Script>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
