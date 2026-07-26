import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">
      <h1 className="text-8xl font-extrabold text-yellow-400">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-white">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-lg text-slate-400">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
      >
        Go Back Home
      </Link>
    </main>
  );
}