import { gql, useQuery } from '@apollo/client'
import useTranslation from 'next-translate/useTranslation'

const GET_GREEN_CARDS_QUERY = gql`
  query GetGreenCards {
    howCanIHelpCards (
      orderBy: createdAt_ASC,
      first: 9,
      where: { color: "green" }
    ) {
      cardText
      url
      color
      icon {
        url
      }
    }
  }
`

export const GreenDonationGrid = () => {
  const { data, loading, error } = useQuery(GET_GREEN_CARDS_QUERY)
  let { t } = useTranslation('how')

  if(loading) return <span></span>
  if(error) return <span></span>

  return (
    <>
    <>
      {
        data.howCanIHelpCards.slice(0, 3).map((card, i) => (
          <div
            key={ i }
            className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
            pt-8 rounded-3xl flex justify-between items-center flex-col px-8
            xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full
            min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
            flex-1 shrink-0 '
          >
            <div className='bg-blue-500 z-10 rounded-full'>
              <img
                src={ card.icon.url }
                alt={ card.cardText }
                title={ card.cardText }
                className='w-[128px] h-[128px] p-10 z-20'
              />
            </div>
            <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
              { card.cardText }
            </span>
            <a
              className='w-full max-w-[224px] py-4 px-16 bg-blue-500 rounded-[64px]
               font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
              href={ card.url }
              target='_blank'
              rel='noreferrer'
            >
              { t('learn-more') }
            </a>
          </div>
        ))
      }
    </>

    {
      data.howCanIHelpCards.length <= 3
      ? <></>
      : <div className='flex w-full gap-8 md:gap-5 tablets:gap-10 justify-start
        flex-col tablets:flex-row pt-8 tablets:pt-10'>
          {
            data.howCanIHelpCards.slice(3, 6).map((card, i) => (
              <div
                key={ i }
                className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
                pt-8 rounded-3xl flex justify-between items-center flex-col px-8
                xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full
                min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
                flex-1 shrink-0 tablets:max-w-[32%]'
              >
                <div className='bg-green-500 z-10 rounded-full'>
                  <img
                    src={ card.icon.url }
                    alt={ card.cardText }
                    title={ card.cardText }
                    className='w-[128px] h-[128px] p-10 z-20'
                  />
                </div>
                <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
                  { card.cardText }
                </span>
                <a
                  className='w-full max-w-[224px] py-4 px-16 bg-green-500 rounded-[64px]
                  font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
                  href={ card.url }
                  target='_blank'
                  rel='noreferrer'
                >
                  { t('learn-more') }
                </a>
              </div>
            ))
          }
        </div>
    }

    {
      data.howCanIHelpCards.length <= 6
      ? <></>
      : <div className='flex w-full gap-8 md:gap-5 tablets:gap-10 justify-start
        flex-col tablets:flex-row pt-8 tablets:pt-10'>
          {
            data.howCanIHelpCards.slice(6, 9).map((card, i) => (
              <div
                key={ i }
                className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
                pt-8 rounded-3xl flex justify-between items-center flex-col px-8
                xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full
                min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
                flex-1 shrink-0 '
              >
                <div className='bg-green-500 z-10 rounded-full'>
                  <img
                    src={ card.icon.url }
                    alt={ card.cardText }
                    title={ card.cardText }
                    className='w-[128px] h-[128px] p-10 z-20'
                  />
                </div>
                <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
                  { card.cardText }
                </span>
                <a
                  className='w-full max-w-[224px] py-4 px-16 bg-green-500 rounded-[64px]
                  font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
                  href={ card.url }
                  target='_blank'
                  rel='noreferrer'
                >
                  { t('learn-more') }
                </a>
              </div>
          ))
        }
      </div> 
    }
    </>
  )
}