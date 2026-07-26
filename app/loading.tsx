export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent"></div>

        <p className="text-lg font-medium text-white">
          Loading...
        </p>
      </div>
    </div>
  );
}