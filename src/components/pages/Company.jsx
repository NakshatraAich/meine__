import React from 'react'
import Jobcard from '../Jobcard'

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
      <section className='pt-80 flex flex-col justify-start font-bold text-5xl items-start'>
        <div className='px-16'>A Single Cell Cannot Power<br/><span className='text-brand'>The World</span> Alone</div>
        <img className='mt-8 w-full h-[40rem] object-cover' src="https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="Description of the image" />
        <div className='px-16 font-medium text-xl text-left text-text tracking-tight mt-12'>
          We are always on lookout to connect with talented individuals to<br/>join our team and contribute towards a common cause.
        </div>
        <div className='px-16 font-semibold text-2xl w-full text-brand text-right tracking-tight mt-2 hover:underline cursor-pointer'>
          Explore Open Positions At Meine
        </div>
      </section>

      <section className='px-16 pt-20 flex flex-col gap-3 items-start mb-12'>
        <div className='bg-brand p-2 w-28 rounded-full'></div>
        <h1 className="text-head text-[3rem] leading-[1] font-semibold text-left mt-4">
          About <span className='text-brand'>Meine</span>
        </h1>
        <div className='font-medium text-xl text-left text-text tracking-tight mt-2 max-w-[40rem]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.        </div>        
          <div className='flex flex-row mt-2 justify-between w-full items-end'>
            <img 
              src="https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" 
              className='max-w-[56rem] object-cover w-full h-[32rem] rounded-2xl'
            />
            <div className='text-sm font-semibold text-text p-2 rounded-md self-end hover:underline cursor-pointer'>
              Check Our Newsroom For Latest News
            </div>
          </div>
      </section>

      <section className='px-16 pt-20 flex flex-col gap-3 items-start mb-12'>
        <div className='bg-brand p-2 w-28 rounded-full'></div>
        <h1 className="text-head text-[3rem] leading-[1] font-semibold text-left mt-4">
          <span className='text-brand'>Join Us</span> To Make A<br/>Change To This World
        </h1>
        <div className='flex flex-row w-full justify-between'>
          <div className='font-medium text-xl text-left text-text tracking-tight'>
            We are always on lookout to connect with talented individuals to<br/>join our team and contribute towards a common cause.
          </div>
          <div className='font-medium text-text self-end hover:underline cursor-pointer'>
            Filter
          </div>
        </div>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8 mt-2'>
          {jobs.map((items, index) => (
            <Jobcard key={index} item={items} />
          ))}
        </div>
      </section>


    </div>
  )
}

export default Company
