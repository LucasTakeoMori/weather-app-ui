import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Sun, Building, } from 'lucide-react'
import Image from 'next/image'

type CardCityWeatherProps = {
    name: string
    icon: string
}

export default function CardCityWeather({name, icon}: CardCityWeatherProps) {
    return (
        <Card className='w-[600px]'>
            <CardHeader>
                <div className='flex items-center gap-1 p-2'>
                    <p className='text-2  xl font-bold'>{name}</p>

                    <Image src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Logo" width={40} height={40} />
                </div>
            </CardHeader>
            <CardContent className='flex flex-col gap-1 items-center'>
                <p className='flex items-center gap-2'>
                    <Sun className="ml-2 h-6 w-6 text-amber-500" />
                    26°C
                </p>

                <span className='text-sm text-muted-foreground'>
                    Aberto
                </span>
            </CardContent>

            <CardFooter className='flex items-center justify-between'>
                <p>Sensação térmica: 26°C</p>

                <p>Umidade: 50%</p>

                <p>Pressão 1007 hPa</p>
            </CardFooter>
        </Card>
    )
}