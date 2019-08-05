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
        if (window.stream.active === true) {
            this.endStream();
        } else {
            this.startStream();
        }
    }

    // to end video stream
    endStream = () => {
        window.videoTracks[0].stop();
        window.stream.removeTrack(window.videoTracks[0]);
        this.camVideo.current.srcObject = null;
        this.setState({
            buttonLabel: "create stream"
        });
    }

    // to start a new video stream
    startStream = () => {
        //it returns a Promise object
        navigator.mediaDevices.getUserMedia({ audio: false, video: true })
            .then((stream) => {
                console.log(stream);
                stream.onremovetrack = function () {
                    console.log('Stream ended');
                };

                window.stream = stream;
                window.videoTracks = stream.getVideoTracks();
                console.log(window.videoTracks);
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
                            <video ref={this.camVideo}></video>
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