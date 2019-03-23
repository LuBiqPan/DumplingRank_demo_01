
function Growth() {
    this.dom = document.getElementById("inner-group");
    this.growthChart = echarts.init(this.dom);
    this.ajaxTime = 1000;
    this.growthData = {};
}


Growth.prototype.init = function () {
    var self = this;

    var option = {
        tooltip: {
            trigger: 'axis',
            showContent: true,     // Do not show content.
            axisPointer: {
                type: 'cross',
                lineStyle: {
                    type: 'dashed'
                }
            },
            backgroundColor: 'rgba(192, 218, 255, 0.5)',
            textStyle: {
                color: '#000'
            },
            extraCssText: 'width: 170px',
            formatter: function (params) {
                // use toFixed() to reserve 2 decimals of amount.
                var seriesParams = params[0]["seriesName"] + ": " + params[0].value.toFixed(2) + '<br>';
                for (var i=1; i<params.length; i++) {
                    /*
                       params[i].value might sometimes be string format, therefor,
                       translate it into float number first before use toFixed() function.
                    */
                    if (typeof params[i].value === 'string') {
                        seriesParams += params[i]["seriesName"] + ": "  + parseFloat(params[i].value).toFixed(2) + '<br>';
                    } else {
                        seriesParams += params[i]["seriesName"] + ": "  + params[i].value.toFixed(2) + '<br>';
                    }
                }
                return seriesParams;
            }
        },

        title:{
            text: '集资增长',
            textStyle: {
                color: '#C0DAFF',
                // fontSize: 30,
                // fontFamily: "楷体"
            },
            // x: "center",
            y: 3,
        },

        legend:{
            type: 'plain',
            x: 'left',
            left: 50,
            top: 40,
            inactiveColor: '#121A20',
            textStyle:{
                color: '#aaaaaa',
                fontSize: 10,
            }
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: self.growthData["sample_time"],
            axisLine: {
                lineStyle: {
                    // X axis color
                    color: '#C0DAFF'
                }
            },
        },

        yAxis: {
            name: '单位：万元',
            nameGap: 10,
            type: 'value',
            boundaryGap: false,
            splitLine:{
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#C0DAFF'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 15
                },
                formatter: function (value, index) {
                    return value / 10000;
                }
            },

        },

        grid: {
            // x, y, x2, y2: axis distance from div
            x: 40,
            y: 50,
            x2: 10,
            y2: 30,
        },

        series: [
            // Total
            {
                name:'全团总额',
                type:'line',
                smooth:false,
                symbol: 'circle',
                areaStyle: {
                    normal: {}
                },
                data: self.growthData["growth_theater"]["全团总额"],
                lineStyle: {
                    width: 3
                },
                itemStyle: {
                    normal: {
                        color: '#00b6de',
                        borderColor: '#00b6de',
                        areaStyle: {
                            type: 'default',
                            opacity: 0.0    //Color under lines.
                        }
                    }
                },
            },
            // SNH48
            {
                name:'SNH48',
                type:'line',
                smooth:false,
                symbol: 'circle',
                areaStyle: {
                    normal: {}
                },
                data: self.growthData["growth_theater"]["SNH48"],
                itemStyle: {
                    normal: {
                        color: '#00b6de',
                        borderColor: '#00b6de',
                        areaStyle: {
                            type: 'default',
                            opacity: 0.3    //Color under lines.
                        }
                    }
                },
            },
            // BEJ48
            {
                name:'BEJ48',
                type:'line',
                smooth:false,
                symbol: 'circle',
                areaStyle: {
                    normal: {}
                },
                data: self.growthData["growth_theater"]["BEJ48"],
                itemStyle: {
                    normal: {
                        color: '#ff4083',
                        borderColor: '#ff4083',
                        areaStyle: {
                            type: 'default',
                            opacity: 0.3    //Color under lines.
                        }
                    }
                },
            },
            // GNZ48
            {
                name:'GNZ48',
                type:'line',
                smooth:false,
                symbol: 'circle',
                areaStyle: {
                    normal: {}
                },
                data: self.growthData["growth_theater"]["GNZ48"],
                itemStyle: {
                    normal: {
                        color: '#9FBF40',
                        borderColor: '#9FBF40',
                        areaStyle: {
                            type: 'default',
                            opacity: 0.3    //Color under lines.
                        }
                    }
                },
            },
        ]
    };

    if (option && typeof option === "object") {
        self.growthChart.setOption(option, true);
    }
};

Growth.prototype.ajax = function () {
    var self = this;
    $.ajax({
        url: "/growth/",
        contentType: "application/json",
        dataType: "json",
        type: "GET",
        success: function (result) {
            self.growthData = $.parseJSON(result["growth"]);
        }
    })
};

Growth.prototype.run = function () {
    var self = this;
    self.ajax();
    self.growthChart.showLoading({
      text: '正在加载，请稍后...',
      color: '#C0DAFF',
      textColor: '#C0DAFF',
      maskColor: 'rgba(255, 255, 255, 0.0)',
      zlevel: 0
    });

    setInterval(function () {
        self.growthChart.hideLoading();
        self.init();
    }, self.ajaxTime);
};

$(function () {
    var growth = new Growth();
    growth.run();
});