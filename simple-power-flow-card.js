function e(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let a=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new a(i,e,o)},n=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:_}=Object,u=globalThis,m=u.trustedTypes,g=m?m.emptyScript:"",f=u.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!l(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&c(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const a=o?.call(this);r?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),r=t.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=o;const a=r.fromAttribute(t,e.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){const a=this.constructor;if(!1===o&&(r=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??b)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==r||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,f?.({ReactiveElement:$}),(u.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,C=e=>e,A=w.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+M,F=`<${E}>`,P=document,z=()=>P.createComment(""),I=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,D="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,T=/>/g,R=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,W=/"/g,B=/^(?:script|style|textarea|title)$/i,V=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),H=V(1),G=V(2),q=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Z=new WeakMap,Y=P.createTreeWalker(P,129);function X(e,t){if(!N(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(t):t}const Q=(e,t)=>{const i=e.length-1,o=[];let r,a=2===t?"<svg>":3===t?"<math>":"",s=O;for(let t=0;t<i;t++){const i=e[t];let n,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===O?"!--"===l[1]?s=L:void 0!==l[1]?s=T:void 0!==l[2]?(B.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=R):void 0!==l[3]&&(s=R):s===R?">"===l[0]?(s=r??O,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,n=l[1],s=void 0===l[3]?R:'"'===l[3]?W:U):s===W||s===U?s=R:s===L||s===T?s=O:(s=R,r=void 0);const h=s===R&&e[t+1].startsWith("/>")?" ":"";a+=s===O?i+F:c>=0?(o.push(n),i.slice(0,c)+S+i.slice(c)+M+h):i+M+(-2===c?t:h)}return[X(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class J{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,a=0;const s=e.length-1,n=this.parts,[l,c]=Q(e,t);if(this.el=J.createElement(l,i),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=Y.nextNode())&&n.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(S)){const t=c[a++],i=o.getAttribute(e).split(M),s=/([.?@])?(.*)/.exec(t);n.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?oe:"?"===s[1]?re:"@"===s[1]?ae:ie}),o.removeAttribute(e)}else e.startsWith(M)&&(n.push({type:6,index:r}),o.removeAttribute(e));if(B.test(o.tagName)){const e=o.textContent.split(M),t=e.length-1;if(t>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],z()),Y.nextNode(),n.push({type:2,index:++r});o.append(e[t],z())}}}else if(8===o.nodeType)if(o.data===E)n.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(M,e+1));)n.push({type:7,index:r}),e+=M.length-1}r++}}static createElement(e,t){const i=P.createElement("template");return i.innerHTML=e,i}}function K(e,t,i=e,o){if(t===q)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const a=I(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=K(e,r._$AS(e,t.values),r,o)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??P).importNode(t,!0);Y.currentNode=o;let r=Y.nextNode(),a=0,s=0,n=i[0];for(;void 0!==n;){if(a===n.index){let t;2===n.type?t=new te(r,r.nextSibling,this,e):1===n.type?t=new n.ctor(r,n.name,n.strings,this,e):6===n.type&&(t=new se(r,this,e)),this._$AV.push(t),n=i[++s]}a!==n?.index&&(r=Y.nextNode(),a++)}return Y.currentNode=P,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),I(e)?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>N(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new ee(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new J(e)),t}k(e){N(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new te(this.O(z()),this.O(z()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=C(e).nextSibling;C(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(e,t=this,i,o){const r=this.strings;let a=!1;if(void 0===r)e=K(this,e,t,0),a=!I(e)||e!==this._$AH&&e!==q,a&&(this._$AH=e);else{const o=e;let s,n;for(e=r[0],s=0;s<r.length-1;s++)n=K(this,o[i+s],t,s),n===q&&(n=this._$AH[s]),a||=!I(n)||n!==this._$AH[s],n===j?e=j:e!==j&&(e+=(n??"")+r[s+1]),this._$AH[s]=n}a&&!o&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class oe extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class re extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class ae extends ie{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??j)===q)return;const i=this._$AH,o=e===j&&i!==j||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==j&&(i===j||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const ne=w.litHtmlPolyfillSupport;ne?.(J,te),(w.litHtmlVersions??=[]).push("3.3.3");const le=globalThis;class ce extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=i?.renderBefore??null;o._$litPart$=r=new te(t.insertBefore(z(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ce._$litElement$=!0,ce.finalized=!0,le.litElementHydrateSupport?.({LitElement:ce});const de=le.litElementPolyfillSupport;de?.({LitElement:ce}),(le.litElementVersions??=[]).push("4.2.2");const he=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},_e=(e=pe,t,i)=>{const{kind:o,metadata:r}=i;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];t.call(this,i),this.requestUpdate(o,r,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function ue(e){return(t,i)=>"object"==typeof i?_e(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function me(e){return ue({...e,state:!0,attribute:!1})}const ge={node_radius_primary:36,node_radius_secondary:28,node_border_width:2.5,icon_size_primary:18,icon_size_secondary:16,spacing_text_above_icon:4,spacing_text_below_icon:4,spacing_horizontal:120,spacing_vertical:85,font_size_value:10,font_size_label:10,font_size_directional:8.5,font_size_top_info:8,particles_per_arc:3,particle_size_offset:1.8,inactive_wire_opacity:.35,inactive_wire_style:"dashed",hover_glow_radius:10,node_shadow_blur:10,node_shadow_opacity:.35,node_shadow_offset_y:4,show_home_mix_ring:!0,home_glow_mode:"predominant",line_routing_mode:"bezier_curved",bus_lane_spacing:8,bus_corner_radius:20,invert_bus_lane_order:!1,particle_inner_glow:!0,particle_soft_edge:!0},fe={meteor_trail:{enabled:!1,tail_length:.08,glow_intensity:1.5},living_icons:{enabled:!1,battery_type:"gradient",battery_animated:!0,load_animation:"rotate"},glassmorphism:{enabled:!1,intensity:50,neon_core:!0},impact_ripples:{enabled:!1,ripple_size:18,ripple_color:""}},ve={card_version:1,stroke_mode:"watt",speed_mode:"absolute",scale_curve:"sqrt",layout_mode:"auto",min_duration:.8,max_duration:5.5,min_stroke:2,max_stroke:7,scale_min:50,scale_max:6e3,smoothing_factor:.35,max_total_particles:30,display_zero_tolerance:0,w_to_kw_threshold:1e3,decimals:2,residual_handling:"clamp",residual_absorb_target:"grid",auto_layout_breakpoint:520,styles:ge,effects:fe},ye="var(--energy-solar-color, #ff9800)",be="var(--energy-grid-consumption-color, #f44336)",xe="var(--energy-grid-return-color, #4caf50)",$e="var(--energy-battery-in-color, #4caf50)",we="var(--energy-battery-out-color, #9c27b0)",Ce="var(--energy-home-color, #03a9f4)",Ae="mdi:solar-power",ke="mdi:transmission-tower",Se="mdi:battery-high",Me="mdi:home-lightning-bolt",Ee="mdi:power-plug",Fe=s`
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

  .flow-wire.inactive-dashed {
    stroke-dasharray: 4 4;
  }

  /* Node Elements */
  .node-group {
    cursor: pointer;
    outline: none;
  }

  .node-circle-bg {
    fill: var(--ha-card-background, var(--card-background-color, #1a1f2c));
    stroke-width: var(--node-border-width, 2.5px);
    filter: drop-shadow(0 var(--node-shadow-offset-y, 4px) var(--node-shadow-blur, 10px) rgba(0, 0, 0, var(--node-shadow-opacity, 0.35)));
    transition: stroke 0.3s ease, fill 0.3s ease, stroke-width 0.2s ease, filter 0.2s ease;
  }

  .node-mix-segment {
    transition: stroke-dasharray 0.4s ease, stroke-dashoffset 0.4s ease, filter 0.2s ease;
  }

  /* Refined Hover Glow (No scale zoom) */
  .node-group:hover .node-circle-bg,
  .node-group:hover .node-mix-segment {
    filter: drop-shadow(0 0 var(--node-hover-glow-radius, 10px) var(--node-hover-color, #38bdf8));
    stroke-width: calc(var(--node-border-width, 2.5px) + 1px);
  }

  .node-group:focus-visible .node-circle-bg,
  .node-group:focus-visible .node-mix-segment {
    filter: drop-shadow(0 0 calc(var(--node-hover-glow-radius, 10px) + 2px) var(--node-hover-color, #38bdf8));
    stroke-width: calc(var(--node-border-width, 2.5px) + 1px);
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
    font-size: var(--font-size-value, 10px);
    font-weight: 700;
    text-anchor: middle;
    fill: var(--primary-text-color, #e1e7ec);
    font-family: inherit;
    pointer-events: none;
    letter-spacing: -0.2px;
  }

  .node-top-info {
    font-size: var(--font-size-top-info, 8px);
    font-weight: 700;
    text-anchor: middle;
    fill: var(--secondary-text-color, #94a3b8);
    pointer-events: none;
    font-family: 'JetBrains Mono', monospace;
  }

  .node-directional-value {
    font-size: var(--font-size-directional, 8.5px);
    font-weight: 700;
    text-anchor: middle;
    fill: var(--primary-text-color, #e1e7ec);
    font-family: inherit;
    pointer-events: none;
    letter-spacing: -0.2px;
  }

  /* Labels Outside Below Circle (Zero overflow) */
  .node-label-outside {
    font-size: var(--font-size-label, 10px);
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

  /* Living Icons Animations */
  @keyframes spin-icon {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse-icon {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.15);
      opacity: 0.85;
    }
  }

  .node-icon-foreign.animate-rotate ha-icon {
    animation: spin-icon 4s linear infinite;
    transform-origin: center center;
  }

  .node-icon-foreign.animate-pulse ha-icon {
    animation: pulse-icon 2s ease-in-out infinite;
    transform-origin: center center;
  }

  /* Glassmorphism & Neon Core */
  .node-neon-ring {
    fill: none;
    pointer-events: none;
    transition: stroke-opacity 0.3s ease, stroke 0.3s ease;
  }

  .node-glass-glare {
    pointer-events: none;
  }

  /* Battery Liquid Wave */
  .node-liquid-wave {
    pointer-events: none;
    transition: fill 0.3s ease, opacity 0.3s ease;
  }

  /* Impact Ripples Layer */
  @keyframes impact-ripple-anim {
    0% {
      transform: scale(1);
      opacity: 0.8;
      stroke-width: 2.5px;
    }
    100% {
      transform: scale(var(--ripple-max-scale, 1.6));
      opacity: 0;
      stroke-width: 0.5px;
    }
  }

  .impact-ripple-group {
    pointer-events: none;
    transform-origin: center center;
    animation: impact-ripple-anim 0.7s cubic-bezier(0.1, 0.7, 0.3, 1) forwards;
  }

  .impact-ripple-circle {
    fill: none;
    pointer-events: none;
  }

  /* Accessibility: Prefers Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .flow-wire,
    .node-circle-bg,
    .node-mix-segment,
    .node-icon-foreign ha-icon,
    .impact-ripple-group,
    .node-liquid-wave {
      animation: none !important;
      transition: none !important;
    }
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
`;function Pe(e){if(null==e)return null;const t=String(e).trim();if(""===t||"unavailable"===t||"unknown"===t)return null;const i=t.replace(",",".").replace(/[^0-9.-]/g,""),o=parseFloat(i);return Number.isFinite(o)?o:null}function ze(e,t){if(!(e&&t&&e.states&&e.states[t]))return{value:0,rawState:"",unit:"",isUnavailable:!0,isUnknown:!1,isValid:!1};const i=e.states[t],o=i.state,r=i.attributes?.unit_of_measurement||"W";if("unavailable"===o)return{value:0,rawState:o,unit:r,isUnavailable:!0,isUnknown:!1,isValid:!1};if("unknown"===o)return{value:0,rawState:o,unit:r,isUnavailable:!1,isUnknown:!0,isValid:!1};const a=Pe(o);if(null===a)return{value:0,rawState:o,unit:r,isUnavailable:!1,isUnknown:!0,isValid:!1};return{value:function(e,t){switch(t.trim()){case"kW":case"kVA":case"kvar":return 1e3*e;case"MW":case"MVA":return 1e6*e;case"W":case"VA":case"var":case"A":default:return e;case"mW":case"mA":return.001*e}}(a,r),rawState:o,unit:r,isUnavailable:!1,isUnknown:!1,isValid:!0}}function Ie(e,t,i="solar"){if(!t)return{power:0,isUnavailable:!1,isUnknown:!1,isValid:!1,rawUnit:"W"};const o=t.entity_import||("grid"===i?t.entity_in:void 0),r=t.entity_export||("grid"===i?t.entity_out:void 0),a=t.entity_charge||("battery"===i?t.entity_in:void 0),s=t.entity_discharge||("battery"===i?t.entity_out:void 0),n=Boolean(o||r),l=Boolean(a||s);let c,d;const h=t.state_of_charge||(t.secondary_info?.entity&&t.secondary_info.entity.includes("soc")?t.secondary_info.entity:void 0);if(h&&e?.states?.[h]){const t=Pe(e.states[h].state);null!==t&&(d=Math.max(0,Math.min(100,t)),c=`${Math.round(t)}%`)}if("grid"===i&&n){const t=ze(e,o),i=ze(e,r),a=t.isValid?Math.max(0,t.value):0,s=i.isValid?Math.max(0,i.value):0;return{power:a-s,inPower:a,outPower:s,isDual:!0,isUnavailable:t.isUnavailable&&i.isUnavailable,isUnknown:t.isUnknown||i.isUnknown,isValid:t.isValid||i.isValid,rawUnit:t.unit||i.unit||"W"}}if("battery"===i&&l){const t=ze(e,a),i=ze(e,s),o=t.isValid?Math.max(0,t.value):0,r=i.isValid?Math.max(0,i.value):0;return{power:o-r,inPower:o,outPower:r,isDual:!0,soc:c,socPercent:d,isUnavailable:t.isUnavailable&&i.isUnavailable,isUnknown:t.isUnknown||i.isUnknown,isValid:t.isValid||i.isValid,rawUnit:t.unit||i.unit||"W"}}const p=ze(e,t.entity);let _,u=p.value;if(t.invert&&(u=-u),t.entity_amperage){const i=ze(e,t.entity_amperage);i.isValid&&(_=i.value)}return{power:u,inPower:u>=0?u:0,outPower:u<0?Math.abs(u):0,isDual:!1,soc:c,socPercent:d,amperage:_,isUnavailable:p.isUnavailable,isUnknown:p.isUnknown,isValid:p.isValid,rawUnit:p.unit||"W"}}function Ne(e,t="sqrt"){const i=Math.max(0,Math.min(1,e));switch(t){case"linear":return i;case"sqrt":default:return Math.sqrt(i);case"log":return Math.log(1+9*i)/Math.LN10}}function De(e,t={}){const i=t.display_zero_tolerance??0,o=t.stroke_mode??"watt",r=t.speed_mode??"absolute",a=t.scale_curve??"sqrt",s=t.min_stroke??2,n=t.max_stroke??7,l=t.scale_min??50,c=t.scale_max??6e3,d=t.min_duration??.8,h=t.max_duration??5.5,p=t.residual_handling??"clamp",_=t.residual_absorb_target??"grid",u=Math.max(0,e.solar||0),m=Math.max(0,e.grid||0),g=Math.max(0,-(e.grid||0)),f=Math.max(0,e.battery||0),v=Math.max(0,-(e.battery||0));let y;y=void 0!==e.home&&null!==e.home&&Number.isFinite(e.home)?Math.max(0,e.home):Math.max(0,u+m+v-g-f);let b=Math.min(u,y),x=u-b,$=y-b,w=Math.min(x,f),C=x-w,A=f-w,k=Math.min(C,g),S=Math.min(v,$),M=$-S,E=v-S,F=Math.min(E,Math.max(0,g-k)),P=Math.min(m,M),z=Math.min(Math.max(0,m-P),A),I=0;const N=y-(b+S+P);Math.abs(N)>i&&("clamp"===p?m>0||P>0?P=Math.max(0,P+N):S>0?S=Math.max(0,S+N):b=Math.max(0,b+N):"absorb"===p?"battery"===_&&(v>0||S>0)?S=Math.max(0,S+N):P=Math.max(0,P+N):I=Math.abs(N));let D=0;e.devices.forEach(e=>{!1!==e.include_in_home&&(D+=Math.max(0,e.power||0))});const O=Math.max(0,y-D),L=t.solar?.color||ye,T=t.grid?.color||be,R=xe,U=t.battery?.color_charge||t.battery?.color||$e,W=t.battery?.color_discharge||we,B=t.home?.color||Ce,V=[{id:"solar-home",from:"solar",to:"home",value:b,color:L,targetColor:B,gradientId:"glow-solar"},{id:"solar-battery",from:"solar",to:"battery",value:w,color:L,targetColor:U,gradientId:"glow-solar"},{id:"solar-grid",from:"solar",to:"grid",value:k,color:R,targetColor:R,gradientId:"glow-grid-export"},{id:"battery-home",from:"battery",to:"home",value:S,color:W,targetColor:B,gradientId:"glow-battery-discharge"},{id:"battery-grid",from:"battery",to:"grid",value:F,color:W,targetColor:R,gradientId:"glow-battery-discharge"},{id:"grid-home",from:"grid",to:"home",value:P,color:T,targetColor:B,gradientId:"glow-grid-import"},{id:"grid-battery",from:"grid",to:"battery",value:z,color:T,targetColor:U,gradientId:"glow-grid-import"}];e.devices.forEach(e=>{const t=e.color||"var(--energy-device-color, #00bcd4)";V.push({id:`home-${e.id}`,from:"home",to:e.id,value:Math.max(0,e.power||0),color:t,targetColor:t,gradientId:"glow-device",ampere:e.ampere,isDevice:!0})});const H=V.reduce((e,t)=>e+(t.value>i?t.value:0),0),G=V.map(e=>{const t=e.value>i,p=function(e,t="watt",i="sqrt",o=2,r=7,a=50,s=6e3,n,l=5){if(e<=l)return 1.5;if("fixed"===t)return(o+r)/2;if("ampere"===t){if(null==n)return o;const e=.5;return o+Ne((n-e)/(25-e),i)*(r-o)}return o+Ne((e-a)/(s-a),i)*(r-o)}(e.value,o,a,s,n,l,c,e.ampere,i),_=function(e,t="absolute",i="sqrt",o=.8,r=5.5,a=50,s=5e3,n=0,l=5){if(e<=l)return r;let c=0;return c="relative"===t&&n>0?e/n:(e-a)/(s-a),r-Ne(c,i)*(r-o)}(e.value,r,a,d,h,l,c,H,i);return{id:e.id,from:e.from,to:e.to,value:e.value,ampere:e.ampere,color:e.color,targetColor:e.targetColor,gradientId:e.gradientId,isDevice:e.isDevice,strokeWidth:p,duration:_,isActive:t}});return{arcs:G,homeConsumption:y,untrackedDevicesPower:O,unbalancedPower:I,totalActivePower:H}}function Oe(e,t,i){return{x:e.x+Math.cos(i)*t,y:e.y+Math.sin(i)*t}}function Le(e,t,i=2){if(!Number.isFinite(e))return"0";if(t?.locale)try{return new Intl.NumberFormat(t.locale.language||"en",{minimumFractionDigits:0,maximumFractionDigits:i}).format(e)}catch{}return e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:i})}function Te(e,t=2,i=1e3,o){const r=Math.abs(e);if(r>=1e6){const i=Le(e/1e6,o,t);return{value:i,unit:"MW",full:`${i} MW`}}if(r>=i){const i=Le(e/1e3,o,t);return{value:i,unit:"kW",full:`${i} kW`}}const a=Le(Math.round(e),o,0);return{value:a,unit:"W",full:`${a} W`}}const Re={viewBox:{width:620,height:410},nodes:{solar:{x:175,y:65,radius:36,defaultIcon:Ae,defaultColor:ye},grid:{x:65,y:200,radius:36,defaultIcon:ke,defaultColor:be},battery:{x:175,y:335,radius:36,defaultIcon:Se,defaultColor:$e},home:{x:285,y:200,radius:38,defaultIcon:Me,defaultColor:Ce}},devicesHorizontal:{rowTopY:80,rowBottomY:320,startX:410}},Ue={viewBox:{width:440,height:560},nodes:{solar:{x:220,y:60,radius:36,defaultIcon:Ae,defaultColor:ye},grid:{x:85,y:175,radius:36,defaultIcon:ke,defaultColor:be},battery:{x:355,y:175,radius:36,defaultIcon:Se,defaultColor:$e},home:{x:220,y:290,radius:38,defaultIcon:Me,defaultColor:Ce}},devicesVertical:{colLeftX:95,colRightX:345,startY:420}};var We={title:"Power Flow",solar:"Solar",grid:"Grid",battery:"Battery",home:"Home",production:"Production",consumption:"Consumption",import:"Import",export:"Export",charge:"Charge",discharge:"Discharge",inactive:"Inactive",active:"Active",unbalanced:"Unbalanced",not_tracked:"Other Consumption"},Be={title:"Card Title",solar:"Solar Node",grid:"Grid Node",battery:"Battery Node",home:"Home Node",devices:"Individual Devices",add_device:"Add Device",remove_device:"Remove Device",device_name:"Device Name",device_icon:"Icon",device_color:"Color",entity:"Power Entity",entity_import:"Import Entity",entity_export:"Export Entity",entity_charge:"Charge Entity",entity_discharge:"Discharge Entity",entity_amperage:"Current Entity (Amperes)",invert:"Invert Sign Convention",include_in_home:"Include in Home Total",display_zero:"Display Zero Flow",display_zero_tolerance:"Zero Tolerance (W)",stroke_mode:"Line Thickness Mode",stroke_mode_fixed:"Fixed",stroke_mode_watt:"Dynamic (Watts)",stroke_mode_ampere:"Dynamic (Amperes)",speed_mode:"Particle Speed Mode",speed_mode_absolute:"Absolute (Watts)",speed_mode_relative:"Relative (% of total)",layout_mode:"Layout Mode",layout_auto:"Auto Responsive",layout_horizontal:"Horizontal",layout_vertical:"Vertical (2-Column)",min_duration:"Min Particle Duration (s)",max_duration:"Max Particle Duration (s)",min_stroke:"Min Stroke Width (px)",max_stroke:"Max Stroke Width (px)",scale_min:"Scale Minimum",scale_max:"Scale Maximum",scale_curve:"Scale Curve",smoothing_factor:"Smoothing Factor (EMA)",max_total_particles:"Max Total Particles",residual_handling:"Residual Handling",residual_absorb_target:"Residual Absorb Target"},Ve={missing_entity:"At least one valid power entity is required.",invalid_range:"Invalid range: minimum must be strictly less than maximum."},He={card:We,editor:Be,errors:Ve},Ge={title:"Flusso Energetico",solar:"Solare",grid:"Rete",battery:"Batteria",home:"Casa",production:"Produzione",consumption:"Consumo",import:"Prelevata",export:"Immessa",charge:"Carica",discharge:"Scarica",inactive:"Inattivo",active:"Attivo",unbalanced:"Sbilanciamento",not_tracked:"Altri Consumi"},qe={title:"Titolo Card",solar:"Nodo Solare",grid:"Nodo Rete",battery:"Nodo Batteria",home:"Nodo Casa",devices:"Carichi Individuali",add_device:"Aggiungi Dispositivo",remove_device:"Rimuovi Dispositivo",device_name:"Nome Dispositivo",device_icon:"Icona",device_color:"Colore",entity:"Entità Potenza",entity_import:"Entità Prelievo (Import)",entity_export:"Entità Immissione (Export)",entity_charge:"Entità Carica",entity_discharge:"Entità Scarica",entity_amperage:"Entità Corrente (Ampere)",invert:"Inverti Convenzione Segno",include_in_home:"Includi nel Totale Casa",display_zero:"Mostra Linea a Flusso Zero",display_zero_tolerance:"Tolleranza Zero (W)",stroke_mode:"Modalità Spessore Linea",stroke_mode_fixed:"Fisso",stroke_mode_watt:"Dinamico (Watt)",stroke_mode_ampere:"Dinamico (Ampere)",speed_mode:"Modalità Velocità Particelle",speed_mode_absolute:"Assoluta (Watt)",speed_mode_relative:"Relativa (% sul totale)",layout_mode:"Modalità Layout",layout_auto:"Auto Responsive",layout_horizontal:"Orizzontale",layout_vertical:"Verticale (2 Colonne)",min_duration:"Durata Minima Particelle (s)",max_duration:"Durata Massima Particelle (s)",min_stroke:"Spessore Minimo Linea (px)",max_stroke:"Spessore Massimo Linea (px)",scale_min:"Valore Minimo Scala",scale_max:"Valore Massimo Scala",scale_curve:"Curva di Scala",smoothing_factor:"Fattore di Smoothing (EMA)",max_total_particles:"Max Particelle Totali",residual_handling:"Gestione Residuo Bilancio",residual_absorb_target:"Target Assorbimento Residuo"},je={missing_entity:"È richiesta almeno un'entità di potenza valida.",invalid_range:"Range non valido: il valore minimo deve essere strettamente inferiore al massimo."},Ze={card:Ge,editor:qe,errors:je};const Ye={en:He||Object.freeze({__proto__:null,card:We,default:He,editor:Be,errors:Ve}),it:Ze||Object.freeze({__proto__:null,card:Ge,default:Ze,editor:qe,errors:je})};function Xe(e,t="en"){const i=t.replace(/['"]+/g,"").replace("-","_").split("_")[0],o=Ye[i]||Ye.en,r=e.split(".");let a=o;for(const t of r){if(!a||"object"!=typeof a||!(t in a)){let t=Ye.en;for(const i of r){if(!t||"object"!=typeof t||!(i in t))return e;t=t[i]}return"string"==typeof t?t:e}a=a[t]}return"string"==typeof a?a:e}let Qe=class extends ce{constructor(){super(...arguments),this._watchedEntities=new Set,this._particlesMap=new Map,this._particleDomElements={},this._meteorDomElements={},this._meteorGradElements={},this._pathElementsCache={},this._lastAnimTimestamp=0,this._isCardVisible=!0,this._activeRipples=[],this._rippleDomElements={},this._lastRippleTriggerTime={},this._liquidPhase=0,this._lastNodePositions={},this._actualLayout="horizontal"}static async getConfigElement(){return await Promise.resolve().then(function(){return Ke}),document.createElement("simple-power-flow-card-editor")}static getStubConfig(e,t){const i=t||(e?.states?Object.keys(e.states):[]),o=t=>i.find(i=>{const o=i.toLowerCase(),r=e?.states?.[i],a="power"===r?.attributes?.device_class||"W"===r?.attributes?.unit_of_measurement||"kW"===r?.attributes?.unit_of_measurement;return t.some(e=>o.includes(e))&&(a||!e)});return{type:"custom:simple-power-flow-card",card_version:1,title:"Power Flow",solar:{entity:o(["solar","pv","fotovoltaico"])||"sensor.solar_power"},grid:{entity:o(["grid","rete","power_meter","import"])||"sensor.grid_power"},battery:{entity:o(["battery_power","accumulo","batteria"])||"sensor.battery_power"},home:{entity:o(["home_power","house_power","consumo_casa"])||"sensor.home_power"},stroke_mode:"watt",speed_mode:"absolute",layout_mode:"auto",scale_curve:"sqrt",styles:ge,effects:fe}}static{this.styles=Fe}setConfig(e){if(!e)throw new Error(Xe("errors.missing_entity"));const t={...ve,...e,styles:{...ge,...e.styles||{}}};if((!t.card_version||t.card_version<1)&&(t.card_version=1),void 0!==t.scale_min&&void 0!==t.scale_max&&t.scale_min>=t.scale_max)throw new Error(Xe("errors.invalid_range")+" (scale_min < scale_max)");if(void 0!==t.min_duration&&void 0!==t.max_duration&&t.min_duration>=t.max_duration)throw new Error(Xe("errors.invalid_range")+" (min_duration < max_duration)");if(void 0!==t.min_stroke&&void 0!==t.max_stroke&&t.min_stroke>=t.max_stroke)throw new Error(Xe("errors.invalid_range")+" (min_stroke < max_stroke)");this._config=t,this._watchedEntities.clear();const i=e=>{e&&this._watchedEntities.add(e)};[this._config.solar,this._config.grid,this._config.battery,this._config.home].forEach(e=>{e&&(i(e.entity),i(e.entity_in),i(e.entity_out),i(e.entity_import),i(e.entity_export),i(e.entity_charge),i(e.entity_discharge),i(e.state_of_charge),i(e.entity_amperage),i(e.secondary_info?.entity))}),Array.isArray(this._config.devices)&&this._config.devices.forEach(e=>{i(e.entity),i(e.entity_amperage),i(e.secondary_info?.entity)}),this._checkInitialDimensions()}set hass(e){const t=this._hass;if(this._hass=e,!t||!e||!this._config)return void this.requestUpdate("hass",t);let i=!1;for(const o of this._watchedEntities)if(t.states?.[o]!==e.states?.[o]){i=!0;break}i&&this.requestUpdate("hass",t)}getCardSize(){return"vertical"===this._actualLayout?6:4}getGridOptions(){return{columns:12,rows:"auto",min_columns:6,min_rows:3}}getLayoutOptions(){return{grid_columns:12,grid_rows:"auto",grid_min_columns:6,grid_min_rows:3}}connectedCallback(){super.connectedCallback(),this._setupObservers(),this._checkInitialDimensions(),this._startParticleAnimation()}firstUpdated(){this._checkInitialDimensions(),this._startParticleAnimation()}updated(){this._syncParticles()}disconnectedCallback(){super.disconnectedCallback(),this._cleanupObservers(),this._stopParticleAnimation()}_checkInitialDimensions(){const e=this.getBoundingClientRect(),t=e.width>0?e.width:window.innerWidth;this._updateLayoutFromWidth(t)}_updateLayoutFromWidth(e){if("horizontal"===this._config?.layout_mode)return void("horizontal"!==this._actualLayout&&(this._actualLayout="horizontal"));if("vertical"===this._config?.layout_mode)return void("vertical"!==this._actualLayout&&(this._actualLayout="vertical"));const t=this._config?.auto_layout_breakpoint??520,i=e<=t||window.innerWidth<=t;i&&"vertical"!==this._actualLayout?(this._actualLayout="vertical",this.requestUpdate()):!i&&e>t+20&&"horizontal"!==this._actualLayout&&(this._actualLayout="horizontal",this.requestUpdate())}_setupObservers(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(e=>{for(const t of e){const e=t.contentRect.width;e<=0||this._updateLayoutFromWidth(e)}}),this._resizeObserver.observe(this)),window.addEventListener("resize",()=>{this._checkInitialDimensions()}),this._intersectionObserver||(this._intersectionObserver=new IntersectionObserver(e=>{for(const t of e)this._isCardVisible=t.isIntersecting,t.isIntersecting&&(this._lastAnimTimestamp=0,this._startParticleAnimation())}),this._intersectionObserver.observe(this))}_cleanupObservers(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=void 0),this._intersectionObserver&&(this._intersectionObserver.disconnect(),this._intersectionObserver=void 0)}_startParticleAnimation(){this._animFrameId||(this._lastAnimTimestamp=performance.now(),this._animFrameId=requestAnimationFrame(this._animateParticles.bind(this)))}_stopParticleAnimation(){this._animFrameId&&(cancelAnimationFrame(this._animFrameId),this._animFrameId=void 0)}_syncParticles(){if(!this._config)return;this._pathElementsCache={};const e={...ge,...this._config.styles||{}},t=Ie(this._hass,this._config.solar,"solar"),i=Ie(this._hass,this._config.grid,"grid"),o=Ie(this._hass,this._config.battery,"battery"),r=Ie(this._hass,this._config.home,"home"),a=[];Array.isArray(this._config.devices)&&this._config.devices.forEach(e=>{const t=Ie(this._hass,e,"device");a.push({id:e.id,power:t.power,ampere:t.amperage,color:e.color,icon:e.icon,name:e.name,entityId:e.entity,include_in_home:!1!==e.include_in_home})});const s=De({solar:t.power,grid:i.power,battery:o.power,home:r.isValid?r.power:void 0,devices:a},this._config).arcs.filter(e=>e.isActive),n=this._config.effects||fe,l=Boolean(n.meteor_trail?.enabled)?2:1,c=Math.floor((this._config.max_total_particles??30)/l);let d=e.particles_per_arc;s.length*d>c&&(d=Math.max(1,Math.floor(c/s.length)));const h=new Set;s.forEach(t=>{h.add(t.id);const i=1/Math.max(.3,t.duration),o=Math.max(4,.75*t.strokeWidth+(e.particle_size_offset??1.8));for(let e=0;e<d;e++){const r=`${t.id}-${e}`,a=this._particlesMap.get(r);if(a)a.targetSpeed=i,a.radius=o,a.arcColor=t.color,a.targetNodeId=t.to,a.isFadingOut=!1;else{const a=e/d*1.35;this._particlesMap.set(r,{id:r,arcId:t.id,progress:a,prevNormProgress:a%1.35,speed:i,targetSpeed:i,radius:o,totalLength:0,arcColor:t.color,targetNodeId:t.to,isFadingOut:!1})}}for(let e=d;e<10;e++){const i=`${t.id}-${e}`,o=this._particlesMap.get(i);o&&(o.isFadingOut=!0)}});for(const[e,t]of this._particlesMap.entries())h.has(t.arcId)||(t.isFadingOut=!0);this._startParticleAnimation()}_triggerImpactRipple(e,t){const i=performance.now();if(i-(this._lastRippleTriggerTime[e]||0)<180)return;if(this._activeRipples.length>=10)return;this._lastRippleTriggerTime[e]=i;const o=this._lastNodePositions[e];if(!o)return;const r=this._config?.effects||fe,a=r.impact_ripples?.ripple_size??18,s=r.impact_ripples?.ripple_color||t,n=`ripple-${e}-${Math.random().toString(36).substring(2,7)}`;this._activeRipples.push({id:n,targetNodeId:e,x:o.x,y:o.y,radius:o.radius,color:s,startTime:i,duration:700,rippleSize:a})}_animateParticles(e){if(!this._isCardVisible)return void(this._animFrameId=void 0);const t="undefined"!=typeof window&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;this._lastAnimTimestamp||(this._lastAnimTimestamp=e);const i=Math.min((e-this._lastAnimTimestamp)/1e3,.1);this._lastAnimTimestamp=e;const o=this.shadowRoot?.querySelector("g.particles-layer"),r=this.shadowRoot?.querySelector("defs.dynamic-defs"),a=this.shadowRoot?.querySelector("g.ripples-layer");if(!o)return void(this._animFrameId=requestAnimationFrame(this._animateParticles.bind(this)));const s=this._config?.effects||fe,n=Boolean(s.meteor_trail?.enabled&&!t),l=s.meteor_trail?.tail_length??.08,c=s.meteor_trail?.glow_intensity??1.5,d=this._config?.smoothing_factor??.35,h=[];for(const[e,a]of this._particlesMap.entries()){if(t||(a.speed+=(a.targetSpeed-a.speed)*Math.min(1,d*i*10),a.progress+=a.speed*i),a.isFadingOut&&a.progress>=1){h.push(e);continue}const p=a.progress%1.35;if(!t&&!a.isFadingOut&&a.prevNormProgress<1&&p>=1&&s.impact_ripples?.enabled&&this._triggerImpactRipple(a.targetNodeId,a.arcColor),a.prevNormProgress=p,p>1){const t=this._particleDomElements[e];t&&t.setAttribute("opacity","0");const i=this._meteorDomElements[e];i&&i.setAttribute("d","");continue}const _=p;let u=this._pathElementsCache[a.arcId];if(!u){const e=this.shadowRoot?.querySelector(`#path-${a.arcId}`);e&&(this._pathElementsCache[a.arcId]=e,u=e)}if(u&&(a.totalLength&&0!==a.totalLength||(a.totalLength=u.getTotalLength()),a.totalLength>0)){const t=u.getPointAtLength(_*a.totalLength);let i=1;const s=.12;_<s?i=Math.max(0,_/s):_>1-s&&(i=Math.max(0,(1-_)/s)),a.isFadingOut&&(i*=Math.max(0,1-_));let d=this._particleDomElements[e];if(d||(d=document.createElementNS("http://www.w3.org/2000/svg","circle"),d.setAttribute("pointer-events","none"),o.appendChild(d),this._particleDomElements[e]=d),d.setAttribute("cx",t.x.toFixed(2)),d.setAttribute("cy",t.y.toFixed(2)),d.setAttribute("r",a.radius.toFixed(1)),d.setAttribute("fill",`url(#glow-arc-${a.arcId})`),d.setAttribute("opacity",i.toFixed(3)),n&&r){let s=this._meteorDomElements[e],n=this._meteorGradElements[e];if(!n){n=document.createElementNS("http://www.w3.org/2000/svg","linearGradient"),n.setAttribute("id",`meteor-grad-${e}`),n.setAttribute("gradientUnits","userSpaceOnUse");const t=document.createElementNS("http://www.w3.org/2000/svg","stop");t.setAttribute("offset","0%"),t.setAttribute("stop-color",a.arcColor),t.setAttribute("stop-opacity","0");const i=document.createElementNS("http://www.w3.org/2000/svg","stop");i.setAttribute("offset","100%"),i.setAttribute("stop-color",a.arcColor),i.setAttribute("stop-opacity",Math.min(1,c/1.5*.85).toFixed(2)),n.appendChild(t),n.appendChild(i),r.appendChild(n),this._meteorGradElements[e]=n}s||(s=document.createElementNS("http://www.w3.org/2000/svg","path"),s.setAttribute("pointer-events","none"),s.setAttribute("fill","none"),s.setAttribute("stroke-linecap","round"),s.setAttribute("stroke",`url(#meteor-grad-${e})`),o.insertBefore(s,d),this._meteorDomElements[e]=s);const h=Math.max(0,_-l);if(_-h>.001){const e=u.getPointAtLength(h*a.totalLength),o=u.getPointAtLength((h+.33*(_-h))*a.totalLength),r=u.getPointAtLength((h+.66*(_-h))*a.totalLength),l=t,d=`M ${e.x.toFixed(2)} ${e.y.toFixed(2)} C ${o.x.toFixed(2)} ${o.y.toFixed(2)}, ${r.x.toFixed(2)} ${r.y.toFixed(2)}, ${l.x.toFixed(2)} ${l.y.toFixed(2)}`;s.setAttribute("d",d),s.setAttribute("stroke-width",(1.5*a.radius*Math.min(2.5,c)).toFixed(1)),s.setAttribute("opacity",i.toFixed(3)),n.setAttribute("x1",e.x.toFixed(2)),n.setAttribute("y1",e.y.toFixed(2)),n.setAttribute("x2",l.x.toFixed(2)),n.setAttribute("y2",l.y.toFixed(2))}else s.setAttribute("d","")}else{const t=this._meteorDomElements[e];t&&t.parentNode&&(t.parentNode.removeChild(t),delete this._meteorDomElements[e])}}}for(const e of h){this._particlesMap.delete(e);const t=this._particleDomElements[e];t&&t.parentNode&&t.parentNode.removeChild(t),delete this._particleDomElements[e];const i=this._meteorDomElements[e];i&&i.parentNode&&i.parentNode.removeChild(i),delete this._meteorDomElements[e];const o=this._meteorGradElements[e];o&&o.parentNode&&o.parentNode.removeChild(o),delete this._meteorGradElements[e]}if(!t&&s.living_icons?.enabled&&"liquid"===s.living_icons.battery_type&&!1!==s.living_icons.battery_animated){this._liquidPhase=((this._liquidPhase||0)+3*i)%(2*Math.PI);const e=this.shadowRoot?.querySelector("#liquid-wave-battery"),t=this._lastNodePositions.battery;if(e&&t){const i=Ie(this._hass,this._config.battery,"battery").socPercent??50,o=t.y+t.radius-i/100*(2*t.radius),r=3.2*Math.sin(this._liquidPhase),a=`M ${t.x-t.radius} ${o} Q ${t.x-t.radius/2} ${o+r} ${t.x} ${o} T ${t.x+t.radius} ${o} L ${t.x+t.radius} ${t.y+t.radius} L ${t.x-t.radius} ${t.y+t.radius} Z`;e.setAttribute("d",a)}}if(a&&this._activeRipples.length>0){const e=[],i=performance.now();for(const o of this._activeRipples){if(i-o.startTime<o.duration&&!t){e.push(o);let t=this._rippleDomElements[o.id];if(!t){t=document.createElementNS("http://www.w3.org/2000/svg","g"),t.setAttribute("class","impact-ripple-group"),t.setAttribute("style",`--ripple-max-scale: ${(1+o.rippleSize/o.radius).toFixed(2)};`);const e=document.createElementNS("http://www.w3.org/2000/svg","circle");e.setAttribute("class","impact-ripple-circle"),e.setAttribute("cx",o.x.toFixed(1)),e.setAttribute("cy",o.y.toFixed(1)),e.setAttribute("r",o.radius.toFixed(1)),e.setAttribute("stroke",o.color),t.appendChild(e),a.appendChild(t),this._rippleDomElements[o.id]=t}}else{const e=this._rippleDomElements[o.id];e&&e.parentNode&&e.parentNode.removeChild(e),delete this._rippleDomElements[o.id]}}this._activeRipples=e}this._animFrameId=requestAnimationFrame(this._animateParticles.bind(this))}_handleNodeClick(e){if(!this._hass||!e.entityId)return;const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e.entityId}});this.dispatchEvent(t)}render(){if(!this._config)return H``;const e=this._hass?.language||"en",t=this._config.decimals??2,i=this._config.w_to_kw_threshold??1e3,o={...ge,...this._config.styles||{}},r={...fe,...this._config.effects||{}},a=Ie(this._hass,this._config.solar,"solar"),s=Ie(this._hass,this._config.grid,"grid"),n=Ie(this._hass,this._config.battery,"battery"),l=Ie(this._hass,this._config.home,"home"),c=[];Array.isArray(this._config.devices)&&this._config.devices.forEach(e=>{const t=Ie(this._hass,e,"device");c.push({id:e.id,power:t.power,ampere:t.amperage,color:e.color,icon:e.icon,name:e.name,entityId:e.entity,include_in_home:!1!==e.include_in_home})});const d=[];this._watchedEntities.forEach(e=>{this._hass?.states&&!(e in this._hass.states)&&d.push(e)});const h=De({solar:a.power,grid:s.power,battery:n.power,home:l.isValid?l.power:void 0,devices:c},this._config),p=this._actualLayout,_="horizontal"===p?Re:Ue,u=o.node_radius_primary,m=o.node_radius_secondary,g=o.spacing_horizontal,f=o.spacing_vertical,v={};Object.keys(_.nodes).forEach(e=>{v[e]={..._.nodes[e],radius:u}});let y=`0 0 ${_.viewBox.width} ${_.viewBox.height}`;if("horizontal"===p){const e=Re;if(c.forEach((t,i)=>{const o=Math.floor(i/2),r=i%2,a=e.devicesHorizontal.startX+o*g,s=0===r?e.devicesHorizontal.rowTopY:e.devicesHorizontal.rowBottomY;v[t.id]={x:a,y:s,radius:m}}),c.length>2){const t=Math.ceil(c.length/2),i=e.devicesHorizontal.startX+t*g+35;y=`0 0 ${Math.max(620,i)} 410`}}else{const e=Ue;if(c.forEach((t,i)=>{const o=i%2,r=Math.floor(i/2),a=0===o?e.devicesVertical.colLeftX:e.devicesVertical.colRightX,s=e.devicesVertical.startY+r*f;v[t.id]={x:a,y:s,radius:m}}),c.length>2){const t=Math.ceil(c.length/2),i=e.devicesVertical.startY+t*f+45;y=`0 0 440 ${Math.max(560,i)}`}}this._lastNodePositions=v;const b=h.arcs.find(e=>"solar-home"===e.id),x=h.arcs.find(e=>"battery-home"===e.id),$=h.arcs.find(e=>"grid-home"===e.id),w=b?.value||0,C=x?.value||0,A=$?.value||0,k=this._config.display_zero_tolerance??0,S=n.power,M=Math.abs(S)<=k,E=this._config.battery?.color_charge||this._config.battery?.color||$e,F=this._config.battery?.color_discharge||we,P=this._config.battery?.color_idle||"var(--secondary-text-color, #94a3b8)",z=Boolean(this._config.battery?.use_idle_color);let I;I=M?z?P:E:S>0?E:F;const N=w+C+A,D=[];N>0&&(w>0&&D.push({id:"solar",color:this._config.solar?.color||ye,percentage:w/N,value:w}),C>0&&D.push({id:"battery",color:F,percentage:C/N,value:C}),A>0&&D.push({id:"grid",color:this._config.grid?.color||be,percentage:A/N,value:A}));let O,L=this._config.home?.color||Ce;if("predominant"===o.home_glow_mode&&D.length>0){const e=[...D].sort((e,t)=>t.value-e.value);e[0]&&e[0].value>0&&(L=e[0].color)}const T=this._config.grid?.color||be,R=xe;if(s.isDual)O=[{text:`← ${Te(s.inPower||0,t,i,this._hass).full}`,color:T},{text:`→ ${Te(s.outPower||0,t,i,this._hass).full}`,color:R}];else{const e=s.power;O=[{text:`${e>=0?"←":"→"} ${Te(Math.abs(e),t,i,this._hass).full}`,color:e>=0?T:R}]}let U;if(n.isDual)U=[{text:`↓ ${Te(n.inPower||0,t,i,this._hass).full}`,color:E},{text:`↑ ${Te(n.outPower||0,t,i,this._hass).full}`,color:F}];else{const e=M&&z?P:S>=0?E:F;U=[{text:`${S>=0?"↓":"↑"} ${Te(Math.abs(S),t,i,this._hass).full}`,color:e}]}const W=[{id:"solar",label:this._config.solar?.name||Xe("card.solar",e),icon:this._config.solar?.icon||Ae,color:this._config.solar?.color||ye,value:Te(a.power,t,i,this._hass).value,unit:Te(a.power,t,i,this._hass).unit,amperage:a.amperage,topInfo:void 0!==a.amperage?`${a.amperage} A`:void 0,isActive:a.power>k,isUnavailable:a.isUnavailable,x:v.solar.x,y:v.solar.y,radius:v.solar.radius,entityId:this._config.solar?.entity,styles:o,effects:r,isSecondary:!1,iconSize:o.icon_size_primary},{id:"grid",label:this._config.grid?.name||Xe("card.grid",e),icon:this._config.grid?.icon||ke,color:this._config.grid?.color||(s.power>=0?be:xe),value:Te(Math.abs(s.power),t,i,this._hass).value,unit:Te(Math.abs(s.power),t,i,this._hass).unit,extraValues:O,amperage:s.amperage,topInfo:void 0!==s.amperage?`${s.amperage} A`:void 0,isActive:Math.abs(s.power)>k,isUnavailable:s.isUnavailable,x:v.grid.x,y:v.grid.y,radius:v.grid.radius,entityId:this._config.grid?.entity||this._config.grid?.entity_import||this._config.grid?.entity_export,styles:o,effects:r,isSecondary:!1,iconSize:o.icon_size_primary},{id:"battery",label:this._config.battery?.name||Xe("card.battery",e),icon:this._config.battery?.icon||Se,color:I,value:Te(Math.abs(n.power),t,i,this._hass).value,unit:Te(Math.abs(n.power),t,i,this._hass).unit,extraValues:U,topInfo:n.soc||(void 0!==n.amperage?`${n.amperage} A`:void 0),socPercent:n.socPercent,amperage:n.amperage,isActive:Math.abs(n.power)>k,isUnavailable:n.isUnavailable,x:v.battery.x,y:v.battery.y,radius:v.battery.radius,entityId:this._config.battery?.entity||this._config.battery?.entity_charge||this._config.battery?.entity_discharge,styles:o,effects:r,isSecondary:!1,iconSize:o.icon_size_primary},{id:"home",label:this._config.home?.name||Xe("card.home",e),icon:this._config.home?.icon||Me,color:L,value:Te(h.homeConsumption,t,i,this._hass).value,unit:Te(h.homeConsumption,t,i,this._hass).unit,secondaryText:h.untrackedDevicesPower>k?`${Xe("card.not_tracked",e)}: ${Te(h.untrackedDevicesPower,0,i,this._hass).full}`:void 0,isActive:h.homeConsumption>k,isUnavailable:l.isUnavailable&&!a.isValid&&!s.isValid,x:v.home.x,y:v.home.y,radius:v.home.radius,entityId:this._config.home?.entity,mixSegments:D,styles:o,effects:r,isSecondary:!1,iconSize:o.icon_size_primary}];return c.forEach(e=>{const a=v[e.id];a&&W.push({id:e.id,label:e.name||e.id,icon:e.icon||Ee,color:e.color||"var(--energy-device-color, #00bcd4)",value:Te(e.power,t,i,this._hass).value,unit:Te(e.power,t,i,this._hass).unit,topInfo:void 0!==e.ampere?`${e.ampere} A`:void 0,isActive:e.power>k,isUnavailable:!1,x:a.x,y:a.y,radius:a.radius,entityId:e.entityId,styles:o,effects:r,isSecondary:!0,iconSize:o.icon_size_secondary})}),H`
      <ha-card>
        ${this._config.title?H`<div class="card-header">${this._config.title}</div>`:""}

        ${d.length>0&&!this._config.solar?.entity?.includes("dummy")?H`
          <div class="warning-box">
            <span>⚠️ Entità non trovate in Home Assistant: ${d.join(", ")}</span>
          </div>
        `:""}

        <div class="flow-container">
          <svg class="flow-svg"
               viewBox="${y}"
               role="group"
               aria-label="${this._config.title||"Power Flow Card"}">
            
            ${function(e=[],t){const i=t?.particle_inner_glow??!0,o=t?.particle_soft_edge??!0;return G`
    <defs>
      <!-- Base Gradients Fallbacks -->
      <radialGradient id="glow-solar" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${i?"#ffffff":"var(--energy-solar-color, #ff9800)"}" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-solar-color, #ff9800)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-solar-color, #ff9800)" stop-opacity="${o?"0.7":"1"}" />
        <stop offset="100%" stop-color="var(--energy-solar-color, #ff9800)" stop-opacity="${o?"0":"1"}" />
      </radialGradient>

      <radialGradient id="glow-grid-import" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${i?"#ffffff":"var(--energy-grid-consumption-color, #f44336)"}" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-grid-consumption-color, #f44336)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-grid-consumption-color, #f44336)" stop-opacity="${o?"0.7":"1"}" />
        <stop offset="100%" stop-color="var(--energy-grid-consumption-color, #f44336)" stop-opacity="${o?"0":"1"}" />
      </radialGradient>

      <radialGradient id="glow-grid-export" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${i?"#ffffff":"var(--energy-grid-return-color, #4caf50)"}" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-grid-return-color, #4caf50)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-grid-return-color, #4caf50)" stop-opacity="${o?"0.7":"1"}" />
        <stop offset="100%" stop-color="var(--energy-grid-return-color, #4caf50)" stop-opacity="${o?"0":"1"}" />
      </radialGradient>

      <radialGradient id="glow-battery-charge" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${i?"#ffffff":"var(--energy-battery-in-color, #4caf50)"}" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-battery-in-color, #4caf50)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-battery-in-color, #4caf50)" stop-opacity="${o?"0.7":"1"}" />
        <stop offset="100%" stop-color="var(--energy-battery-in-color, #4caf50)" stop-opacity="${o?"0":"1"}" />
      </radialGradient>

      <radialGradient id="glow-battery-discharge" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${i?"#ffffff":"var(--energy-battery-out-color, #9c27b0)"}" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-battery-out-color, #9c27b0)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-battery-out-color, #9c27b0)" stop-opacity="${o?"0.7":"1"}" />
        <stop offset="100%" stop-color="var(--energy-battery-out-color, #9c27b0)" stop-opacity="${o?"0":"1"}" />
      </radialGradient>

      <!-- Dynamic Arc Gradients: Each wire/arc gets its own gradient precisely matching its color -->
      ${e.map(e=>G`
        <radialGradient id="glow-arc-${e.id}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${i?"#ffffff":e.color}" stop-opacity="1" />
          <stop offset="35%" stop-color="${e.color}" stop-opacity="1" />
          <stop offset="70%" stop-color="${e.color}" stop-opacity="${o?"0.7":"1"}" />
          <stop offset="100%" stop-color="${e.color}" stop-opacity="${o?"0":"1"}" />
        </radialGradient>
      `)}
    </defs>
  `}(h.arcs,o)}
            <defs class="dynamic-defs"></defs>

            <!-- Layer 1: Wires -->
            <g class="wires-layer">
              ${(()=>{const e=h.arcs.filter(e=>e.id.startsWith("home-"));return h.arcs.map(t=>{const i=v[t.from],r=v[t.to];if(!i||!r)return G``;const a=t.id.startsWith("home-")?e.findIndex(e=>e.id===t.id):0,s=function(e,t,i,o,r=0,a=1,s){const n=s?.line_routing_mode||"bezier_curved",l=s?.bus_lane_spacing??8,c=s?.bus_corner_radius??20,d=Math.min(12,.4*e.radius),h=Math.min(12,.4*t.radius),p=Math.max(4,e.radius-d),_=Math.max(4,t.radius-h),u=t.x-e.x,m=t.y-e.y,g=Math.atan2(m,u),f=Oe({x:e.x,y:e.y},p,g),v=Oe({x:t.x,y:t.y},_,g+Math.PI);if("horizontal"===i){if("solar-home"===o){const i=Oe({x:e.x,y:e.y},p,.1),o=Oe({x:t.x,y:t.y},_,-Math.PI/2);return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} Q ${t.x.toFixed(1)} ${e.y.toFixed(1)} ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}if("battery-home"===o){const i=Oe({x:e.x,y:e.y},p,-.1),o=Oe({x:t.x,y:t.y},_,Math.PI/2);return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} Q ${t.x.toFixed(1)} ${e.y.toFixed(1)} ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}if("solar-battery"===o){const i=Oe({x:e.x,y:e.y},p,Math.PI/2),o=Oe({x:t.x,y:t.y},_,-Math.PI/2);return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} L ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}if(o&&o.startsWith("home-")){const i=t.y<e.y;if("orthogonal_bus"===n){const o=Math.floor(r/2),n=Math.max(0,Math.ceil(a/2)-1),d=((s?.invert_bus_lane_order?n-o:o)+.5)*l,h=i?e.y-d:e.y+d,u=Math.asin(Math.max(-.9,Math.min(.9,(h-e.y)/p))),m=e.x+Math.cos(u)*p,g=t.x,f=i?t.y+_:t.y-_,v=Math.min(c,.45*Math.abs(g-m),.45*Math.abs(f-h)),y=Math.max(6,v);if(i){const e=g-y,t=h-y;return`M ${m.toFixed(1)} ${h.toFixed(1)} L ${e.toFixed(1)} ${h.toFixed(1)} C ${(e+.55*y).toFixed(1)} ${h.toFixed(1)}, ${g.toFixed(1)} ${(h-.45*y).toFixed(1)}, ${g.toFixed(1)} ${t.toFixed(1)} L ${g.toFixed(1)} ${f.toFixed(1)}`}{const e=g-y,t=h+y;return`M ${m.toFixed(1)} ${h.toFixed(1)} L ${e.toFixed(1)} ${h.toFixed(1)} C ${(e+.55*y).toFixed(1)} ${h.toFixed(1)}, ${g.toFixed(1)} ${(h+.45*y).toFixed(1)}, ${g.toFixed(1)} ${t.toFixed(1)} L ${g.toFixed(1)} ${f.toFixed(1)}`}}{const i=Oe({x:e.x,y:e.y},p,0),o=Oe({x:t.x,y:t.y},_,Math.PI),r=Math.max(40,o.x-i.x),a=i.x+.45*r,s=i.y,n=i.x+.55*r,l=o.y;return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} C ${a.toFixed(1)} ${s.toFixed(1)}, ${n.toFixed(1)} ${l.toFixed(1)}, ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}}return`M ${f.x.toFixed(1)} ${f.y.toFixed(1)} L ${v.x.toFixed(1)} ${v.y.toFixed(1)}`}if("solar-home"===o){const i=Oe({x:e.x,y:e.y},p,Math.PI/2),o=Oe({x:t.x,y:t.y},_,-Math.PI/2);return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} L ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}if("grid-battery"===o){const i=Oe({x:e.x,y:e.y},p,0),o=Oe({x:t.x,y:t.y},_,Math.PI);return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} L ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}if(o&&o.startsWith("home-")){const i=t.x<e.x;if("orthogonal_bus"===n){const o=Math.floor(r/2),n=Math.max(0,Math.ceil(a/2)-1),d=((s?.invert_bus_lane_order?n-o:o)+.5)*l,h=i?e.x-d:e.x+d,u=Math.max(-.9,Math.min(.9,(h-e.x)/p)),m=Math.PI/2+Math.asin(u),g=e.y+Math.sin(m)*p,f=i?t.x+_:t.x-_,v=t.y,y=Math.min(c,.45*Math.abs(f-h),.45*Math.abs(v-g)),b=Math.max(6,y);if(i){const e=v-b,t=h-b;return`M ${h.toFixed(1)} ${g.toFixed(1)} L ${h.toFixed(1)} ${e.toFixed(1)} C ${h.toFixed(1)} ${(e+.55*b).toFixed(1)}, ${(h-.45*b).toFixed(1)} ${v.toFixed(1)}, ${t.toFixed(1)} ${v.toFixed(1)} L ${f.toFixed(1)} ${v.toFixed(1)}`}{const e=v-b,t=h+b;return`M ${h.toFixed(1)} ${g.toFixed(1)} L ${h.toFixed(1)} ${e.toFixed(1)} C ${h.toFixed(1)} ${(e+.55*b).toFixed(1)}, ${(h+.45*b).toFixed(1)} ${v.toFixed(1)}, ${t.toFixed(1)} ${v.toFixed(1)} L ${f.toFixed(1)} ${v.toFixed(1)}`}}{const o=Oe({x:e.x,y:e.y},p,Math.PI/2),r=i?0:Math.PI,a=Oe({x:t.x,y:t.y},_,r),s=Math.max(40,a.y-o.y),n=o.x,l=o.y+.45*s,c=a.x+(i?20:-20),d=o.y+.65*s;return`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} C ${n.toFixed(1)} ${l.toFixed(1)}, ${c.toFixed(1)} ${d.toFixed(1)}, ${a.x.toFixed(1)} ${a.y.toFixed(1)}`}}return`M ${f.x.toFixed(1)} ${f.y.toFixed(1)} L ${v.x.toFixed(1)} ${v.y.toFixed(1)}`}(i,r,p,t.id,a,e.length,o);return function(e,t,i){const o=e.isActive?e.color:e.targetColor||e.color,r=e.isActive?1:i?.inactive_wire_opacity??.35,a=!e.isActive&&"solid"!==i?.inactive_wire_style;return G`
    <path id="path-${e.id}"
          class="flow-wire ${e.isActive?"":"inactive"} ${a?"inactive-dashed":""}"
          d="${t}"
          stroke="${o}"
          stroke-opacity="${r}"
          stroke-width="${e.strokeWidth}" />
  `}(t,s,o)})})()}
            </g>

            <!-- Layer 2: Impact Shockwave Ripples -->
            <g class="ripples-layer"></g>

            <!-- Layer 3: Particles (Managed via continuous RAF Engine for Zero Glitch & Smooth Flow) -->
            <g class="particles-layer"></g>

            <!-- Layer 4: Nodes -->
            <g class="nodes-layer">
              ${W.map(e=>function(e,t,i,o){const r=i||e.styles||{},a=o||e.effects||{},s=`${e.label}: ${e.value} ${e.unit}${e.secondaryText?` (${e.secondaryText})`:""}`,n=2*Math.PI*e.radius;let l=[];const c=!1!==r.show_home_mix_ring;if(c&&e.mixSegments&&e.mixSegments.length>0&&0!==Number(e.value)){let t=0;l=e.mixSegments.map(i=>{const o=i.percentage*n,a=-t;return t+=o,G`
        <circle class="node-mix-segment"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius}"
                fill="none"
                stroke="${i.color}"
                stroke-width="${r.node_border_width??3.5}"
                stroke-dasharray="${o.toFixed(2)} ${n.toFixed(2)}"
                stroke-dashoffset="${a.toFixed(2)}"
                transform="rotate(-90 ${e.x} ${e.y})" />
      `})}const d="solar"===e.id||"grid"===e.id||"battery"===e.id||"home"===e.id,h=void 0!==e.isSecondary?e.isSecondary:!d,p=Boolean(e.extraValues&&e.extraValues.length>0),_=Boolean(p&&(e.extraValues?.length||0)>=2),u=Boolean(e.topInfo),m=e.iconSize||(h?r.icon_size_secondary??16:r.icon_size_primary??18),g=r.spacing_text_above_icon??4,f=r.spacing_text_below_icon??4,v=e.x-m/2;let y=e.y-m/2,b=y-g-2,x=y+m+f+9,$=y+m+f+8,w=$+(r.font_size_directional?r.font_size_directional+3:11.5);h?u?(y=e.y-m/2-1,b=y-g-2,x=y+m+f+8):(y=e.y-m-1,x=y+m+f+8):u&&_?(y=e.y-m/2-4,b=y-g-3,$=y+m+f+8,w=$+(r.font_size_directional?r.font_size_directional+3:11.5)):u&&!_?(y=e.y-m/2-3,b=y-g-3,x=y+m+f+9,$=x):!u&&_?(y=e.y-m-4,$=y+m+f+7,w=$+(r.font_size_directional?r.font_size_directional+3:11.5)):(y=e.y-m-2,x=y+m+f+9);const C=e.y+e.radius+14,A=e.y+e.radius+26;let k=G`<tspan x="${e.x}">${e.label}</tspan>`;if(e.label.length>11)if(e.label.includes("/")){const t=e.label.split("/");k=G`
        <tspan x="${e.x}" dy="0">${t[0]}/</tspan>
        <tspan x="${e.x}" dy="11">${t.slice(1).join("/")}</tspan>
      `}else if(e.label.includes(" ")){const t=e.label.split(" "),i=Math.ceil(t.length/2),o=t.slice(0,i).join(" "),r=t.slice(i).join(" ");k=G`
        <tspan x="${e.x}" dy="0">${o}</tspan>
        <tspan x="${e.x}" dy="11">${r}</tspan>
      `}const S=`\n    --node-hover-color: ${e.color};\n    --node-hover-glow-radius: ${r.hover_glow_radius??10}px;\n    --node-border-width: ${r.node_border_width??2.5}px;\n    --node-shadow-blur: ${r.node_shadow_blur??10}px;\n    --node-shadow-opacity: ${r.node_shadow_opacity??.35};\n    --node-shadow-offset-y: ${r.node_shadow_offset_y??4}px;\n    --font-size-value: ${r.font_size_value??10}px;\n    --font-size-label: ${r.font_size_label??10}px;\n    --font-size-top-info: ${r.font_size_top_info??8}px;\n    --font-size-directional: ${r.font_size_directional??8.5}px;\n  `;let M="";if(a.living_icons?.enabled&&e.isActive&&("home"===e.id||h)){const e=a.living_icons.load_animation||"rotate";"rotate"===e?M="animate-rotate":"pulse"===e&&(M="animate-pulse")}const E="battery"===e.id,F=Boolean(E&&a.living_icons?.enabled&&"liquid"===a.living_icons.battery_type),P=Boolean(E&&a.living_icons?.enabled&&"gradient"===a.living_icons.battery_type),z=Boolean(a.glassmorphism?.enabled),I=(a.glassmorphism?.intensity??50)/50,N=Boolean(z&&!1!==a.glassmorphism?.neon_core);let D="";if(F){const t=e.socPercent??50,i=e.y+e.radius-t/100*(2*e.radius);D=`M ${e.x-e.radius} ${i} Q ${e.x-e.radius/2} ${i-3} ${e.x} ${i} T ${e.x+e.radius} ${i} L ${e.x+e.radius} ${e.y+e.radius} L ${e.x-e.radius} ${e.y+e.radius} Z`}return G`
    <g class="node-group"
       tabindex="0"
       role="group"
       style="${S}"
       aria-label="${s}"
       @click=${()=>t(e)}
       @keydown=${i=>{"Enter"!==i.key&&" "!==i.key||(i.preventDefault(),t(e))}}>

      <defs>
        ${F?G`
          <clipPath id="node-clip-${e.id}">
            <circle cx="${e.x}" cy="${e.y}" r="${e.radius-1}" />
          </clipPath>
        `:""}

        ${P?G`
          <radialGradient id="battery-glow-${e.id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="${e.color}" stop-opacity="${Math.min(.45,(e.socPercent??50)/100*.45).toFixed(2)}" />
            <stop offset="100%" stop-color="${e.color}" stop-opacity="0" />
          </radialGradient>
        `:""}

        ${z?G`
          <linearGradient id="glass-glare-${e.id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="${(.28*I).toFixed(2)}" />
            <stop offset="40%" stop-color="#ffffff" stop-opacity="${(.08*I).toFixed(2)}" />
            <stop offset="65%" stop-color="#ffffff" stop-opacity="0" />
            <stop offset="100%" stop-color="#000000" stop-opacity="${(.22*I).toFixed(2)}" />
          </linearGradient>
        `:""}
      </defs>
      
      <!-- Base Background Circle -->
      <circle class="node-circle-bg ${e.isUnavailable?"unavailable":""}"
              cx="${e.x}"
              cy="${e.y}"
              r="${e.radius}"
              stroke="${c&&e.mixSegments&&e.mixSegments.length>0?"transparent":e.color}" />

      <!-- Energy Mix Segments (Home node) -->
      ${l}

      <!-- Battery Liquid Wave -->
      ${F?G`
        <path id="liquid-wave-${e.id}"
              class="node-liquid-wave"
              clip-path="url(#node-clip-${e.id})"
              fill="${e.color}"
              opacity="0.32"
              d="${D}" />
      `:""}

      <!-- Battery Dynamic Radial Gradient Glow -->
      ${P?G`
        <circle class="node-battery-glow"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius-2}"
                fill="url(#battery-glow-${e.id})"
                pointer-events="none" />
      `:""}

      <!-- Glassmorphism 3D Glare Filter -->
      ${z?G`
        <circle class="node-glass-glare"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius-1}"
                fill="url(#glass-glare-${e.id})" />
      `:""}

      <!-- Neon Core Concentric Inner Glowing Ring -->
      ${N?G`
        <circle class="node-neon-ring"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius-3.5}"
                stroke="${e.color}"
                stroke-width="1.5"
                stroke-opacity="${(.65*I).toFixed(2)}" />
      `:""}

      <!-- Top Info (e.g. SoC 65% or Amperage 1 A) -->
      ${u?G`
        <text class="node-top-info" x="${e.x}" y="${b.toFixed(1)}">
          ${e.topInfo}
        </text>
      `:""}

      <!-- Center Icon with direct pixel dimensions and Living Icon animation class -->
      <foreignObject x="${v.toFixed(1)}" y="${y.toFixed(1)}" width="${m.toFixed(1)}" height="${m.toFixed(1)}" style="overflow: visible;">
        <div class="node-icon-foreign ${M}" xmlns="http://www.w3.org/1999/xhtml" style="width: ${m.toFixed(1)}px; height: ${m.toFixed(1)}px; display: flex; align-items: center; justify-content: center;">
          <ha-icon icon="${e.icon}" style="--mdc-icon-size: ${m.toFixed(1)}px; width: ${m.toFixed(1)}px; height: ${m.toFixed(1)}px; display: flex; align-items: center; justify-content: center;"></ha-icon>
        </div>
      </foreignObject>

      <!-- Values Inside Circle -->
      ${p?G`
        ${e.extraValues.map((t,i)=>{const o=0===i?$:w;return G`
            <text class="node-directional-value" 
                  x="${e.x}" 
                  y="${o.toFixed(1)}" 
                  style="${t.color?`fill: ${t.color};`:""}">
              ${t.text}
            </text>
          `})}
      `:G`
        <text class="node-value" x="${e.x}" y="${x.toFixed(1)}">
          ${e.isUnavailable?"--":`${e.value} ${e.unit}`}
        </text>
      `}

      <!-- Outside Label -->
      <text class="node-label-outside" x="${e.x}" y="${C}">
        ${k}
      </text>

      <!-- Optional Secondary Text -->
      ${e.secondaryText&&!p?G`
        <text class="node-sub-outside" x="${e.x}" y="${A}">
          ${e.secondaryText}
        </text>
      `:""}
    </g>
  `}(e,e=>this._handleNodeClick(e),o,r))}
            </g>
          </svg>
        </div>
      </ha-card>
    `}};e([ue({attribute:!1})],Qe.prototype,"_config",void 0),e([me()],Qe.prototype,"_actualLayout",void 0),Qe=e([he("simple-power-flow-card")],Qe),window.customCards=window.customCards||[],window.customCards.push({type:"simple-power-flow-card",name:"Simple Power Flow Card",description:"An elegant, adaptive power flow card with intelligent Bezier routing and RAF Particle Engine.",preview:!0,documentationURL:"https://github.com/custom-cards/simple-power-flow-card"});let Je=class extends ce{constructor(){super(...arguments),this._activeTab="general"}static{this.styles=s`
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

    .slider-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .slider-row input[type="range"] {
      flex: 1;
      accent-color: var(--accent-color, #38bdf8);
      cursor: pointer;
    }

    .slider-num-input {
      width: 60px;
      background: var(--card-background-color, #1a1f2c);
      color: var(--primary-text-color, #e1e7ec);
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      border-radius: 6px;
      padding: 4px 6px;
      font-size: 12px;
      text-align: right;
    }

    .slider-unit {
      font-size: 12px;
      color: var(--secondary-text-color, #94a3b8);
      min-width: 20px;
    }

    .checkbox-row {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-size: 13px;
      color: var(--primary-text-color, #e1e7ec);
    }

    .section-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--accent-color, #38bdf8);
      margin-top: 12px;
      border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
      padding-bottom: 4px;
    }

    .device-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
      border-radius: 8px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      position: relative;
    }

    .device-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      font-size: 13px;
    }

    .btn-icon {
      background: none;
      border: none;
      color: var(--secondary-text-color, #94a3b8);
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-icon:hover {
      color: var(--primary-text-color, #e1e7ec);
      background: rgba(255, 255, 255, 0.05);
    }

    .btn-add {
      background: var(--accent-color, #38bdf8);
      color: #0f172a;
      border: none;
      border-radius: 8px;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: opacity 0.2s;
    }

    .btn-add:hover {
      opacity: 0.9;
    }
  `}setConfig(e){this._config=e}_valueChanged(e,t){if(!this._config||!this.hass)return;const i={...this._config,[e]:t};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}_styleChanged(e,t){if(!this._config)return;const i={...this._config.styles||ge,[e]:t};this._valueChanged("styles",i)}_effectChanged(e,t,i){if(!this._config)return;const o=this._config.effects||fe,r={...o[e]||fe[e],[t]:i},a={...o,[e]:r};this._valueChanged("effects",a)}_nodeChanged(e,t,i){if(!this._config)return;const o={...this._config[e]||{},[t]:i};this._valueChanged(e,o)}_addDevice(){const e=[...this._config.devices||[]],t={id:`device_${Date.now()}`,name:`Carico ${e.length+1}`,entity:"",icon:"mdi:power-plug",color:"#00bcd4",include_in_home:!0};e.push(t),this._valueChanged("devices",e)}_removeDevice(e){const t=[...this._config.devices||[]];t.splice(e,1),this._valueChanged("devices",t)}_moveDevice(e,t){const i=[...this._config.devices||[]],o="up"===t?e-1:e+1;if(o<0||o>=i.length)return;const r=i[e];i[e]=i[o],i[o]=r,this._valueChanged("devices",i)}_updateDevice(e,t,i){const o=[...this._config.devices||[]];o[e]={...o[e],[t]:i},this._valueChanged("devices",o)}_renderSliderWithNumber(e,t,i,o,r,a,s){return H`
      <div class="form-row">
        <label>${e}</label>
        <div class="slider-row">
          <input
            type="range"
            min="${i}"
            max="${o}"
            step="${r}"
            .value=${t}
            @input=${e=>s(parseFloat(e.target.value))}
          />
          <input
            type="number"
            class="slider-num-input"
            step="${r}"
            .value=${t}
            @input=${e=>s(parseFloat(e.target.value)||0)}
          />
          <span class="slider-unit">${a}</span>
        </div>
      </div>
    `}_renderEntityPicker(e,t,i=["sensor","input_number"]){return customElements.get("ha-entity-picker")?H`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${e||""}
          .includeDomains=${i}
          allow-custom-entity
          @value-changed=${e=>t(e.detail.value)}>
        </ha-entity-picker>
      `:H`
      <input
        class="input-field"
        type="text"
        .value=${e||""}
        @input=${e=>t(e.target.value)}
        placeholder="sensor.example_power"
      />
    `}_renderIconPicker(e,t){return customElements.get("ha-icon-picker")?H`
        <ha-icon-picker
          .hass=${this.hass}
          .value=${e||""}
          @value-changed=${e=>t(e.detail.value)}>
        </ha-icon-picker>
      `:H`
      <input
        class="input-field"
        type="text"
        .value=${e||""}
        @input=${e=>t(e.target.value)}
        placeholder="mdi:power-plug"
      />
    `}_renderColorPicker(e,t,i){const o=e||t,r=o.startsWith("#");return H`
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
    `}render(){if(!this._config)return H``;const e=this.hass?.language||"en",t=this._config.styles||ge;return H`
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
          <button class="tab-btn ${"styles"===this._activeTab?"active":""}" @click=${()=>this._activeTab="styles"}>
            Stile & Dimensioni
          </button>
          <button class="tab-btn ${"effects"===this._activeTab?"active":""}" @click=${()=>this._activeTab="effects"}>
            Effetti Visivi ✨
          </button>
          <button class="tab-btn ${"advanced"===this._activeTab?"active":""}" @click=${()=>this._activeTab="advanced"}>
            Avanzate & Motore
          </button>
        </div>

        <!-- TAB 1: GENERALE -->
        ${"general"===this._activeTab?H`
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
        ${"nodes"===this._activeTab?H`
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
            <label>Colore Carica Batteria (In)</label>
            ${this._renderColorPicker(this._config.battery?.color_charge||this._config.battery?.color,"#4caf50",e=>this._nodeChanged("battery","color_charge",e))}
          </div>
          <div class="form-row">
            <label>Colore Scarica Batteria (Out)</label>
            ${this._renderColorPicker(this._config.battery?.color_discharge,"#9c27b0",e=>this._nodeChanged("battery","color_discharge",e))}
          </div>
          <div class="checkbox-row" style="margin-top: 4px;">
            <input
              type="checkbox"
              id="battery_use_idle_color"
              .checked=${this._config.battery?.use_idle_color??!1}
              @change=${e=>this._nodeChanged("battery","use_idle_color",e.target.checked)}
            />
            <label for="battery_use_idle_color">Attiva Colore Dedicato Batteria Inattiva / Idle (0 W)</label>
          </div>
          ${this._config.battery?.use_idle_color?H`
            <div class="form-row">
              <label>Colore Batteria Inattiva (Idle)</label>
              ${this._renderColorPicker(this._config.battery?.color_idle,"#94a3b8",e=>this._nodeChanged("battery","color_idle",e))}
            </div>
          `:""}

          <!-- Home -->
          <div class="section-title">🏠 ${Xe("editor.home",e)}</div>
          <div class="form-row">
            <label>${Xe("editor.entity",e)} (Opzionale: se vuoto, calcolato da flussi)</label>
            ${this._renderEntityPicker(this._config.home?.entity,e=>this._nodeChanged("home","entity",e))}
          </div>
          <div class="form-row">
            <label>Colore Base Casa (A flusso zero)</label>
            ${this._renderColorPicker(this._config.home?.color,"#03a9f4",e=>this._nodeChanged("home","color",e))}
          </div>
        `:""}

        <!-- TAB 3: SUB-EDITOR DISPOSITIVI INDIVIDUALI -->
        ${"devices"===this._activeTab?H`
          ${(this._config.devices||[]).map((t,i)=>H`
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

        <!-- TAB 4: STILE & PERSONALIZZAZIONE VISIVA -->
        ${"styles"===this._activeTab?H`
          <div class="section-title">🔘 Dimensioni Nodi & Cerchi</div>
          ${this._renderSliderWithNumber("Raggio Nodi Primari (Solare, Rete, Batteria, Casa)",t.node_radius_primary??36,15,80,1,"px",e=>this._styleChanged("node_radius_primary",e))}
          ${this._renderSliderWithNumber("Raggio Carichi Secondari",t.node_radius_secondary??28,10,60,1,"px",e=>this._styleChanged("node_radius_secondary",e))}
          ${this._renderSliderWithNumber("Spessore Bordo Cerchi",t.node_border_width??2.5,.5,12,.5,"px",e=>this._styleChanged("node_border_width",e))}

          <div class="section-title">🌑 Ombreggiatura & Profondità 3D Cerchi</div>
          ${this._renderSliderWithNumber("Sfocatura Ombra Cerchi (Blur)",t.node_shadow_blur??10,0,40,1,"px",e=>this._styleChanged("node_shadow_blur",e))}
          ${this._renderSliderWithNumber("Opacità Ombra Cerchi",t.node_shadow_opacity??.35,0,1,.05,"",e=>this._styleChanged("node_shadow_opacity",e))}
          ${this._renderSliderWithNumber("Offset Verticale Ombra (Dislocamento Y)",t.node_shadow_offset_y??4,-10,30,1,"px",e=>this._styleChanged("node_shadow_offset_y",e))}

          <div class="section-title">🎯 Dimensioni Icone</div>
          ${this._renderSliderWithNumber("Dimensione Icone Nodi Primari",t.icon_size_primary??18,8,50,1,"px",e=>this._styleChanged("icon_size_primary",e))}
          ${this._renderSliderWithNumber("Dimensione Icone Carichi / Dispositivi",t.icon_size_secondary??16,6,45,1,"px",e=>this._styleChanged("icon_size_secondary",e))}

          <div class="section-title">🔤 Spaziature Verticali Interne & Tipografia</div>
          ${this._renderSliderWithNumber("Spazio Testo Sopra Icona (SoC % / Ampere)",t.spacing_text_above_icon??4,0,40,1,"px",e=>this._styleChanged("spacing_text_above_icon",e))}
          ${this._renderSliderWithNumber("Spazio Testo Sotto Icona (Watt / Frecce)",t.spacing_text_below_icon??4,0,40,1,"px",e=>this._styleChanged("spacing_text_below_icon",e))}
          ${this._renderSliderWithNumber("Font Valori Potenza (Watt / kW)",t.font_size_value??10,6,30,.5,"px",e=>this._styleChanged("font_size_value",e))}
          ${this._renderSliderWithNumber("Font Etichette Esterne (Nomi nodi)",t.font_size_label??10,6,25,.5,"px",e=>this._styleChanged("font_size_label",e))}
          ${this._renderSliderWithNumber("Font Frecce Direzionali (In / Out)",t.font_size_directional??8.5,5,22,.5,"px",e=>this._styleChanged("font_size_directional",e))}
          ${this._renderSliderWithNumber("Font Info Superiori (SoC % e Ampere)",t.font_size_top_info??8,5,22,.5,"px",e=>this._styleChanged("font_size_top_info",e))}

          <div class="section-title">📐 Spaziature Griglia Layout</div>
          ${this._renderSliderWithNumber("Spaziatura Orizzontale Colonne Dispositivi",t.spacing_horizontal??120,40,300,5,"px",e=>this._styleChanged("spacing_horizontal",e))}
          ${this._renderSliderWithNumber("Spaziatura Verticale Righe Dispositivi",t.spacing_vertical??85,30,250,5,"px",e=>this._styleChanged("spacing_vertical",e))}
          ${this._renderSliderWithNumber("Soglia Passaggio Layout Mobile (Auto Breakpoint)",this._config.auto_layout_breakpoint??520,200,1200,10,"px",e=>this._valueChanged("auto_layout_breakpoint",e))}

          <div class="section-title">🛣️ Geometria Cavi & Routing Carichi</div>
          <div class="form-row">
            <label>Modalità Percorso Linee Dispositivi</label>
            <select .value=${t.line_routing_mode||"bezier_curved"} @change=${e=>this._styleChanged("line_routing_mode",e.target.value)}>
              <option value="bezier_curved">Archi Curvi Diretti (Bezier)</option>
              <option value="orthogonal_bus">Canale Centrale a Bus (Ortogonale Morbido)</option>
            </select>
          </div>
          ${"orthogonal_bus"===t.line_routing_mode?H`
            ${this._renderSliderWithNumber("Spaziatura Corsie Parallele Bus",t.bus_lane_spacing??8,4,30,1,"px",e=>this._styleChanged("bus_lane_spacing",e))}
            ${this._renderSliderWithNumber("Raggio Curva Raccordo 90°",t.bus_corner_radius??20,6,50,1,"px",e=>this._styleChanged("bus_corner_radius",e))}
            <div class="checkbox-row" style="margin-top: 4px;">
              <input
                type="checkbox"
                id="invert_bus_lane_order"
                .checked=${t.invert_bus_lane_order??!1}
                @change=${e=>this._styleChanged("invert_bus_lane_order",e.target.checked)}
              />
              <label for="invert_bus_lane_order">Inverti Ordine Corsie Bus (Nodo più lontano su corsia interna)</label>
            </div>
          `:""}

          <div class="section-title">⚡ Linee di Flusso & Particelle</div>
          ${this._renderSliderWithNumber("Particelle per Linea Attiva",t.particles_per_arc??3,1,15,1,"",e=>this._styleChanged("particles_per_arc",e))}
          ${this._renderSliderWithNumber("Dimensione Extra Particella Luminosa",t.particle_size_offset??1.8,0,15,.5,"px",e=>this._styleChanged("particle_size_offset",e))}
          
          <div class="checkbox-row" style="margin-top: 4px;">
            <input
              type="checkbox"
              id="particle_inner_glow"
              .checked=${!1!==t.particle_inner_glow}
              @change=${e=>this._styleChanged("particle_inner_glow",e.target.checked)}
            />
            <label for="particle_inner_glow">Bagliore Bianco Interno Particelle (Inner Glow)</label>
          </div>

          <div class="checkbox-row" style="margin-top: 4px;">
            <input
              type="checkbox"
              id="particle_soft_edge"
              .checked=${!1!==t.particle_soft_edge}
              @change=${e=>this._styleChanged("particle_soft_edge",e.target.checked)}
            />
            <label for="particle_soft_edge">Bordo Sfumato / Morbido Particelle (Soft Radial Edge)</label>
          </div>

          ${this._renderSliderWithNumber("Opacità Linee Spente (Zero Flusso)",t.inactive_wire_opacity??.35,0,1,.05,"",e=>this._styleChanged("inactive_wire_opacity",e))}

          <div class="form-row">
            <label>Stile Linea a Flusso Zero</label>
            <select .value=${t.inactive_wire_style||"dashed"} @change=${e=>this._styleChanged("inactive_wire_style",e.target.value)}>
              <option value="dashed">Tratteggiato (Dashed)</option>
              <option value="solid">Continuo (Solid)</option>
            </select>
          </div>

          ${this._renderSliderWithNumber("Raggio Bagliore Hover (Glow Intensity)",t.hover_glow_radius??10,0,60,1,"px",e=>this._styleChanged("hover_glow_radius",e))}

          <div class="section-title">🏠 Anello Multi-Colore Casa</div>
          <div class="checkbox-row">
            <input type="checkbox" id="show_home_mix_ring" .checked=${!1!==t.show_home_mix_ring} @change=${e=>this._styleChanged("show_home_mix_ring",e.target.checked)} />
            <label for="show_home_mix_ring">Mostra anello multi-colore quote Solare/Batteria/Rete</label>
          </div>

          <div class="form-row" style="margin-top: 6px;">
            <label>Colore Glow all'Hover sulla Casa</label>
            <select .value=${t.home_glow_mode||"predominant"} @change=${e=>this._styleChanged("home_glow_mode",e.target.value)}>
              <option value="predominant">Dinamico (Colore della fonte primaria attiva)</option>
              <option value="custom">Fisso (Colore base della Casa)</option>
            </select>
          </div>
        `:""}

        <!-- TAB: EFFETTI VISIVI ✨ -->
        ${"effects"===this._activeTab?H`
          ${(()=>{const e=this._config.effects||fe,t=e.meteor_trail||fe.meteor_trail,i=e.living_icons||fe.living_icons,o=e.glassmorphism||fe.glassmorphism,r=e.impact_ripples||fe.impact_ripples;return H`
              <!-- 1. Meteor Trail -->
              <div class="section-title">☄️ Particelle a Cometa (Meteor Trail)</div>
              <div class="checkbox-row">
                <input
                  type="checkbox"
                  id="eff_meteor_enabled"
                  .checked=${t.enabled??!1}
                  @change=${e=>this._effectChanged("meteor_trail","enabled",e.target.checked)}
                />
                <label for="eff_meteor_enabled">Attiva Coda Luminescente a Cometa</label>
              </div>

              ${t.enabled?H`
                ${this._renderSliderWithNumber("Lunghezza Coda (Normalizzata lungo il cavo)",t.tail_length??.08,.02,.25,.01,"",e=>this._effectChanged("meteor_trail","tail_length",e))}
                ${this._renderSliderWithNumber("Intensità Bagliore Coda (Glow Intensity)",t.glow_intensity??1.5,.5,3,.1,"x",e=>this._effectChanged("meteor_trail","glow_intensity",e))}
              `:""}

              <!-- 2. Living Icons -->
              <div class="section-title">🌀 Icone Vive e Dinamiche (Living Icons)</div>
              <div class="checkbox-row">
                <input
                  type="checkbox"
                  id="eff_living_enabled"
                  .checked=${i.enabled??!1}
                  @change=${e=>this._effectChanged("living_icons","enabled",e.target.checked)}
                />
                <label for="eff_living_enabled">Attiva Animazioni Icone e Livello Batteria</label>
              </div>

              ${i.enabled?H`
                <div class="form-row">
                  <label>Stile Visualizzazione Batteria (SoC)</label>
                  <select
                    .value=${i.battery_type||"gradient"}
                    @change=${e=>this._effectChanged("living_icons","battery_type",e.target.value)}>
                    <option value="gradient">Gradiente Radiale Dinamico (Energy Glow)</option>
                    <option value="liquid">Livello Liquido con Onda (Liquid Wave)</option>
                  </select>
                </div>

                <div class="checkbox-row">
                  <input
                    type="checkbox"
                    id="eff_battery_animated"
                    .checked=${!1!==i.battery_animated}
                    @change=${e=>this._effectChanged("living_icons","battery_animated",e.target.checked)}
                  />
                  <label for="eff_battery_animated">Animazione Continua (Onde / Respiro Batteria)</label>
                </div>

                <div class="form-row">
                  <label>Animazione Icone Carichi / Dispositivi Attivi</label>
                  <select
                    .value=${i.load_animation||"rotate"}
                    @change=${e=>this._effectChanged("living_icons","load_animation",e.target.value)}>
                    <option value="rotate">Rotazione Continua (Ventola / Motore)</option>
                    <option value="pulse">Pulsazione / Respiro (Subtle Pulse)</option>
                    <option value="none">Nessuna (Icone Statiche)</option>
                  </select>
                </div>
              `:""}

              <!-- 3. Glassmorphism & Neon Core -->
              <div class="section-title">💎 Effetto Vetro 3D & Neon Core (Glassmorphism)</div>
              <div class="checkbox-row">
                <input
                  type="checkbox"
                  id="eff_glass_enabled"
                  .checked=${o.enabled??!1}
                  @change=${e=>this._effectChanged("glassmorphism","enabled",e.target.checked)}
                />
                <label for="eff_glass_enabled">Attiva Riflesso Vetro Bombato e Neon Ring</label>
              </div>

              ${o.enabled?H`
                ${this._renderSliderWithNumber("Intensità Riflesso Vetro e Bagliore Neon",o.intensity??50,10,100,5,"%",e=>this._effectChanged("glassmorphism","intensity",e))}

                <div class="checkbox-row">
                  <input
                    type="checkbox"
                    id="eff_neon_core"
                    .checked=${!1!==o.neon_core}
                    @change=${e=>this._effectChanged("glassmorphism","neon_core",e.target.checked)}
                  />
                  <label for="eff_neon_core">Anello Concentrico Interno Neon (Neon Core)</label>
                </div>
              `:""}

              <!-- 4. Impact Shockwave Ripples -->
              <div class="section-title">💥 Micro-Onde d'Urto all'Arrivo (Impact Ripples)</div>
              <div class="checkbox-row">
                <input
                  type="checkbox"
                  id="eff_ripples_enabled"
                  .checked=${r.enabled??!1}
                  @change=${e=>this._effectChanged("impact_ripples","enabled",e.target.checked)}
                />
                <label for="eff_ripples_enabled">Attiva Onde d'Urto all'Arrivo delle Particelle nei Nodi</label>
              </div>

              ${r.enabled?H`
                ${this._renderSliderWithNumber("Dimensione Espansione Onda (Ripple Size)",r.ripple_size??18,5,40,1,"px",e=>this._effectChanged("impact_ripples","ripple_size",e))}

                <div class="form-row">
                  <label>Colore Onda d'Urto Personalizzato (Lascia vuoto per colore del flusso)</label>
                  ${this._renderColorPicker(r.ripple_color,"",e=>this._effectChanged("impact_ripples","ripple_color",e))}
                </div>
              `:""}
            `})()}
        `:""}

        <!-- TAB 6: AVANZATE & MOTORE DI BILANCIAMENTO -->
        ${"advanced"===this._activeTab?H`
          <div class="form-row">
            <label>Decimali da visualizzare (Watt/kW)</label>
            <input class="input-field" type="number" min="0" max="3" .value=${this._config.decimals??2} @input=${e=>this._valueChanged("decimals",parseInt(e.target.value))} />
          </div>

          <div class="form-row">
            <label>Soglia passaggio da Watt a kW</label>
            <input class="input-field" type="number" .value=${this._config.w_to_kw_threshold??1e3} @input=${e=>this._valueChanged("w_to_kw_threshold",parseInt(e.target.value))} />
          </div>

          <div class="form-row">
            <label>${Xe("editor.display_zero_tolerance",e)} (W)</label>
            <input class="input-field" type="number" .value=${this._config.display_zero_tolerance??0} @input=${e=>this._valueChanged("display_zero_tolerance",parseFloat(e.target.value))} />
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
            <label>Spessore Minimo / Massimo Linea (px)</label>
            <div style="display: flex; gap: 8px;">
              <input class="input-field" style="flex: 1;" type="number" step="0.5" placeholder="Min" .value=${this._config.min_stroke??2} @input=${e=>this._valueChanged("min_stroke",parseFloat(e.target.value))} />
              <input class="input-field" style="flex: 1;" type="number" step="0.5" placeholder="Max" .value=${this._config.max_stroke??7} @input=${e=>this._valueChanged("max_stroke",parseFloat(e.target.value))} />
            </div>
          </div>

          <div class="form-row">
            <label>Durata Animazione Min / Max (secondi)</label>
            <div style="display: flex; gap: 8px;">
              <input class="input-field" style="flex: 1;" type="number" step="0.1" placeholder="Min" .value=${this._config.min_duration??.8} @input=${e=>this._valueChanged("min_duration",parseFloat(e.target.value))} />
              <input class="input-field" style="flex: 1;" type="number" step="0.1" placeholder="Max" .value=${this._config.max_duration??5.5} @input=${e=>this._valueChanged("max_duration",parseFloat(e.target.value))} />
            </div>
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
    `}};e([ue({attribute:!1})],Je.prototype,"hass",void 0),e([me()],Je.prototype,"_config",void 0),e([me()],Je.prototype,"_activeTab",void 0),Je=e([he("simple-power-flow-card-editor")],Je);var Ke=Object.freeze({__proto__:null,get SimplePowerFlowCardEditor(){return Je}});console.info("%c SIMPLE-POWER-FLOW-CARD %c v1.0.0 ","color: white; background: #0284c7; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;","color: #0284c7; background: #e0f2fe; font-weight: 700; border-radius: 0 4px 4px 0; padding: 2px 6px;");export{Qe as SimplePowerFlowCard};
