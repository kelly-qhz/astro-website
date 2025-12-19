// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	// Astro 官方 i18n 配置
	i18n: {
		// 默认语言：中文
		defaultLocale: 'zh',
		// 支持的语言
		locales: ['zh', 'en'],
		// 路由相关配置：/ = zh，/en/ = en
		routing: {
			prefixDefaultLocale: false,
			fallbackType: 'redirect', // 语言缺失时重定向到默认语言
		},
	},
});
