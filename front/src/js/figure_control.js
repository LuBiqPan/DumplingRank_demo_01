
// var pkMember = [];
// var pkAmount = [];
// var pkAmountRatio;
// var pkTitle;

// var growthChart = echarts.init(document.getElementById("inner-group"));
var percentageChart = echarts.init(document.getElementById("inner-percentage"));
// var pkChart = echarts.init(document.getElementById("pk"));

option = null;
var base = +new Date(2014, 9, 3);

var date = [0];

var data = [1];

var sampleTime;
var growthDataTotal = [0];
var growthDataSNH48 = [0];
var growthDataBEJ48 = [0];
var growthDataGNZ48 = [0];
var now = new Date(base);


var growthTotal, growthTheater, growthTeam, growthMember;

var valSNH48, valBEJ48, valGNZ48;
var valSII, valNII, valHII, valX, valB, valE, valJ, valG, valNIII, valZ;


percentageChart.showLoading({
  text: '正在加载，请稍后...',
  color: '#C0DAFF',
  textColor: '#C0DAFF',
  maskColor: 'rgba(255, 255, 255, 0.0)',
  zlevel: 0
});
// pkChart.showLoading({
//   text: '正在加载，请稍后...',
//   color: '#C0DAFF',
//   textColor: '#C0DAFF',
//   maskColor: 'rgba(255, 255, 255, 0.0)',
//   zlevel: 0
// });

$(document).ready(function () {
    var screenWidth = $(window).width();
    if (screenWidth <= 600) {
        console.log("Mobile");
        $(".left-wrapper").hide();
        $(".right-wrapper").hide();
    } else {
        $(".left-wrapper").show();
        $(".right-wrapper").show();
    }
});


