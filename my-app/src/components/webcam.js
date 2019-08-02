import React from 'react';
import './../App.css';

class Webcam extends React.Component{
    constructor(props){
        super(props);
        this.camVideo = React.createRef();
        this.errorMag = React.createRef();
    }

    videoEnded = () =>{

    }

    componentDidMount(){
        var constraint = window.constraints ={
            audio:false,
            video:true
        }

        //it returns a Promise object
        console.log(navigator.mediaDevices.getUserMedia(constraint));

        navigator.mediaDevices.getUserMedia(constraint)
        .then((stream) => {

            console.log(stream);
            var videoTracks = stream.getVideoTracks();
            console.log('Got stream with constraints:', constraint);
            console.log(videoTracks);

            this.camVideo.current.srcObject = stream;
            this.camVideo.current.play();
            console.log(this.camVideo)
        })
        .catch(function(err){
            console.log(err.message);
        })
    }

    render(){
        
        return(
            <div>
                <video ref={this.camVideo} ></video>
                <p ref={this.errorMag}></p>
                <button onClick={this.videoEnded}/>
            </div>
        )
    }
}

export default Webcam; 