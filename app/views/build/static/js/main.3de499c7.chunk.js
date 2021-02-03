(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{39:function(t,e,i){},63:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i(1),c=i(30),s=i.n(c),r=i(13),l=i(9),o=i(10),u=i(12),d=i(11),h=i(2),b=(i(38),i(39),i(3)),j=i(31),p=i.n(j).a.create({baseURL:"http://localhost:7000/api",headers:{"Content-type":"application/json"}}),v=new(function(){function t(){Object(l.a)(this,t)}return Object(o.a)(t,[{key:"getAll",value:function(){return p.get("/tutorials")}},{key:"get",value:function(t){return p.get("/tutorials/".concat(t))}},{key:"create",value:function(t){return p.post("/tutorials",t)}},{key:"update",value:function(t,e){return p.put("/tutorials/".concat(t),e)}},{key:"delete",value:function(t){return p.delete("/tutorials/".concat(t))}},{key:"deleteAll",value:function(){return p.delete("/tutorials")}},{key:"findByTitle",value:function(t){return p.get("/tutorials?title=".concat(t))}}]),t}()),O=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).onChangeTitle=n.onChangeTitle.bind(Object(b.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(b.a)(n)),n.saveTutorial=n.saveTutorial.bind(Object(b.a)(n)),n.newTutorial=n.newTutorial.bind(Object(b.a)(n)),n.state={id:null,title:"",description:"",published:!1,submitted:!1},n}return Object(o.a)(i,[{key:"onChangeTitle",value:function(t){this.setState({title:t.target.value})}},{key:"onChangeDescription",value:function(t){this.setState({description:t.target.value})}},{key:"saveTutorial",value:function(){var t=this,e={title:this.state.title,description:this.state.description};v.create(e).then((function(e){t.setState({id:e.data.id,title:e.data.title,description:e.data.description,published:e.data.published,submitted:!0}),console.log(e.data)})).catch((function(t){console.log(t)}))}},{key:"newTutorial",value:function(){this.setState({id:null,title:"",description:"",published:!1,submitted:!1})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"submit-form",children:this.state.submitted?Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"You submitted successfully!"}),Object(n.jsx)("button",{className:"btn btn-success",onClick:this.newTutorial,children:"Add"})]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"title",children:"Title"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"title",required:!0,value:this.state.title,onChange:this.onChangeTitle,name:"title"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"description",children:"Description"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"description",required:!0,value:this.state.description,onChange:this.onChangeDescription,name:"description"})]}),Object(n.jsx)("button",{onClick:this.saveTutorial,className:"btn btn-success",children:"Submit"})]})})}}]),i}(a.Component),m=i(15),g=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).onChangeTitle=n.onChangeTitle.bind(Object(b.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(b.a)(n)),n.getTutorial=n.getTutorial.bind(Object(b.a)(n)),n.updatePublished=n.updatePublished.bind(Object(b.a)(n)),n.updateTutorial=n.updateTutorial.bind(Object(b.a)(n)),n.deleteTutorial=n.deleteTutorial.bind(Object(b.a)(n)),n.state={currentTutorial:{id:null,title:"",description:"",published:!1},message:""},n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.getTutorial(this.props.match.params.id)}},{key:"onChangeTitle",value:function(t){var e=t.target.value;this.setState((function(t){return{currentTutorial:Object(m.a)(Object(m.a)({},t.currentTutorial),{},{title:e})}}))}},{key:"onChangeDescription",value:function(t){var e=t.target.value;this.setState((function(t){return{currentTutorial:Object(m.a)(Object(m.a)({},t.currentTutorial),{},{description:e})}}))}},{key:"getTutorial",value:function(t){var e=this;v.get(t).then((function(t){e.setState({currentTutorial:t.data}),console.log(t.data)})).catch((function(t){console.log(t)}))}},{key:"updatePublished",value:function(t){var e=this,i={id:this.state.currentTutorial.id,title:this.state.currentTutorial.title,description:this.state.currentTutorial.description,published:t};v.update(this.state.currentTutorial.id,i).then((function(i){e.setState((function(e){return{currentTutorial:Object(m.a)(Object(m.a)({},e.currentTutorial),{},{published:t})}})),console.log(i.data)})).catch((function(t){console.log(t)}))}},{key:"updateTutorial",value:function(){var t=this;v.update(this.state.currentTutorial.id,this.state.currentTutorial).then((function(e){console.log(e.data),t.setState({message:"The tutorial was updated successfully!"})})).catch((function(t){console.log(t)}))}},{key:"deleteTutorial",value:function(){var t=this;v.delete(this.state.currentTutorial.id).then((function(e){console.log(e.data),t.props.history.push("/tutorials")})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this,e=this.state.currentTutorial;return Object(n.jsx)("div",{children:e?Object(n.jsxs)("div",{className:"edit-form",children:[Object(n.jsx)("h4",{children:"Tutorial"}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"title",children:"Title"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"title",value:e.title,onChange:this.onChangeTitle})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"description",children:"Description"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"description",value:e.description,onChange:this.onChangeDescription})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Status:"})}),e.published?"Published":"Pending"]})]}),e.published?Object(n.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return t.updatePublished(!1)},children:"UnPublish"}):Object(n.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return t.updatePublished(!0)},children:"Publish"}),Object(n.jsx)("button",{className:"badge badge-danger mr-2",onClick:this.deleteTutorial,children:"Delete"}),Object(n.jsx)("button",{type:"submit",className:"badge badge-success",onClick:this.updateTutorial,children:"Update"}),Object(n.jsx)("p",{children:this.state.message})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"Please click on a Tutorial..."})]})})}}]),i}(a.Component),x=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).onChangeSearchTitle=n.onChangeSearchTitle.bind(Object(b.a)(n)),n.retrieveTutorials=n.retrieveTutorials.bind(Object(b.a)(n)),n.refreshList=n.refreshList.bind(Object(b.a)(n)),n.setActiveTutorial=n.setActiveTutorial.bind(Object(b.a)(n)),n.removeAllTutorials=n.removeAllTutorials.bind(Object(b.a)(n)),n.searchTitle=n.searchTitle.bind(Object(b.a)(n)),n.state={tutorials:[],currentTutorial:null,currentIndex:-1,searchTitle:""},n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.retrieveTutorials()}},{key:"onChangeSearchTitle",value:function(t){var e=t.target.value;this.setState({searchTitle:e})}},{key:"retrieveTutorials",value:function(){var t=this;v.getAll().then((function(e){t.setState({tutorials:e.data}),console.log(e.data)})).catch((function(t){console.log(t)}))}},{key:"refreshList",value:function(){this.retrieveTutorials(),this.setState({currentTutorial:null,currentIndex:-1})}},{key:"setActiveTutorial",value:function(t,e){this.setState({currentTutorial:t,currentIndex:e})}},{key:"removeAllTutorials",value:function(){var t=this;v.deleteAll().then((function(e){console.log(e.data),t.refreshList()})).catch((function(t){console.log(t)}))}},{key:"searchTitle",value:function(){var t=this;v.findByTitle(this.state.searchTitle).then((function(e){t.setState({tutorials:e.data}),console.log(e.data)})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this,e=this.state,i=e.searchTitle,a=e.tutorials,c=e.currentTutorial,s=e.currentIndex;return Object(n.jsxs)("div",{className:"list row",children:[Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by title",value:i,onChange:this.onChangeSearchTitle}),Object(n.jsx)("div",{className:"input-group-append",children:Object(n.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.searchTitle,children:"Search"})})]})}),Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("h4",{children:"Tutorials List"}),Object(n.jsx)("ul",{className:"list-group",children:a&&a.map((function(e,i){return Object(n.jsx)("li",{className:"list-group-item "+(i===s?"active":""),onClick:function(){return t.setActiveTutorial(e,i)},children:e.title},i)}))}),Object(n.jsx)("button",{className:"m-3 btn btn-sm btn-danger",onClick:this.removeAllTutorials,children:"Remove All"})]}),Object(n.jsx)("div",{className:"col-md-6",children:c?Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Tutorial"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Title:"})})," ",c.title]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Description:"})})," ",c.description]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("strong",{children:"Status:"})})," ",c.published?"Published":"Pending"]}),Object(n.jsx)(r.b,{to:"/tutorials/"+c.id,className:"badge badge-warning",children:"Edit"})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"Please click on a Tutorial..."})]})})]})}}]),i}(a.Component),f=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(l.a)(this,i),e.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(n.jsx)("a",{href:"/tutorials",className:"navbar-brand",children:"bezKoder"}),Object(n.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(r.b,{to:"/tutorials",className:"nav-link",children:"Tutorials"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(r.b,{to:"/add",className:"nav-link",children:"Add"})})]})]}),Object(n.jsx)("div",{className:"container mt-3",children:Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{exact:!0,path:["/","/tutorials"],component:x}),Object(n.jsx)(h.a,{exact:!0,path:"/add",component:O}),Object(n.jsx)(h.a,{path:"/tutorials/:id",component:g})]})})]})}}]),i}(a.Component);s.a.render(Object(n.jsx)(r.a,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.3de499c7.chunk.js.map