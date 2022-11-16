import patterns from "./../patterns.module.css"
import { motion, useAnimationControls } from "framer-motion"
import anime from "animejs"

const Hero: React.FC = () => {
  const bgAnim = useAnimationControls()
  const onMouseOver = () => {
    bgAnim.start({ rotate: anime.random(-30, 30), scale: 1.2 })
  }

  const onMouseLeave = () => {
    bgAnim.start({ scale: 1 })
  }

  return (
    <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className="flex relative justify-center items-center bg-gradient-to-b from-primary-700 dark:from-primary-800 via-primary-300 dark:via-primary-900 h-[25vh] overflow-hidden">
      <motion.div
        animate={bgAnim}
        transition={{ ease: "easeInOut" }}
        className={`absolute w-screen h-screen z-0 ${patterns.circuitDark}`}
      ></motion.div>
      <main className="content prose p-4 z-10">
        <p className="text-3xl text-base-900 dark:text-white font-bold mt-0 mb-8">
          Headless CMS for documenting<br />your corporate application development
        </p>
      </main>
    </div>
  )
}

export default Hero