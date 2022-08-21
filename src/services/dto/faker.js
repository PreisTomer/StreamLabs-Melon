const sideMenu = {
  actions: {
    addSource: {
      text: 'Add Source',
      value: 'addSource',
      subtext: '',
      backgroundImage: '',
      id: 'add_source_button',
      type: 'default'
    },
    addMedia: {
      text: 'Add media source',
      subtext: 'Screenshare, Camera',
      backgroundImage: '',
      value: 'addMedia',
      id: 'default',
      type: 'default'
    },
    cameraSource: {
      text: '',
      subtext: '',
      backgroundImage: 'screenshot-cam.svg',
      value: 'screen',
      id: 'screen',
      type: 'screen'
    },
    screenShareSource: {
      text: '',
      subtext: '',
      backgroundImage: 'screenshot-share.svg',
      value: 'camera',
      id: 'camera',
      type: 'camera'
    }
  }
};

const addNewMediaModal = {
  title: 'Add a new media source',
  actions: [
    {
      title: 'Screenshare',
      message: 'Share your entire screen, window or a specific Chrome tab',
      value: {
        text: '',
        subtext: '',
        backgroundImage: 'screenshot-cam.svg',
        value: 'screen',
        id: 'screen',
        type: 'screen'
      }
    },
    {
      title: 'Video Feed',
      message: 'Share a feed of your in-built webcam and microphone. If you do not have a webcam, you can use a “virtual” webcam such as Streamlabs Desktop virtual camera',
      value: {
        text: '',
        subtext: '',
        backgroundImage: 'screenshot-share.svg',
        value: 'camera',
        id: 'camera',
        type: 'camera'
      }
    }
  ]
};

const mainContent = {

    viewModes: {
      camera: [
        {
          image: 'webcam-only_full-screen',
          value: 'webcamFull',
          id: 'webcam_full',
        },
        {
          image: 'webcam-only_80-percent',
          value: 'webcam80',
          id: 'webcam_80'
        },
        {
          image: 'webcam-only_60-percent',
          value: 'webcam60',
          id: 'webcam_60'
        }
      ],
      screen: [
        {
          image: 'screenshare-image-only',
          value: 'screenShareOnly',
          id: 'screenshare_only'
        }
      ],
      webcamWithScreenshare: [
        {
          image: 'webcam-33-percent_screenshare-66-percent',
          value: 'webcam33Screenshare66',
          id: 'webcam_33_screenShare66'
        },
        {
          image: 'webcam-screenshare_webcam-25-percent-left-align',
          value: 'webcam25ScreenshareLeftAlign',
          id: 'webcam_25_screenShare_left_align'
        },
        {
          image: 'webcam-screenshare_webcam-25-percent-right-align',
          value: 'webcam25ScreenshareRightAlign',
          id: 'webcam_25_screenShare_right_align'
        }
      ]
    }  
};


const footerButtons =  [
  {
    text: 'Chat',
    value: 'chat',
    id: 'chat_button'
  },

  {
    text: 'Record',
    value: 'record',
    id: 'record_button'
  },

  {
    text: 'Go Live',
    value: 'live',
    id: 'live_button'
  }
]

export default {
  sideMenu,
  addNewMediaModal,
  mainContent,
  footerButtons
};
