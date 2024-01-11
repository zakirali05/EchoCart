import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex items-center gap-2">
        <p className="font-mono font-semibold">Loading</p>
        <Loader className="h-4 w-4 animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
