"use client"
import { useState } from 'react'
import { RiReactjsLine } from "react-icons/ri"
import 'swiper/css'
import 'swiper/css/pagination'
import { Mousewheel, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import gradients from "./gradients.json"
import "./styles.css"

export default function Home() {

  const [lastSlideIndex, setLastSlideIndex] = useState(0)
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex
    const slides = swiper.slides

    const isForward = currentIndex > lastSlideIndex


    slides.forEach(slide => {
      slide.querySelectorAll('.poloska').forEach(el => {
        el.classList.remove('animation_up', 'animation_down', "animation_down_next", "animation_up_next")
      })
    })
    const currentSlidePoloskasTop = slides[currentIndex].querySelectorAll('._top')
    const currentSlidePoloskasDown = slides[currentIndex].querySelectorAll('._down')

    const prevSlideAnimationTop = slides[currentIndex + 1]?.querySelector("._top")
    const prevSlideAnimationDown = slides[currentIndex + 1]?.querySelector("._down")
    const nextSlideAnimationTop = slides[currentIndex - 1]?.querySelector("._top")
    const nextSlideAnimationDown = slides[currentIndex - 1]?.querySelector("._down")


    const nextIcon = slides[currentIndex + 1]?.querySelector('.icon')
    const prevIcon = slides[currentIndex - 1]?.querySelector('.icon')


    currentSlidePoloskasTop.forEach(el => {
      if (isForward) {
        el.classList.add('animation_down')
        nextSlideAnimationTop.classList.add("animation_up_next")

      } else {
        el.classList.add('animation_up')
        prevSlideAnimationTop.classList.add("animation_down_next")
      }
    })
    currentSlidePoloskasDown.forEach(el => {
      if (isForward) {
        el.classList.add('animation_up')
        nextSlideAnimationDown.classList.add("animation_down_next")

      } else {
        el.classList.add('animation_down')
        prevSlideAnimationDown.classList.add("animation_up_next")
      }
    })
    setLastSlideIndex(currentIndex)
  }
  return (
    <Swiper
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

        <SwiperSlide key={index} >
          <div className='poloska_container'>
            <span
              className={`poloska _top `}
              style={{ background: `${gradients.gradients[index].gradient}` }}></span>
            <RiReactjsLine className={`icon ${lastSlideIndex === index ? "rotate_logo" : "hide_icon_stolb"}`} />
            <span
              className={`poloska _down `}
              style={{ background: `${gradients.gradients[index + 1]?.gradient}` }}></span>
          </div>

        </SwiperSlide>

      )}
    </Swiper>
  )
}
