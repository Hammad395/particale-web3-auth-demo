import Link from "next/link";
import Login from "~/components/Login";

export default function HomePage() {
  console.log(" heelo server");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Login />
    </main>
  );
}
