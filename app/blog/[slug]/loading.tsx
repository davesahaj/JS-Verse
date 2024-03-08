import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center space-y-10 mx-auto mt-10">
      <div className="space-y-2">
        <Skeleton className="h-4 mx-auto w-[60vw]" />
        <Skeleton className="h-8 mx-auto w-[70vw]" />
      </div>
      <div>
        <Skeleton className="h-[300px] w-[90vw]  lg:h-[300px] lg:w-[500px] rounded-xl" />
      </div>
    </div>
  );
}
