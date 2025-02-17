import { Loader2 } from "lucide-react";

export function LoadingFallback() {
  return (
    <div className="flex flex-row gap-x-3 justify-center h-screen">
      <Loader2 className="animate-spin" />
      Loading
    </div>
  );
}
