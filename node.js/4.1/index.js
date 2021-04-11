const yargs = require('yargs')

yargs.command({
    command: 'calc',
    describe: 'calculat things',
    builder: {
        add: {
            type: 'array',
        },
        sub: {
            type: 'array',
        },
        pow: {
            type: 'array',
        },
        mult: {
            type: 'array',
        },
    },
    handler: function (argv) {
            argv.add ? console.log(argv.add[0] + argv.add[1]) :
            argv.sub ? console.log(argv.sub[0] - argv.sub[1]) :
            argv.mult ? console.log(argv.mult[0] * argv.mult[1]) :
            argv.pow ? console.log(Math.pow(argv.pow[0], argv.pow[1])) : null
    }
})

yargs.parse()