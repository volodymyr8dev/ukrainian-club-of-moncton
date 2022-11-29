import { gql, useQuery } from "@apollo/client";
import {checkTypeOfData} from './helpers'
const GET_TEXTS_QUERY = gql`
  query MyQuery {
    englishTexts: texts(first: 2000, locales: en) {
      name
      textContent
      slug
    }
    ukrainianTexts: texts(first: 2000, locales: uk_UA) {
      name
      textContent
      slug
    }
  }
`;
const GET_TEXTS_EN = gql`
  query MyQuery  {
    englishTexts: texts(first: 2000, locales: en) {
      name
      textContent
      slug
    }
  }
`;

const GET_TEXTS_UA = gql`
  query MyQuery {
    ukrainianTexts: texts(first: 2000, locales: uk_UA) {
      name
      textContent
      slug
    }
  }
`;

export const getTexts = (lang) => {

  let GET_TEXTS = GET_TEXTS_QUERY;

  if (lang) {
    lang === "en" ? GET_TEXTS = GET_TEXTS_EN : GET_TEXTS = GET_TEXTS_UA;
  } 

  let { data, loading, error } = useQuery(GET_TEXTS);
 
  if (loading) console.log("Fetching data...");
  if (error) console.log("error: ", error);


  if (lang) {
    data = lang === "en" ?  data?.englishTexts : data?.ukrainianTexts;
  } 

if(data){
  data = (checkTypeOfData(data)).reduce((a,c) => (a[c.slug] = c.textContent, a), {});
}
  return {data, loading, error}
};
