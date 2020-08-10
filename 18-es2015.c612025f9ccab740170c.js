(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{wFkS:function(t,i,e){"use strict";e.r(i),e.d(i,"VisitorsListPageModule",(function(){return f}));var c=e("SVse"),s=e("s7LF"),o=e("sZkV"),n=e("iInd"),a=e("pLZG"),l=e("lJxs"),r=e("8Y7J"),b=e("apZm"),u=e("ALmS"),p=e("nbgS");const d=u.gql`
  subscription PlaceVisitors($placeUUIDEquals: uuid! = "") {
    place(where: { place_uuid: { _eq: $placeUUIDEquals } }) {
      visits_aggregate {
        aggregate {
          count(columns: visitor_uuid)
        }
      }
      visits(order_by: { checked_out_at: desc_nulls_first, checked_in_at: desc_nulls_first }, limit: 200) {
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
`;let v=(()=>{class t{constructor(t){this.apollo=t}getVisitorsByPlaceUUID(t){return this.apollo.subscribe({query:d,variables:{placeUUIDEquals:t}})}}return t.\u0275fac=function(i){return new(i||t)(r.Rb(p.b))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function h(t,i){if(1&t&&(r.Nb(0,"ion-list-header"),r.mc(1),r.Yb(2,"async"),r.Mb()),2&t){const t=r.Xb();r.yb(1),r.oc(" ",r.Zb(2,1,t.place)[0].visits_aggregate," ")}}function _(t,i){if(1&t){const t=r.Ob();r.Nb(0,"ion-item",2),r.Vb("click",(function(e){r.hc(t);const c=i.$implicit;return r.Xb().clickCheckOut(e,c.visitor.visitor_uuid,c.checked_in_at)})),r.mc(1),r.Yb(2,"date"),r.Yb(3,"date"),r.Mb()}if(2&t){const t=i.$implicit;r.yb(1),r.qc(" ",t.visitor.visitor_first_name," ",r.ac(2,3,t.checked_in_at,"HH:mm:ss")," ",r.ac(3,6,t.checked_out_at,"HH:mm:ss")," ")}}const k=[{path:"",component:(()=>{class t{constructor(t,i,e){this.activatedRoute=t,this.checkInOutService=i,this.placeAdminService=e,this.placeUUID=t.snapshot.paramMap.get("placeUUID"),console.log("VisitorsListPage -> constructor -> this.placeUUID",this.placeUUID);const c=e.getVisitorsByPlaceUUID(this.placeUUID);this.placeVisitorsResult=c;const s=c.pipe(Object(a.a)(t=>{var i,e;return void 0!==(null===(e=null===(i=t.data)||void 0===i?void 0:i.place)||void 0===e?void 0:e[0])}),Object(l.a)(t=>t.data.place));this.place=s;const o=s.pipe(Object(l.a)(t=>t[0].visits));this.visits=o}ngOnInit(){}clickCheckOut(t,i,e){console.log("clickCheckOut -> event",t),this.checkInOutService.updateCheckOutVisitor(this.placeUUID,i,e).subscribe(({data:t,errors:i,context:e,extensions:c})=>{var s;console.log("clickCheckOut -> data",t,i,e,c);const o=new Date(null===(s=null==t?void 0:t.update_visit_by_pk)||void 0===s?void 0:s.checked_out_at);console.log("VisitorsListPage -> clickCheckOut -> checkedOutDateTime",o)})}}return t.\u0275fac=function(i){return new(i||t)(r.Ib(n.a),r.Ib(b.a),r.Ib(v))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-visitors-list"]],decls:20,vars:27,consts:[[4,"ngIf"],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"]],template:function(t,i){1&t&&(r.Nb(0,"ion-header"),r.Nb(1,"ion-toolbar"),r.Nb(2,"ion-title"),r.mc(3,"Checki\u2705 place visitors"),r.Mb(),r.Mb(),r.Mb(),r.Nb(4,"ion-content"),r.Nb(5,"ion-list"),r.kc(6,h,3,3,"ion-list-header",0),r.Yb(7,"async"),r.Yb(8,"async"),r.Yb(9,"async"),r.Yb(10,"async"),r.kc(11,_,4,9,"ion-item",1),r.Yb(12,"async"),r.Mb(),r.mc(13),r.Yb(14,"json"),r.Yb(15,"async"),r.Yb(16,"json"),r.Yb(17,"async"),r.Yb(18,"json"),r.Yb(19,"async"),r.Mb()),2&t&&(r.yb(6),r.dc("ngIf",null!=i.place&&null!==r.Zb(7,5,i.place)&&void 0!==r.Zb(8,7,i.place)&&null!==r.Zb(9,9,i.place)[0]&&null!==r.Zb(10,11,i.place)[0]),r.yb(5),r.dc("ngForOf",r.Zb(12,13,i.visits)),r.yb(2),r.qc(" Test 1 ",r.Zb(14,15,r.Zb(15,17,i.placeVisitorsResult))," 2 ",r.Zb(16,19,r.Zb(17,21,i.place))," 3 ",r.Zb(18,23,r.Zb(19,25,i.visits)),"\n"))},directives:[o.l,o.w,o.v,o.k,o.q,c.l,c.k,o.r,o.o],pipes:[c.b,c.g,c.e],styles:[""]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(i){return new(i||t)},imports:[[n.i.forChild(k)],n.i]}),t})(),f=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(i){return new(i||t)},imports:[[c.c,s.f,o.x,m]]}),t})()}}]);