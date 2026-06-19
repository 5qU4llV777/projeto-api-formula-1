import "dotenv/config";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.team.create({
    data: {
      name: "Red Bull Racing",
      base: "Milton Keynes, United Kingdom",
      drivers: {
        create: [
          { name: "Max Verstappen" },
          { name: "Sergio Pérez" }
        ],
      },
    },
  });

  await prisma.team.create({
    data: {
      name: "Mercedes",
      base: "Brackley, United Kingdom",
      drivers: {
        create: [
          { name: "Lewis Hamilton" },
          { name: "George Russell" }
        ],
      },
    },
  });

  await prisma.team.create({
    data: {
      name: "Ferrari",
      base: "Maranello, Italy",
      drivers: {
        create: [
          { name: "Charles Leclerc" },
          { name: "Carlos Sainz" }
        ],
      },
    },
  });

  await prisma.team.create({
    data: {
      name: "McLaren",
      base: "Woking, United Kingdom",
      drivers: {
        create: [
          { name: "Lando Norris" },
          { name: "Oscar Piastri" }
        ],
      },
    },
  });

  await prisma.team.create({
    data: {
      name: "Aston Martin",
      base: "Silverstone, United Kingdom",
      drivers: {
        create: [
          { name: "Fernando Alonso" },
          { name: "Lance Stroll" }
        ],
      },
    },
  });

  await prisma.team.create({
    data: {
      name: "Alpine",
      base: "Enstone, United Kingdom",
      drivers: {
        create: [
          { name: "Esteban Ocon" },
          { name: "Pierre Gasly" }
        ],
      },
    },
  });

  await prisma.team.create({
    data: {
      name: "Williams",
      base: "Grove, United Kingdom",
      drivers: {
        create: [
          { name: "Alexander Albon" },
          { name: "Logan Sargeant" }
        ],
      },
    },
  });

  await prisma.team.create({
    data: {
      name: "Haas",
      base: "Kannapolis, United States",
      drivers: {
        create: [
          { name: "Kevin Magnussen" },
          { name: "Nico Hülkenberg" }
        ],
      },
    },
  });

  await prisma.team.create({
    data: {
      name: "Sauber (Kick)",
      base: "Hinwil, Switzerland",
      drivers: {
        create: [
          { name: "Valtteri Bottas" },
          { name: "Guanyu Zhou" }
        ],
      },
    },
  });

  await prisma.team.create({
    data: {
      name: "RB (ex-AlphaTauri)",
      base: "Faenza, Italy",
      drivers: {
        create: [
          { name: "Yuki Tsunoda" },
          { name: "Daniel Ricciardo" }
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });