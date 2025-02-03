import { WelcomePage } from "@/components/Generic/WecomePage";

async function fetchProducts() {
  const products = [
    { id: "SR0160AQ", title: "Classic Aquamarine and Diamond Ring" },
    { id: "SR0160AW", title: "Classic Aquamarine and Diamond Engagement Ring" },
  ];
  return products;
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className="flex min-h-screen items-center justify-center px-6 sm:px-10 md:px-16 bg-gray-50">
      <div className="w-full max-w-4xl text-center sm:text-left">
        <p className="font-sans text-3xl text-center sm:text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Welcome Back
        </p>
        <p className="mt-2 sm:mt-4 text-gray-600 text-sm sm:text-lg md:text-xl">
          Discover our exclusive collection of elegant rings. Search by product
          ID to explore detailed designs.
        </p>
        <div className="mt-8">
          <WelcomePage products={products} />
        </div>
      </div>
    </main>
  );
}
