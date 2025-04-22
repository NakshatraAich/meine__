import React from 'react'
import { companyHero, img5 } from '../../assets'
import { NavLink } from 'react-router'

const Company = () => {

  const jobs = [
    {
      post: <div>Software<br/>Developer</div>,
      features: <div>FullTime | Bengaluru</div>,
      content: 'Design, develop and maintain software applications using modern frameworks.'
    },
    {
      post: <div>Mechanical<br/>Engineer</div>,
      features: <div>PartTime | Pune</div>,
      content: 'Responsible for designing mechanical systems and troubleshooting.'
    },
    {
      post: <div>Data<br/>Analyst</div>,
      features: <div>Remote | Mumbai</div>,
      content: 'Analyze data trends and provide insights for business decisions.'
    },
    {
      post: <div>Electrical<br/>Technician</div>,
      features: <div>FullTime | Hyderabad</div>,
      content: 'Maintain and repair electrical systems in industrial settings.'
    },
    {
      post: <div>Marketing<br/>Manager</div>,
      features: <div>Contract | Delhi</div>,
      content: 'Develop marketing strategies and manage campaigns.'
    },
    {
      post: <div>UI/UX<br/>Designer</div>,
      features: <div>FullTime | Remote</div>,
      content: 'Design intuitive user interfaces and enhance user experience.'
    },
    {
      post: <div>HR<br/>Executive</div>,
      features: <div>FullTime | Chennai</div>,
      content: 'Manage recruitment processes and employee relations.'
    }
  ]

  return (
    <div>
      <section px-6 
        className="px-6 xl:px-16 pt-[24rem]  mt-[6rem] md:mt-[5.4rem] lg:mt-[5.5rem] xl:mt-28 flex flex-col justify-start font-bold text-5xl items-start text-white bg-cover bg-center pb-10" 
        style={{ backgroundImage: `url(${companyHero})` }}
      >
        <div className='text-white text-3xl xl:text-[2.5rem] font-bold text-left leading-[1] rounded-lg mb-2'>
          A Single Cell Cannot Power<br className='md:block hidden'/>
          <span className='text-brand'> The World</span> Alone
        </div>
        <div className="w-fit flex flex-col font-medium lg:text-xl md:text-base text-base text-left text-white tracking-tight">
        We are always on lookout to connect with talented individuals<br className='md:block hidden'/>to join our team and contribute towards a common cause.
        </div> 
      </section>

      <section className='px-6 xl:px-16 xl:pt-16 pt-12 sm:pt-28 flex flex-col gap-3 items-start mb-0 sm:mb-12 w-full '>
        <div className='bg-brand p-2 sm:w-28 w-16 rounded-full'></div>
        <h1 className="text-head text-2xl leading-[1] sm:text-4xl xl:text-5xl font-bold text-left mt-2 ">
          About <span className='text-brand'>Meine Electric</span>
        </h1>
        <div className='text-text font-medium text-sm sm:text-xl sm:leading-[1.6rem] tracking-tight max-w-[850px] mt-2'>
        MEINE Electric was founded in 2022 by Priyansh Mohan and Stuti Kakkar with a bold vision — to reimagine energy systems for a decentralized, secure, and sustainable future.<br/><br/>Our journey began with a simple yet powerful belief: that the world needs radically better energy solutions to unlock the full potential of renewables and reduce dependence on fossil fuels. From this idea, MEINE Electric has rapidly grown into a powerhouse of innovation, bringing together some of the best minds from across the globe — engineers, scientists, and industry leaders with decades of experience in energy, electrochemistry, and advanced materials.        </div>        
        <div className='flex flex-col lg:flex-row mt-2 md:items-end self-start '>
          <img 
            src={img5} 
            className='max-w-[800px] w-full shrink rounded-2xl '
          />
          {/* <NavLink to='/Newsroom' className='text-sm sm:text-lg font-semibold text-text md:text-right text-center p-2 rounded-md md:self-end hover:underline cursor-pointer'>
            <div>Check Our Newsroom For Latest News</div>
          </NavLink> */}
        </div>
      </section>

      <section className='px-6 xl:px-16 xl:pt-16 pt-12 sm:pt-28 flex flex-col gap-3 items-start mb-10 sm:mb-12 w-full '>
        <div className='bg-brand p-2 sm:w-28 w-16 rounded-full'></div>
        <h1 className="text-head text-2xl leading-[1] sm:text-4xl xl:text-5xl font-bold text-left mt-2 ">
          <span className='text-brand'>Join us</span> to make a <br/>change to this world
        </h1>
        <div className='text-text font-medium text-base lg:text-lg xl:text-xl xl:leading-[1.6rem] tracking-tight mb-4'>
        Joining forces, we can address pressing global challenges,promote sustainability, <br className='hidden sm:block'/>and create a brighter future for all.
        </div> 
        <form
          className="px-2 py-8 w-full sm:py-12 sm:px-8 rounded-xl shadow-[0_15px_80px_rgba(120,121,121,0.3)]"
          action="https://formbold.com/s/3Vyl0"
          method="POST"
          id="contact-form"
        >
          <div className="text-xl font-semibold mb-8">Tell Us More About Yourself</div>

          <div className="text-sm font-semibold text-text mb-2">Email Address</div>
          <input
            name="email"
            type="email"
            className="w-full p-4 rounded-lg bg-[#D9D9D9] opacity-[73%] mb-6 focus:outline-none"
            placeholder="Enter your email"
          />

          <div className="text-sm font-semibold text-text mb-2">Message</div>
          <textarea
            name="message"
            className="w-full p-4 rounded-lg bg-[#D9D9D9] opacity-[73%] focus:outline-none mb-8"
            rows="6"
            placeholder="Enter your message"
          ></textarea>

          <input
            type="hidden"
            name="cv" // This will hold the file URL from Uploadcare
            id="uploadcare-file"
          />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 w-full">
            <button
              type="submit"
              className="transition-all duration-200 ease-in-out active:scale-95 cursor-pointer bg-brand text-white font-semibold px-8 py-4 rounded-lg w-full sm:w-60 text-center"
            >
              Send
            </button>

            <div className="text-text font-semibold">-or-</div>

            <button
              type="button"
              onClick={() =>
                uploadcare.openDialog(null, { multiple: false }).done((file) => {
                  file.done((info) => {
                    document.getElementById('uploadcare-file').value = info.cdnUrl;
                    document.getElementById('file-name').innerText = "CV Uploaded ✅";
                  });
                })
              }
              className="bg-brand text-white font-semibold px-8 py-4 rounded-lg w-full sm:w-60 text-center transition-all duration-200 ease-in-out active:scale-95 cursor-pointer"
            >
              Submit Your CV
            </button>
          </div>

          <p id="file-name" className="text-sm text-gray-500 text-center mt-4">
            Upload your CV
          </p>
        </form>
        <div>
</div>
            

      </section>

      <div className='xl:px-16 px-6 mb-8 sm:mb-12 flex flex-col justify-end items-end'>
        <div className='bg-brand w-16 p-2 sm:w-28 rounded-full'></div>
      </div>

    </div>
  )
}

export default Company
