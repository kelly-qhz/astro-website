import zh from './zh';
import en from './en';

export const SUPPORTED_LOCALES = ['zh', 'en'] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const messages = {
	zh,
	en,
} as const;

export function getMessages(locale: string | undefined) {
	if (locale === 'en') return messages.en;
	return messages.zh;
}