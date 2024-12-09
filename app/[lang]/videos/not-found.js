import Link from "next/link"


export default function NotFound() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-color-bg via-gray-300 bg-color-bg text-white opacity-40">
        <div className="text-center">
          
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <h2 className="text-4xl font-semibold mb-8">{`Oops! Page not found`}</h2>
          <p className="text-lg mb-8">{`Sorry, the page you are looking for doesn't exist or has been moved.`}</p>
  
          <Link href="/" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition duration-300">
              Go Back to Home
          </Link>
        </div>
      </div>
    )
  }