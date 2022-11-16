export const getTextBySlug = (data, slug) => {
 if(data){
   return  data.find((item) => item.slug === slug);
 }
};
