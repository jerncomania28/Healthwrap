

import Profile from './assets/profile.png';

export default function App() {
  return (
    <div className="w-full relative">
      <header className='bg-black w-full relative py-6 px-4'>
        <h1 className='text-2xl text-white font-syncopate font-[700] leading-[23px] uppercase'>HealthWrap</h1>
      </header>
      <main className='w-full relative max-w-[931px] mx-auto py-6 px-[1rem] md:px-[0rem]'>
        <div className='flex flex-col gap-[15px]'>
          <h1 className='text-[27px] md:text-[48px] font-[800] leading-[35px] md:leading-[64px] font-red-hat-display'>
            10 Reasons Why Lights Out is a Must-Try for Women with menopause in 2024
          </h1>

          <div className='flex py-4 px-2 md:px-4 items-center bg-[#ECF8FA] rounded-md gap-3 h-[64px] md:h-[75px]'>
            <div className='w-[54px] h-[54px] rounded-full relative'>
              <img src={Profile} alt='profile-picture' className='w-full object-cover' />
            </div>
            <div className='flex flex-col font-red-hat-display text-[12px] md:text-[14px] font-[500] leading-[16px] md:leading-[19px]'>
              <p>Written By <span className='font-bold'>Jennifer K.</span></p>
              <p>Last Updated July 20, 2024</p>
            </div>
          </div>

          <p className='font-red-hat-display font-[500] text-[16px] md:text-[20px] leading-[22px] md:leading-[27px]'>
            Lights Out is a revolutionary sleep supplement designed to help <span className='font-bold'> menopausal women </span> overcome the unique challenges they face when it comes to getting <span className='font-bold'>quality rest</span>. Here's why it's a game-changer:
          </p>

        </div>

        {/* <div>

        </div> */}


      </main>

    </div>
  );
}