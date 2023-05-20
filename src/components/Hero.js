import { styles } from "../styles";

const Hero = () => {
  return (
    <div className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#313dcf]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#313dcf]'>Sam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Computer Science student at the University of Utah <br className='sm:block hidden' />
            Expected Graduation - Spring 2024
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero