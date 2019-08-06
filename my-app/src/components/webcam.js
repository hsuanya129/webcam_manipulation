import React from 'react';
import './../App.css';

class Webcam extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMsg: "",
            buttonLabel: "release stream"
        }

        this.camVideo = React.createRef();
    }

    // to switch on/off video stream
    videoSwitch = () => {
        if (this.stream.active === true) {
            this.endStream();
        } else {
            this.startStream();
        }
    }

    // to end video stream
    endStream = () => {
        this.videoTracks[0].stop();
        this.stream.removeTrack(this.videoTracks[0]);
        this.camVideo.current.srcObject = null;
        this.setState({
            buttonLabel: "create stream"
        });
    }

    // to start a new video stream
    startStream = () => {

        let constraints = {
            audio:false,
            video:{
                width:{min:640,max:1920},
                height:{min:400,max:1080},
                aspectRatio: 1.777777778,
            }
        }

        //it returns a Promise object
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                console.log(stream);
                stream.onremovetrack = function () {
                    console.log('Stream ended');
                };

                this.stream = stream;
                this.videoTracks = stream.getVideoTracks();
                console.log("Using device: "+this.videoTracks[0].label);
                this.camVideo.current.srcObject = stream;
                this.camVideo.current.play();
                this.setState({
                    buttonLabel: "release stream"
                });
            })
            .catch((err) => {
                this.setState({
                    errorMsg: "Error message: " + err.message
                });
            })
    }

    componentDidMount() {
        this.startStream();
    }

    render() {
        return (
            <div>
                {this.state.errorMsg ? (<p> {this.state.errorMsg} </p>) :
                    (
                        <div>
                            <video className="webcam" ref={this.camVideo}></video>
                            <br />
                            <button onClick={this.videoSwitch}>{this.state.buttonLabel}</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Webcam; 