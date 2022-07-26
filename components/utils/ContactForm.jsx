import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import ProfileIcon from './../../assets/images/form/profile.svg'
import EmailIcon from './../../assets/images/form/email.svg'
import PhoneIcon from './../../assets/images/form/phone.svg'
import SendIcon from './../../assets/images/form/send.svg'

export const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault()
    e.target.reset() 
  }

  let { t } = useTranslation()

  return (
    <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
    w-full h-full rounded-3xl p-16'>

      <form onSubmit={ sendEmail }>
        <div className='flex justify-between gap-16 pb-10'>
          <div className='w-[41.45%] h-full'>
            <div className='flex flex-col pb-8'>
              <label
                className='font-proximaNova400 text-sm pb-4'
                htmlFor='name'
              >
                Name
              </label>
              <div className='bg-gray-200 px-4 flex items-center gap-8
              rounded-2xl w-full'>
                <Image
                  src={ ProfileIcon }
                />
                <input
                  className='text-lg font-proximaNova300 text-gray-500
                  bg-gray-200 py-[19px]'
                  name='name'
                  id='name'
                  type='name'
                  placeholder='John Doe'
                />
              </div>
            </div>

            <div className='flex flex-col pb-8'>
              <label
                className='font-proximaNova400 text-sm pb-4'
                htmlFor='email'
              >
                Email
              </label>
              <div className='bg-gray-200 px-4 flex items-center gap-8
              rounded-2xl w-full'>
                <Image
                  src={ EmailIcon }
                />
                <input
                  className='text-lg font-proximaNova300 text-gray-500
                  bg-gray-200 py-[19px]'
                  name='email'
                  id='email'
                  type='email'
                  placeholder='JohnDoe@gmail.com'
                />
              </div>
            </div>

            <div className='flex flex-col'>
              <label
                className='font-proximaNova400 text-sm pb-4'
                htmlFor='phone'
              >
                Phone
              </label>
              <div className='bg-gray-200 px-4 flex items-center gap-10
              rounded-2xl w-full'>
                <Image
                  src={ PhoneIcon }
                />
                <input
                  className='text-lg font-proximaNova300 text-gray-500
                  bg-gray-200 py-[19px]'
                  name='phone'
                  id='phone'
                  type='phone'
                  placeholder='+1 772 1'
                />
              </div>
            </div>
          </div>

          <div className='w-[58.55%]'>
            <label
              className='font-proximaNova400 text-sm'
              htmlFor='message'
            >
              Message
            </label>
              <textarea
                className='bg-gray-200 px-6 py-6 flex items-center gap-10
                rounded-2xl resize-none w-full h-[90%] mt-[15px] text-lg'
                name='message'
                id='message'
                placeholder='Feed animals and enjoy life.'            
              >
              </textarea>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button
            className='bg-blue-500 text-gray-100 py-[15px] px-8 rounded-[50px]
            flex items-center gap-[18px] justify-between'
            type='submit'
          >
            Send message
            <Image
              src={ SendIcon }
            />
          </button>
        </div>
      </form>
    </div>
  )
}