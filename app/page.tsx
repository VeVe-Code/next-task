import AlertButton from "./components/AlertButton";
import ClickCounter from "./components/ClickCounter";
import FruitList from "./components/FruitList";
import NameForm from "./components/NameForm";
import Posts from "./components/Posts";
import ProductCard from "./components/ProductCard";
import SkyBlueBox from "./components/SkyBlueBox";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 10,
      image:
        "https://i.pinimg.com/originals/9b/fc/19/9bfc19fa411ecac6393e8a45f36d0126.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      price: 20,
      image:
        "https://i5.walmartimages.com/seo/Neorosiri-Women-s-Soft-Leather-Tote-Shoulder-Bag-Large-Capacity-Handbag-with-Soft-Texture_b1bf1c83-8e19-4cc1-af16-eff406163154.7e988eaab09c1839cfd35060d14c7fc0.jpeg",
    },
    {
      id: 3,
      title: "Product 3",
      price: 30,
      image:
        "https://cdn.kometia-static.com/bolsas-jennyfer/images/9434-5e_color-azul.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl p-6">
          <h1 className="text-3xl font-bold text-gray-800">🛍️ Modern Store</h1>
          <p className="text-gray-500">Next.js + TypeScript + Tailwind CSS</p>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl space-y-12 px-6 py-10">
        {/* Widgets */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Dashboard Widgets
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
              <ClickCounter />
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
              <FruitList />
            </div>

            <div className="flex items-center justify-center rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
              <AlertButton />
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <SkyBlueBox />
            <div className="mt-6">
              <NameForm />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <Posts />
          </div>
        </section>

        {/* Products */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              Featured Products
            </h2>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
              {products.length} items
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
