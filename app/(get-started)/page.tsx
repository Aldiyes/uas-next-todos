import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";

export default function GetStartedPage() {
  return (
    <main className="flex min-h-full flex-col">
      <div className="flex flex-1 flex-col items-center justify-center gap-y-8 px-6 pb-10 text-center md:justify-start">
        <Heading />
      </div>
      <Footer />
    </main>
  );
}
