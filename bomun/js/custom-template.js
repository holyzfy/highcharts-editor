(function () {

highed.addTemplateType('map', '地图');

var worldMap = {
    type: 'map',
    template: {
        title: '世界地图',
        urlImg: 'http://www.highcharts.com/media/com_demo/images/highmaps/all-maps-default.svg'
    }
};

var chinaMap = {
    type: 'map',
    template: {
        title: '中国地图',
        urlImg: 'http://echarts.baidu.com/gallery/data/thumb/geo-map-scatter.png'
    }
};

highed.installMultipleTemplates([worldMap, chinaMap]);


})();