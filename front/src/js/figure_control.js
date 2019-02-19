
var dom = document.getElementById("inner-group");
var myChart = echarts.init(dom);
var app = {};
option = null;
var base = +new Date(2014, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [1];
var my_data = [0];
var now = new Date(base);

var growthData = 0;

var growthTheater;
var growthSNH48;
var growthBEJ48;
var growthGNZ48;


function addData(shift, growthData) {
    // now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
    now = [now.getMonth() + 1, now.getDate()].join('/');
    date.push(now);

/*%%%%%%%%%%%%%%%*/

    // $.ajax({
    //     url: '',
    //     contentType: 'application/json',
    //     dataType: 'json',
    //     type: 'GET',
    //     success: function (data) {
    //         // console.log(data);
    //         var raw = data["growth_total"];
    //         // console.log(raw);
    //         var realAmount = $.parseJSON(raw)["amount_total"];
    //         // console.log(realAmount);
    //         my_data.push(realAmount);
    //         console.log(my_data);
    //     }
    // });
    my_data.push(growthData);
    // console.log(my_data);
/*%%%%%%%%%%%%%%%*/

    data.push(1 + data[data.length - 1]);

    if (shift) {
        date.shift();
        // console.log(date);
        data.shift();
        // console.log(data);
        my_data.shift();
        // console.log(my_data);
    }

    now = new Date(+new Date(now) + oneDay);
}

for (var i = 1; i < 10; i++) {
    addData();
}

option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        boundaryGap: [0, '100%'],
        type: 'value'
    },
    series: [
        {
            name:'成交',
            type:'line',
            smooth:true,
            symbol: 'none',
            stack: 'a',
            areaStyle: {
                normal: {}
            },
            // data: data
            data: my_data
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


// Total percentage (theater)
// var totalPercentage = function () {
function totalPercentage (valSNH48, valBEJ48, valGNZ48) {
    var theaterPercentageChart = echarts.init(document.getElementById('inner-percentage'));

    var option = {
        title: {
            text: '集资分布',
            textStyle: {
                color: '#C0DAFF'
            }
        },
        series : [
            {
                name: '',
                type: 'pie',
                radius: '55%',
                data:[
                    {value:valSNH48, name:'SNH48', itemStyle: {color: '#00b6de'}},
                    {value:valBEJ48, name:'BEJ48', itemStyle: {color: '#EB4F74'}},
                    {value:valGNZ48, name:'GNZ48', itemStyle: {color: '#9FBF40'}},
                ],
                roseType: 'angle',
                label: {
                    emphasis: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 1)'
                        }
                    }
                },
                labelLine: {
                    emphasis: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 1)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        // Show label and data.
                        label: {
                            show: true,
                            formatter: '{b}({d}%)'
                        }
                    }
                }
            }
        ]
    };

    theaterPercentageChart.setOption(option);
}

// $(totalPercentage);

/* Ajax upgrade */
var ajaxTime = 5000;    // ajax cycle in millisecond
setInterval(function () {
    $.ajax({
        url: '',
        contentType: 'application/json',
        dataType: 'json',
        type: "GET",
        success: function (data, textStatus) {
            // console.log(data);
            i = 0;
            for (var val in data) {
                var rankInfo = data[val];
                // Translate rankInfo into json format.
                var rankInfoJson = $.parseJSON(rankInfo);
                // console.log(rankInfoJson);
                i++;    // rank
                for (var val in rankInfoJson) {
                    // console.log(rankInfoJson);
                    // Construct member field selector.
                    var memberSelector = "#tr-rank-" + i.toString() + " .rank-member";
                    // Construct real_amount field selector.
                    var totalAmountSelector = "#tr-rank-" + i.toString() + " .rank-account";
                    // Set value for member tag.
                    $(memberSelector).text(rankInfoJson["member"]);
                    // Set value for real_amount (total) tag.
                    $(totalAmountSelector).text(rankInfoJson["real_amount"]);
                    // Set value for amount total tag
                    $("#amount-total").text(rankInfoJson["amount_total"]);
                }
            }
            // Growth data (total).
            growthData = $.parseJSON(data["growth_total"])["amount_total"];
            // console.log(growthData);
            growthTheater = $.parseJSON(data["growth_theater"]);
            // console.log(growthTheater);
            growthSNH48 = growthTheater[0]["amount_theater"];
            growthBEJ48 = growthTheater[1]["amount_theater"];
            growthGNZ48 = growthTheater[2]["amount_theater"];
            console.log(growthSNH48, growthBEJ48, growthGNZ48);
        }
    });

    // growth
    addData(true, growthData);
    myChart.setOption({
        xAxis: {
            data: date
        },
        series: [{
            name:'成交',
            // data: data
            data: my_data
        }]
    });

    // percentage
    totalPercentage(growthSNH48, growthBEJ48, growthGNZ48);

}, ajaxTime);   // ajax every ajaxTime millisecond


/****************************************************************/


//
var hotPK = function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('inner-pk'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '热门PK'
        },
        tooltip: {},
        legend: {
            data:['集资总额']
        },
        xAxis: {
            data: ["李艺彤","黄婷婷","冯薪朵","陆婷","莫寒","赵粤"]
        },
        yAxis: {},
        series: [{
            name: '集资总额',
            type: 'bar',
            data: [1500, 1000, 400, 350, 250, 300]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
};

$(hotPK);