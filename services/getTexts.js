import { gql, useQuery } from '@apollo/client'

const GET_TEXTS_QUERY = gql`
  query MyQuery {
    texts (first: 1000) {
      name
      textContent
      localizations (locales: uk_UA) {
        textContent
      }
    }
  }
`

export const getTexts = () => {
  const { data, loading, error } = useQuery(GET_TEXTS_QUERY)

  if (loading) console.log('Fetching data...')
  if (error) console.log('error: ', error)

  console.log(data)
  return { data, loading, error }
}