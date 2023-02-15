import {Map} from "react-kakao-maps-sdk";
import React from "react";

function Maps(){
    return(
        <Map
          center={{lat:37.558090961074825, lng:126.99847210567884 }} 
          style ={{width: "500px", height: "500px"}} >

        </Map>
    )
}

export default Maps;
