const ServiceCardSkeleton = () => {
  return (
    <div className="rounded-md flex flex-col gap-4 max-w-[400px] shadow-lg animate-pulse">
      {/* Image skeleton */}
      <div className="rounded-2xl bg-gray-200 h-[220px] w-full" />

      {/* Text skeleton */}
      <div className="px-4 py-6 space-y-3">
        <div className="h-5 w-3/4 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />
      </div>
    </div>
  );
};
export default ServiceCardSkeleton;
