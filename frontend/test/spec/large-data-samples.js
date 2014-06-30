/* exported sampleBudget, expectedPathMappings, 
 drill1, drill2, drill3, drill4, drill5 */

// This is raw from CouchDB
var sampleBudget = {
    '_id': 'vu-2014',
    '_rev': '2-aa40c3df190659ec044834da7073bae9',
    'level': 'National Expenditure',
    'root': {
        'categories': {
            'ConstitutionalAgencies': {
                'categories': {
                    'CitizenshipCommission': {
                        'categories': {
                            'CitizenshipCommission': {
                                'categories': {
                                    'Citizenship Commission': {
                                        'data': {
                                            '2012': {
                                                'aggr': 3788275,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 4057324,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 4057324,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Citizenship Commission'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 3788275,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 4057324,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 7057324,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Citizenship Commission'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 3788275,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 4057324,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 7057324,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Citizenship Commission'
                    },
                    'JudicialServiceCommission': {
                        'categories': {
                            'AdministrativeSupportServices': {
                                'data': {
                                    '2012': {
                                        'aggr': 499741,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 545186,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 528830,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Administrative Support Services'
                            },
                            'DecisionMaking': {
                                'data': {
                                    '2012': {
                                        'aggr': 315337,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 344000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 338000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Decision Making'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 815078,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 889186,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 866830,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Judicial Service Commission'
                    },
                    'Judiciary': {
                        'categories': {
                            'CaseManagement': {
                                'categories': {
                                    'Case Management Support': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 852500,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Case Management Support'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 852500,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Case Management'
                            },
                            'CorporateServices': {
                                'categories': {
                                    'Account / Finance': {
                                        'data': {
                                            '2012': {
                                                'aggr': 4436437,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 5569465,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 5376866,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Account / Finance'
                                    },
                                    'Assets': {
                                        'data': {
                                            '2012': {
                                                'aggr': 7905410,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 7905410,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 6674748,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Assets'
                                    },
                                    'Human Resource': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2233029,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2721474,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2487760,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Human Resource'
                                    },
                                    'Information Technology': {
                                        'data': {
                                            '2012': {
                                                'aggr': 863164,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 863164,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 633569,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Information Technology'
                                    },
                                    'Library / Archive': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2279794,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2440243,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2413365,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Library / Archive'
                                    },
                                    'Security': {
                                        'data': {
                                            '2012': {
                                                'aggr': 644997,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 644997,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 509247,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Security'
                                    },
                                    'Supreme Court Hall of Justice': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 485000,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Supreme Court Hall of Justice'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 18362831,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 20144753,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 18580555,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Corporate Services'
                            },
                            'CourtofAppeal': {
                                'categories': {
                                    'Court of Appeal Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 17238159,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 15238159,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 16376848,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Court of Appeal Registry'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 17238159,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 15238159,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 16376848,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Court of Appeal'
                            },
                            'Enforcement': {
                                'categories': {
                                    'Sheriff Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 6289038,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 6879723,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 6824106,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Sheriff Office'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 6289038,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 6879723,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 6824106,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Enforcement'
                            },
                            'IslandCourts': {
                                'categories': {
                                    'Ambae Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2153791,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2003233,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1938458,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Ambae Island Court'
                                    },
                                    'Ambrym Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1669955,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1993397,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1934218,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Ambrym Island Court'
                                    },
                                    'Banks Torres Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1863684,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1925733,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1846003,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Banks Torres Island Court'
                                    },
                                    'Efate Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2326890,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2562182,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2894352,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Efate Island Court'
                                    },
                                    'Epi Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1565405,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1850903,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1814798,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Epi Island Court'
                                    },
                                    'Malekula Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1550658,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1828243,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1975068,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Malekula Island Court'
                                    },
                                    'Pentecost Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2026053,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2133403,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2069327,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Pentecost Island Court'
                                    },
                                    'Santo Malo Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2039371,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1385807,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2000053,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Santo Malo Island Court'
                                    },
                                    'Senior Administrator Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2460542,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2674051,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2602559,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Senior Administrator Office'
                                    },
                                    'Tanna Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1883057,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2012348,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1923349,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Tanna Island Court'
                                    },
                                    'Tongoa Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1511809,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1780903,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1719196,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Tongoa Island Court'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 21051215,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 22150203,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 22717381,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Island Courts'
                            },
                            'JudicialDevelopment&Training': {
                                'categories': {
                                    'Judicial Development & Training': {
                                        'data': {
                                            '2012': {
                                                'aggr': 3122122,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3303510,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3019375,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Judicial Development & Training'
                                    },
                                    'Staff Training & Development': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1500000,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1500000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1220000,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Staff Training & Development'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 4622122,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 4803510,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 4239375,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Judicial Development & Training'
                            },
                            'LandCourts': {
                                'categories': {
                                    'Ambae Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 577500,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 577500,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 420675,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Ambae Island Court'
                                    },
                                    'Banks Torres Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 550000,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 550000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 417500,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Banks Torres Island Court'
                                    },
                                    'Efate Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 900000,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 900000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 564500,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Efate Island Court'
                                    },
                                    'Erromango Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 550000,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 550000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 417500,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Erromango Island Court'
                                    },
                                    'Land Appeals': {
                                        'data': {
                                            '2012': {
                                                'aggr': 900000,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 900000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 620050,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Land Appeals'
                                    },
                                    'Malekula Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 500000,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 500000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 457500,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Malekula Island Court'
                                    },
                                    'Pentecost Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 650000,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 650000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 466000,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Pentecost Island Court'
                                    },
                                    'Santo Malo Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 760000,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 800000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 491000,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Santo Malo Island Court'
                                    },
                                    'Tanna Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 700000,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 700000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 492500,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Tanna Island Court'
                                    },
                                    'Tongoa Island Court': {
                                        'data': {
                                            '2012': {
                                                'aggr': 500000,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 500000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 441150,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Tongoa Island Court'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 6587500,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 6627500,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 4788375,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Land Courts'
                            },
                            'MagistrateCourts': {
                                'categories': {
                                    'Amobore MC Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 624997,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 574997,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 463747,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Amobore MC Registry'
                                    },
                                    'Chief Magistrate Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 4822757,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 5124977,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 4790398,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Chief Magistrate Office'
                                    },
                                    'Isangel MC Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 4024830,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3751335,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3944878,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Isangel MC Registry'
                                    },
                                    'Lakatoro MC Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1133602,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 4622217,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 4504813,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Lakatoro MC Registry'
                                    },
                                    'Luganville MC Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 4307603,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 4310655,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 6283606,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Luganville MC Registry'
                                    },
                                    'Port Vila MCt Office Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 13007391,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 14585347,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 15356483,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Port Vila MCt Office Registry'
                                    },
                                    'Sola MC Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 600000,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 500000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 391000,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Sola MC Registry'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 28521180,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 33469528,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 35734925,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Magistrate Courts'
                            },
                            'SupremeCourt': {
                                'categories': {
                                    'Ambore Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 674997,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 674997,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 560747,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Ambore Registry'
                                    },
                                    'Chief Justice Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 8775025,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 11918462,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 8921824,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Chief Justice Office'
                                    },
                                    'Isangel Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 837500,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 837500,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 481475,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Isangel Registry'
                                    },
                                    'Lakatoro Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 674997,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 674997,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 560747,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Lakatoro Registry'
                                    },
                                    'Luganville Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 7157841,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 7195157,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 7045717,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Luganville Registry'
                                    },
                                    'Port Vila Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 23161681,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 22628729,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 30223676,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Port Vila Registry'
                                    },
                                    'Principal Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 39206480,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 29400025,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 21071500,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Principal Registry'
                                    },
                                    'Regional Conferences': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2500000,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2500000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1705000,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Regional Conferences'
                                    },
                                    'Sola Registry': {
                                        'data': {
                                            '2012': {
                                                'aggr': 762503,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 762503,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 500128,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Sola Registry'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 83751024,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 76592370,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 82045610,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Supreme Court'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 186423069,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 185905746,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 192159675,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Judiciary'
                    },
                    'Malvatumauri': {
                        'categories': {
                            'AdministrationoftheNationalCouncilofChiefs': {
                                'data': {
                                    '2012': {
                                        'aggr': 16386432,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 22528867,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 17800840,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Administration of the National Council of Chiefs'
                            },
                            'Fundsfor14IslandsCouncilofChiefs': {
                                'data': {
                                    '2012': {
                                        'aggr': 4690727,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 5387000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 5387000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Funds for 14 Islands Council of Chiefs'
                            },
                            'MalvatumauriMembersAllowance': {
                                'data': {
                                    '2012': {
                                        'aggr': 9662607,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 14249422,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 6275304,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Malvatumauri Members Allowance'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 30739766,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 42165289,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 29463144,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Malvatumauri'
                    },
                    'NationalAuditOffice': {
                        'categories': {
                            'AuditOperations': {
                                'data': {
                                    '2012': {
                                        'aggr': 9778622,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 18242294,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 17230204,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Audit Operations'
                            },
                            'CorporateServices': {
                                'data': {
                                    '2012': {
                                        'aggr': 7628448,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 8867837,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 8186282,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Corporate Services'
                            },
                            'PlanningPolicy&Standards': {
                                'data': {
                                    '2012': {
                                        'aggr': 4300682,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 5455403,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 6915003,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Planning Policy & Standards'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 21707752,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 32565534,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 32331489,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'National Audit Office'
                    },
                    'OfficeoftheOmbudsman': {
                        'data': {
                            '2012': {
                                'aggr': 39281653,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 40972648,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 36503195,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Planning Management and Investigations'
                    },
                    'ParliamentCorporateServicesOffice': {
                        'categories': {
                            'FinancialManagement': {
                                'data': {
                                    '2012': {
                                        'aggr': 3425798,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 2773494,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 2821815,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Financial Management'
                            },
                            'MembersAllocation': {
                                'data': {
                                    '2012': {
                                        'aggr': 51053022,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 50000000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 52000000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Members Allocation'
                            },
                            'PersonnelAdministrationandMaintenance': {
                                'data': {
                                    '2012': {
                                        'aggr': 23079360,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 21522980,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 21918660,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Personnel Administration and Maintenance'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 77558180,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 74296474,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 76740475,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Parliament Corporate Services Office'
                    },
                    'ParliamentHansardOffice': {
                        'categories': {
                            'LibraryandArchives': {
                                'categories': {
                                    'Library & Archives': {
                                        'data': {
                                            '2012': {
                                                'aggr': 5241170,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3501381,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3534469,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Library & Archives'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 5241170,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3501381,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3534469,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Library and Archives'
                            },
                            'ParliamentaryReporting': {
                                'categories': {
                                    'Parliamentary Reporting Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 7988700,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 8639587,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 8623698,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Parliamentary Reporting Section'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 7988700,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 8639587,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 8623698,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Parliamentary Reporting'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 13229870,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 12140968,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 12158167,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Parliament Hansard Office'
                    },
                    'ParliamentProcedureandLegislativeOffice': {
                        'categories': {
                            'Inter-ParliamentaryRelations': {
                                'data': {
                                    '2012': {
                                        'aggr': 7781778,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 9149108,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 8999555,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Inter-Parliamentary Relations'
                            },
                            'OfficeoftheLeaderoftheOpposition': {
                                'data': {
                                    '2012': {
                                        'aggr': 18029645,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 22618099,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 25495163,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Office of the Leader of the Opposition'
                            },
                            'ProcedureandLegislativeAffairs': {
                                'data': {
                                    '2012': {
                                        'aggr': 669474596,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 370641374,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 360565188,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Procedure and Legislative Affairs'
                            },
                            'SecurityandProtocol': {
                                'data': {
                                    '2012': {
                                        'aggr': 6246799,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3691132,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3778324,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Security and Protocol'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 701532818,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 406099713,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 398838230,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Parliament Procedure and Legislative Office'
                    },
                    'ParliamentStandingCommitteesOffice': {
                        'categories': {
                            'CommitteeoftheStandingOrders': {
                                'categories': {
                                    'Standing Orders Committee Support': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2500337,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3670250,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3287743,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Standing Orders Committee Support'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 2500337,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3670250,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 5000000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Committee of the Standing Orders'
                            },
                            'CommitteeonEconomicPolicy': {
                                'categories': {
                                    'Legislative Review Committee': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2221595,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3670250,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2597590,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Legislative Review Committee'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 2221595,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3670250,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 2597590,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Committee on Economic Policy'
                            },
                            'CommitteeonForeignAffairs&ExternalTrade': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 2499000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Committee on Foreign Affairs & External Trade'
                            },
                            'CommitteeonInstitutions': {
                                'categories': {
                                    'Institutions Committee Support': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2521841,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3686753,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3420370,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Institutions Committee Support'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 2521841,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3686753,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3420370,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Committee on Institutions'
                            },
                            'CommitteeonMembersofParliamentEthics&Integrity': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3137243,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Committee on Members of Parliament Ethics & Integrity'
                            },
                            'CommitteeonParliamentaryPrivilegesandImmunities': {
                                'categories': {
                                    'Parliamentary Privileges Committee Support': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2490133,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3670250,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3283863,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Parliamentary Privileges Committee Support'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 2490133,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3670250,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3283863,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Committee on Parliamentary Privileges and Immunities'
                            },
                            'CommitteeonSocialPolicy': {
                                'categories': {
                                    'Provincial Affairs Committee': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2847135,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3570000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2613549,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Provincial Affairs Committee'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 2847135,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3570000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 2613549,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Committee on Social Policy'
                            },
                            'CommitteeonthePublicAccounts': {
                                'categories': {
                                    'Public Accounts Committee Support': {
                                        'data': {
                                            '2012': {
                                                'aggr': 7238123,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 8537298,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 8005822,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Public Accounts Committee Support'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 7238123,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 8537298,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 8005822,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Committee on the Public Accounts'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 19819164,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 26804801,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 30557437,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Parliament Standing Committees Office'
                    },
                    'PresidentialSupport': {
                        'data': {
                            '2012': {
                                'aggr': 40476895,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 40237809,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 39616402,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Presidential Support'
                    },
                    'PublicProsecutor': {
                        'categories': {
                            'CorporateServices': {
                                'data': {
                                    '2012': {
                                        'aggr': 4100958,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 4359116,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3912885,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Corporate Services'
                            },
                            'InstituteCriminalProceedings': {
                                'data': {
                                    '2012': {
                                        'aggr': 24628661,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 24674390,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 24205566,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Institute Criminal Proceedings'
                            },
                            'PlanningandManagement': {
                                'data': {
                                    '2012': {
                                        'aggr': 8352476,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 8418026,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 8185449,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Planning and Management'
                            },
                            'Representation': {
                                'data': {
                                    '2012': {
                                        'aggr': 47800365,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 47236950,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 49948665,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Representation'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 47800365,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 47236950,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 49948665,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Public Prosecutor'
                    },
                    'PublicServiceCommission': {
                        'categories': {
                            'CorporateServicesUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 46524639,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 56882989,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 41888415,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Corporate Services Unit'
                            },
                            'HumanResourceDevelopment': {
                                'data': {
                                    '2012': {
                                        'aggr': 12771695,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 12671490,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 16552000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Human Resource Development'
                            },
                            'HumanResourceManagement': {
                                'data': {
                                    '2012': {
                                        'aggr': 11868462,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 13648069,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 17562689,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Human Resource Management'
                            },
                            'PerformanceImprovementUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 7794314,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 7262023,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 12673143,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Performance Improvement Unit'
                            },
                            'PublicServiceLegalUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 18697330,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 6141678,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 6692703,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Public Service Legal Unit'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 97656440,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 96606249,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 95368950,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Public Service Commission'
                    },
                    'StateLawOffice': {
                        'categories': {
                            'FinancialIntelligenceUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 9752989,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 10080002,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 10103175,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Financial Intelligence Unit'
                            },
                            'OfficeAdministration': {
                                'data': {
                                    '2012': {
                                        'aggr': 81619982,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 82119459,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 81681228,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Office Administration'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 91372971,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 92199461,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 91784403,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'State Law Office'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 1409284391,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 1139629684,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 1129698286,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Constitutional Agencies'
            },
            'GrantstoInstitutions': {
                'categories': {
                    'ChamberofCommerceandIndustry(CCI)': {
                        'data': {
                            '2012': {
                                'aggr': 27999900,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 30000000,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 30000000,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Chamber of Commerce and Industry (CCI)'
                    },
                    'GrantSPBEAandUSP': {
                        'data': {
                            '2012': {
                                'aggr': 75869818,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 74235509,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 134200000,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Grant SPBEA and USP'
                    },
                    'GranttoVIPA': {
                        'data': {
                            '2012': {
                                'aggr': 38668264,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 38668264,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 38668264,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Grant to VIPA'
                    },
                    'GranttoVanuatuNationalArchives': {
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 10400000,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Grant to Vanuatu National Archives'
                    },
                    'UtilityRegulatoryAuthority': {
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 21226099,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 22226099,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Utility Regulatory Authority'
                    },
                    'VanuatuAgriculturalResearchandTrainingCentre(VARTC)': {
                        'data': {
                            '2012': {
                                'aggr': 35692438,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 35692438,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 39692438,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Vanuatu Agricultural Research and Training Centre (VARTC)'
                    },
                    'VanuatuAgricultureCollege': {
                        'data': {
                            '2012': {
                                'aggr': 82800392,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 82800392,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 82800392,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Vanuatu Agriculture College'
                    },
                    'VanuatuBroadcastingandTelevisionCorporation(VBTC)': {
                        'data': {
                            '2012': {
                                'aggr': 60193316,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 60193317,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 60193317,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Vanuatu Broadcasting and Television Corporation (VBTC)'
                    },
                    'VanuatuCulturalCentre(VCC)': {
                        'data': {
                            '2012': {
                                'aggr': 26291633,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 26291633,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 26291633,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Vanuatu Cultural Centre (VCC)'
                    },
                    'VanuatuMaritimeAdministration(VMA)': {
                        'data': {
                            '2012': {
                                'aggr': 7988,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 15000000,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 15000000,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Vanuatu Maritime Administration (VMA)'
                    },
                    'VanuatuMaritimeCollege': {
                        'data': {
                            '2012': {
                                'aggr': 41255244,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 41255243,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 41255243,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Vanuatu Maritime College'
                    },
                    'VanuatuTourismOffice(VTO)': {
                        'data': {
                            '2012': {
                                'aggr': 202000000,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 159989780,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 159989780,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Vanuatu Tourism Office (VTO)'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 590778993,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 585352675,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 660717166,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Grants to Institutions'
            },
            'MinistryofAgricultureLivestockForestryFisheriesandBiosecurity': {
                'categories': {
                    'AgriculturalandRuralDevelopment': {
                        'categories': {
                            'Commodities': {
                                'categories': {
                                    'Commodities': {
                                        'data': {
                                            '2012': {
                                                'aggr': 39721508,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 48288241,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 49303276,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Commodities'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 39721508,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 48288241,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 49303276,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Commodities'
                            },
                            'FoodProduction': {
                                'data': {
                                    '2012': {
                                        'aggr': 10826678,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 13742945,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 18162316,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Food Production'
                            },
                            'Information': {
                                'data': {
                                    '2012': {
                                        'aggr': 52240951,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 9154783,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Information'
                            },
                            'PolicyandAdministration': {
                                'categories': {
                                    'Agribusiness Support': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2121588,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Agribusiness Support'
                                    },
                                    'Policy and Administration': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 41802986,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 33909360,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Policy and Administration'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 49019331,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 33909360,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Policy and Administration'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 102789137,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 111050517,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 110529735,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Agricultural and Rural Development'
                    },
                    'CabinetSupport': {
                        'data': {
                            '2012': {
                                'aggr': 41848234,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 47135767,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 38024959,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Cabinet Support'
                    },
                    'ExecutiveManagementandCorporateServices': {
                        'categories': {
                            'CorporateServices': {
                                'categories': {
                                    'Livestock Production': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 20017208,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Livestock Production'
                                    },
                                    'Livestock Production North': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 7031370,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Livestock Production North'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 27048578,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Corporate Services'
                            },
                            'OfficeoftheDirectorGeneral': {
                                'data': {
                                    '2012': {
                                        'aggr': 24091208,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 10795912,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 20108016,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Office of the Director General'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 24091208,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 10795912,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 47156594,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Executive Management and Corporate Services'
                    },
                    'Fisheries': {
                        'categories': {
                            'FisheriesAdministration': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 23802142,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 23101024,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Fisheries Administration'
                            },
                            'FisheriesComplianceandLicensing': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 16627752,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 31709753,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Fisheries Compliance and Licensing'
                            },
                            'FisheriesDevelopmentandCapture': {
                                'categories': {
                                    'Fisheries Boat Yard': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 4863606,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 6185822,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Fisheries Boat Yard'
                                    },
                                    'Provincial Fisheries Centre - MALAMPA': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1942834,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1522664,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Provincial Fisheries Centre - MALAMPA'
                                    },
                                    'Provincial Fisheries Centre - PENAMA': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1870696,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1507791,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Provincial Fisheries Centre - PENAMA'
                                    },
                                    'Provincial Fisheries Centre - SANMA': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1814587,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 4356530,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Provincial Fisheries Centre - SANMA'
                                    },
                                    'Provincial Fisheries Centre - SHEFA': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 7111558,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 7315750,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Provincial Fisheries Centre - SHEFA'
                                    },
                                    'Provincial Fisheries Centre - TAFEA': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 5686656,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1682831,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Provincial Fisheries Centre - TAFEA'
                                    },
                                    'Provincial Fisheries Centre - TORBA': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2089564,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1801124,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Provincial Fisheries Centre - TORBA'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 25379501,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 26372512,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Fisheries Development and Capture'
                            },
                            'FisheriesPolicyandManagement': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 7557831,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 9370729,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Fisheries Policy and Management'
                            },
                            'FisheriesResearchandAquaculture': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 13232649,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 11828004,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Fisheries Research and Aquaculture'
                            },
                            'ResearchandProduction': {
                                'data': {
                                    '2012': {
                                        'aggr': 42120546,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Research and Production'
                            },
                            'SeafoodVerification': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3182332,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 9246794,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Seafood Verification'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 86877936,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 89782207,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 111628816,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Fisheries'
                    },
                    'Forestry': {
                        'categories': {
                            'Forestry': {
                                'categories': {
                                    'Policy & Planning': {
                                        'data': {
                                            '2012': {
                                                'aggr': 10387536,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 10407091,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 10335826,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Policy & Planning'
                                    },
                                    'Research': {
                                        'data': {
                                            '2012': {
                                                'aggr': 9508589,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 9634096,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 9514881,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Research'
                                    },
                                    'Sustainability': {
                                        'data': {
                                            '2012': {
                                                'aggr': 34386647,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 32236292,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 33189575,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Sustainability'
                                    },
                                    'Value Adding and Processing': {
                                        'data': {
                                            '2012': {
                                                'aggr': 4878781,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 5213516,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 5077450,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Value Adding and Processing'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 60053428,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 57490995,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 58117732,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Forestry'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 60053428,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 57490995,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 58117732,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Forestry'
                    },
                    'Livestock': {
                        'categories': {
                            'LivestockProductionMalampa': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 2562648,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Livestock Production Malampa'
                            },
                            'LivestockProductionPenama': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 2612098,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Livestock Production Penama'
                            },
                            'LivestockProductionSanma': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 5060107,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Livestock Production Sanma'
                            },
                            'LivestockProductionShefa': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 7837145,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Livestock Production Shefa'
                            },
                            'LivestockProductionTafea': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 6714259,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Livestock Production Tafea'
                            },
                            'LivestockProductionTorba': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 2276119,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Livestock Production Torba'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 41452092,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 27062376,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Livestock'
                    },
                    'VanuatuQuarantineandInspectionService': {
                        'categories': {
                            'BiosecurityAdministration': {
                                'data': {
                                    '2012': {
                                        'aggr': 17842994,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 19838932,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 16092465,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Biosecurity Administration'
                            },
                            'BiosecurityOperationsNorth': {
                                'data': {
                                    '2012': {
                                        'aggr': 17489542,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 13569868,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 11425740,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Biosecurity Operations North'
                            },
                            'BiosecurityOperationsSouth': {
                                'data': {
                                    '2012': {
                                        'aggr': 26276027,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 22186617,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 29634926,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Biosecurity Operations South'
                            },
                            'LivestockProduction': {
                                'categories': {
                                    'Livestock Division': {
                                        'data': {
                                            '2012': {
                                                'aggr': 13264038,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Livestock Division'
                                    },
                                    'Livestock Production North': {
                                        'data': {
                                            '2012': {
                                                'aggr': 4733501,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Livestock Production North'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 17997539,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Livestock Production'
                            },
                            'PlantHealth': {
                                'data': {
                                    '2012': {
                                        'aggr': 7993378,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 7055842,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 6731822,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Plant Health'
                            },
                            'VeterinaryContract': {
                                'data': {
                                    '2012': {
                                        'aggr': 21342124,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 25000000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 26086047,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Veterinary Contract'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 108941604,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 87651259,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 89971000,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Vanuatu Quarantine and Inspection Service'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 424601547,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 445358749,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 482491212,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Agriculture Livestock Forestry Fisheries and Biosecurity'
            },
            'MinistryofCivilAviationMeteorologyandPostalServices': {
                'data': {
                    '2012': {
                        'aggr': 3452029,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 13044054,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 0,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Civil Aviation Meteorology and Postal Services'
            },
            'MinistryofClimateChangeAdaptationGeohazardsMeteorologyandEnergy': {
                'categories': {
                    'CabinetSupport': {
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 34814202,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 23971642,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Cabinet Support'
                    },
                    'Energy': {
                        'categories': {
                            'EnergyManagementandassessment': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 12829785,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Energy Management and assessment'
                            },
                            'Mines&Minerals': {
                                'data': {
                                    '2012': {
                                        'aggr': 16896418,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 13046291,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Mines & Minerals'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 12829785,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Energy'
                    },
                    'Environment': {
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 20173849,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Environment'
                    },
                    'ExecutiveManagement&CorporateServices': {
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 13656238,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Executive Management & Corporate Services'
                    },
                    'NationalDisasterManagement': {
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 24424224,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'National Disaster Management'
                    },
                    'VanuatuMeteorologicalServices': {
                        'categories': {
                            'Geo-hazard': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 1117000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Geo-hazard'
                            },
                            'WeatherForecastingMonitoringandResearch': {
                                'categories': {
                                    'Climate Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 861010,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Climate Section'
                                    },
                                    'ICT-Enginering': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1035080,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'ICT-Enginering'
                                    },
                                    'Observation Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1764536,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Observation Section'
                                    },
                                    'Weather Forcasting & Monitoring': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 937100,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Weather Forcasting & Monitoring'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 138811307,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Weather Forecasting Monitoring and Research'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 139928307,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Vanuatu Meteorological Services'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 187075624,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 219072670,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 234984045,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Climate Change Adaptation Geohazards Meteorology and Energy'
            },
            'MinistryofCommerceIndustryTourismandNi-VanuatuBusiness': {
                'categories': {
                    'CabinetSupport': {
                        'data': {
                            '2012': {
                                'aggr': 56814309,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 46151455,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 45482146,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Cabinet Support'
                    },
                    'ExecutiveManagementandCorporateServices': {
                        'categories': {
                            'ExecutiveManagement': {
                                'categories': {
                                    'Copra Subsidy': {
                                        'data': {
                                            '2012': {
                                                'aggr': 190767886,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 108000000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 60000000,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Copra Subsidy'
                                    },
                                    'Trade & Cooperative Executive Management': {
                                        'data': {
                                            '2012': {
                                                'aggr': 27805237,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 36905150,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 29162690,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Trade & Cooperative Executive Management'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 218573123,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 144905150,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 89162690,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Executive Management'
                            },
                            'FoodTechnology': {
                                'categories': {
                                    'Administration': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2111518,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 4178158,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3412824,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Administration'
                                    },
                                    'Laboratory Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1797274,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1037126,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1697568,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Laboratory Section'
                                    },
                                    'Product Development Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 4882763,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3262048,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3743948,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Product Development Section'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 8791555,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 8477332,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 10854340,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Food Technology'
                            },
                            'VanuatuIntellectualPropertyDevelopment': {
                                'categories': {
                                    'Intellectual Property Right': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 4100000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 4993605,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Intellectual Property Right'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 4100000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 6293605,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Vanuatu Intellectual Property Development'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 227364678,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 157482482,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 106310635,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Executive Management and Corporate Services'
                    },
                    'IndustryDevelopment': {
                        'categories': {
                            'Marketing&PromotionSection': {
                                'categories': {
                                    'Marketing & Promotion Division': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2214064,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2824009,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3326794,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Marketing & Promotion Division'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 2214064,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 2824009,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3326794,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Marketing & Promotion Section'
                            },
                            'PolicyPlanningAdministration&FinancialComprising': {
                                'categories': {
                                    'Policy & Admin Division': {
                                        'data': {
                                            '2012': {
                                                'aggr': 9025687,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 9931146,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 8307332,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Policy & Admin Division'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 9025687,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 9931146,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 8307332,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Policy Planning Administration & Financial Comprising'
                            },
                            'PrimaryIndustriesDevelopmentSection': {
                                'categories': {
                                    'Primary Industry Division': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1867888,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3923853,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3618826,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Primary Industry Division'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 1867888,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3923853,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3618826,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Primary Industries Development Section'
                            },
                            'ProvincialIndustrialExtensionServices': {
                                'categories': {
                                    'IDO Malampa': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1929597,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 940923,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1467461,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'IDO Malampa'
                                    },
                                    'IDO Penama': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1368546,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1468414,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1442501,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'IDO Penama'
                                    },
                                    'IDO Sanma': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2267817,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1672461,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2366961,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'IDO Sanma'
                                    },
                                    'IDO Shefa': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1991864,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 747421,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1467461,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'IDO Shefa'
                                    },
                                    'IDO Tafea': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1268227,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1397421,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1467461,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'IDO Tafea'
                                    },
                                    'Trade Development Division': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 5937910,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Trade Development Division'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 8826051,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 6226640,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 14149755,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Provincial Industrial Extension Services'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 21933690,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 22905648,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 29402707,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Industry Development'
                    },
                    'Ni-VanuatuBusinessDevelopment': {
                        'categories': {
                            'CooperativesDevelopment': {
                                'data': {
                                    '2012': {
                                        'aggr': 58864220,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 60107452,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Cooperatives Development'
                            },
                            'Ni-VanuatuBusinessDevelopment': {
                                'categories': {
                                    'Cooperative Policy & Administration': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 11724520,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Cooperative Policy & Administration'
                                    },
                                    'Education & Training Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 10382683,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Education & Training Section'
                                    },
                                    'Malampa Provincial Coop Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 6133327,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Malampa Provincial Coop Office'
                                    },
                                    'Penama Provincial Coop Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 5425772,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Penama Provincial Coop Office'
                                    },
                                    'Sanma Provincial Coop Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 6260562,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Sanma Provincial Coop Office'
                                    },
                                    'Shefa Provincial Coop Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 6288008,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Shefa Provincial Coop Office'
                                    },
                                    'Tafea Provincial Coop Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 6401282,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Tafea Provincial Coop Office'
                                    },
                                    'Torba Provincial Coop Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 5742001,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Torba Provincial Coop Office'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 58358155,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Ni-Vanuatu Business Development'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 58864220,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 60107452,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 0,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Ni-Vanuatu Business Development'
                    },
                    'TourismDevelopment': {
                        'categories': {
                            'ProvincialTourismDevelopment': {
                                'categories': {
                                    'Shefa Provincial Tourism Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2918217,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3277812,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2225645,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Shefa Provincial Tourism Office'
                                    },
                                    'Torba Provincial Tourism Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 3120313,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3135207,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2216382,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Torba Provincial Tourism Office'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 20878567,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 24472371,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 20009372,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Provincial Tourism Development'
                            },
                            'TourismDevelopment': {
                                'categories': {
                                    'Malampa Provincial Tourism Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Malampa Provincial Tourism Office'
                                    },
                                    'Outer Islands Development': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2586956,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2839161,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 4350957,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Outer Islands Development'
                                    },
                                    'Penama Provincial Tourism Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Penama Provincial Tourism Office'
                                    },
                                    'Policy & Administration': {
                                        'data': {
                                            '2012': {
                                                'aggr': 15634828,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 6503024,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 6510236,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Policy & Administration'
                                    },
                                    'Product Development Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2687474,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 10827137,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 4409338,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Product Development Section'
                                    },
                                    'Sanma Provincial Tourism Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Sanma Provincial Tourism Office'
                                    },
                                    'Tafea Provincial Tourism Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Tafea Provincial Tourism Office'
                                    },
                                    'Tourism Accredition & Classification': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Tourism Accredition & Classification'
                                    },
                                    'Tourism Investment Promotion & Facilitation': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2848372,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3773655,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 4332768,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Tourism Investment Promotion & Facilitation'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 23757630,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 23942977,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 23889013,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Tourism Development'
                            },
                            'TourismStandards': {
                                'data': {
                                    '2012': {
                                        'aggr': 2774561,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 4527578,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 4230794,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Tourism Standards'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 47410758,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 52942926,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 48129179,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Tourism Development'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 412387655,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 339589963,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 287682822,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Commerce Industry Tourism and Ni-Vanuatu Business'
            },
            'MinistryofCooperativesandNi-VanuatuBusinessDevelopmentServices': {
                'categories': {
                    'PortfolioCoordination': {
                        'categories': {
                            'PortfolioCoordination': {
                                'categories': {
                                    'Cabinet Operations': {
                                        'data': {
                                            '2012': {
                                                'aggr': 39962239,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 12017483,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Cabinet Operations'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 39962239,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 12017483,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Portfolio Coordination'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 39962239,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 12017483,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 0,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Portfolio Coordination'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 39962239,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 12017483,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 0,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Cooperatives and Ni-Vanuatu Business Development Services'
            },
            'MinistryofEducation': {
                'categories': {
                    'CabinetSupport': {
                        'data': {
                            '2012': {
                                'aggr': 45457009,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 47447892,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 45997083,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Cabinet Support'
                    },
                    'ExecutiveManagementandCorporateServices': {
                        'categories': {
                            'Administration&FinanceDivision': {
                                'categories': {
                                    'Administration Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 34724127,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 14067948,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 9612051,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Administration Unit'
                                    },
                                    'Finance Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 14889615,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 15319083,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 14706747,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Finance Unit'
                                    },
                                    'Policy and Planning Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Policy and Planning Unit'
                                    },
                                    'Procurement & Assets Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2514969,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3864515,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Procurement & Assets Unit'
                                    },
                                    'Training and Scholarship Coordination Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 12111705,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 6509341,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 13605221,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Training and Scholarship Coordination Unit'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 94394478,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 88659167,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 75637339,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Administration & Finance Division'
                            },
                            'DirectorGeneral\'sDivision': {
                                'categories': {
                                    'Human Resource Management Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 4896593,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 6467023,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Human Resource Management Unit'
                                    },
                                    'Internal Audit Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 9385930,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 10019307,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 9188089,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Internal Audit Unit'
                                    },
                                    'Office of the Director General': {
                                        'data': {
                                            '2012': {
                                                'aggr': 12039110,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 15366917,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 8466217,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Office of the Director General'
                                    },
                                    'Office of the Director of Administration & Finance': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Office of the Director of Administration & Finance'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 26321633,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 25386224,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 24121329,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Director General\'s Division'
                            },
                            'Policy&PlanningDivision': {
                                'categories': {
                                    'Facilities Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 6893481,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 7156981,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 6451524,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Facilities Unit'
                                    },
                                    'Human Resource Development': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2292658,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Human Resource Development'
                                    },
                                    'Information and Communication Technology Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 19015449,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 20503119,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 19227201,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Information and Communication Technology Unit'
                                    },
                                    'Office of the Director of Policy and Planning': {
                                        'data': {
                                            '2012': {
                                                'aggr': 4714430,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 6519814,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 5952954,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Office of the Director of Policy and Planning'
                                    },
                                    'VEMIS Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 5303153,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 9514930,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 6262565,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'VEMIS Unit'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 44485095,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 52061344,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 49234561,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Policy & Planning Division'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 165201206,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 166106735,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 148993229,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Executive Management and Corporate Services'
                    },
                    'PrimarySchoolsDivision': {
                        'categories': {
                            'ApostolicPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 3660017,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3758592,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 2442694,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Apostolic Primary Schools'
                            },
                            'CatholicPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 272192082,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 266991650,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 262673487,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Catholic Primary Schools'
                            },
                            'ChurchofMelanesiaPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 3046852,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 2054708,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3244605,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Church of Melanesia Primary Schools'
                            },
                            'MalampaPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 189059085,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 178072908,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 172292899,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Malampa Primary Schools'
                            },
                            'NeilThomasMinistryPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 6410000,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 2137862,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3321785,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Neil Thomas Ministry Primary Schools'
                            },
                            'PenamaPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 171410465,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 154856793,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 148448170,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Penama Primary Schools'
                            },
                            'PreSchoolsGrant': {
                                'data': {
                                    '2012': {
                                        'aggr': -70000,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 4000000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 4000000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Pre Schools Grant'
                            },
                            'PresbyterianPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 5582918,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 7130345,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Presbyterian Primary Schools'
                            },
                            'PrimarySchoolsGrant': {
                                'data': {
                                    '2012': {
                                        'aggr': 164250000,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 202312534,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 252890663,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Primary Schools Grant'
                            },
                            'PrimaryTeachersIncidentials': {
                                'data': {
                                    '2012': {
                                        'aggr': 14411129,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 4332080,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 5852835,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Primary Teachers Incidentials'
                            },
                            'PrimaryTeachersonScholarship': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 9666011,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Primary Teachers on Scholarship'
                            },
                            'ProtestantPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 46259236,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 43263842,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 39497599,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Protestant Primary Schools'
                            },
                            'ProvincialEducationOfficeMaintenance': {
                                'data': {
                                    '2012': {
                                        'aggr': 2999859,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 2900000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 2910000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Provincial Education Office Maintenance'
                            },
                            'SDAPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 26788661,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 27697326,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 29659641,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'SDA Primary Schools'
                            },
                            'SanmaPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 209612215,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 209157116,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 213354624,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Sanma Primary Schools'
                            },
                            'SchoolsSolarPanelMaintenance': {
                                'data': {
                                    '2012': {
                                        'aggr': 739111,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Schools Solar Panel Maintenance'
                            },
                            'ShefaPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 368202730,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 360928879,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 363915448,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Shefa Primary Schools'
                            },
                            'TafeaPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 203861276,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 190068256,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 174218294,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Tafea Primary Schools'
                            },
                            'TorbaPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 67652722,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 63065009,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 59695846,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Torba Primary Schools'
                            },
                            'VFFAcademyPrimarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 1606103,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3426921,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'VFF Academy Primary Schools'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 1756636058,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 1721180473,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 1758641867,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Primary Schools Division'
                    },
                    'SchoolAdministrationDivision': {
                        'categories': {
                            'EarlyChildhoodEducationUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 13526438,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 2242667,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 2920543,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Early Childhood Education Unit'
                            },
                            'GovernmentAssistedEducationAuthorityUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 3142062,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 7886514,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 6146562,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Government Assisted Education Authority Unit'
                            },
                            'MalampaProvincialEducationOffice': {
                                'data': {
                                    '2012': {
                                        'aggr': 10555100,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 11563876,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 12307787,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Malampa Provincial Education Office'
                            },
                            'OfficeoftheDirectorofSchoolAdministration': {
                                'data': {
                                    '2012': {
                                        'aggr': 31364919,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 11747198,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 8452500,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Office of the Director of School Administration'
                            },
                            'PenamaProvincialEducationOffice': {
                                'data': {
                                    '2012': {
                                        'aggr': 10055216,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 12107235,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 12802765,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Penama Provincial Education Office'
                            },
                            'PrimaryEducationUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 10288216,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 12135540,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 13826647,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Primary Education Unit'
                            },
                            'SanmaProvincialEducationOffice': {
                                'data': {
                                    '2012': {
                                        'aggr': 7832448,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 9453461,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 11297133,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Sanma Provincial Education Office'
                            },
                            'SecondaryEducationUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 6374449,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 5763891,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 6367806,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Secondary Education Unit'
                            },
                            'ShefaProvincialEducationOffice': {
                                'data': {
                                    '2012': {
                                        'aggr': 11761139,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 14120648,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 14510343,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Shefa Provincial Education Office'
                            },
                            'TafeaProvincialEducationOffice': {
                                'data': {
                                    '2012': {
                                        'aggr': 11000553,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 11507902,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 13338574,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Tafea Provincial Education Office'
                            },
                            'Technical&HigherEducationUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 8461492,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 2515746,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 17502496,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Technical & Higher Education Unit'
                            },
                            'TorbaProvincialEducationOffice': {
                                'data': {
                                    '2012': {
                                        'aggr': 8158922,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 9986397,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 10116381,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Torba Provincial Education Office'
                            },
                            'Training&ScholarshipCoordinationUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 18857871,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 15580860,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Training & Scholarship Coordination Unit'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 151494396,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 126611935,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 129589537,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'School Administration Division'
                    },
                    'SchoolSupportServicesDivision': {
                        'categories': {
                            'CurriculumDevelopmentUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Curriculum Development Unit'
                            },
                            'Examination&AssessmentUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 22143137,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 23936061,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Examination & Assessment Unit'
                            },
                            'SchoolBasedManagementUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 15119009,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 16077401,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'School Based Management Unit'
                            },
                            'ZoneCurriculumAdvisors': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 78648122,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 82363752,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Zone Curriculum Advisors'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 142333413,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 152345540,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'School Support Services Division'
                    },
                    'SecondarySchoolsDivision': {
                        'categories': {
                            'ApostolicSecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3255289,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 4826428,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Apostolic Secondary Schools'
                            },
                            'Bahai\'iSecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 1774710,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Bahai\'i Secondary Schools'
                            },
                            'CatholicSecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 163121508,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 171325213,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 170891714,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Catholic Secondary Schools'
                            },
                            'ChurchofChristSecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 25909753,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 24476021,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 21021891,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Church of Christ Secondary Schools'
                            },
                            'ChurchofMalanesiaSecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 36009813,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 32648960,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 30977987,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Church of Malanesia Secondary Schools'
                            },
                            'MalampaSecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 115716921,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 120586413,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 122064488,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Malampa Secondary Schools'
                            },
                            'NTMSecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3238918,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'NTM Secondary Schools'
                            },
                            'PenamaSecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 45350569,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 45756566,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 48566269,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Penama Secondary Schools'
                            },
                            'PrebyterianSecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 37299150,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 37338668,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 25535656,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Prebyterian Secondary Schools'
                            },
                            'ProtestantSecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 30513332,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 26757192,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 28836998,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Protestant Secondary Schools'
                            },
                            'SDASecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 41035911,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 42888503,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 44093433,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'SDA Secondary Schools'
                            },
                            'SanmaSecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 155287232,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 156088876,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 159066016,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Sanma Secondary Schools'
                            },
                            'SecondarySchoolsGrant': {
                                'data': {
                                    '2012': {
                                        'aggr': 100736929,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 101301822,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 92560000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Secondary Schools Grant'
                            },
                            'SecondaryTeachersIncidentals': {
                                'data': {
                                    '2012': {
                                        'aggr': 2035193,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 2932800,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3395000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Secondary Teachers Incidentals'
                            },
                            'SecondaryTeachersonScholarship': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 33786374,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Secondary Teachers on Scholarship'
                            },
                            'ShefaSecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 282018995,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 285107977,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 271578189,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Shefa Secondary Schools'
                            },
                            'TafeaSecondarySchool': {
                                'data': {
                                    '2012': {
                                        'aggr': 89630008,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 88704213,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 95104027,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Tafea Secondary School'
                            },
                            'TorbaSecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 12440233,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 12485815,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 17784494,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Torba Secondary Schools'
                            },
                            'VFFAcademySecondarySchools': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 1587510,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'VFF Academy Secondary Schools'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 1137105547,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 1151654328,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 1176690102,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Secondary Schools Division'
                    },
                    'TeachingServicesCommission&OtherEducationCommissionsandCouncils': {
                        'data': {
                            '2012': {
                                'aggr': 104260643,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 116232537,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 103782955,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Teaching Services Commission & Other Education Commissions and Councils'
                    },
                    'Technical&HigherEducationDivision': {
                        'categories': {
                            'InServiceUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 17050692,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 23179516,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'In Service Unit'
                            },
                            'TafeaPrimarySchool': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Tafea Primary School'
                            },
                            'VanuatuGovernmentScholarshipFund': {
                                'data': {
                                    '2012': {
                                        'aggr': 407099748,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 608625006,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 459515006,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Vanuatu Government Scholarship Fund'
                            },
                            'VanuatuInstituteofTeacherEducation': {
                                'data': {
                                    '2012': {
                                        'aggr': 77324057,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 80328551,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 77267618,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Vanuatu Institute of Teacher Education'
                            },
                            'VanuatuInstituteofTechnology': {
                                'data': {
                                    '2012': {
                                        'aggr': 101018740,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 107453633,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 101922050,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Vanuatu Institute of Technology'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 585442545,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 813457882,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 661884190,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Technical & Higher Education Division'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 3945597404,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 4285025195,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 4177924503,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Education'
            },
            'MinistryofFinanceandEconomicManagement': {
                'categories': {
                    'BorderControlandEnforcement': {
                        'categories': {
                            'CustomsBorderControl': {
                                'data': {
                                    '2012': {
                                        'aggr': 33257525,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 33225407,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 36449701,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Customs Border Control'
                            },
                            'CustomsBorderControl-Santo': {
                                'data': {
                                    '2012': {
                                        'aggr': 11525747,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 9843325,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 9680511,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Customs Border Control - Santo'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 44783272,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 43068732,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 46130212,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Border Control and Enforcement'
                    },
                    'CabinetSupport': {
                        'data': {
                            '2012': {
                                'aggr': 41498274,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 43346193,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 42417930,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Cabinet Support'
                    },
                    'ExecutiveManagementandCorporateServices': {
                        'categories': {
                            'CorporateServices': {
                                'categories': {
                                    'Customs Corporate Services': {
                                        'data': {
                                            '2012': {
                                                'aggr': 37248292,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 33868566,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 34647288,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Customs Corporate Services'
                                    },
                                    'DOF Corporate Services Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 45246652,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 50636808,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 45816233,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'DOF Corporate Services Section'
                                    },
                                    'Ministry Executive': {
                                        'data': {
                                            '2012': {
                                                'aggr': 32251232,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 25832940,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 26323658,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Ministry Executive'
                                    },
                                    'NSO Office Admin': {
                                        'data': {
                                            '2012': {
                                                'aggr': 12232829,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 9776014,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 5055504,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'NSO Office Admin'
                                    },
                                    'VAT Audit Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'VAT Audit Section'
                                    },
                                    'VAT Revenue Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'VAT Revenue Section'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 126979005,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 120114328,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 111842683,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Corporate Services'
                            },
                            'InformationServices': {
                                'categories': {
                                    'Customs Information Services': {
                                        'data': {
                                            '2012': {
                                                'aggr': 36787862,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 37224818,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 37224180,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Customs Information Services'
                                    },
                                    'FMIS Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 31133238,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 51333064,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 50062602,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'FMIS Section'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 240383819,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 88557882,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 87286782,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Information Services'
                            },
                            'MinistryExecutive&InternalAudit': {
                                'categories': {
                                    'Director - Customs': {
                                        'data': {
                                            '2012': {
                                                'aggr': 9018577,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 8532856,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 10953327,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Director - Customs'
                                    },
                                    'Director - DOF': {
                                        'data': {
                                            '2012': {
                                                'aggr': 822699,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 4341988,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 6522245,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Director - DOF'
                                    },
                                    'Director - NSO': {
                                        'data': {
                                            '2012': {
                                                'aggr': 3152305,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3200455,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3122710,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Director - NSO'
                                    },
                                    'Internal Audit Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 11639308,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 11948367,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Internal Audit Section'
                                    },
                                    'Office of the Director General': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Office of the Director General'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 35809982,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 47190447,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 49889661,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Ministry Executive & Internal Audit'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 403172806,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 255862657,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 249019126,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Executive Management and Corporate Services'
                    },
                    'FinancialAndEconomicManagement': {
                        'categories': {
                            'EconomicPolicyDevelopment': {
                                'data': {
                                    '2012': {
                                        'aggr': 20968491,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 21826884,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 22338207,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Economic Policy Development'
                            },
                            'GovernmentFinancialServices': {
                                'categories': {
                                    'Accounting Group (Financial Controller)': {
                                        'data': {
                                            '2012': {
                                                'aggr': 3173906,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 4825215,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 4687407,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Accounting Group (Financial Controller)'
                                    },
                                    'Aid Coordination Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2551966,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 7001305,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 7477650,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Aid Coordination Section'
                                    },
                                    'Budget Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 35535182,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 45661437,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 45488318,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Budget Section'
                                    },
                                    'Central Payments': {
                                        'data': {
                                            '2012': {
                                                'aggr': 485052242,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Central Payments'
                                    },
                                    'Finance Services Bureau Malampa Province': {
                                        'data': {
                                            '2012': {
                                                'aggr': 18770,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3284775,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3225859,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Finance Services Bureau Malampa Province'
                                    },
                                    'Finance Services Bureau Penama Province': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2947278,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2890411,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Finance Services Bureau Penama Province'
                                    },
                                    'Finance Services Bureau Sanma Province': {
                                        'data': {
                                            '2012': {
                                                'aggr': 3741147,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 4541715,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 5177093,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Finance Services Bureau Sanma Province'
                                    },
                                    'Finance Services Bureau Tafea Province': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1796841,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2984775,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2920564,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Finance Services Bureau Tafea Province'
                                    },
                                    'Finance Services Bureau Torba Province': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1097739,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2984775,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2158962,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Finance Services Bureau Torba Province'
                                    },
                                    'Finance and Administration Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 7985816,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 7938562,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 7322886,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Finance and Administration Section'
                                    },
                                    'Financial Accounting Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 11849064,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 18115033,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 20088566,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Financial Accounting Section'
                                    },
                                    'Government Business Enterprise Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 3512134,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1196000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Government Business Enterprise Unit'
                                    },
                                    'Government Business Monitoring and Evaluation Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 3886226,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 11533292,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 11233856,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Government Business Monitoring and Evaluation Section'
                                    },
                                    'Land Compensation payment': {
                                        'data': {
                                            '2012': {
                                                'aggr': 117796650,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 125000000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 125000000,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Land Compensation payment'
                                    },
                                    'Legal Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 4300579,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 7790261,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 7569394,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Legal Unit'
                                    },
                                    'Line Agency Accounting Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2284439,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3771569,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3581110,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Line Agency Accounting Section'
                                    },
                                    'Payments Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 14894492,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 23961852,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 23429760,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Payments Section'
                                    },
                                    'Payroll Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 23595398,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 29871570,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 28303778,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Payroll Section'
                                    },
                                    'Procurement and Asset Management Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 6509447,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 11379476,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 10877026,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Procurement and Asset Management Section'
                                    },
                                    'Rates & Taxes Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Rates & Taxes Section'
                                    },
                                    'Revenue Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 14696027,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 17833553,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 17430761,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Revenue Section'
                                    },
                                    'Tender Board': {
                                        'data': {
                                            '2012': {
                                                'aggr': 7450131,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 8005621,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 7642750,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Tender Board'
                                    },
                                    'Treasury Divison': {
                                        'data': {
                                            '2012': {
                                                'aggr': 12395152,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 15489671,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 13205306,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Treasury Divison'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 773545170,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 356117735,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 349711457,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Government Financial Services'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 814721260,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 377944619,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 372049664,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Financial And Economic Management'
                    },
                    'NationalStatistics': {
                        'categories': {
                            'NationalStatisticalCollectionAnalysis&Reporting': {
                                'categories': {
                                    'Emoluments Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 31516833,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 36947983,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 34414196,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Emoluments Section'
                                    },
                                    'Provincial Offices': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Provincial Offices'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 31516833,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 36947983,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 34414196,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'National Statistical Collection Analysis & Reporting'
                            },
                            'ProvincialStatisticsOffices': {
                                'categories': {
                                    'Economic Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2709001,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Economic Section'
                                    },
                                    'Social Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1071502,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Social Section'
                                    },
                                    'Statistical Leadership and Coordination Section': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2223915,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Statistical Leadership and Coordination Section'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 10842914,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 11920593,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 18065178,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Provincial Statistics Offices'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 42359747,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 48868576,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 52479374,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'National Statistics'
                    },
                    'RevenueCollection': {
                        'categories': {
                            'CustomsandExciseCollections': {
                                'categories': {
                                    'Customs Post Clearance & Excise Audit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 20704443,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 20636449,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 20855116,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Customs Post Clearance & Excise Audit'
                                    },
                                    'Customs Revenue - Santo': {
                                        'data': {
                                            '2012': {
                                                'aggr': 20150518,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 19627639,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 19877106,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Customs Revenue - Santo'
                                    },
                                    'Customs Revenue. Trades Tariff & Compliance': {
                                        'data': {
                                            '2012': {
                                                'aggr': 35968736,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 33350199,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 33234116,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Customs Revenue. Trades Tariff & Compliance'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 76823697,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 73614287,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 79078292,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Customs and Excise Collections'
                            },
                            'RatesandTaxesCollection': {
                                'data': {
                                    '2012': {
                                        'aggr': 26450748,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 28112637,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 30571417,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Rates and Taxes Collection'
                            },
                            'VATCollections': {
                                'data': {
                                    '2012': {
                                        'aggr': 70430748,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 71285914,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 77588627,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'VAT Collections'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 173705193,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 173012838,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 187238336,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Revenue Collection'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 1527332171,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 959940212,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 949334642,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Finance and Economic Management'
            },
            'MinistryofForeignAffairsandExternalTrade': {
                'categories': {
                    'CabinetSupport': {
                        'data': {
                            '2012': {
                                'aggr': 52216218,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 54613974,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 60192855,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Cabinet Support'
                    },
                    'DeptofForeignAffairs': {
                        'categories': {
                            'CanberraMission': {
                                'data': {
                                    '2012': {
                                        'aggr': 22082197,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 26934183,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 26006221,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Canberra Mission'
                            },
                            'ConsulNoumea': {
                                'data': {
                                    '2012': {
                                        'aggr': 11975000,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 11901227,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 10751548,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Consul Noumea'
                            },
                            'ConsulateAuckland': {
                                'data': {
                                    '2012': {
                                        'aggr': 8603325,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 8715314,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 10466494,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Consulate Auckland'
                            },
                            'CorporateServices': {
                                'data': {
                                    '2012': {
                                        'aggr': 55356724,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 48320957,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 53905397,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Corporate Services'
                            },
                            'EmbassyBeijing': {
                                'data': {
                                    '2012': {
                                        'aggr': 22939010,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 23733568,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 25484492,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Embassy Beijing'
                            },
                            'EmbassyBrussels': {
                                'data': {
                                    '2012': {
                                        'aggr': 27420149,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 37610765,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 22124797,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Embassy Brussels'
                            },
                            'GranttoMSG': {
                                'data': {
                                    '2012': {
                                        'aggr': 18000000,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 45000000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 18000000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Grant to MSG'
                            },
                            'HighCommissionSuva': {
                                'data': {
                                    '2012': {
                                        'aggr': 7643004,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 12237653,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 10075200,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'High Commission Suva'
                            },
                            'HonoraryConsuls': {
                                'data': {
                                    '2012': {
                                        'aggr': 8723856,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 4221370,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 4235777,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Honorary Consuls'
                            },
                            'InternationalOrganisations': {
                                'data': {
                                    '2012': {
                                        'aggr': 29977478,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 30000000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 30000000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'International Organisations'
                            },
                            'PermanentMissiontotheUnitedStates': {
                                'data': {
                                    '2012': {
                                        'aggr': 38446849,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 36481237,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 38427006,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Permanent Mission to the United States'
                            },
                            'Protocol&Consular': {
                                'data': {
                                    '2012': {
                                        'aggr': 539655,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 494613,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 485000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Protocol & Consular'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 251707247,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 285650887,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 272921012,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Dept of Foreign Affairs'
                    },
                    'ExternalTradeNegotiationandDevelopment': {
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 32908355,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'External Trade Negotiation and Development'
                    },
                    'TradeDevelopmentandFacilitation': {
                        'categories': {
                            'ExternalTradePolicyandAdministration': {
                                'data': {
                                    '2012': {
                                        'aggr': 12424186,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 12074351,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'External Trade Policy and Administration'
                            },
                            'IndustryandCommerce': {
                                'data': {
                                    '2012': {
                                        'aggr': 10495030,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 12885608,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Industry and Commerce'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 22919216,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 24959959,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 0,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Trade Development and Facilitation'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 326842681,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 365224820,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 366022222,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Foreign Affairs and External Trade'
            },
            'MinistryofHealth': {
                'categories': {
                    'CabinetSupport': {
                        'data': {
                            '2012': {
                                'aggr': 49686073,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 47585260,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 46733754,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Cabinet Support'
                    },
                    'ExecutiveManagementandCorporateServices': {
                        'categories': {
                            'CorporateServices': {
                                'categories': {
                                    'Community Health Malampa Province': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Community Health Malampa Province'
                                    },
                                    'Director of Public Health': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Director of Public Health'
                                    },
                                    'Planning & Administration': {
                                        'data': {
                                            '2012': {
                                                'aggr': 215462686,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 199021381,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 99215181,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Planning & Administration'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 215462686,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 199021381,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 139415181,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Corporate Services'
                            },
                            'HealthSectorHumanResourceDevelopment': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 67087403,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Health Sector Human Resource Development'
                            },
                            'MinistryExecutive': {
                                'data': {
                                    '2012': {
                                        'aggr': 7169069,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 11066476,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 12638709,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Ministry Executive'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 222631755,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 210087857,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 219141293,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Executive Management and Corporate Services'
                    },
                    'HealthServices': {
                        'categories': {
                            'CommunityHealthServices': {
                                'categories': {
                                    'Community Health Malampa Province': {
                                        'data': {
                                            '2012': {
                                                'aggr': 72678045,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 68087633,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 66751429,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Community Health Malampa Province'
                                    },
                                    'Community Health Penama Province': {
                                        'data': {
                                            '2012': {
                                                'aggr': 57577423,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 53970296,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 53415630,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Community Health Penama Province'
                                    },
                                    'Community Health Sanma Province': {
                                        'data': {
                                            '2012': {
                                                'aggr': 64613102,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 58885557,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 57827657,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Community Health Sanma Province'
                                    },
                                    'Community Health Shefa Province': {
                                        'data': {
                                            '2012': {
                                                'aggr': 59406051,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 56293377,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 55198285,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Community Health Shefa Province'
                                    },
                                    'Community Health Tafea Province': {
                                        'data': {
                                            '2012': {
                                                'aggr': 42059824,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 38304612,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 37931365,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Community Health Tafea Province'
                                    },
                                    'Community Health Torba Province': {
                                        'data': {
                                            '2012': {
                                                'aggr': 33043326,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 32999972,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 32227957,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Community Health Torba Province'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 329377771,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 308541447,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 303352323,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Community Health Services'
                            },
                            'HospitalServices': {
                                'categories': {
                                    'Director - Curative & Hospital Services': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 9097194,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Director - Curative & Hospital Services'
                                    },
                                    'Director - Northern Health Care': {
                                        'data': {
                                            '2012': {
                                                'aggr': 11942952,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 15381455,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Director - Northern Health Care'
                                    },
                                    'Director - Southern Health Care': {
                                        'data': {
                                            '2012': {
                                                'aggr': 12475959,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 12711465,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Director - Southern Health Care'
                                    },
                                    'Doctors Visitations & Hospital Referral of Patients': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 24297530,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Doctors Visitations & Hospital Referral of Patients'
                                    },
                                    'Lenakel Hospital': {
                                        'data': {
                                            '2012': {
                                                'aggr': 62231826,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 59422823,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 58894795,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Lenakel Hospital'
                                    },
                                    'Lolowai Hospital': {
                                        'data': {
                                            '2012': {
                                                'aggr': 37077295,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 34691285,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 34048265,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Lolowai Hospital'
                                    },
                                    'Norsup Hospital': {
                                        'data': {
                                            '2012': {
                                                'aggr': 60925362,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 57474446,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 56779743,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Norsup Hospital'
                                    },
                                    'Northern District Hospital': {
                                        'data': {
                                            '2012': {
                                                'aggr': 221898085,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 232209855,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 213517610,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Northern District Hospital'
                                    },
                                    'Torba Hospital': {
                                        'data': {
                                            '2012': {
                                                'aggr': 3794737,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 9075184,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 8764613,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Torba Hospital'
                                    },
                                    'Vila Central Hospital': {
                                        'data': {
                                            '2012': {
                                                'aggr': 370326706,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 394165378,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 387103267,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Vila Central Hospital'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 780672922,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 815131891,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 792503017,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Hospital Services'
                            },
                            'MedicalSuppliesStock': {
                                'categories': {
                                    'Management of Medical Supplies': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 19418294,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Management of Medical Supplies'
                                    },
                                    'Purchase of Drugs': {
                                        'data': {
                                            '2012': {
                                                'aggr': 123216940,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 173500000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 200000000,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Purchase of Drugs'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 123216940,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 173500000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 219418294,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Medical Supplies Stock'
                            },
                            'PublicHealthServices': {
                                'categories': {
                                    'Disease Surveillance & Response': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1467648,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Disease Surveillance & Response'
                                    },
                                    'EPI': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3178461,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'EPI'
                                    },
                                    'Environmental Health': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 9127095,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Environmental Health'
                                    },
                                    'Health Promotion': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 8279948,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Health Promotion'
                                    },
                                    'IMCI': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2444735,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'IMCI'
                                    },
                                    'Malaria & Other Vector-Borne Diseases': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 10382953,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Malaria & Other Vector-Borne Diseases'
                                    },
                                    'NCD & Mental Health': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 4627116,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'NCD & Mental Health'
                                    },
                                    'Neglected Tropical Diseases': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 843898,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Neglected Tropical Diseases'
                                    },
                                    'Nutrition': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2717947,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Nutrition'
                                    },
                                    'Reproductive Health & Family Planning': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3792422,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Reproductive Health & Family Planning'
                                    },
                                    'STI & HIV/AIDS': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1753579,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'STI & HIV/AIDS'
                                    },
                                    'TB/Leprosy': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3665235,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'TB/Leprosy'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 55994241,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 54993108,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 61055158,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Public Health Services'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 1289261874,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 1352166446,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 1376328792,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Health Services'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 1561579702,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 1609839563,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 1642203839,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Health'
            },
            'MinistryofInfrastructureandPublicUtilities': {
                'categories': {
                    'CivilAviationAuthority': {
                        'data': {
                            '2012': {
                                'aggr': 41069405,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 50646614,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 55124534,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Civil Aviation Authority'
                    },
                    'ExecutiveManagementandCorporateServices': {
                        'data': {
                            '2012': {
                                'aggr': 85072050,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 90899333,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 83866075,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Executive Management and Corporate Services'
                    },
                    'MinisterialCabinetSupport': {
                        'data': {
                            '2012': {
                                'aggr': 36872452,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 51131946,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 50782196,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Ministerial  Cabinet Support'
                    },
                    'PublicWorks': {
                        'categories': {
                            'DevelopmentandMaintenanceofGovernmentInfrastructure': {
                                'categories': {
                                    'Head Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 87270756,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 123839209,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 94308059,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Head Office'
                                    },
                                    'MCA Maintenance': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'MCA Maintenance'
                                    },
                                    'Malampa Division': {
                                        'data': {
                                            '2012': {
                                                'aggr': 32026620,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 35606708,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 38229325,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Malampa Division'
                                    },
                                    'Outer Island Airports Maintenance': {
                                        'data': {
                                            '2012': {
                                                'aggr': 68797377,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 59100000,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 51604000,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Outer Island Airports Maintenance'
                                    },
                                    'Penama Division': {
                                        'data': {
                                            '2012': {
                                                'aggr': 22000421,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 40274464,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 30609006,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Penama Division'
                                    },
                                    'Project Management Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 9700000,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Project Management Unit'
                                    },
                                    'Provincial Water Supply': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 45590000,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Provincial Water Supply'
                                    },
                                    'Sanma Division': {
                                        'data': {
                                            '2012': {
                                                'aggr': 59229618,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 61619997,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 55851249,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Sanma Division'
                                    },
                                    'Shefa Division': {
                                        'data': {
                                            '2012': {
                                                'aggr': 42131831,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 44743945,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 43181794,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Shefa Division'
                                    },
                                    'Tafea Division': {
                                        'data': {
                                            '2012': {
                                                'aggr': 28841099,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 34139326,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 38118743,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Tafea Division'
                                    },
                                    'Torba Division': {
                                        'data': {
                                            '2012': {
                                                'aggr': 22723669,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 12070954,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 14665042,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Torba Division'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 363021391,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 411394603,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 421857218,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Development and Maintenance of Government Infrastructure'
                            },
                            'GovernmentContributionstoProjects': {
                                'data': {
                                    '2012': {
                                        'aggr': 489810328,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 508855591,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 575218425,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Government Contributions to Projects'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 852831719,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 920250194,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 997075643,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Public Works'
                    },
                    'ShippingServices': {
                        'categories': {
                            'GovernmentContributionforProjects': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 10000000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 232859496,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Government Contribution for Projects'
                            },
                            'Ports&Marine': {
                                'data': {
                                    '2012': {
                                        'aggr': 138002912,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 130422184,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 111633722,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Ports & Marine'
                            },
                            'TugboatMaintenance': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 14500000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 15315000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Tug boat Maintenance'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 138002912,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 154922184,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 359808218,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Ports Administration'
                    },
                    'VanuatuMeterologicalServices': {
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 0,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Vanuatu Meterological Services'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 1153848538,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 1267850271,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 1546656666,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Infrastructure and Public Utilities'
            },
            'MinistryofInternalAffairs': {
                'categories': {
                    'CabinetSupport': {
                        'categories': {
                            'CorporateServices': {
                                'data': {
                                    '2012': {
                                        'aggr': 30768072,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 62883284,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 35316274,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Corporate Services'
                            },
                            'CrimePrevention': {
                                'data': {
                                    '2012': {
                                        'aggr': 4216964,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3640059,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 1846000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Crime Prevention'
                            },
                            'IndependenceCelebration': {
                                'data': {
                                    '2012': {
                                        'aggr': 9992721,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 8000000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 7616500,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Independence Celebration'
                            },
                            'PortfolioManagement': {
                                'data': {
                                    '2012': {
                                        'aggr': 41138699,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 43082652,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 41043757,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Portfolio Management'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 86116456,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 117605995,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 85822531,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Cabinet Support'
                    },
                    'DecentralisationServices': {
                        'categories': {
                            'AdministrationofRegionalServices': {
                                'categories': {
                                    'Corporate Services': {
                                        'data': {
                                            '2012': {
                                                'aggr': 18269790,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 16464523,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 14904163,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Corporate Services'
                                    },
                                    'Decentralization Services Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2957781,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 4839620,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 5672500,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Decentralization Services Unit'
                                    },
                                    'Development Planning': {
                                        'data': {
                                            '2012': {
                                                'aggr': 10816163,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 11905099,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 11024419,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Development Planning'
                                    },
                                    'Financial Services': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2829842,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3809203,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3878323,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Financial Services'
                                    },
                                    'Legal Service Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1653182,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3086322,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Legal Service Unit'
                                    },
                                    'Physical & Urban Planning': {
                                        'data': {
                                            '2012': {
                                                'aggr': 4526624,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 5055792,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 4922052,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Physical & Urban Planning'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 39400200,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 43727419,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 43487779,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Administration of Regional Services'
                            },
                            'GrantstoMunicipalities': {
                                'data': {
                                    '2012': {
                                        'aggr': 18570630,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 17353700,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 17516840,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Grants to Municipalities'
                            },
                            'GrantstoProvinces': {
                                'data': {
                                    '2012': {
                                        'aggr': 253015604,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 257275920,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 254503820,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Grants to Provinces'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 310986434,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 318357039,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 315508439,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Decentralisation Services'
                    },
                    'InternalSecurityandBorderControl': {
                        'categories': {
                            'BorderControl': {
                                'data': {
                                    '2012': {
                                        'aggr': 65013382,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 69140132,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 90188525,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Border Control'
                            },
                            'IssueofPassports': {
                                'data': {
                                    '2012': {
                                        'aggr': 12315440,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 13082836,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 14919695,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Issue of Passports'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 107119729,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 97222968,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 105108220,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Internal Security and Border Control'
                    },
                    'NationalServices': {
                        'categories': {
                            'CivilRegistry': {
                                'data': {
                                    '2012': {
                                        'aggr': 12053280,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 15943161,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 17357629,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Civil Registry'
                            },
                            'ConductofElections': {
                                'categories': {
                                    'Election Management': {
                                        'data': {
                                            '2012': {
                                                'aggr': 62959086,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 61273006,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Election Management'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 62959086,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 61273006,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 7000000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Conduct of Elections'
                            },
                            'ElectoralServices': {
                                'categories': {
                                    'Office Administration': {
                                        'data': {
                                            '2012': {
                                                'aggr': 26548284,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 23728081,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 19047067,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Office Administration'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 26548284,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 23728081,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 19047067,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Electoral Services'
                            },
                            'LabourRegulation': {
                                'categories': {
                                    'General Administration': {
                                        'data': {
                                            '2012': {
                                                'aggr': 12470242,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 18943356,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 17659513,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'General Administration'
                                    },
                                    'Industrial Relations Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 10529617,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 10972278,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 10216090,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Industrial Relations Unit'
                                    },
                                    'International Labour Conference': {
                                        'data': {
                                            '2012': {
                                                'aggr': 794960,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1815971,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1761492,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'International Labour Conference'
                                    },
                                    'Manpower & Training Unit (ESU)': {
                                        'data': {
                                            '2012': {
                                                'aggr': 8263207,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 12000816,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 11363963,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Manpower & Training Unit (ESU)'
                                    },
                                    'Occupational Health & Safety Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 5151032,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 7400952,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 7181098,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Occupational Health & Safety Unit'
                                    },
                                    'Travel & Subsistance': {
                                        'data': {
                                            '2012': {
                                                'aggr': 788180,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1815966,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1291487,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Travel & Subsistance'
                                    },
                                    'Tripartite Labour Advisory Council': {
                                        'data': {
                                            '2012': {
                                                'aggr': 475046,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1759532,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 1736746,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Tripartite Labour Advisory Council'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 38472284,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 54708871,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 51210389,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Labour Regulation'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 140032934,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 155653119,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 94615085,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'National Services'
                    },
                    'PoliceServiceCommission': {
                        'data': {
                            '2012': {
                                'aggr': 5557324,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 5854128,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 7397977,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Police Service Commission'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 649812877,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 694693249,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 608452252,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Internal Affairs'
            },
            'MinistryofJusticeandCommunityService': {
                'categories': {
                    'CabinetSupport': {
                        'data': {
                            '2012': {
                                'aggr': 96080539,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 76721653,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 70834945,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Cabinet Support'
                    },
                    'CorrectionalServices': {
                        'categories': {
                            'CorrectionalServices': {
                                'categories': {
                                    'Correctional Centre (North)': {
                                        'data': {
                                            '2012': {
                                                'aggr': 41880360,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 40270143,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 44333061,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Correctional Centre (North)'
                                    },
                                    'Correctonal Centre (South)': {
                                        'data': {
                                            '2012': {
                                                'aggr': 132313082,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 97829332,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 87121223,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Correctonal Centre (South)'
                                    },
                                    'Office of the Director': {
                                        'data': {
                                            '2012': {
                                                'aggr': 19274744,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 17396092,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 19906840,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Office of the Director'
                                    },
                                    'Parole': {
                                        'data': {
                                            '2012': {
                                                'aggr': 940790,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1177250,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 733500,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Parole'
                                    },
                                    'Probation (North)': {
                                        'data': {
                                            '2012': {
                                                'aggr': 10431788,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 11852023,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 12135383,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Probation (North)'
                                    },
                                    'Probation (South)': {
                                        'data': {
                                            '2012': {
                                                'aggr': 14158635,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 14976911,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 16458477,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Probation (South)'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 218999399,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 183501751,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 188370484,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Correctional Services'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 218999399,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 183501751,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 188370484,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Correctional Services'
                    },
                    'LandsTribunal': {
                        'data': {
                            '2012': {
                                'aggr': 6075428,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 7606759,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 21100755,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Lands Tribunal'
                    },
                    'LawReformCommission': {
                        'data': {
                            '2012': {
                                'aggr': 6364310,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 11349840,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 11231080,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Law Reform Commission'
                    },
                    'WomensAffairs': {
                        'data': {
                            '2012': {
                                'aggr': 36756788,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 32646033,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 36799825,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Womens Affairs'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 364276464,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 311826036,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 328337089,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Justice and Community Service'
            },
            'MinistryofLandsGeologyandMines': {
                'categories': {
                    'CabinetSupport': {
                        'data': {
                            '2012': {
                                'aggr': 39289578,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 37483871,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 36473688,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Cabinet Support'
                    },
                    'Energy': {
                        'categories': {
                            'EnergyManagementandassessment': {
                                'data': {
                                    '2012': {
                                        'aggr': 479849,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 442222,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Energy Management and assessment'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 479849,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 442222,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 0,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Energy'
                    },
                    'Environment': {
                        'categories': {
                            'EnvironmentalmanagementresearchandextensionServices': {
                                'data': {
                                    '2012': {
                                        'aggr': 249772,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 350000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Environmental management research and extension Services'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 249772,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 350000,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 0,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Environment'
                    },
                    'ExecutiveManagementandCorporateServices': {
                        'categories': {
                            'CorporateServices': {
                                'categories': {
                                    'Geology & Mines - Minerals': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Geology & Mines - Minerals'
                                    },
                                    'Human Resource Management': {
                                        'data': {
                                            '2012': {
                                                'aggr': 3226156,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 2908531,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 2939904,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Human Resource Management'
                                    },
                                    'Information Technology': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2575459,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 4678979,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 7392176,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Information Technology'
                                    },
                                    'Land Reform Package': {
                                        'data': {
                                            '2012': {
                                                'aggr': 44749055,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 54912438,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 38338164,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Land Reform Package'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 65196573,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 72583333,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 59420919,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Corporate Services'
                            },
                            'ExecutiveManagement': {
                                'categories': {
                                    'Corporate Services Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1383222,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 706667,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 633767,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Corporate Services Unit'
                                    },
                                    'Executive Management': {
                                        'data': {
                                            '2012': {
                                                'aggr': 17184504,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 18351943,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 12767238,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Executive Management'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 18567726,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 19058610,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 13401005,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Executive Management'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 83764299,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 91641943,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 72821924,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Executive Management and Corporate Services'
                    },
                    'GeologyandMines': {
                        'categories': {
                            'MinesandMinerals': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 13837113,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Mines and Minerals'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': -163045,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 687532,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 13837113,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Geology and Mines'
                    },
                    'LandValuationServices': {
                        'categories': {
                            'ValuerGeneral\'sOffice': {
                                'data': {
                                    '2012': {
                                        'aggr': 7705754,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 8183575,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 7441354,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Valuer General\'s Office'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 7705754,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 8183575,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 7441354,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Land Valuation Services'
                    },
                    'LandsManagement': {
                        'categories': {
                            'CustomaryLandRegistration': {
                                'data': {
                                    '2012': {
                                        'aggr': 918930,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 930000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Customary Land Registration'
                            },
                            'LandSurvey': {
                                'categories': {
                                    'Land Survey Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 22023872,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 23669587,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 23388949,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Land Survey Unit'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 22023872,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 23986254,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 23696116,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Land Survey'
                            },
                            'LandUsePlanning': {
                                'categories': {
                                    'Urban & Rural Lands Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 15446946,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 11110564,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 7829176,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Urban & Rural Lands Unit'
                                    },
                                    'Valuer General': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Valuer General'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 15446356,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 11529453,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 8235498,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Land Use Planning'
                            },
                            'LeaseManagement': {
                                'categories': {
                                    'Enforcement & Compliance': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 1488882,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 3874114,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Enforcement & Compliance'
                                    },
                                    'Land Records Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 17654525,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 18695789,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 18184562,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Land Records Unit'
                                    },
                                    'Santo Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 6178011,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 8095377,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 8458705,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Santo Office'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 38274973,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 39529505,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 42209718,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Lease Management'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 76664131,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 75975212,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 74141332,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Lands Management'
                    },
                    'WaterResources': {
                        'categories': {
                            'RuralWaterSupply': {
                                'categories': {
                                    'Geology & Mines - Rural Water Supply': {
                                        'data': {
                                            '2012': {
                                                'aggr': 17412801,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 17263913,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 17498010,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Geology & Mines - Rural Water Supply'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 17969801,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 17569468,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 17794398,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Rural Water Supply'
                            },
                            'WaterResourceManagement': {
                                'categories': {
                                    'Geology & Mines - Water Resources': {
                                        'data': {
                                            '2012': {
                                                'aggr': 11167369,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 9812395,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 8898087,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Geology & Mines - Water Resources'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 11748446,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 10101320,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 9089044,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Water Resource Management'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 29718247,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 27670788,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 26883442,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Water Resources'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 237708585,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 242435143,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 231598853,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Lands Geology and Mines'
            },
            'MinistryofYouthDevelopmentandTraining': {
                'categories': {
                    'MinistryCabinet': {
                        'data': {
                            '2012': {
                                'aggr': 42477637,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 29972624,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 37765921,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Ministry Cabinet'
                    },
                    'ProvincialGrantsYouthDevelopment': {
                        'categories': {
                            'GrantforMALAMPAProvinceYouthDevelopmentSportandTrainingOfficer': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 879100,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Grant for MALAMPA Province Youth Development Sport and Training Officer'
                            },
                            'GrantforPENAMAProvinceYouthDevelopmentSportandTrainingOfficer': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 860300,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Grant for PENAMA Province Youth Development Sport and Training Officer'
                            },
                            'GrantforSANMAProvinceYouthDevelopmentSportandTrainingOfficer': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 860300,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Grant for SANMA Province Youth Development Sport and Training Officer'
                            },
                            'GrantforSHEFAProvinceYouthDevelopmentSportandTrainingOfficer': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 860300,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Grant for SHEFA Province Youth Development Sport and Training Officer'
                            },
                            'GrantforTAFEAProvinceYouthDevelopmentSportandTrainingOfficer': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 883800,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Grant for TAFEA Province Youth Development Sport and Training Officer'
                            },
                            'GrantforTORBAProvinceYouthDevelopmentSportandTrainingOfficer': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 860300,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Grant for TORBA Province Youth Development Sport and Training Officer'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 5204100,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Provincial Grants Youth Development'
                    },
                    'TVET&EmploymentOpportunities': {
                        'categories': {
                            'Non&InformalEducationDevelopment': {
                                'data': {
                                    '2012': {
                                        'aggr': 3850000,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3850000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 3276500,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Non & Informal Education Development'
                            },
                            'OfficeofTechnicalVocationalEducationandTraining&EmploymentOpportunities': {
                                'data': {
                                    '2012': {
                                        'aggr': 4579142,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 3301034,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 4834298,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Office of Technical Vocational Education and Training & Employment Opportunities'
                            },
                            'VanuatuNationalTrainingCouncil': {
                                'data': {
                                    '2012': {
                                        'aggr': 20000000,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 20000000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 20000000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Vanuatu National Training Council'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 28429142,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 27151034,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 28110798,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'TVET & Employment Opportunities'
                    },
                    'YouthDevelopmentSport&Recreation': {
                        'categories': {
                            'ContributiontoSport&YouthDevelopment': {
                                'categories': {
                                    'Contribution to Youth & Sport Development': {
                                        'data': {
                                            '2012': {
                                                'aggr': 42110165,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 46201645,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 33463103,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Contribution to Youth & Sport Development'
                                    },
                                    'National Sport Gymnasium': {
                                        'data': {
                                            '2012': {
                                                'aggr': 9995000,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 10294450,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 10000000,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'National Sport Gymnasium'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 52105165,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 56496095,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 53463103,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Contribution to Sport & Youth Development'
                            },
                            'ExecutiveManagement&SupportServices': {
                                'categories': {
                                    'Office of Youth Development Sport & Training': {
                                        'data': {
                                            '2012': {
                                                'aggr': 15245918,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 17066894,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 17465382,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Office of Youth Development Sport & Training'
                                    },
                                    'Support Services Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 7503305,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 7454379,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 11542444,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Support Services Unit'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 22749223,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 24521273,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 29007826,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Executive Management & Support Services'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 74854388,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 81017368,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 82470929,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Youth Development Sport & Recreation'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 145761167,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 138141026,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 153551748,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Ministry of Youth Development and Training'
            },
            'PaymentsonBehalfofGovernment': {
                'categories': {
                    'CentralPayments': {
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 311295626,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 130215728,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Central Payments'
                    },
                    'FormerLeadersPayment': {
                        'data': {
                            '2012': {
                                'aggr': 3955973,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 5000000,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 4850000,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Former Leaders Payment'
                    },
                    'PublicDebtProvisions': {
                        'data': {
                            '2012': {
                                'aggr': 1401663636,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 2530488884,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 2586739713,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Public Debt Provisions'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 1405619609,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 2846784510,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 2721805441,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Payments on Behalf of Government'
            },
            'PrimeMinistersMinistry': {
                'categories': {
                    'DirectorGeneral\'sOffice': {
                        'categories': {
                            'CommunityDevelopmentFund': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 10000000,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 9966667,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Community Development Fund'
                            },
                            'PMOCorporateServices': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 30994981,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 20783603,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'PMO Corporate Services'
                            },
                            'Utilities': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 12344961,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 5199200,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Utilities'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 28261743,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 53339942,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 35949470,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Director General\'s Office'
                    },
                    'InformationCommunicationandTechnologyPolicyandAdministration': {
                        'categories': {
                            'Administration&Operations': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 214244706,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Administration & Operations'
                            },
                            'GovernmentBroadbandNetwork': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 66199523,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Government Broadband Network'
                            },
                            'InformationCommunicationandTechnologyPolicyandAdministration': {
                                'data': {
                                    '2013': {
                                        'aggr': 69216003,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Government Broadband Network'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 283750293,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 280444229,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Information Communication and Technology Policy and Administration'
                    },
                    'InternalSecurityandBorderControl': {
                        'categories': {
                            'JointCommandandControl': {
                                'categories': {
                                    'Commisioner\'s Office': {
                                        'data': {
                                            '2012': {
                                                'aggr': 21844022,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 25256384,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Commisioner\'s Office'
                                    },
                                    'Corporate Services Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 124894326,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 157787748,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Corporate Services Unit'
                                    },
                                    'Joint Command Operation': {
                                        'data': {
                                            '2012': {
                                                'aggr': -605561,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Joint Command Operation'
                                    },
                                    'Joint Planning Operation Center': {
                                        'data': {
                                            '2012': {
                                                'aggr': 20049965,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Joint Planning Operation Center'
                                    },
                                    'Luganville General Duty Policing': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Luganville General Duty Policing'
                                    },
                                    'Northern Command HQ': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Northern Command HQ'
                                    },
                                    'Oversea Missions': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2745939,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Oversea Missions'
                                    },
                                    'Police College': {
                                        'data': {
                                            '2012': {
                                                'aggr': 16374909,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 16252309,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Police College'
                                    },
                                    'Police Recruit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 1252692,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Police Recruit'
                                    },
                                    'Special Branch': {
                                        'data': {
                                            '2012': {
                                                'aggr': 6716314,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Special Branch'
                                    },
                                    'Transnational Crime Unit': {
                                        'data': {
                                            '2012': {
                                                'aggr': 3402562,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Transnational Crime Unit'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 201170506,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Joint Command and Control'
                            },
                            'PoliceDistrictCentral': {
                                'categories': {
                                    'Central Command HQ': {
                                        'data': {
                                            '2012': {
                                                'aggr': 2312455,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Central Command HQ'
                                    },
                                    'Malampa Police': {
                                        'data': {
                                            '2012': {
                                                'aggr': 25070104,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 24215414,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Malampa Police'
                                    },
                                    'Penama Police': {
                                        'data': {
                                            '2012': {
                                                'aggr': 13193263,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 11889049,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Penama Police'
                                    },
                                    'Port Vila VIP Security': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Port Vila VIP Security'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 39939947,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Police District Central'
                            },
                            'PoliceDistrictNorthern': {
                                'categories': {
                                    'Luganville CID & SB': {
                                        'data': {
                                            '2012': {
                                                'aggr': 9708865,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Luganville CID & SB'
                                    },
                                    'Sanma Police': {
                                        'data': {
                                            '2012': {
                                                'aggr': 6053133,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 57877275,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Sanma Police'
                                    },
                                    'Southern Command HQ': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Southern Command HQ'
                                    },
                                    'Torba Police': {
                                        'data': {
                                            '2012': {
                                                'aggr': 3707947,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 3368727,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Torba Police'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 68719483,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Police District Northern'
                            },
                            'PoliceDistrictSouthern': {
                                'categories': {
                                    'Port Vila CID': {
                                        'data': {
                                            '2012': {
                                                'aggr': 46164247,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Port Vila CID'
                                    },
                                    'Port Vila General Duty Policing': {
                                        'data': {
                                            '2012': {
                                                'aggr': 102333520,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 153087659,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Port Vila General Duty Policing'
                                    },
                                    'Port Vila Prosecution': {
                                        'data': {
                                            '2012': {
                                                'aggr': 10524359,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Port Vila Prosecution'
                                    },
                                    'Port Vila Traffic': {
                                        'data': {
                                            '2012': {
                                                'aggr': 13071374,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Port Vila Traffic'
                                    },
                                    'RVS Mala Base': {
                                        'data': {
                                            '2012': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'RVS Mala Base'
                                    },
                                    'Shepherd\'s Police': {
                                        'data': {
                                            '2012': {
                                                'aggr': 11928512,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 9063620,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Shepherd\'s Police'
                                    },
                                    'Tafea Police Station': {
                                        'data': {
                                            '2012': {
                                                'aggr': 15503765,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 15251891,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Tafea Police Station'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 194973148,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Police District Southern'
                            },
                            'PoliceMaritimeWing': {
                                'categories': {
                                    'Luganville Detechment': {
                                        'data': {
                                            '2012': {
                                                'aggr': 4002558,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Luganville Detechment'
                                    },
                                    'Maritime Surveillance': {
                                        'data': {
                                            '2012': {
                                                'aggr': 10479898,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 38785816,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Maritime Surveillance'
                                    },
                                    'RVS Tukoro': {
                                        'data': {
                                            '2012': {
                                                'aggr': 23209836,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'RVS Tukoro'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 31279381,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Police Maritime Wing'
                            },
                            'VanuatuMobileForce': {
                                'categories': {
                                    'Band': {
                                        'data': {
                                            '2012': {
                                                'aggr': 22094733,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Band'
                                    },
                                    'Engineering': {
                                        'data': {
                                            '2012': {
                                                'aggr': 28798807,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Engineering'
                                    },
                                    'Fire Services': {
                                        'data': {
                                            '2012': {
                                                'aggr': 18248177,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Fire Services'
                                    },
                                    'Luganville Detechment': {
                                        'data': {
                                            '2012': {
                                                'aggr': 54469435,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 54898666,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Luganville Detechment'
                                    },
                                    'Mobile Force HQ': {
                                        'data': {
                                            '2012': {
                                                'aggr': 27430164,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 151267929,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Mobile Force HQ'
                                    },
                                    'Supplier and Armory': {
                                        'data': {
                                            '2012': {
                                                'aggr': 22166629,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Supplier and Armory'
                                    },
                                    'Surveillance and Response Force': {
                                        'data': {
                                            '2012': {
                                                'aggr': 45132915,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Surveillance and Response Force'
                                    },
                                    'Workshop': {
                                        'data': {
                                            '2012': {
                                                'aggr': 15768925,
                                                'change': 0
                                            },
                                            '2013': {
                                                'aggr': 0,
                                                'change': 0
                                            },
                                            '2014': {
                                                'aggr': 0,
                                                'change': 0
                                            }
                                        },
                                        'level': 'Subprogramme Expenditure',
                                        'name': 'Workshop'
                                    }
                                },
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 216204089,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Vanuatu Mobile Force'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 752286554,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Internal Security & Border Control'
                    },
                    'LanguageServices': {
                        'categories': {
                            'Administration': {
                                'data': {
                                    '2012': {
                                        'aggr': 10386503,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 10657558,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 8213286,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Administration'
                            },
                            'LanguageServices': {
                                'data': {
                                    '2012': {
                                        'aggr': 15252914,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 16876971,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 20491940,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Language Services'
                            },
                            'Training&LanguageAwareness': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 2622427,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 0,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Training & Language Awareness'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 25639417,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 30156956,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 28705226,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Language Services'
                    },
                    'OfficeofthePrimeMinister': {
                        'categories': {
                            'Cabinet': {
                                'data': {
                                    '2012': {
                                        'aggr': 64101638,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 59423120,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 58449042,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Cabinet'
                            },
                            'EntertainmentFund': {
                                'data': {
                                    '2012': {
                                        'aggr': 1969454,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 789040,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 1940000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Entertainment Fund'
                            },
                            'IndependenceCelebrations': {
                                'data': {
                                    '2012': {
                                        'aggr': 1000000,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 970000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Independence Celebrations'
                            },
                            'InternationalTravel': {
                                'data': {
                                    '2012': {
                                        'aggr': 11936770,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 10206589,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 10628083,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'International Travel'
                            },
                            'LocalTravel': {
                                'data': {
                                    '2012': {
                                        'aggr': 1966300,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 1957900,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 1705000,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Local Travel'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 92013371,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 72376649,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 75692125,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Office of the Prime Minister'
                    },
                    'ParliamentarySecretariat': {
                        'data': {
                            '2012': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 0,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 13000000,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Parliamentary Secretariat'
                    },
                    'SpecialCommissions': {
                        'data': {
                            '2012': {
                                'aggr': 3512882,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 4570913,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 5471235,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Special Commissions'
                    },
                    'StrategicManagement': {
                        'categories': {
                            'AidCoordinationUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 9057138,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 9430482,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 10999546,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Aid Coordination Unit'
                            },
                            'Monitoring&EvaluationUnit': {
                                'data': {
                                    '2012': {
                                        'aggr': 11125211,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 11843598,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 12269761,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Monitoring & Evaluation Unit'
                            },
                            'PolicySectors': {
                                'data': {
                                    '2012': {
                                        'aggr': 32587831,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 39436377,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 35241081,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Policy Sectors'
                            },
                            'VanuatuProjectManagementUnit(VPMU)': {
                                'data': {
                                    '2012': {
                                        'aggr': 0,
                                        'change': 0
                                    },
                                    '2013': {
                                        'aggr': 26262509,
                                        'change': 0
                                    },
                                    '2014': {
                                        'aggr': 25432586,
                                        'change': 0
                                    }
                                },
                                'level': 'Programme Expenditure',
                                'name': 'Vanuatu Project Management Unit (VPMU)'
                            }
                        },
                        'data': {
                            '2012': {
                                'aggr': 70884580,
                                'change': 0
                            },
                            '2013': {
                                'aggr': 86972966,
                                'change': 0
                            },
                            '2014': {
                                'aggr': 83942974,
                                'change': 0
                            }
                        },
                        'level': 'Departmental Expenditure',
                        'name': 'Strategic Management'
                    }
                },
                'data': {
                    '2012': {
                        'aggr': 1031120959,
                        'change': 0
                    },
                    '2013': {
                        'aggr': 1250170206,
                        'change': 0
                    },
                    '2014': {
                        'aggr': 1275491813,
                        'change': 0
                    }
                },
                'level': 'Sectoral Expenditure',
                'name': 'Prime Ministers Ministry'
            }
        },
        'currency': 'VATU',
        'data': {
            '2012': {
                'aggr': 15417042635,
                'change': 0
            },
            '2013': {
                'aggr': 16725995509,
                'change': 0
            },
            '2014': {
                'aggr': 16796952599,
                'change': 0
            }
        },
        'multiplier': 1,
        'name': 'Vanuatu 2014 Spending'
    }
};

var expectedPathMappings = {
    'Citizenship Commission': 'root.categories.ConstitutionalAgencies.categories.CitizenshipCommission',
    'Administrative Support Services': 'root.categories.ConstitutionalAgencies.categories.JudicialServiceCommission.categories.AdministrativeSupportServices',
    'Decision Making': 'root.categories.ConstitutionalAgencies.categories.JudicialServiceCommission.categories.DecisionMaking',
    'Judicial Service Commission': 'root.categories.ConstitutionalAgencies.categories.JudicialServiceCommission',
    'Case Management Support': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.CaseManagement.categories.Case Management Support',
    'Case Management': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.CaseManagement',
    'Account / Finance': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.CorporateServices.categories.Account / Finance',
    'Assets': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.CorporateServices.categories.Assets',
    'Human Resource': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.CorporateServices.categories.Human Resource',
    'Information Technology': 'root.categories.MinistryofLandsGeologyandMines.categories.ExecutiveManagementandCorporateServices.categories.CorporateServices.categories.Information Technology',
    'Library / Archive': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.CorporateServices.categories.Library / Archive',
    'Security': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.CorporateServices.categories.Security',
    'Supreme Court Hall of Justice': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.CorporateServices.categories.Supreme Court Hall of Justice',
    'Corporate Services': 'root.categories.MinistryofLandsGeologyandMines.categories.ExecutiveManagementandCorporateServices.categories.CorporateServices',
    'Court of Appeal Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.CourtofAppeal.categories.Court of Appeal Registry',
    'Court of Appeal': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.CourtofAppeal',
    'Sheriff Office': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.Enforcement.categories.Sheriff Office',
    'Enforcement': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.Enforcement',
    'Ambae Island Court': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.LandCourts.categories.Ambae Island Court',
    'Ambrym Island Court': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.IslandCourts.categories.Ambrym Island Court',
    'Banks Torres Island Court': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.LandCourts.categories.Banks Torres Island Court',
    'Efate Island Court': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.LandCourts.categories.Efate Island Court',
    'Epi Island Court': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.IslandCourts.categories.Epi Island Court',
    'Malekula Island Court': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.LandCourts.categories.Malekula Island Court',
    'Pentecost Island Court': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.LandCourts.categories.Pentecost Island Court',
    'Santo Malo Island Court': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.LandCourts.categories.Santo Malo Island Court',
    'Senior Administrator Office': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.IslandCourts.categories.Senior Administrator Office',
    'Tanna Island Court': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.LandCourts.categories.Tanna Island Court',
    'Tongoa Island Court': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.LandCourts.categories.Tongoa Island Court',
    'Island Courts': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.IslandCourts',
    'Judicial Development & Training': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.JudicialDevelopment&Training',
    'Staff Training & Development': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.JudicialDevelopment&Training.categories.Staff Training & Development',
    'Erromango Island Court': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.LandCourts.categories.Erromango Island Court',
    'Land Appeals': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.LandCourts.categories.Land Appeals',
    'Land Courts': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.LandCourts',
    'Amobore MC Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.MagistrateCourts.categories.Amobore MC Registry',
    'Chief Magistrate Office': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.MagistrateCourts.categories.Chief Magistrate Office',
    'Isangel MC Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.MagistrateCourts.categories.Isangel MC Registry',
    'Lakatoro MC Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.MagistrateCourts.categories.Lakatoro MC Registry',
    'Luganville MC Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.MagistrateCourts.categories.Luganville MC Registry',
    'Port Vila MCt Office Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.MagistrateCourts.categories.Port Vila MCt Office Registry',
    'Sola MC Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.MagistrateCourts.categories.Sola MC Registry',
    'Magistrate Courts': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.MagistrateCourts',
    'Ambore Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.SupremeCourt.categories.Ambore Registry',
    'Chief Justice Office': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.SupremeCourt.categories.Chief Justice Office',
    'Isangel Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.SupremeCourt.categories.Isangel Registry',
    'Lakatoro Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.SupremeCourt.categories.Lakatoro Registry',
    'Luganville Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.SupremeCourt.categories.Luganville Registry',
    'Port Vila Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.SupremeCourt.categories.Port Vila Registry',
    'Principal Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.SupremeCourt.categories.Principal Registry',
    'Regional Conferences': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.SupremeCourt.categories.Regional Conferences',
    'Sola Registry': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.SupremeCourt.categories.Sola Registry',
    'Supreme Court': 'root.categories.ConstitutionalAgencies.categories.Judiciary.categories.SupremeCourt',
    'Judiciary': 'root.categories.ConstitutionalAgencies.categories.Judiciary',
    'Administration of the National Council of Chiefs': 'root.categories.ConstitutionalAgencies.categories.Malvatumauri.categories.AdministrationoftheNationalCouncilofChiefs',
    'Funds for 14 Islands Council of Chiefs': 'root.categories.ConstitutionalAgencies.categories.Malvatumauri.categories.Fundsfor14IslandsCouncilofChiefs',
    'Malvatumauri Members Allowance': 'root.categories.ConstitutionalAgencies.categories.Malvatumauri.categories.MalvatumauriMembersAllowance',
    'Malvatumauri': 'root.categories.ConstitutionalAgencies.categories.Malvatumauri',
    'Audit Operations': 'root.categories.ConstitutionalAgencies.categories.NationalAuditOffice.categories.AuditOperations',
    'Planning Policy & Standards': 'root.categories.ConstitutionalAgencies.categories.NationalAuditOffice.categories.PlanningPolicy&Standards',
    'National Audit Office': 'root.categories.ConstitutionalAgencies.categories.NationalAuditOffice',
    'Planning Management and Investigations': 'root.categories.ConstitutionalAgencies.categories.OfficeoftheOmbudsman',
    'Financial Management': 'root.categories.ConstitutionalAgencies.categories.ParliamentCorporateServicesOffice.categories.FinancialManagement',
    'Members Allocation': 'root.categories.ConstitutionalAgencies.categories.ParliamentCorporateServicesOffice.categories.MembersAllocation',
    'Personnel Administration and Maintenance': 'root.categories.ConstitutionalAgencies.categories.ParliamentCorporateServicesOffice.categories.PersonnelAdministrationandMaintenance',
    'Parliament Corporate Services Office': 'root.categories.ConstitutionalAgencies.categories.ParliamentCorporateServicesOffice',
    'Library & Archives': 'root.categories.ConstitutionalAgencies.categories.ParliamentHansardOffice.categories.LibraryandArchives.categories.Library & Archives',
    'Library and Archives': 'root.categories.ConstitutionalAgencies.categories.ParliamentHansardOffice.categories.LibraryandArchives',
    'Parliamentary Reporting Section': 'root.categories.ConstitutionalAgencies.categories.ParliamentHansardOffice.categories.ParliamentaryReporting.categories.Parliamentary Reporting Section',
    'Parliamentary Reporting': 'root.categories.ConstitutionalAgencies.categories.ParliamentHansardOffice.categories.ParliamentaryReporting',
    'Parliament Hansard Office': 'root.categories.ConstitutionalAgencies.categories.ParliamentHansardOffice',
    'Inter-Parliamentary Relations': 'root.categories.ConstitutionalAgencies.categories.ParliamentProcedureandLegislativeOffice.categories.Inter-ParliamentaryRelations',
    'Office of the Leader of the Opposition': 'root.categories.ConstitutionalAgencies.categories.ParliamentProcedureandLegislativeOffice.categories.OfficeoftheLeaderoftheOpposition',
    'Procedure and Legislative Affairs': 'root.categories.ConstitutionalAgencies.categories.ParliamentProcedureandLegislativeOffice.categories.ProcedureandLegislativeAffairs',
    'Security and Protocol': 'root.categories.ConstitutionalAgencies.categories.ParliamentProcedureandLegislativeOffice.categories.SecurityandProtocol',
    'Parliament Procedure and Legislative Office': 'root.categories.ConstitutionalAgencies.categories.ParliamentProcedureandLegislativeOffice',
    'Standing Orders Committee Support': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeoftheStandingOrders.categories.Standing Orders Committee Support',
    'Committee of the Standing Orders': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeoftheStandingOrders',
    'Legislative Review Committee': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeonEconomicPolicy.categories.Legislative Review Committee',
    'Committee on Economic Policy': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeonEconomicPolicy',
    'Committee on Foreign Affairs & External Trade': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeonForeignAffairs&ExternalTrade',
    'Institutions Committee Support': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeonInstitutions.categories.Institutions Committee Support',
    'Committee on Institutions': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeonInstitutions',
    'Committee on Members of Parliament Ethics & Integrity': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeonMembersofParliamentEthics&Integrity',
    'Parliamentary Privileges Committee Support': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeonParliamentaryPrivilegesandImmunities.categories.Parliamentary Privileges Committee Support',
    'Committee on Parliamentary Privileges and Immunities': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeonParliamentaryPrivilegesandImmunities',
    'Provincial Affairs Committee': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeonSocialPolicy.categories.Provincial Affairs Committee',
    'Committee on Social Policy': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeonSocialPolicy',
    'Public Accounts Committee Support': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeonthePublicAccounts.categories.Public Accounts Committee Support',
    'Committee on the Public Accounts': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice.categories.CommitteeonthePublicAccounts',
    'Parliament Standing Committees Office': 'root.categories.ConstitutionalAgencies.categories.ParliamentStandingCommitteesOffice',
    'Presidential Support': 'root.categories.ConstitutionalAgencies.categories.PresidentialSupport',
    'Institute Criminal Proceedings': 'root.categories.ConstitutionalAgencies.categories.PublicProsecutor.categories.InstituteCriminalProceedings',
    'Planning and Management': 'root.categories.ConstitutionalAgencies.categories.PublicProsecutor.categories.PlanningandManagement',
    'Representation': 'root.categories.ConstitutionalAgencies.categories.PublicProsecutor.categories.Representation',
    'Public Prosecutor': 'root.categories.ConstitutionalAgencies.categories.PublicProsecutor',
    'Corporate Services Unit': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.JointCommandandControl.categories.Corporate Services Unit',
    'Human Resource Development': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.Policy&PlanningDivision.categories.Human Resource Development',
    'Human Resource Management': 'root.categories.MinistryofLandsGeologyandMines.categories.ExecutiveManagementandCorporateServices.categories.CorporateServices.categories.Human Resource Management',
    'Performance Improvement Unit': 'root.categories.ConstitutionalAgencies.categories.PublicServiceCommission.categories.PerformanceImprovementUnit',
    'Public Service Legal Unit': 'root.categories.ConstitutionalAgencies.categories.PublicServiceCommission.categories.PublicServiceLegalUnit',
    'Public Service Commission': 'root.categories.ConstitutionalAgencies.categories.PublicServiceCommission',
    'Financial Intelligence Unit': 'root.categories.ConstitutionalAgencies.categories.StateLawOffice.categories.FinancialIntelligenceUnit',
    'Office Administration': 'root.categories.MinistryofInternalAffairs.categories.NationalServices.categories.ElectoralServices.categories.Office Administration',
    'State Law Office': 'root.categories.ConstitutionalAgencies.categories.StateLawOffice',
    'Constitutional Agencies': 'root.categories.ConstitutionalAgencies',
    'Chamber of Commerce and Industry (CCI)': 'root.categories.GrantstoInstitutions.categories.ChamberofCommerceandIndustry(CCI)',
    'Grant SPBEA and USP': 'root.categories.GrantstoInstitutions.categories.GrantSPBEAandUSP',
    'Grant to VIPA': 'root.categories.GrantstoInstitutions.categories.GranttoVIPA',
    'Grant to Vanuatu National Archives': 'root.categories.GrantstoInstitutions.categories.GranttoVanuatuNationalArchives',
    'Utility Regulatory Authority': 'root.categories.GrantstoInstitutions.categories.UtilityRegulatoryAuthority',
    'Vanuatu Agricultural Research and Training Centre (VARTC)': 'root.categories.GrantstoInstitutions.categories.VanuatuAgriculturalResearchandTrainingCentre(VARTC)',
    'Vanuatu Agriculture College': 'root.categories.GrantstoInstitutions.categories.VanuatuAgricultureCollege',
    'Vanuatu Broadcasting and Television Corporation (VBTC)': 'root.categories.GrantstoInstitutions.categories.VanuatuBroadcastingandTelevisionCorporation(VBTC)',
    'Vanuatu Cultural Centre (VCC)': 'root.categories.GrantstoInstitutions.categories.VanuatuCulturalCentre(VCC)',
    'Vanuatu Maritime Administration (VMA)': 'root.categories.GrantstoInstitutions.categories.VanuatuMaritimeAdministration(VMA)',
    'Vanuatu Maritime College': 'root.categories.GrantstoInstitutions.categories.VanuatuMaritimeCollege',
    'Vanuatu Tourism Office (VTO)': 'root.categories.GrantstoInstitutions.categories.VanuatuTourismOffice(VTO)',
    'Grants to Institutions': 'root.categories.GrantstoInstitutions',
    'Commodities': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.AgriculturalandRuralDevelopment.categories.Commodities',
    'Food Production': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.AgriculturalandRuralDevelopment.categories.FoodProduction',
    'Information': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.AgriculturalandRuralDevelopment.categories.Information',
    'Agribusiness Support': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.AgriculturalandRuralDevelopment.categories.PolicyandAdministration.categories.Agribusiness Support',
    'Policy and Administration': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.AgriculturalandRuralDevelopment.categories.PolicyandAdministration',
    'Agricultural and Rural Development': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.AgriculturalandRuralDevelopment',
    'Cabinet Support': 'root.categories.MinistryofLandsGeologyandMines.categories.CabinetSupport',
    'Livestock Production': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.VanuatuQuarantineandInspectionService.categories.LivestockProduction',
    'Livestock Production North': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.VanuatuQuarantineandInspectionService.categories.LivestockProduction.categories.Livestock Production North',
    'Office of the Director General': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.MinistryExecutive&InternalAudit.categories.Office of the Director General',
    'Executive Management and Corporate Services': 'root.categories.MinistryofLandsGeologyandMines.categories.ExecutiveManagementandCorporateServices',
    'Fisheries Administration': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.FisheriesAdministration',
    'Fisheries Compliance and Licensing': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.FisheriesComplianceandLicensing',
    'Fisheries Boat Yard': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.FisheriesDevelopmentandCapture.categories.Fisheries Boat Yard',
    'Provincial Fisheries Centre - MALAMPA': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.FisheriesDevelopmentandCapture.categories.Provincial Fisheries Centre - MALAMPA',
    'Provincial Fisheries Centre - PENAMA': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.FisheriesDevelopmentandCapture.categories.Provincial Fisheries Centre - PENAMA',
    'Provincial Fisheries Centre - SANMA': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.FisheriesDevelopmentandCapture.categories.Provincial Fisheries Centre - SANMA',
    'Provincial Fisheries Centre - SHEFA': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.FisheriesDevelopmentandCapture.categories.Provincial Fisheries Centre - SHEFA',
    'Provincial Fisheries Centre - TAFEA': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.FisheriesDevelopmentandCapture.categories.Provincial Fisheries Centre - TAFEA',
    'Provincial Fisheries Centre - TORBA': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.FisheriesDevelopmentandCapture.categories.Provincial Fisheries Centre - TORBA',
    'Fisheries Development and Capture': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.FisheriesDevelopmentandCapture',
    'Fisheries Policy and Management': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.FisheriesPolicyandManagement',
    'Fisheries Research and Aquaculture': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.FisheriesResearchandAquaculture',
    'Research and Production': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.ResearchandProduction',
    'Seafood Verification': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries.categories.SeafoodVerification',
    'Fisheries': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Fisheries',
    'Policy & Planning': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Forestry.categories.Forestry.categories.Policy & Planning',
    'Research': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Forestry.categories.Forestry.categories.Research',
    'Sustainability': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Forestry.categories.Forestry.categories.Sustainability',
    'Value Adding and Processing': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Forestry.categories.Forestry.categories.Value Adding and Processing',
    'Forestry': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Forestry',
    'Livestock Production Malampa': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Livestock.categories.LivestockProductionMalampa',
    'Livestock Production Penama': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Livestock.categories.LivestockProductionPenama',
    'Livestock Production Sanma': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Livestock.categories.LivestockProductionSanma',
    'Livestock Production Shefa': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Livestock.categories.LivestockProductionShefa',
    'Livestock Production Tafea': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Livestock.categories.LivestockProductionTafea',
    'Livestock Production Torba': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Livestock.categories.LivestockProductionTorba',
    'Livestock': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.Livestock',
    'Biosecurity Administration': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.VanuatuQuarantineandInspectionService.categories.BiosecurityAdministration',
    'Biosecurity Operations North': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.VanuatuQuarantineandInspectionService.categories.BiosecurityOperationsNorth',
    'Biosecurity Operations South': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.VanuatuQuarantineandInspectionService.categories.BiosecurityOperationsSouth',
    'Livestock Division': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.VanuatuQuarantineandInspectionService.categories.LivestockProduction.categories.Livestock Division',
    'Plant Health': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.VanuatuQuarantineandInspectionService.categories.PlantHealth',
    'Veterinary Contract': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.VanuatuQuarantineandInspectionService.categories.VeterinaryContract',
    'Vanuatu Quarantine and Inspection Service': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity.categories.VanuatuQuarantineandInspectionService',
    'Ministry of Agriculture Livestock Forestry Fisheries and Biosecurity': 'root.categories.MinistryofAgricultureLivestockForestryFisheriesandBiosecurity',
    'Ministry of Civil Aviation Meteorology and Postal Services': 'root.categories.MinistryofCivilAviationMeteorologyandPostalServices',
    'Energy Management and assessment': 'root.categories.MinistryofLandsGeologyandMines.categories.Energy.categories.EnergyManagementandassessment',
    'Mines & Minerals': 'root.categories.MinistryofClimateChangeAdaptationGeohazardsMeteorologyandEnergy.categories.Energy.categories.Mines&Minerals',
    'Energy': 'root.categories.MinistryofLandsGeologyandMines.categories.Energy',
    'Environment': 'root.categories.MinistryofLandsGeologyandMines.categories.Environment',
    'Executive Management & Corporate Services': 'root.categories.MinistryofClimateChangeAdaptationGeohazardsMeteorologyandEnergy.categories.ExecutiveManagement&CorporateServices',
    'National Disaster Management': 'root.categories.MinistryofClimateChangeAdaptationGeohazardsMeteorologyandEnergy.categories.NationalDisasterManagement',
    'Geo-hazard': 'root.categories.MinistryofClimateChangeAdaptationGeohazardsMeteorologyandEnergy.categories.VanuatuMeteorologicalServices.categories.Geo-hazard',
    'Climate Section': 'root.categories.MinistryofClimateChangeAdaptationGeohazardsMeteorologyandEnergy.categories.VanuatuMeteorologicalServices.categories.WeatherForecastingMonitoringandResearch.categories.Climate Section',
    'ICT-Enginering': 'root.categories.MinistryofClimateChangeAdaptationGeohazardsMeteorologyandEnergy.categories.VanuatuMeteorologicalServices.categories.WeatherForecastingMonitoringandResearch.categories.ICT-Enginering',
    'Observation Section': 'root.categories.MinistryofClimateChangeAdaptationGeohazardsMeteorologyandEnergy.categories.VanuatuMeteorologicalServices.categories.WeatherForecastingMonitoringandResearch.categories.Observation Section',
    'Weather Forcasting & Monitoring': 'root.categories.MinistryofClimateChangeAdaptationGeohazardsMeteorologyandEnergy.categories.VanuatuMeteorologicalServices.categories.WeatherForecastingMonitoringandResearch.categories.Weather Forcasting & Monitoring',
    'Weather Forecasting Monitoring and Research': 'root.categories.MinistryofClimateChangeAdaptationGeohazardsMeteorologyandEnergy.categories.VanuatuMeteorologicalServices.categories.WeatherForecastingMonitoringandResearch',
    'Vanuatu Meteorological Services': 'root.categories.MinistryofClimateChangeAdaptationGeohazardsMeteorologyandEnergy.categories.VanuatuMeteorologicalServices',
    'Ministry of Climate Change Adaptation Geohazards Meteorology and Energy': 'root.categories.MinistryofClimateChangeAdaptationGeohazardsMeteorologyandEnergy',
    'Copra Subsidy': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.ExecutiveManagementandCorporateServices.categories.ExecutiveManagement.categories.Copra Subsidy',
    'Trade & Cooperative Executive Management': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.ExecutiveManagementandCorporateServices.categories.ExecutiveManagement.categories.Trade & Cooperative Executive Management',
    'Executive Management': 'root.categories.MinistryofLandsGeologyandMines.categories.ExecutiveManagementandCorporateServices.categories.ExecutiveManagement',
    'Administration': 'root.categories.PrimeMinistersMinistry.categories.LanguageServices.categories.Administration',
    'Laboratory Section': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.ExecutiveManagementandCorporateServices.categories.FoodTechnology.categories.Laboratory Section',
    'Product Development Section': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment.categories.TourismDevelopment.categories.Product Development Section',
    'Food Technology': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.ExecutiveManagementandCorporateServices.categories.FoodTechnology',
    'Intellectual Property Right': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.ExecutiveManagementandCorporateServices.categories.VanuatuIntellectualPropertyDevelopment.categories.Intellectual Property Right',
    'Vanuatu Intellectual Property Development': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.ExecutiveManagementandCorporateServices.categories.VanuatuIntellectualPropertyDevelopment',
    'Marketing & Promotion Division': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment.categories.Marketing&PromotionSection.categories.Marketing & Promotion Division',
    'Marketing & Promotion Section': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment.categories.Marketing&PromotionSection',
    'Policy & Admin Division': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment.categories.PolicyPlanningAdministration&FinancialComprising.categories.Policy & Admin Division',
    'Policy Planning Administration & Financial Comprising': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment.categories.PolicyPlanningAdministration&FinancialComprising',
    'Primary Industry Division': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment.categories.PrimaryIndustriesDevelopmentSection.categories.Primary Industry Division',
    'Primary Industries Development Section': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment.categories.PrimaryIndustriesDevelopmentSection',
    'IDO Malampa': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment.categories.ProvincialIndustrialExtensionServices.categories.IDO Malampa',
    'IDO Penama': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment.categories.ProvincialIndustrialExtensionServices.categories.IDO Penama',
    'IDO Sanma': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment.categories.ProvincialIndustrialExtensionServices.categories.IDO Sanma',
    'IDO Shefa': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment.categories.ProvincialIndustrialExtensionServices.categories.IDO Shefa',
    'IDO Tafea': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment.categories.ProvincialIndustrialExtensionServices.categories.IDO Tafea',
    'Trade Development Division': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment.categories.ProvincialIndustrialExtensionServices.categories.Trade Development Division',
    'Provincial Industrial Extension Services': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment.categories.ProvincialIndustrialExtensionServices',
    'Industry Development': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.IndustryDevelopment',
    'Cooperatives Development': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.Ni-VanuatuBusinessDevelopment.categories.CooperativesDevelopment',
    'Cooperative Policy & Administration': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.Ni-VanuatuBusinessDevelopment.categories.Ni-VanuatuBusinessDevelopment.categories.Cooperative Policy & Administration',
    'Education & Training Section': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.Ni-VanuatuBusinessDevelopment.categories.Ni-VanuatuBusinessDevelopment.categories.Education & Training Section',
    'Malampa Provincial Coop Office': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.Ni-VanuatuBusinessDevelopment.categories.Ni-VanuatuBusinessDevelopment.categories.Malampa Provincial Coop Office',
    'Penama Provincial Coop Office': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.Ni-VanuatuBusinessDevelopment.categories.Ni-VanuatuBusinessDevelopment.categories.Penama Provincial Coop Office',
    'Sanma Provincial Coop Office': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.Ni-VanuatuBusinessDevelopment.categories.Ni-VanuatuBusinessDevelopment.categories.Sanma Provincial Coop Office',
    'Shefa Provincial Coop Office': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.Ni-VanuatuBusinessDevelopment.categories.Ni-VanuatuBusinessDevelopment.categories.Shefa Provincial Coop Office',
    'Tafea Provincial Coop Office': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.Ni-VanuatuBusinessDevelopment.categories.Ni-VanuatuBusinessDevelopment.categories.Tafea Provincial Coop Office',
    'Torba Provincial Coop Office': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.Ni-VanuatuBusinessDevelopment.categories.Ni-VanuatuBusinessDevelopment.categories.Torba Provincial Coop Office',
    'Ni-Vanuatu Business Development': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.Ni-VanuatuBusinessDevelopment',
    'Shefa Provincial Tourism Office': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment.categories.ProvincialTourismDevelopment.categories.Shefa Provincial Tourism Office',
    'Torba Provincial Tourism Office': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment.categories.ProvincialTourismDevelopment.categories.Torba Provincial Tourism Office',
    'Provincial Tourism Development': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment.categories.ProvincialTourismDevelopment',
    'Malampa Provincial Tourism Office': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment.categories.TourismDevelopment.categories.Malampa Provincial Tourism Office',
    'Outer Islands Development': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment.categories.TourismDevelopment.categories.Outer Islands Development',
    'Penama Provincial Tourism Office': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment.categories.TourismDevelopment.categories.Penama Provincial Tourism Office',
    'Policy & Administration': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment.categories.TourismDevelopment.categories.Policy & Administration',
    'Sanma Provincial Tourism Office': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment.categories.TourismDevelopment.categories.Sanma Provincial Tourism Office',
    'Tafea Provincial Tourism Office': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment.categories.TourismDevelopment.categories.Tafea Provincial Tourism Office',
    'Tourism Accredition & Classification': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment.categories.TourismDevelopment.categories.Tourism Accredition & Classification',
    'Tourism Investment Promotion & Facilitation': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment.categories.TourismDevelopment.categories.Tourism Investment Promotion & Facilitation',
    'Tourism Development': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment',
    'Tourism Standards': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness.categories.TourismDevelopment.categories.TourismStandards',
    'Ministry of Commerce Industry Tourism and Ni-Vanuatu Business': 'root.categories.MinistryofCommerceIndustryTourismandNi-VanuatuBusiness',
    'Cabinet Operations': 'root.categories.MinistryofCooperativesandNi-VanuatuBusinessDevelopmentServices.categories.PortfolioCoordination.categories.PortfolioCoordination.categories.Cabinet Operations',
    'Portfolio Coordination': 'root.categories.MinistryofCooperativesandNi-VanuatuBusinessDevelopmentServices.categories.PortfolioCoordination',
    'Ministry of Cooperatives and Ni-Vanuatu Business Development Services': 'root.categories.MinistryofCooperativesandNi-VanuatuBusinessDevelopmentServices',
    'Administration Unit': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.Administration&FinanceDivision.categories.Administration Unit',
    'Finance Unit': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.Administration&FinanceDivision.categories.Finance Unit',
    'Policy and Planning Unit': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.Administration&FinanceDivision.categories.Policy and Planning Unit',
    'Procurement & Assets Unit': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.Administration&FinanceDivision.categories.Procurement & Assets Unit',
    'Training and Scholarship Coordination Unit': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.Administration&FinanceDivision.categories.Training and Scholarship Coordination Unit',
    'Administration & Finance Division': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.Administration&FinanceDivision',
    'Human Resource Management Unit': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.DirectorGeneral\'sDivision.categories.Human Resource Management Unit',
    'Internal Audit Unit': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.DirectorGeneral\'sDivision.categories.Internal Audit Unit',
    'Office of the Director of Administration & Finance': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.DirectorGeneral\'sDivision.categories.Office of the Director of Administration & Finance',
    'Director General\'s Division': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.DirectorGeneral\'sDivision',
    'Facilities Unit': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.Policy&PlanningDivision.categories.Facilities Unit',
    'Information and Communication Technology Unit': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.Policy&PlanningDivision.categories.Information and Communication Technology Unit',
    'Office of the Director of Policy and Planning': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.Policy&PlanningDivision.categories.Office of the Director of Policy and Planning',
    'VEMIS Unit': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.Policy&PlanningDivision.categories.VEMIS Unit',
    'Policy & Planning Division': 'root.categories.MinistryofEducation.categories.ExecutiveManagementandCorporateServices.categories.Policy&PlanningDivision',
    'Apostolic Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.ApostolicPrimarySchools',
    'Catholic Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.CatholicPrimarySchools',
    'Church of Melanesia Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.ChurchofMelanesiaPrimarySchools',
    'Malampa Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.MalampaPrimarySchools',
    'Neil Thomas Ministry Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.NeilThomasMinistryPrimarySchools',
    'Penama Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.PenamaPrimarySchools',
    'Pre Schools Grant': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.PreSchoolsGrant',
    'Presbyterian Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.PresbyterianPrimarySchools',
    'Primary Schools Grant': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.PrimarySchoolsGrant',
    'Primary Teachers Incidentials': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.PrimaryTeachersIncidentials',
    'Primary Teachers on Scholarship': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.PrimaryTeachersonScholarship',
    'Protestant Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.ProtestantPrimarySchools',
    'Provincial Education Office Maintenance': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.ProvincialEducationOfficeMaintenance',
    'SDA Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.SDAPrimarySchools',
    'Sanma Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.SanmaPrimarySchools',
    'Schools Solar Panel Maintenance': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.SchoolsSolarPanelMaintenance',
    'Shefa Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.ShefaPrimarySchools',
    'Tafea Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.TafeaPrimarySchools',
    'Torba Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.TorbaPrimarySchools',
    'VFF Academy Primary Schools': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision.categories.VFFAcademyPrimarySchools',
    'Primary Schools Division': 'root.categories.MinistryofEducation.categories.PrimarySchoolsDivision',
    'Early Childhood Education Unit': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision.categories.EarlyChildhoodEducationUnit',
    'Government Assisted Education Authority Unit': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision.categories.GovernmentAssistedEducationAuthorityUnit',
    'Malampa Provincial Education Office': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision.categories.MalampaProvincialEducationOffice',
    'Office of the Director of School Administration': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision.categories.OfficeoftheDirectorofSchoolAdministration',
    'Penama Provincial Education Office': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision.categories.PenamaProvincialEducationOffice',
    'Primary Education Unit': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision.categories.PrimaryEducationUnit',
    'Sanma Provincial Education Office': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision.categories.SanmaProvincialEducationOffice',
    'Secondary Education Unit': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision.categories.SecondaryEducationUnit',
    'Shefa Provincial Education Office': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision.categories.ShefaProvincialEducationOffice',
    'Tafea Provincial Education Office': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision.categories.TafeaProvincialEducationOffice',
    'Technical & Higher Education Unit': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision.categories.Technical&HigherEducationUnit',
    'Torba Provincial Education Office': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision.categories.TorbaProvincialEducationOffice',
    'Training & Scholarship Coordination Unit': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision.categories.Training&ScholarshipCoordinationUnit',
    'School Administration Division': 'root.categories.MinistryofEducation.categories.SchoolAdministrationDivision',
    'Curriculum Development Unit': 'root.categories.MinistryofEducation.categories.SchoolSupportServicesDivision.categories.CurriculumDevelopmentUnit',
    'Examination & Assessment Unit': 'root.categories.MinistryofEducation.categories.SchoolSupportServicesDivision.categories.Examination&AssessmentUnit',
    'School Based Management Unit': 'root.categories.MinistryofEducation.categories.SchoolSupportServicesDivision.categories.SchoolBasedManagementUnit',
    'Zone Curriculum Advisors': 'root.categories.MinistryofEducation.categories.SchoolSupportServicesDivision.categories.ZoneCurriculumAdvisors',
    'School Support Services Division': 'root.categories.MinistryofEducation.categories.SchoolSupportServicesDivision',
    'Apostolic Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.ApostolicSecondarySchools',
    'Bahai\'i Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.Bahai\'iSecondarySchools',
    'Catholic Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.CatholicSecondarySchools',
    'Church of Christ Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.ChurchofChristSecondarySchools',
    'Church of Malanesia Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.ChurchofMalanesiaSecondarySchools',
    'Malampa Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.MalampaSecondarySchools',
    'NTM Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.NTMSecondarySchools',
    'Penama Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.PenamaSecondarySchools',
    'Prebyterian Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.PrebyterianSecondarySchools',
    'Protestant Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.ProtestantSecondarySchools',
    'SDA Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.SDASecondarySchools',
    'Sanma Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.SanmaSecondarySchools',
    'Secondary Schools Grant': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.SecondarySchoolsGrant',
    'Secondary Teachers Incidentals': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.SecondaryTeachersIncidentals',
    'Secondary Teachers on Scholarship': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.SecondaryTeachersonScholarship',
    'Shefa Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.ShefaSecondarySchools',
    'Tafea Secondary School': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.TafeaSecondarySchool',
    'Torba Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.TorbaSecondarySchools',
    'VFF Academy Secondary Schools': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision.categories.VFFAcademySecondarySchools',
    'Secondary Schools Division': 'root.categories.MinistryofEducation.categories.SecondarySchoolsDivision',
    'Teaching Services Commission & Other Education Commissions and Councils': 'root.categories.MinistryofEducation.categories.TeachingServicesCommission&OtherEducationCommissionsandCouncils',
    'In Service Unit': 'root.categories.MinistryofEducation.categories.Technical&HigherEducationDivision.categories.InServiceUnit',
    'Tafea Primary School': 'root.categories.MinistryofEducation.categories.Technical&HigherEducationDivision.categories.TafeaPrimarySchool',
    'Vanuatu Government Scholarship Fund': 'root.categories.MinistryofEducation.categories.Technical&HigherEducationDivision.categories.VanuatuGovernmentScholarshipFund',
    'Vanuatu Institute of Teacher Education': 'root.categories.MinistryofEducation.categories.Technical&HigherEducationDivision.categories.VanuatuInstituteofTeacherEducation',
    'Vanuatu Institute of Technology': 'root.categories.MinistryofEducation.categories.Technical&HigherEducationDivision.categories.VanuatuInstituteofTechnology',
    'Technical & Higher Education Division': 'root.categories.MinistryofEducation.categories.Technical&HigherEducationDivision',
    'Ministry of Education': 'root.categories.MinistryofEducation',
    'Customs Border Control': 'root.categories.MinistryofFinanceandEconomicManagement.categories.BorderControlandEnforcement.categories.CustomsBorderControl',
    'Customs Border Control - Santo': 'root.categories.MinistryofFinanceandEconomicManagement.categories.BorderControlandEnforcement.categories.CustomsBorderControl-Santo',
    'Border Control and Enforcement': 'root.categories.MinistryofFinanceandEconomicManagement.categories.BorderControlandEnforcement',
    'Customs Corporate Services': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.CorporateServices.categories.Customs Corporate Services',
    'DOF Corporate Services Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.CorporateServices.categories.DOF Corporate Services Section',
    'Ministry Executive': 'root.categories.MinistryofHealth.categories.ExecutiveManagementandCorporateServices.categories.MinistryExecutive',
    'NSO Office Admin': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.CorporateServices.categories.NSO Office Admin',
    'VAT Audit Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.CorporateServices.categories.VAT Audit Section',
    'VAT Revenue Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.CorporateServices.categories.VAT Revenue Section',
    'Customs Information Services': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.InformationServices.categories.Customs Information Services',
    'FMIS Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.InformationServices.categories.FMIS Section',
    'Information Services': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.InformationServices',
    'Director - Customs': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.MinistryExecutive&InternalAudit.categories.Director - Customs',
    'Director - DOF': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.MinistryExecutive&InternalAudit.categories.Director - DOF',
    'Director - NSO': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.MinistryExecutive&InternalAudit.categories.Director - NSO',
    'Internal Audit Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.MinistryExecutive&InternalAudit.categories.Internal Audit Section',
    'Ministry Executive & Internal Audit': 'root.categories.MinistryofFinanceandEconomicManagement.categories.ExecutiveManagementandCorporateServices.categories.MinistryExecutive&InternalAudit',
    'Economic Policy Development': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.EconomicPolicyDevelopment',
    'Accounting Group (Financial Controller)': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Accounting Group (Financial Controller)',
    'Aid Coordination Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Aid Coordination Section',
    'Budget Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Budget Section',
    'Central Payments': 'root.categories.PaymentsonBehalfofGovernment.categories.CentralPayments',
    'Finance Services Bureau Malampa Province': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Finance Services Bureau Malampa Province',
    'Finance Services Bureau Penama Province': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Finance Services Bureau Penama Province',
    'Finance Services Bureau Sanma Province': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Finance Services Bureau Sanma Province',
    'Finance Services Bureau Tafea Province': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Finance Services Bureau Tafea Province',
    'Finance Services Bureau Torba Province': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Finance Services Bureau Torba Province',
    'Finance and Administration Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Finance and Administration Section',
    'Financial Accounting Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Financial Accounting Section',
    'Government Business Enterprise Unit': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Government Business Enterprise Unit',
    'Government Business Monitoring and Evaluation Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Government Business Monitoring and Evaluation Section',
    'Land Compensation payment': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Land Compensation payment',
    'Legal Unit': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Legal Unit',
    'Line Agency Accounting Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Line Agency Accounting Section',
    'Payments Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Payments Section',
    'Payroll Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Payroll Section',
    'Procurement and Asset Management Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Procurement and Asset Management Section',
    'Rates & Taxes Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Rates & Taxes Section',
    'Revenue Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Revenue Section',
    'Tender Board': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Tender Board',
    'Treasury Divison': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices.categories.Treasury Divison',
    'Government Financial Services': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement.categories.GovernmentFinancialServices',
    'Financial And Economic Management': 'root.categories.MinistryofFinanceandEconomicManagement.categories.FinancialAndEconomicManagement',
    'Emoluments Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.NationalStatistics.categories.NationalStatisticalCollectionAnalysis&Reporting.categories.Emoluments Section',
    'Provincial Offices': 'root.categories.MinistryofFinanceandEconomicManagement.categories.NationalStatistics.categories.NationalStatisticalCollectionAnalysis&Reporting.categories.Provincial Offices',
    'National Statistical Collection Analysis & Reporting': 'root.categories.MinistryofFinanceandEconomicManagement.categories.NationalStatistics.categories.NationalStatisticalCollectionAnalysis&Reporting',
    'Economic Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.NationalStatistics.categories.ProvincialStatisticsOffices.categories.Economic Section',
    'Social Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.NationalStatistics.categories.ProvincialStatisticsOffices.categories.Social Section',
    'Statistical Leadership and Coordination Section': 'root.categories.MinistryofFinanceandEconomicManagement.categories.NationalStatistics.categories.ProvincialStatisticsOffices.categories.Statistical Leadership and Coordination Section',
    'Provincial Statistics Offices': 'root.categories.MinistryofFinanceandEconomicManagement.categories.NationalStatistics.categories.ProvincialStatisticsOffices',
    'National Statistics': 'root.categories.MinistryofFinanceandEconomicManagement.categories.NationalStatistics',
    'Customs Post Clearance & Excise Audit': 'root.categories.MinistryofFinanceandEconomicManagement.categories.RevenueCollection.categories.CustomsandExciseCollections.categories.Customs Post Clearance & Excise Audit',
    'Customs Revenue - Santo': 'root.categories.MinistryofFinanceandEconomicManagement.categories.RevenueCollection.categories.CustomsandExciseCollections.categories.Customs Revenue - Santo',
    'Customs Revenue. Trades Tariff & Compliance': 'root.categories.MinistryofFinanceandEconomicManagement.categories.RevenueCollection.categories.CustomsandExciseCollections.categories.Customs Revenue. Trades Tariff & Compliance',
    'Customs and Excise Collections': 'root.categories.MinistryofFinanceandEconomicManagement.categories.RevenueCollection.categories.CustomsandExciseCollections',
    'Rates and Taxes Collection': 'root.categories.MinistryofFinanceandEconomicManagement.categories.RevenueCollection.categories.RatesandTaxesCollection',
    'VAT Collections': 'root.categories.MinistryofFinanceandEconomicManagement.categories.RevenueCollection.categories.VATCollections',
    'Revenue Collection': 'root.categories.MinistryofFinanceandEconomicManagement.categories.RevenueCollection',
    'Ministry of Finance and Economic Management': 'root.categories.MinistryofFinanceandEconomicManagement',
    'Canberra Mission': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.DeptofForeignAffairs.categories.CanberraMission',
    'Consul Noumea': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.DeptofForeignAffairs.categories.ConsulNoumea',
    'Consulate Auckland': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.DeptofForeignAffairs.categories.ConsulateAuckland',
    'Embassy Beijing': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.DeptofForeignAffairs.categories.EmbassyBeijing',
    'Embassy Brussels': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.DeptofForeignAffairs.categories.EmbassyBrussels',
    'Grant to MSG': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.DeptofForeignAffairs.categories.GranttoMSG',
    'High Commission Suva': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.DeptofForeignAffairs.categories.HighCommissionSuva',
    'Honorary Consuls': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.DeptofForeignAffairs.categories.HonoraryConsuls',
    'International Organisations': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.DeptofForeignAffairs.categories.InternationalOrganisations',
    'Permanent Mission to the United States': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.DeptofForeignAffairs.categories.PermanentMissiontotheUnitedStates',
    'Protocol & Consular': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.DeptofForeignAffairs.categories.Protocol&Consular',
    'Dept of Foreign Affairs': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.DeptofForeignAffairs',
    'External Trade Negotiation and Development': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.ExternalTradeNegotiationandDevelopment',
    'External Trade Policy and Administration': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.TradeDevelopmentandFacilitation.categories.ExternalTradePolicyandAdministration',
    'Industry and Commerce': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.TradeDevelopmentandFacilitation.categories.IndustryandCommerce',
    'Trade Development and Facilitation': 'root.categories.MinistryofForeignAffairsandExternalTrade.categories.TradeDevelopmentandFacilitation',
    'Ministry of Foreign Affairs and External Trade': 'root.categories.MinistryofForeignAffairsandExternalTrade',
    'Community Health Malampa Province': 'root.categories.MinistryofHealth.categories.HealthServices.categories.CommunityHealthServices.categories.Community Health Malampa Province',
    'Director of Public Health': 'root.categories.MinistryofHealth.categories.ExecutiveManagementandCorporateServices.categories.CorporateServices.categories.Director of Public Health',
    'Planning & Administration': 'root.categories.MinistryofHealth.categories.ExecutiveManagementandCorporateServices.categories.CorporateServices.categories.Planning & Administration',
    'Health Sector Human Resource Development': 'root.categories.MinistryofHealth.categories.ExecutiveManagementandCorporateServices.categories.HealthSectorHumanResourceDevelopment',
    'Community Health Penama Province': 'root.categories.MinistryofHealth.categories.HealthServices.categories.CommunityHealthServices.categories.Community Health Penama Province',
    'Community Health Sanma Province': 'root.categories.MinistryofHealth.categories.HealthServices.categories.CommunityHealthServices.categories.Community Health Sanma Province',
    'Community Health Shefa Province': 'root.categories.MinistryofHealth.categories.HealthServices.categories.CommunityHealthServices.categories.Community Health Shefa Province',
    'Community Health Tafea Province': 'root.categories.MinistryofHealth.categories.HealthServices.categories.CommunityHealthServices.categories.Community Health Tafea Province',
    'Community Health Torba Province': 'root.categories.MinistryofHealth.categories.HealthServices.categories.CommunityHealthServices.categories.Community Health Torba Province',
    'Community Health Services': 'root.categories.MinistryofHealth.categories.HealthServices.categories.CommunityHealthServices',
    'Director - Curative & Hospital Services': 'root.categories.MinistryofHealth.categories.HealthServices.categories.HospitalServices.categories.Director - Curative & Hospital Services',
    'Director - Northern Health Care': 'root.categories.MinistryofHealth.categories.HealthServices.categories.HospitalServices.categories.Director - Northern Health Care',
    'Director - Southern Health Care': 'root.categories.MinistryofHealth.categories.HealthServices.categories.HospitalServices.categories.Director - Southern Health Care',
    'Doctors Visitations & Hospital Referral of Patients': 'root.categories.MinistryofHealth.categories.HealthServices.categories.HospitalServices.categories.Doctors Visitations & Hospital Referral of Patients',
    'Lenakel Hospital': 'root.categories.MinistryofHealth.categories.HealthServices.categories.HospitalServices.categories.Lenakel Hospital',
    'Lolowai Hospital': 'root.categories.MinistryofHealth.categories.HealthServices.categories.HospitalServices.categories.Lolowai Hospital',
    'Norsup Hospital': 'root.categories.MinistryofHealth.categories.HealthServices.categories.HospitalServices.categories.Norsup Hospital',
    'Northern District Hospital': 'root.categories.MinistryofHealth.categories.HealthServices.categories.HospitalServices.categories.Northern District Hospital',
    'Torba Hospital': 'root.categories.MinistryofHealth.categories.HealthServices.categories.HospitalServices.categories.Torba Hospital',
    'Vila Central Hospital': 'root.categories.MinistryofHealth.categories.HealthServices.categories.HospitalServices.categories.Vila Central Hospital',
    'Hospital Services': 'root.categories.MinistryofHealth.categories.HealthServices.categories.HospitalServices',
    'Management of Medical Supplies': 'root.categories.MinistryofHealth.categories.HealthServices.categories.MedicalSuppliesStock.categories.Management of Medical Supplies',
    'Purchase of Drugs': 'root.categories.MinistryofHealth.categories.HealthServices.categories.MedicalSuppliesStock.categories.Purchase of Drugs',
    'Medical Supplies Stock': 'root.categories.MinistryofHealth.categories.HealthServices.categories.MedicalSuppliesStock',
    'Disease Surveillance & Response': 'root.categories.MinistryofHealth.categories.HealthServices.categories.PublicHealthServices.categories.Disease Surveillance & Response',
    'EPI': 'root.categories.MinistryofHealth.categories.HealthServices.categories.PublicHealthServices.categories.EPI',
    'Environmental Health': 'root.categories.MinistryofHealth.categories.HealthServices.categories.PublicHealthServices.categories.Environmental Health',
    'Health Promotion': 'root.categories.MinistryofHealth.categories.HealthServices.categories.PublicHealthServices.categories.Health Promotion',
    'IMCI': 'root.categories.MinistryofHealth.categories.HealthServices.categories.PublicHealthServices.categories.IMCI',
    'Malaria & Other Vector-Borne Diseases': 'root.categories.MinistryofHealth.categories.HealthServices.categories.PublicHealthServices.categories.Malaria & Other Vector-Borne Diseases',
    'NCD & Mental Health': 'root.categories.MinistryofHealth.categories.HealthServices.categories.PublicHealthServices.categories.NCD & Mental Health',
    'Neglected Tropical Diseases': 'root.categories.MinistryofHealth.categories.HealthServices.categories.PublicHealthServices.categories.Neglected Tropical Diseases',
    'Nutrition': 'root.categories.MinistryofHealth.categories.HealthServices.categories.PublicHealthServices.categories.Nutrition',
    'Reproductive Health & Family Planning': 'root.categories.MinistryofHealth.categories.HealthServices.categories.PublicHealthServices.categories.Reproductive Health & Family Planning',
    'STI & HIV/AIDS': 'root.categories.MinistryofHealth.categories.HealthServices.categories.PublicHealthServices.categories.STI & HIV/AIDS',
    'TB/Leprosy': 'root.categories.MinistryofHealth.categories.HealthServices.categories.PublicHealthServices.categories.TB/Leprosy',
    'Public Health Services': 'root.categories.MinistryofHealth.categories.HealthServices.categories.PublicHealthServices',
    'Health Services': 'root.categories.MinistryofHealth.categories.HealthServices',
    'Ministry of Health': 'root.categories.MinistryofHealth',
    'Civil Aviation Authority': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.CivilAviationAuthority',
    'Ministerial  Cabinet Support': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.MinisterialCabinetSupport',
    'Head Office': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks.categories.DevelopmentandMaintenanceofGovernmentInfrastructure.categories.Head Office',
    'MCA Maintenance': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks.categories.DevelopmentandMaintenanceofGovernmentInfrastructure.categories.MCA Maintenance',
    'Malampa Division': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks.categories.DevelopmentandMaintenanceofGovernmentInfrastructure.categories.Malampa Division',
    'Outer Island Airports Maintenance': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks.categories.DevelopmentandMaintenanceofGovernmentInfrastructure.categories.Outer Island Airports Maintenance',
    'Penama Division': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks.categories.DevelopmentandMaintenanceofGovernmentInfrastructure.categories.Penama Division',
    'Project Management Unit': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks.categories.DevelopmentandMaintenanceofGovernmentInfrastructure.categories.Project Management Unit',
    'Provincial Water Supply': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks.categories.DevelopmentandMaintenanceofGovernmentInfrastructure.categories.Provincial Water Supply',
    'Sanma Division': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks.categories.DevelopmentandMaintenanceofGovernmentInfrastructure.categories.Sanma Division',
    'Shefa Division': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks.categories.DevelopmentandMaintenanceofGovernmentInfrastructure.categories.Shefa Division',
    'Tafea Division': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks.categories.DevelopmentandMaintenanceofGovernmentInfrastructure.categories.Tafea Division',
    'Torba Division': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks.categories.DevelopmentandMaintenanceofGovernmentInfrastructure.categories.Torba Division',
    'Development and Maintenance of Government Infrastructure': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks.categories.DevelopmentandMaintenanceofGovernmentInfrastructure',
    'Government Contributions to Projects': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks.categories.GovernmentContributionstoProjects',
    'Public Works': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.PublicWorks',
    'Government Contribution for Projects': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.ShippingServices.categories.GovernmentContributionforProjects',
    'Ports & Marine': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.ShippingServices.categories.Ports&Marine',
    'Tug boat Maintenance': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.ShippingServices.categories.TugboatMaintenance',
    'Ports Administration': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.ShippingServices',
    'Vanuatu Meterological Services': 'root.categories.MinistryofInfrastructureandPublicUtilities.categories.VanuatuMeterologicalServices',
    'Ministry of Infrastructure and Public Utilities': 'root.categories.MinistryofInfrastructureandPublicUtilities',
    'Crime Prevention': 'root.categories.MinistryofInternalAffairs.categories.CabinetSupport.categories.CrimePrevention',
    'Independence Celebration': 'root.categories.MinistryofInternalAffairs.categories.CabinetSupport.categories.IndependenceCelebration',
    'Portfolio Management': 'root.categories.MinistryofInternalAffairs.categories.CabinetSupport.categories.PortfolioManagement',
    'Decentralization Services Unit': 'root.categories.MinistryofInternalAffairs.categories.DecentralisationServices.categories.AdministrationofRegionalServices.categories.Decentralization Services Unit',
    'Development Planning': 'root.categories.MinistryofInternalAffairs.categories.DecentralisationServices.categories.AdministrationofRegionalServices.categories.Development Planning',
    'Financial Services': 'root.categories.MinistryofInternalAffairs.categories.DecentralisationServices.categories.AdministrationofRegionalServices.categories.Financial Services',
    'Legal Service Unit': 'root.categories.MinistryofInternalAffairs.categories.DecentralisationServices.categories.AdministrationofRegionalServices.categories.Legal Service Unit',
    'Physical & Urban Planning': 'root.categories.MinistryofInternalAffairs.categories.DecentralisationServices.categories.AdministrationofRegionalServices.categories.Physical & Urban Planning',
    'Administration of Regional Services': 'root.categories.MinistryofInternalAffairs.categories.DecentralisationServices.categories.AdministrationofRegionalServices',
    'Grants to Municipalities': 'root.categories.MinistryofInternalAffairs.categories.DecentralisationServices.categories.GrantstoMunicipalities',
    'Grants to Provinces': 'root.categories.MinistryofInternalAffairs.categories.DecentralisationServices.categories.GrantstoProvinces',
    'Decentralisation Services': 'root.categories.MinistryofInternalAffairs.categories.DecentralisationServices',
    'Border Control': 'root.categories.MinistryofInternalAffairs.categories.InternalSecurityandBorderControl.categories.BorderControl',
    'Issue of Passports': 'root.categories.MinistryofInternalAffairs.categories.InternalSecurityandBorderControl.categories.IssueofPassports',
    'Internal Security and Border Control': 'root.categories.MinistryofInternalAffairs.categories.InternalSecurityandBorderControl',
    'Civil Registry': 'root.categories.MinistryofInternalAffairs.categories.NationalServices.categories.CivilRegistry',
    'Election Management': 'root.categories.MinistryofInternalAffairs.categories.NationalServices.categories.ConductofElections.categories.Election Management',
    'Conduct of Elections': 'root.categories.MinistryofInternalAffairs.categories.NationalServices.categories.ConductofElections',
    'Electoral Services': 'root.categories.MinistryofInternalAffairs.categories.NationalServices.categories.ElectoralServices',
    'General Administration': 'root.categories.MinistryofInternalAffairs.categories.NationalServices.categories.LabourRegulation.categories.General Administration',
    'Industrial Relations Unit': 'root.categories.MinistryofInternalAffairs.categories.NationalServices.categories.LabourRegulation.categories.Industrial Relations Unit',
    'International Labour Conference': 'root.categories.MinistryofInternalAffairs.categories.NationalServices.categories.LabourRegulation.categories.International Labour Conference',
    'Manpower & Training Unit (ESU)': 'root.categories.MinistryofInternalAffairs.categories.NationalServices.categories.LabourRegulation.categories.Manpower & Training Unit (ESU)',
    'Occupational Health & Safety Unit': 'root.categories.MinistryofInternalAffairs.categories.NationalServices.categories.LabourRegulation.categories.Occupational Health & Safety Unit',
    'Travel & Subsistance': 'root.categories.MinistryofInternalAffairs.categories.NationalServices.categories.LabourRegulation.categories.Travel & Subsistance',
    'Tripartite Labour Advisory Council': 'root.categories.MinistryofInternalAffairs.categories.NationalServices.categories.LabourRegulation.categories.Tripartite Labour Advisory Council',
    'Labour Regulation': 'root.categories.MinistryofInternalAffairs.categories.NationalServices.categories.LabourRegulation',
    'National Services': 'root.categories.MinistryofInternalAffairs.categories.NationalServices',
    'Police Service Commission': 'root.categories.MinistryofInternalAffairs.categories.PoliceServiceCommission',
    'Ministry of Internal Affairs': 'root.categories.MinistryofInternalAffairs',
    'Correctional Centre (North)': 'root.categories.MinistryofJusticeandCommunityService.categories.CorrectionalServices.categories.CorrectionalServices.categories.Correctional Centre (North)',
    'Correctonal Centre (South)': 'root.categories.MinistryofJusticeandCommunityService.categories.CorrectionalServices.categories.CorrectionalServices.categories.Correctonal Centre (South)',
    'Office of the Director': 'root.categories.MinistryofJusticeandCommunityService.categories.CorrectionalServices.categories.CorrectionalServices.categories.Office of the Director',
    'Parole': 'root.categories.MinistryofJusticeandCommunityService.categories.CorrectionalServices.categories.CorrectionalServices.categories.Parole',
    'Probation (North)': 'root.categories.MinistryofJusticeandCommunityService.categories.CorrectionalServices.categories.CorrectionalServices.categories.Probation (North)',
    'Probation (South)': 'root.categories.MinistryofJusticeandCommunityService.categories.CorrectionalServices.categories.CorrectionalServices.categories.Probation (South)',
    'Correctional Services': 'root.categories.MinistryofJusticeandCommunityService.categories.CorrectionalServices',
    'Lands Tribunal': 'root.categories.MinistryofJusticeandCommunityService.categories.LandsTribunal',
    'Law Reform Commission': 'root.categories.MinistryofJusticeandCommunityService.categories.LawReformCommission',
    'Womens Affairs': 'root.categories.MinistryofJusticeandCommunityService.categories.WomensAffairs',
    'Ministry of Justice and Community Service': 'root.categories.MinistryofJusticeandCommunityService',
    'Environmental management research and extension Services': 'root.categories.MinistryofLandsGeologyandMines.categories.Environment.categories.EnvironmentalmanagementresearchandextensionServices',
    'Geology & Mines - Minerals': 'root.categories.MinistryofLandsGeologyandMines.categories.ExecutiveManagementandCorporateServices.categories.CorporateServices.categories.Geology & Mines - Minerals',
    'Land Reform Package': 'root.categories.MinistryofLandsGeologyandMines.categories.ExecutiveManagementandCorporateServices.categories.CorporateServices.categories.Land Reform Package',
    'Mines and Minerals': 'root.categories.MinistryofLandsGeologyandMines.categories.GeologyandMines.categories.MinesandMinerals',
    'Geology and Mines': 'root.categories.MinistryofLandsGeologyandMines.categories.GeologyandMines',
    'Valuer General\'s Office': 'root.categories.MinistryofLandsGeologyandMines.categories.LandValuationServices.categories.ValuerGeneral\'sOffice',
    'Land Valuation Services': 'root.categories.MinistryofLandsGeologyandMines.categories.LandValuationServices',
    'Customary Land Registration': 'root.categories.MinistryofLandsGeologyandMines.categories.LandsManagement.categories.CustomaryLandRegistration',
    'Land Survey Unit': 'root.categories.MinistryofLandsGeologyandMines.categories.LandsManagement.categories.LandSurvey.categories.Land Survey Unit',
    'Land Survey': 'root.categories.MinistryofLandsGeologyandMines.categories.LandsManagement.categories.LandSurvey',
    'Urban & Rural Lands Unit': 'root.categories.MinistryofLandsGeologyandMines.categories.LandsManagement.categories.LandUsePlanning.categories.Urban & Rural Lands Unit',
    'Valuer General': 'root.categories.MinistryofLandsGeologyandMines.categories.LandsManagement.categories.LandUsePlanning.categories.Valuer General',
    'Land Use Planning': 'root.categories.MinistryofLandsGeologyandMines.categories.LandsManagement.categories.LandUsePlanning',
    'Enforcement & Compliance': 'root.categories.MinistryofLandsGeologyandMines.categories.LandsManagement.categories.LeaseManagement.categories.Enforcement & Compliance',
    'Land Records Unit': 'root.categories.MinistryofLandsGeologyandMines.categories.LandsManagement.categories.LeaseManagement.categories.Land Records Unit',
    'Santo Office': 'root.categories.MinistryofLandsGeologyandMines.categories.LandsManagement.categories.LeaseManagement.categories.Santo Office',
    'Lease Management': 'root.categories.MinistryofLandsGeologyandMines.categories.LandsManagement.categories.LeaseManagement',
    'Lands Management': 'root.categories.MinistryofLandsGeologyandMines.categories.LandsManagement',
    'Geology & Mines - Rural Water Supply': 'root.categories.MinistryofLandsGeologyandMines.categories.WaterResources.categories.RuralWaterSupply.categories.Geology & Mines - Rural Water Supply',
    'Rural Water Supply': 'root.categories.MinistryofLandsGeologyandMines.categories.WaterResources.categories.RuralWaterSupply',
    'Geology & Mines - Water Resources': 'root.categories.MinistryofLandsGeologyandMines.categories.WaterResources.categories.WaterResourceManagement.categories.Geology & Mines - Water Resources',
    'Water Resource Management': 'root.categories.MinistryofLandsGeologyandMines.categories.WaterResources.categories.WaterResourceManagement',
    'Water Resources': 'root.categories.MinistryofLandsGeologyandMines.categories.WaterResources',
    'Ministry of Lands Geology and Mines': 'root.categories.MinistryofLandsGeologyandMines',
    'Ministry Cabinet': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.MinistryCabinet',
    'Grant for MALAMPA Province Youth Development Sport and Training Officer': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.ProvincialGrantsYouthDevelopment.categories.GrantforMALAMPAProvinceYouthDevelopmentSportandTrainingOfficer',
    'Grant for PENAMA Province Youth Development Sport and Training Officer': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.ProvincialGrantsYouthDevelopment.categories.GrantforPENAMAProvinceYouthDevelopmentSportandTrainingOfficer',
    'Grant for SANMA Province Youth Development Sport and Training Officer': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.ProvincialGrantsYouthDevelopment.categories.GrantforSANMAProvinceYouthDevelopmentSportandTrainingOfficer',
    'Grant for SHEFA Province Youth Development Sport and Training Officer': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.ProvincialGrantsYouthDevelopment.categories.GrantforSHEFAProvinceYouthDevelopmentSportandTrainingOfficer',
    'Grant for TAFEA Province Youth Development Sport and Training Officer': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.ProvincialGrantsYouthDevelopment.categories.GrantforTAFEAProvinceYouthDevelopmentSportandTrainingOfficer',
    'Grant for TORBA Province Youth Development Sport and Training Officer': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.ProvincialGrantsYouthDevelopment.categories.GrantforTORBAProvinceYouthDevelopmentSportandTrainingOfficer',
    'Provincial Grants Youth Development': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.ProvincialGrantsYouthDevelopment',
    'Non & Informal Education Development': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.TVET&EmploymentOpportunities.categories.Non&InformalEducationDevelopment',
    'Office of Technical Vocational Education and Training & Employment Opportunities': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.TVET&EmploymentOpportunities.categories.OfficeofTechnicalVocationalEducationandTraining&EmploymentOpportunities',
    'Vanuatu National Training Council': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.TVET&EmploymentOpportunities.categories.VanuatuNationalTrainingCouncil',
    'TVET & Employment Opportunities': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.TVET&EmploymentOpportunities',
    'Contribution to Youth & Sport Development': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.YouthDevelopmentSport&Recreation.categories.ContributiontoSport&YouthDevelopment.categories.Contribution to Youth & Sport Development',
    'National Sport Gymnasium': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.YouthDevelopmentSport&Recreation.categories.ContributiontoSport&YouthDevelopment.categories.National Sport Gymnasium',
    'Contribution to Sport & Youth Development': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.YouthDevelopmentSport&Recreation.categories.ContributiontoSport&YouthDevelopment',
    'Office of Youth Development Sport & Training': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.YouthDevelopmentSport&Recreation.categories.ExecutiveManagement&SupportServices.categories.Office of Youth Development Sport & Training',
    'Support Services Unit': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.YouthDevelopmentSport&Recreation.categories.ExecutiveManagement&SupportServices.categories.Support Services Unit',
    'Executive Management & Support Services': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.YouthDevelopmentSport&Recreation.categories.ExecutiveManagement&SupportServices',
    'Youth Development Sport & Recreation': 'root.categories.MinistryofYouthDevelopmentandTraining.categories.YouthDevelopmentSport&Recreation',
    'Ministry of Youth Development and Training': 'root.categories.MinistryofYouthDevelopmentandTraining',
    'Former Leaders Payment': 'root.categories.PaymentsonBehalfofGovernment.categories.FormerLeadersPayment',
    'Public Debt Provisions': 'root.categories.PaymentsonBehalfofGovernment.categories.PublicDebtProvisions',
    'Payments on Behalf of Government': 'root.categories.PaymentsonBehalfofGovernment',
    'Community Development Fund': 'root.categories.PrimeMinistersMinistry.categories.DirectorGeneral\'sOffice.categories.CommunityDevelopmentFund',
    'PMO Corporate Services': 'root.categories.PrimeMinistersMinistry.categories.DirectorGeneral\'sOffice.categories.PMOCorporateServices',
    'Utilities': 'root.categories.PrimeMinistersMinistry.categories.DirectorGeneral\'sOffice.categories.Utilities',
    'Director General\'s Office': 'root.categories.PrimeMinistersMinistry.categories.DirectorGeneral\'sOffice',
    'Administration & Operations': 'root.categories.PrimeMinistersMinistry.categories.InformationCommunicationandTechnologyPolicyandAdministration.categories.Administration&Operations',
    'Government Broadband Network': 'root.categories.PrimeMinistersMinistry.categories.InformationCommunicationandTechnologyPolicyandAdministration.categories.InformationCommunicationandTechnologyPolicyandAdministration',
    'Information Communication and Technology Policy and Administration': 'root.categories.PrimeMinistersMinistry.categories.InformationCommunicationandTechnologyPolicyandAdministration',
    'Commisioner\'s Office': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.JointCommandandControl.categories.Commisioner\'s Office',
    'Joint Command Operation': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.JointCommandandControl.categories.Joint Command Operation',
    'Joint Planning Operation Center': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.JointCommandandControl.categories.Joint Planning Operation Center',
    'Luganville General Duty Policing': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.JointCommandandControl.categories.Luganville General Duty Policing',
    'Northern Command HQ': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.JointCommandandControl.categories.Northern Command HQ',
    'Oversea Missions': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.JointCommandandControl.categories.Oversea Missions',
    'Police College': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.JointCommandandControl.categories.Police College',
    'Police Recruit': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.JointCommandandControl.categories.Police Recruit',
    'Special Branch': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.JointCommandandControl.categories.Special Branch',
    'Transnational Crime Unit': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.JointCommandandControl.categories.Transnational Crime Unit',
    'Joint Command and Control': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.JointCommandandControl',
    'Central Command HQ': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictCentral.categories.Central Command HQ',
    'Malampa Police': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictCentral.categories.Malampa Police',
    'Penama Police': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictCentral.categories.Penama Police',
    'Port Vila VIP Security': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictCentral.categories.Port Vila VIP Security',
    'Police District Central': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictCentral',
    'Luganville CID & SB': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictNorthern.categories.Luganville CID & SB',
    'Sanma Police': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictNorthern.categories.Sanma Police',
    'Southern Command HQ': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictNorthern.categories.Southern Command HQ',
    'Torba Police': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictNorthern.categories.Torba Police',
    'Police District Northern': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictNorthern',
    'Port Vila CID': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictSouthern.categories.Port Vila CID',
    'Port Vila General Duty Policing': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictSouthern.categories.Port Vila General Duty Policing',
    'Port Vila Prosecution': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictSouthern.categories.Port Vila Prosecution',
    'Port Vila Traffic': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictSouthern.categories.Port Vila Traffic',
    'RVS Mala Base': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictSouthern.categories.RVS Mala Base',
    'Shepherd\'s Police': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictSouthern.categories.Shepherd\'s Police',
    'Tafea Police Station': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictSouthern.categories.Tafea Police Station',
    'Police District Southern': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceDistrictSouthern',
    'Luganville Detechment': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.VanuatuMobileForce.categories.Luganville Detechment',
    'Maritime Surveillance': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceMaritimeWing.categories.Maritime Surveillance',
    'RVS Tukoro': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceMaritimeWing.categories.RVS Tukoro',
    'Police Maritime Wing': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.PoliceMaritimeWing',
    'Band': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.VanuatuMobileForce.categories.Band',
    'Engineering': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.VanuatuMobileForce.categories.Engineering',
    'Fire Services': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.VanuatuMobileForce.categories.Fire Services',
    'Mobile Force HQ': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.VanuatuMobileForce.categories.Mobile Force HQ',
    'Supplier and Armory': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.VanuatuMobileForce.categories.Supplier and Armory',
    'Surveillance and Response Force': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.VanuatuMobileForce.categories.Surveillance and Response Force',
    'Workshop': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.VanuatuMobileForce.categories.Workshop',
    'Vanuatu Mobile Force': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl.categories.VanuatuMobileForce',
    'Internal Security & Border Control': 'root.categories.PrimeMinistersMinistry.categories.InternalSecurityandBorderControl',
    'Language Services': 'root.categories.PrimeMinistersMinistry.categories.LanguageServices',
    'Training & Language Awareness': 'root.categories.PrimeMinistersMinistry.categories.LanguageServices.categories.Training&LanguageAwareness',
    'Cabinet': 'root.categories.PrimeMinistersMinistry.categories.OfficeofthePrimeMinister.categories.Cabinet',
    'Entertainment Fund': 'root.categories.PrimeMinistersMinistry.categories.OfficeofthePrimeMinister.categories.EntertainmentFund',
    'Independence Celebrations': 'root.categories.PrimeMinistersMinistry.categories.OfficeofthePrimeMinister.categories.IndependenceCelebrations',
    'International Travel': 'root.categories.PrimeMinistersMinistry.categories.OfficeofthePrimeMinister.categories.InternationalTravel',
    'Local Travel': 'root.categories.PrimeMinistersMinistry.categories.OfficeofthePrimeMinister.categories.LocalTravel',
    'Office of the Prime Minister': 'root.categories.PrimeMinistersMinistry.categories.OfficeofthePrimeMinister',
    'Parliamentary Secretariat': 'root.categories.PrimeMinistersMinistry.categories.ParliamentarySecretariat',
    'Special Commissions': 'root.categories.PrimeMinistersMinistry.categories.SpecialCommissions',
    'Aid Coordination Unit': 'root.categories.PrimeMinistersMinistry.categories.StrategicManagement.categories.AidCoordinationUnit',
    'Monitoring & Evaluation Unit': 'root.categories.PrimeMinistersMinistry.categories.StrategicManagement.categories.Monitoring&EvaluationUnit',
    'Policy Sectors': 'root.categories.PrimeMinistersMinistry.categories.StrategicManagement.categories.PolicySectors',
    'Vanuatu Project Management Unit (VPMU)': 'root.categories.PrimeMinistersMinistry.categories.StrategicManagement.categories.VanuatuProjectManagementUnit(VPMU)',
    'Strategic Management': 'root.categories.PrimeMinistersMinistry.categories.StrategicManagement',
    'Prime Ministers Ministry': 'root.categories.PrimeMinistersMinistry',
    'Vanuatu 2014 Spending': 'root'
};

var drill1 = {
    'categories': [
        {
            'name': 'Ministry of Education',
            'current-data': {
                'aggr': 4177924503,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Payments on Behalf of Government',
            'current-data': {
                'aggr': 2721805441,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Ministry of Health',
            'current-data': {
                'aggr': 1642203839,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Ministry of Infrastructure and Public Utilities',
            'current-data': {
                'aggr': 1546656666,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Prime Ministers Ministry',
            'current-data': {
                'aggr': 1275491813,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Constitutional Agencies',
            'current-data': {
                'aggr': 1129698286,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Ministry of Finance and Economic Management',
            'current-data': {
                'aggr': 949334642,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Grants to Institutions',
            'current-data': {
                'aggr': 660717166,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Ministry of Internal Affairs',
            'current-data': {
                'aggr': 608452252,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Ministry of Agriculture Livestock Forestry Fisheries and Biosecurity',
            'current-data': {
                'aggr': 482491212,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Ministry of Foreign Affairs and External Trade',
            'current-data': {
                'aggr': 366022222,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Ministry of Justice and Community Service',
            'current-data': {
                'aggr': 328337089,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Ministry of Commerce Industry Tourism and Ni-Vanuatu Business',
            'current-data': {
                'aggr': 287682822,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Ministry of Climate Change Adaptation Geohazards Meteorology and Energy',
            'current-data': {
                'aggr': 234984045,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Ministry of Lands Geology and Mines',
            'current-data': {
                'aggr': 231598853,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Ministry of Youth Development and Training',
            'current-data': {
                'aggr': 153551748,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        },
        {
            'name': 'Ministry of Civil Aviation Meteorology and Postal Services',
            'current-data': {
                'aggr': 0,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': false
        },
        {
            'name': 'Ministry of Cooperatives and Ni-Vanuatu Business Development Services',
            'current-data': {
                'aggr': 0,
                'change': 0
            },
            'level': 'Sectoral Expenditure',
            'drillable': true
        }
    ],
    'currency': 'VATU',
    'data': {
        '2012': {
            'aggr': 15417042635,
            'change': 0
        },
        '2013': {
            'aggr': 16725995509,
            'change': 0
        },
        '2014': {
            'aggr': 16796952599,
            'change': 0
        }
    },
    'multiplier': 1,
    'name': 'Vanuatu 2014 Spending'
};

var drill2 = {
    'categories': [
        {
            'name': 'Primary Schools Division',
            'current-data': {
                'aggr': 1758641867,
                'change': 0
            },
            'level': 'Departmental Expenditure',
            'drillable': true
        },
        {
            'name': 'Secondary Schools Division',
            'current-data': {
                'aggr': 1176690102,
                'change': 0
            },
            'level': 'Departmental Expenditure',
            'drillable': true
        },
        {
            'name': 'Technical & Higher Education Division',
            'current-data': {
                'aggr': 661884190,
                'change': 0
            },
            'level': 'Departmental Expenditure',
            'drillable': true
        },
        {
            'name': 'School Support Services Division',
            'current-data': {
                'aggr': 152345540,
                'change': 0
            },
            'level': 'Departmental Expenditure',
            'drillable': true
        },
        {
            'name': 'Executive Management and Corporate Services',
            'current-data': {
                'aggr': 148993229,
                'change': 0
            },
            'level': 'Departmental Expenditure',
            'drillable': true
        },
        {
            'name': 'School Administration Division',
            'current-data': {
                'aggr': 129589537,
                'change': 0
            },
            'level': 'Departmental Expenditure',
            'drillable': true
        },
        {
            'name': 'Teaching Services Commission & Other Education Commissions and Councils',
            'current-data': {
                'aggr': 103782955,
                'change': 0
            },
            'level': 'Departmental Expenditure',
            'drillable': false
        },
        {
            'name': 'Cabinet Support',
            'current-data': {
                'aggr': 45997083,
                'change': 0
            },
            'level': 'Departmental Expenditure',
            'drillable': false
        }
    ],
    'data': {
        '2012': {
            'aggr': 3945597404,
            'change': 0
        },
        '2013': {
            'aggr': 4285025195,
            'change': 0
        },
        '2014': {
            'aggr': 4177924503,
            'change': 0
        }
    },
    'level': 'Sectoral Expenditure',
    'name': 'Ministry of Education'
};

var drill3 = {
    'data': {
        '2012': {
            'aggr': 0,
            'change': 0
        },
        '2013': {
            'aggr': 311295626,
            'change': 0
        },
        '2014': {
            'aggr': 130215728,
            'change': 0
        }
    },
    'level': 'Departmental Expenditure',
    'name': 'Central Payments',
    'categories': []
};

var drill4 = {
    'data': {
        '2012': {
            'aggr': 0,
            'change': 0
        },
        '2013': {
            'aggr': 0,
            'change': 0
        },
        '2014': {
            'aggr': 9097194,
            'change': 0
        }
    },
    'level': 'Subprogramme Expenditure',
    'name': 'Director - Curative & Hospital Services',
    'categories': []
};

var drill5 = {
    'categories': [
        {
            'name': 'Shefa Secondary Schools',
            'current-data': {
                'aggr': 271578189,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Catholic Secondary Schools',
            'current-data': {
                'aggr': 170891714,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Sanma Secondary Schools',
            'current-data': {
                'aggr': 159066016,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Malampa Secondary Schools',
            'current-data': {
                'aggr': 122064488,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Tafea Secondary School',
            'current-data': {
                'aggr': 95104027,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Secondary Schools Grant',
            'current-data': {
                'aggr': 92560000,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Penama Secondary Schools',
            'current-data': {
                'aggr': 48566269,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'SDA Secondary Schools',
            'current-data': {
                'aggr': 44093433,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Secondary Teachers on Scholarship',
            'current-data': {
                'aggr': 33786374,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Church of Malanesia Secondary Schools',
            'current-data': {
                'aggr': 30977987,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Protestant Secondary Schools',
            'current-data': {
                'aggr': 28836998,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Prebyterian Secondary Schools',
            'current-data': {
                'aggr': 25535656,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Church of Christ Secondary Schools',
            'current-data': {
                'aggr': 21021891,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Torba Secondary Schools',
            'current-data': {
                'aggr': 17784494,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Apostolic Secondary Schools',
            'current-data': {
                'aggr': 4826428,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Secondary Teachers Incidentals',
            'current-data': {
                'aggr': 3395000,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'NTM Secondary Schools',
            'current-data': {
                'aggr': 3238918,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'Bahai\'i Secondary Schools',
            'current-data': {
                'aggr': 1774710,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        },
        {
            'name': 'VFF Academy Secondary Schools',
            'current-data': {
                'aggr': 1587510,
                'change': 0
            },
            'level': 'Programme Expenditure',
            'drillable': false
        }
    ],
    'data': {
        '2012': {
            'aggr': 1137105547,
            'change': 0
        },
        '2013': {
            'aggr': 1151654328,
            'change': 0
        },
        '2014': {
            'aggr': 1176690102,
            'change': 0
        }
    },
    'level': 'Departmental Expenditure',
    'name': 'Secondary Schools Division'
};
