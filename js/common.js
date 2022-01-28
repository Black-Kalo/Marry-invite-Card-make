// via: https://blog.csdn.net/a258831020/article/details/46988887
String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == 'object') {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp('({' + key + '})', 'g');
                    result = result.replace(reg, args[key]);
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp('({)' + i + '(})', 'g');
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};


var configs = [{
        size: 600,
        images: [{
            content: './res/tp1.jpg',
            size: {
                width: 600,
                height: 0
            },
            coord: {
                x: 0,
                y: 0
            },
            background: null,
            variable: false,
            resize: true
        }],
        texts: [{
                content: '誠邀 {0} ',
                font: '"Noto Sans SC"',
                size: 30,
                coord: {
                    x: 300,
                    y: 681
                },
                color: '#867160',
                align: 'center',
                bold: false,
                italic: false,
                variable: true
            },
            {
                content: '夜月',
                font: '"Ma Shan Zheng"',
                size: 50,
                coord: {
                    x: 270,
                    y: 600
                },
                color: '#000',
                align: 'right',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '若曦',
                font: '"Ma Shan Zheng"',
                size: 50,
                coord: {
                    x: 332,
                    y: 600
                },
                color: '#000',
                align: 'left',
                variable: false
            },
            {
                content: '掃碼查看位置與登記來訪',
                font: '"Noto Sans SC"',
                size: 15,
                coord: {
                    x: 300,
                    y: 1000
                },
                color: '#867160',
                align: 'center',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '2030/1/26 12:00',
                font: '"Noto Sans SC"',
                size: 20,
                coord: {
                    x: 300,
                    y: 770
                },
                color: '#f25459',
                align: 'center',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '新竹國賓大飯店',
                font: '"Noto Sans SC"',
                size: 20,
                coord: {
                    x: 300,
                    y: 800
                },
                color: '#f25459',
                align: 'center',
                bold: false,
                italic: false,
                variable: false
            }
        ],
        qrCodes: [{
            content: 'https://goo.gl/maps/yJPLBgcHaVtVn5Ph8',
            color: {
                foreground: '#000',
                background: '#fff'
            },
            size: 100,
            coord: {
                x: 250,
                y: 870
            },
            variable: true
        }],
        variables: [
            ['魏華', '19:00']
        ]
    },
    {
        size: 600,
        images: [{
            content: './res/tp2.jpg',
            size: {
                width: 0,
                height: 0
            },
            coord: {
                x: 0,
                y: 0
            },
            background: null,
            variable: false,
            resize: true
        }],
        texts: [{
                content: '{0} ',
                font: '"Ma Shan Zheng"',
                size: '60',
                coord: {
                    x: '360',
                    y: '921'
                },
                color: '#223053',
                align: 'center',
                bold: false,
                italic: false,
                variable: true
            },
            {
                content: '夜月',
                font: '"Ma Shan Zheng"',
                size: '45',
                coord: {
                    x: '316',
                    y: '800'
                },
                color: '#223053',
                align: 'right',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '若曦',
                font: '"Ma Shan Zheng"',
                size: '45',
                coord: {
                    x: '405',
                    y: '800'
                },
                color: '#223053',
                align: 'left',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '掃碼查看位置與登記來訪',
                font: '"Noto Sans SC"',
                size: 15,
                coord: {
                    x: '360',
                    y: '1231'
                },
                color: '#867160',
                align: 'center',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '2030/1/26 12:00',
                font: '"Noto Sans SC"',
                size: '30',
                coord: {
                    x: '360',
                    y: '1072'
                },
                color: '#202f52',
                align: 'center',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '新竹國賓大飯店',
                font: '"Noto Sans SC"',
                size: '30',
                coord: {
                    x: '360',
                    y: '1032'
                },
                color: '#202f52',
                align: 'center',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '&',
                font: '"PT Serif Caption"',
                size: '50',
                coord: {
                    x: '339',
                    y: '798'
                },
                color: '#223053',
                align: 'left',
                bold: false,
                italic: false,
                variable: false
            }
        ],
        qrCodes: [{
            content: 'https://goo.gl/maps/yJPLBgcHaVtVn5Ph8',
            color: {
                foreground: '#202f52',
                background: '#f7f2ec'
            },
            size: '100',
            coord: {
                x: '310',
                y: '1103'
            },
            variable: true
        }],
        variables: [
            ['魏華', '19:00']
        ]
    },
    {
        size: 600,
        images: [{
            content: './res/tp3.jpg',
            size: {
                width: 0,
                height: 0
            },
            coord: {
                x: 0,
                y: 0
            },
            background: null,
            variable: false,
            resize: true
        }],
        texts: [{
                content: '誠邀 {0} 光臨',
                font: '"Ma Shan Zheng"',
                size: '70',
                coord: {
                    x: '500',
                    y: '1253'
                },
                color: '#000000',
                align: 'center',
                bold: false,
                italic: false,
                variable: true
            },
            {
                content: '夜月',
                font: '"Noto Serif TC"',
                size: '45',
                coord: {
                    x: '420',
                    y: '1485'
                },
                color: '#caab81',
                align: 'center',
                bold: true,
                italic: false,
                variable: false
            },
            {
                content: '若曦',
                font: '"Noto Serif TC"',
                size: '45',
                coord: {
                    x: '720',
                    y: '1485'
                },
                color: '#caab81',
                align: 'center',
                bold: true,
                italic: false,
                variable: false
            },
            {
                content: '2030/1/26 12:00 新竹國賓大飯店',
                font: '"Noto Sans SC"',
                size: '30',
                coord: {
                    x: '500',
                    y: '1336'
                },
                color: '#000',
                align: 'center',
                bold: false,
                italic: false,
                variable: false
            }
        ],
        qrCodes: [{
            content: 'https://goo.gl/maps/yJPLBgcHaVtVn5Ph8',
            color: {
                foreground: '#000000',
                background: '#c41e22'
            },
            size: '150',
            coord: {
                x: '425',
                y: '1597'
            },
            bold: false,
            italic: false,
            variable: false
    }],
        variables: [
            ['魏華', '19:00']
        ]
    },
    {
        size: 600,
        images: [{
            content: './res/tp4.jpg',
            size: {
                width: 0,
                height: 0
            },
            coord: {
                x: 0,
                y: 0
            },
            background: null,
            variable: false,
            resize: true
        }],
        texts: [
            {
                content: '恭請 {0} 光臨',
                font: '"字体管家版宋"',
                size: '80',
                coord: {
                    x: '500',
                    y: '1379'
                },
                color: '#db2136',
                align: 'center',
                bold: false,
                italic: false,
                variable: true
            },
            {
                content: '夜月',
                font: '"字体管家版宋"',
                size: '60',
                coord: {
                    x: '306',
                    y: '1240'
                },
                color: '#db2136',
                align: 'center',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '若曦',
                font: '"字体管家版宋"',
                size: '60',
                coord: {
                    x: '825',
                    y: '1240'
                },
                color: '#db2136',
                align: 'center',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '掃碼查看',
                font: '"字体管家版宋"',
                size: '55',
                coord: {
                    x: '700',
                    y: '1530'
                },
                color: '#db2136',
                align: 'left',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '更多詳情',
                font: '"字体管家版宋"',
                size: '55',
                coord: {
                    x: '700',
                    y: '1600'
                },
                color: '#db2136',
                align: 'left',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '新竹國賓大飯店',
                font: '"字体管家版宋"',
                size: '55',
                coord: {
                    x: '125',
                    y: '1530'
                },
                color: '#db2136',
                align: 'left',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '',
                font: '"字体管家版宋"',
                size: '55',
                coord: {
                    x: '125',
                    y: '1600'
                },
                color: '#db2136',
                align: 'left',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '10',
                font: 'Helvetica,"Segoe UI"',
                size: '500',
                coord: {
                    x: '500',
                    y: '714'
                },
                color: '#db2136',
                align: 'center',
                bold: true,
                italic: false,
                variable: false
            },
            {
                content: '2030',
                font: 'Helvetica,"Segoe UI"',
                size: '110',
                coord: {
                    x: '500',
                    y: '179'
                },
                color: '#db2136',
                align: 'center',
                bold: true,
                italic: false,
                variable: false
            },
            {
                content: '一 月',
                font: '"字体管家版宋"',
                size: '65',
                coord: {
                    x: '209',
                    y: '160'
                },
                color: '#db2136',
                align: 'center',
                bold: false,
                italic: false,
                variable: false
            },
            {
                content: '12: 00',
                font: 'Helvetica,"Segoe UI"',
                size: '65',
                coord: {
                    x: '785',
                    y: '160'
                },
                color: '#db2136',
                align: 'center',
                bold: true,
                italic: false,
                variable: false
            }
        ],
        qrCodes: [
            {
                content: 'https://goo.gl/maps/yJPLBgcHaVtVn5Ph8',
                color: {
                    foreground: '#dc3046',
                    background: '#f2f1ef'
                },
                size: '150',
                coord: {
                    x: '518',
                    y: '1470'
                },
                bold: false,
                italic: false,
                variable: false
            }
        ],
        variables: [
            ['魏華', '19:00']
        ]
    }
];

window.onload = function () {
    app.refresh();
}