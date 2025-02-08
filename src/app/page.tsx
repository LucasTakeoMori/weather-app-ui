"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Sun, Search, Building, Cloudy, Sparkles, MapPin, CalendarDays, Cloud, CloudRain } from 'lucide-react'

import { format } from 'date-fns'

import axios from 'axios'
import Image from 'next/image'
import CardCityWeather from '@/components/card-city-weather'

interface FiveDaysWeatherData {
  list: {
    dt_txt: string,
    main: {
      feels_like: number,
      temp_max: number,
      temp_min: number
    },
    weather: {
      main: string,
      description: string,
      icon: string
    }[]
  }[]
}

interface WeatherData {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
    pressure: number;
  }
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
}

export default function Home() {
  const [weather, setWeather] = useState<WeatherData>()
  const [fiveDays, setFiveDays] = useState<FiveDaysWeatherData>()

  async function handleSearchCity(e: any) {
    e.preventDefault()

    const city = e.target[0].value
    const key = "ef9485eefb5b933020ef37e8b8fbbf97"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const response = await axios.get(url)
    const responseFiveDays = await axios.get(url5days)

    setWeather(response.data)
    setFiveDays(responseFiveDays.data)
  }

  function formatData(data: string) {
    return format(new Date(data), 'dd/MM')
  }

  return (
    <>
      <main className='flex flex-col min-h-screen items-center mt-32'>
        <div className='flex gap-2'>
          <p className='text-2xl font-bold'>Weather App</p>
          <Sparkles className="ml-2 h-6 w-6 text-amber-500" />
        </div>

        <form action="" className='flex items-center gap-2 mt-8 w-full md:w-[400px]' onSubmit={(e) => handleSearchCity(e)}>
          <Input placeholder="Digite o nome da cidade" type="text" className='w-full rounded-xl hover:shadow-amber-500 transition-shadow' />

          <Button type="submit" className='rounded-xl w-14'>
            <Search />
          </Button>
        </form>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 w-full md:w-[1200px] bg-violet-50 rounded-xl bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1501987808855-ac803c7bb45e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
          <CardCityWeather
            name={weather?.name || ''}
            icon={weather?.weather[0].icon || ''}
            temp={weather?.main.temp || 0}
            description={weather?.weather[0].description || ''}
            feels_like={weather?.main.feels_like || 0}
            humidity={weather?.main.humidity || 0}
            pressure={weather?.main.pressure || 0}
          />

          <Card className='h-[600px] backdrop-blur-md col-span-1 bg-transparent rounded-none border-none p-4'>
            <CardHeader className='mt-[-10px]'>
              <CardTitle>
                <div className='flex items-center gap-2'>
                  <p className='text-1xl font-bold'>Previsão dos proximos <span className='ml-1 mr-1'>5</span> dias</p>

                  <CalendarDays className="ml-2 h-6 w-6" />
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className='flex flex-col gap-2'>
              {fiveDays?.list.filter((item, index) => index % 8 === 0).map((item, index) => (
                <div className='flex flex-col gap-2 border border-zinc-500 rounded-xl p-2 backdrop-blur-none' key={index}>
                  <div className='flex items-center justify-between'>
                    <p className='text-1xl font-bold ml-2'>{formatData(item.dt_txt ?? '')}</p>

                    <Image src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Logo" width={30} height={30} />
                  </div>

                  <div className='flex justify-between items-start gap-2 mt-4 ml-2 text-sm'>
                    <span>{Math.round(item.main.temp_min ?? 0)}°C / {Math.round(item.main.temp_max ?? 0)}°C</span>
                    <span>{item.weather[0].description}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}