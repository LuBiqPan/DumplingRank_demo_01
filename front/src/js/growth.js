
var dom = document.getElementById("growth-wrapper");
var myChart = echarts.init(dom);
var app = {};
option = null;
var base = +new Date(2019, 1, 1);   // Start of sampling time.
var oneDay = 24 * 3600 * 1000;
var oneMinute = 60 * 1000;
var date = [];

var data = [1];
var my_data = [0];
var growthDataSNH48 = [0];
var growthDataBEJ48 = [0];
var growthDataGNZ48 = [0];
var now = new Date(base);

var sampleTime;
var growthData = 0;

var growthTheater, growthTeam;

var valSNH48, valBEJ48, valGNZ48;
var valSII, valNII, valHII, valX, valB, valE, valJ, valG, valNIII, valZ;


function addData(shift, growthData, sampleTime) {
    // now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
    now = [now.getMonth() + 1, now.getDate()].join('-');
    // date.push(now);
    date.push(sampleTime);

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
    // my_data.push(growthData);
    my_data.push(growthData * Math.random());
    // my_data.push(growthData * Math.random());
    // growthDataSNH48.push(growthData * Math.random());
    // growthDataBEJ48.push(growthData * Math.random());
    // growthDataGNZ48.push(growthData * Math.random());
    // console.log(growthDataSNH48);
    // console.log(my_data);
/*%%%%%%%%%%%%%%%*/

    // data.push(1 + data[data.length - 1]);
    data.push(1 + data[data.length - 1]);

    if (shift) {
        date.shift();
        // console.log(date);
        data.shift();
        // console.log(data);
        my_data.shift();
        // growthDataSNH48.shift();
        // growthDataBEJ48.shift();
        // growthDataGNZ48.shift();
        // console.log(my_data);
    }

    now = new Date(+new Date(now) + oneDay);
    // now = new Date(+new Date(now) + oneMinute);
}

for (var i = 1; i < 20; i++) {
    addData();
}

option = {
    tooltip: {
        trigger: 'axis',
        showContent: true,     // Do not show content.
        axisPointer: {
            type: 'cross'
        },
        backgroundColor: 'rgba(192, 218, 255, 0.5)',
        // borderWidth: 1,
        // borderColor: '#ccc',
        // padding: 10,
        textStyle: {
            color: '#000'
        },
        // position: function (pos, params, el, elRect, size) {
        //     var obj = {top: 10};
        //     obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        //     return obj;
        // },
        extraCssText: 'width: 170px'
    },
    title:{
        text: '集资增长',
        textStyle: {
            color: '#C0DAFF',
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
        axisLine: {
            lineStyle: {
                // X axis color
                color: '#C0DAFF'
            }
        },
    },
    yAxis: {
        boundaryGap: [0, '50%'],
        type: 'value',
        splitLine:{
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#C0DAFF'
            }
        }
    },
    dataZoom: [
        {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0,
            end: 100
        },
        {
            type: 'inside',
            xAxisIndex: [0],
            start: 1,
            end: 35
        },
    ],
    grid: {
        // x, y, x2, y2: axis distance from div
        x: 60,
        y: 50,
        x2: 18,
        y2: 70,
    },
    series: [
        // Total
        {
            name:'集资总额',
            type:'line',
            smooth:true,
            symbol: 'none',
            stack: 'a',
            areaStyle: {
                normal: {}
            },
            // data: data
            data: my_data,
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
        // SNH48
        {
            name:'SNH48',
            type:'line',
            smooth:true,
            symbol: 'none',
            stack: 'a',
            areaStyle: {
                normal: {}
            },
            data: growthDataSNH48,
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
            smooth:true,
            symbol: 'none',
            stack: 'a',
            areaStyle: {
                normal: {}
            },
            data: growthDataBEJ48,
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
            smooth:true,
            symbol: 'none',
            stack: 'a',
            areaStyle: {
                normal: {}
            },
            data: growthDataBEJ48,
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
    myChart.setOption(option, true);
}


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
            sampleTime = $.parseJSON(data["growth_total"])["sample_time"];
            growthData = $.parseJSON(data["growth_total"])["amount_total"];
            // console.log(growthData);
            growthTheater = $.parseJSON(data["growth_theater"]);
            growthTeam = $.parseJSON(data["growth_team"]);
            // console.log(growthTeam);
        }
    });

    // growth
    addData(true, growthData, sampleTime);
    myChart.setOption({
        xAxis: {
            // data: date
            data: date
        },
        series: [
            {name:'集资总额', data: my_data},
            // {name:'SNH48', data: growthDataSNH48},
            // {name:'BEJ48', data: growthDataBEJ48},
            // {name:'GNZ48', data: growthDataGNZ48},
        ]
    });

}, ajaxTime);   // ajax every ajaxTime millisecond

