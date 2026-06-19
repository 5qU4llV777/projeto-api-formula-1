import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Limpa o banco antes de seedar
  await prisma.championship.deleteMany();
  await prisma.driver.deleteMany();
  await prisma.team.deleteMany();

  // Cria times e pilotos
  const redBull = await prisma.team.create({
    data: { name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  });
  const mercedes = await prisma.team.create({
    data: { name: "Mercedes", base: "Brackley, United Kingdom" },
  });
  const ferrari = await prisma.team.create({
    data: { name: "Ferrari", base: "Maranello, Italy" },
  });
  const mclaren = await prisma.team.create({
    data: { name: "McLaren", base: "Woking, United Kingdom" },
  });
  const renault = await prisma.team.create({
    data: { name: "Renault", base: "Enstone, United Kingdom" },
  });
  const williams = await prisma.team.create({
    data: { name: "Williams", base: "Grove, United Kingdom" },
  });
  const brawn = await prisma.team.create({
    data: { name: "Brawn GP", base: "Brackley, United Kingdom" },
  });
  const benetton = await prisma.team.create({
    data: { name: "Benetton", base: "Enstone, United Kingdom" },
  });
  const tyrrell = await prisma.team.create({
    data: { name: "Tyrrell", base: "Ockham, United Kingdom" },
  });
  const lotus = await prisma.team.create({
    data: { name: "Lotus", base: "Hethel, United Kingdom" },
  });
  const brabham = await prisma.team.create({
    data: { name: "Brabham", base: "Chessington, United Kingdom" },
  });
  const matra = await prisma.team.create({
    data: { name: "Matra", base: "Vélizy-Villacoublay, France" },
  });
  const cooper = await prisma.team.create({
    data: { name: "Cooper", base: "Surbiton, United Kingdom" },
  });
  const vanwall = await prisma.team.create({
    data: { name: "Vanwall", base: "Acton, United Kingdom" },
  });
  const alfa = await prisma.team.create({
    data: { name: "Alfa Romeo", base: "Milan, Italy" },
  });

  // Pilotos
  const verstappen = await prisma.driver.create({ data: { name: "Max Verstappen", teamId: redBull.id } });
  const hamilton = await prisma.driver.create({ data: { name: "Lewis Hamilton", teamId: mercedes.id } });
  const vettel = await prisma.driver.create({ data: { name: "Sebastian Vettel", teamId: redBull.id } });
  const schumacher = await prisma.driver.create({ data: { name: "Michael Schumacher", teamId: ferrari.id } });
  const alonso = await prisma.driver.create({ data: { name: "Fernando Alonso", teamId: renault.id } });
  const raikkonen = await prisma.driver.create({ data: { name: "Kimi Räikkönen", teamId: ferrari.id } });
  const button = await prisma.driver.create({ data: { name: "Jenson Button", teamId: brawn.id } });
  const rosberg = await prisma.driver.create({ data: { name: "Nico Rosberg", teamId: mercedes.id } });
  const hill = await prisma.driver.create({ data: { name: "Damon Hill", teamId: williams.id } });
  const villeneuve = await prisma.driver.create({ data: { name: "Jacques Villeneuve", teamId: williams.id } });
  const hakkinenP = await prisma.driver.create({ data: { name: "Mika Häkkinen", teamId: mclaren.id } });
  const prost = await prisma.driver.create({ data: { name: "Alain Prost", teamId: mclaren.id } });
  const senna = await prisma.driver.create({ data: { name: "Ayrton Senna", teamId: mclaren.id } });
  const piquet = await prisma.driver.create({ data: { name: "Nelson Piquet", teamId: brabham.id } });
  const lauda = await prisma.driver.create({ data: { name: "Niki Lauda", teamId: ferrari.id } });
  const stewartP = await prisma.driver.create({ data: { name: "Jackie Stewart", teamId: tyrrell.id } });
  const rindt = await prisma.driver.create({ data: { name: "Jochen Rindt", teamId: lotus.id } });
  const hulme = await prisma.driver.create({ data: { name: "Denny Hulme", teamId: brabham.id } });
  const brabhamJ = await prisma.driver.create({ data: { name: "Jack Brabham", teamId: brabham.id } });
  const surtees = await prisma.driver.create({ data: { name: "John Surtees", teamId: ferrari.id } });
  const clarkJ = await prisma.driver.create({ data: { name: "Jim Clark", teamId: lotus.id } });
  const hillG = await prisma.driver.create({ data: { name: "Graham Hill", teamId: lotus.id } });
  const hauwthorn = await prisma.driver.create({ data: { name: "Mike Hawthorn", teamId: ferrari.id } });
  const fangio = await prisma.driver.create({ data: { name: "Juan Manuel Fangio", teamId: alfa.id } });
  const farina = await prisma.driver.create({ data: { name: "Giuseppe Farina", teamId: alfa.id } });
  const ascari = await prisma.driver.create({ data: { name: "Alberto Ascari", teamId: ferrari.id } });
  const mossp = await prisma.driver.create({ data: { name: "Stirling Moss", teamId: vanwall.id } });
  const matsP = await prisma.driver.create({ data: { name: "Jackie Ickx", teamId: ferrari.id } });
  const andretti = await prisma.driver.create({ data: { name: "Mario Andretti", teamId: lotus.id } });
  const scheckter = await prisma.driver.create({ data: { name: "Jody Scheckter", teamId: ferrari.id } });
  const jonesA = await prisma.driver.create({ data: { name: "Alan Jones", teamId: williams.id } });
  const keke = await prisma.driver.create({ data: { name: "Keke Rosberg", teamId: williams.id } });

  // Todos os campeonatos F1 (1950–2024)
  const championships = [
    { year: 1950, driverId: farina.id, teamId: alfa.id },
    { year: 1951, driverId: fangio.id, teamId: alfa.id },
    { year: 1952, driverId: ascari.id, teamId: ferrari.id },
    { year: 1953, driverId: ascari.id, teamId: ferrari.id },
    { year: 1954, driverId: fangio.id, teamId: mercedes.id },
    { year: 1955, driverId: fangio.id, teamId: mercedes.id },
    { year: 1956, driverId: fangio.id, teamId: ferrari.id },
    { year: 1957, driverId: fangio.id, teamId: brabham.id },
    { year: 1958, driverId: hauwthorn.id, teamId: ferrari.id },
    { year: 1959, driverId: brabhamJ.id, teamId: cooper.id },
    { year: 1960, driverId: brabhamJ.id, teamId: cooper.id },
    { year: 1961, driverId: hillG.id, teamId: ferrari.id },
    { year: 1962, driverId: hillG.id, teamId: lotus.id },
    { year: 1963, driverId: clarkJ.id, teamId: lotus.id },
    { year: 1964, driverId: surtees.id, teamId: ferrari.id },
    { year: 1965, driverId: clarkJ.id, teamId: lotus.id },
    { year: 1966, driverId: brabhamJ.id, teamId: brabham.id },
    { year: 1967, driverId: hulme.id, teamId: brabham.id },
    { year: 1968, driverId: hillG.id, teamId: lotus.id },
    { year: 1969, driverId: stewartP.id, teamId: matra.id },
    { year: 1970, driverId: rindt.id, teamId: lotus.id },
    { year: 1971, driverId: stewartP.id, teamId: tyrrell.id },
    { year: 1972, driverId: stewartP.id, teamId: tyrrell.id },
    { year: 1973, driverId: stewartP.id, teamId: tyrrell.id },
    { year: 1974, driverId: lauda.id, teamId: ferrari.id },
    { year: 1975, driverId: lauda.id, teamId: ferrari.id },
    { year: 1976, driverId: lauda.id, teamId: ferrari.id },
    { year: 1977, driverId: lauda.id, teamId: ferrari.id },
    { year: 1978, driverId: andretti.id, teamId: lotus.id },
    { year: 1979, driverId: scheckter.id, teamId: ferrari.id },
    { year: 1980, driverId: jonesA.id, teamId: williams.id },
    { year: 1981, driverId: piquet.id, teamId: brabham.id },
    { year: 1982, driverId: keke.id, teamId: williams.id },
    { year: 1983, driverId: piquet.id, teamId: brabham.id },
    { year: 1984, driverId: lauda.id, teamId: mclaren.id },
    { year: 1985, driverId: prost.id, teamId: mclaren.id },
    { year: 1986, driverId: prost.id, teamId: mclaren.id },
    { year: 1987, driverId: piquet.id, teamId: williams.id },
    { year: 1988, driverId: senna.id, teamId: mclaren.id },
    { year: 1989, driverId: prost.id, teamId: mclaren.id },
    { year: 1990, driverId: senna.id, teamId: mclaren.id },
    { year: 1991, driverId: senna.id, teamId: mclaren.id },
    { year: 1992, driverId: hill.id, teamId: williams.id },
    { year: 1993, driverId: prost.id, teamId: williams.id },
    { year: 1994, driverId: hill.id, teamId: williams.id },
    { year: 1995, driverId: schumacher.id, teamId: benetton.id },
    { year: 1996, driverId: hill.id, teamId: williams.id },
    { year: 1997, driverId: villeneuve.id, teamId: williams.id },
    { year: 1998, driverId: hakkinenP.id, teamId: mclaren.id },
    { year: 1999, driverId: hakkinenP.id, teamId: mclaren.id },
    { year: 2000, driverId: schumacher.id, teamId: ferrari.id },
    { year: 2001, driverId: schumacher.id, teamId: ferrari.id },
    { year: 2002, driverId: schumacher.id, teamId: ferrari.id },
    { year: 2003, driverId: schumacher.id, teamId: ferrari.id },
    { year: 2004, driverId: schumacher.id, teamId: ferrari.id },
    { year: 2005, driverId: alonso.id, teamId: renault.id },
    { year: 2006, driverId: alonso.id, teamId: renault.id },
    { year: 2007, driverId: raikkonen.id, teamId: ferrari.id },
    { year: 2008, driverId: hamilton.id, teamId: mclaren.id },
    { year: 2009, driverId: button.id, teamId: brawn.id },
    { year: 2010, driverId: vettel.id, teamId: redBull.id },
    { year: 2011, driverId: vettel.id, teamId: redBull.id },
    { year: 2012, driverId: vettel.id, teamId: redBull.id },
    { year: 2013, driverId: vettel.id, teamId: redBull.id },
    { year: 2014, driverId: hamilton.id, teamId: mercedes.id },
    { year: 2015, driverId: hamilton.id, teamId: mercedes.id },
    { year: 2016, driverId: rosberg.id, teamId: mercedes.id },
    { year: 2017, driverId: hamilton.id, teamId: mercedes.id },
    { year: 2018, driverId: hamilton.id, teamId: mercedes.id },
    { year: 2019, driverId: hamilton.id, teamId: mercedes.id },
    { year: 2020, driverId: hamilton.id, teamId: mercedes.id },
    { year: 2021, driverId: verstappen.id, teamId: redBull.id },
    { year: 2022, driverId: verstappen.id, teamId: redBull.id },
    { year: 2023, driverId: verstappen.id, teamId: redBull.id },
    { year: 2024, driverId: verstappen.id, teamId: redBull.id },
  ];

  await prisma.championship.createMany({ data: championships });

  console.log("✅ Seed concluído!");
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });