let { PythonShell } = require('python-shell')
let express = require('express');
let path = require('path');
let mime = require('mime');
let fs = require('fs');
let bodyParser = require('body-parser');
const synth = require('synth-js');
redi = 0;

const app = express();

let options = {
    pythonOptions: ['-u'],
    scriptPath: 'Classical-Piano-Composer-master'
};

let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.post('/download', function(req, res){
    var file = __dirname + '/song.wav';
    var filename = path.basename(file);
    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
  });

app.get('/download', function(req, res){
    res.render('download')
});

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/', function (req, res) {
        generateMidi(res);
});

let generateMidi = function (res) {
    let promise = new Promise(function (resolve, reject, err) {
        PythonShell.run('predict.py', options, function (err) {
            if (err) throw err;
            let out = console.log('finished gernerating');
            resolve('done');
        });
    });
    promise.then(() => {
        convertToMidi(res)
        return console.log('finished conversion')
    }).catch((message) => {
        console.log('this is in chatch ' + message)
    });
}

let convertToMidi = function (res) {
    let midiBuffer = fs.readFileSync('Classical-Piano-Composer-master/pytest_output.mid');
    let wavBuffer = synth.midiToWav(midiBuffer).toBuffer();
    fs.writeFileSync('./song.wav', wavBuffer, { encoding: 'binary' });
    res.redirect('/download');
};



app.listen(3000);

