import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Sun, Building, MapPin, } from 'lucide-react'
import Image from 'next/image'

type CardCityWeatherProps = {
    name: string
    icon: string
    temp: number
    description: string
    feels_like: number
    humidity: number
    pressure: number
}

export default function CardCityWeather({ name, icon, temp, description, feels_like, humidity, pressure }: CardCityWeatherProps) {
    return (
        <Card
            className="
            col-span-2
            h-[350px]
            md:h-[600px]
            grid grid-rows-[min-content,1fr,min-content]
            bg-transparent
            rounded-none
            border-none
            "
        >

            <CardHeader>
                <CardTitle>
                    <div className='flex items-center gap-2'>
                        <p className='text-2xl font-bold'>{name}</p>

                        <MapPin className="ml-2 h-6 w-6" />
                    </div>
                </CardTitle>

                <CardDescription>
                    <p className='text-1xl text-zinc-100 font-semibold'>
                        {description}
                    </p>
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
            </CardContent>

            <CardFooter className='flex flex-col md:flex-row first:items-start justify-between'>
                <div className='flex items-center gap-2'>
                    <p className='text-5xl font-semi-bold'>{Math.round(temp ?? 0)}°C</p>

                    <Image src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Logo" width={70} height={70} />
                </div>

                <div className='flex flex-col gap-2 text-sm'>
                    <p className='font-semi-bold flex items-center gap-1'>
                        {name}

                        <Building className="ml-2 h-4 w-4" />
                    </p>

                    <div className='flex items-start md:items-center gap-4'>
                        <span>Sensação térmica: {Math.round(feels_like ?? 0)}</span>

                        <span>Umidade: {humidity ?? 0}%</span>

                        <span>Pressão: {pressure ?? 0}</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}