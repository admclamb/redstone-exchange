import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col">
        <p>PEEOE</p>
      </main>
    </div>
  );
}
