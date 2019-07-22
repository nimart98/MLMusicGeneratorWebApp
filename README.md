# ML Music Generator - Web App

This web app is capable of generating pieces of music as a WAV audiofile with a machine learning algorithm that was
trained with 20 songs of popular artists.

## Requirements

To get this web app running, you need to install the node.js and python dependencies.

For node.js:
```
npm install
```

For python (with pip):
```
pip install music21
pip install keras
pip install tensorflow
pip install h5py
```

Optionally, if you want to get faster generation, you can install the GPU-version of TensorFlow. This will only
work, if you have a supported graphics card, with the additional software and drivers installed.
```
pip install tensorflow-gpu
```

### Getting Started

To run the app, simply start the app.js file with node.js. 
By default the app is running on port 3000.

```javascript
app.listen(3000);
```
To go to the webpage type "loclahost:3000" into your browser. 
It can take up to one minute to complete the creation of the file. So be patient after clicking on the generate button on the website.


The model generates midi files by running the Python Tensoreflow Model.

```javascript
PythonShell.run('predict.py', options, function (err) {
         if (err) throw err;
         resolve('done');
```

Then these will be converted to wav files using synth-js.

```javascript
let convertToMidi = function () {
    let midiBuffer = fs.readFileSync('Classical-Piano-Composer-master/pytest_output.mid');
    let wavBuffer = synth.midiToWav(midiBuffer).toBuffer();
    fs.writeFileSync('./assets/song.wav', wavBuffer, { encoding: 'binary' });
```

```
node app.js
```

## Authors

* **Lennart Paul**
* **Nicolas Martin**

## Acknowledgments

Thanks to Sigurður [Skúli Sigurgeirsson](https://github.com/Skuldur) for providing the machine learning Model, we used
to train with our dataset.


