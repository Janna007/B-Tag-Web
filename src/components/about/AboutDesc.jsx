import React from 'react'
import '../../index.css'

function AboutDesc() {
  return (
    <>
    
    <div className='flex justify-center items-center min-h-[600px]  overflow-hidden sm:px-[38px] px-[8px]  '>
        
        <div className=' w-full min-h-[480px] flex justify-start lg:items-start items-center flex-col space-y-2 overflow-hidden mx-[40px]  '> 

        <div className='p-4 md:mt-[20px] lg:mt-0' >
    <h1 className='text-[#585858] font_poppins font-semibold 2xl:text-[38px]  md:text-3xl sm:text-2xl text-sm   lg:ml-[60px]  sm:text-left text-center'>
        <span className="underline-with-space ">About</span> BTAG Global Educational Trust
    </h1>
</div>


        <div className='grid lg:grid-cols-2  '>
            <div className='p-4 '>
                <p className='lg:ml-[60px] font_poppins font-[400px] 2xl:text-[18px] sm:text-[16px] text-[12px] leading-[33px] xl:leading-[35px] 2xl:leading-[40px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, cum explicabo. In, dolore! Cum commodi ipsam enim. Voluptas fuga repudiandae porro reprehenderit suscipit, perferendis perspiciatis voluptatum qui ut sequi ab!Loremorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, cum explicabo. In, dolore! Cum commodi ipsam en uptatum qui ut sequi ab!Loremorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, cum explicabo. In, doloi ut sequi ab!Loremorem ipsum d  !</p>
            </div>


            <div className='  p-4 lg:mr-[60px]'>
                <div className='  h-full w-full rounded-3xl overflow-hidden'>
                <img src='https://images.pexels.com/photos/5989927/pexels-photo-5989927.jpeg?auto=compress&cs=tinysrgb&w=600' alt='aboutImage1' className='w-full h-full' />
                </div>
                
            </div>
        </div>


           
        </div>
    </div>
    </>
  )
}

export default AboutDesc