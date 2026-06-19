# 🏎️ API Fórmula 1

API REST com todos os campeões da Fórmula 1 desde 1950, construída com **Fastify**, **Prisma** e **TypeScript**.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/5qU4llV777/projeto-api-formula-1.git
cd projeto-api-formula-1

# Instale as dependências
npm install
```

---

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="file:./dev.db"
PORT=3333
```

Execute as migrations e popule o banco:

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

---

## ▶️ Rodando o projeto

```bash
# Desenvolvimento
npm run start:dev

# Desenvolvimento com hot reload
npm run start:watch

# Build de produção
npm run dist
npm run start:dist
```

O servidor estará disponível em `http://localhost:3333`.

---

## 🗄️ Banco de dados

Para visualizar os dados no navegador:

```bash
npx prisma studio
```

---

## 📡 Endpoints

### Times

#### `GET /teams`
Retorna todos os times com seus pilotos.

**Resposta:**
```json
{
  "teams": [
    {
      "id": 1,
      "name": "Red Bull Racing",
      "base": "Milton Keynes, United Kingdom",
      "drivers": [
        { "id": 1, "name": "Max Verstappen", "teamId": 1 }
      ]
    }
  ]
}
```

---

### Pilotos

#### `GET /drivers`
Retorna todos os pilotos com seus times.

**Resposta:**
```json
{
  "drivers": [
    {
      "id": 1,
      "name": "Max Verstappen",
      "teamId": 1,
      "team": {
        "id": 1,
        "name": "Red Bull Racing",
        "base": "Milton Keynes, United Kingdom"
      }
    }
  ]
}
```

---

#### `GET /drivers/:id`
Retorna um piloto pelo ID.

**Parâmetros:**
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `number` | ID do piloto |

**Resposta:**
```json
{
  "driver": {
    "id": 1,
    "name": "Max Verstappen",
    "teamId": 1,
    "team": {
      "id": 1,
      "name": "Red Bull Racing",
      "base": "Milton Keynes, United Kingdom"
    }
  }
}
```

**Erro (404):**
```json
{ "message": "Driver Not Found" }
```

---

### Campeonatos

#### `GET /championships/driver/:name`
Retorna todos os títulos de um piloto pelo nome.

**Parâmetros:**
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `name` | `string` | Nome ou parte do nome do piloto |

**Exemplos:**
```
GET /championships/driver/Hamilton
GET /championships/driver/Verstappen
GET /championships/driver/Schumacher
GET /championships/driver/Senna
```

**Resposta:**
```json
{
  "driver": "Lewis Hamilton",
  "totalTitles": 7,
  "championships": [
    { "year": 2008, "team": "McLaren" },
    { "year": 2014, "team": "Mercedes" },
    { "year": 2015, "team": "Mercedes" },
    { "year": 2017, "team": "Mercedes" },
    { "year": 2018, "team": "Mercedes" },
    { "year": 2019, "team": "Mercedes" },
    { "year": 2020, "team": "Mercedes" }
  ]
}
```

**Erro (404):**
```json
{ "message": "Driver not found" }
```

---

## 🏆 Dados

O seed cobre todos os campeões da Fórmula 1 de **1950 a 2024**, incluindo:

| Piloto | Títulos |
|--------|---------|
| Michael Schumacher | 7 (1994–2004) |
| Lewis Hamilton | 7 (2008–2020) |
| Juan Manuel Fangio | 5 (1951–1957) |
| Sebastian Vettel | 4 (2010–2013) |
| Max Verstappen | 4 (2021–2024) |
| Alain Prost | 4 (1985–1993) |
| Ayrton Senna | 3 (1988–1991) |

---

## 📁 Estrutura do projeto

```
projeto-api-formula-1/
├── prisma/
│   ├── schema.prisma     # Modelos do banco de dados
│   └── seed.ts           # Dados iniciais (todos os campeões)
├── src/
│   ├── public/           # Arquivos estáticos
│   └── server.ts         # Servidor Fastify e rotas
├── prisma.config.ts      # Configuração do Prisma
├── tsconfig.json
└── package.json
```

---

## 📝 Licença

MIT
