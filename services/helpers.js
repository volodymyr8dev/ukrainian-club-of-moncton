import {LOCALE_UA} from "./constants";

export function isPostInvalid(locale, post) {
  return !post || locale === LOCALE_UA && (!post.localizations || post.localizations.length === 0);
}

export const checkTypeOfData = (data) => {
 return Array.isArray(data) ? data : (lang == "en"? data.englishTexts:data.ukrainianTexts)
}