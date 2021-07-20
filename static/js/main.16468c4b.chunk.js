(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(30),i=n.n(a),c=n(13),r=n(9),o=n(10),b=n(12),l=n(11),u=(n(36),n(4)),j=n(14),h=n.n(j),m=n(0),d=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).onChangePersonName=s.onChangePersonName.bind(Object(u.a)(s)),s.onChangeBusinessName=s.onChangeBusinessName.bind(Object(u.a)(s)),s.onChangeGstNumber=s.onChangeGstNumber.bind(Object(u.a)(s)),s.onSubmit=s.onSubmit.bind(Object(u.a)(s)),s.state={person_name:"",business_name:"",business_gst_number:""},s}return Object(o.a)(n,[{key:"onChangePersonName",value:function(e){this.setState({person_name:e.target.value})}},{key:"onChangeBusinessName",value:function(e){this.setState({business_name:e.target.value})}},{key:"onChangeGstNumber",value:function(e){this.setState({business_gst_number:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.person_name,job:this.state.business_name};h.a.post("https://reqres.in/api/users",t).then((function(e){return console.log(e.data)})),this.setState({person_name:"",business_name:"",business_gst_number:""})}},{key:"render",value:function(){return Object(m.jsxs)("div",{style:{marginTop:10},children:[Object(m.jsx)("h3",{children:"Add New Business"}),Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Person Name: "}),Object(m.jsx)("input",{type:"text",className:"form-control",value:this.state.person_name,onChange:this.onChangePersonName})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Business Name: "}),Object(m.jsx)("input",{type:"text",className:"form-control",value:this.state.business_name,onChange:this.onChangeBusinessName})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"GST Number: "}),Object(m.jsx)("input",{type:"text",className:"form-control",value:this.state.business_gst_number,onChange:this.onChangeGstNumber})]}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"submit",value:"Register Business",className:"btn btn-primary"})})]})]})}}]),n}(s.Component),p=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).onChangePersonName=s.onChangePersonName.bind(Object(u.a)(s)),s.onChangeBusinessName=s.onChangeBusinessName.bind(Object(u.a)(s)),s.onChangeGstNumber=s.onChangeGstNumber.bind(Object(u.a)(s)),s.onSubmit=s.onSubmit.bind(Object(u.a)(s)),s.state={person_name:"",business_name:"",business_gst_number:""},s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://reqres.in/api/users/"+this.props.match.params.id).then((function(t){e.setState({person_name:t.data.data.first_name,business_name:t.data.data.last_name,business_gst_number:t.data.data.email})})).catch((function(e){console.log(e)}))}},{key:"onChangePersonName",value:function(e){this.setState({person_name:e.target.value})}},{key:"onChangeBusinessName",value:function(e){this.setState({business_name:e.target.value})}},{key:"onChangeGstNumber",value:function(e){this.setState({business_gst_number:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.person_name,job:this.state.business_name};h.a.put("https://reqres.in/api/users/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),this.props.history.push("/index")}},{key:"render",value:function(){return Object(m.jsxs)("div",{style:{marginTop:10},children:[Object(m.jsx)("h3",{align:"center",children:"Update Business"}),Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Person Name: "}),Object(m.jsx)("input",{type:"text",className:"form-control",value:this.state.person_name,onChange:this.onChangePersonName})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Business Name: "}),Object(m.jsx)("input",{type:"text",className:"form-control",value:this.state.business_name,onChange:this.onChangeBusinessName})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"GST Number: "}),Object(m.jsx)("input",{type:"text",className:"form-control",value:this.state.business_gst_number,onChange:this.onChangeGstNumber})]}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"submit",value:"Update Business",className:"btn btn-primary"})})]})]})}}]),n}(s.Component),O=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).delete=s.delete.bind(Object(u.a)(s)),s}return Object(o.a)(n,[{key:"delete",value:function(){h.a.delete("https://reqres.in/api/users/"+this.props.obj.id).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:this.props.obj.first_name}),Object(m.jsx)("td",{children:this.props.obj.last_name}),Object(m.jsx)("td",{children:this.props.obj.email}),Object(m.jsx)("td",{children:Object(m.jsx)(c.b,{to:"/edit/"+this.props.obj.id,className:"btn btn-primary",children:"Edit"})}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{onClick:this.delete,className:"btn btn-danger",children:"Delete"})})]})}}]),n}(s.Component),x=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={business:[]},s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://reqres.in/api/users?page=2").then((function(t){e.setState({business:t.data.data}),console.log("response.data.data",t.data.data)})).catch((function(e){console.log(e)}))}},{key:"tabRow",value:function(){return this.state.business.map((function(e,t){return Object(m.jsx)(O,{obj:e},e.id)}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{align:"center",children:"Business List"}),Object(m.jsxs)("table",{className:"table table-striped",style:{marginTop:20},children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"First Name"}),Object(m.jsx)("th",{children:"Last Name"}),Object(m.jsx)("th",{children:"Email"}),Object(m.jsx)("th",{colSpan:"2",children:"Action"})]})}),Object(m.jsx)("tbody",{children:this.tabRow()})]})]})}}]),n}(s.Component),g=(n(61),n(2)),v=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)(c.a,{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(m.jsx)(c.b,{to:"/",className:"navbar-brand",children:"React CRUD Example"}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(m.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(c.b,{to:"/",className:"nav-link",children:"Home"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(c.b,{to:"/create",className:"nav-link",children:"Create"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(c.b,{to:"/index",className:"nav-link",children:"Index"})})]})})]})," ",Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:"Welcome to React CRUD Tutorial"})," ",Object(m.jsx)("br",{}),Object(m.jsxs)(g.c,{children:[Object(m.jsx)(g.a,{exact:!0,path:"/create",component:d}),Object(m.jsx)(g.a,{path:"/edit/:id",component:p}),Object(m.jsx)(g.a,{path:"/index",component:x})]})]})})}}]),n}(s.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};i.a.render(Object(m.jsx)(c.a,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),N()}},[[62,1,2]]]);
//# sourceMappingURL=main.16468c4b.chunk.js.map