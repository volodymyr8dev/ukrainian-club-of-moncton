import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import { useNextQueryParam } from '../../hooks/useNextQueryParam'

export const ThankYouModal = () => {
  const router = useRouter()
  const [open, setOpen] = useState(useNextQueryParam('ty') || false)

  const handleClose = () => setOpen(false)

  let ty = router.query['ty']

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '24px'
  }

  return (
    <div>
      <Modal
        open={ open }
        onClose={ handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ style } className='flex flex-col justify-center items-center
        w-[330px] md:w-[480px] h-[458px] md:h-[608px]'>
          <div className='flex justify-center -mt-3 w-[184px] md:w-64'>
            {
              ty === '0'
              ? <img
                  src='/not-success-image.svg'
                  alt='not successful'
                />
              : <img
                  src='/thank-you-image.svg'
                  alt='success'
                />
            }
          </div>
          
          <div className='flex flex-col items-center justify-center pt-8
          md:pt-10'>
            <h6 className={`font-proximaNova500 text-4xl md:text-5xl leading-[100%]
            uppercase text-center ${ ty === '0' ? 'text-red-500' : 'text-gray-900' }`}>
              { ty === '0' ? 'Uh-oh...' : 'Thank you' }
            </h6>
            <span className='font-proximaNova200 text-xl md:text-2xl leading-9
            text-gray-900 text-center pt-4 md:pt-6'>
              { ty === '0'
              ? 'Something went wrong'
              : 'Your donation was successful'
              }
            </span>
            <span className={`font-proximaNova200 text-xl md:text-2xl leading-9
            text-center ${ ty === '0' ? 'text-gray-900' : 'text-blue-500' }`}>
              { ty === '0'
              ? 'Please try again...'
              : 'A receipt was sent to your mail'
              }
            </span>

            <button
              type='submit'
              onClick={ handleClose }
              className='mt-8 md:mt-12'
            >
              <span className={`font-proximaNova400 text-base md:text-lg
              leading-[18px] text-gray-100 px-8 md:px-28 py-3
              md:py-[15px] rounded-full
              ${ ty === '0' ? 'bg-red-500' : 'bg-blue-500' }`}>
                { ty === '0'
                ? 'Try again'
                : 'Understood'
                }
              </span>
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}