(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{wFkS:function(t,c,e){"use strict";e.r(c),e.d(c,"VisitorsListPageModule",(function(){return y}));var i=e("SVse"),o=e("s7LF"),s=e("sZkV"),n=e("iInd"),a=e("pLZG"),l=e("lJxs"),r=e("vkgz"),u=e("IzEk"),b=e("8Y7J"),d=e("9Ku7"),p=e("apZm"),h=e("ALmS"),v=e("eueu"),_=e("nbgS");const k=h.gql`
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
`,f=h.gql`
  mutation UpdateBulkCheckOutVisits($placeUUIDEquals: uuid = "") {
    update_visit(where: { place_uuid: { _eq: $placeUUIDEquals } }, _set: { checked_out_at: "now()" }) {
      affected_rows
      returning {
        visit_uuid
        checked_out_at
        visitor {
          visitor_uuid
          visitor_first_name
        }
      }
    }
  }
`;let g=(()=>{class t{constructor(t){this.apollo=t}getVisitorsByPlaceUUID(t,c=Object(v.d)()){return this.apollo.subscribe({query:k,variables:{placeUUIDEquals:t,checkedInGreaterThan:c}})}filterVisitsNotCheckedOut(t){return t.filter(t=>!t.checked_out_at)}updateBulkCheckOut(t){console.log("PlaceAdminService:: updateBulkCheckOut()",t);const c=this.apollo.mutate({mutation:f,variables:{placeUUIDEquals:t}});return c.pipe(Object(r.a)(t=>{console.log("updateBulkCheckOut a",t)})),c}}return t.\u0275fac=function(c){return new(c||t)(b.Tb(_.b))},t.\u0275prov=b.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function O(t,c){if(1&t&&(b.Nb(0),b.Lb(1,"ion-icon",7),b.sc(2),b.Mb()),2&t){const t=c.$implicit;b.Ab(2),b.uc(" ",t.visits_aggregate.aggregate.count," visitors ")}}function m(t,c){if(1&t&&(b.Nb(0),b.qc(1,O,3,1,"ng-container",5),b.cc(2,"async"),b.Mb()),2&t){const t=b.bc(2);b.Ab(1),b.hc("ngForOf",b.dc(2,1,t.place))}}function I(t,c){if(1&t&&(b.Pb(0,"ion-list-header"),b.qc(1,m,3,3,"ng-container",4),b.cc(2,"async"),b.Ob()),2&t){const t=b.bc();b.Ab(1),b.hc("ngIf",null!==b.dc(2,1,t.place))}}function U(t,c){if(1&t){const t=b.Qb();b.Pb(0,"ion-item-option",12),b.Xb("click",(function(c){b.nc(t);const e=b.bc().$implicit;return b.bc().clickCheckOut(c,e.visitor.visitor_uuid,e.checked_in_at)})),b.sc(1," Check out "),b.Ob()}}function P(t,c){if(1&t&&(b.Pb(0,"ion-item-sliding"),b.Pb(1,"ion-item-options"),b.qc(2,U,2,0,"ion-item-option",8),b.Ob(),b.Pb(3,"ion-item",9),b.Pb(4,"ion-label",10),b.Pb(5,"span",11),b.sc(6),b.cc(7,"date"),b.cc(8,"date"),b.Ob(),b.Pb(9,"h2"),b.sc(10),b.Ob(),b.Pb(11,"h3"),b.sc(12),b.Ob(),b.Ob(),b.Ob(),b.Ob()),2&t){const t=c.$implicit;b.Ab(2),b.hc("ngIf",!t.checked_out_at),b.Ab(2),b.ic("color",t.checked_out_at?"success":"warning"),b.Ab(2),b.vc(" ",b.ec(7,8,t.checked_in_at,"EEEE HH:mm"),"\u2013",b.ec(8,11,t.checked_out_at,"HH:mm")," "),b.Ab(4),b.vc(" ",t.visitor.visitor_first_name," ",t.visitor.visitor_last_name," "),b.Ab(2),b.vc(" ",t.visitor.visitor_phone," ",t.visitor.visitor_email," ")}}const w=[{path:"",component:(()=>{class t{constructor(t,c,e,i){this.activatedRoute=t,this.authenticationService=c,this.checkInOutService=e,this.placeAdminService=i,this.placeUUID=t.snapshot.paramMap.get("placeUUID"),console.log("VisitorsListPage -> constructor -> this.placeUUID",this.placeUUID);const o=i.getVisitorsByPlaceUUID(this.placeUUID);this.placeVisitorsResult=o;const s=o.pipe(Object(a.a)(t=>{var c,e;return void 0!==(null===(e=null===(c=t.data)||void 0===c?void 0:c.place)||void 0===e?void 0:e[0])}),Object(l.a)(t=>t.data.place));this.place=s;const n=s.pipe(Object(l.a)(t=>t[0].visits));this.visits=n}ngOnInit(){}clickCheckOut(t,c,e){if(console.log("clickCheckOut -> event",t),void 0===c||void 0===e)return;const i=this.checkInOutService.updateCheckOutVisitor(this.placeUUID,c,e);console.log("VisitorsListPage -> clickCheckOut -> checkedOutObs",i),i.subscribe(({data:t,errors:c,context:e,extensions:i})=>{var o;console.log("clickCheckOut -> data",t,c,e,i);const s=new Date(null===(o=null==t?void 0:t.update_visit_by_pk)||void 0===o?void 0:o.checked_out_at);console.log("VisitorsListPage -> clickCheckOut -> checkedOutDateTime",s)})}clickBulkCheckOut(t,c){this.placeAdminService.updateBulkCheckOut(c).pipe(Object(r.a)(t=>{console.log("bulkCheckOut",t)}),Object(a.a)(t=>{var c,e,i,o;return null!==(null===(e=null===(c=t.data)||void 0===c?void 0:c.update_visit)||void 0===e?void 0:e.affected_rows)&&void 0!==(null===(o=null===(i=t.data)||void 0===i?void 0:i.update_visit)||void 0===o?void 0:o.affected_rows)}),Object(u.a)(1),Object(l.a)(t=>t.data.update_visit)).subscribe()}}return t.\u0275fac=function(c){return new(c||t)(b.Kb(n.a),b.Kb(d.a),b.Kb(p.a),b.Kb(g))},t.\u0275cmp=b.Eb({type:t,selectors:[["app-visitors-list"]],decls:21,vars:19,consts:[["horizontal","start","vertical","bottom","slot","fixed","size","large"],["color","cobaltbluemonochrome",3,"click"],["name","copy-outline"],["name","log-out-outline"],[4,"ngIf"],[4,"ngFor","ngForOf"],["color","light"],["name","people"],["color","success","button","",3,"click",4,"ngIf"],["button",""],[3,"color"],[2,"float","right"],["color","success","button","",3,"click"]],template:function(t,c){1&t&&(b.Pb(0,"ion-header"),b.Pb(1,"ion-toolbar"),b.Pb(2,"ion-title"),b.sc(3,"List COVIDSafe check ins \u2705 | place visitors"),b.Ob(),b.Ob(),b.Ob(),b.Pb(4,"ion-fab",0),b.Pb(5,"ion-fab-button",1),b.Xb("click",(function(t){return c.clickBulkCheckOut(t,c.placeUUID)})),b.Lb(6,"ion-icon",2),b.Lb(7,"ion-icon",3),b.Ob(),b.Ob(),b.Pb(8,"ion-content"),b.Pb(9,"ion-list"),b.qc(10,I,3,3,"ion-list-header",4),b.qc(11,P,13,14,"ion-item-sliding",5),b.cc(12,"async"),b.Ob(),b.Pb(13,"ion-text",6),b.sc(14),b.cc(15,"json"),b.cc(16,"async"),b.cc(17,"json"),b.cc(18,"async"),b.cc(19,"json"),b.cc(20,"async"),b.Ob(),b.Ob()),2&t&&(b.Ab(10),b.hc("ngIf",c.place),b.Ab(1),b.hc("ngForOf",b.dc(12,5,c.visits)),b.Ab(3),b.wc(" Test 1 ",b.dc(15,7,b.dc(16,9,c.placeVisitorsResult))," 2 ",b.dc(17,11,b.dc(18,13,c.place))," 3 ",b.dc(19,15,b.dc(20,17,c.visits))," "))},directives:[s.l,s.z,s.y,s.i,s.j,s.m,s.h,s.t,i.m,i.l,s.x,s.u,s.r,s.q,s.o,s.s,s.p],pipes:[i.b,i.g,i.e],styles:[""]}),t})()}];let q=(()=>{class t{}return t.\u0275mod=b.Ib({type:t}),t.\u0275inj=b.Hb({factory:function(c){return new(c||t)},imports:[[n.i.forChild(w)],n.i]}),t})(),y=(()=>{class t{}return t.\u0275mod=b.Ib({type:t}),t.\u0275inj=b.Hb({factory:function(c){return new(c||t)},imports:[[i.c,o.g,s.A,q]]}),t})()}}]);