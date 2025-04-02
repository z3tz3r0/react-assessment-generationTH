import React from 'react'

const Owner = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-8'>
            <h1 className="text-[32px] mb-8 font-bold">Kittipan - Group G - 13</h1>
            <div className='overflow-hidden h-60 w-60 mb-8'>
                <img src="https://i.pinimg.com/736x/f1/2c/28/f12c28938e81dab208bed28e543fa370.jpg" alt="" />
            </div>
            <div id="short-bio" className='w-3/4 text-center'>
                <h2 className='text-base font-bold mb-4'>Short Biography:</h2>
                <p className=' text-sm'>Highly motivated career changer transitioning into software development, currently building foundational skills in Generation Thailand's Junior Software Developer Bootcamp. Equipped with over 7 years of professional experience, including direct collaboration with development teams on bug resolution and product alignment. Proven ability in cross-functional teamwork, communication, and data-driven problem-solving gained from marketing and content roles. Eager to apply a strong work ethic, analytical mindset, and new technical skills as a Junior Full Stack Developer, contributing effectively to team success and continuous improvement.</p>
            </div>
        </div>
    )
}

export default Owner