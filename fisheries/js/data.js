"use strict";

//魚のデータ
let fishInfo = {
  maajione: {
    name: "マアジ",
    habitat: "太平洋系群",
    level: "./img/level3-bar.svg",
    imagePath: "./img/maaji.svg",
    chartData: {
      labels: [
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            13, 18, 17, 14, 37, 37, 30, 33, 42, 61, 62, 79, 80, 70, 80, 76, 40,
            48, 56, 68, 50, 51, 54, 48, 40, 40, 39, 24, 26, 27, 22, 27, 22, 17,
            16, 24, 19,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            34, 41, 44, 46, 79, 88, 82, 92, 125, 153, 131, 153, 159, 149, 162,
            143, 127, 119, 125, 139, 111, 108, 111, 100, 89, 80, 74, 56, 61, 65,
            68, 69, 53, 44, 49, 49, 43,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  torafugu: {
    name: "トラフグ",
    habitat: "日本海・瀬戸内海・東シナ海系群",
    level: "./img/level3-bar.svg",
    imagePath: "./img/torafugu.svg",
    chartData: {
      labels: [
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            356, 304, 265, 304, 355, 328, 268, 289, 262, 289, 238, 251, 220,
            233, 188, 218, 184,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            1004, 914, 862, 981, 1008, 909, 819, 858, 864, 864, 808, 793, 729,
            740, 720, 687, 562,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  surumeika: {
    name: "スルメイカ",
    habitat: "冬季発生系群",
    level: "./img/level3-bar.svg",
    imagePath: "./img/surumeika.svg",
    chartData: {
      labels: [
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            49, 181, 75, 63, 68, 75, 37, 55, 69, 54, 102, 94, 180, 311, 217,
            248, 219, 401, 298, 134, 178, 315, 263, 187, 224, 214, 185, 166,
            267, 205, 213, 221, 290, 183, 234, 225, 193, 101, 54, 45, 44,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            234, 668, 297, 171, 326, 363, 136, 183, 203, 248, 413, 446, 543,
            989, 927, 698, 603, 1039, 882, 376, 502, 799, 891, 721, 724, 730,
            660, 516, 1044, 985, 993, 765, 966, 769, 764, 713, 500, 255, 229,
            159, 144,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  kinmedai: {
    name: "キンメダイ",
    habitat: "太平洋系群",
    level: "./img/level3-bar.svg",
    imagePath: "./img/kinmedai.svg",
    chartData: {
      labels: [
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            55, 60, 71, 74, 53, 51, 50, 67, 64, 68, 66, 68, 51, 49, 46, 44, 47,
            42, 45, 43, 43,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            428, 436, 438, 426, 409, 416, 424, 431, 417, 401, 376, 348, 315,
            298, 281, 268, 261, 255, 259, 261, 261,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  hirameone: {
    name: "ヒラメ",
    habitat: "日本海北・中部系群",
    level: "./img/level3-bar.svg",
    imagePath: "./img/hirame.svg",
    chartData: {
      labels: [
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            910, 909, 979, 925, 1070, 997, 991, 1221, 1253, 1310, 1068, 1176,
            1101, 836, 992, 973, 1031, 1070, 905, 869,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            2317, 2320, 2395, 2374, 2467, 2437, 2512, 2749, 2781, 2704, 2479,
            2502, 2253, 2091, 2323, 2354, 2400, 2350, 2113, 1865,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  itohikidara: {
    name: "イトヒキダラ",
    habitat: "日本海北・中部系群",
    level: "./img/level2-bar.svg",
    imagePath: "./img/itohikidara.svg",
    chartData: {
      labels: [
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            38, 48, 45, 37, 37, 32, 38, 41, 39, 30, 26, 24, 12, 16, 16, 23, 18,
            13, 11, 7,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            166,
            147,
            147,
            98,
            99,
            148,
            126,
            201,
            103,
            70,
            88,
            92,
            ,
            129,
            130,
            69,
            62,
            61,
            91,
            68,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  masabaone: {
    name: "マサバ",
    habitat: "太平洋系群",
    level: "./img/level2-bar.svg",
    imagePath: "./img/masaba.svg",
    chartData: {
      labels: [
        "1970",
        "1971",
        "1972",
        "1973",
        "1974",
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            865, 855, 845, 822, 889, 897, 715, 1071, 1428, 1275, 637, 398, 347,
            378, 543, 422, 627, 327, 259, 125, 28, 26, 81, 398, 117, 141, 269,
            318, 115, 77, 91, 53, 47, 76, 181, 226, 245, 188, 176, 130, 128,
            102, 126, 221, 302, 453, 480, 539, 527,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            2938, 3737, 4454, 4171, 3917, 3391, 3803, 4699, 4826, 3276, 1932,
            1810, 1706, 1464, 1816, 1713, 1455, 909, 558, 295, 215, 320, 665,
            705, 332, 350, 705, 628, 288, 235, 225, 153, 228, 252, 763, 849,
            752, 579, 490, 538, 689, 868, 1185, 3411, 3738, 3476, 3807, 4327,
            5595,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  maajitwo: {
    name: "マアジ",
    habitat: "対馬暖流系群",
    level: "./img/level2-bar.svg",
    imagePath: "./img/maaji.svg",
    chartData: {
      labels: [
        "1973",
        "1974",
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            95, 122, 157, 109, 65, 48, 79, 42, 52, 101, 122, 124, 155, 76, 156,
            233, 167, 191, 173, 185, 266, 277, 248, 221, 263, 253, 164, 178,
            152, 162, 204, 218, 184, 146, 144, 150, 158, 148, 157, 126, 136,
            145, 175, 128, 140, 124,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            256, 305, 336, 253, 178, 159, 184, 130, 161, 231, 234, 269, 280,
            210, 396, 440, 347, 384, 393, 426, 545, 535, 520, 503, 518, 528,
            419, 382, 280, 348, 530, 544, 448, 449, 417, 389, 384, 381, 394,
            352, 359, 391, 452, 427, 455, 493,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  maiwashione: {
    name: "マイワシ",
    habitat: "太平洋系群",
    level: "./img/level2-bar.svg",
    imagePath: "./img/maiwashi.svg",
    chartData: {
      labels: [
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            430, 756, 991, 1149, 1089, 1445, 2296, 2419, 2725, 2870, 2644, 2685,
            2916, 2838, 2524, 2162, 1724, 1240, 791, 425, 332, 181, 255, 142,
            308, 139, 177, 49, 51, 48, 25, 49, 65, 27, 49, 65, 132, 102, 130,
            186, 270, 316, 446, 451,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            "-",
            3862,
            5553,
            7440,
            8647,
            13366,
            15415,
            15830,
            15151,
            14419,
            17392,
            18881,
            19542,
            17774,
            12507,
            7981,
            4546,
            2465,
            1467,
            879,
            756,
            805,
            916,
            727,
            701,
            411,
            305,
            157,
            121,
            109,
            87,
            131,
            112,
            99,
            129,
            334,
            464,
            514,
            615,
            1073,
            1644,
            2159,
            2796,
            3484,
            "-",
            3862,
            5553,
            7440,
            8647,
            13366,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  maiwashitwo: {
    name: "マイワシ",
    habitat: "対馬暖流系群",
    level: "./img/level2-bar.svg",
    imagePath: "./img/maiwashi.svg",
    chartData: {
      labels: [
        "1960",
        "1961",
        "1962",
        "1963",
        "1964",
        "1965",
        "1966",
        "1967",
        "1968",
        "1969",
        "1970",
        "1971",
        "1972",
        "1973",
        "1974",
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            58, 26, 11, 10, 7, 3, 6, 8, 8, 6, 3, 4, 14, 47, 87, 96, 309, 429,
            487, 727, 751, 791, 869, 1017, 1278, 1191, 1486, 1412, 1606, 1546,
            1505, 1281, 975, 917, 758, 366, 156, 26, 25, 41, 8, 1, 1, 1, 2, 3,
            3, 14, 8, 8, 6, 44, 38, 85, 9, 70, 62, 54, 71,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            105, 47, 30, 28, 40, 56, 56, 56, 76, 65, 119, 187, 313, 490, 815,
            1139, 1583, 1787, 2466, 2927, 4215, 5553, 5255, 6675, 6979, 8682,
            9620, 9494, 10209, 8191, 6666, 4840, 3311, 2252, 1334, 607, 224, 88,
            76, 60, 11, 5, 5, 4, 6, 18, 27, 49, 58, 76, 162, 232, 261, 254, 212,
            274, 303, 313, 368,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  hatahata: {
    name: "ハタハタ",
    habitat: "日本海西部系群",
    level: "./img/level1-bar.svg",
    imagePath: "./img/hatahata.svg",
    chartData: {
      labels: [
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            5365, 8144, 6930, 3349, 8764, 3632, 4086, 3205, 5807, 3485, 3506,
            5081, 4444, 4240, 2636, 2917, 2048,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            15710, 31861, 20191, 7803, 33220, 19608, 13087, 30812, 16607, 21789,
            29644, 50422, 22157, 21377, 14844, 12453, 12294,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  hirametwo: {
    name: "ヒラメ",
    habitat: "太平洋北部系群",
    level: "./img/level1-bar.svg",
    imagePath: "./img/hirame.svg",
    chartData: {
      labels: [
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            988, 822, 912, 867, 980, 1760, 2267, 2448, 2138, 1799, 2351, 2062,
            1975, 1329, 1091, 1597, 2582, 2209, 2270, 2402, 2156, 1407, 1703,
            2962, 2992, 3000, 2552, 2572,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            1961, 1904, 2017, 1902, 2384, 3777, 4827, 4681, 4269, 4021, 4585,
            4160, 3715, 2746, 2583, 3459, 5622, 4704, 5730, 6004, 5339, 7733,
            9725, 11513, 11351, 11407, 10490, 9889,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  akaebi: {
    name: "ホッコクアカエビ",
    habitat: "日本海系群",
    level: "./img/level1-bar.svg",
    imagePath: "./img/akaebi.svg",
    chartData: {
      labels: [
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            2201, 2034, 2102, 2266, 2411, 2542, 2147, 2192, 1963, 1593, 1733,
            2099, 2548, 2693, 2494, 2574,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            4370, 5841, 6168, 6614, 6756, 7826, 5849, 7631, 5857, 7978, 12372,
            10079, 11995, 10613, 12819, 11612, 9834,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  yanagimushikarei: {
    name: "ヤナギムシカレイ",
    habitat: "太平洋北部系群",
    level: "./img/level1-bar.svg",
    imagePath: "./img/yamagimushikarei.svg",
    chartData: {
      labels: [
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            144, 213, 247, 245, 159, 76, 83, 82, 84, 90, 106, 81, 108, 144, 160,
            58, 53, 60, 73, 98, 139, 135, 131,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            336, 386, 360, 288, 133, 160, 149, 149, 156, 179, 149, 167, 219,
            231, 108, 69, 77, 108, 162, 249, 237, 254,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
  masabatwo: {
    name: "マサバ",
    habitat: "対馬暖流系群",
    level: "./img/level1-bar.svg",
    imagePath: "./img/masaba.svg",
    chartData: {
      labels: [
        "1973",
        "1974",
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ],
      datasets: [
        {
          label: "Catch",
          data: [
            330, 419, 355, 364, 393, 378, 374, 354, 348, 374, 352, 291, 264,
            290, 292, 389, 437, 222, 242, 258, 403, 544, 400, 821, 368, 328,
            265, 215, 277, 225, 202, 262, 212, 189, 249, 308, 298, 212, 250,
            233, 166, 214, 247, 228, 215, 292,
          ],
          borderColor: "rgba(65,154,181,0.5)",
          lineTension: 0,
          fill: false,
        },
        {
          label: "Stock",
          data: [
            1026, 1029, 946, 976, 1070, 1044, 1123, 921, 985, 1116, 1050, 902,
            926, 866, 1255, 1219, 876, 636, 735, 917, 1098, 1118, 1292, 1370,
            832, 715, 617, 446, 559, 467, 459, 627, 509, 443, 522, 696, 551,
            511, 516, 487, 371, 555, 570, 480, 640, 654,
          ],
          borderColor: "rgba(29,42,91,0.5)",
          lineTension: 0,
          fill: false,
        },
      ],
    },
  },
};
