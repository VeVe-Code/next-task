import Image from "next/image";

import { products } from "@/lib/products";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="grid max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
        <div className="flex justify-center bg-gray-100 p-6">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>

        <div className="space-y-4 p-8">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600">
            Dynamic product loaded from route params.
          </p>
          <p className="text-2xl font-semibold">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
