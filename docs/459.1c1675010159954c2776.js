"use strict";(self.webpackChunkbem_paggo_challenge=self.webpackChunkbem_paggo_challenge||[]).push([[459],{7459:(et,A,l)=>{l.r(A),l.d(A,{HomeModule:()=>tt});var Z=l(4655),v=l(7238),m=l(3679),R=l(7574),M=l(3637),B=l(6561);function E(n){const{subscriber:r,counter:e,period:o}=n;r.next(e),this.schedule({subscriber:r,counter:e+1,period:o},o)}var t=l(7716),S=l(1552);let H=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-succces-snack-bar"]],decls:5,vars:0,consts:[[1,"snack-bar-layer"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"span"),t._uU(2,"Pedido enviado com sucesso"),t.qZA(),t.TgZ(3,"mat-icon"),t._uU(4,"check"),t.qZA(),t.qZA())},directives:[S.Hw],styles:[".snack-bar-layer[_ngcontent-%COMP%]{color:#5cb85c;display:flex}.snack-bar-layer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:auto}"]}),n})();var p=l(2238),F=l(8341),C=l(8583),j=l(1095);function N(n,r){if(1&n&&(t.TgZ(0,"mat-chip",8),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.hij(" ",e," ")}}function D(n,r){if(1&n&&(t.TgZ(0,"section",3),t.TgZ(1,"h3"),t._uU(2,"Observa\xe7\xf5es:"),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(4),t.Oqu(e.order.comment)}}let Y=(()=>{class n{constructor(e,o){this.dialogRef=e,this.data=o,this.orderConfirmed=new t.vpe}get order(){return this.data.order}ngOnInit(){}confirm(){this.orderConfirmed.emit(this.order)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.so),t.Y36(p.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-confirm-order-dialog"]],outputs:{orderConfirmed:"orderConfirmed"},decls:16,vars:3,consts:[[1,"dialog-container"],["mat-dialog-title",""],["mat-dialog-content",""],[1,"dialog-section"],["color","accent","selected","",4,"ngFor","ngForOf"],["class","dialog-section",4,"ngIf"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close","",1,"confirm-button",3,"click"],["color","accent","selected",""]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1",1),t._uU(2,"Confirmar pedido"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"section",3),t.TgZ(5,"h3"),t._uU(6,"Adesivos"),t.qZA(),t.TgZ(7,"mat-chip-list"),t.YNc(8,N,2,1,"mat-chip",4),t.qZA(),t.qZA(),t.TgZ(9,"section",3),t.TgZ(10,"h3"),t._uU(11),t.qZA(),t.qZA(),t.YNc(12,D,5,1,"section",5),t.qZA(),t.TgZ(13,"div",6),t.TgZ(14,"button",7),t.NdJ("click",function(){return o.confirm()}),t._uU(15," Confirmar "),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(8),t.Q6J("ngForOf",o.order.stickers),t.xp6(3),t.hij("Quantidade: ",o.order.quantity,""),t.xp6(1),t.Q6J("ngIf",o.order.comment))},directives:[p.uh,p.xY,F.qn,C.sg,C.O5,p.H8,j.lW,p.ZT,F.HS],styles:[".dialog-container[_ngcontent-%COMP%]{max-width:500px;width:70vw}.dialog-container[_ngcontent-%COMP%]   .dialog-section[_ngcontent-%COMP%]{margin:10px 0}.dialog-container[_ngcontent-%COMP%]   .confirm-button[_ngcontent-%COMP%]{font-size:14px}"]}),n})();var Q=l(6458),V=l(7894),O=l(3738),z=l(7539),T=l(8295),G=l(9983);function X(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Campo "),t.TgZ(2,"strong"),t._uU(3,"obrigat\xf3rio"),t.qZA(),t.qZA()),2&n&&t.Q6J("@fade",void 0)}function $(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Valor deve ser maior que "),t.TgZ(2,"strong"),t._uU(3,"1"),t.qZA(),t.qZA()),2&n&&t.Q6J("@fade",void 0)}const W=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"main"),t._UZ(1,"router-outlet"),t.qZA())},directives:[Z.lC],styles:[""]}),n})(),children:[{path:"",component:(()=>{class n{constructor(e,o,i,a){this.fb=e,this.dialog=o,this.snackBar=i,this.progressBarService=a}get react(){return this.stickersForm.get("react")}get vue(){return this.stickersForm.get("vue")}get angular(){return this.stickersForm.get("angular")}get quantity(){return this.stickersForm.get("quantity")}get canSubmit(){var e;return(this.react.value||this.vue.value||this.angular.value)&&(null===(e=this.quantity)||void 0===e?void 0:e.value)>=1}ngOnInit(){this.stickersForm=this.fb.group({react:[!1,[m.kI.required]],vue:[!1,[m.kI.required]],angular:[!1,[m.kI.required]],quantity:[1,[m.kI.required,m.kI.min(1)]],comment:[""]}),this.stickersFormSub=this.stickersForm.valueChanges.subscribe(e=>{const{react:o,angular:i,vue:a}=e,c=function(n,r){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&r.indexOf(o)<0&&(e[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(n);i<o.length;i++)r.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(e[o[i]]=n[o[i]])}return e}(e,["react","angular","vue"]);this.order=Object.assign(Object.assign({},c),{stickers:[o&&"React",i&&"Angular",a&&"Vue"].filter(s=>s)})})}ngOnDestroy(){this.stickersFormSub.unsubscribe()}onSubmit(){const o=this.dialog.open(Y,{data:{order:this.order}}).componentInstance.orderConfirmed.subscribe(()=>{const a=function(n=0,r=M.P){return(!(0,B.k)(n)||n<0)&&(n=0),(!r||"function"!=typeof r.schedule)&&(r=M.P),new R.y(e=>(e.add(r.schedule(E,n,{subscriber:e,counter:0,period:n})),e))}(1).subscribe(c=>{const g=c>=200,u=Math.floor(c/200*100);this.progressBarService.setProgress(u),g&&(this.openSnackBar(),this._resetForm(),a.unsubscribe(),o.unsubscribe())})})}openSnackBar(){this.snackBar.openFromComponent(H,{duration:3e3})}_resetForm(){this.stickersForm.reset(),this.stickersForm.patchValue({quantity:1})}increment(){this.stickersForm.patchValue({quantity:this.quantity.value+1})}decrement(){this.quantity.value>1&&this.stickersForm.patchValue({quantity:this.quantity.value-1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.qu),t.Y36(p.uw),t.Y36(Q.ux),t.Y36(V.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-form"]],decls:46,vars:4,consts:[[1,"form-card"],[1,"card-header"],[1,"title"],["src","../../../assets/logos/box-logo.png","alt","box-logo",1,"box-logo"],[1,"form-layer",3,"formGroup"],[1,"form-section"],["formControlName","react"],["formControlName","vue"],["formControlName","angular"],["mat-icon-button","",3,"click"],["color","accent","appearance","standard",1,"number-input-field"],["matInput","","type","number","maxlength","4","formControlName","quantity"],[4,"ngIf"],["appearance","fill","color","accent",1,"text-form-field"],["matInput","","formControlName","comment"],["align","end",1,"actions-layer"],["mat-stroked-button","","color","accent",1,"submit-button",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card",0),t.TgZ(1,"mat-card-content"),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"h1"),t._uU(5,"Formul\xe1rio para compra de "),t.TgZ(6,"strong"),t._uU(7,"adesivos"),t.qZA(),t.qZA(),t.qZA(),t._UZ(8,"img",3),t.qZA(),t.TgZ(9,"form",4),t.TgZ(10,"section",5),t.TgZ(11,"h3"),t._uU(12,"Quais adesivos:"),t.qZA(),t.TgZ(13,"p"),t.TgZ(14,"mat-checkbox",6),t._uU(15,"React"),t.qZA(),t.qZA(),t.TgZ(16,"p"),t.TgZ(17,"mat-checkbox",7),t._uU(18,"Vue"),t.qZA(),t.qZA(),t.TgZ(19,"p"),t.TgZ(20,"mat-checkbox",8),t._uU(21,"Angular"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"section",5),t.TgZ(23,"h3"),t._uU(24,"Quantos adesivos de cada ?"),t.qZA(),t.TgZ(25,"div"),t.TgZ(26,"button",9),t.NdJ("click",function(){return o.decrement()}),t.TgZ(27,"mat-icon"),t._uU(28,"remove"),t.qZA(),t.qZA(),t.TgZ(29,"mat-form-field",10),t._UZ(30,"input",11),t.qZA(),t.TgZ(31,"button",9),t.NdJ("click",function(){return o.increment()}),t.TgZ(32,"mat-icon"),t._uU(33,"add"),t.qZA(),t.qZA(),t.qZA(),t.YNc(34,X,4,1,"mat-error",12),t.YNc(35,$,4,1,"mat-error",12),t.qZA(),t.TgZ(36,"section",5),t.TgZ(37,"h3"),t._uU(38,"Observa\xe7\xf5es:"),t.qZA(),t.TgZ(39,"mat-form-field",13),t.TgZ(40,"mat-label"),t._uU(41,"Alguma d\xfavida? Recado?"),t.qZA(),t._UZ(42,"textarea",14),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"mat-card-actions",15),t.TgZ(44,"button",16),t.NdJ("click",function(){return o.onSubmit()}),t._uU(45," Enviar "),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(9),t.Q6J("formGroup",o.stickersForm),t.xp6(25),t.Q6J("ngIf",o.quantity.touched&&(null==o.quantity.errors?null:o.quantity.errors.required)),t.xp6(1),t.Q6J("ngIf",o.quantity.touched&&(null==o.quantity.errors?null:o.quantity.errors.min)),t.xp6(9),t.Q6J("disabled",!o.canSubmit))},directives:[O.a8,O.dn,m._Y,m.JL,m.sg,z.oG,m.JJ,m.u,j.lW,S.Hw,T.KE,G.Nt,m.wV,m.Fj,m.nD,C.O5,T.hX,O.hq,T.TO],styles:[".form-card[_ngcontent-%COMP%]{width:80vw;max-width:600px;position:relative;overflow:hidden;padding:25px}.form-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{width:100%;color:#69f0ae;display:flex;align-items:center;justify-content:space-between}.form-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{max-width:250px;text-align:left}.form-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .box-logo[_ngcontent-%COMP%]{height:70px}.form-card[_ngcontent-%COMP%]   .form-layer[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{margin:20px 0}.form-card[_ngcontent-%COMP%]   .form-layer[_ngcontent-%COMP%]   .number-input-field[_ngcontent-%COMP%]{max-width:50px;font-size:16px;text-align:center}.form-card[_ngcontent-%COMP%]   .form-layer[_ngcontent-%COMP%]   .text-form-field[_ngcontent-%COMP%]{font-size:16px;width:100%}.form-card[_ngcontent-%COMP%]   .actions-layer[_ngcontent-%COMP%]{margin:0}.form-card[_ngcontent-%COMP%]   .actions-layer[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{font-size:14px;padding:5px 20px;text-transform:uppercase;letter-spacing:2px}.form-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .form-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.form-card[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}"],data:{animation:[(0,v.X$)("fade",[(0,v.eR)("void => *",[(0,v.oB)({opacity:0}),(0,v.jt)(300,(0,v.oB)({opacity:1}))])])]}}),n})()}]}];let K=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[Z.Bz.forChild(W)],Z.Bz]}),n})();var L=l(4763);let tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[K,L.m]]}),n})()}}]);