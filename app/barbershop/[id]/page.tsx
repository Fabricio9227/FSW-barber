import PhoneItem from "@/app/_components/phone-item"
import ServiceItem from "@/app/_components/service-item"
import SidebarSheet from "@/app/_components/sidebar-sheet"
import { Button } from "@/app/_components/ui/button"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  // Chamando o banco de dados para buscar a barbearia pelo ID
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  // Se a barbearia não for encontrada, retorna uma página 404
  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      {/* Imagem da barbearia */}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop?.name || "Barbearia"}
          src={barbershop?.imageUrl || "/default-barbershop.jpg"}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </div>

      {/* Titulo */}
      <div className="space-y-3 border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="items center flex gap-1">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5,0 (499 avaliações)</p>
        </div>
      </div>

      {/* Descrição */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-[#838896]">
          Sobre nós
        </h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      {/* Serviços */}
      <div className="solid space-y-3 border border-b p-5">
        <h2 className="mb-3 text-xs font-bold uppercase text-[#838896]">
          Serviços
        </h2>
        <div className="space-y-4">
          {barbershop.services.map((service) => (
            <ServiceItem
              key={service.id}
              barbershop={barbershop}
              service={service}
            />
          ))}
        </div>
      </div>

      {/* Contato */}
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
