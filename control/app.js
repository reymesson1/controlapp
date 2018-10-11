//****************************************************************
//Santiago Auto Import
//****************************************************************

var Schedule = require('./models/schedule');


setTimeout(async() => {
    var sch = await Schedule.findOne({"name":"bachfile"});
    console.log(sch.start)
    var CronJob = require('cron').CronJob;
    new CronJob('0 '+sch.start+' * * * *', function() {

        cleanLog("batchfile")

        let spawn = require('child_process').spawn,
        ls = spawn('cmd.exe', ['/c', 'batchfile.bat']);

        ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
        });

        ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
        });

        ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
        });

    }, null, true, 'America/Los_Angeles');
}, 1000);

setTimeout(async() => {
        var sch = await Schedule.findOne({"name":"bachfile1"});
        console.log(sch.start)
        var CronJob = require('cron').CronJob;
        new CronJob('0 '+sch.start+' * * * *', function() {

        cleanLog("batchfile1")
        
        let spawn = require('child_process').spawn,
        ls = spawn('cmd.exe', ['/c', 'batchfile1.bat']);

        ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
        });

        ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
        });

        ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
        });

    }, null, true, 'America/Los_Angeles');
}, 1000);


//****************************************************************
//Noor Auto Import
//****************************************************************

setTimeout(async() => {
    var sch = await Schedule.findOne({"name":"bachfile2"});
    console.log(sch.start)
    var CronJob = require('cron').CronJob;
    new CronJob('0 '+sch.start+' * * * *', function() {

        cleanLog("batchfile2")

        let spawn = require('child_process').spawn,
        ls = spawn('cmd.exe', ['/c', 'batchfile2.bat']);

        ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
        });

        ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
        });

        ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
        });

    }, null, true, 'America/Los_Angeles');
}, 1000);

setTimeout(async() => {
    var sch = await Schedule.findOne({"name":"bachfile3"});
    console.log(sch.start)
    var CronJob = require('cron').CronJob;
    new CronJob('0 '+sch.start+' * * * *', function() {

        cleanLog("batchfile3")

        let spawn = require('child_process').spawn,
        ls = spawn('cmd.exe', ['/c', 'batchfile3.bat']);

        ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
        });

        ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
        });

        ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
        });

    }, null, true, 'America/Los_Angeles');

}, 1000);


//****************************************************************
//Inmobiliaria Messon - Altagracia Pina
//****************************************************************
setTimeout(async() => {
        var sch = await Schedule.findOne({"name":"bachfile4"});
        console.log(sch.start)
        var CronJob = require('cron').CronJob;
        new CronJob('0 '+sch.start+' * * * *', function() {

        cleanLog("batchfile4")

        let spawn = require('child_process').spawn,
        ls = spawn('cmd.exe', ['/c', 'batchfile4.bat']);

        ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
        });

        ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
        });

        ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
        });

    }, null, true, 'America/Los_Angeles');
}, 1000);

setTimeout(async() => {
        var sch = await Schedule.findOne({"name":"bachfile5"});
        console.log(sch.start)
        var CronJob = require('cron').CronJob;
        new CronJob('0 '+sch.start+' * * * *', function() {

        cleanLog("batchfile5")

        let spawn = require('child_process').spawn,
        ls = spawn('cmd.exe', ['/c', 'batchfile5.bat']);

        ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
        });

        ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
        });

        ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
        });


    }, null, true, 'America/Los_Angeles');
}, 1000);

//****************************************************************
//Inmobiliaria Messon - Jarlin Arias
//****************************************************************
setTimeout(async() => {
        var sch = await Schedule.findOne({"name":"bachfile6"});
        console.log(sch.start)
        var CronJob = require('cron').CronJob;
        new CronJob('0 '+sch.start+' * * * *', function() {

        cleanLog("batchfile6")


        let spawn = require('child_process').spawn,
        ls = spawn('cmd.exe', ['/c', 'batchfile6.bat']);

        ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
        });

        ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
        });

        ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
        });

    }, null, true, 'America/Los_Angeles');
}, 1000);


setTimeout(async() => {
    var sch = await Schedule.findOne({"name":"bachfile7"});
    console.log(sch.start)
    var CronJob = require('cron').CronJob;
    new CronJob('0 '+sch.start+' * * * *', function() {

        cleanLog("batchfile7")

        let spawn = require('child_process').spawn,
        ls = spawn('cmd.exe', ['/c', 'batchfile7.bat']);

        ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
        });

        ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
        });

        ls.on('exit', function (code) {
        console.log('child process exited with code ' + code);
        });

    }, null, true, 'America/Los_Angeles');
}, 1000);


var mongoose = require('mongoose');
var activityObj = {};
var Activity = require('./models/activity.js');

function cleanLog(str){

    var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, '../../.pm2/logs/app-out.log');

    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            if(findWord("NoSuchElementError", data)){
                var newActivity = new Activity({
                    name: data.substring(0,10),
                    lastRun : Date.now(),
                    error: true
                });
            }else if(findWord("Element not found", data)){
                var newActivity = new Activity({
                    name: data.substring(0,10),
                    lastRun : Date.now(),
                    error: true
                });
            }else{
                var newActivity = new Activity({
                    name: data.substring(0,10),
                    lastRun : Date.now(),
                    error: false
                });
            }

            newActivity.save( function( err ){
                if(!err){
                console.log('Activity saved!');
                }
            });
            
        } else {
            console.log(err);
        }
    });


    var fs = require('fs');
    path = require('path'),    
    filePath = path.join(__dirname, '../../.pm2/logs/app-out.log');
    fs.writeFile(filePath, str+"\n", function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}


function findWord(word, str) {

    return RegExp('\\b'+ word +'\\b').test(str)
}

mongoose.connect('mongodb://localhost:27017/project2',(err)=>{
  if(!err){
      console.log('Connected to mongo Database');
  }
})