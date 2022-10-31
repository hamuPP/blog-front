export default {
  option1: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    color: ['#b189fc', '#ff8328', '#6599ff', '#35ff77', '#07fcff'],
    legend: {
      left: 10,
      top: 40,
      width: 100,
      itemGap: 20,
      itemWidth: 13,
      itemHeight: 13,
      orient: 'vertical',
      textStyle: {
        color: '#fff',
        fontSize: 18
      },
      data: [{
        name: '业务1',
        // icon: 'image://' + require('../../assets/img/centertwo/4.png')
      },
      {
        name: '业务2',
        // icon: 'image://' + require('../../assets/img/centertwo/3.png')
      },
      {
        name: '业务3',
        // icon: 'image://' + require('../../assets/img/centertwo/2.png')
      },
      {
        name: '业务4',
        // icon: 'image://' + require('../../assets/img/centertwo/1.png')
      },
      {
        name: '业务5',
        // icon: 'image://' + require('../../assets/img/centertwo/5.png')
      }
      ]
    },
    grid: {
      left: '40%'
    },
    calculable: true,
    series: [
      {
        name: '业务流量占比',
        type: 'pie',
        radius: [30, 80],
        center: ['60%', '50%'],
        roseType: 'area',
        labelLine: {
          normal: {
            show: false,
            length: 0,
            length2: 5
          },
          emphasis: {
            show: false
          }
        },
        label: {
          normal: {
            fontSize: 18,
            // align: 'right',
            fontFamily: 'DigifaceWide',
            verticalAlign: 'left',
            formatter: '{d}%'
          }
        },
        data: [20, 20, 20, 20, 20]
      }
    ]
  },
  option2: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function(param) {
        return param[0].seriesName + ' <br/> ' + param[0].marker + param[0].name + ' : ' + param[0].value + 'G';
      }
    },
    grid: {
      top: 40,
      left: 60,
      bottom: 40,
      right: 40
    },
    toolbox: {
      show: false,
      feature: {
        dataView: {
          show: true,
          readOnly: true
        },
        magicType: {
          show: true,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: false,
    xAxis: [
      {
        type: 'category',
        data: [
          'Amanda',
          'Candy',
          'Chris',
          'Cindy',
          'Emma',
          'Grace',
          'Kent',
          'Lily',
          'Lisa',
          'Michlle',
          'Sandy',
          'Shirly',
          'Stancey'
        ],
        axisLine: {
          lineStyle: {
            color: '#185acc',
            width: 1
          }
        },
        axisTick: {
          show: false,
          inside: true,
          length: 6,
          lineStyle: {
            width: 2
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#99CCFF',
            width: 1,
            opacity: 0.5
          }
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: '#fefefe',
            fontSize: 14
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#185acc',
            width: 1
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#445a68',
            width: 2,
            opacity: 0.7
          }
        },
        axisLabel: {
          textStyle: {
            color: '#fefefe',
            fontSize: 16
          },
          formatter: function(value, index) {
            if (index === 0) {
              return 'G'
            } else {
              return value
            }
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '热门软件流量',
        barWidth: 22,
        type: 'bar',
        data: [23, 26, 34, 39, 5, 25, 26, 39, 32, 66, 43, 27, 33],
        itemStyle: {
          normal: {
            color: '#14e2a4',
            barBorderRadius: [5, 5, 0, 0]
          }
        }
      }
    ]
  },
  option3: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: 40,
      left: 60,
      bottom: 40,
      right: 40
    },
    toolbox: {
      show: false,
      feature: {
        dataView: {
          show: true,
          readOnly: true
        },
        magicType: {
          show: true,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: false,
    xAxis: [
      {
        type: 'category',
        data: [
          'Amanda',
          'Candy',
          'Chris',
          'Cindy',
          'Emma',
          'Grace',
          'Kent',
          'Lily',
          'Lisa',
          'Michlle',
          'Sandy',
          'Shirly',
          'Stancey'
        ],
        axisLine: {
          lineStyle: {
            color: '#185acc',
            width: 1
          }
        },
        axisTick: {
          show: false,
          inside: true,
          length: 6,
          lineStyle: {
            width: 2
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#99CCFF',
            width: 1,
            opacity: 0.5
          }
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: '#fefefe',
            fontSize: 14
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#185acc',
            width: 1
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#445a68',
            width: 2,
            opacity: 0.7
          }
        },
        axisLabel: {
          textStyle: {
            color: '#fefefe',
            fontSize: 16
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '热门软件流量',
        barWidth: 22,
        type: 'bar',
        data: [23, 26, 34, 39, 5, 25, 26, 39, 32, 66, 43, 27, 33],
        itemStyle: {
          normal: {
            color: '#14e2a4',
            barBorderRadius: [5, 5, 0, 0]
          }
        }
      }
    ]
  },
  option4: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    color: ['#b189fc', '#ff8328', '#6599ff', '#35ff77', '#07fcff'],
    legend: {
      left: 10,
      top: 40,
      width: 100,
      itemGap: 20,
      itemWidth: 13,
      itemHeight: 13,
      orient: 'vertical',
      textStyle: {
        color: '#fff',
        fontSize: 18
      },
      data: [{
        name: '业务1',
        // icon: 'image://' + require('../../assets/img/centertwo/4.png')
      },
      {
        name: '业务2',
        // icon: 'image://' + require('../../assets/img/centertwo/3.png')
      },
      {
        name: '业务3',
        // icon: 'image://' + require('../../assets/img/centertwo/2.png')
      },
      {
        name: '业务4',
        // icon: 'image://' + require('../../assets/img/centertwo/1.png')
      },
      {
        name: '业务5',
        // icon: 'image://' + require('../../assets/img/centertwo/5.png')
      }
      ]
    },
    grid: {
      left: '40%'
    },
    calculable: true,
    series: [
      {
        name: '业务流量占比',
        type: 'pie',
        radius: [30, 80],
        center: ['60%', '50%'],
        roseType: 'area',
        labelLine: {
          normal: {
            show: false,
            length: 0,
            length2: 5
          },
          emphasis: {
            show: false
          }
        },
        label: {
          normal: {
            fontSize: 18,
            // align: 'right',
            fontFamily: 'DigifaceWide',
            verticalAlign: 'left',
            formatter: '{d}%'
          }
        },
        data: [1.22, 20.50, 20, 20, 20]
      }
    ]
  }
}
