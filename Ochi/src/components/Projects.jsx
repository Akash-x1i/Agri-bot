import { useLayoutEffect, useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import gsap from 'gsap'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Projects = () => {
  const projects = [
    {
      name1: "Central Processing and Vision System",
      name2: "Multi-Functional Robotic Arm",
      image1: 'https://i.ibb.co/YBY38d0v/1-Central-Processing-and-Vision-System.png',
      image2: 'https://i.ibb.co/67p3H8cW/2-Multi-Functional-Robotic-Arm.png'
    },
    {
      name1: "Pesticide Spraying Mechanism",
      name2: "Navigation and Stability Control",
      image1: 'https://i.ibb.co/whDQyg1g/3-Pesticide-Spraying-Mechanism.png',
      image2: 'https://i.ibb.co/tw1JJ0S3/4-Navigation-and-Stability-Control.png'
    },
    {
      name1: "Soil and Environmental Monitoring",
      name2: "Laser Treatment Module",
      image1: 'https://i.ibb.co/XfWqqfnj/5-Soil-and-Environmental-Monitoring.png',
      image2: 'https://i.ibb.co/HLdXZSGN/6-Laser-Treatment-Module.png'
    }
  ]

  const containerRef = useRef(null)

  useLayoutEffect(() => {
    const cards = containerRef.current.querySelectorAll('.hero')

    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 50, scale: 0.9 },
      { duration: 1, autoAlpha: 1, y: 0, scale: 1, ease: 'power3.out', stagger: 0.2 }
    )
  }, [])

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='lg:p-10 p-2 mb-[10vh] z-5000' ref={containerRef}>
      <div className='pt-[10vh] pb-[2vh]'>
        <h2 className='font-[Founders Grotesk] font-semibold lg:text-[6vw] text-7xl uppercase'>Components</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map((elem, idx) => (
          <div key={idx} className='hero w-full lg:h-[550px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard
              image1={elem.image1}
              name1={elem.name1}
              image2={elem.image2}
              name2={elem.name2}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
