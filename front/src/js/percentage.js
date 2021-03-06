
var i;
var option = {};
var ajaxTime = 2000;    // ajax cycle in millisecond
var delayTime = 50;

var percentageChart = echarts.init(document.getElementById("percentage"));
var percentageByJoinTimeChart = echarts.init(document.getElementById("top-member"));

var memberAmount = {};
var restAmount = {};
var joinTimeAmount = {};

// Loading animation.
percentageByJoinTimeChart.showLoading({
  text: '正在加载，请稍后...',
  color: '#C0DAFF',
  textColor: '#C0DAFF',
  maskColor: 'rgba(255, 255, 255, 0.0)',
  zlevel: 0
});
percentageChart.showLoading({
  text: '正在加载，请稍后...',
  color: '#C0DAFF',
  textColor: '#C0DAFF',
  maskColor: 'rgba(255, 255, 255, 0.0)',
  zlevel: 0
});

/* Percentage by theater, team and member. */
function percentageControl(memberAmount, restAmount) {
    var data = [{

        // SNH48
        name: 'SNH48',
        itemStyle: {
            color: '#00b6de'
        },
        children: [{ // Team SII
            name: 'Team SII',
            itemStyle: {
                color: '#00b6de'
            },
            children: [{ // 莫寒
                name: '莫寒',
                value: parseFloat(memberAmount["莫寒"]),
                itemStyle: {
                    color: '#297CD7'
                }
            }, { // 许佳琪
                name: '许佳琪',
                value: parseFloat(memberAmount["许佳琪"]),
                itemStyle: {
                    color: '#FF093D'
                }
            }, { // 戴萌
                name: '戴萌',
                value: parseFloat(memberAmount["戴萌"]),
                itemStyle: {
                    color: '#F6BDC1'
                }
            }, { // 钱蓓婷
                name: '钱蓓婷',
                value: parseFloat(memberAmount["钱蓓婷"]),
                itemStyle: {
                    color: '#3A5BA5'
                }
            }, { // 吴哲晗
                name: '吴哲晗',
                value: parseFloat(memberAmount["吴哲晗"]),
                itemStyle: {
                    color: '#F6C5C6'
                }
            }, { // 孔肖吟
                name: '孔肖吟',
                value: parseFloat(memberAmount["孔肖吟"]),
                itemStyle: {
                    color: '#FF613C'
                }
            }, { // 张语格
                name: '张语格',
                value: parseFloat(memberAmount["张语格"]),
                itemStyle: {
                    color: '#FF0030'
                }
            }, { // 徐子轩
                name: '徐子轩',
                value: parseFloat(memberAmount["徐子轩"]),
                itemStyle: {
                    color: '#FFA899'
                }
            }, { // 其他
                name: '其他',
                value: parseFloat(restAmount["rest_SII"]),
                itemStyle: {
                    color: '#eeeeee'
                }
            }]
        }, { // Team NII
            name: 'Team NII',
            itemStyle: {
                color: '#9e57b4'
            },
            children: [{ // 周诗雨
                name: '周诗雨',
                value: parseFloat(memberAmount["周诗雨"]),
                itemStyle: {
                    color: '#FDF200'
                }
            }, { // 赵佳蕊
                name: '赵佳蕊',
                value: parseFloat(memberAmount["赵佳蕊"]),
                itemStyle: {
                    color: '#31B26B'
                }
            }, { // 谢妮
                name: '谢妮',
                value: parseFloat(memberAmount["谢妮"]),
                itemStyle: {
                    color: '#D9205E'
                }
            }, { // 张怡
                name: '张怡',
                value: parseFloat(memberAmount["张怡"]),
                itemStyle: {
                    color: '#0C7CE5'
                }
            }, { // 张雨鑫
                name: '张雨鑫',
                value: parseFloat(memberAmount["张雨鑫"]),
                itemStyle: {
                    color: '#ffb3b3'
                }
            }, { // 易嘉爱
                name: '易嘉爱',
                value: parseFloat(memberAmount["易嘉爱"]),
                itemStyle: {
                    color: '#D06479'
                }
            },{ // 其他
                name: '其他',
                value: parseFloat(restAmount["rest_NII"]),
                itemStyle: {
                    color: '#eeeeee'
                }
            }]
        }, { // Team HII
            name: 'Team HII',
            itemStyle: {
                color: '#f8941d'
            },
            children: [{ // 李艺彤
                name: '李艺彤',
                value: parseFloat(memberAmount["李艺彤"]),
                itemStyle: {
                    color: '#E60111'
                }
            }, { // 林思意
                name: '林思意',
                value: parseFloat(memberAmount["林思意"]),
                itemStyle: {
                    color: '#009441'
                }
            }, { // 姜杉
                name: '姜杉',
                value: parseFloat(memberAmount["姜杉"]),
                itemStyle: {
                    color: '#870000'
                }
            }, { // 费沁源
                name: '费沁源',
                value: parseFloat(memberAmount["费沁源"]),
                itemStyle: {
                    color: '#E7B3D2'
                }
            }, { // 沈梦瑶
                name: '沈梦瑶',
                value: parseFloat(memberAmount["沈梦瑶"]),
                itemStyle: {
                    color: '#CE50A7'
                }
            }, { // 许杨玉琢
                name: '许杨玉琢',
                value: parseFloat(memberAmount["许杨玉琢"]),
                itemStyle: {
                    color: '#009113'
                }
            }, { // 袁一琦
                name: '袁一琦',
                value: parseFloat(memberAmount["袁一琦"]),
                itemStyle: {
                    color: '#2E2928'
                }
            }, { // 张昕
                name: '张昕',
                value: parseFloat(memberAmount["张昕"]),
                itemStyle: {
                    color: '#AE014E'
                }
            }, { // 其他
                name: '其他',
                value: parseFloat(restAmount["rest_HII"]),
                itemStyle: {
                    color: '#eeeeee'
                }
            }]
        }, { // Team X
            name: 'Team X',
            itemStyle: {
                color: '#b1d61b'
            },
            children: [{ // 宋昕冉
                name: '宋昕冉',
                value: parseFloat(memberAmount["宋昕冉"]),
                itemStyle: {
                    color: '#FCC525'
                }
            }, { // 杨冰怡
                name: '杨冰怡',
                value: parseFloat(memberAmount["杨冰怡"]),
                itemStyle: {
                    color: '#AA302E'
                }
            }, { // 李星羽
                name: '李星羽',
                value: parseFloat(memberAmount["李星羽"]),
                itemStyle: {
                    color: '#EB7477'
                }
            }, { // 冯晓菲
                name: '冯晓菲',
                value: parseFloat(memberAmount["冯晓菲"]),
                itemStyle: {
                    color: '#E75398'
                }
            }, { // 其他
                name: '其他',
                value: parseFloat(restAmount["rest_X"]),
                itemStyle: {
                    color: '#eeeeee'
                }
            }]
        }]
    }, {

        // BEJ48
        name: 'BEJ48',
        itemStyle: {
            color: '#ff4083'
        },
        children: [{ // Team B
            name: 'Team B',
            itemStyle: {
                color: '#ff4083'
            },
            children: [{ // 段艺璇
                name: '段艺璇',
                value: parseFloat(memberAmount["段艺璇"]),
                itemStyle: {
                    color: '#FF9700'
                }
            }, { // 胡晓慧
                name: '胡晓慧',
                value: parseFloat(memberAmount["胡晓慧"]),
                itemStyle: {
                    color: '#F7A5A4'
                }
            }, { // 刘姝贤
                name: '刘姝贤',
                value: parseFloat(memberAmount["刘姝贤"]),
                itemStyle: {
                    color: '#EFCED0'
                }
            }, { // 其他
                name: '其他',
                value: parseFloat(restAmount["rest_B"]),
                itemStyle: {
                    color: '#eeeeee'
                }
            }]
        }, { // Team E
            name: 'Team E',
            itemStyle: {
                color: '#0cc8c3'
            },
            children: [{ // 苏杉杉
                name: '苏杉杉',
                value: parseFloat(memberAmount["苏杉杉"]),
                itemStyle: {
                    color: '#F29A03'
                }
            }, { // 刘胜男
                name: '刘胜男',
                value: parseFloat(memberAmount["刘胜男"]),
                itemStyle: {
                    color: '#FED737'
                }
            }, { // 陈倩楠
                name: '陈倩楠',
                value: parseFloat(memberAmount["陈倩楠"]),
                itemStyle: {
                    color: '#8B99CD'
                }
            }, { // 李梓
                name: '李梓',
                value: parseFloat(memberAmount["李梓"]),
                itemStyle: {
                    color: '#931211'
                }
            }, { // 其他
                name: '其他',
                value: parseFloat(restAmount["rest_E"]),
                itemStyle: {
                    color: '#eeeeee'
                }
            }]
        }, {
            // Team J
            name: 'Team J',
            itemStyle: {
                color: '#006ab7'
            },
            children: [{ // 韩家乐
                name: '韩家乐',
                value: parseFloat(memberAmount["韩家乐"]),
                itemStyle: {
                    color: '#F5B5B1'
                }
            }, { // 张怀瑾
                name: '张怀瑾',
                value: parseFloat(memberAmount["张怀瑾"]),
                itemStyle: {
                    color: '#E9D19C'
                }
            }, { // 黄恩茹
                name: '黄恩茹',
                value: parseFloat(memberAmount["黄恩茹"]),
                itemStyle: {
                    color: '#FEE0F9'
                }
            }, { // 柏欣妤
                name: '柏欣妤',
                value: parseFloat(memberAmount["柏欣妤"]),
                itemStyle: {
                    color: '#232F3A'
                }
            }, { // 其他
                name: '其他',
                value: parseFloat(restAmount["rest_J"]),
                itemStyle: {
                    color: '#eeeeee'
                }
            }]
        }]
    }, {

        //GNZ48
        name: 'GNZ48',
        itemStyle: {
            color: '#9FBF40'
        },
        children: [{ // Team G
            name: 'Team G',
            itemStyle: {
                color: '#9FBF40'
            },
            children: [{ // 谢蕾蕾
                name: '谢蕾蕾',
                value: parseFloat(memberAmount["谢蕾蕾"]),
                itemStyle: {
                    color: '#ffb6bd'
                }
            }, { // 陈珂
                name: '陈珂',
                value: parseFloat(memberAmount["陈珂"]),
                itemStyle: {
                    color: '#FADB2E'
                }
            }, { // 徐楚雯
                name: '徐楚雯',
                value: parseFloat(memberAmount["徐楚雯"]),
                itemStyle: {
                    color: '#61C4C0'
                }
            }, { // 张琼予
                name: '张琼予',
                value: parseFloat(memberAmount["张琼予"]),
                itemStyle: {
                    color: '#005caf'
                }
            }, { // 李姗姗
                name: '李姗姗',
                value: parseFloat(memberAmount["李姗姗"]),
                itemStyle: {
                    color: '#68AFDE'
                }
            }, { // 其他
                name: '其他',
                value: parseFloat(restAmount["rest_G"]),
                itemStyle: {
                    color: '#eeeeee'
                }
            }]
        }, { // Team NIII
            name: 'Team NIII',
            itemStyle: {
                color: '#ffe249'
            },
            children: [{ // 郑丹妮
                name: '郑丹妮',
                value: parseFloat(memberAmount["郑丹妮"]),
                itemStyle: {
                    color: '#F6EABD'
                }
            }, { // 刘力菲
                name: '刘力菲',
                value: parseFloat(memberAmount["刘力菲"]),
                itemStyle: {
                    color: '#8DC41E'
                }
            }, { // 唐莉佳
                name: '唐莉佳',
                value: parseFloat(memberAmount["唐莉佳"]),
                itemStyle: {
                    color: '#5F4A8A'
                }
            }, { // 左婧媛
                name: '左婧媛',
                value: parseFloat(memberAmount["左婧媛"]),
                itemStyle: {
                    color: '#653B8C'
                }
            }, { // 卢静
                name: '卢静',
                value: parseFloat(memberAmount["卢静"]),
                itemStyle: {
                    color: '#C0DDEE'
                }
            }, { // 其他
                name: '其他',
                value: parseFloat(restAmount["rest_NIII"]),
                itemStyle: {
                    color: '#eeeeee'
                }
            }]
        }, { // Team Z
            name: 'Team Z',
            itemStyle: {
                color: '#ea617b'
            },
            children: [{ // 杨媛媛
                name: '杨媛媛',
                value: parseFloat(memberAmount["杨媛媛"]),
                itemStyle: {
                    color: '#BF0204'
                }
            }, { // 梁婉琳
                name: '梁婉琳',
                value: parseFloat(memberAmount["梁婉琳"]),
                itemStyle: {
                    color: '#A93539',
                }
            }, { // 龙亦瑞
                name: '龙亦瑞',
                value: parseFloat(memberAmount["龙亦瑞"]),
                itemStyle: {
                    color: '#B484B7'
                }
            }, { // 方琪
                name: '方琪',
                value: parseFloat(memberAmount["方琪"]),
                itemStyle: {
                    color: '#B484B7'
                }
            }, { // 其他
                name: '其他',
                value: parseFloat(restAmount["rest_Z"]),
                itemStyle: {
                    color: '#eeeeee'
                }
            }]
        }]
    }];

    var option = {
        title: {
            text: '集资分布',
            subtext: '点击圆环查看各分团/队伍的集资分布详情 点击圆心返回上一级',
            textStyle: {
                fontSize: 24,
                align: 'center',
                color: '#C0DAFF',
            },
            subtextStyle: {
                align: 'center',
                color: '#C0DAFF',
                fontSize: 15,
                // fontFamily: "楷体",
            },
            x: "center",  // Title align
            y: 10,        // Distance from div top.
        },
        tooltip: {
            trigger: 'item',
            // formatter: "{b}: {c} ({d}%)",
            formatter: function (params) {
                // Theater.
                if (params.name === "SNH48" || params.name === "BEJ48" || params.name === "GNZ48") {
                    return params.name + "<br/>"
                           + "集资总额：" + params.value.toFixed(2) + "<br/>"
                           + "团间比例：" + ((params.value/params.treePathInfo[0].value)*100).toFixed(1) + "%";
                // Team.
                } else if (params.name === "Team SII" || params.name === "Team NII" || params.name === "Team HII" || params.name === "Team X" ||
                           params.name === "Team B"   || params.name === "Team E"   || params.name === "Team J" ||
                           params.name === "Team G"   || params.name === "Team NIII"|| params.name === "Team Z") {
                    return params.name + "<br/>"
                           + "集资总额&nbsp;&nbsp;&nbsp;：" + params.value.toFixed(2) + "<br/>"
                           + "分团内比例：" + ((params.value/params.treePathInfo[1].value)*100).toFixed(1) + "%" + "<br/>"
                           + "队伍间比例：" + ((params.value/params.treePathInfo[0].value)*100).toFixed(1) + "%";
                // Member/other.
                } else if (params.treePathInfo[2]) {
                    return params.name + "<br/>"
                       + "集资总额&nbsp;&nbsp;&nbsp;：" + params.value.toFixed(2) + "<br/>"
                       + "队伍内比例：" + ((params.value/params.treePathInfo[2].value)*100).toFixed(1) + "%" + "<br/>"
                       + "分团内比例：" + ((params.value/params.treePathInfo[1].value)*100).toFixed(1) + "%" + "<br/>"
                       + "全团比例&nbsp;&nbsp;&nbsp;：" + ((params.value/params.treePathInfo[0].value)*100).toFixed(1) + "%";
                } else {
                    return null;
                }
            }
        },
        series: {
            type: 'sunburst',
            highlightPolicy: 'ancestor',
            data: data,
            itemStyle: {
                color: '#C0DAFF',
                borderWidth: 0,
            },
            // radius: [0, '95%'],
            radius: [0, '80%'],
            center: ['50%', '55%'],
            sort: null,
            levels: [{}, {
                r0: '10%',
                r: '30%',
                itemStyle: {
                    borderWidth: 3
                },
                label: {
                    rotate: 'tangential'
                }
            }, {
                r0: '35%',
                r: '60%',
                itemStyle: {
                    borderWidth: 2
                },
                label: {
                    align: 'right'
                }
            }, {
                r0: '65%',
                r: '70%',
                label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                },
                itemStyle: {
                    borderWidth: 1
                }
            }]
        },
        textStyle: {
            color: '#C0DAFF',
            textBorderColor: 'transparent',
        }
    };

    percentageChart.hideLoading();
    percentageChart.setOption(option, true);
}


