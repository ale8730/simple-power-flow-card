function e(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let a=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new a(i,e,o)},n=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,f=globalThis,_=f.trustedTypes,v=_?_.emptyScript:"",g=f.reactiveElementPolyfillSupport,m=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!l(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&c(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const a=o?.call(this);r?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const e=this.properties,t=[...h(e),...u(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),r=t.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=o;const a=r.fromAttribute(t,e.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){const a=this.constructor;if(!1===o&&(r=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??b)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==r||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[m("elementProperties")]=new Map,$[m("finalized")]=new Map,g?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=e=>e,k=w.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+M,P=`<${S}>`,I=document,U=()=>I.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,T="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,L=/>/g,R=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,V=/"/g,H=/^(?:script|style|textarea|title)$/i,W=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),B=W(1),j=W(2),q=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),X=new WeakMap,Y=I.createTreeWalker(I,129);function Z(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,o=[];let r,a=2===t?"<svg>":3===t?"<math>":"",s=F;for(let t=0;t<i;t++){const i=e[t];let n,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===F?"!--"===l[1]?s=D:void 0!==l[1]?s=L:void 0!==l[2]?(H.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=R):void 0!==l[3]&&(s=R):s===R?">"===l[0]?(s=r??F,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,n=l[1],s=void 0===l[3]?R:'"'===l[3]?V:N):s===V||s===N?s=R:s===D||s===L?s=F:(s=R,r=void 0);const h=s===R&&e[t+1].startsWith("/>")?" ":"";a+=s===F?i+P:c>=0?(o.push(n),i.slice(0,c)+E+i.slice(c)+M+h):i+M+(-2===c?t:h)}return[Z(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class Q{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,a=0;const s=e.length-1,n=this.parts,[l,c]=J(e,t);if(this.el=Q.createElement(l,i),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=Y.nextNode())&&n.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(E)){const t=c[a++],i=o.getAttribute(e).split(M),s=/([.?@])?(.*)/.exec(t);n.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?oe:"?"===s[1]?re:"@"===s[1]?ae:ie}),o.removeAttribute(e)}else e.startsWith(M)&&(n.push({type:6,index:r}),o.removeAttribute(e));if(H.test(o.tagName)){const e=o.textContent.split(M),t=e.length-1;if(t>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],U()),Y.nextNode(),n.push({type:2,index:++r});o.append(e[t],U())}}}else if(8===o.nodeType)if(o.data===S)n.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(M,e+1));)n.push({type:7,index:r}),e+=M.length-1}r++}}static createElement(e,t){const i=I.createElement("template");return i.innerHTML=e,i}}function K(e,t,i=e,o){if(t===q)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const a=z(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=K(e,r._$AS(e,t.values),r,o)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??I).importNode(t,!0);Y.currentNode=o;let r=Y.nextNode(),a=0,s=0,n=i[0];for(;void 0!==n;){if(a===n.index){let t;2===n.type?t=new te(r,r.nextSibling,this,e):1===n.type?t=new n.ctor(r,n.name,n.strings,this,e):6===n.type&&(t=new se(r,this,e)),this._$AV.push(t),n=i[++s]}a!==n?.index&&(r=Y.nextNode(),a++)}return Y.currentNode=I,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),z(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Q.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new ee(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=X.get(e.strings);return void 0===t&&X.set(e.strings,t=new Q(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new te(this.O(U()),this.O(U()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(e,t=this,i,o){const r=this.strings;let a=!1;if(void 0===r)e=K(this,e,t,0),a=!z(e)||e!==this._$AH&&e!==q,a&&(this._$AH=e);else{const o=e;let s,n;for(e=r[0],s=0;s<r.length-1;s++)n=K(this,o[i+s],t,s),n===q&&(n=this._$AH[s]),a||=!z(n)||n!==this._$AH[s],n===G?e=G:e!==G&&(e+=(n??"")+r[s+1]),this._$AH[s]=n}a&&!o&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class oe extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class re extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class ae extends ie{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??G)===q)return;const i=this._$AH,o=e===G&&i!==G||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==G&&(i===G||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const ne=w.litHtmlPolyfillSupport;ne?.(Q,te),(w.litHtmlVersions??=[]).push("3.3.3");const le=globalThis;class ce extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=i?.renderBefore??null;o._$litPart$=r=new te(t.insertBefore(U(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ce._$litElement$=!0,ce.finalized=!0,le.litElementHydrateSupport?.({LitElement:ce});const de=le.litElementPolyfillSupport;de?.({LitElement:ce}),(le.litElementVersions??=[]).push("4.2.2");const he=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ue={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},pe=(e=ue,t,i)=>{const{kind:o,metadata:r}=i;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];t.call(this,i),this.requestUpdate(o,r,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function fe(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function _e(e){return fe({...e,state:!0,attribute:!1})}const ve={card_version:1,stroke_mode:"watt",speed_mode:"absolute",scale_curve:"sqrt",layout_mode:"auto",min_duration:.8,max_duration:5.5,min_stroke:2,max_stroke:7,scale_min:50,scale_max:6e3,smoothing_factor:.35,max_total_particles:30,display_zero_tolerance:0,w_to_kw_threshold:1e3,decimals:2,residual_handling:"clamp",residual_absorb_target:"grid",auto_layout_breakpoint:520},ge="var(--energy-solar-color, #ff9800)",me="var(--energy-grid-consumption-color, #f44336)",ye="var(--energy-grid-return-color, #4caf50)",be="var(--energy-battery-in-color, #4caf50)",xe="var(--energy-battery-out-color, #9c27b0)",$e="var(--energy-home-color, #03a9f4)",we="mdi:solar-power",Ae="mdi:transmission-tower",ke="mdi:battery-high",Ce="mdi:home-lightning-bolt",Ee="mdi:power-plug",Me=s`
  :host {
    display: block;
    box-sizing: border-box;
  }

  ha-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    background: var(--ha-card-background, var(--card-background-color, #1a1f2c));
    border-radius: var(--ha-card-border-radius, 16px);
    border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, rgba(255, 255, 255, 0.08));
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.15));
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-text-color, #e1e7ec);
  }

  .flow-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  svg.flow-svg {
    width: 100%;
    height: auto;
    max-height: 100%;
    overflow: visible;
    display: block;
  }

  /* Wires */
  .flow-wire {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke 0.3s ease, stroke-width 0.3s ease, stroke-opacity 0.3s ease;
  }

  .flow-wire.inactive {
    stroke-dasharray: 4 4;
    stroke-width: 1.8px !important;
  }

  /* Node Elements */
  .node-group {
    cursor: pointer;
    outline: none;
  }

  .node-circle-bg {
    fill: var(--ha-card-background, var(--card-background-color, #1a1f2c));
    stroke-width: 2.5;
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35));
    transition: stroke 0.3s ease, fill 0.3s ease, stroke-width 0.2s ease, filter 0.2s ease;
  }

  .node-mix-segment {
    transition: stroke-dasharray 0.4s ease, stroke-dashoffset 0.4s ease, filter 0.2s ease;
  }

  /* Refined Hover Glow (No scale zoom) */
  .node-group:hover .node-circle-bg,
  .node-group:hover .node-mix-segment {
    filter: drop-shadow(0 0 10px var(--node-hover-color, #38bdf8));
    stroke-width: 3.5px;
  }

  .node-group:focus-visible .node-circle-bg,
  .node-group:focus-visible .node-mix-segment {
    filter: drop-shadow(0 0 12px var(--node-hover-color, #38bdf8));
    stroke-width: 3.5px;
  }

  .node-circle-bg.unavailable {
    stroke: var(--disabled-text-color, #64748b) !important;
    opacity: 0.6;
    stroke-dasharray: 3 3;
  }

  .node-icon-foreign {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    line-height: 1;
    overflow: visible;
  }

  .node-icon-foreign ha-icon {
    width: 100%;
    height: 100%;
    --mdc-icon-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-text-color, #e1e7ec);
  }

  /* Value Inside Circle */
  .node-value {
    font-size: 10px;
    font-weight: 700;
    text-anchor: middle;
    fill: var(--primary-text-color, #e1e7ec);
    font-family: inherit;
    pointer-events: none;
    letter-spacing: -0.2px;
  }

  .node-top-info {
    font-size: 8px;
    font-weight: 700;
    text-anchor: middle;
    fill: var(--secondary-text-color, #94a3b8);
    pointer-events: none;
    font-family: 'JetBrains Mono', monospace;
  }

  .node-directional-value {
    font-size: 8.5px;
    font-weight: 700;
    text-anchor: middle;
    fill: var(--primary-text-color, #e1e7ec);
    font-family: inherit;
    pointer-events: none;
    letter-spacing: -0.2px;
  }

  /* Labels Outside Below Circle (Zero overflow) */
  .node-label-outside {
    font-size: 10px;
    font-weight: 600;
    text-anchor: middle;
    fill: var(--secondary-text-color, #94a3b8);
    text-transform: uppercase;
    letter-spacing: 0.6px;
    pointer-events: none;
  }

  .node-sub-outside {
    font-size: 9px;
    font-weight: 500;
    text-anchor: middle;
    fill: var(--secondary-text-color, #94a3b8);
    font-family: monospace;
    pointer-events: none;
  }

  /* Warning box fallback */
  .warning-box {
    background: rgba(245, 158, 11, 0.15);
    border: 1px solid rgba(245, 158, 11, 0.4);
    color: #fbbf24;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 13px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;function Se(e){if(null==e)return null;const t=String(e).trim();if(""===t||"unavailable"===t||"unknown"===t)return null;const i=t.replace(",",".").replace(/[^0-9.-]/g,""),o=parseFloat(i);return Number.isFinite(o)?o:null}function Pe(e,t){if(!(e&&t&&e.states&&e.states[t]))return{value:0,rawState:"",unit:"",isUnavailable:!0,isUnknown:!1,isValid:!1};const i=e.states[t],o=i.state,r=i.attributes?.unit_of_measurement||"W";if("unavailable"===o)return{value:0,rawState:o,unit:r,isUnavailable:!0,isUnknown:!1,isValid:!1};if("unknown"===o)return{value:0,rawState:o,unit:r,isUnavailable:!1,isUnknown:!0,isValid:!1};const a=Se(o);if(null===a)return{value:0,rawState:o,unit:r,isUnavailable:!1,isUnknown:!0,isValid:!1};return{value:function(e,t){switch(t.trim()){case"kW":case"kVA":case"kvar":return 1e3*e;case"MW":case"MVA":return 1e6*e;case"W":case"VA":case"var":case"A":default:return e;case"mW":case"mA":return.001*e}}(a,r),rawState:o,unit:r,isUnavailable:!1,isUnknown:!1,isValid:!0}}function Ie(e,t,i="solar"){if(!t)return{power:0,isUnavailable:!1,isUnknown:!1,isValid:!1,rawUnit:"W"};const o=t.entity_import||("grid"===i?t.entity_in:void 0),r=t.entity_export||("grid"===i?t.entity_out:void 0),a=t.entity_charge||("battery"===i?t.entity_in:void 0),s=t.entity_discharge||("battery"===i?t.entity_out:void 0),n=Boolean(o||r),l=Boolean(a||s);let c;const d=t.state_of_charge||(t.secondary_info?.entity&&t.secondary_info.entity.includes("soc")?t.secondary_info.entity:void 0);if(d&&e?.states?.[d]){const t=Se(e.states[d].state);null!==t&&(c=`${Math.round(t)}%`)}if("grid"===i&&n){const t=Pe(e,o),i=Pe(e,r),a=t.isValid?Math.max(0,t.value):0,s=i.isValid?Math.max(0,i.value):0;return{power:a-s,inPower:a,outPower:s,isDual:!0,isUnavailable:t.isUnavailable&&i.isUnavailable,isUnknown:t.isUnknown||i.isUnknown,isValid:t.isValid||i.isValid,rawUnit:t.unit||i.unit||"W"}}if("battery"===i&&l){const t=Pe(e,a),i=Pe(e,s),o=t.isValid?Math.max(0,t.value):0,r=i.isValid?Math.max(0,i.value):0;return{power:o-r,inPower:o,outPower:r,isDual:!0,soc:c,isUnavailable:t.isUnavailable&&i.isUnavailable,isUnknown:t.isUnknown||i.isUnknown,isValid:t.isValid||i.isValid,rawUnit:t.unit||i.unit||"W"}}const h=Pe(e,t.entity);let u,p=h.value;if(t.invert&&(p=-p),t.entity_amperage){const i=Pe(e,t.entity_amperage);i.isValid&&(u=i.value)}return{power:p,inPower:p>=0?p:0,outPower:p<0?Math.abs(p):0,isDual:!1,soc:c,amperage:u,isUnavailable:h.isUnavailable,isUnknown:h.isUnknown,isValid:h.isValid,rawUnit:h.unit||"W"}}function Ue(e,t="sqrt"){const i=Math.max(0,Math.min(1,e));switch(t){case"linear":return i;case"sqrt":default:return Math.sqrt(i);case"log":return Math.log(1+9*i)/Math.LN10}}function ze(e,t={}){const i=t.display_zero_tolerance??0,o=t.stroke_mode??"watt",r=t.speed_mode??"absolute",a=t.scale_curve??"sqrt",s=t.min_stroke??2,n=t.max_stroke??7,l=t.scale_min??50,c=t.scale_max??6e3,d=t.min_duration??.8,h=t.max_duration??5.5,u=t.residual_handling??"clamp",p=t.residual_absorb_target??"grid",f=Math.max(0,e.solar||0),_=Math.max(0,e.grid||0),v=Math.max(0,-(e.grid||0)),g=Math.max(0,e.battery||0),m=Math.max(0,-(e.battery||0));let y;y=void 0!==e.home&&null!==e.home&&Number.isFinite(e.home)?Math.max(0,e.home):Math.max(0,f+_+m-v-g);let b=Math.min(f,y),x=f-b,$=y-b,w=Math.min(x,g),A=x-w,k=g-w,C=Math.min(A,v),E=Math.min(m,$),M=$-E,S=m-E,P=Math.min(S,Math.max(0,v-C)),I=Math.min(_,M),U=Math.min(Math.max(0,_-I),k),z=0;const O=y-(b+E+I);Math.abs(O)>i&&("clamp"===u?_>0||I>0?I=Math.max(0,I+O):E>0?E=Math.max(0,E+O):b=Math.max(0,b+O):"absorb"===u?"battery"===p&&(m>0||E>0)?E=Math.max(0,E+O):I=Math.max(0,I+O):z=Math.abs(O));let T=0;e.devices.forEach(e=>{!1!==e.include_in_home&&(T+=Math.max(0,e.power||0))});const F=Math.max(0,y-T),D=[{id:"solar-home",from:"solar",to:"home",value:b,color:ge,targetColor:$e,gradientId:"glow-solar"},{id:"solar-battery",from:"solar",to:"battery",value:w,color:ge,targetColor:be,gradientId:"glow-solar"},{id:"solar-grid",from:"solar",to:"grid",value:C,color:ye,targetColor:ye,gradientId:"glow-grid-export"},{id:"battery-home",from:"battery",to:"home",value:E,color:xe,targetColor:$e,gradientId:"glow-battery-discharge"},{id:"battery-grid",from:"battery",to:"grid",value:P,color:xe,targetColor:ye,gradientId:"glow-battery-discharge"},{id:"grid-home",from:"grid",to:"home",value:I,color:me,targetColor:$e,gradientId:"glow-grid-import"},{id:"grid-battery",from:"grid",to:"battery",value:U,color:me,targetColor:be,gradientId:"glow-grid-import"}];e.devices.forEach(e=>{const t=e.color||"var(--energy-device-color, #00bcd4)";D.push({id:`home-${e.id}`,from:"home",to:e.id,value:Math.max(0,e.power||0),color:t,targetColor:t,gradientId:"glow-device",ampere:e.ampere,isDevice:!0})});const L=D.reduce((e,t)=>e+(t.value>i?t.value:0),0),R=D.map(e=>{const t=e.value>i,u=function(e,t="watt",i="sqrt",o=2,r=7,a=50,s=6e3,n,l=5){if(e<=l)return 1.5;if("fixed"===t)return(o+r)/2;if("ampere"===t){if(null==n)return o;const e=.5;return o+Ue((n-e)/(25-e),i)*(r-o)}return o+Ue((e-a)/(s-a),i)*(r-o)}(e.value,o,a,s,n,l,c,e.ampere,i),p=function(e,t="absolute",i="sqrt",o=.8,r=5.5,a=50,s=5e3,n=0,l=5){if(e<=l)return r;let c=0;return c="relative"===t&&n>0?e/n:(e-a)/(s-a),r-Ue(c,i)*(r-o)}(e.value,r,a,d,h,l,c,L,i);return{id:e.id,from:e.from,to:e.to,value:e.value,ampere:e.ampere,color:e.color,targetColor:e.targetColor,gradientId:e.gradientId,isDevice:e.isDevice,strokeWidth:u,duration:p,isActive:t}});return{arcs:R,homeConsumption:y,untrackedDevicesPower:F,unbalancedPower:z,totalActivePower:L}}function Oe(e,t,i){return{x:e.x+Math.cos(i)*t,y:e.y+Math.sin(i)*t}}function Te(e,t,i=2){if(!Number.isFinite(e))return"0";if(t?.locale)try{return new Intl.NumberFormat(t.locale.language||"en",{minimumFractionDigits:0,maximumFractionDigits:i}).format(e)}catch{}return e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:i})}function Fe(e,t=2,i=1e3,o){const r=Math.abs(e);if(r>=1e6){const i=Te(e/1e6,o,t);return{value:i,unit:"MW",full:`${i} MW`}}if(r>=i){const i=Te(e/1e3,o,t);return{value:i,unit:"kW",full:`${i} kW`}}const a=Te(Math.round(e),o,0);return{value:a,unit:"W",full:`${a} W`}}const De={viewBox:{width:620,height:410},nodes:{solar:{x:175,y:65,radius:36,defaultIcon:we,defaultColor:ge},grid:{x:65,y:200,radius:36,defaultIcon:Ae,defaultColor:me},battery:{x:175,y:335,radius:36,defaultIcon:ke,defaultColor:be},home:{x:285,y:200,radius:38,defaultIcon:Ce,defaultColor:$e}},devicesHorizontal:{rowTopY:80,rowBottomY:320,startX:410,spacingX:120,radius:28}},Le={viewBox:{width:440,height:560},nodes:{solar:{x:220,y:60,radius:36,defaultIcon:we,defaultColor:ge},grid:{x:85,y:175,radius:36,defaultIcon:Ae,defaultColor:me},battery:{x:355,y:175,radius:36,defaultIcon:ke,defaultColor:be},home:{x:220,y:290,radius:38,defaultIcon:Ce,defaultColor:$e}},devicesVertical:{colLeftX:95,colRightX:345,startY:420,spacingY:85,radius:28}};var Re={title:"Power Flow",solar:"Solar",grid:"Grid",battery:"Battery",home:"Home",production:"Production",consumption:"Consumption",import:"Import",export:"Export",charge:"Charge",discharge:"Discharge",inactive:"Inactive",active:"Active",unbalanced:"Unbalanced",not_tracked:"Other Consumption"},Ne={title:"Card Title",solar:"Solar Node",grid:"Grid Node",battery:"Battery Node",home:"Home Node",devices:"Individual Devices",add_device:"Add Device",remove_device:"Remove Device",device_name:"Device Name",device_icon:"Icon",device_color:"Color",entity:"Power Entity",entity_import:"Import Entity",entity_export:"Export Entity",entity_charge:"Charge Entity",entity_discharge:"Discharge Entity",entity_amperage:"Current Entity (Amperes)",invert:"Invert Sign Convention",include_in_home:"Include in Home Total",display_zero:"Display Zero Flow",display_zero_tolerance:"Zero Tolerance (W)",stroke_mode:"Line Thickness Mode",stroke_mode_fixed:"Fixed",stroke_mode_watt:"Dynamic (Watts)",stroke_mode_ampere:"Dynamic (Amperes)",speed_mode:"Particle Speed Mode",speed_mode_absolute:"Absolute (Watts)",speed_mode_relative:"Relative (% of total)",layout_mode:"Layout Mode",layout_auto:"Auto Responsive",layout_horizontal:"Horizontal",layout_vertical:"Vertical (2-Column)",min_duration:"Min Particle Duration (s)",max_duration:"Max Particle Duration (s)",min_stroke:"Min Stroke Width (px)",max_stroke:"Max Stroke Width (px)",scale_min:"Scale Minimum",scale_max:"Scale Maximum",scale_curve:"Scale Curve",smoothing_factor:"Smoothing Factor (EMA)",max_total_particles:"Max Total Particles",residual_handling:"Residual Handling",residual_absorb_target:"Residual Absorb Target"},Ve={missing_entity:"At least one valid power entity is required.",invalid_range:"Invalid range: minimum must be strictly less than maximum."},He={card:Re,editor:Ne,errors:Ve},We={title:"Flusso Energetico",solar:"Solare",grid:"Rete",battery:"Batteria",home:"Casa",production:"Produzione",consumption:"Consumo",import:"Prelevata",export:"Immessa",charge:"Carica",discharge:"Scarica",inactive:"Inattivo",active:"Attivo",unbalanced:"Sbilanciamento",not_tracked:"Altri Consumi"},Be={title:"Titolo Card",solar:"Nodo Solare",grid:"Nodo Rete",battery:"Nodo Batteria",home:"Nodo Casa",devices:"Carichi Individuali",add_device:"Aggiungi Dispositivo",remove_device:"Rimuovi Dispositivo",device_name:"Nome Dispositivo",device_icon:"Icona",device_color:"Colore",entity:"Entità Potenza",entity_import:"Entità Prelievo (Import)",entity_export:"Entità Immissione (Export)",entity_charge:"Entità Carica",entity_discharge:"Entità Scarica",entity_amperage:"Entità Corrente (Ampere)",invert:"Inverti Convenzione Segno",include_in_home:"Includi nel Totale Casa",display_zero:"Mostra Linea a Flusso Zero",display_zero_tolerance:"Tolleranza Zero (W)",stroke_mode:"Modalità Spessore Linea",stroke_mode_fixed:"Fisso",stroke_mode_watt:"Dinamico (Watt)",stroke_mode_ampere:"Dinamico (Ampere)",speed_mode:"Modalità Velocità Particelle",speed_mode_absolute:"Assoluta (Watt)",speed_mode_relative:"Relativa (% sul totale)",layout_mode:"Modalità Layout",layout_auto:"Auto Responsive",layout_horizontal:"Orizzontale",layout_vertical:"Verticale (2 Colonne)",min_duration:"Durata Minima Particelle (s)",max_duration:"Durata Massima Particelle (s)",min_stroke:"Spessore Minimo Linea (px)",max_stroke:"Spessore Massimo Linea (px)",scale_min:"Valore Minimo Scala",scale_max:"Valore Massimo Scala",scale_curve:"Curva di Scala",smoothing_factor:"Fattore di Smoothing (EMA)",max_total_particles:"Max Particelle Totali",residual_handling:"Gestione Residuo Bilancio",residual_absorb_target:"Target Assorbimento Residuo"},je={missing_entity:"È richiesta almeno un'entità di potenza valida.",invalid_range:"Range non valido: il valore minimo deve essere strettamente inferiore al massimo."},qe={card:We,editor:Be,errors:je};const Ge={en:He||Object.freeze({__proto__:null,card:Re,default:He,editor:Ne,errors:Ve}),it:qe||Object.freeze({__proto__:null,card:We,default:qe,editor:Be,errors:je})};function Xe(e,t="en"){const i=t.replace(/['"]+/g,"").replace("-","_").split("_")[0],o=Ge[i]||Ge.en,r=e.split(".");let a=o;for(const t of r){if(!a||"object"!=typeof a||!(t in a)){let t=Ge.en;for(const i of r){if(!t||"object"!=typeof t||!(i in t))return e;t=t[i]}return"string"==typeof t?t:e}a=a[t]}return"string"==typeof a?a:e}let Ye=class extends ce{constructor(){super(...arguments),this._watchedEntities=new Set,this._phaseTracker={},this._actualLayout="horizontal"}static async getConfigElement(){return await Promise.resolve().then(function(){return Je}),document.createElement("simple-power-flow-card-editor")}static getStubConfig(e,t){const i=t||(e?.states?Object.keys(e.states):[]),o=t=>i.find(i=>{const o=i.toLowerCase(),r=e?.states?.[i],a="power"===r?.attributes?.device_class||"W"===r?.attributes?.unit_of_measurement||"kW"===r?.attributes?.unit_of_measurement;return t.some(e=>o.includes(e))&&(a||!e)});return{type:"custom:simple-power-flow-card",card_version:1,title:"Power Flow",solar:{entity:o(["solar","pv","fotovoltaico"])||"sensor.solar_power"},grid:{entity:o(["grid","rete","power_meter","import"])||"sensor.grid_power"},battery:{entity:o(["battery_power","accumulo","batteria"])||"sensor.battery_power"},home:{entity:o(["home_power","house_power","consumo_casa"])||"sensor.home_power"},stroke_mode:"watt",speed_mode:"absolute",layout_mode:"auto",scale_curve:"sqrt"}}static{this.styles=Me}setConfig(e){if(!e)throw new Error(Xe("errors.missing_entity"));const t={...ve,...e};if((!t.card_version||t.card_version<1)&&(t.card_version=1),void 0!==t.scale_min&&void 0!==t.scale_max&&t.scale_min>=t.scale_max)throw new Error(Xe("errors.invalid_range")+" (scale_min < scale_max)");if(void 0!==t.min_duration&&void 0!==t.max_duration&&t.min_duration>=t.max_duration)throw new Error(Xe("errors.invalid_range")+" (min_duration < max_duration)");if(void 0!==t.min_stroke&&void 0!==t.max_stroke&&t.min_stroke>=t.max_stroke)throw new Error(Xe("errors.invalid_range")+" (min_stroke < max_stroke)");this._config=t,this._watchedEntities.clear();const i=e=>{e&&this._watchedEntities.add(e)};[this._config.solar,this._config.grid,this._config.battery,this._config.home].forEach(e=>{e&&(i(e.entity),i(e.entity_in),i(e.entity_out),i(e.entity_import),i(e.entity_export),i(e.entity_charge),i(e.entity_discharge),i(e.state_of_charge),i(e.entity_amperage),i(e.secondary_info?.entity))}),Array.isArray(this._config.devices)&&this._config.devices.forEach(e=>{i(e.entity),i(e.entity_amperage),i(e.secondary_info?.entity)}),this._checkInitialDimensions()}set hass(e){const t=this._hass;if(this._hass=e,!t||!e||!this._config)return void this.requestUpdate("hass",t);let i=!1;for(const o of this._watchedEntities)if(t.states?.[o]!==e.states?.[o]){i=!0;break}i&&this.requestUpdate("hass",t)}getCardSize(){return"vertical"===this._actualLayout?6:4}getGridOptions(){return{columns:12,rows:"auto",min_columns:6,min_rows:3}}getLayoutOptions(){return{grid_columns:12,grid_rows:"auto",grid_min_columns:6,grid_min_rows:3}}connectedCallback(){super.connectedCallback(),this._setupObservers(),this._checkInitialDimensions()}firstUpdated(){this._checkInitialDimensions()}disconnectedCallback(){super.disconnectedCallback(),this._cleanupObservers()}_checkInitialDimensions(){const e=this.getBoundingClientRect(),t=e.width>0?e.width:window.innerWidth;this._updateLayoutFromWidth(t)}_updateLayoutFromWidth(e){if("horizontal"===this._config?.layout_mode)return void("horizontal"!==this._actualLayout&&(this._actualLayout="horizontal"));if("vertical"===this._config?.layout_mode)return void("vertical"!==this._actualLayout&&(this._actualLayout="vertical"));const t=e<=520||window.innerWidth<=520;t&&"vertical"!==this._actualLayout?(this._actualLayout="vertical",this.requestUpdate()):!t&&e>540&&"horizontal"!==this._actualLayout&&(this._actualLayout="horizontal",this.requestUpdate())}_setupObservers(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(e=>{for(const t of e){const e=t.contentRect.width;e<=0||this._updateLayoutFromWidth(e)}}),this._resizeObserver.observe(this)),window.addEventListener("resize",()=>{this._checkInitialDimensions()}),this._intersectionObserver||(this._intersectionObserver=new IntersectionObserver(e=>{const t=this.shadowRoot?.querySelector("svg.flow-svg");if(t)for(const i of e)i.isIntersecting?t.unpauseAnimations&&t.unpauseAnimations():t.pauseAnimations&&t.pauseAnimations()}),this._intersectionObserver.observe(this))}_cleanupObservers(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=void 0),this._intersectionObserver&&(this._intersectionObserver.disconnect(),this._intersectionObserver=void 0)}_handleNodeClick(e){if(!this._hass||!e.entityId)return;const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e.entityId}});this.dispatchEvent(t)}render(){if(!this._config)return B``;const e=this._hass?.language||"en",t=this._config.decimals??1,i=this._config.w_to_kw_threshold??1e3,o=Ie(this._hass,this._config.solar,"solar"),r=Ie(this._hass,this._config.grid,"grid"),a=Ie(this._hass,this._config.battery,"battery"),s=Ie(this._hass,this._config.home,"home"),n=[];Array.isArray(this._config.devices)&&this._config.devices.forEach(e=>{const t=Ie(this._hass,e,"device");n.push({id:e.id,power:t.power,ampere:t.amperage,color:e.color,icon:e.icon,name:e.name,entityId:e.entity,include_in_home:!1!==e.include_in_home})});const l=[];this._watchedEntities.forEach(e=>{this._hass?.states&&!(e in this._hass.states)&&l.push(e)});const c=ze({solar:o.power,grid:r.power,battery:a.power,home:s.isValid?s.power:void 0,devices:n},this._config),d=this._actualLayout,h="horizontal"===d?De:Le,u={};Object.keys(h.nodes).forEach(e=>{u[e]={...h.nodes[e]}});let p=`0 0 ${h.viewBox.width} ${h.viewBox.height}`;if("horizontal"===d){const e=De;if(n.forEach((t,i)=>{const o=Math.floor(i/2),r=i%2,a=e.devicesHorizontal.startX+o*e.devicesHorizontal.spacingX,s=0===r?e.devicesHorizontal.rowTopY:e.devicesHorizontal.rowBottomY;u[t.id]={x:a,y:s,radius:e.devicesHorizontal.radius}}),n.length>2){const t=Math.ceil(n.length/2),i=e.devicesHorizontal.startX+t*e.devicesHorizontal.spacingX+35;p=`0 0 ${Math.max(620,i)} 410`}}else{const e=Le;if(n.forEach((t,i)=>{const o=i%2,r=Math.floor(i/2),a=0===o?e.devicesVertical.colLeftX:e.devicesVertical.colRightX,s=e.devicesVertical.startY+r*e.devicesVertical.spacingY;u[t.id]={x:a,y:s,radius:e.devicesVertical.radius}}),n.length>2){const t=Math.ceil(n.length/2),i=e.devicesVertical.startY+t*e.devicesVertical.spacingY+45;p=`0 0 440 ${Math.max(560,i)}`}}const f=c.arcs.find(e=>"solar-home"===e.id),_=c.arcs.find(e=>"battery-home"===e.id),v=c.arcs.find(e=>"grid-home"===e.id),g=f?.value||0,m=_?.value||0,y=v?.value||0,b=g+m+y,x=[];b>0&&(g>0&&x.push({id:"solar",color:this._config.solar?.color||ge,percentage:g/b,value:g}),m>0&&x.push({id:"battery",color:this._config.battery?.color||xe,percentage:m/b,value:m}),y>0&&x.push({id:"grid",color:this._config.grid?.color||me,percentage:y/b,value:y}));let $,w=this._config.home?.color||$e;if(x.length>0){const e=[...x].sort((e,t)=>t.value-e.value);e[0]&&e[0].value>0&&(w=e[0].color)}const A=this._config.grid?.color||me,k=ye;if(r.isDual)$=[{text:`← ${Fe(r.inPower||0,t,i,this._hass).full}`,color:A},{text:`→ ${Fe(r.outPower||0,t,i,this._hass).full}`,color:k}];else{const e=r.power;$=[{text:`${e>=0?"←":"→"} ${Fe(Math.abs(e),t,i,this._hass).full}`,color:e>=0?A:k}]}let C;const E=this._config.battery?.color||be,M=xe;if(a.isDual)C=[{text:`↓ ${Fe(a.inPower||0,t,i,this._hass).full}`,color:E},{text:`↑ ${Fe(a.outPower||0,t,i,this._hass).full}`,color:M}];else{const e=a.power;C=[{text:`${e>=0?"↓":"↑"} ${Fe(Math.abs(e),t,i,this._hass).full}`,color:e>=0?E:M}]}const S=this._config.display_zero_tolerance??0,P=[{id:"solar",label:this._config.solar?.name||Xe("card.solar",e),icon:this._config.solar?.icon||we,color:this._config.solar?.color||ge,value:Fe(o.power,t,i,this._hass).value,unit:Fe(o.power,t,i,this._hass).unit,amperage:o.amperage,topInfo:void 0!==o.amperage?`${o.amperage} A`:void 0,isActive:o.power>S,isUnavailable:o.isUnavailable,x:u.solar.x,y:u.solar.y,radius:u.solar.radius,entityId:this._config.solar?.entity},{id:"grid",label:this._config.grid?.name||Xe("card.grid",e),icon:this._config.grid?.icon||Ae,color:this._config.grid?.color||(r.power>=0?me:ye),value:Fe(Math.abs(r.power),t,i,this._hass).value,unit:Fe(Math.abs(r.power),t,i,this._hass).unit,extraValues:$,amperage:r.amperage,topInfo:void 0!==r.amperage?`${r.amperage} A`:void 0,isActive:Math.abs(r.power)>S,isUnavailable:r.isUnavailable,x:u.grid.x,y:u.grid.y,radius:u.grid.radius,entityId:this._config.grid?.entity||this._config.grid?.entity_import||this._config.grid?.entity_export},{id:"battery",label:this._config.battery?.name||Xe("card.battery",e),icon:this._config.battery?.icon||ke,color:this._config.battery?.color||(a.power>=0?be:xe),value:Fe(Math.abs(a.power),t,i,this._hass).value,unit:Fe(Math.abs(a.power),t,i,this._hass).unit,extraValues:C,topInfo:a.soc||(void 0!==a.amperage?`${a.amperage} A`:void 0),amperage:a.amperage,isActive:Math.abs(a.power)>S,isUnavailable:a.isUnavailable,x:u.battery.x,y:u.battery.y,radius:u.battery.radius,entityId:this._config.battery?.entity||this._config.battery?.entity_charge||this._config.battery?.entity_discharge},{id:"home",label:this._config.home?.name||Xe("card.home",e),icon:this._config.home?.icon||Ce,color:w,value:Fe(c.homeConsumption,t,i,this._hass).value,unit:Fe(c.homeConsumption,t,i,this._hass).unit,secondaryText:c.untrackedDevicesPower>S?`${Xe("card.not_tracked",e)}: ${Fe(c.untrackedDevicesPower,0,i,this._hass).full}`:void 0,isActive:c.homeConsumption>S,isUnavailable:s.isUnavailable&&!o.isValid&&!r.isValid,x:u.home.x,y:u.home.y,radius:u.home.radius,entityId:this._config.home?.entity,mixSegments:x}];n.forEach(e=>{const o=u[e.id];o&&P.push({id:e.id,label:e.name||e.id,icon:e.icon||Ee,color:e.color||"var(--energy-device-color, #00bcd4)",value:Fe(e.power,t,i,this._hass).value,unit:Fe(e.power,t,i,this._hass).unit,topInfo:void 0!==e.ampere?`${e.ampere} A`:void 0,isActive:e.power>S,isUnavailable:!1,x:o.x,y:o.y,radius:o.radius,entityId:e.entityId})});const I=this.shadowRoot?.querySelector("svg.flow-svg"),U=I?.getCurrentTime?I.getCurrentTime():0,z=c.arcs.filter(e=>e.isActive),O=this._config.max_total_particles??30;let T=3;return z.length*T>O&&(T=Math.max(1,Math.floor(O/z.length))),B`
      <ha-card>
        ${this._config.title?B`<div class="card-header">${this._config.title}</div>`:""}

        ${l.length>0&&!this._config.solar?.entity?.includes("dummy")?B`
          <div class="warning-box">
            <span>⚠️ Entità non trovate in Home Assistant: ${l.join(", ")}</span>
          </div>
        `:""}

        <div class="flow-container">
          <svg class="flow-svg"
               viewBox="${p}"
               role="group"
               aria-label="${this._config.title||"Power Flow Card"}">
            
            ${function(e=[]){return j`
    <defs>
      <!-- Base Gradients Fallbacks -->
      <radialGradient id="glow-solar" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-solar-color, #ff9800)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-solar-color, #ff9800)" stop-opacity="0.7" />
        <stop offset="100%" stop-color="var(--energy-solar-color, #ff9800)" stop-opacity="0" />
      </radialGradient>

      <radialGradient id="glow-grid-import" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-grid-consumption-color, #f44336)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-grid-consumption-color, #f44336)" stop-opacity="0.7" />
        <stop offset="100%" stop-color="var(--energy-grid-consumption-color, #f44336)" stop-opacity="0" />
      </radialGradient>

      <radialGradient id="glow-grid-export" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-grid-return-color, #4caf50)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-grid-return-color, #4caf50)" stop-opacity="0.7" />
        <stop offset="100%" stop-color="var(--energy-grid-return-color, #4caf50)" stop-opacity="0" />
      </radialGradient>

      <radialGradient id="glow-battery-charge" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-battery-in-color, #4caf50)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-battery-in-color, #4caf50)" stop-opacity="0.7" />
        <stop offset="100%" stop-color="var(--energy-battery-in-color, #4caf50)" stop-opacity="0" />
      </radialGradient>

      <radialGradient id="glow-battery-discharge" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-battery-out-color, #9c27b0)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-battery-out-color, #9c27b0)" stop-opacity="0.7" />
        <stop offset="100%" stop-color="var(--energy-battery-out-color, #9c27b0)" stop-opacity="0" />
      </radialGradient>

      <!-- Dynamic Arc Gradients: Each wire/arc gets its own gradient precisely matching its color -->
      ${e.map(e=>j`
        <radialGradient id="glow-arc-${e.id}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
          <stop offset="35%" stop-color="${e.color}" stop-opacity="1" />
          <stop offset="70%" stop-color="${e.color}" stop-opacity="0.7" />
          <stop offset="100%" stop-color="${e.color}" stop-opacity="0" />
        </radialGradient>
      `)}
    </defs>
  `}(c.arcs)}

            <!-- Layer 1: Wires -->
            <g class="wires-layer">
              ${c.arcs.map(e=>{const t=u[e.from],i=u[e.to];if(!t||!i)return j``;const o=function(e,t,i,o){const r=t.x-e.x,a=t.y-e.y,s=Math.atan2(a,r),n=Oe({x:e.x,y:e.y},e.radius,s),l=Oe({x:t.x,y:t.y},t.radius,s+Math.PI);if("horizontal"===i){if("solar-home"===o){const i=Oe({x:e.x,y:e.y},e.radius,.1),o=Oe({x:t.x,y:t.y},t.radius,-Math.PI/2);return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} Q ${t.x.toFixed(1)} ${e.y.toFixed(1)} ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}if("battery-home"===o){const i=Oe({x:e.x,y:e.y},e.radius,-.1),o=Oe({x:t.x,y:t.y},t.radius,Math.PI/2);return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} Q ${t.x.toFixed(1)} ${e.y.toFixed(1)} ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}if("solar-battery"===o){const i=Oe({x:e.x,y:e.y},e.radius,Math.PI/2),o=Oe({x:t.x,y:t.y},t.radius,-Math.PI/2);return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} L ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}if(o&&o.startsWith("home-")){const i=Oe({x:e.x,y:e.y},e.radius,0),o=Oe({x:t.x,y:t.y},t.radius,Math.PI),r=Math.max(40,o.x-i.x),a=i.x+.45*r,s=i.y,n=i.x+.55*r,l=o.y;return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} C ${a.toFixed(1)} ${s.toFixed(1)}, ${n.toFixed(1)} ${l.toFixed(1)}, ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}return`M ${n.x.toFixed(1)} ${n.y.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`}if("solar-home"===o){const i=Oe({x:e.x,y:e.y},e.radius,Math.PI/2),o=Oe({x:t.x,y:t.y},t.radius,-Math.PI/2);return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} L ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}if("grid-battery"===o){const i=Oe({x:e.x,y:e.y},e.radius,0),o=Oe({x:t.x,y:t.y},t.radius,Math.PI);return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} L ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}if(o&&o.startsWith("home-")){const i=Oe({x:e.x,y:e.y},e.radius,Math.PI/2),o=t.x<e.x,r=o?0:Math.PI,a=Oe({x:t.x,y:t.y},t.radius,r),s=Math.max(40,a.y-i.y),n=i.x,l=i.y+.45*s,c=a.x+(o?20:-20),d=i.y+.65*s;return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} C ${n.toFixed(1)} ${l.toFixed(1)}, ${c.toFixed(1)} ${d.toFixed(1)}, ${a.x.toFixed(1)} ${a.y.toFixed(1)}`}return`M ${n.x.toFixed(1)} ${n.y.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`}(t,i,d,e.id);return function(e,t){const i=e.isActive?e.color:e.targetColor||e.color,o=e.isActive?1:.35;return j`
    <path id="path-${e.id}"
          class="flow-wire ${e.isActive?"":"inactive"}"
          d="${t}"
          stroke="${i}"
          stroke-opacity="${o}"
          stroke-width="${e.strokeWidth}" />
  `}(e,o)})}
            </g>

            <!-- Layer 2: Particles -->
            <g class="particles-layer">
              ${c.arcs.map(e=>{if(!e.isActive)return j``;const t=this._phaseTracker[e.id]||{dur:e.duration,lastTime:U,phase:0},i=U-t.lastTime,o=(t.phase+i/t.dur)%1;return this._phaseTracker[e.id]={dur:e.duration,lastTime:U,phase:o},function(e,t,i){if(!e.isActive)return[];const o=`path-${e.id}`,r=[],a=Math.max(5,.75*e.strokeWidth+1.8);for(let s=0;s<t;s++){const n=-(i+s/t)%1*e.duration,l=`anim-${e.id}-${s}`;r.push(j`
      <circle r="${a.toFixed(1)}" fill="url(#glow-arc-${e.id})" pointer-events="none">
        <animateMotion id="${l}"
                       dur="${e.duration.toFixed(2)}s"
                       repeatCount="indefinite"
                       begin="${n.toFixed(2)}s">
          <mpath href="#${o}" xlink:href="#${o}" />
        </animateMotion>
      </circle>
    `)}return r}(e,T,o)})}
            </g>

            <!-- Layer 3: Nodes -->
            <g class="nodes-layer">
              ${P.map(e=>function(e,t){const i=`${e.label}: ${e.value} ${e.unit}${e.secondaryText?` (${e.secondaryText})`:""}`,o=2*Math.PI*e.radius;let r=[];if(e.mixSegments&&e.mixSegments.length>0&&0!==Number(e.value)){let t=0;r=e.mixSegments.map(i=>{const r=i.percentage*o,a=-t;return t+=r,j`
        <circle class="node-mix-segment"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius}"
                fill="none"
                stroke="${i.color}"
                stroke-width="3.5"
                stroke-dasharray="${r.toFixed(2)} ${o.toFixed(2)}"
                stroke-dashoffset="${a.toFixed(2)}"
                transform="rotate(-90 ${e.x} ${e.y})" />
      `})}const a=e.radius<34,s=Boolean(e.extraValues&&e.extraValues.length>0),n=Boolean(e.topInfo);let l=18,c=e.x-9,d=e.y-18,h=e.y+15,u=e.y-15;a?n?(l=15,c=e.x-7.5,u=e.y-15,d=e.y-8,h=e.y+18):(l=18,c=e.x-9,d=e.y-18,h=e.y+15):s&&(e.extraValues?.length||0)>=2?(l=17,c=e.x-8.5,d=e.y-25):n?(l=18,c=e.x-9,u=e.y-20,d=e.y-9,h=e.y+14):(l=20,c=e.x-10,d=e.y-21,h=e.y+13);const p=e.y+e.radius+14,f=e.y+e.radius+26;let _=j`<tspan x="${e.x}">${e.label}</tspan>`;if(e.label.length>11)if(e.label.includes("/")){const t=e.label.split("/");_=j`
        <tspan x="${e.x}" dy="0">${t[0]}/</tspan>
        <tspan x="${e.x}" dy="11">${t.slice(1).join("/")}</tspan>
      `}else if(e.label.includes(" ")){const t=e.label.split(" "),i=Math.ceil(t.length/2),o=t.slice(0,i).join(" "),r=t.slice(i).join(" ");_=j`
        <tspan x="${e.x}" dy="0">${o}</tspan>
        <tspan x="${e.x}" dy="11">${r}</tspan>
      `}return j`
    <g class="node-group"
       tabindex="0"
       role="group"
       style="--node-hover-color: ${e.color};"
       aria-label="${i}"
       @click=${()=>t(e)}
       @keydown=${i=>{"Enter"!==i.key&&" "!==i.key||(i.preventDefault(),t(e))}}>
      
      <!-- Base Background Circle -->
      <circle class="node-circle-bg ${e.isUnavailable?"unavailable":""}"
              cx="${e.x}"
              cy="${e.y}"
              r="${e.radius}"
              stroke="${e.mixSegments&&e.mixSegments.length>0?"transparent":e.color}" />

      <!-- Energy Mix Segments (Home node) -->
      ${r}

      <!-- Top Info (e.g. SoC 65% or Amperage 1 A) -->
      ${n?j`
        <text class="node-top-info" x="${e.x}" y="${u}">
          ${e.topInfo}
        </text>
      `:""}

      <!-- Center Icon -->
      <foreignObject x="${c.toFixed(1)}" y="${d.toFixed(1)}" width="${l}" height="${l}" style="overflow: visible;">
        <div class="node-icon-foreign" xmlns="http://www.w3.org/1999/xhtml">
          <ha-icon icon="${e.icon}"></ha-icon>
        </div>
      </foreignObject>

      <!-- Values Inside Circle -->
      ${s?j`
        ${e.extraValues.map((t,i)=>{const o=1===e.extraValues.length?e.y+13:e.y+6+12*i;return j`
            <text class="node-directional-value" 
                  x="${e.x}" 
                  y="${o}" 
                  style="${t.color?`fill: ${t.color};`:""}">
              ${t.text}
            </text>
          `})}
      `:j`
        <text class="node-value" x="${e.x}" y="${h}">
          ${e.isUnavailable?"--":`${e.value} ${e.unit}`}
        </text>
      `}

      <!-- Outside Label -->
      <text class="node-label-outside" x="${e.x}" y="${p}">
        ${_}
      </text>

      <!-- Optional Secondary Text -->
      ${e.secondaryText&&!s?j`
        <text class="node-sub-outside" x="${e.x}" y="${f}">
          ${e.secondaryText}
        </text>
      `:""}
    </g>
  `}(e,e=>this._handleNodeClick(e)))}
            </g>
          </svg>
        </div>
      </ha-card>
    `}};e([fe({attribute:!1})],Ye.prototype,"_config",void 0),e([_e()],Ye.prototype,"_actualLayout",void 0),Ye=e([he("simple-power-flow-card")],Ye),window.customCards=window.customCards||[],window.customCards.push({type:"simple-power-flow-card",name:"Simple Power Flow Card",description:"An elegant, adaptive power flow card with intelligent Bezier routing and SMIL Dot Glow particles.",preview:!0,documentationURL:"https://github.com/custom-cards/simple-power-flow-card"});let Ze=class extends ce{constructor(){super(...arguments),this._activeTab="general"}static{this.styles=s`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 8px 0;
      font-family: inherit;
    }

    .tabs {
      display: flex;
      border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      gap: 8px;
      margin-bottom: 8px;
      overflow-x: auto;
    }

    .tab-btn {
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      color: var(--secondary-text-color, #94a3b8);
      padding: 8px 12px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s ease;
    }

    .tab-btn:hover {
      color: var(--primary-text-color, #e1e7ec);
    }

    .tab-btn.active {
      color: var(--accent-color, #38bdf8);
      border-bottom-color: var(--accent-color, #38bdf8);
    }

    .form-row {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .form-row label {
      font-size: 12px;
      font-weight: 500;
      color: var(--secondary-text-color, #94a3b8);
    }

    .input-field, select {
      background: var(--card-background-color, #1a1f2c);
      color: var(--primary-text-color, #e1e7ec);
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      border-radius: 8px;
      padding: 8px 12px;
      font-size: 13px;
      font-family: inherit;
      outline: none;
    }

    .input-field:focus, select:focus {
      border-color: var(--accent-color, #38bdf8);
    }

    .color-row {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .color-picker-input {
      width: 38px;
      height: 36px;
      padding: 2px;
      border-radius: 6px;
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.15));
      background: none;
      cursor: pointer;
      outline: none;
    }

    .section-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--accent-color, #38bdf8);
      margin-top: 8px;
      border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      padding-bottom: 4px;
    }

    /* Device Sub-Editor */
    .device-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.1));
      border-radius: 10px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: relative;
    }

    .device-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .device-title {
      font-size: 13px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .device-actions {
      display: flex;
      gap: 4px;
    }

    .icon-btn {
      background: none;
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.15));
      color: var(--secondary-text-color, #94a3b8);
      border-radius: 6px;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 12px;
    }

    .icon-btn:hover {
      background: rgba(255, 255, 255, 0.08);
      color: var(--primary-text-color, #e1e7ec);
    }

    .add-device-btn {
      background: rgba(56, 189, 248, 0.15);
      border: 1px dashed var(--accent-color, #38bdf8);
      color: var(--accent-color, #38bdf8);
      border-radius: 8px;
      padding: 10px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      text-align: center;
      transition: all 0.2s ease;
    }

    .add-device-btn:hover {
      background: rgba(56, 189, 248, 0.25);
    }

    .checkbox-row {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      cursor: pointer;
      margin-top: 4px;
    }

    ha-entity-picker, ha-icon-picker {
      display: block;
      width: 100%;
    }
  `}setConfig(e){this._config={...e}}_valueChanged(e,t){if(!this._config)return;const i={...this._config,[e]:t};this._config=i;const o=new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:i}});this.dispatchEvent(o)}_nodeChanged(e,t,i){if(!this._config)return;const o={...this._config[e]||{},[t]:i};this._valueChanged(e,o)}_addDevice(){const e=[...this._config.devices||[]],t={id:`device_${Date.now()}`,name:`Carico ${e.length+1}`,entity:"",icon:"mdi:power-plug",color:"#00bcd4",include_in_home:!0};e.push(t),this._valueChanged("devices",e)}_removeDevice(e){const t=[...this._config.devices||[]];t.splice(e,1),this._valueChanged("devices",t)}_moveDevice(e,t){const i=[...this._config.devices||[]],o="up"===t?e-1:e+1;if(o<0||o>=i.length)return;const r=i[e];i[e]=i[o],i[o]=r,this._valueChanged("devices",i)}_updateDevice(e,t,i){const o=[...this._config.devices||[]];o[e]={...o[e],[t]:i},this._valueChanged("devices",o)}_renderEntityPicker(e,t,i=["sensor","input_number"]){return customElements.get("ha-entity-picker")?B`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${e||""}
          .includeDomains=${i}
          allow-custom-entity
          @value-changed=${e=>t(e.detail.value)}>
        </ha-entity-picker>
      `:B`
      <input
        class="input-field"
        type="text"
        .value=${e||""}
        @input=${e=>t(e.target.value)}
        placeholder="sensor.example_power"
      />
    `}_renderIconPicker(e,t){return customElements.get("ha-icon-picker")?B`
        <ha-icon-picker
          .hass=${this.hass}
          .value=${e||""}
          @value-changed=${e=>t(e.detail.value)}>
        </ha-icon-picker>
      `:B`
      <input
        class="input-field"
        type="text"
        .value=${e||""}
        @input=${e=>t(e.target.value)}
        placeholder="mdi:power-plug"
      />
    `}_renderColorPicker(e,t,i){const o=e||t,r=o.startsWith("#");return B`
      <div class="color-row">
        <input
          type="color"
          class="color-picker-input"
          .value=${r?o:t}
          @input=${e=>i(e.target.value)}
        />
        <input
          class="input-field"
          style="flex: 1;"
          type="text"
          .value=${e||""}
          placeholder="${t}"
          @input=${e=>i(e.target.value)}
        />
      </div>
    `}render(){if(!this._config)return B``;const e=this.hass?.language||"en";return B`
      <div class="card-config">
        <!-- Navigation Tabs -->
        <div class="tabs">
          <button class="tab-btn ${"general"===this._activeTab?"active":""}" @click=${()=>this._activeTab="general"}>
            Generale
          </button>
          <button class="tab-btn ${"nodes"===this._activeTab?"active":""}" @click=${()=>this._activeTab="nodes"}>
            Nodi Principali
          </button>
          <button class="tab-btn ${"devices"===this._activeTab?"active":""}" @click=${()=>this._activeTab="devices"}>
            Dispositivi (${this._config.devices?.length||0})
          </button>
          <button class="tab-btn ${"advanced"===this._activeTab?"active":""}" @click=${()=>this._activeTab="advanced"}>
            Avanzate & Stile
          </button>
        </div>

        <!-- TAB 1: GENERALE -->
        ${"general"===this._activeTab?B`
          <div class="form-row">
            <label>${Xe("editor.title",e)}</label>
            <input class="input-field" type="text" .value=${this._config.title||""} @input=${e=>this._valueChanged("title",e.target.value)} placeholder="Flusso Energetico" />
          </div>

          <div class="form-row">
            <label>${Xe("editor.layout_mode",e)}</label>
            <select .value=${this._config.layout_mode||"auto"} @change=${e=>this._valueChanged("layout_mode",e.target.value)}>
              <option value="auto">Auto (Smartphone / Tablet / Desktop)</option>
              <option value="horizontal">${Xe("editor.layout_horizontal",e)}</option>
              <option value="vertical">${Xe("editor.layout_vertical",e)}</option>
            </select>
          </div>

          <div class="form-row">
            <label>${Xe("editor.stroke_mode",e)}</label>
            <select .value=${this._config.stroke_mode||"watt"} @change=${e=>this._valueChanged("stroke_mode",e.target.value)}>
              <option value="watt">${Xe("editor.stroke_mode_watt",e)}</option>
              <option value="fixed">${Xe("editor.stroke_mode_fixed",e)}</option>
              <option value="ampere">${Xe("editor.stroke_mode_ampere",e)}</option>
            </select>
          </div>

          <div class="form-row">
            <label>${Xe("editor.speed_mode",e)}</label>
            <select .value=${this._config.speed_mode||"absolute"} @change=${e=>this._valueChanged("speed_mode",e.target.value)}>
              <option value="absolute">${Xe("editor.speed_mode_absolute",e)}</option>
              <option value="relative">${Xe("editor.speed_mode_relative",e)}</option>
            </select>
          </div>
        `:""}

        <!-- TAB 2: NODI PRINCIPALI CON SELETTORE COLORI -->
        ${"nodes"===this._activeTab?B`
          <!-- Solar -->
          <div class="section-title">☀️ ${Xe("editor.solar",e)}</div>
          <div class="form-row">
            <label>${Xe("editor.entity",e)}</label>
            ${this._renderEntityPicker(this._config.solar?.entity,e=>this._nodeChanged("solar","entity",e))}
          </div>
          <div class="form-row">
            <label>Colore Solare & Hover Glow</label>
            ${this._renderColorPicker(this._config.solar?.color,"#ff9800",e=>this._nodeChanged("solar","color",e))}
          </div>

          <!-- Grid -->
          <div class="section-title">⚡ ${Xe("editor.grid",e)}</div>
          <div class="form-row">
            <label>${Xe("editor.entity",e)} (Singola con segno +/-)</label>
            ${this._renderEntityPicker(this._config.grid?.entity,e=>this._nodeChanged("grid","entity",e))}
          </div>
          <div class="form-row">
            <label>Oppure ${Xe("editor.entity_import",e)} (Prelievo)</label>
            ${this._renderEntityPicker(this._config.grid?.entity_import,e=>this._nodeChanged("grid","entity_import",e))}
          </div>
          <div class="form-row">
            <label>${Xe("editor.entity_export",e)} (Immissione)</label>
            ${this._renderEntityPicker(this._config.grid?.entity_export,e=>this._nodeChanged("grid","entity_export",e))}
          </div>
          <div class="form-row">
            <label>Colore Rete & Hover Glow</label>
            ${this._renderColorPicker(this._config.grid?.color,"#f44336",e=>this._nodeChanged("grid","color",e))}
          </div>

          <!-- Battery -->
          <div class="section-title">🔋 ${Xe("editor.battery",e)}</div>
          <div class="form-row">
            <label>${Xe("editor.entity",e)} (Singola +/-)</label>
            ${this._renderEntityPicker(this._config.battery?.entity,e=>this._nodeChanged("battery","entity",e))}
          </div>
          <div class="form-row">
            <label>Oppure ${Xe("editor.entity_charge",e)} (Carica)</label>
            ${this._renderEntityPicker(this._config.battery?.entity_charge,e=>this._nodeChanged("battery","entity_charge",e))}
          </div>
          <div class="form-row">
            <label>${Xe("editor.entity_discharge",e)} (Scarica)</label>
            ${this._renderEntityPicker(this._config.battery?.entity_discharge,e=>this._nodeChanged("battery","entity_discharge",e))}
          </div>
          <div class="form-row">
            <label>Entità Stato di Carica % (SoC)</label>
            ${this._renderEntityPicker(this._config.battery?.state_of_charge,e=>this._nodeChanged("battery","state_of_charge",e))}
          </div>
          <div class="form-row">
            <label>Colore Batteria & Hover Glow</label>
            ${this._renderColorPicker(this._config.battery?.color,"#4caf50",e=>this._nodeChanged("battery","color",e))}
          </div>

          <!-- Home -->
          <div class="section-title">🏠 ${Xe("editor.home",e)}</div>
          <div class="form-row">
            <label>${Xe("editor.entity",e)} (Opzionale: se vuoto, è calcolato automaticamente)</label>
            ${this._renderEntityPicker(this._config.home?.entity,e=>this._nodeChanged("home","entity",e))}
          </div>
          <div class="form-row">
            <label>Colore Base Casa (A flusso zero)</label>
            ${this._renderColorPicker(this._config.home?.color,"#03a9f4",e=>this._nodeChanged("home","color",e))}
          </div>
        `:""}

        <!-- TAB 3: SUB-EDITOR DISPOSITIVI INDIVIDUALI -->
        ${"devices"===this._activeTab?B`
          ${(this._config.devices||[]).map((t,i)=>B`
            <div class="device-card">
              <div class="device-header">
                <div class="device-title">
                  <ha-icon icon="${t.icon||"mdi:power-plug"}"></ha-icon>
                  <span>${t.name||t.id}</span>
                </div>
                <div class="device-actions">
                  <button class="icon-btn" title="Sposta su" @click=${()=>this._moveDevice(i,"up")} ?disabled=${0===i}>▲</button>
                  <button class="icon-btn" title="Sposta giù" @click=${()=>this._moveDevice(i,"down")} ?disabled=${i===(this._config.devices?.length||0)-1}>▼</button>
                  <button class="icon-btn" title="Rimuovi" @click=${()=>this._removeDevice(i)}>✕</button>
                </div>
              </div>

              <div class="form-row">
                <label>${Xe("editor.device_name",e)}</label>
                <input class="input-field" type="text" .value=${t.name||""} @input=${e=>this._updateDevice(i,"name",e.target.value)} placeholder="Pompa di Calore" />
              </div>

              <div class="form-row">
                <label>${Xe("editor.entity",e)} (Potenza Watt)</label>
                ${this._renderEntityPicker(t.entity,e=>this._updateDevice(i,"entity",e))}
              </div>

              <div class="form-row">
                <label>Entità Corrente (Ampere - Opzionale)</label>
                ${this._renderEntityPicker(t.entity_amperage,e=>this._updateDevice(i,"entity_amperage",e))}
              </div>

              <div class="form-row">
                <label>${Xe("editor.device_icon",e)}</label>
                ${this._renderIconPicker(t.icon,e=>this._updateDevice(i,"icon",e))}
              </div>

              <div class="form-row">
                <label>Colore Cerchio, Linea & Particelle</label>
                ${this._renderColorPicker(t.color,"#00bcd4",e=>this._updateDevice(i,"color",e))}
              </div>

              <div class="checkbox-row">
                <input type="checkbox" id="dev_home_${i}" .checked=${!1!==t.include_in_home} @change=${e=>this._updateDevice(i,"include_in_home",e.target.checked)} />
                <label for="dev_home_${i}">${Xe("editor.include_in_home",e)}</label>
              </div>
            </div>
          `)}

          <button class="add-device-btn" @click=${()=>this._addDevice()}>
            + ${Xe("editor.add_device",e)}
          </button>
        `:""}

        <!-- TAB 4: AVANZATE & TOLLERANZE -->
        ${"advanced"===this._activeTab?B`
          <div class="form-row">
            <label>${Xe("editor.display_zero_tolerance",e)}</label>
            <input class="input-field" type="number" .value=${this._config.display_zero_tolerance??5} @input=${e=>this._valueChanged("display_zero_tolerance",parseFloat(e.target.value))} />
          </div>

          <div class="form-row">
            <label>${Xe("editor.scale_curve",e)}</label>
            <select .value=${this._config.scale_curve||"sqrt"} @change=${e=>this._valueChanged("scale_curve",e.target.value)}>
              <option value="sqrt">Radice Quadrata (Sqrt - Consigliata)</option>
              <option value="linear">Lineare</option>
              <option value="log">Logaritmica</option>
            </select>
          </div>

          <div class="form-row">
            <label>${Xe("editor.max_total_particles",e)}</label>
            <input class="input-field" type="number" .value=${this._config.max_total_particles??30} @input=${e=>this._valueChanged("max_total_particles",parseInt(e.target.value))} />
          </div>

          <div class="form-row">
            <label>${Xe("editor.residual_handling",e)}</label>
            <select .value=${this._config.residual_handling||"clamp"} @change=${e=>this._valueChanged("residual_handling",e.target.value)}>
              <option value="clamp">Clamp (Bilancia a zero su arco principale)</option>
              <option value="absorb">Absorb (Assorbe su target esplicito)</option>
              <option value="unbalanced">Unbalanced (Mostra quota sbilanciamento)</option>
            </select>
          </div>
        `:""}
      </div>
    `}};e([fe({attribute:!1})],Ze.prototype,"hass",void 0),e([_e()],Ze.prototype,"_config",void 0),e([_e()],Ze.prototype,"_activeTab",void 0),Ze=e([he("simple-power-flow-card-editor")],Ze);var Je=Object.freeze({__proto__:null,get SimplePowerFlowCardEditor(){return Ze}});console.info("%c SIMPLE-POWER-FLOW-CARD %c v1.0.0 ","color: white; background: #0284c7; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;","color: #0284c7; background: #e0f2fe; font-weight: 700; border-radius: 0 4px 4px 0; padding: 2px 6px;");export{Ye as SimplePowerFlowCard};
