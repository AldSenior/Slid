"use client"
import { useState } from 'react'
import { RiReactjsLine } from "react-icons/ri"
import 'swiper/css'
import 'swiper/css/pagination'
import { Mousewheel, Pagination } from 'swiper/modules'
import type { SwiperClass } from 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "./globals.css"
import gradients from "./gradients.json"
export default function Home() {
  const [lastSlideIndex, setLastSlideIndex] = useState(0)
  const handleSlideChange = (swiper: SwiperClass): void => {
    const currentIndex = swiper.realIndex
    const slides: HTMLElement[] = swiper.slides

    const isForward = currentIndex > lastSlideIndex


    slides.forEach(slide => {
      slide.querySelectorAll('.poloska').forEach(el => {
        el.classList.remove('animate-animation_up', 'animate-animation_down', "animate-animation_down_next", "animate-animation_up_next")
      })
    })
    const currentSlidePoloskasTop = slides[currentIndex].querySelectorAll('._top')
    const currentSlidePoloskasDown = slides[currentIndex].querySelectorAll('._down')

    const prevSlideAnimationTop = slides[currentIndex + 1]?.querySelector("._top")
    const prevSlideAnimationDown = slides[currentIndex + 1]?.querySelector("._down")
    const nextSlideAnimationTop = slides[currentIndex - 1]?.querySelector("._top")
    const nextSlideAnimationDown = slides[currentIndex - 1]?.querySelector("._down")


    currentSlidePoloskasTop.forEach(el => {
      if (isForward) {
        el.classList.add('animate-animation_down')
        nextSlideAnimationTop?.classList.add("animate-animation_up_next")

      } else {
        el.classList.add('animation_up')
        prevSlideAnimationTop?.classList.add("animate-animation_down_next")
      }
    })
    currentSlidePoloskasDown.forEach(el => {
      if (isForward) {
        el.classList.add('animate-animation_up')
        nextSlideAnimationDown?.classList.add("animate-animation_down_next")

      } else {
        el.classList.add('animate-animation_down')
        prevSlideAnimationDown?.classList.add("animate-animation_up_next")
      }
    })
    setLastSlideIndex(currentIndex)
  }
  return (
    <Swiper
      className='w-screen h-screen'
      speed={2500}
      touchReleaseOnEdges={true}
      freeMode={false}
      grabCursor={true}
      shortSwipes={true}
      mousewheel
      modules={[Pagination, Mousewheel]}
      direction='vertical'
      onSlideChange={handleSlideChange}>

      {gradients.gradients.map((item, index) =>

        <SwiperSlide
          className='flex items-center justify-center text-center text-9xl bg-black h-screen '
          key={index} >
          <div className='poloska_container absolute left-12 flex flex-col flex-direction-important items-center  h-screen'>
            <span
              className={`poloska _top w-[5]px`}
              style={{ background: `${gradients.gradients[index].gradient}` }}></span>
            <RiReactjsLine className={`icon ${lastSlideIndex === index ? "animate-rotate_logo" : "animate-hide_icon_stolb"}`} />
            <span
              className={`poloska _down `}
              style={{ background: `${gradients.gradients[index + 1]?.gradient}` }}></span>
          </div>
          <p>Конетылдваоышдред ывоашщзуыл ва ывоалд</p>

        </SwiperSlide>

      )}
    </Swiper>
  )
}
