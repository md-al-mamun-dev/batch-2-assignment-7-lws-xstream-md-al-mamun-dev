import "./globals.css";
import Header from "../components/Header";
import DictionaryProvider from "@/context/dictionary/Provider";


export const metadata = {
  title: "LWSXstream App",
  description: "Assignment 7",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
     
        <body class="bg-color-bg text-white font-exo">
          <div class="container mx-auto px-4 py-4">
          <DictionaryProvider>
              <Header/>
              { children }

            </DictionaryProvider>           
          </div>
          
        </body>
        
      
    </html>
  );
}
