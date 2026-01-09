import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {/* LOGO E TÍTULO */}
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-xl border border-gray-100 p-1 shadow-sm">
            <Image
              src={restaurant.avatarImageUrl}
              alt={restaurant.name}
              width={82}
              height={82}
              className="rounded-lg object-cover"
            />
          </div>

          <h2 className="text-lg font-semibold text-gray-900">
            {restaurant.name}
          </h2>
        </div>

        {/* BEM-VINDO */}
        <div className="mt-10 space-y-3 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Seja bem-vindo!</h3>
          <p className="text-sm leading-relaxed text-gray-500">
            Escolha como prefere aproveitar sua refeição. Estamos aqui para
            oferecer praticidade e sabor em cada detalhe.
          </p>
        </div>

        {/* OPÇÕES */}
        <div className="mt-10 grid grid-cols-2 gap-4">
          <ConsumptionMethodOption
            slug={slug}
            option="DINE_IN"
            buttonText="Comer aqui"
            imageAlt="Comer aqui"
            imageUrl="/dine_in.png"
          />

          <ConsumptionMethodOption
            slug={slug}
            option="TAKEAWAY"
            buttonText="Para levar"
            imageAlt="Para levar"
            imageUrl="/takeaway.png"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
