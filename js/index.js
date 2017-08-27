function initToolbar() {
	var mapToolBar = new maptalks.control.Toolbar({
		position : {
		     top: 0,
		     right: 100
		},
		vertical : false,
		//工具项
		items: [{
		    	type : 'menu',
		        item: '底图切换',
		        click : function(){},
		        children : [{
		            item: '高德底图',
		            click : function() {
			            	map.config({
						        minZoom : 1,
						        maxZoom : 18,
						        spatialReference:{
						            projection:'EPSG:3857'
						        }
						    });
		                 	map.setBaseLayer(gaodeTile);
							map.removeLayer([gaodeRoad, baiduRoad, gaodeTraffic, baiduTraffic]);
		             }
		        }, {
		            item: '高德卫星',
		            click : function() {
						map.config({
					        minZoom : 1,
					        maxZoom : 18,
					        spatialReference:{
					            projection:'EPSG:3857'
					        }
					    });
					 	map.setBaseLayer(gaodeSate);
						map.removeLayer([baiduRoad, gaodeTraffic, baiduTraffic]);
					}
		        }, {
		            item: '天地图',
		            click : function() {
						map.config({
					        minZoom : 1,
					        maxZoom : 18,
					        spatialReference:{
					            projection:'EPSG:3857'
					        }
					    });
					 	map.setBaseLayer(tiandiTile);
						map.removeLayer([gaodeRoad, baiduRoad, gaodeTraffic, baiduTraffic]);
					}
		        }, {
		            item: '百度底图',
		            click : function() {
					  	map.config({
					  		minZoom : -1,
								maxZoom : -1,
					  		spatialReference: {
					  			projection : 'baidu'
					  		}
					  	});
					  	map.setBaseLayer(baiduTile);
						map.removeLayer([gaodeRoad, baiduRoad, gaodeTraffic, baiduTraffic]);
					}
		        }, {
		            item: '百度卫星',
		            click : function() {
						map.config({
							minZoom : -1,
		   					maxZoom : -1,
					  		spatialReference: {
					  			projection : 'baidu'
					  		}
					  	});
						map.setBaseLayer(baiduSate);
						map.removeLayer([gaodeRoad, gaodeTraffic, baiduTraffic]);
					}
		        }, {
		            item: '百度夜间',
		            click : function() {
						map.config({
							minZoom : -1,
		   					maxZoom : -1,
					  		spatialReference: {
					  			projection : 'baidu'
					  		}
					  	});
					  	map.setBaseLayer(baiduCustom);
						map.removeLayer([gaodeRoad, baiduRoad, gaodeTraffic, baiduTraffic]);
					}
		        }]
		    }, {
		    	type : 'menu',
		        item: '图层插件',
		        click : function(){},
		        children : [{
		            item: '路况',
		            click : function() {
		            	var baseLayer = map.getBaseLayer();
		            	map.removeLayer([gaodeTraffic, baiduTraffic]);
		            	if(baseLayer.getId().indexOf('baidu') < 0) {
		            		map.addLayer(gaodeTraffic);
		            	} else {
		            		map.addLayer(baiduTraffic);
		            	}
		            }
		        }, {
		            item: '网格（500*500）',
		            click : function() {
		                var id = 'grid-500-500';
		                if (map.getLayer(id)) {
		                    map.removeLayer(id);
		                } else {
		                    new maptalks.GridLayer(id,{
		                        center : [0, 0],
		                        projection : true,
		                        width : 500,
		                        height : 500
		                    }).addTo(map);
		                }
		            }
		        }, {
		            item: '热力图',
		            click : function() {
		            	openHeatGraph(map);
		            }
		        }, {
		            item: '聚合图',
		            click : function() {
		            	openClusterGraph(map);
		            }
		        }, {
		            item: '路径播放',
		            click : function() {
		            	playTrack(map);
		            }
		        }]
		    }, {
		    item: '工具',
		    click : function(){},
		    children : [{
		            item: '测距',
		            click : function(){
		            	var d = window.commonDistanceTool;
		            	if (!d) {
		            		d = new maptalks.DistanceTool({'once' : true});
		            		window.commonDistanceTool = d.addTo(map);
		            	} else {
		            		d.enable();
		            	}
		            }
		        },
		        {
		            item: '测面积',
		            click : function(){
		            	var a = window.commonAreaTool;
		            	if (!a) {
		            		a = new maptalks.AreaTool({'once' : true});
		            		window.commonAreaTool = a.addTo(map);
		            	} else {
		            		a.enable();
		            	}
		            }
		        }]
			}]
		});
		map.addControl(mapToolBar);
}

function openHeatGraph(mapObj){
	var data = this.getData();
	var heatLayer = mapObj.getLayer('heatLayer');
	if(heatLayer){
		mapObj.removeLayer(heatLayer);
	}
	var heatlayer = new maptalks.HeatLayer('heatLayer', data, {
	    'forceRenderOnRotating' : true,
	    'forceRenderOnMoving' : true
	}).addTo(mapObj);
	mapObj.setCenter([121.455476,31.160333]);
}

function getData() {
	var baseCenter = [-37.8839, 175.3745188667];
	var data = addressPoints.map(function (p) {
		var x = center[0] + baseCenter[0] - p[0];
		var y = center[1] + baseCenter[1] - p[1];
		return [x, y]; 
	});
	return data;
}

function openClusterGraph(mapObj){
	var clusterGraphList = this.getData();
	var markerList = [];
	for(var i=0,len = clusterGraphList.length; i < len; i ++){
		var clusterGraph = clusterGraphList[i];
		markerList.push(new maptalks.Marker([parseFloat(clusterGraph[0]), parseFloat(clusterGraph[1])]));
	}

	var cluster=  mapObj.getLayer('cluster');
	if(cluster){
		mapObj.removeLayer(cluster);
	}
	cluster = new maptalks.ClusterLayer('cluster');
	cluster.addMarker(markerList).addTo(mapObj);
	mapObj.setCenter([121.455476,31.160333]);
}

function playTrack(mapObj) {
	var player = new maptalks.RoutePlayer(route, mapObj);
	player.play();
}
