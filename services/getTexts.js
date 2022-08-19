import { gql, useQuery } from '@apollo/client'

const GET_TEXTS_QUERY = gql`
  query MyQuery {
    texts {
      name
      textContent
    }
  }
`

export const getTexts = () => {
  try {
    const { data, loading, error } = useQuery(GET_TEXTS_QUERY)

    if (loading) console.log('Fetching data...')
    if (error) console.log('error: ', error)
    console.log(data)
    return data
  }
  catch (error) {
    console.log('error: ', error)
    return error
  }
}