import { Select } from "@/components/Select";

export default function Home() {
  const items = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three" },
    { value: "4", label: "Four" },
  ];

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 bg-slate-200 p-8 pb-20 sm:p-20">
      <p className="font-sans">sdfsdf</p>
      <div className="w-72">
        <Select items={items} />
      </div>
      <p className="font-inter">sdfsdf 2</p>
      <p className="font-spacegrotesk">sdfsdf 3</p>
      <p className="font-aeonikpro">sdfsdf 3</p>
    </div>
  );
}
