function perft(depth) {
    if (depth <= 0) {
        return 1;
    }
    let count = 0;
    for (const { move } of generateMoves()) {
        if (doMove(move) == false) {
            continue;
        }
        count += perft(depth - 1);
        undoMove();
    }
    return count;
}

function perftTest(depth) {
    let moveCount = 0;
    let totalNodeSeared = 0;
    for (const { move } of generateMoves()) {
        if (doMove(move) == false) {
            continue;
        }

        let count = perft(depth - 1);
        undoMove();

        let test = TestCases[gameBoard.positionKey.toString(16)][depth][moveStr(move)] == count ? '✅' : '❌';
        if(!test) test = '';
        
        totalNodeSeared += count;
        console.log(++moveCount, moveStr(move), count, test);
    }
    console.log('Total Node Seared', totalNodeSeared);
}





const TestCases = {
    '5300d2e1': {
        1: {
            'a2a3': 1,
            'a2a4': 1,
            'b2b3': 1,
            'b2b4': 1,
            'c2c3': 1,
            'c2c4': 1,
            'd2d3': 1,
            'd2d4': 1,
            'e2e3': 1,
            'e2e4': 1,
            'f2f3': 1,
            'f2f4': 1,
            'g2g3': 1,
            'g2g4': 1,
            'h2h3': 1,
            'h2h4': 1,
            'b1a3': 1,
            'b1c3': 1,
            'g1f3': 1,
            'g1h3': 1,
        },
        2: {
            'a2a3': 20,
            'a2a4': 20,
            'b2b3': 20,
            'b2b4': 20,
            'c2c3': 20,
            'c2c4': 20,
            'd2d3': 20,
            'd2d4': 20,
            'e2e3': 20,
            'e2e4': 20,
            'f2f3': 20,
            'f2f4': 20,
            'g2g3': 20,
            'g2g4': 20,
            'h2h3': 20,
            'h2h4': 20,
            'b1a3': 20,
            'b1c3': 20,
            'g1f3': 20,
            'g1h3': 20,
        },
        3: {
            'a2a3': 380,
            'a2a4': 420,
            'b2b3': 420,
            'b2b4': 421,
            'c2c3': 420,
            'c2c4': 441,
            'd2d3': 539,
            'd2d4': 560,
            'e2e3': 599,
            'e2e4': 600,
            'f2f3': 380,
            'f2f4': 401,
            'g2g3': 420,
            'g2g4': 421,
            'h2h3': 380,
            'h2h4': 420,
            'b1a3': 400,
            'b1c3': 440,
            'g1f3': 440,
            'g1h3': 400,
        },
        4: {
            'a2a3': 8457,
            'a2a4': 9329,
            'b2b3': 9345,
            'b2b4': 9332,
            'c2c3': 9272,
            'c2c4': 9744,
            'd2d3': 11959,
            'd2d4': 12435,
            'e2e3': 13134,
            'e2e4': 13160,
            'f2f3': 8457,
            'f2f4': 8929,
            'g2g3': 9345,
            'g2g4': 9328,
            'h2h3': 8457,
            'h2h4': 9329,
            'b1a3': 8885,
            'b1c3': 9755,
            'g1f3': 9748,
            'g1h3': 8881,

        },
        5: {
            'a2a3': 181046,
            'a2a4': 217832,
            'b2b3': 215255,
            'b2b4': 216145,
            'c2c3': 222861,
            'c2c4': 240082,
            'd2d3': 328511,
            'd2d4': 361790,
            'e2e3': 402988,
            'e2e4': 405385,
            'f2f3': 178889,
            'f2f4': 198473,
            'g2g3': 217210,
            'g2g4': 214048,
            'h2h3': 181044,
            'h2h4': 218829,
            'b1a3': 198572,
            'b1c3': 234656,
            'g1f3': 233491,
            'g1h3': 198502,
        },
        6: {
            'a2a3': 4463267,
            'a2a4': 5363555,
            'b2b3': 5310358,
            'b2b4': 5293555,
            'c2c3': 5417640,
            'c2c4': 5866666,
            'd2d3': 8073082,
            'd2d4': 8879566,
            'e2e3': 9726018,
            'e2e4': 9771632,
            'f2f3': 4404141,
            'f2f4': 4890429,
            'g2g3': 5346260,
            'g2g4': 5239875,
            'h2h3': 4463070,
            'h2h4': 5385554,
            'b1a3': 4856835,
            'b1c3': 5708064,
            'g1f3': 5723523,
            'g1h3': 4877234,
        },
    },

    '6839c89f': {
        1: {
            a2a3: 1,
            b2b3: 1,
            g2g3: 1,
            d5d6: 1,
            a2a4: 1,
            g2g4: 1,
            g2h3: 1,
            d5e6: 1,
            c3b1: 1,
            c3d1: 1,
            c3a4: 1,
            c3b5: 1,
            e5d3: 1,
            e5c4: 1,
            e5g4: 1,
            e5c6: 1,
            e5g6: 1,
            e5d7: 1,
            e5f7: 1,
            d2c1: 1,
            d2e3: 1,
            d2f4: 1,
            d2g5: 1,
            d2h6: 1,
            e2d1: 1,
            e2f1: 1,
            e2d3: 1,
            e2c4: 1,
            e2b5: 1,
            e2a6: 1,
            a1b1: 1,
            a1c1: 1,
            a1d1: 1,
            h1f1: 1,
            h1g1: 1,
            f3d3: 1,
            f3e3: 1,
            f3g3: 1,
            f3h3: 1,
            f3f4: 1,
            f3g4: 1,
            f3f5: 1,
            f3h5: 1,
            f3f6: 1,
            e1d1: 1,
            e1f1: 1,
            e1g1: 1,
            e1c1: 1,
        },
        2: {
            a2a3: 44,
            b2b3: 42,
            g2g3: 42,
            d5d6: 41,
            a2a4: 44,
            g2g4: 42,
            g2h3: 43,
            d5e6: 46,
            c3b1: 42,
            c3d1: 42,
            c3a4: 42,
            c3b5: 39,
            e5d3: 43,
            e5c4: 42,
            e5g4: 44,
            e5c6: 41,
            e5g6: 42,
            e5d7: 45,
            e5f7: 44,
            d2c1: 43,
            d2e3: 43,
            d2f4: 43,
            d2g5: 42,
            d2h6: 41,
            e2d1: 44,
            e2f1: 44,
            e2d3: 42,
            e2c4: 41,
            e2b5: 39,
            e2a6: 36,
            a1b1: 43,
            a1c1: 43,
            a1d1: 43,
            h1f1: 43,
            h1g1: 43,
            f3d3: 42,
            f3e3: 43,
            f3g3: 43,
            f3h3: 43,
            f3f4: 43,
            f3g4: 43,
            f3f5: 45,
            f3h5: 43,
            f3f6: 39,
            e1d1: 43,
            e1f1: 43,
            e1g1: 43,
            e1c1: 43,
        },
        3: {
            a2a3: 2186,
            b2b3: 1964,
            g2g3: 1882,
            d5d6: 1991,
            a2a4: 2149,
            g2g4: 1843,
            g2h3: 1970,
            d5e6: 2241,
            c3b1: 2038,
            c3d1: 2040,
            c3a4: 2203,
            c3b5: 2138,
            e5d3: 1803,
            e5c4: 1880,
            e5g4: 1878,
            e5c6: 2027,
            e5g6: 1997,
            e5d7: 2124,
            e5f7: 2080,
            d2c1: 1963,
            d2e3: 2136,
            d2f4: 2000,
            d2g5: 2134,
            d2h6: 2019,
            e2d1: 1733,
            e2f1: 2060,
            e2d3: 2050,
            e2c4: 2082,
            e2b5: 2057,
            e2a6: 1907,
            a1b1: 1969,
            a1c1: 1968,
            a1d1: 1885,
            h1f1: 1929,
            h1g1: 2013,
            f3d3: 2005,
            f3e3: 2174,
            f3g3: 2214,
            f3h3: 2360,
            f3f4: 2132,
            f3g4: 2169,
            f3f5: 2396,
            f3h5: 2267,
            f3f6: 2111,
            e1d1: 1894,
            e1f1: 1855,
            e1g1: 2059,
            e1c1: 1887,
        },
        4: {
            a2a3: 94405,
            b2b3: 81066,
            g2g3: 77468,
            d5d6: 79551,
            a2a4: 90978,
            g2g4: 75677,
            g2h3: 82759,
            d5e6: 97464,
            c3b1: 84773,
            c3d1: 84782,
            c3a4: 91447,
            c3b5: 81498,
            e5d3: 77431,
            e5c4: 77752,
            e5g4: 79912,
            e5c6: 83885,
            e5g6: 83866,
            e5d7: 93913,
            e5f7: 88799,
            d2c1: 83037,
            d2e3: 90274,
            d2f4: 84869,
            d2g5: 87951,
            d2h6: 82323,
            e2d1: 74963,
            e2f1: 88728,
            e2d3: 85119,
            e2c4: 84835,
            e2b5: 79739,
            e2a6: 69334,
            a1b1: 83348,
            a1c1: 83263,
            a1d1: 79695,
            h1f1: 81563,
            h1g1: 84876,
            f3d3: 83727,
            f3e3: 92505,
            f3g3: 94461,
            f3h3: 98524,
            f3f4: 90488,
            f3g4: 92037,
            f3f5: 104992,
            f3h5: 95034,
            f3f6: 77838,
            e1d1: 79989,
            e1f1: 77887,
            e1g1: 86975,
            e1c1: 79803,
        },
        5: {
            a2a3: 4627439,
            b2b3: 3768824,
            g2g3: 3472039,
            d5d6: 3835265,
            a2a4: 4387586,
            g2g4: 3338154,
            g2h3: 3819456,
            d5e6: 4727437,
            c3b1: 3996171,
            c3d1: 3995761,
            c3a4: 4628497,
            c3b5: 4317482,
            e5d3: 3288812,
            e5c4: 3494887,
            e5g4: 3415992,
            e5c6: 4083458,
            e5g6: 3949417,
            e5d7: 4404043,
            e5f7: 4164923,
            d2c1: 3793390,
            d2e3: 4407041,
            d2f4: 3941257,
            d2g5: 4370915,
            d2h6: 3967365,
            e2d1: 3074219,
            e2f1: 4095479,
            e2d3: 4066966,
            e2c4: 4182989,
            e2b5: 4032348,
            e2a6: 3553501,
            a1b1: 3827454,
            a1c1: 3814203,
            a1d1: 3568344,
            h1f1: 3685756,
            h1g1: 3989454,
            f3d3: 3949570,
            f3e3: 4477772,
            f3g3: 4669768,
            f3h3: 5067173,
            f3f4: 4327936,
            f3g4: 4514010,
            f3f5: 5271134,
            f3h5: 4743335,
            f3f6: 3975992,
            e1d1: 3559113,
            e1f1: 3377351,
            e1g1: 4119629,
            e1c1: 3551583,
        }
    }
}