/* Percentage by join time. */
function percentageByJoinTime(joinTimeAmount) {

    var option = {
        title : {
            text: '集资分布',
            subtext: '按加入所属划分',
            textStyle: {
                fontSize: 24,
                align: 'center',
                color: '#C0DAFF',
            },
            subtextStyle: {
                align: 'center',
                color: '#C0DAFF',
                fontSize: 15,
                // fontFamily: "楷体",
            },
            x: "center",  // Title align
            y: 10,        // Distance from div top.
        },
        // tooltip : {
        //     // trigger: 'item',
        //     formatter: "{b} : {c} ({d}%)"
        // },
        calculable : true,
        series : [
            {
                name:'半径模式',
                type:'pie',
                radius : [20, 150],
                center : ['50%', '50%'],
                roseType : 'radius',
                label: {
                    normal: {
                        show: true,
                        // formatter: '{b}\n{c} ({d}%)'
                        formatter: function (params) {
                            return params["name"]+"\n"+"集资总额："+params["value"].toFixed(2)+"\n"+"集资比例："+params["percent"].toFixed(2)+"%"
                        },
                        fontSize: 15,
                        color: "#C0DAFF"
                    },
                    emphasis: {
                        show: true
                    },
                },
                labelLine: {

                    normal: {
                        show: true,
                        length: 10,
                        length2: 5,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {
                        // value:parseFloat(joinTimeAmount["SNH48一期生"]),
                        value:parseFloat(joinTimeAmount["1001"]),
                        name:'一期生',
                        itemStyle: {color: '#297CD7'}   // 莫寒
                    },
                    {
                        // value:parseFloat(joinTimeAmount["SNH48二期生"]),
                        value:parseFloat(joinTimeAmount["1002"]),
                        name:'二期生',
                        itemStyle: {color: '#E60111'}   // 李艺彤
                    },
                    {
                        // value:parseFloat(joinTimeAmount["SNH48三期生"]),
                        value:parseFloat(joinTimeAmount["1003"]),
                        name:'三期生',
                        itemStyle: {color: '#ffb3b3'}   // 张雨鑫
                    },
                    {
                        // value:parseFloat(joinTimeAmount["SNH48四期生"]),
                        value:parseFloat(joinTimeAmount["1004"]),
                        name:'四期生',
                        itemStyle: {color: '#FCC525'}   // 宋昕冉
                        // itemStyle: {color: '#EF802C'}   // 宋昕冉
                    },
                    {
                        // value:parseFloat(joinTimeAmount["SNH48五期生"]),
                        value:parseFloat(joinTimeAmount["1005"]),
                        name:'五期生',
                        itemStyle: {
                            // Color gradient.
                            // color: new echarts.graphic.LinearGradient(
                            //     0, 0, 0, 1,
                            //     [
                            //         {offset: 0, color: '#00ff00'},
                            //         {offset: 0.5, color: '#ff4083'},
                            //         {offset: 1, color: '#9FBF40'},
                            //     ]
                            // )
                            color: '#ffb6bd'            // 谢蕾蕾
                        }
                    },
                    {
                        // value:parseFloat(joinTimeAmount["SNH48六期生"]),
                        value:parseFloat(joinTimeAmount["1006"]),
                        name:'六期生',
                        itemStyle: {
                            // Color gradient.
                            // color: new echarts.graphic.LinearGradient(
                            //     0, 0, 0, 1,
                            //     [
                            //         {offset: 0, color: '#00b6de'},
                            //         {offset: 0.5, color: '#ffe249'},
                            //         {offset: 1, color: '#0cc8c3'},
                            //     ]
                            // )
                            color: '#F29A03'            // 苏杉杉
                        }
                    },
                    {
                        value:parseFloat(joinTimeAmount["其他"]),
                        name:'其他',
                        itemStyle: {color: '#00b6de'}
                    },
                ]
            },
        ]
    };

    percentageByJoinTimeChart.hideLoading();
    percentageByJoinTimeChart.setOption(option, true);
}


$(
    $.ajax({
        // url: '/percentage/',
        url: '/api/percentage.php/',
        contentType: 'application/json',
        dataType: 'json',
        type: "GET",
        success: function (data) {
            memberAmount = $.parseJSON(data["member_amount"]);
            restAmount = $.parseJSON(data["rest_amount"]);
            joinTimeAmount = $.parseJSON(data["join_time_amount"]);
            setTimeout(function () {
                percentageByJoinTime(joinTimeAmount);
                percentageControl(memberAmount, restAmount);
            }, delayTime);
        }
    })
);

