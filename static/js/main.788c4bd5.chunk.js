(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(15),n(1)),s=n(2),l=n(4),u=n(3),m=n(5),d=(n(7),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).videoSwitch=function(){!0===window.stream.active?n.endStream():n.startStream()},n.endStream=function(){window.stream.removeTrack(window.videoTracks[0]),n.camVideo.current.srcObject=window.stream,n.setState({buttonLabel:"create stream"})},n.startStream=function(){navigator.mediaDevices.getUserMedia({audio:!1,video:!0}).then(function(e){console.log(e),e.onremovetrack=function(){console.log("Stream ended")},window.stream=e,window.videoTracks=e.getVideoTracks(),console.log(window.videoTracks),n.camVideo.current.srcObject=e,n.camVideo.current.play(),n.setState({buttonLabel:"release stream"})}).catch(function(e){n.setState({errorMsg:"Error message: "+e.message}),console.log(e.message)})},n.state={errorMsg:"",buttonLabel:"release stream"},n.camVideo=r.a.createRef(),n.errorMag=r.a.createRef(),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.startStream()}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.errorMsg?r.a.createElement("p",null,this.state.errorMsg):r.a.createElement("div",null,r.a.createElement("video",{ref:this.camVideo}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.videoSwitch},this.state.buttonLabel)))}}]),t}(r.a.Component)),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.788c4bd5.chunk.js.map