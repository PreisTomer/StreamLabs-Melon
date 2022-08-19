const sideMenu={
    actions:{
        addSource:{
            text: 'Add Source',
            value: 'addSource',
            subtext: '',
            id: 'add_source_button'

        },
        addMedia:{
            text: 'Add media source',
            subtext: 'Screenshare, Camera',
            value: 'addMedia',
            id: ''
        },
        toggleButtons:{
            show:{
                text: 'Show on stream',
                value: 'show',
                id: ''
            },
            hide:{
                text: 'Hide on stream',
                value: 'hide',
                id: ''
            }
        }
    }
}


const addNewMediaModal = {
    title: 'Add a new media source',
    actions: [
        {
            title: 'ScreenShare',
            message: 'Share your entire screen, window or a specific Chrome tab'
        },
        {
            title: 'Video Feed',
            message: 'Share a feed of your in-built webcam and microphone. If you do not have a webcam, you can use a “virtual” webcam such as Streamlabs Desktop virtual camera'
        }
    ]
}

const mainContent = {
    actions:{
        viewModes:{
        webcamOnly: [
            {
                image: 'webcam-only_full-screen',
                value: 'webcamFull',
                id: 'webcam_full'
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
        screenShareOnly:           
        [
            {
                image: 'screenshare-image-only',
                value: 'screenShareOnly',
                id: 'screenshare_only'
            }
        ],
        webcamWithScreenshare:[
   
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
        
    },
        footerButtons:[
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
            },
        ]
    }
}

export default {
    sideMenu,
    addNewMediaModal,
    mainContent
}