// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	// 配置适配器
	adapter: netlify(),
	// 指定输出为服务端模式（SSR）
	output: 'server',
	// output: 'static',// 用了SSR专用的API所以没办法纯静态输出了
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
