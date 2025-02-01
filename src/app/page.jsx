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
    <main className="flex min-h-screen items-center justify-center h-full">
      <div>
        <p className="font-sans text-6xl">Welcome Back</p>
        <WelcomePage products={products} />
      </div>
    </main>
  );
}
