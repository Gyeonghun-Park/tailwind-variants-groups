import { cn } from "src/lib/utils";

export default function Home() {
  return (
    <div>
      <h2 className="bg-red-400 hover:(text-lg capitalize text-slate-600)">
        hello world
      </h2>

      <h2
        className={cn(
          "bg-red-200",
          "hover:(text-2xl capitalize text-green-700)"
        )}
      >
        cn test
      </h2>

      <h2
        className="bg-green-400
         hover:(text-3xl capitalize text-violet-600)"
      >
        multi line test
      </h2>
    </div>
  );
}
