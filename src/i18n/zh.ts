const zh = {
	home: {
		title: 'Astro 多语言示例站点',
		heading: '你好，Astro！',
		currentLang: '当前语言：简体中文（zh）',
		descLines: [
			'你现在访问的是默认语言页面：/。',
			'点击右上角的按钮，可以切换到英文版本的首页 /en/。',
		],
		switchLabel: '切换为英文',
	},
	about: {
		title: '关于这个 Astro 多语言示例',
		heading: '关于本站',
		paragraphs: [
			'本站展示了如何使用 Astro 官方 i18n 配置来实现多语言内容。',
			'页面模板只写一份，通过词典文件切换中英文文案，维护成本更低。',
			'你可以继续扩展更多页面，只需要在词典里补充对应文案即可。',
		],
	},
} as const;

export type MessagesZh = typeof zh;
export default zh;

