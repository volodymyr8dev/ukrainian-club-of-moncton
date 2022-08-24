import {LOCALE_UA} from "./constants";

export function isPostInvalid(locale, post) {
  return !post || locale === LOCALE_UA && (!post.localizations || post.localizations.length === 0);
}