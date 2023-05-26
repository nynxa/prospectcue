// 05/26/2023, 04:10 PM
"use strict";var ProspectCue=(()=>{var T=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames,B=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var A=(n,e,t)=>e in n?T(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,L=(n,e)=>{for(var t in e||(e={}))R.call(e,t)&&A(n,t,e[t]);if(B)for(var t of B(e))Y.call(e,t)&&A(n,t,e[t]);return n};var S=(n,e)=>{for(var t in e)T(n,t,{get:e[t],enumerable:!0})},Z=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of W(e))!R.call(n,a)&&a!==t&&T(n,a,{get:()=>e[a],enumerable:!(o=K(e,a))||o.enumerable});return n};var J=n=>Z(T({},"__esModule",{value:!0}),n);var w=(n,e,t)=>(A(n,typeof e!="symbol"?e+"":e,t),t);var r=(n,e,t)=>new Promise((o,a)=>{var s=u=>{try{c(t.next(u))}catch(d){a(d)}},l=u=>{try{c(t.throw(u))}catch(d){a(d)}},c=u=>u.done?o(u.value):Promise.resolve(u.value).then(s,l);c((t=t.apply(n,e)).next())});var re={};S(re,{addAddressButtons:()=>M,addContactSearchBox:()=>j,addTagElements:()=>H,appendTagLink:()=>O,appended:()=>g,checkNewTagAlert:()=>m,colorConsole:()=>i,constants:()=>D,getAddressDivs:()=>C,processContactDivs:()=>F,runContactPageCustomizations:()=>$,startProspectCueCustomizations:()=>G,updatePencilIcon:()=>N,wait:()=>x});function C(n){var t;let e;for(let o of n)if(o.textContent&&o.textContent.trim()==="Street Address"){if(e=(t=o.closest(".pt-3 > div"))==null?void 0:t.children,!e){i("could not find addressDivChildren","red");return}let a={streetLabel:o,streetDiv:e[1],cityDiv:e[2],stateDiv:e[4],zipDiv:e[5],addressDivChildren:e};return g.addressDivs=a,a}}function i(n,e,t){let o={red:"#f1889a",green:"#6DECB9",blue:"#88FFF7",yellow:"#FFF6BF",orange:"#f19684"};e!=null||(e="blue"),console.log(`%c \u{1FA90} ${n}`,`font-size: 13px; color: ${o[e]} `,t)}var x={};S(x,{waitForElement:()=>p,waitForManyElements:()=>f,waitForTextContent:()=>Q});function p(n){let{elementName:e,selector:t}=n;return e&&i(`${e}...waiting for ${n.selector}`),new Promise(o=>{let a=document.querySelector(t);if(a){o(a);return}let s=new MutationObserver(l=>{l.forEach(c=>{Array.from(c.addedNodes).forEach(d=>{if(d instanceof HTMLElement){let h=d.querySelector(t);d.matches(t)&&(i(`${e}...found -> ${t} in`,"green",d),s.disconnect(),o(d))}})})});s.observe(document.body,{childList:!0,subtree:!0})})}function f(n,e=1,t,o){return i(`${o}: waiting for ${e} children on ${o} ${t?`with textContent ${t}`:""}`),new Promise(a=>{let s=document.querySelectorAll(n);s.length>=e&&(i(`${o} already has at least ${e} nodes...`,"green",s),a(s));let l=new MutationObserver(c=>{i(`starting ${o} mutation observer...`,"yellow"),c.forEach(u=>{let d=document.querySelectorAll(n);d.length>=e&&(i(`${o}: ${o} now has at least ${e} nodes...`,"green",d),a(d),l.disconnect())})});l.observe(document.body,{childList:!0,subtree:!0})})}function Q(n,e,t){return new Promise(o=>{let a=document.querySelectorAll(n);for(let l=0;l<a.length;l++){let c=a[l];c.textContent===e&&(i(`${c}: found textContent immediately: ${e}...`,"green",c),o(c))}let s=new MutationObserver(l=>{l.forEach(c=>{let u=document.querySelectorAll(n);for(let d=0;d<u.length;d++){let h=u[d];h.textContent===e&&(i(`${t}: found textContent: ${e}...`,"green",h),o(h),s.disconnect())}})});s.observe(document.body,{childList:!0,subtree:!0})})}function M(){return r(this,null,function*(){let n=yield f(".hl_contact-details-left .form-group .label",20,void 0,"waiting for address labels"),e=C(n);if(!e){i("no address divs found, returning from startAddButtons","red");return}i("address divs found... inserting map buttons","green"),yield X(e)})}function X(n){return r(this,null,function*(){var u,d,h,_,I,P,q,z;if(document.querySelectorAll(".zg-map-btns").length>0){i("map buttons already present, returning","yellow");return}let e=document.createElement("div");e.id="mapLinks",e.className="mapContainerZG",e.style.display="inline-flex";let{streetLabel:t}=n;t.style.display="inline-flex",t.style.width="50%";let o={street:(d=(u=n.streetDiv.querySelector("input"))==null?void 0:u.value)!=null?d:null,city:(_=(h=n.cityDiv.querySelector("input"))==null?void 0:h.value)!=null?_:null,state:(P=(I=n.stateDiv.querySelector("input"))==null?void 0:I.value)!=null?P:null,zip:(z=(q=n.stateDiv.querySelector("input"))==null?void 0:q.value)!=null?z:null},a=encodeURIComponent(Object.values(o).filter(E=>E!==null).join(" ")),l=`<span class="zillowTitle">Search:</span><a href="https://www.google.com/search?q=${Object.values(o).filter(E=>E!==null).map(E=>encodeURIComponent(E)).join("+")}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" class="zg-map-btns"></a>`,c=`<a href="https://www.zillow.com/homes/for_sale/${a}_rb" target="_blank" id="zillowLink"><img src="https://www.zillow.com/apple-touch-icon.png" class="zg-map-btns"></a>`;e.innerHTML=l+c,t.insertAdjacentElement("afterend",e)})}function V(){return r(this,null,function*(){if(document.getElementById("section-toggle")){i("section toggle already present, returning","yellow");return}let n=document.createElement("input");n.type="checkbox",n.id="section-toggle",n.className="focus:ring-curious-blue-500 h-5 w-5 text-curious-blue-600 border-gray-300 rounded mr-2 disabled:opacity-50";let e=document.createElement("label");e.htmlFor="section-toggle",e.innerText="Toggle Sections",e.style.color="var(--gray-600)",e.className="mb-0 mr-4",n.addEventListener("change",ee);let t=document.createElement("div");t.appendChild(n),t.appendChild(e),t.style.display="inline-flex";let{firstElementChild:o}=yield p({selector:".hl_contact-details-left .h-full.overflow-y-auto"});if(!o){i("parent node not found","red");return}o.className+=" text-xs !text-gray-600",o.insertBefore(t,o.firstChild),o.lastElementChild.style.color="var(--gray-600)"})}function ee(n){var t,o;if(n.target.checked)for(let a of g.contactDivTriggers)((t=a.parentElement)==null?void 0:t.getAttribute("data-open"))==="true"&&a.click();else for(let a of g.contactDivTriggers)((o=a.parentElement)==null?void 0:o.getAttribute("data-open"))==="false"&&a.click()}var D={};S(D,{ACTIONS_DIVS_SELECTOR:()=>y,CONTACT_DIVS_SELECTOR:()=>b,CONTACT_SECTION_LABELS_SELECTOR:()=>te});var b=".hl_contact-details-left > div > .h-full.overflow-y-auto > .py-3.px-3",y=".hl_contact-details-left > div > .h-full.overflow-y-auto > .bg-gray-100 > .py-3.px-3",te=".hl_contact-details-left .form-group .label";var v=class{constructor(e){w(this,"settings");w(this,"dialogSupported");w(this,"dialog");w(this,"elements");w(this,"focusable");w(this,"hasFormData");this.settings=L({accept:e.accept||"OK",bodyClass:e.bodyClass||"dialog-open",cancel:e.cancel||"Cancel"},e),this.init()}collectFormData(e){let t={};return e.forEach((o,a)=>{typeof o=="string"&&(t.hasOwnProperty(a)?(Array.isArray(t[a])||(t[a]=[t[a]]),t[a].push(o)):t[a]=o)}),t}getFocusable(){var e;return[...(e=this.dialog)==null?void 0:e.querySelectorAll('button,[href],select,textarea,input:not([type="hidden"]),[tabindex]:not([tabindex="-1"])')]}init(){this.dialogSupported=typeof HTMLDialogElement=="function",this.dialog=document.createElement("dialog"),this.dialog.role="dialog",this.dialog.dataset.component=this.dialogSupported?"dialog":"no-dialog",this.dialog.innerHTML=`
    <form method="dialog" data-ref="form">
      <fieldset data-ref="fieldset" role="document">
        <legend data-ref="message" id="${Math.round(Date.now()).toString(36)}"></legend>
        <div data-ref="template"></div>
      </fieldset>
      <menu>
        <button${this.dialogSupported?"":' type="button"'} data-ref="cancel" value="cancel"></button>
        <button${this.dialogSupported?"":' type="button"'} data-ref="accept" value="default"></button>
      </menu>
      <audio data-ref="soundAccept"></audio>
      <audio data-ref="soundOpen"></audio>
    </form>`,document.body.appendChild(this.dialog),this.elements={},this.focusable=[],this.dialog.querySelectorAll("[data-ref]").forEach(e=>this.elements[e.dataset.ref]=e),this.dialog.setAttribute("aria-labelledby",this.elements.message.id),this.elements.cancel.addEventListener("click",()=>{this.dialog.dispatchEvent(new Event("cancel"))}),this.dialog.addEventListener("keydown",e=>{if(e.key==="Enter"&&(this.dialogSupported||e.preventDefault(),this.elements.accept.dispatchEvent(new Event("click"))),e.key==="Escape"&&this.dialog.dispatchEvent(new Event("cancel")),e.key==="Tab"){e.preventDefault();let t=this.focusable.length-1,o=this.focusable.indexOf(e.target);o=e.shiftKey?o-1:o+1,o<0&&(o=t),o>t&&(o=0),this.focusable[o].focus()}}),this.toggle()}open(e){let t=L(L({},this.settings),e);this.dialog.className=t.dialogClass||"",this.elements.accept.innerText=t.accept,this.elements.cancel.innerText=t.cancel,this.elements.cancel.hidden=t.cancel==="",this.elements.message.innerHTML=t.message,this.elements.soundAccept.src=t.soundAccept||"",this.elements.soundOpen.src=t.soundOpen||"",this.elements.target=t.target||"",this.elements.template.innerHTML=t.template||"",this.focusable=this.getFocusable(),this.hasFormData=this.elements.fieldset.elements.length>0,t.soundOpen&&this.elements.soundOpen.play(),this.toggle(!0),this.hasFormData?(this.focusable[0].focus(),this.focusable[0].select()):this.elements.accept.focus()}toggle(e=!1){this.dialogSupported&&e&&this.dialog.showModal(),this.dialogSupported||document.body.classList.toggle(this.settings.bodyClass,e),this.dialog.hidden=!e,this.elements.target&&!e&&this.elements.target.focus()}waitForUser(){return new Promise(e=>{this.dialog.addEventListener("cancel",()=>{this.toggle(),e(!1)},{once:!0}),this.elements.accept.addEventListener("click",()=>{let t=this.hasFormData?this.collectFormData(new FormData(this.elements.form)):!0;this.elements.soundAccept.getAttribute("src").length>0&&this.elements.soundAccept.play(),this.toggle(),e(t)},{once:!0})})}alert(e){let t={message:e,cancel:"",template:""};return this.open(t),this.waitForUser()}confirm(e){let t={message:e,template:""};return this.open(t),this.waitForUser()}prompt(e,t){let o=`<label aria-label="${e}"><input type="text" name="prompt" value="${t}"></label>`,a={message:e,template:o};return this.open(a),this.waitForUser()}};function H(){return r(this,null,function*(){if(i("inserting tag link and tag alert....","blue"),g.tagsAdded=[],document.getElementById("tags-edit-container")){i("tags edit div already present","red");return}let n=yield f(y,3,void 0,"addTagElements"),e=null;for(let o=0;o<n.length;o++){let a=n[o],s=a.querySelector("span.text-sm.font-medium");if(s!=null&&s.textContent&&s.textContent.trim()==="Tags"){e=a.firstElementChild,i("Tags heading found-> ","orange",e);break}}if(e===null){i("tags section not found","red");return}let t=yield O(e);if(!t){i("new tag div not found","red");return}i("new tag div found -> ","green",t),m(t)})}function O(n){return r(this,null,function*(){if(document.getElementById("tags-edit"))return;let e=n.lastElementChild,t=document.createElement("div");t.id="tags-edit-container";let o=document.createElement("a");return o.addEventListener("click",a=>a.stopPropagation()),o.href=window.location.href.replace(/contacts.*/,"settings/tags"),o.target="_blank",o.innerHTML=`<span id="tags-edit" class="tags-edit">Edit Tags  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
  width="12" height="12"
  viewBox="0 0 172 172"
  style=" fill:#000000;"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><g><path d="M5.375,26.875h118.25v118.25h-118.25z" fill="#c2e8ff"></path><path d="M118.25,32.25v107.5h-107.5v-107.5h107.5M129,21.5h-129v129h129v-129z" fill="#357ded"></path><path d="M129,43v32.25h-21.5l0,-32.25z" fill="#c2e8ff"></path><path d="M118.25,21.5v21.5h-32.25v-21.5z" fill="#c2e8ff"></path><g fill="#357ded"><path d="M150.5,0h-64.5l21.5,21.5l-43,43l21.5,21.5l43,-43l21.5,21.5z"></path></g></g><path d="" fill="none"></path><path d="" fill="none"></path></g></g></svg>
  </span>`,t.prepend(o),n.insertBefore(t,e),n})}function m(n){return r(this,null,function*(){if(!n){i("new tag div not found, waiting for click","orange");let t=yield p({selector:".add-new"});return k(t)}let e=document.querySelector(".add-new");if(e)return i("add new section found","orange"),k(e);i("add new section not found, waiting for click","orange",n),n.addEventListener("click",t=>r(this,null,function*(){let o=document.querySelector(".add-new");if(!o){i("click occurred on tag div, but add new not present","red");return}i("click occured on tag div, addNew found","green",o);let a=yield p({selector:".add-new"});i("add new tag section loaded -> ","green",a),k(a)}))})}function k(n){if(g.tagsAdded=[],i("now attaching tag alert..."),n.hasAttribute("listener"))return i("tag alert found, returning...");n.setAttribute("listener","tagAlert"),n.addEventListener("click",e=>{n.removeAttribute("listener"),ne(e)},{capture:!0,once:!0})}function ne(n){return r(this,null,function*(){var s;i("add new tag click captured","green",n),n.stopPropagation();let e=n.target,t=(s=e.innerText)==null?void 0:s.trim(),o=new v({dialogClass:"tag-confirm-dialog",accept:"Yes",cancel:"No",message:`Are you sure you want to add <span class="tag-add">${t}</span> as a new tag?`,target:e});o.open();let a=yield o.waitForUser();i(`tag add confirmation: ${a} for tag ${t}`,"green"),a&&(g.tagsAdded.push(t),e.click()),setTimeout(m,100)})}function F(){return r(this,null,function*(){let n=yield f(b,3,void 0,"processContactDivs: waiting for Contact divs"),e=yield f(y,3,void 0,"processContactDivs: waiting for Acions section"),t="M9 5l7 7-7 7";for(let o of n){let a=o.querySelector(".cursor-pointer"),s=o.querySelector("svg > path");s&&(g.contactDivTriggers.push(a),s.getAttribute("d")===t&&(i("opening contact div","green",o),o.firstChild.click()),o.setAttribute("data-open","true"),a.addEventListener("click",l=>{o.getAttribute("data-open")==="true"?o.setAttribute("data-open","false"):o.setAttribute("data-open","true")}))}for(let o of e){if(!o.childElementCount)continue;let a=o.querySelector(".cursor-pointer");g.contactDivTriggers.push(o),o.querySelectorAll("svg > path")[1].getAttribute("d")===t&&(i("opening actions div","green",o),o.firstChild.click()),o.setAttribute("data-open","true"),o.addEventListener("click",l=>{o.getAttribute("data-open")==="true"?o.setAttribute("data-open","false"):o.setAttribute("data-open","true")})}})}function j(){return r(this,null,function*(){let e=yield p({selector:".hl_contact-details-left .contact-detail-nav",elementName:"addContactSearchBox: waiting for parent node"}),t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("placeholder","search sections"),t.setAttribute("id","contact-search"),t.className="h-6 basis-36 focus:ring-curious-blue-500 focus:border-curious-blue-500 border border-blue-300 block text-xs  rounded disabled:opacity-50 text-gray-800",e.insertBefore(t,e.children[1]),t.addEventListener("input",o=>r(this,null,function*(){var l;let a=o.target.value;if(!a)return;let s=yield f(b,20,void 0,"addContactSearchBox");for(let c of s)if((l=c.textContent)!=null&&l.toLowerCase().includes(a.toLowerCase())){c.style.backgroundColor="yellow",c.scrollIntoView({behavior:"smooth",block:"center"});break}else c.style.backgroundColor="transparent"}))})}function U(){return r(this,null,function*(){let n=yield p({selector:".form-footer.save",elementName:"attachSaveAlert:"});if(n.hasAttribute("listener"))return;n.setAttribute("listener","saveAlert"),document.querySelectorAll("a[href], a.back").forEach(t=>{t.addEventListener("click",ae,{once:!0,capture:!0})})})}function oe(){let n=document.querySelector(".form-footer.save > div"),e=n==null?void 0:n.textContent,t=e==null?void 0:e.match(/^\d+/);return t?+t[0]:null}function ae(n){return r(this,null,function*(){n.preventDefault(),console.log("trying to exit without saving");let e=oe(),t=n.target,o=new v({dialogClass:"confirm-dialog",accept:"Save Changes",cancel:"Discard Changes",message:`You have ${e?e+" ":""}unsaved changes.`,target:t});o.open();let a=yield o.waitForUser();i(`save alert confirmation: ${a}`,"green"),a&&(i("saving changes...","green"),document.querySelector(".form-footer.save div:nth-child(2) > div > button").click())})}function N(){return r(this,null,function*(){(yield f("i.fas.fa-pencil-alt",1,void 0,"updatePhoneNumberIcon")).forEach(t=>t.className="icon icon-pencil --light"),(yield f("i.fas.fa-trash-alt",1,void 0,"deletePhoneNumberIcon")).forEach(t=>t.className="icon icon-trash --light")})}var g={addressDivs:{},tagsAdded:[],contactDivs:[],contactDivTriggers:[],searchBox:null};G();function G(){return r(this,null,function*(){i("Starting prospectcue customizations","green"),window.location.pathname.includes("/contacts/detail/")&&(yield $()),window.location.pathname.includes("conversations")&&(i("reloaded to conversations page, checking for add new tag","yellow"),yield m()),window.location.pathname.includes("/opportunities/list")&&(i("reloaded to opportunities list page, checking for add new tag","yellow"),yield m()),window.addEventListener("click",se)})}function $(){return r(this,null,function*(){i("running contact page customizations","green");try{yield F()}catch(n){i("error processing contact divs","red",n)}try{yield V()}catch(n){i("error adding section toggle","red",n)}try{yield M()}catch(n){i("error adding address buttons","red",n)}try{yield H()}catch(n){i("error adding tag elements","red",n)}try{yield U()}catch(n){i("error attaching save alert","red",n)}})}function ie(n){for(i("finding ancestor with href","yellow",n);n;){if(n instanceof HTMLAnchorElement&&n.hasAttribute("href"))return n;n=n.parentElement}return null}function se(n){let e=n.target,t=ie(e),o="/contacts/detail/",a="/conversations/conversations",s="/opportunities/list";i(`click was on an anchor element: ${t==null?void 0:t.href}`,"yellow");let l=window.location.pathname;setTimeout(()=>r(this,null,function*(){let c=window.location.pathname;l===c&&window.location.hash||(t!=null&&t.href.includes(o)?(yield $(),i("click on contact page, checking for add new tag","yellow")):window.location.pathname.includes(a)?(i("click on conversations page, checking for add new tag","yellow"),yield m()):l.includes(s)&&window.location.pathname.includes(s)&&(i("click on opportunities page, checking for add new tag","yellow"),yield m()),i("checking for pencil icons","yellow"),yield N())}),500)}return J(re);})();
//# sourceMappingURL=index.js.map
