import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom';


function VideoRoom() {
    let {roomID} = useParams()
    const myMeeting = async (element) => {
        const appID =324501584;
        const serverSecret ="df4551955019d84e381f9c19e0f2e6e0";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Rishabh");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'Copy Link',
                url: `http://localhost:5173/room/${roomID}`,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
          });
    }

  return (
    <div>
        <div ref={myMeeting}/>
    </div>
  )
}

export default VideoRoom