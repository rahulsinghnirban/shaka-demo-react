const manifestUri =
    'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

// import func from './skipButton.js';

// document.getElementById('shaka-text-container').style.color='red'

async function init() {
  // When using the UI, the player is made automatically by the UI object.
  const video = document.getElementById('video');
  const ui = video['ui'];
  const controls = ui.getControls();
  const player = controls.getPlayer();
  const btn = document.getElementById('btn');
  let hideBar = true;
<<<<<<< HEAD
  const config={
    'seekBarColors': {
      base: '#185adb',
      buffered: 'rgba(255, 255, 255, 0.54)',
      played: 'rgb(255, 255, 255,0.5)',
      adBreaks: 'rgb(255, 204, 0)'
    }
  }
  ui.configure(config);
=======
  const colors = document.getElementById('colors');
  const textContainer = document.getElementsByClassName('shaka-text-container');
  
  console.log(textContainer)



  colors.addEventListener('change', ()=>{
    // console.log(colors.value)
    textContainer[0].style.color = `${colors.value}`
  })
>>>>>>> cfba31498194b9ee97899825b18f2eb929d0f29a

  // const skip = new (func())();


  btn.addEventListener('click', ()=>{
    const config = {
      addSeekBar: hideBar ? false : true,
      
    };
    hideBar = !hideBar
    ui.configure(config);  
  })

  
  // Attach player and ui to the window to make it easy to access in the JS console.
  window.player = player;
  window.ui = ui;

  // Listen for error events.
  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);

  // Try to load a manifest.
  // This is an asynchronous process.
  try {
    await player.load(manifestUri);
    // This runs if the asynchronous load is successful.
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}

function onPlayerErrorEvent(errorEvent) {
  // Extract the shaka.util.Error object from the event.
  onPlayerError(event.detail);
}

function onPlayerError(error) {
  // Handle player error
  console.error('Error code', error.code, 'object', error);
}

function onUIErrorEvent(errorEvent) {
  // Extract the shaka.util.Error object from the event.
  onPlayerError(event.detail);
}

function initFailed(errorEvent) {
  // Handle the failure to load; errorEvent.detail.reasonCode has a
  // shaka.ui.FailReasonCode describing why.
  console.error('Unable to load the UI library!');
}

// Listen to the custom shaka-ui-loaded event, to wait until the UI is loaded.
document.addEventListener('shaka-ui-loaded', init);
// Listen to the custom shaka-ui-load-failed event, in case Shaka Player fails
// to load (e.g. due to lack of browser support).
document.addEventListener('shaka-ui-load-failed', initFailed);
