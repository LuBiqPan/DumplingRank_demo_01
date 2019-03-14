
var dom = document.getElementById("descendant-wrapper");
var descendantChart = echarts.init(dom);

var ajaxTime = 2000;    // ajax cycle in millisecond

var descendantList = [];
var descendantAmount = [];
var descendantAmountTemp = [];

descendantChart.showLoading({
  text: '正在加载，请稍后...',
  color: '#C0DAFF',
  textColor: '#C0DAFF',
  maskColor: 'rgba(255, 255, 255, 0.0)',
  zlevel: 0
});


/* Descendant members */
function descendantControl(descendantList, descendantAmount) {
    descendantAmountTemp = [];
    for (var val in descendantAmount) {
        descendantAmountTemp.push(parseFloat(descendantAmount[val]));
    }

    var option = {
        title: {
            text: "分团TOP",
            subtext: "不包括一期生、二期生",
            textStyle: {
                color: '#C0DAFF',
                fontSize: 24,
            },
            subtextStyle: {
                color: '#C0DAFF',
                fontSize: 15,
                fontFamily: "楷体",
            },
            x: "center",  // Title align
            y: 10,        // Distance from div top.
        },
        tooltip: {
            formatter: function (params) {
                return params["name"] + " " + parseFloat(params["value"]).toFixed(2)
            }
        },
        visualMap: [{//渐变色
            show: false,
            type: 'continuous',
            min: 0,
            max: 30000,
            range: [0, 30000],
            calculable: true,
            color: ['#fc2a01', '#ffcc00', '#54ff00'],
        }],
        xAxis: {
            data: descendantList,
            axisLine: {
                lineStyle: {
                    color: '#C0DAFF'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 15
                }
            },
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: '#C0DAFF'
                }
            },
            splitLine:{
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: 15
                }
            },
        },
        grid: {
            // x, y, x2, y2: axis distance from div
            x: 90,
            y: 80,
            x2: 20,
            y2: 50,
        },
        series: [
            {
                name: '集资总额',
                type: 'bar',
                data: descendantAmountTemp,
                stack: "总量",
                label: {
                    normal: {
                        show: false,
                        position: 'insideTop'
                    }
                },
                itemStyle: {
                    normal: {
                        // color: function (params) {
                        //     var colorList = ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
                        //     return colorList[params.dataIndex]
                        // }

                        // Color gradient.
                        //
                        // color: {
                        //     type: 'linear',
                        //     x: 1,
                        //     y: 0,
                        //     x2: 0,
                        //     y2: 0.5,
                        //     colorStops: [{
                        //         offset: 0, color: '#ff0000' // 0% 处的颜色
                        //     }, {
                        //         offset: 1, color: '#00ff00' // 100% 处的颜色
                        //     }],
                        //     global: false // 缺省为 false
                        // }
                    }
                }
            },
        ]
    };

    descendantChart.hideLoading();
    descendantChart.setOption(option, true);
}


/* Ajax upgrade */
setInterval(function () {
    $.ajax({
        url: '',
        contentType: 'application/json',
        dataType: 'json',
        type: "GET",
        success: function (data) {
            descendantList = $.parseJSON(data["descendant_list"]);
            descendantAmount = $.parseJSON(data["descendant_amount"]);
        }
    });

    // Descendant
    descendantControl(descendantList, descendantAmount);

}, ajaxTime);   // ajax every ajaxTime millisecond