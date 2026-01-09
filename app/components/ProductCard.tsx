import Link from "next/link";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group">
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="size-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="space-y-2 p-4">
          <h3 className="line-clamp-1 text-lg font-semibold text-gray-800">
            {title}
          </h3>

          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-gray-900">${price}</p>

            <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-600">
              View
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
