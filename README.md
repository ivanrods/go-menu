# GoMenu – Restaurante Virtual Fullstack

Aplicação **fullstack moderna** que simula um restaurante virtual, permitindo que usuários naveguem pelo cardápio, adicionem produtos à sacola e visualizem o resumo da compra em tempo real.

O projeto foi desenvolvido com foco em **arquitetura organizada, tipagem forte e experiência do usuário**, simulando um sistema real de pedidos online.

---

## Demonstração

![go-menu](https://github.com/user-attachments/assets/cec154ee-c4fd-4479-850c-34b60d3fcd0c)

🔗 **Deploy:**  
https://go-menu-web.vercel.app

---

## Funcionalidades

- Listagem dinâmica de produtos
- Adição e remoção de itens da sacola
- Atualização automática do valor total
- Persistência de estado
- Interface moderna e responsiva
- Componentização reutilizável
- Tipagem forte com TypeScript

---

## Conceitos Aplicados

- Arquitetura fullstack com Next.js
- Separação de responsabilidades
- Componentização escalável
- Gerenciamento de estado
- Integração com banco de dados via ORM
- Boas práticas com TypeScript

---

## Tecnologias Utilizadas

- **Next.js** – Framework fullstack React
- **TypeScript** – Tipagem estática
- **React** – Biblioteca para construção da interface
- **TailwindCSS** – Estilização utilitária
- **shadcn/ui** – Componentes reutilizáveis
- **Prisma** – ORM para banco de dados
- **Node.js** – Ambiente backend

---

## Estrutura do Projeto

```bash
📦 go-menu
 ┣ 📂 prisma
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┣ 📂 components
 ┃ ┣ 📂 services
 ┃ ┗ 📂 lib
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┗ 📜 README.md
```

---

## Como Rodar o Projeto

### 1️Clone o repositório

```bash
git clone https://github.com/ivanrods/go-menu.git
cd go-menu
```

### Instale as dependências

```bash
npm install
```

### Configure o banco de dados

Crie um arquivo `.env` na raiz do projeto com:

```env
DATABASE_URL="sua_string_de_conexao"
```

Depois execute:

```bash
npx prisma migrate dev
```

### Execute o projeto

```bash
npm run dev
```

Acesse no navegador:

```
http://localhost:3000
```

---

## Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

- Simular um sistema real de pedidos online
- Praticar desenvolvimento fullstack com Next.js
- Aplicar boas práticas de organização e arquitetura
- Criar um projeto robusto para portfólio

---

## Melhorias Futuras

- Autenticação de usuários
- Persistência da sacola no banco
- Integração com gateway de pagamento
- Histórico de pedidos
- Painel administrativo

---

## Autor

**Ivan Rodrigues**  
Full Stack Developer | React | Next.js | TypeScript | Node.js