// function addData(shift, sampleTime, growthTotal, growthTheater) {
//     if (typeof sampleTime === 'string') {
//         // sample time
//         date.push(sampleTime.substring(5, 16)); // Time format: "month-day hh:mm"
//         // total
//         growthDataTotal.push(growthTotal);
//         // theater
//         growthDataSNH48.push(growthTheater[0]["amount_theater"]);
//         growthDataBEJ48.push(growthTheater[1]["amount_theater"]);
//         // growthDataGNZ48.push(growthTheater[2]["amount_theater"] * Math.random());
//         growthDataGNZ48.push(growthTheater[2]["amount_theater"]);
//
//         if (shift) {
//             date.shift();
//
//             growthDataTotal.shift();
//             growthDataSNH48.shift();
//             growthDataBEJ48.shift();
//             growthDataGNZ48.shift();
//         }
//     } else {
//         date.push(0);
//
//         growthDataTotal.push(0);
//         growthDataSNH48.push(0);
//         growthDataBEJ48.push(0);
//         growthDataGNZ48.push(0);
//     }
// }
//
// for (var i = 1; i < 10; i++) {
//     addData();
// }
//
// var option = {
//     tooltip: {
//         trigger: 'axis',
//         showContent: true,     // Do not show content.
//         formatter: function (params) { // toFixed(): show two decimals
//             return params[0]["seriesName"] + ": " + parseFloat(params[0].value).toFixed(2) + '<br>'
//                  + params[1]["seriesName"] + ": " + parseFloat(params[1].value).toFixed(2) + '<br>'
//                  + params[2]["seriesName"] + ": " + parseFloat(params[2].value).toFixed(2) + '<br>'
//                  + params[3]["seriesName"] + ": " + parseFloat(params[3].value).toFixed(2);
//         },
//         axisPointer: {
//             type: 'cross',
//             snap: true,
//             lineStyle: {
//                 type: 'dashed'
//             }
//         },
//         backgroundColor: 'rgba(192, 218, 255, 0.5)',
//         textStyle: {
//             color: '#000'
//         },
//         extraCssText: 'width: 170px'
//     },
//
//     title:{
//         text: '集资增长',
//         textStyle: {
//             color: '#C0DAFF',
//         },
//     },
//
//     legend:{
//         type: 'plain',
//         x: 'left',
//         left: 80,
//         top: 40,
//         inactiveColor: '#121A20',
//         textStyle:{
//             color: '#aaaaaa',
//             fontSize: 9,
//         },
//         selectedMode: false
//     },
//
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: date,
//         axisLine: {
//             lineStyle: {
//                 // X axis color
//                 color: '#C0DAFF'
//             }
//         },
//     },
//
//     yAxis: {
//         name: '单位：万元',
//         nameGap: 10,
//         type: 'value',
//         boundaryGap: false,
//         splitLine:{
//             show: false
//         },
//         axisLine: {
//             lineStyle: {
//                 color: '#C0DAFF'
//             }
//         },
//         axisLabel: {
//             formatter: function (value, index) {
//                 return value / 10000;
//             }
//         }
//     },
//
//     grid: {
//         // x, y, x2, y2: axis distance from div
//         x: 40,
//         y: 50,
//         x2: 10,
//         y2: 30,
//     },
//
//     series: [
//         // Total
//         {
//             name:'集资总额',
//             type:'line',
//             smooth:false,
//             symbol: 'circle',
//             areaStyle: {
//                 normal: {}
//             },
//             data: growthDataTotal,
//             lineStyle: {
//                 width: 3
//             },
//             itemStyle: {
//                 normal: {
//                     color: '#00b6de',
//                     borderColor: '#00b6de',
//                     areaStyle: {
//                         type: 'default',
//                         opacity: 0.0    //Color under lines.
//                     }
//                 }
//             },
//         },
//         // SNH48
//         {
//             name:'SNH48',
//             type:'line',
//             smooth:false,
//             symbol: 'circle',
//             areaStyle: {
//                 normal: {}
//             },
//             data: growthDataSNH48,
//             itemStyle: {
//                 normal: {
//                     color: '#00b6de',
//                     borderColor: '#00b6de',
//                     areaStyle: {
//                         type: 'default',
//                         opacity: 0.3    //Color under lines.
//                     }
//                 }
//             },
//         },
//         // BEJ48
//         {
//             name:'BEJ48',
//             type:'line',
//             smooth:false,
//             symbol: 'circle',
//             areaStyle: {
//                 normal: {}
//             },
//             data: growthDataBEJ48,
//             itemStyle: {
//                 normal: {
//                     color: '#ff4083',
//                     borderColor: '#ff4083',
//                     areaStyle: {
//                         type: 'default',
//                         opacity: 0.3    //Color under lines.
//                     }
//                 }
//             },
//         },
//         // GNZ48
//         {
//             name:'GNZ48',
//             type:'line',
//             smooth:false,
//             symbol: 'circle',
//             areaStyle: {
//                 normal: {}
//             },
//             data: growthDataBEJ48,
//             itemStyle: {
//                 normal: {
//                     color: '#9FBF40',
//                     borderColor: '#9FBF40',
//                     areaStyle: {
//                         type: 'default',
//                         opacity: 0.3    //Color under lines.
//                     }
//                 }
//             },
//         },
//     ]
// };
//
// if (option && typeof option === "object") {
//     growthChart.setOption(option, true);
// }


// Total percentage (theater)
function amountPercentage(
    valSNH48, valBEJ48, valGNZ48,
    valSII, valNII, valHII, valX, valB, valE, valJ, valG, valNIII, valZ
) {
    var option = {
        title:{
            text: '集资比例',
            textStyle: {color: '#C0DAFF'},
        },
        tooltip: {
            trigger: 'item',
            // formatter: "{b}: {c} ({d}%)"
            formatter: function (params) {
                return params["name"] + ": " + parseFloat(params["value"]).toFixed(2) + " (" + params["percent"].toFixed(1) + "%)";
            }
        },
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
                        borderRadius: 4,
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 22,
                                align: 'center'
                            },
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

    percentageChart.hideLoading();
    percentageChart.setOption(option, true);
}


