const config = {
    commitTypes: [
        {
            type : 'feat',
            label: 'Feature'
        },
        {
            type : 'fix',
            label: 'Fix'
        },
        {
            type : 'docs',
            label: 'Documentation'
        },
        {
            type : 'style',
            label: 'Style'
        },
        {
            type : 'refactor',
            label: 'Refactor'
        },
        {
            type : 'perf',
            label: 'Performance'
        },
        {
            type : 'test',
            label: 'Test'
        },
        {
            type : 'chore',
            label: ''
        },

    ]
}

module.exports = {
    configs: config,
}