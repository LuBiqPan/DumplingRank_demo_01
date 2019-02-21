
var dom = document.getElementById("inner-group");
var myChart = echarts.init(dom);
var app = {};
option = null;
var base = +new Date(2014, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [1];
var my_data = [0];
var growthDataSNH48 = [0];
var growthDataBEJ48 = [0];
var growthDataGNZ48 = [0];
var now = new Date(base);

var growthData = 0;

var growthTheater, growthTeam;

var valSNH48, valBEJ48, valGNZ48;
var valSII, valNII, valHII, valX, valB, valE, valJ, valG, valNIII, valZ;


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
    // my_data.push(growthData);
    my_data.push(growthData * Math.random());
    growthDataSNH48.push(growthData * Math.random());
    growthDataBEJ48.push(growthData * Math.random());
    growthDataGNZ48.push(growthData * Math.random());
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
        growthDataSNH48.shift();
        growthDataBEJ48.shift();
        growthDataGNZ48.shift();
        // console.log(my_data);
    }

    now = new Date(+new Date(now) + oneDay);
}

for (var i = 1; i < 10; i++) {
    addData();
}

option = {
    tooltip: {
        trigger: 'axis',
        showContent: false,     // Do not show content.
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
        }
    },
    yAxis: {
        boundaryGap: [0, '100%'],
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
    grid: {
        // x, y, x2, y2: axis distance from div
        x: 60,
        y: 50,
        x2: 18,
        y2: 50,
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


// Total percentage (theater)
function amountPercentage(
    valSNH48, valBEJ48, valGNZ48,
    valSII, valNII, valHII, valX, valB, valE, valJ, valG, valNIII, valZ
) {
    var percentageChart = echarts.init(document.getElementById("inner-percentage"));

    option = {
        title:{
            text: '集资比例',
            textStyle: {color: '#C0DAFF'},
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['SII','NII','HII','X','B','E','J','G','N','Z']
        // },
        series: [
            {
                // name:'访问来源',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '45%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:valSNH48, name:'SNH48', itemStyle:{color:'#00b6de'}},
                    {value:valBEJ48, name:'BEJ48', itemStyle:{color:'#ff4083'}},
                    {value:valGNZ48, name:'GNZ48', itemStyle:{color:'#9FBF40'}},
                ]
            },
            {
                //name:'访问来源',
                type:'pie',
                radius: ['54%', '75%'],
                label: {
                    normal: {
                        // formatter: '{b|{b} }{c}{per|{d}%}  ',
                        // backgroundColor: '#eee',
                        // borderColor: '#aaa',
                        // borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 22,
                                align: 'center'
                            },
                            // abg: {
                            //     backgroundColor: '#333',
                            //     width: '100%',
                            //     align: 'right',
                            //     height: 22,
                            //     borderRadius: [4, 4, 0, 0]
                            // },
                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                fontSize: 16,
                                lineHeight: 33
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },
                data:[
                    {value:valSII, name:'SII', itemStyle:{color:'#00b6de'}},
                    {value:valNII, name:'NII', itemStyle:{color:'#9e57b4'}},
                    {value:valHII, name:'HII', itemStyle:{color:'#f8941d'}},
                    {value:valX, name:'X', itemStyle:{color:'#b1d61b'}},
                    {value:valB, name:'B', itemStyle:{color:'#ff4083'}},
                    {value:valE, name:'E', itemStyle:{color:'#0cc8c3'}},
                    {value:valJ, name:'J', itemStyle:{color:'#006ab7'}},
                    {value:valG, name:'G', itemStyle:{color:'#9FBF40'}},
                    {value:valNIII, name:'NIII', itemStyle:{color:'#ffe249'}},
                    {value:valZ, name:'Z', itemStyle:{color:'#ea617b'}},
                ]
            }
        ]
    };
    percentageChart.setOption(option, true);
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
            growthData = $.parseJSON(data["growth_total"])["amount_total"];
            // console.log(growthData);
            growthTheater = $.parseJSON(data["growth_theater"]);
            growthTeam = $.parseJSON(data["growth_team"]);
            // console.log(growthTeam);

            /* Percentage */
            valSNH48 = growthTheater[0]["amount_theater"];
            valBEJ48 = growthTheater[1]["amount_theater"];
            valGNZ48 = growthTheater[2]["amount_theater"];

            valSII  = growthTeam[0]["amount_team"];
            valNII  = growthTeam[1]["amount_team"];
            valHII  = growthTeam[2]["amount_team"];
            valX    = growthTeam[3]["amount_team"];
            valB    = growthTeam[4]["amount_team"];
            valE    = growthTeam[5]["amount_team"];
            valJ    = growthTeam[6]["amount_team"];
            valG    = growthTeam[7]["amount_team"];
            valNIII = growthTeam[8]["amount_team"];
            valZ    = growthTeam[9]["amount_team"];
        }
    });

    // growth
    addData(true, growthData);
    myChart.setOption({
        xAxis: {
            data: date
        },
        series: [
            {name:'集资总额', data: my_data},
            {name:'SNH48', data: growthDataSNH48},
            {name:'BEJ48', data: growthDataBEJ48},
            {name:'GNZ48', data: growthDataGNZ48},
        ]
    });

    // percentage
    amountPercentage(
        valSNH48, valBEJ48, valGNZ48,
        valSII, valNII, valHII, valX, valB, valE, valJ, valG, valNIII, valZ)

}, ajaxTime);   // ajax every ajaxTime millisecond


/****************************************************************/


//
var hotPK = function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('inner-pk'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '热门PK',
            textStyle: {
                color: '#C0DAFF'
            }
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