/* Hot PK */
// function hotPK(pkMember, pkAmount, pkAmountRatio, pkTitle) {
//     var option = {
//         title: {
//             text: "热门PK",
//             textStyle: {
//                 color: '#C0DAFF',
//                 fontSize: 20,
//             },
//             subtext: pkTitle,
//             subtextStyle: {
//                 fontSize: 20,
//                 color: '#C0DAFF',
//             }
//             // x: "center"  // title align
//         },
//         tooltip: {
//             formatter: function (params) {
//                 return params["name"] + "(" + params["seriesName"] + ")" + ": " + parseFloat(params["value"]).toFixed(2)
//             }
//         },
//         xAxis: {
//             data: pkMember,
//             axisLine: {
//                 lineStyle: {
//                     color: '#C0DAFF'
//                 }
//             },
//             // axisLabel: {
//             //     textStyle: {
//             //         fontSize: 20
//             //     }
//             // },
//         },
//         yAxis: {
//             axisLine: {
//                 lineStyle: {
//                     color: '#C0DAFF'
//                 }
//             },
//             splitLine:{
//                 show: false
//             },
//             // axisLabel: {
//             //     textStyle: {
//             //         fontSize: 20
//             //     }
//             // },
//         },
//         grid: {
//             // x, y, x2, y2: axis distance from div
//             x: 60,
//             y: 70,
//             x2: 10,
//             y2: 30,
//         },
//         series: [
//             {
//                 name: '实际集资',
//                 type: 'bar',
//                 data: pkAmount,
//                 stack: "总量",
//                 label: {
//                     normal: {
//                         show: false,
//                         position: 'insideTop'
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: function (params) {
//                             var colorList = ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
//                             return colorList[params.dataIndex]
//                         }
//                     }
//                 }
//             },
//             {
//                 name: '系数集资',
//                 type: 'bar',
//                 data: pkAmountRatio,
//                 stack: "总量",
//                 label: {
//                     normal: {
//                         show: false,
//                         position: 'insideTop'
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: '#888'
//                     }
//                 }
//             }
//         ]
//     };
//
//     pkChart.hideLoading();
//     pkChart.setOption(option, true);
// }


/* Ajax upgrade */
var ajaxTime = 2000;    // ajax cycle in millisecond
setInterval(function () {
    $.ajax({
        url: '',
        contentType: 'application/json',
        dataType: 'json',
        type: "GET",
        success: function (data) {
            i = 0;
            for (var val in data) {
                var rankInfo = data[val];
                // Translate rankInfo into json format.
                var rankInfoJson = $.parseJSON(rankInfo);
                i++;    // rank
                for (var val in rankInfoJson) {
                    // Construct member field selector.
                    var memberSelector = "#tr-rank-" + i.toString() + " .rank-member";
                    // Construct real_amount field selector.
                    var totalAmountSelector = "#tr-rank-" + i.toString() + " .rank-account";
                    // Construct vote field selector.
                    // var voteSelector = "#tr-rank-" + i.toString() + " .rank-vote";
                    var voteSelector = "#tr-rank-" + i.toString() + " .rank-vote .vote-div";

                    // Set value for member tag.
                    $(memberSelector).text(rankInfoJson["member"]);
                    // Set value for real_amount (total) tag.
                    $(totalAmountSelector).text(rankInfoJson["real_amount"]);
                    // Set value for vote (32 yuan per vote) tag.
                    $(voteSelector).text(rankInfoJson["vote"]);
                    // Set value for amount total tag
                    $("#amount-total").text(rankInfoJson["amount_total"]);
                }
            }
            // Growth
            sampleTime = $.parseJSON(data["growth_total"])["sample_time"];
            growthTotal = $.parseJSON(data["growth_total"])["amount_total"];
            growthTheater = $.parseJSON(data["growth_theater"]);
            growthTeam = $.parseJSON(data["growth_team"]);

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

            /* PK */
            // pkMember = $.parseJSON(data["pk1"])["pk_member"];
            // pkAmount = $.parseJSON(data["pk1"])["pk_amount"];
            // pkAmountRatio = $.parseJSON(data["pk1"])["pk_amount_ratio"];
            // pkTitle = $.parseJSON(data["pk1"])["pk_title"];
        }
    });

    // growth
    // addData(true, sampleTime, growthTotal, growthTheater);
    // growthChart.setOption({
    //     xAxis: {
    //         data: date
    //     },
    //     series: [
    //         {name:'集资总额', data: growthDataTotal},
    //         {name:'SNH48', data: growthDataSNH48},
    //         {name:'BEJ48', data: growthDataBEJ48},
    //         {name:'GNZ48', data: growthDataGNZ48},
    //     ]
    // });

    // percentage
    amountPercentage(
        valSNH48, valBEJ48, valGNZ48,
        valSII, valNII, valHII, valX, valB, valE, valJ, valG, valNIII, valZ);

    // pk
    // hotPK(pkMember, pkAmount, pkAmountRatio, pkTitle);

}, ajaxTime);   // ajax every ajaxTime millisecond

