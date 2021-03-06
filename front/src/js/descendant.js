
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
            text: "后辈榜",
            subtext: "不包括一期生、二期生",
            textStyle: {
                color: '#C0DAFF',
                fontSize: 24,
            },
            subtextStyle: {
                color: '#C0DAFF',
                fontSize: 15,
                // fontFamily: "HanWang KaiBold-Gb5",
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
            max: 300000,
            range: [0, 300000],
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
            name: '单位：万元',
            nameGap: 15,
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
                },
                formatter: function (value, index) {
                    return value / 10000;
                }
            },
        },
        grid: {
            // x, y, x2, y2: axis distance from div
            x: 50,
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
                    }
                }
            },
        ]
    };

    descendantChart.hideLoading();
    descendantChart.setOption(option, true);
}


/* Ajax upgrade */
// setInterval(function () {
//     $.ajax({
//         url: '',
//         contentType: 'application/json',
//         dataType: 'json',
//         type: "GET",
//         success: function (data) {
//             // console.log(data);
//             descendantList = $.parseJSON(data["descendant_list"]);
//             descendantAmount = $.parseJSON(data["descendant_amount"]);
//         }
//     });
//
//     // Descendant
//     descendantControl(descendantList, descendantAmount);
//
// }, ajaxTime);   // ajax every ajaxTime millisecond


$(
    $.ajax({
        url: '',
        // url: '/api/descendant.php/',
        contentType: 'application/json',
        dataType: 'json',
        type: "GET",
        success: function (data) {
            // console.log(data);
            descendantList = $.parseJSON(data["descendant_list"]);
            descendantAmount = $.parseJSON(data["descendant_amount"]);
            descendantControl(descendantList, descendantAmount);
        }
    })
);