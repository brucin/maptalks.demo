var gaodeTile = new maptalks.TileLayer('gaode', {
	'urlTemplate' : 'http://webrd{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
	'subdomains'  : ['01','02','03','04'],
	'attribution' : '&copy; <a href="http://www.gaode.com/">Gaode.com</a>'
});

var gaodeSate = new maptalks.TileLayer('gaodeSate', {
	'urlTemplate' : 'http://webst{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
	'subdomains'  : ['01','02','03','04'],
	'attribution' : '&copy; <a href="http://www.gaode.com/">Gaode.com</a>'
});

var gaodeRoad = new maptalks.TileLayer('gaodeRoad', {
	'urlTemplate' : 'http://webst{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8',
	'subdomains'  : ['01','02','03','04'],
	'attribution' : '&copy; <a href="http://www.gaode.com/">Gaode.com</a>'
});

var gaodeTraffic = new maptalks.TileLayer('gaodeTraffic', {
	'urlTemplate' : function (x, y, z) {
    	return 'http://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&;t=1&z=' + z + '&y=' + y + '&x=' + x + '&t=' + new Date().getTime();
	},
	'attribution' : '&copy; <a href="http://www.gaode.com/">Gaode.com</a>'
});

var tiandiTile = new maptalks.TileLayer('tiandi', {
	'urlTemplate' : 'http://t{s}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}',
	'subdomains'  : ['1','2','3','4','5'],
	'attribution' : '&copy; <a href="http://www.tianditu.cn/">天地图</a>'
});

var baiduTile = new maptalks.TileLayer('baidu', {
	'urlTemplate' : 'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1',
	'subdomains'  : [0,1,2,3,4,5,6,7,8,9],
	'attribution' : '&copy; <a href="http://map.baidu.com/">Baidu</a>'
});

var baiduSate = new maptalks.TileLayer('baiduSate', {
	'urlTemplate' : 'http://shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46',
	'subdomains'  : [0,1,2,3,4,5,6,7,8,9],
	'attribution' : '&copy; <a href="http://map.baidu.com/">Baidu</a>'
});

var baiduRoad = new maptalks.TileLayer('baiduRoad', {
	'urlTemplate' : 'http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=020',
	'subdomains'  : [0,1,2,3,4,5,6,7,8,9],
	'attribution' : '&copy; <a href="http://map.baidu.com/">Baidu</a>'
});

var baiduTraffic = new maptalks.TileLayer('baiduTraffic', {
	'urlTemplate' : function (x, y, z) {
	    return 'http://its.map.baidu.com:8002/traffic/TrafficTileService?label=web2D&v=081&level=' + z + '&y=' + y + '&x=' + x + '&time=' + new Date().getTime();    
	},
	'attribution' : '&copy; <a href="http://map.baidu.com/">Baidu</a>'
});

var baiduCustom = new maptalks.TileLayer('baiduCustom', {
	'urlTemplate' : 'http://api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&scale=1&customid=midnight',
	'subdomains'  : [0, 1, 2],
	'attribution' : '&copy; <a href="http://map.baidu.com/">Baidu</a>'
});