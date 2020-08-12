(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{wFkS:function(t,i,e){"use strict";e.r(i),e.d(i,"VisitorsListPageModule",(function(){return O}));var c=e("SVse"),s=e("s7LF"),n=e("sZkV"),o=e("iInd"),a=e("pLZG"),r=e("lJxs"),l=e("8Y7J"),b=e("9Ku7"),u=e("apZm"),p=e("ALmS"),d=e("eueu"),h=e("nbgS");const _=p.gql`
  subscription PlaceVisitors(
    $placeUUIDEquals: uuid! = "875b4319-5b1c-44ef-9950-bc6004c4f77a"
    $checkedInGreaterThan: timestamptz! = "now()"
  ) {
    place(where: { place_uuid: { _eq: $placeUUIDEquals } }) {
      visits_aggregate(where: { place_uuid: { _eq: $placeUUIDEquals }, checked_in_at: { _gte: $checkedInGreaterThan } }) {
        aggregate {
          count(columns: visitor_uuid)
        }
      }
      visits(
        order_by: { checked_in_at: desc_nulls_first, checked_out_at: desc_nulls_first }
        limit: 300
        where: { place_uuid: { _eq: $placeUUIDEquals }, checked_in_at: { _gte: $checkedInGreaterThan } }
      ) {
        checked_in_at
        checked_out_at
        visitor {
          visitor_uuid
          visitor_first_name
          visitor_last_name
          visitor_phone
          visitor_email
        }
      }
    }
  }
`;let v=(()=>{class t{constructor(t){this.apollo=t}getVisitorsByPlaceUUID(t,i=Object(d.d)()){return this.apollo.subscribe({query:_,variables:{placeUUIDEquals:t,checkedInGreaterThan:i}})}}return t.\u0275fac=function(i){return new(i||t)(l.Rb(h.b))},t.\u0275prov=l.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function g(t,i){if(1&t&&(l.Lb(0),l.Jb(1,"ion-icon",3),l.nc(2),l.Kb()),2&t){const t=i.$implicit;l.yb(2),l.pc(" ",t.visits_aggregate.aggregate.count," visitors ")}}function k(t,i){if(1&t&&(l.Lb(0),l.lc(1,g,3,1,"ng-container",1),l.Yb(2,"async"),l.Kb()),2&t){const t=l.Xb(2);l.yb(1),l.dc("ngForOf",l.Zb(2,1,t.place))}}function f(t,i){if(1&t&&(l.Nb(0,"ion-list-header"),l.lc(1,k,3,3,"ng-container",0),l.Yb(2,"async"),l.Mb()),2&t){const t=l.Xb();l.yb(1),l.dc("ngIf",null!==l.Zb(2,1,t.place))}}function m(t,i){if(1&t){const t=l.Ob();l.Nb(0,"ion-item-option",8),l.Vb("click",(function(i){l.ic(t);const e=l.Xb().$implicit;return l.Xb().clickCheckOut(i,e.visitor.visitor_uuid,e.checked_in_at)})),l.nc(1," Check out "),l.Mb()}}function I(t,i){if(1&t&&(l.Nb(0,"ion-item-sliding"),l.Nb(1,"ion-item-options"),l.lc(2,m,2,0,"ion-item-option",4),l.Mb(),l.Nb(3,"ion-item",5),l.Nb(4,"ion-label",6),l.Nb(5,"span",7),l.nc(6),l.Yb(7,"date"),l.Yb(8,"date"),l.Mb(),l.Nb(9,"h2"),l.nc(10),l.Mb(),l.Nb(11,"h3"),l.nc(12),l.Mb(),l.Mb(),l.Mb(),l.Mb()),2&t){const t=i.$implicit;l.yb(2),l.dc("ngIf",!t.checked_out_at),l.yb(2),l.ec("color",t.checked_out_at?"success":""),l.yb(2),l.qc(" ",l.ac(7,8,t.checked_in_at,"EEEE HH:mm"),"\u2013",l.ac(8,11,t.checked_out_at,"HH:mm")," "),l.yb(4),l.qc(" ",t.visitor.visitor_first_name," ",t.visitor.visitor_last_name," "),l.yb(2),l.qc(" ",t.visitor.visitor_phone," ",t.visitor.visitor_email," ")}}const y=[{path:"",component:(()=>{class t{constructor(t,i,e,c){this.activatedRoute=t,this.authenticationService=i,this.checkInOutService=e,this.placeAdminService=c,this.placeUUID=t.snapshot.paramMap.get("placeUUID"),console.log("VisitorsListPage -> constructor -> this.placeUUID",this.placeUUID);const s=c.getVisitorsByPlaceUUID(this.placeUUID);this.placeVisitorsResult=s;const n=s.pipe(Object(a.a)(t=>{var i,e;return void 0!==(null===(e=null===(i=t.data)||void 0===i?void 0:i.place)||void 0===e?void 0:e[0])}),Object(r.a)(t=>t.data.place));this.place=n;const o=n.pipe(Object(r.a)(t=>t[0].visits));this.visits=o}ngOnInit(){}clickCheckOut(t,i,e){if(console.log("clickCheckOut -> event",t),void 0===i||void 0===e)return;const c=this.checkInOutService.updateCheckOutVisitor(this.placeUUID,i,e);console.log("VisitorsListPage -> clickCheckOut -> checkedOutObs",c),c.subscribe(({data:t,errors:i,context:e,extensions:c})=>{var s;console.log("clickCheckOut -> data",t,i,e,c);const n=new Date(null===(s=null==t?void 0:t.update_visit_by_pk)||void 0===s?void 0:s.checked_out_at);console.log("VisitorsListPage -> clickCheckOut -> checkedOutDateTime",n)})}}return t.\u0275fac=function(i){return new(i||t)(l.Ib(o.a),l.Ib(b.a),l.Ib(u.a),l.Ib(v))},t.\u0275cmp=l.Cb({type:t,selectors:[["app-visitors-list"]],decls:17,vars:19,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["color","light"],["name","people"],["color","success","button","",3,"click",4,"ngIf"],["button",""],[3,"color"],[2,"float","right"],["color","success","button","",3,"click"]],template:function(t,i){1&t&&(l.Nb(0,"ion-header"),l.Nb(1,"ion-toolbar"),l.Nb(2,"ion-title"),l.nc(3,"List COVIDSafe check ins \u2705 | place visitors"),l.Mb(),l.Mb(),l.Mb(),l.Nb(4,"ion-content"),l.Nb(5,"ion-list"),l.lc(6,f,3,3,"ion-list-header",0),l.lc(7,I,13,14,"ion-item-sliding",1),l.Yb(8,"async"),l.Mb(),l.Nb(9,"ion-text",2),l.nc(10),l.Yb(11,"json"),l.Yb(12,"async"),l.Yb(13,"json"),l.Yb(14,"async"),l.Yb(15,"json"),l.Yb(16,"async"),l.Mb(),l.Mb()),2&t&&(l.yb(6),l.dc("ngIf",i.place),l.yb(1),l.dc("ngForOf",l.Zb(8,5,i.visits)),l.yb(3),l.rc(" Test 1 ",l.Zb(11,7,l.Zb(12,9,i.placeVisitorsResult))," 2 ",l.Zb(13,11,l.Zb(14,13,i.place))," 3 ",l.Zb(15,15,l.Zb(16,17,i.visits))," "))},directives:[n.j,n.x,n.w,n.g,n.r,c.m,c.l,n.v,n.s,n.k,n.p,n.o,n.m,n.q,n.n],pipes:[c.b,c.g,c.e],styles:[""]}),t})()}];let U=(()=>{class t{}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(i){return new(i||t)},imports:[[o.i.forChild(y)],o.i]}),t})(),O=(()=>{class t{}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(i){return new(i||t)},imports:[[c.c,s.f,n.y,U]]}),t})()}}]);