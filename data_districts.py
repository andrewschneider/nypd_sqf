"""
A list of 'data districts' and the community districts and precincts they contain.
Community district to precinct relationships can be many to many, one to many, many to one, or one to one.
Sources: https://github.com/dwillis/nyc-maps/blob/master/community_districts.geojson,
         https://github.com/dwillis/nyc-maps/blob/master/police_precincts.geojson
"""

DATA_DISTRICTS = [
    {
        'cds': [101, 102, 103],
        'pcts': [1, 5, 6, 7, 9]
    },
    {
        'cds': [104, 105, 106],
        'pcts': [10, 13, 14, 17, 18]
    },
    {
        'cds': [107],
        'pcts': [24, 20]
    },
    {
        'cds': [108],
        'pcts': [19]
    },
    {
        'cds': [109],
        'pcts': [26, 30]
    },
    {
        'cds': [110],
        'pcts': [28, 32]
    },
    {
        'cds': [111],
        'pcts': [23, 25]
    },
    {
        'cds': [112],
        'pcts': [33, 34]
    },
    {
        'cds': [164],
        'pcts': [22]
    },
    {
        'cds': [201],
        'pcts': [40]
    },
    {
        'cds': [202],
        'pcts': [41]
    },
    {
        'cds': [203],
        'pcts': [42]
    },
    {
        'cds': [204],
        'pcts': [44]
    },
    {
        'cds': [205],
        'pcts': [46]
    },
    {
        'cds': [206],
        'pcts': [48]
    },
    {
        'cds': [207, 227],
        'pcts': [52]
    },
    {
        'cds': [208, 226],
        'pcts': [50]
    },
    {
        'cds': [209],
        'pcts': [43]
    },
    {
        'cds': [210, 228],
        'pcts': [45]
    },
    {
        'cds': [211],
        'pcts': [49]
    },
    {
        'cds': [212],
        'pcts': [47]
    },
    {
        'cds': [301],
        'pcts': [90, 94]
    },
    {
        'cds': [302],
        'pcts': [84, 88]
    },
    {
        'cds': [303],
        'pcts': [79, 81]
    },
    {
        'cds': [304],
        'pcts': [83]
    },
    {
        'cds': [305],
        'pcts': [75]
    },
    {
        'cds': [306, 355],
        'pcts': [76, 78]
    },
    {
        'cds': [307],
        'pcts': [72]
    },
    {
        'cds': [308],
        'pcts': [77]
    },
    {
        'cds': [309],
        'pcts': [71]
    },
    {
        'cds': [310],
        'pcts': [68]
    },
    {
        'cds': [311],
        'pcts': [62]
    },
    {
        'cds': [312],
        'pcts': [66]
    },
    {
        'cds': [313],
        'pcts': [60]
    },
    {
        'cds': [314],
        'pcts': [70]
    },
    {
        'cds': [315],
        'pcts': [61]
    },
    {
        'cds': [316],
        'pcts': [73]
    },
    {
        'cds': [317],
        'pcts': [67]
    },
    {
        'cds': [318, 356],
        'pcts': [63, 69]
    },
    {
        'cds': [401],
        'pcts': [114]
    },
    {
        'cds': [402],
        'pcts': [108]
    },
    {
        'cds': [403, 480],
        'pcts': [115]
    },
    {
        'cds': [404, 481],
        'pcts': [110]
    },
    {
        'cds': [405],
        'pcts': [104]
    },
    {
        'cds': [406],
        'pcts': [112]
    },
    {
        'cds': [407],
        'pcts': [109]
    },
    {
        'cds': [408],
        'pcts': [107]
    },
    {
        'cds': [409, 482],
        'pcts': [102]
    },
    {
        'cds': [410],
        'pcts': [106]
    },
    {
        'cds': [411],
        'pcts': [111]
    },
    {
        'cds': [412, 483],
        'pcts': [103, 113]
    },
    {
        'cds': [413],
        'pcts': [105]
    },
    {
        'cds': [414, 484],
        'pcts': [100, 101]
    },
    {
        'cds': [501, 502, 595],
        'pcts': [120, 121, 122]
    },
    {
        'cds': [503],
        'pcts': [123]
    }
]