(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{32:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a);n(11),n(72);e.default=class extends a.Component{constructor(t){super(t),this.handleClick=()=>{this.setState({index:this.state.index+1})},this.handleJump=()=>{this.props.history.push("/page/list")};let e=t.staticContext;e||(e=window.__ROUTE_DATA__);const{text:n,data:a}=e;this.state={index:0,text:n,data:a}}componentDidMount(){console.log("home page didmount")}render(){return i.a.createElement("div",{className:"home_container"},i.a.createElement("div",null,"name: ",this.state.data&&this.state.data.name),i.a.createElement("button",{onClick:this.handleClick},"click me add one"),i.a.createElement("div",null,"num: ",this.state.index),i.a.createElement("div",null,"text: ",this.state.text),i.a.createElement("button",{onClick:this.handleJump},"click me jump to list page"))}}},72:function(t,e,n){}}]);