(self.webpackChunkcourseproject=self.webpackChunkcourseproject||[]).push([[887],{5989:(e,t,r)=>{var s,a=r(2897).default,l=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,s)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let a of n(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(s=i(t,a))||s.enumerable});return e},h=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>P}),e.exports=(s=y,c(o({},"__esModule",{value:!0}),s));var d=((e,t,r)=>(r=null!=e?l(p(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(4694)),b=r(541),f=r(5373);const m="https://connect.facebook.net/en_US/sdk.js",g="fbAsyncInit";class P extends d.Component{constructor(){super(...arguments),h(this,"callPlayer",b.callPlayer),h(this,"playerID",this.props.config.playerId||"".concat("facebook-player-").concat((0,b.randomString)())),h(this,"mute",(()=>{this.callPlayer("mute")})),h(this,"unmute",(()=>{this.callPlayer("unmute")}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){t?(0,b.getSDK)(m,"FB",g).then((e=>e.XFBML.parse())):(0,b.getSDK)(m,"FB",g).then((e=>{e.init({appId:this.props.config.appId,xfbml:!0,version:this.props.config.version}),e.Event.subscribe("xfbml.render",(e=>{this.props.onLoaded()})),e.Event.subscribe("xfbml.ready",(e=>{"video"===e.type&&e.id===this.playerID&&(this.player=e.instance,this.player.subscribe("startedPlaying",this.props.onPlay),this.player.subscribe("paused",this.props.onPause),this.player.subscribe("finishedPlaying",this.props.onEnded),this.player.subscribe("startedBuffering",this.props.onBuffer),this.player.subscribe("finishedBuffering",this.props.onBufferEnd),this.player.subscribe("error",this.props.onError),this.props.muted?this.callPlayer("mute"):this.callPlayer("unmute"),this.props.onReady(),document.getElementById(this.playerID).querySelector("iframe").style.visibility="visible")}))}))}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentPosition")}getSecondsLoaded(){return null}render(){const{attributes:e}=this.props.config;return d.default.createElement("div",a({style:{width:"100%",height:"100%"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false"},e))}}h(P,"displayName","Facebook"),h(P,"canPlay",f.canPlay.facebook),h(P,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerFacebook.1ae5cb21.chunk.js.map