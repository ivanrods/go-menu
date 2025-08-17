/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    await tx.restaurant.deleteMany();
    const restaurant = await tx.restaurant.create({
      data: {
        name: "GoMenu",
        slug: "go-menu",
        description: "O melhor fast food do mundo",
        avatarImageUrl: "https://i.ibb.co/nMLS4mz9/logo-go-menu.png",
        coverImageUrl: "https://i.ibb.co/4nkdxRWQ/go-menu-cover.jpg",
      },
    });
    const combosCategory = await tx.menuCategory.create({
      data: {
        name: "Combos",
        restaurantId: restaurant.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Combo GoBurger Clássico",
          description:
            "Hambúrguer bovino suculento com queijo, alface fresca e molho especial. Acompanha batata frita média e refrigerante.",
          price: 29.9,
          imageUrl: "https://i.ibb.co/LmYYpjj/Combo-Go-Burger-Cl-ssico.png",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão com gergelim",
            "Hambúrguer 100% bovino",
            "Queijo prato",
            "Alface americana",
            "Tomate fatiado",
            "Molho especial GoMenu",
            "Batata frita média",
            "Refrigerante lata",
          ],
        },
        {
          name: "Combo GoBacon Duplo",
          description:
            "Dois hambúrgueres de carne, queijo cheddar, fatias crocantes de bacon e molho barbecue. Acompanha onion rings e refrigerante.",
          price: 36.9,
          imageUrl: "https://i.ibb.co/bjN1LND4/Combo-Go-Bacon-Duplo.png",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão brioche",
            "2 hambúrgueres bovinos",
            "Queijo cheddar",
            "Bacon crocante",
            "Molho barbecue",
            "Onion rings",
            "Refrigerante lata",
          ],
        },
        {
          name: "Combo GoChicken Crispy",
          description:
            "Frango empanado crocante, alface, queijo suave e maionese temperada. Acompanha batata frita e suco natural.",
          price: 31.9,
          imageUrl: "https://i.ibb.co/C3rWQtCf/Combo-Go-Chicken-Crispy.png",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão com gergelim",
            "Filé de frango empanado",
            "Queijo muçarela",
            "Alface americana",
            "Maionese temperada",
            "Batata frita média",
            "Suco natural 300ml",
          ],
        },
        {
          name: "Combo GoVeggie",
          description:
            "Hambúrguer 100% vegetal, queijo vegano, legumes frescos e molho leve. Acompanha batata rústica e chá gelado.",
          price: 33.9,
          imageUrl: "https://i.ibb.co/HLnCrbfK/Combo-Go-Veggie.png",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão integral",
            "Hambúrguer vegetal (grão de bico, ervilha e soja)",
            "Queijo vegano",
            "Alface",
            "Tomate",
            "Molho de ervas",
            "Batata rústica",
            "Chá gelado 300ml",
          ],
        },
        {
          name: "Combo GoCheese Triplo",
          description:
            "Três hambúrgueres bovinos com camadas generosas de cheddar derretido e molho cremoso de queijo. Acompanha batata frita grande e milkshake.",
          price: 39.9,
          imageUrl: "https://i.ibb.co/jvbf4RPw/Combo-Go-Cheese-Triplo.png",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão com gergelim",
            "3 hambúrgueres bovinos",
            "3 fatias de queijo cheddar",
            "Molho cremoso de queijo",
            "Batata frita grande",
            "Milkshake 400ml",
          ],
        },
      ],
    });

    const hamburguersCategory = await tx.menuCategory.create({
      data: {
        name: "Lanches",
        restaurantId: restaurant.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "GoBurger Clássico",
          description:
            "Hambúrguer bovino suculento com queijo, alface fresca e molho especial. Acompanha batata frita média e refrigerante.",
          price: 29.9,
          imageUrl: "https://i.ibb.co/3mB4hK0D/Combo-Go-Burger-Cl-ssico.png",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão com gergelim",
            "Hambúrguer 100% bovino",
            "Queijo prato",
            "Alface americana",
            "Tomate fatiado",
            "Molho especial GoMenu",
            "Batata frita média",
            "Refrigerante lata",
          ],
        },
        {
          name: "GoCheese Bacon",
          description:
            "Hambúrguer suculento com queijo cheddar, bacon crocante e molho barbecue. Acompanha onion rings e refrigerante.",
          price: 34.9,
          imageUrl: "https://i.ibb.co/QvV8QT0m/Combo-Go-Cheese-Bacon.png",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão brioche",
            "Hambúrguer 100% bovino",
            "Queijo cheddar",
            "Bacon crocante",
            "Molho barbecue",
            "Alface americana",
            "Onion rings",
            "Refrigerante lata",
          ],
        },
        {
          name: "GoVeggie",
          description:
            "Delicioso hambúrguer vegetal com queijo vegano, alface, tomate e molho especial. Acompanha batata doce frita e suco natural.",
          price: 31.5,
          imageUrl: "https://i.ibb.co/8DSsVqzB/Combo-Go-Veggie.png",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão integral",
            "Hambúrguer vegetal",
            "Queijo vegano",
            "Alface americana",
            "Tomate fatiado",
            "Molho especial GoMenu",
            "Batata doce frita",
            "Suco natural",
          ],
        },
        {
          name: "GoChicken Crispy",
          description:
            "Peito de frango empanado e crocante com queijo, alface e maionese temperada. Acompanha batata frita e refrigerante.",
          price: 28.9,
          imageUrl: "https://i.ibb.co/CKQzhKTV/Combo-Go-Chicken-Crispy.png",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão com gergelim",
            "Peito de frango empanado",
            "Queijo prato",
            "Alface americana",
            "Molho maionese temperada",
            "Batata frita média",
            "Refrigerante lata",
          ],
        },
        {
          name: "GoDouble Burger",
          description:
            "Dois hambúrgueres bovinos suculentos com queijo, cebola caramelizada e molho especial. Acompanha batata frita grande e refrigerante.",
          price: 39.9,
          imageUrl: "https://i.ibb.co/bjN1LND4/Combo-Go-Bacon-Duplo.png",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão com gergelim",
            "Dois hambúrgueres 100% bovino",
            "Queijo prato",
            "Cebola caramelizada",
            "Molho especial GoMenu",
            "Alface americana",
            "Batata frita grande",
            "Refrigerante lata",
          ],
        },
      ],
    });

    const frenchFriesCategory = await tx.menuCategory.create({
      data: {
        name: "Fritas",
        restaurantId: restaurant.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Fritas Tradicionais",
          description:
            "Clássicas batatas fritas crocantes, servidas com ketchup.",
          price: 12.9,
          imageUrl: "https://i.ibb.co/LDP2P74z/Fritas-Tradicionais.jpg",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
          ingredients: ["Batata", "Óleo vegetal", "Sal"],
        },
        {
          name: "Fritas Onion Rings",
          description:
            "Anéis de cebola empanados e crocantes, servidos com molho especial.",
          price: 15.5,
          imageUrl: "https://i.ibb.co/DPtCHPyQ/Fritas-Onion-Rings.png",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Cebola",
            "Farinha de trigo",
            "Óleo vegetal",
            "Molho especial GoMenu",
          ],
        },
        {
          name: "Fritas Cheddar Bacon",
          description:
            "Batatas fritas cobertas com queijo cheddar derretido e pedacinhos de bacon crocante.",
          price: 18.9,
          imageUrl: "https://i.ibb.co/hFZknjJZ/Fritas-Cheddar-Bacon.png",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
          ingredients: ["Batata", "Queijo cheddar", "Bacon crocante", "Sal"],
        },
        {
          name: "Fritas Sweet Potato",
          description:
            "Batata doce frita crocante, servida com molho de mel e mostarda.",
          price: 16.5,
          imageUrl: "https://i.ibb.co/j9rn68pB/Fritas-Sweet-Potato.png",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Batata doce",
            "Óleo vegetal",
            "Sal",
            "Molho mel e mostarda",
          ],
        },
        {
          name: "Fritas GoMenu Supreme",
          description:
            "Batatas fritas cobertas com queijo, bacon, cebola caramelizada e molho especial.",
          price: 21.9,
          imageUrl: "https://i.ibb.co/qMWYr9d7/Fritas-Go-Menu-Supreme.jpg",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Batata",
            "Queijo prato",
            "Bacon crocante",
            "Cebola caramelizada",
            "Molho especial GoMenu",
          ],
        },
      ],
    });
    const drinksCategory = await tx.menuCategory.create({
      data: {
        name: "Bebidas",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Coca-cola",
          description: "Coca-cola gelada para acompanhar seu lanche.",
          ingredients: [],
          price: 5.9,
          imageUrl: "https://i.ibb.co/PGx6817K/Coca-cola.png",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Fanta Laranja",
          description: "Fanta Laranja gelada para acompanhar seu lanche.",
          ingredients: [],
          price: 5.9,
          imageUrl: "https://i.ibb.co/4wf6wrVH/fanta.png",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Água Mineral",
          description: "A bebida favorita do Cristiano Ronaldo.",
          ingredients: [],
          price: 2.9,
          imageUrl: "https://i.ibb.co/cSfqnHrC/agua.png",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Suco de Laranja",
          description: "Suco de laranja natural, fresco e geladinho.",
          ingredients: ["Laranja"],
          price: 6.5,
          imageUrl: "https://i.ibb.co/XxYxPGbq/Suco-de-Laranja.png",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Chá Gelado",
          description:
            "Chá gelado sabor limão, refrescante e perfeito para acompanhar seu lanche.",
          ingredients: ["Chá", "Limão", "Açúcar"],
          price: 5.5,
          imageUrl: "https://i.ibb.co/8LwdLVxq/cha.png",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });

    const desertsCategory = await tx.menuCategory.create({
      data: {
        name: "Sobremesas",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Milkshake Chocolate",
          description:
            "Delicioso milkshake cremoso de chocolate, coberto com chantilly e calda de chocolate.",
          price: 14.9,
          imageUrl: "https://i.ibb.co/jkbZJm9S/Milkshake-Chocolate.png",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Leite",
            "Sorvete de chocolate",
            "Chantilly",
            "Calda de chocolate",
            "Chocolate granulado",
          ],
        },
        {
          name: "Brownie com Sorvete",
          description:
            "Brownie quentinho servido com uma bola de sorvete de creme e calda de chocolate.",
          price: 19.5,
          imageUrl: "https://i.ibb.co/WWD5pQsP/Brownie-com-Sorvete.png",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Chocolate meio amargo",
            "Manteiga",
            "Açúcar",
            "Ovos",
            "Farinha de trigo",
            "Sorvete de creme",
            "Calda de chocolate",
          ],
        },
        {
          name: "Petit Gateau",
          description:
            "Bolo de chocolate com recheio cremoso, servido quente com sorvete de creme.",
          price: 21.0,
          imageUrl: "https://i.ibb.co/JWPJqQWN/Petit-Gateau.webp",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Chocolate meio amargo",
            "Manteiga",
            "Ovos",
            "Açúcar",
            "Farinha de trigo",
            "Sorvete de creme",
          ],
        },
        {
          name: "Cheesecake de Morango",
          description:
            "Cheesecake cremoso com base de biscoito, coberto com geleia e morangos frescos.",
          price: 18.5,
          imageUrl: "https://i.ibb.co/CpK8HMRY/Cheesecake-de-Morango.png",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Cream cheese",
            "Biscoito triturado",
            "Manteiga",
            "Açúcar",
            "Geleia de morango",
            "Morangos frescos",
          ],
        },
        {
          name: "Sorvete Casquinha",
          description:
            "Sorvete cremoso servido em casquinha crocante, disponível em diversos sabores.",
          price: 9.9,
          imageUrl: "https://i.ibb.co/8Dq68mSF/Sorvete-Casquinha.png",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Sorvete (baunilha, chocolate ou morango)",
            "Casquinha de wafer",
            "Granulado (opcional)",
          ],
        },
      ],
    });
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
