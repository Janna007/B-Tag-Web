import React from 'react'

const data = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur, a\\',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus. Dolore sapiente dolorem pariatur id ipsa obcaecati quod aperiam, neque nesciunt suscipit rerum et repudiandae? Non provident quae omnis tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet, sint commodi nihil necessitatibus at molestias deleniti recusandae reprehenderit veniam atque inventore non dolores saepe provident corrupti vitae suscipit! Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam? dolor sit amet consec',
      date: '27.0.2020',
      imageUrl: 'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'Another news title here',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus. Dolore sapiente dolorem pariatur id ipsa obcaecati quod aperiam, neque nesciunt suscipit rerum et repudiandae? Non provident quae omnis tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet, sint commodi nihil necessitatibus at molestias deleniti recusandae reprehenderit veniam atque inventore non dolores saepe provident corrupti vitae suscipit! Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam? elit. Nullam in dui mauris. dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam',
      date: '15.1.2021',
      imageUrl: 'https://images.pexels.com/photos/2422365/pexels-photo-2422365.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'Third news title',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus. Dolore sapiente dolorem pariatur id ipsa obcaecati quod aperiam, neque nesciunt suscipit rerum et repudiandae? Non provident quae omnis tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet, sint commodi nihil necessitatibus at molestias deleniti recusandae reprehenderit veniam atque inventore non dolores saepe provident corrupti vitae suscipit! Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam?t dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam.',
      date: '03.3.2022',
      imageUrl: 'https://images.pexels.com/photos/2422367/pexels-photo-2422367.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: 'Fourth news title',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus. Dolore sapiente dolorem pariatur id ipsa obcaecati quod aperiam, neque nesciunt suscipit rerum et repudiandae? Non provident quae omnis tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet, sint commodi nihil necessitatibus at molestias deleniti recusandae reprehenderit veniam atque inventore non dolores saepe provident corrupti vitae suscipit! Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam?etus. dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam',
      date: '12.4.2023',
      imageUrl: 'https://images.pexels.com/photos/2422369/pexels-photo-2422369.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

function Event() {
  return (
    <div className='container mx-auto overflow-hidden p-10 m-10'>
        <h1 className='md:text-3xl sm:text-2xl text-md font-bold mb-20  text-[#585858] underline-with-space font_poppins  '>News & Events</h1>
      <div className='flex flex-col gap-10'>
        {data.map((item, index) => (
          <div key={item.id} className='flex flex-col md:flex-row gap-4 md:gap-10'>
            {index % 2 === 0 ? (
              <>
                <div className='md:w-1/2'>
                  <div className='w-full h-[300px] bg-red-600 overflow-hidden'>
                    <img
                      src={item.imageUrl}
                      alt={`news${item.id}`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
                <div className='md:w-1/2'>
                  <h1 className='font-bold text-3xl leading-[40px] font_kufam text-[#3B3A5D]'>{item.title}</h1>
                  <p className='text-base sm:text-md md:text-md text-[#002847] font_source_sans_3 sm:p-0 p-4 leading-6'>
                    {item.content}
                  </p>
                  <p className='mt-4 text-[#B4B7C1]'>{item.date}</p>
                </div>
              </>
            ) : (
              <>
                <div className='md:w-1/2 order-2 md:order-1'>
                  <h1 className='font-bold text-3xl leading-[40px] font_kufam text-[#3B3A5D]'>{item.title}</h1>
                  <p className='text-base sm:text-md md:text-md text-[#002847] font_source_sans_3 sm:p-0 p-4 leading-6'>
                    {item.content}
                  </p>
                  <p className='mt-4 text-[#B4B7C1]'>{item.date}</p>
                </div>
                <div className='md:w-1/2 order-1 md:order-2'>
                  <div className='w-full h-[300px] bg-red-600 overflow-hidden'>
                    <img
                      src={item.imageUrl}
                      alt={`news${item.id}`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Event