import Image from "next/image"
import Link from "next/link"
import BarbershopItem from "./_components/barbershop-item"
import BookingItem from "./_components/booking-item"
import Header from "./_components/header"
import Search from "./_components/search"
import { Button } from "./_components/ui/button"
import { quickSearchOptions } from "./_constants/search"
import { db } from "./_lib/prisma"

export default async function Home() {
  const barbershop = await db.barberShop.findMany()
  const popularBarbershop = await db.barberShop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      <Header />

      {/* TEXTO*/}
      <div className="p-5">
        <h2 className="text xl font-bold">Olá, Marcos!</h2>
        <p>Quarta-feira, 07 de Agosto</p>

        {/* BUSCA*/}
        <div className="mt-6 flex items-center gap-2">
          <Search />
        </div>

        {/* BUSCA RÁPIDA */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        {/* BANNER*/}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende nas melhores barbearias"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTO*/}
        <BookingItem />
      </div>
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Recomendados
      </h2>
      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {barbershop.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>

      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Populares
      </h2>
      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {popularBarbershop.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  )
}
