var myChart = echarts.init(document.getElementById('main'));

var option1 = {
    baseOption: {
        timeline: {
            show: true,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function (params) {
                    return params.name + '年数据统计';
                }
            },
            autoPlay: true,
            currentIndex: 0,
            playInterval: 1000,
            label: {
                normal: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value}年',
                },
            },
            lineStyle: {
                color: '#2F4858',  // 线条颜色
            },
            itemStyle: {
                color: '#2F4858',  // 圆点颜色
                borderColor: '#fff',  // 圆点边框颜色
            },
            controlStyle: {
                show: true,
                itemSize: 15,
                itemGap: 5,
                normal: {
                    color: '#2F4858',  // 控制按钮颜色
                    borderColor: '#000000',  // 控制按钮边框颜色
                },
                emphasis: {
                    color: '#678E8C',  // 高亮状态下的控制按钮颜色
                    borderColor: '#678E8C',  // 高亮状态下的控制按钮边框颜色
                }
            },
            checkpointStyle: {
                color: '#2F4858',  // 播放过程中的节点颜色
                borderColor: '#fff',  // 播放过程中的节点边框颜色
            },
            progress: {
                lineStyle: {
                    color: '#2F4858',  // 播放过程中的线条颜色
                },
                itemStyle: {
                    color: '#2F4858',  // 播放过程中的圆点颜色
                    borderColor: '#fff',  // 播放过程中的圆点边框颜色
                },
            },
            data: [2018, 2019, 2020, 2021, 2022],
        },
        legend: {
            data: ['受灾面积', '成灾面积'],
            top: 4,
            right: '20%',
            textStyle: {
                color: '#000',
            },
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b}<br/>{a}: {c}千公顷',
            axisPointer: {
                type: 'shadow',
            }
        },

        grid: [{
            show: false,
            left: '4%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '46%',
        }, {
            show: false,
            left: '50.5%',
            top: 80,
            bottom: 60,
            width: '0%',
        }, {
            show: false,
            right: '4%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '46%',
        },],

        xAxis: [
            {
                type: 'value',
                inverse: true,
                max: 3600,
                interval: 600,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#B2B2B2',
                        fontSize: 12,
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#1F2022',
                        width: 1,
                        type: 'solid',
                    },
                },
            }, {
                gridIndex: 1,
                show: false,
            }, {
                gridIndex: 2,
                type: 'value',
                max: 3600,
                interval: 600,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#B2B2B2',
                        fontSize: 12,
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#1F2022',
                        width: 1,
                        type: 'solid',
                    },
                },
            },],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                margin: 8,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },
                formatter: function (value) {
                    // 将标签文字拆分为单个字符，并用换行符拼接
                    return value.split("").join("\n");
                }
            },
            data: myData,
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 10,
                },
                formatter: function (value) {
                    return value.split("").join("\n");
                }
            },
            data: myData.map(function (value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                margin: 8,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },
                formatter: function (value) {
                    return value.split("").join("\n");
                }
            },
            data: myData,
        },],
        series: [{
            name: '受灾面积',
            type: 'bar',
            data: [1200, 1400, 1300, 1500, 1600]
        }]
    },
    options: []
};

var option2 = {
    baseOption: {
        grid: {
            show: false,
            left: '4%',
            top: 60,
            bottom: "10%", // 调整底部间距
            containLabel: true,
        },
        timeline: {
            show: true,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function (params) {
                    return params.name + '年数据统计';
                }
            },
            autoPlay: true,
            currentIndex: 0,
            playInterval: 1000,
            label: {
                normal: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value}年',
                },
            },
            lineStyle: {
                color: '#2F4858',  // 线条颜色
            },
            itemStyle: {
                color: '#2F4858',  // 圆点颜色
                borderColor: '#fff',  // 圆点边框颜色
            },
            controlStyle: {
                show: true,
                itemSize: 15,
                itemGap: 5,
                normal: {
                    color: '#2F4858',  // 控制按钮颜色
                    borderColor: '#000000',  // 控制按钮边框颜色
                },
                emphasis: {
                    color: '#678E8C',  // 高亮状态下的控制按钮颜色
                    borderColor: '#678E8C',  // 高亮状态下的控制按钮边框颜色
                }
            },
            checkpointStyle: {
                color: '#2F4858',  // 播放过程中的节点颜色
                borderColor: '#fff',  // 播放过程中的节点边框颜色
            },
            progress: {
                lineStyle: {
                    color: '#2F4858',  // 播放过程中的线条颜色
                },
                itemStyle: {
                    color: '#2F4858',  // 播放过程中的圆点颜色
                    borderColor: '#fff',  // 播放过程中的圆点边框颜色
                },
            },
            data: [2018, 2019, 2020, 2021, 2022],
        },
        legend: {
            data: ['种植业总产值'],
            top: 4,
            right: '20%',
            textStyle: {
                color: '#000',
            },
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b}<br/>{a}: {c}亿元',
            axisPointer: {
                type: 'shadow',
            }
        },
        yAxis: [
            {
                type: 'value',
                max: 7000,
                interval: 1000,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#B2B2B2',
                        fontSize: 12,
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#1F2022',
                        width: 1,
                        type: 'solid',
                    },
                },
            }],
        xAxis: [{
            type: 'category',
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                margin: 8,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },
                formatter: function (value) {
                    return value.split("").join("\n");
                }
            },
            data: zhongzhiye_p,
        }],
        series: [{
            name: '种植业总产值',
            type: 'bar',
            data: [4000, 4500, 4800, 5000, 5200]
        }]
    },
    options: []
};

function updateChart(option) {
    myChart.setOption(option, true);
}

// 默认加载option1
updateChart(option1);

// 绑定按钮切换事件
document.getElementById('switchToOption1').addEventListener('click', function () {
    updateChart(option1);
});
document.getElementById('switchToOption2').addEventListener('click', function () {
    updateChart(option2);
});
