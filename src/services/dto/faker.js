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