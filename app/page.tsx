import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text xl font-bold">Olá, Marcos!</h2>
        <p>Terça-feira, 06 de Agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Digite sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="h-[150px] relative mt-6 w-full">
          <Image
            src="/banner-01.png"
            alt="Agende nas melhores barbearias"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}
