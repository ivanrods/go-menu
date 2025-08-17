import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

import { formatCurrency } from "@/helpers/format-currency";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  const { slug } = useParams<{ slug: string }>();
  const searchParams = useSearchParams();
  const consumptionMethod = searchParams.get("consumptionMethod");
  return (
    <div className="grid items-center gap-4 space-y-3 px-5 md:grid-cols-2 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/${slug}/menu/${product.id}?consumptionMethod=${consumptionMethod}`}
          className="flex items-center justify-between gap-10 border-b py-3 md:flex-col-reverse md:gap-2"
        >
          <div className="w-full">
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
              {formatCurrency(product.price)}
            </p>
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px] rounded-t-xl md:min-h-72 md:w-full md:bg-gray-100">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain md:p-2"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
