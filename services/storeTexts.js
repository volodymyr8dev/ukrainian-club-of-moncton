import { getTexts } from './getTexts.js'

export const storeTexts = () => {
  const data = getTexts()
  return data
}