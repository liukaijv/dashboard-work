(function() {

	// 折线图
	var lineChart = echarts.init(document.getElementById('line-chart'));
	var lineChartOption = {
		title: {
			text: '堆叠区域图'
		},
		tooltip : {
			trigger: 'axis'
		},
		legend: {
			data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
		},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis : [
		{
			type : 'category',
			boundaryGap : false,
			data : ['周一','周二','周三','周四','周五']
		}
		],
		yAxis : [
		{
			type : 'value'
		}
		],
		series : [
		{
			name:'邮件营销',
			type:'line',
			stack: '总量',
			areaStyle: {normal: {}},
			data:[120, 132, 101, 134, 90, 230, 210]
		},
		{
			name:'联盟广告',
			type:'line',
			stack: '总量',
			areaStyle: {normal: {}},
			data:[220, 182, 191, 234, 290, 330, 310]
		},
		{
			name:'视频广告',
			type:'line',
			stack: '总量',
			areaStyle: {normal: {}},
			data:[150, 232, 201, 154, 190, 330, 410]
		},		
		]
	};
	lineChart.setOption(lineChartOption);

	// 饼图
	var pieChart = echarts.init(document.getElementById('pie-chart'));
	var pieChartOption = {
		title : {
			text: '某站点用户访问来源',
			subtext: '纯属虚构',
			x:'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		},
		series : [
		{
			name: '访问来源',
			type: 'pie',
			radius : '55%',
			center: ['50%', '60%'],
			data:[
			{value:335, name:'直接访问'},
			{value:310, name:'邮件营销'},
			{value:234, name:'联盟广告'},
			{value:135, name:'视频广告'},
			{value:1548, name:'搜索引擎'}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}
		]
	};
	pieChart.setOption(pieChartOption);

	//柱状图
	var barChart = echarts.init(document.getElementById('bar-chart'));
	var barChartOption = {
		title: {
			text: '堆叠区域图'
		},
		tooltip : {
			trigger: 'axis'
		},
		legend: {
			data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
		},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis : [
		{
			type : 'category',
			boundaryGap : false,
			data : ['周一','周二','周三','周四','周五']
		}
		],
		yAxis : [
		{
			type : 'value'
		}
		],
		series : [
		{
			name:'邮件营销',
			type:'line',
			stack: '总量',
			areaStyle: {normal: {}},
			data:[120, 132, 101, 134, 90, 230, 210]
		},
		{
			name:'联盟广告',
			type:'line',
			stack: '总量',
			areaStyle: {normal: {}},
			data:[220, 182, 191, 234, 290, 330, 310]
		},
		{
			name:'视频广告',
			type:'line',
			stack: '总量',
			areaStyle: {normal: {}},
			data:[150, 232, 201, 154, 190, 330, 410]
		},		
		]
	};
	barChart.setOption(barChartOption);

})();