import { gql, useQuery } from "@apollo/client";
import {checkTypeOfData} from './helpers'
const GET_TEXTS_QUERY = gql`
  query MyQuery($skip:Int!) {
    englishTexts: texts(first: 2000, locales: en,skip:$skip) {
      name
      textContent
      slug
    }
    ukrainianTexts: texts(first: 2000, locales: uk_UA,skip:$skip) {
      name
      textContent
      slug
    }
  }
`;
const GET_TEXTS_EN = gql`
  query MyQuery($skip:Int!)  {
    englishTexts: texts(first: 2000, locales: en,skip:$skip) {
      name
      textContent
      slug
    }
  }
`;

const GET_TEXTS_UA = gql`
  query MyQuery($skip:Int!) {
    ukrainianTexts: texts(first: 2000, locales: uk_UA,skip:$skip) {
      name
      textContent
      slug
    }
  }
`;

export const getTexts = (lang,skip = 0) => {

  let GET_TEXTS = GET_TEXTS_QUERY;

  if (lang) {
    lang === "en" ? GET_TEXTS = GET_TEXTS_EN : GET_TEXTS = GET_TEXTS_UA;
  } 

  let { data, loading, error } = useQuery(GET_TEXTS,{variables:{skip}});
 
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
