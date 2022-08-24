import path from 'path'

export default async function handler(request, response) {
  if (request.query.secret !== process.env.REVALIDATE_TOKEN) {
    return response.status(401).json({ message: 'Invalid token' })
  }

  if (!request.body) {
    return response.status(422).json({ message: 'Invalid requestuest body' })
  }

  try {
    await response.revalidate(path.join('/', request.body.data.page))
    return response.status(200).json({ revalidated: true })
  } catch (err) {
    return response.status(500).send('Error revalidating')
  }
}