const { number } = require('yargs')
const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add numbers',
    builder:{
        numberA:{
            demandOption:true,
            type:'number',
        },
        numberB:{
            demandOption:true,
            type:'number',
        }
    },
    handler: function (argv) {
        console.log(argv.numberA+argv.numberB)
    }
})
yargs.command({
    command: 'sub',
    describe: 'sub numbers',
    builder:{
        numberA:{
            demandOption:true,
            type:'number',
        },
        numberB:{
            demandOption:true,
            type:'number',
        }
    },
    handler: function (argv) {
        console.log(argv.numberA-argv.numberB)
    }
})
yargs.command({
    command: 'mult',
    describe: 'multiply numbers',
    builder:{
        numberA:{
            demandOption:true,
            type:'number',
        },
        numberB:{
            demandOption:true,
            type:'number',
        }
    },
    handler: function (argv) {
        console.log(argv.numberA*argv.numberB)
    }
})
yargs.command({
    command: 'pow',
    describe: 'powring numbers',
    builder:{
        numberA:{
            demandOption:true,
            type:'number',
        },
        numberB:{
            demandOption:true,
            type:'number',
        }
    },
    handler: function (argv) {
        console.log(Math.pow(argv.numberA,argv.numberB))
    }
})

yargs.parse()