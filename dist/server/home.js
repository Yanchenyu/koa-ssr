exports.ids=[0],exports.modules={5:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a);n(9);e.default=class extends a.Component{constructor(t){super(t),this.handleClick=()=>{this.setState({index:this.state.index+1})},this.handleJump=()=>{this.props.history.push("/page/list")};let e=t.staticContext;e||(e=window.__ROUTE_DATA__);const{text:n,data:a}=e;this.state={index:0,text:n,data:a}}componentDidMount(){console.log("home page didmount")}render(){return s.a.createElement("div",{className:"home_container"},s.a.createElement("div",null,"name: ",this.state.data&&this.state.data.name),s.a.createElement("button",{onClick:this.handleClick},"click me add one"),s.a.createElement("div",null,"num: ",this.state.index),s.a.createElement("div",null,"text: ",this.state.text),s.a.createElement("button",{onClick:this.handleJump},"click me jump to list page"))}}},9:function(t,e){}};