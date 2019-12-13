const EVENTS = {
    Men: ['mens100m',
        'mens200m', 'mens400m', 'mens800m', 'mens1500m', 'mens3000m', 'mens5000m', 'mens10000m',
        'mens110mh', 'mens400mh', 'mens3000msc', 'mens2000msc', 'mens5000mrw', 'menshighjump', 'menspolevault',
        'menslongjump', 'menstriplejump', 'mensdiscusthrow', 'menshammerthrow', 'mensshotput', 'mensjavelinthrow', 'decathlon'],
    Women:
        ['womens100m', 'womens200m', 'womens400m', 'womens800m', 'womens1500m', 'womens3000m', 'womens5000m', 'womens10000m',
            'womens100mh', 'womens400mh', 'womens3000msc', 'womens2000msc', 'womens5000mrw', 'womenshighjump', 'womenspolevault',
            'womenslongjump', 'womenstriplejump', 'womensdiscusthrow', 'womenshammerthrow', 'womensshotput', 'womensjavelinthrow',
            'heptathlon']
};

const FIELD_EVENTS = ['decathlon', 'heptathlon',
    'menshighjump', 'menspolevault', 'menslongjump', 'menstriplejump',
    'mensdiscusthrow', 'menshammerthrow', 'mensshotput', 'mensjavelinthrow', 'womenshighjump', 'womenspolevault',
    'womenslongjump', 'womenstriplejump', 'womensdiscusthrow', 'womenshammerthrow', 'womensshotput',
    'womensjavelinthrow',];

const TRACK_EVENTS = ['mens100m', 'mens200m', 'mens400m', 'mens800m', 'mens1500m', 'mens3000m', 'mens5000m', 'mens10000m',
    'mens110mh', 'mens400mh', 'mens3000msc', 'mens2000msc', 'mens5000mrw', 'womens100m', 'womens200m', 'womens400m',
    'womens800m', 'womens1500m', 'womens3000m', 'womens5000m', 'womens10000m', 'womens100mh', 'womens400mh',
    'womens3000msc', 'womens2000msc', 'womens5000mrw'];

exports.events= EVENTS;
exports.field_events = FIELD_EVENTS;
exports.track_events = TRACK_EVENTS;