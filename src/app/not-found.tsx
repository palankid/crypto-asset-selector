import Link from "next/link";

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-black p-8 text-white">
    <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    <p className="mt-4 text-lg">The page you are looking for does not exist.</p>
    <Link href="/" className="mt-6 hover:underline">
      Go back to the homepage
    </Link>
  </div>
);

export default NotFound;
