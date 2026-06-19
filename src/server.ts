import fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";



const server = fastify({ logger: true });
const prisma = new PrismaClient();

server.register(cors, { origin: "*" });



server.get("/teams", async (_, reply) => {
  const teams = await prisma.team.findMany({ include: { drivers: true } });
  return reply.code(200).send({ teams });
});

server.get("/drivers", async (_, reply) => {
  const drivers = await prisma.driver.findMany({ include: { team: true } });
  return reply.code(200).send({ drivers });
});

server.get<{ Params: { id: string } }>("/drivers/:id", async (request, reply) => {
  const id = parseInt(request.params.id);
  const driver = await prisma.driver.findUnique({
    where: { id },
    include: { team: true },
  });

  if (!driver) {
    return reply.code(404).send({ message: "Driver Not Found" });
  }
  return reply.code(200).send({ driver });
});

server.get<{ Params: { name: string } }>("/championships/driver/:name", async (request, reply) => {
  const { name } = request.params;

  const driver = await prisma.driver.findFirst({
    where: { name: { contains: name } }, // SQLite não suporta mode: "insensitive"
    include: {
      championships: {
        include: { team: true },
        orderBy: { year: "asc" },
      },
    },
  });

  if (!driver) {
    return reply.code(404).send({ message: "Driver not found" });
  }

  return reply.code(200).send({
    driver: driver.name,
    totalTitles: driver.championships.length,
    championships: driver.championships.map((c) => ({
      year: c.year,
      team: c.team.name,
    })),
  });
});

server.listen({ port: 3333 }, () => {
  console.log("Server init");
});