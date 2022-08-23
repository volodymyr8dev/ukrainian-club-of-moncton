import { gql, useQuery } from '@apollo/client'

const GET_TEXTS_QUERY = gql`
  query MyQuery {
    englishTexts: texts(first: 1000, locales: en) {
      name
      textContent
    }
    ukrainianTexts: texts(first: 1000, locales: uk_UA) {
      name
      textContent
    }
  }
`

export const getTexts = () => {
  const { data, loading, error } = useQuery(GET_TEXTS_QUERY)
  
  if (loading) console.log('Fetching data...')
  if (error) console.log('error: ', error)
  
  return { data, loading, error }
}