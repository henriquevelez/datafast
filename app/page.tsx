import StatCard from "@/Components/StatCard";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-bold">My Analytics</h1>
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Visitors" value={1200} />
        <StatCard label="Page views" value={3400} />
        <StatCard label="Sessions" value={1500} />
      </div>
    </main>
  );
}