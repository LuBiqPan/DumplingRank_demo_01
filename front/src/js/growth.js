
var dom = document.getElementById("growth-wrapper");
var myChart = echarts.init(dom);
option = null;
var base = +new Date(2019, 1, 1);   // Start of sampling time.
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [1];
var growthDataTotal = [0];
var growthDataSNH48 = [0];
var growthDataBEJ48 = [0];
var growthDataGNZ48 = [0];
var growthDataSII = [0];
var growthDataNII = [0];
var growthDataHII = [0];
var growthDataX = [0];
var growthDataB = [0];
var growthDataE = [0];
var growthDataJ = [0];
var growthDataG = [0];
var growthDataNIII = [0];
var growthDataZ = [0];
var now = new Date(base);

var sampleTime;
var st;
var growthTotal = 0;
var growthTheater, growthTeam;


function addData(shift, sampleTime, growthTotal, growthTheater, growthTeam) {
    console.log(growthTotal);
    if (typeof sampleTime === 'string') {
        // sample time
        date.push(sampleTime.substring(5, 19)); // Time format: "month-day hh:mm"

        // total
        growthDataTotal.push(growthTotal * Math.random());
        // theater
        growthDataSNH48.push(growthTheater[0]["amount_theater"] * Math.random());
        growthDataBEJ48.push(growthTheater[1]["amount_theater"] * Math.random());
        growthDataGNZ48.push(growthTheater[2]["amount_theater"] * Math.random());
        // team
        growthDataSII.push(growthTeam[0]["amount_team"]);

        if (shift) {
            date.shift();

            growthDataTotal.shift();
            growthDataSNH48.shift();
            growthDataBEJ48.shift();
            growthDataGNZ48.shift();
            growthDataSII.shift();
        }
    } else {
        date.push(0);

        growthDataTotal.push(0);
        growthDataSNH48.push(0);
        growthDataBEJ48.push(0);
        growthDataGNZ48.push(0);
        growthDataSII.push(0);
    }
}

for (var i = 1; i < 50; i++) {
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
        textStyle: {
            color: '#000'
        },
        extraCssText: 'width: 170px'
    },

    title:{
        text: '集资增长',
        textStyle: {
            color: '#C0DAFF',
        },
    },

    legend:{
        type: 'plain',
        x: 'left',
        left: 80,
        top: 40,
        textStyle:{
            color: '#eeeeee',
            fontSize: 15,
        }
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
        type: 'value',
        boundaryGap: false,
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
            smooth:false,
            symbol: 'none',
            areaStyle: {
                normal: {}
            },
            data: growthDataTotal,
            itemStyle: {
                normal: {
                    color: '#aaaaaa',
                    borderColor: '#aaaaaa',
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
            smooth:false,
            symbol: 'none',
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
            smooth:false,
            symbol: 'none',
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
            smooth:false,
            symbol: 'none',
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
        // Team SII
        {
            name:'Team SII',
            type:'line',
            smooth:false,
            symbol: 'none',
            areaStyle: {
                normal: {}
            },
            data: growthDataSII,
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
    ]
};

if (option && typeof option === "object") {
    option.legend.selected = {'Team SII': false};
    myChart.setOption(option, true);
}


/* Ajax upgrade */
var ajaxTime = 1000;    // ajax cycle in millisecond
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
            // growth
            sampleTime = $.parseJSON(data["growth_total"])["sample_time"];

            growthTotal = $.parseJSON(data["growth_total"])["amount_total"];
            growthTheater = $.parseJSON(data["growth_theater"]);
            growthTeam = $.parseJSON(data["growth_team"]);
        }
    });

    // growth
    addData(true, sampleTime, growthTotal, growthTheater, growthTeam);
    myChart.setOption({
        xAxis: {
            data: date
        },
        series: [
            {name:'集资总额', data: growthDataTotal},
            {name:'SNH48', data: growthDataSNH48},
            {name:'BEJ48', data: growthDataBEJ48},
            {name:'GNZ48', data: growthDataGNZ48},
            {name:'Team SII', data: growthDataSII},
        ]
    });

}, ajaxTime);   // ajax every ajaxTime millisecond

