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
          imageUrl: "https://i.ibb.co/qMRSMsSg/habugue.png",
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
          name: "Combo GoCheese Triplo",
          description:
            "Três hambúrgueres bovinos com camadas generosas de cheddar derretido e molho cremoso de queijo. Acompanha batata frita grande e milkshake.",
          price: 39.9,
          imageUrl: "https://i.ibb.co/mCBw0v8V/3hanbugers.png",
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
        {
          name: "Combo GoFish",
          description:
            "Sanduíche de peixe empanado com alface, queijo e molho tártaro. Acompanha batata frita e refrigerante.",
          price: 32.9,
          imageUrl: "https://i.ibb.co/DD9gcbj4/Combo-Go-Fish.png",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão brioche",
            "Peixe empanado",
            "Queijo prato",
            "Alface",
            "Molho tártaro",
            "Batata frita",
            "Refrigerante lata",
          ],
        },
        {
          name: "Combo GoChili Burger",
          description:
            "Hambúrguer apimentado com cheddar, jalapeños e molho picante. Acompanha fritas e refrigerante.",
          price: 35.9,
          imageUrl: "https://i.ibb.co/xqfYRjJ7/buger-apimentado.png",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão com gergelim",
            "Hambúrguer bovino",
            "Queijo cheddar",
            "Jalapeños",
            "Molho picante",
            "Batata frita média",
            "Refrigerante lata",
          ],
        },
        {
          name: "Combo GoHot Dog Supreme",
          description:
            "Cachorro-quente duplo com cheddar, bacon e batata palha. Acompanha fritas e coca-cola.",
          price: 29.9,
          imageUrl: "https://i.ibb.co/xwp5SCn/combo-btr.png",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão de hot dog",
            "2 Salsichas",
            "Queijo cheddar",
            "Bacon crocante",
            "Batata palha",
            "Batata frita pequena",
            "Suco natural",
          ],
        },
        {
          name: "Combo GoVeggie Premium",
          description:
            "Hambúrguer vegetariano artesanal, batata doce frita e chá gelado.",
          price: 33.9,
          imageUrl: "https://i.ibb.co/0VWqTJLs/burger-begano-cha-batata.png",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão integral",
            "Hambúrguer de grão-de-bico",
            "Queijo vegano",
            "Alface",
            "Tomate",
            "Batata doce frita",
            "Chá gelado",
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
        {
          name: "GoWrap Frango",
          description:
            "Wrap de frango grelhado com alface, tomate e molho Caesar.",
          price: 24.9,
          imageUrl:
            "https://i.ibb.co/5WLBfM59/pngtree-tasty-chicken-wrap-png-image-13422953.png",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Tortilla de trigo",
            "Frango grelhado",
            "Alface",
            "Tomate",
            "Molho Caesar",
          ],
        },
        {
          name: "GoPicanha Burger",
          description:
            "Hambúrguer de picanha com queijo prato, cebola caramelizada e molho da casa.",
          price: 36.9,
          imageUrl: "https://i.ibb.co/sv0Hggpq/Hamb-rguer-de-picanha.png",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão brioche",
            "Hambúrguer de picanha",
            "Queijo prato",
            "Cebola caramelizada",
            "Molho da casa",
          ],
        },
        {
          name: "GoFrango Light",
          description:
            "Sanduíche leve de frango grelhado com pão integral, alface e maionese light.",
          price: 22.9,
          imageUrl: "https://i.ibb.co/psL0Lsr/Sandu-che-leve-de-frango.png",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão integral",
            "Peito de frango grelhado",
            "Alface",
            "Molho maionese light",
          ],
        },
        {
          name: "GoDog Tradicional",
          description:
            "Hot dog clássico com salsicha, ketchup, mostarda e batata palha.",
          price: 17.9,
          imageUrl: "https://i.ibb.co/84rgNYMr/hot-dog-cl.png",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão de hot dog",
            "Salsicha",
            "Ketchup",
            "Mostarda",
            "Batata palha",
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
          imageUrl: "https://i.ibb.co/j9yHhqBD/batata-trad.png",
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
          name: "Fritas Trufadas",
          description:
            "Batatas fritas crocantes com azeite trufado e parmesão ralado.",
          price: 19.9,
          imageUrl: "https://i.ibb.co/VWwdnmZ3/Batatas-fritas.png",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Batata",
            "Óleo vegetal",
            "Azeite trufado",
            "Parmesão ralado",
          ],
        },
        {
          name: "Fritas Tex-Mex",
          description: "Batatas fritas com cheddar, jalapeños e chili.",
          price: 22.5,
          imageUrl: "https://i.ibb.co/QFz0PF0k/Batatas-fritas-com-cheddar.webp",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
          ingredients: ["Batata", "Queijo cheddar", "Jalapeños", "Chili"],
        },
        {
          name: "Fritas GoMenu Kids",
          description: "Porção pequena de batatas fritas, ideal para crianças.",
          price: 9.9,
          imageUrl: "https://i.ibb.co/nqwdCqn6/batatas-crian-as.png",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
          ingredients: ["Batata", "Óleo vegetal", "Sal"],
        },
        {
          name: "Fritas Carbonara",
          description:
            "Batatas fritas cobertas com molho carbonara, bacon e parmesão.",
          price: 23.9,
          imageUrl: "https://i.ibb.co/HpYNR82x/Batatas-carbonara.png",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
          ingredients: ["Batata", "Molho carbonara", "Bacon", "Parmesão"],
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
          imageUrl: "https://i.ibb.co/HpYbFXyF/cha.png",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Guaraná Antarctica",
          description: "Refrigerante guaraná gelado.",
          ingredients: [],
          price: 5.9,
          imageUrl: "https://i.ibb.co/hRPP9kYX/Guaran-Antarctica.png",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Suco de Uva",
          description: "Suco de uva natural, refrescante.",
          ingredients: ["Uva"],
          price: 6.9,
          imageUrl: "https://i.ibb.co/Kpnv0T5P/Suco-de-Uva.png",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Água com Gás",
          description: "Água mineral com gás, gelada.",
          ingredients: [],
          price: 3.5,
          imageUrl: "https://i.ibb.co/Jw07xsCr/gua-com-G-s.webp",
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
          imageUrl: "https://i.ibb.co/3YvnxBmq/Petit-Gateau.webp",
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
        {
          name: "Torta de Limão",
          description: "Torta gelada com creme de limão e base crocante.",
          price: 17.5,
          imageUrl: "https://i.ibb.co/dJ3DNkgj/Torta-de-Lim-o.png",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
          ingredients: ["Biscoito", "Manteiga", "Creme de limão", "Chantilly"],
        },

        {
          name: "Banana Split",
          description: "Banana com bolas de sorvete, chantilly e cobertura.",
          price: 19.9,
          imageUrl: "https://i.ibb.co/mVXSqT08/Banana-Split.png",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Banana",
            "Sorvete",
            "Chantilly",
            "Cobertura de chocolate",
          ],
        },
        {
          name: "Churros Recheados",
          description:
            "Porção de churros com recheio de doce de leite e açúcar com canela.",
          price: 16.9,
          imageUrl: "https://i.ibb.co/TBs3NCsW/Churros-Recheados.png",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Massa de churros",
            "Açúcar",
            "Canela",
            "Doce de leite",
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
