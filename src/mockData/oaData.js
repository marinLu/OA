const app = {
	gridItems: [{
		text: 'proI0',
		icon: 'fa-hand-peace-o'
	}, {
		text: 'else1',
		icon: 'fa-hand-peace-o'
	}, {
		text: 'else2',
		icon: 'fa-hand-peace-o'
	}, {
		text: 'else2',
		icon: 'fa-hand-peace-o'
	}, {
		text: 'else2',
		icon: 'fa-hand-peace-o'
	}, ],
	tabItems: [{
		text: 'nav1',
		icon: 'fa-hand-peace-o'
	}, {
		text: 'nav2',
		icon: 'fa-hand-peace-o'
	}, {
		text: 'nav3',
		icon: 'fa-hand-peace-o'
	}, {
		text: 'nav4',
		icon: 'fa-hand-peace-o'
	}, {
		text: 'more',
		icon: 'fa-hand-peace-o'
	}, ]
};
const home = {
	homeTitle: {
		title: '项目门户',
		p: 'p1',
		nav: '项目'
	},
	option: {
		title: {
			text: 'ECharts demo'
		},
		tooltip: {},
		xAxis: {
			data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
		},
		yAxis: {},
		series: [{
			name: '销量',
			type: 'bar',
			data: [5, 20, 36, 10, 10, 20]
		}]
	},
	subNav: [{
		text: 'mainh',
		icon: 'fa-home'
	}, {
		text: 'project',
		icon: 'fa-briefcase'
	}, {
		text: 'daily',
		icon: 'fa-bookmark'
	}, {
		text: 'message',
		icon: 'fa-wechat'
	}]
}
const chat = [{
	"type": "receive",
	"value": "1"
}, {
	"type": "send",
	"value": "1"
}];
const projects = {
	values: [{
		"id": "9628324",
		"imageUri": 'mui-icon mui-icon-home',
		"title": "xxx项目",
		"abstra": "计量箱（柜）",
		"date": 1478079203071
	}, {
		"id": "9628724",
		"imageUri": 'mui-icon mui-icon-home',
		"title": "xxxyy项目",
		"abstra": "aefregrtg",
		"date": 1478079204571
	}, {
		"id": "9628314",
		"imageUri": 'mui-icon mui-icon-home',
		"title": "xxxyy项目",
		"abstra": "计量箱",
		"date": 1478079204500
	}]
}

export default {
	app,
	home,
	chat,
	projects
}