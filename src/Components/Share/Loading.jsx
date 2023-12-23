export default function Loading() {
  return (
    <div className="flex items-center justify-center text-center flex-col">
      <h4 className="font-extralight text-2xl">Loading</h4>
      <div className="container mx-auto">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </div>
  );
}
