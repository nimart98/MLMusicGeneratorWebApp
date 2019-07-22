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

To run the app, simply start the app.js file with node.js

```
node app.js
```

## Authors

* **Lennart Paul**
* **Nicolas Martin**

## Acknowledgments

Thanks to Sigurður [Skúli Sigurgeirsson](https://github.com/Skuldur) for providing the machine learning Model, we used
to train with our dataset.


