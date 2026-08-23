function e(e,t,o,i){var a,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,o=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;let n=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&a.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new n(o,e,i)},s=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:_}=Object,m=globalThis,u=m.trustedTypes,g=u?u.emptyScript:"",f=m.reactiveElementPolyfillSupport,b=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},v=(e,t)=>!l(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:a}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const n=i?.call(this);a?.call(this,t),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(o)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of i){const i=document.createElement("style"),a=t.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=o.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const a=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(t,o.type);this._$Em=e,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=i;const n=a.fromAttribute(t,e.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(e,t,o,i=!1,a){if(void 0!==e){const n=this.constructor;if(!1===i&&(a=this[e]),o??=n.getPropertyOptions(e),!((o.hasChanged??v)(a,t)||o.useDefault&&o.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:a},n){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==a||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[b("elementProperties")]=new Map,w[b("finalized")]=new Map,f?.({ReactiveElement:w}),(m.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,C=e=>e,S=$.trustedTypes,A=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,M="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+F,E=`<${z}>`,P=document,I=()=>P.createComment(""),k=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,D="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,O=/>/g,B=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,R=/"/g,W=/^(?:script|style|textarea|title)$/i,H=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),q=H(1),G=H(2),V=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Y=new WeakMap,X=P.createTreeWalker(P,129);function Z(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const K=(e,t)=>{const o=e.length-1,i=[];let a,n=2===t?"<svg>":3===t?"<math>":"",r=L;for(let t=0;t<o;t++){const o=e[t];let s,l,c=-1,d=0;for(;d<o.length&&(r.lastIndex=d,l=r.exec(o),null!==l);)d=r.lastIndex,r===L?"!--"===l[1]?r=N:void 0!==l[1]?r=O:void 0!==l[2]?(W.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=B):void 0!==l[3]&&(r=B):r===B?">"===l[0]?(r=a??L,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?B:'"'===l[3]?R:U):r===R||r===U?r=B:r===N||r===O?r=L:(r=B,a=void 0);const p=r===B&&e[t+1].startsWith("/>")?" ":"";n+=r===L?o+E:c>=0?(i.push(s),o.slice(0,c)+M+o.slice(c)+F+p):o+F+(-2===c?t:p)}return[Z(e,n+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Q{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let a=0,n=0;const r=e.length-1,s=this.parts,[l,c]=K(e,t);if(this.el=Q.createElement(l,o),X.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=X.nextNode())&&s.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(M)){const t=c[n++],o=i.getAttribute(e).split(F),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:o,ctor:"."===r[1]?ie:"?"===r[1]?ae:"@"===r[1]?ne:oe}),i.removeAttribute(e)}else e.startsWith(F)&&(s.push({type:6,index:a}),i.removeAttribute(e));if(W.test(i.tagName)){const e=i.textContent.split(F),t=e.length-1;if(t>0){i.textContent=S?S.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],I()),X.nextNode(),s.push({type:2,index:++a});i.append(e[t],I())}}}else if(8===i.nodeType)if(i.data===z)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=i.data.indexOf(F,e+1));)s.push({type:7,index:a}),e+=F.length-1}a++}}static createElement(e,t){const o=P.createElement("template");return o.innerHTML=e,o}}function J(e,t,o=e,i){if(t===V)return t;let a=void 0!==i?o._$Co?.[i]:o._$Cl;const n=k(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e),a._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=a:o._$Cl=a),void 0!==a&&(t=J(e,a._$AS(e,t.values),a,i)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??P).importNode(t,!0);X.currentNode=i;let a=X.nextNode(),n=0,r=0,s=o[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new te(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new re(a,this,e)),this._$AV.push(t),s=o[++r]}n!==s?.index&&(a=X.nextNode(),n++)}return X.currentNode=P,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),k(e)?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Q.createElement(Z(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new ee(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new Q(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const a of e)i===t.length?t.push(o=new te(this.O(I()),this.O(I()),this,this.options)):o=t[i],o._$AI(a),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=C(e).nextSibling;C(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class oe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,a){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=j}_$AI(e,t=this,o,i){const a=this.strings;let n=!1;if(void 0===a)e=J(this,e,t,0),n=!k(e)||e!==this._$AH&&e!==V,n&&(this._$AH=e);else{const i=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=J(this,i[o+r],t,r),s===V&&(s=this._$AH[r]),n||=!k(s)||s!==this._$AH[r],s===j?e=j:e!==j&&(e+=(s??"")+a[r+1]),this._$AH[r]=s}n&&!i&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class ae extends oe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class ne extends oe{constructor(e,t,o,i,a){super(e,t,o,i,a),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??j)===V)return;const o=this._$AH,i=e===j&&o!==j||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==j&&(o===j||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const se=$.litHtmlPolyfillSupport;se?.(Q,te),($.litHtmlVersions??=[]).push("3.3.3");const le=globalThis;class ce extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let a=i._$litPart$;if(void 0===a){const e=o?.renderBefore??null;i._$litPart$=a=new te(t.insertBefore(I(),e),e,void 0,o??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ce._$litElement$=!0,ce.finalized=!0,le.litElementHydrateSupport?.({LitElement:ce});const de=le.litElementPolyfillSupport;de?.({LitElement:ce}),(le.litElementVersions??=[]).push("4.2.2");const pe=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},he={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},_e=(e=he,t,o)=>{const{kind:i,metadata:a}=o;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),n.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const a=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,a,e,!0,o)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=o;return function(o){const a=this[i];t.call(this,o),this.requestUpdate(i,a,e,!0,o)}}throw Error("Unsupported decorator location: "+i)};function me(e){return(t,o)=>"object"==typeof o?_e(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function ue(e){return me({...e,state:!0,attribute:!1})}const ge={node_radius_primary:36,node_radius_secondary:28,node_border_width:2.5,icon_size_primary:18,icon_size_secondary:16,spacing_text_above_icon:4,spacing_text_below_icon:4,spacing_horizontal:120,spacing_vertical:85,font_size_value:10,font_size_label:10,font_size_directional:8.5,font_size_top_info:8,particles_per_arc:3,particle_size_offset:1.8,inactive_wire_opacity:.35,inactive_wire_style:"dashed",hover_glow_radius:10,node_shadow_blur:10,node_shadow_opacity:.35,node_shadow_offset_y:4,show_home_mix_ring:!0,home_glow_mode:"predominant",line_routing_mode:"bezier_curved",bus_lane_spacing:8,bus_corner_radius:20,invert_bus_lane_order:!1,particle_inner_glow:!0,particle_soft_edge:!0,show_labels:!0,spacing_label_below_node:14,label_chip_enabled:!1,label_chip_opacity:.18,label_chip_padding_x:8,label_chip_padding_y:3.5,label_border_radius:6,label_border_width:1,label_color:"",label_color_mode:"auto_contrast",badge_enabled:!1,badge_style:"dot",badge_position:"top_right",badge_size:10,badge_color_on:"#4caf50",badge_color_off:"#64748b",badge_pulse:!0,badge_quick_toggle:!0},fe={meteor_trail:{enabled:!1,tail_length:.08,glow_intensity:1.5},living_icons:{enabled:!1,battery_type:"gradient",battery_animated:!0,load_animation:"rotate"},glassmorphism:{enabled:!1,intensity:50,neon_core:!0},impact_ripples:{enabled:!1,ripple_size:18,ripple_color:""}},be={card_version:1,stroke_mode:"watt",speed_mode:"absolute",scale_curve:"sqrt",layout_mode:"auto",min_duration:.8,max_duration:5.5,min_stroke:2,max_stroke:7,scale_min:50,scale_max:6e3,smoothing_factor:.35,max_total_particles:30,display_zero_tolerance:0,w_to_kw_threshold:1e3,decimals:2,residual_handling:"clamp",residual_absorb_target:"grid",auto_layout_breakpoint:520,styles:ge,effects:fe},ye="var(--energy-solar-color, #ff9800)",ve="var(--energy-grid-consumption-color, #f44336)",xe="var(--energy-grid-return-color, #4caf50)",we="var(--energy-battery-in-color, #4caf50)",$e="var(--energy-battery-out-color, #9c27b0)",Ce="var(--energy-home-color, #03a9f4)",Se="mdi:solar-power",Ae="mdi:transmission-tower",Me="mdi:battery-high",Fe="mdi:home-lightning-bolt",ze="mdi:power-plug",Ee=r`
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
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    touch-action: manipulation;
  }

  .node-group.node-pressed .node-circle-bg {
    filter: drop-shadow(0 0 16px var(--node-hover-color, #38bdf8)) brightness(1.2) !important;
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
    transition: fill 0.3s ease;
  }

  .node-label-chip {
    transition: fill-opacity 0.3s ease, stroke-opacity 0.3s ease, rx 0.3s ease;
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

  /* Status / Notification Badge */
  .node-badge-group {
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .node-badge-group:hover {
    transform: scale(1.22);
  }

  @keyframes badge-pulse-anim {
    0%, 100% {
      transform: scale(1);
      filter: drop-shadow(0 0 1px currentColor);
    }
    50% {
      transform: scale(1.2);
      filter: drop-shadow(0 0 5px currentColor);
    }
  }

  .node-badge-group.badge-pulsing {
    animation: badge-pulse-anim 2.2s infinite ease-in-out;
  }

  .node-is-off .node-icon-foreign {
    opacity: 0.38;
    filter: grayscale(0.85);
    transition: opacity 0.3s ease, filter 0.3s ease;
  }

  .node-is-off .node-circle-bg {
    opacity: 0.7;
    filter: grayscale(0.5);
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
`;function Pe(e){if(null==e)return null;const t=String(e).trim();if(""===t||"unavailable"===t||"unknown"===t)return null;const o=t.replace(",",".").replace(/[^0-9.-]/g,""),i=parseFloat(o);return Number.isFinite(i)?i:null}function Ie(e,t){if(!(e&&t&&e.states&&e.states[t]))return{value:0,rawState:"",unit:"",isUnavailable:!0,isUnknown:!1,isValid:!1};const o=e.states[t],i=o.state,a=o.attributes?.unit_of_measurement||"W";if("unavailable"===i)return{value:0,rawState:i,unit:a,isUnavailable:!0,isUnknown:!1,isValid:!1};if("unknown"===i)return{value:0,rawState:i,unit:a,isUnavailable:!1,isUnknown:!0,isValid:!1};const n=Pe(i);if(null===n)return{value:0,rawState:i,unit:a,isUnavailable:!1,isUnknown:!0,isValid:!1};return{value:function(e,t){switch(t.trim()){case"kW":case"kVA":case"kvar":return 1e3*e;case"MW":case"MVA":return 1e6*e;case"W":case"VA":case"var":case"A":default:return e;case"mW":case"mA":return.001*e}}(n,a),rawState:i,unit:a,isUnavailable:!1,isUnknown:!1,isValid:!0}}function ke(e,t,o="solar"){if(!t)return{power:0,isUnavailable:!1,isUnknown:!1,isValid:!1,rawUnit:"W"};const i=t.entity_import||("grid"===o?t.entity_in:void 0),a=t.entity_export||("grid"===o?t.entity_out:void 0),n=t.entity_charge||("battery"===o?t.entity_in:void 0),r=t.entity_discharge||("battery"===o?t.entity_out:void 0),s=Boolean(i||a),l=Boolean(n||r);let c,d;const p=t.state_of_charge||(t.secondary_info?.entity&&t.secondary_info.entity.includes("soc")?t.secondary_info.entity:void 0);if(p&&e?.states?.[p]){const t=Pe(e.states[p].state);null!==t&&(d=Math.max(0,Math.min(100,t)),c=`${Math.round(t)}%`)}if("grid"===o&&s){const t=Ie(e,i),o=Ie(e,a),n=t.isValid?Math.max(0,t.value):0,r=o.isValid?Math.max(0,o.value):0;return{power:n-r,inPower:n,outPower:r,isDual:!0,isUnavailable:t.isUnavailable&&o.isUnavailable,isUnknown:t.isUnknown||o.isUnknown,isValid:t.isValid||o.isValid,rawUnit:t.unit||o.unit||"W"}}if("battery"===o&&l){const t=Ie(e,n),o=Ie(e,r),i=t.isValid?Math.max(0,t.value):0,a=o.isValid?Math.max(0,o.value):0;return{power:i-a,inPower:i,outPower:a,isDual:!0,soc:c,socPercent:d,isUnavailable:t.isUnavailable&&o.isUnavailable,isUnknown:t.isUnknown||o.isUnknown,isValid:t.isValid||o.isValid,rawUnit:t.unit||o.unit||"W"}}const h=Ie(e,t.entity);let _,m=h.value;if(t.invert&&(m=-m),t.entity_amperage){const o=Ie(e,t.entity_amperage);o.isValid&&(_=o.value)}return{power:m,inPower:m>=0?m:0,outPower:m<0?Math.abs(m):0,isDual:!1,soc:c,socPercent:d,amperage:_,isUnavailable:h.isUnavailable,isUnknown:h.isUnknown,isValid:h.isValid,rawUnit:h.unit||"W"}}const Te={red:[244,67,54],pink:[233,30,99],purple:[156,39,176],"deep-purple":[103,58,183],indigo:[63,81,181],blue:[33,150,243],"light-blue":[3,169,244],cyan:[0,188,212],teal:[0,150,136],green:[76,175,80],"light-green":[139,195,74],lime:[205,220,57],yellow:[255,235,59],amber:[255,193,7],orange:[255,152,0],"deep-orange":[255,87,34],brown:[121,85,72],grey:[158,158,158],gray:[158,158,158],"blue-grey":[96,125,139],"blue-gray":[96,125,139],black:[0,0,0],white:[255,255,255]},De={primary:"--rgb-primary-color",accent:"--rgb-accent-color",disabled:"--rgb-disabled-color",state:"--rgb-state-default-color"},Le={primary:[3,169,244],accent:[255,152,0],disabled:[189,189,189],state:[68,115,158]},Ne={gray:"grey","blue-gray":"blue-grey"};function Oe(e){return Math.max(0,Math.min(255,Math.round(e)))}function Be(e,t){if(null==e)return t;if(Array.isArray(e))return e.length>=3?`rgb(${Oe(e[0])}, ${Oe(e[1])}, ${Oe(e[2])})`:t;if("string"!=typeof e)return t;let o=e.trim();if(""===o)return t;if(o.startsWith("#")||o.startsWith("rgb(")||o.startsWith("rgba(")||o.startsWith("hsl(")||o.startsWith("hsla(")||o.startsWith("var("))return o;if(o in Ne&&(o=Ne[o]),o in De){const e=Le[o]||[128,128,128];return`rgb(var(${De[o]}, ${e[0]}, ${e[1]}, ${e[2]}))`}if(o in Te){const[e,t,i]=Te[o];return`rgb(var(--rgb-${o}, ${e}, ${t}, ${i}))`}return o}function Ue(e,t,o){if(null==e)return t;if(Array.isArray(e))return e.length>=3?[Oe(e[0]),Oe(e[1]),Oe(e[2])]:t;if("string"!=typeof e)return t;const i=e.trim();if(""===i)return t;if(i.startsWith("#")){const e=i.slice(1);if(3===e.length||4===e.length){const t=parseInt(e[0]+e[0],16),o=parseInt(e[1]+e[1],16),i=parseInt(e[2]+e[2],16);if(!isNaN(t)&&!isNaN(o)&&!isNaN(i))return[t,o,i]}else if(e.length>=6){const t=parseInt(e.substring(0,2),16),o=parseInt(e.substring(2,4),16),i=parseInt(e.substring(4,6),16);if(!isNaN(t)&&!isNaN(o)&&!isNaN(i))return[t,o,i]}return t}if(i.startsWith("rgb(")||i.startsWith("rgba(")){const e=i.match(/rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)/);if(e)return[Oe(parseFloat(e[1])),Oe(parseFloat(e[2])),Oe(parseFloat(e[3]))];const t=i.match(/rgba?\(\s*(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)/);if(t)return[Oe(parseFloat(t[1])),Oe(parseFloat(t[2])),Oe(parseFloat(t[3]))]}const a=Ne[i]||i,n=a in De,r=a in Te;if(n||r){if(r)return Te[i];if(n)return Le[i]||t}if(i.startsWith("var(")){const e=i.indexOf(",");if(-1!==e&&i.endsWith(")")){return Ue(i.slice(e+1,-1).trim(),t)}}return t}function Re(e,t="sqrt"){const o=Math.max(0,Math.min(1,e));switch(t){case"linear":return o;case"sqrt":default:return Math.sqrt(o);case"log":return Math.log(1+9*o)/Math.LN10}}function We(e,t={}){const o=t.display_zero_tolerance??0,i=t.stroke_mode??"watt",a=t.speed_mode??"absolute",n=t.scale_curve??"sqrt",r=t.min_stroke??2,s=t.max_stroke??7,l=t.scale_min??50,c=t.scale_max??6e3,d=t.min_duration??.8,p=t.max_duration??5.5,h=t.residual_handling??"clamp",_=t.residual_absorb_target??"grid",m=Math.max(0,e.solar||0),u=Math.max(0,e.grid||0),g=Math.max(0,-(e.grid||0)),f=Math.max(0,e.battery||0),b=Math.max(0,-(e.battery||0));let y;y=void 0!==e.home&&null!==e.home&&Number.isFinite(e.home)?Math.max(0,e.home):Math.max(0,m+u+b-g-f);let v=Math.min(m,y),x=m-v,w=y-v,$=Math.min(x,f),C=x-$,S=f-$,A=Math.min(C,g),M=Math.min(b,w),F=w-M,z=b-M,E=Math.min(z,Math.max(0,g-A)),P=Math.min(u,F),I=Math.min(Math.max(0,u-P),S),k=0;const T=y-(v+M+P);Math.abs(T)>o&&("clamp"===h?u>0||P>0?P=Math.max(0,P+T):M>0?M=Math.max(0,M+T):v=Math.max(0,v+T):"absorb"===h?"battery"===_&&(b>0||M>0)?M=Math.max(0,M+T):P=Math.max(0,P+T):k=Math.abs(T));let D=0;e.devices.forEach(e=>{!1!==e.include_in_home&&(D+=Math.max(0,e.power||0))});const L=Math.max(0,y-D),N=Be(t.solar?.color,ye),O=Be(t.grid?.color,ve),B=xe,U=Be(t.battery?.color_charge||t.battery?.color,we),R=Be(t.battery?.color_discharge,$e),W=Be(t.home?.color,Ce),H=[{id:"solar-home",from:"solar",to:"home",value:v,color:N,targetColor:W,gradientId:"glow-solar"},{id:"solar-battery",from:"solar",to:"battery",value:$,color:N,targetColor:U,gradientId:"glow-solar"},{id:"solar-grid",from:"solar",to:"grid",value:A,color:B,targetColor:B,gradientId:"glow-grid-export"},{id:"battery-home",from:"battery",to:"home",value:M,color:R,targetColor:W,gradientId:"glow-battery-discharge"},{id:"battery-grid",from:"battery",to:"grid",value:E,color:R,targetColor:B,gradientId:"glow-battery-discharge"},{id:"grid-home",from:"grid",to:"home",value:P,color:O,targetColor:W,gradientId:"glow-grid-import"},{id:"grid-battery",from:"grid",to:"battery",value:I,color:O,targetColor:U,gradientId:"glow-grid-import"}];e.devices.forEach(e=>{const t=Math.max(0,e.power||0);if(!1===e.display_zero&&t<=o)return;const i=Be(e.color,"var(--energy-device-color, #00bcd4)");H.push({id:`home-${e.id}`,from:"home",to:e.id,value:t,color:i,targetColor:i,gradientId:"glow-device",ampere:e.ampere,isDevice:!0})});const q=H.reduce((e,t)=>e+(t.value>o?t.value:0),0),G=H.map(e=>{const t=e.value>o,h=function(e,t="watt",o="sqrt",i=2,a=7,n=50,r=6e3,s,l=5){if(e<=l)return 1.5;if("fixed"===t)return(i+a)/2;if("ampere"===t){if(null==s)return i;const e=.5;return i+Re((s-e)/(25-e),o)*(a-i)}return i+Re((e-n)/(r-n),o)*(a-i)}(e.value,i,n,r,s,l,c,e.ampere,o),_=function(e,t="absolute",o="sqrt",i=.8,a=5.5,n=50,r=5e3,s=0,l=5){if(e<=l)return a;let c=0;return c="relative"===t&&s>0?e/s:(e-n)/(r-n),a-Re(c,o)*(a-i)}(e.value,a,n,d,p,l,c,q,o);return{id:e.id,from:e.from,to:e.to,value:e.value,ampere:e.ampere,color:e.color,targetColor:e.targetColor,gradientId:e.gradientId,isDevice:e.isDevice,strokeWidth:h,duration:_,isActive:t}});return{arcs:G,homeConsumption:y,untrackedDevicesPower:L,unbalancedPower:k,totalActivePower:q}}function He(e,t,o){return{x:e.x+Math.cos(o)*t,y:e.y+Math.sin(o)*t}}function qe(e,t,o=2){if(!Number.isFinite(e))return"0";if(t?.locale)try{return new Intl.NumberFormat(t.locale.language||"en",{minimumFractionDigits:0,maximumFractionDigits:o}).format(e)}catch{}return e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:o})}function Ge(e,t=2,o=1e3,i){const a=Math.abs(e);if(a>=1e6){const o=qe(e/1e6,i,t);return{value:o,unit:"MW",full:`${o} MW`}}if(a>=o){const o=qe(e/1e3,i,t);return{value:o,unit:"kW",full:`${o} kW`}}const n=qe(Math.round(e),i,0);return{value:n,unit:"W",full:`${n} W`}}const Ve={viewBox:{width:620,height:410},nodes:{solar:{x:175,y:65,radius:36,defaultIcon:Se,defaultColor:ye},grid:{x:65,y:200,radius:36,defaultIcon:Ae,defaultColor:ve},battery:{x:175,y:335,radius:36,defaultIcon:Me,defaultColor:we},home:{x:285,y:200,radius:38,defaultIcon:Fe,defaultColor:Ce}},devicesHorizontal:{rowTopY:80,rowBottomY:320,startX:410}},je={viewBox:{width:440,height:560},nodes:{solar:{x:220,y:60,radius:36,defaultIcon:Se,defaultColor:ye},grid:{x:85,y:175,radius:36,defaultIcon:Ae,defaultColor:ve},battery:{x:355,y:175,radius:36,defaultIcon:Me,defaultColor:we},home:{x:220,y:290,radius:38,defaultIcon:Fe,defaultColor:Ce}},devicesVertical:{colLeftX:95,colRightX:345,startY:420}};function Ye(e,t=1,o){const[i,a,n]=Ue(e,[255,255,255]),r=Math.max(0,Math.min(1,t));return(.299*(i*r+30*(1-r))+.587*(a*r+41*(1-r))+.114*(n*r+59*(1-r)))/255>.58?"#0f172a":"#ffffff"}var Xe,Ze;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Xe||(Xe={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ze||(Ze={}));const Ke=e=>{((e,t,o,i)=>{i=i||{},o=null==o?{}:o;const a=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});a.detail=o,e.dispatchEvent(a)})(window,"haptic",e)};function Qe(e,t,o,i){if(!t)return;const a=o.switchEntityId;if("toggle"===i){if(!a)return;try{Ke("light")}catch(e){}const e=a.split(".")[0]||"homeassistant";return void t.callService(e,"toggle",{entity_id:a})}let n,r="auto";if("hold"===i)n=o.holdAction,r=o.holdMoreInfoTarget||"auto",n||(n=o.switchEntityId?{action:"toggle"}:{action:"more-info"});else if("double_tap"===i){if(n=o.doubleTapAction,r=o.doubleTapMoreInfoTarget||"auto",!n||"none"===n.action)return}else n=o.tapAction||{action:"more-info"},r=o.tapMoreInfoTarget||"auto";if(!n||"none"===n.action)return;const s=n.action||"none";try{if("toggle"===s){const e=n.target?.entity_id||n.entity||a;if(!e)return;try{Ke("medium")}catch(e){}const o=e.split(".")[0]||"homeassistant";t.callService(o,"toggle",{entity_id:e})}else if("more-info-switch"===s||"more-info-device"===s){try{Ke("selection")}catch(e){}const t=o.switchEntityId||o.entityId;t&&e.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}else if("more-info-sensor"===s){try{Ke("selection")}catch(e){}const t=o.entityId||o.switchEntityId;t&&e.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}else if("more-info"===s){try{Ke("selection")}catch(e){}let t;const i=n.target?.entity_id||n.entity;t=i||("sensor"===r?o.entityId||o.switchEntityId:o.switchEntityId||o.entityId),t&&e.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}else if("call-service"===s||"perform-action"===s){try{Ke("success")}catch(e){}const e=n.service||n.perform_action;if(e){const[o,i]=e.split(".",2);t.callService(o,i,n.service_data||n.data||{},n.target)}}else if("navigate"===s){const t=n.navigation_path;if(t){try{Ke("selection")}catch(e){}window.history.pushState(null,"",t),e.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0}))}}else if("url"===s){const e=n.url_path;if(e){try{Ke("selection")}catch(e){}window.open(e,"_blank")}}else if("assist"===s){try{Ke("selection")}catch(e){}e.dispatchEvent(new CustomEvent("show-dialog",{bubbles:!0,composed:!0,detail:{dialogTag:"ha-voice-command-dialog",dialogImport:()=>customElements.get("ha-voice-command-dialog")?void 0:customElements.whenDefined("ha-voice-command-dialog"),dialogParams:{pipeline_id:n.pipeline_id,start_listening:n.start_listening}}}))}else if("fire-dom-event"===s){try{Ke("selection")}catch(e){}e.dispatchEvent(new CustomEvent("ll-custom",{bubbles:!0,composed:!0,detail:n}))}}catch(e){console.warn("[SimplePowerFlow] Action execution failed:",e)}}class Je{constructor(e){this._lastTapTime=0,this._startX=0,this._startY=0,this._isHoldTriggered=!1,this._onAction=e}handlePointerDown(e,t){e.target?.closest?.(".node-badge-group")||"mouse"===e.pointerType&&0!==e.button||(this._startX=e.clientX,this._startY=e.clientY,this._isHoldTriggered=!1,this._currentNode=t,e.preventDefault(),clearTimeout(this._holdTimer),this._holdTimer=setTimeout(()=>{this._isHoldTriggered=!0,this._onAction(t,"hold")},500))}handlePointerMove(e){const t=e.clientX-this._startX,o=e.clientY-this._startY;Math.sqrt(t*t+o*o)>12&&clearTimeout(this._holdTimer)}handlePointerUp(e,t){if(clearTimeout(this._holdTimer),e.target?.closest?.(".node-badge-group"))return void this.handlePointerCancel();if(this._isHoldTriggered)return void(this._isHoldTriggered=!1);const o=e.clientX-this._startX,i=e.clientY-this._startY;if(Math.sqrt(o*o+i*i)>12)return;const a=Date.now(),n=this._lastTappedNodeId===t.id&&a-this._lastTapTime<350,r=Boolean(t.doubleTapAction&&"none"!==t.doubleTapAction.action);n&&r?(clearTimeout(this._tapTimer),this._lastTapTime=0,this._lastTappedNodeId=void 0,this._onAction(t,"double_tap")):(this._lastTapTime=a,this._lastTappedNodeId=t.id,r?(clearTimeout(this._tapTimer),this._tapTimer=setTimeout(()=>{this._onAction(t,"tap"),this._lastTapTime=0,this._lastTappedNodeId=void 0},260)):this._onAction(t,"tap"))}handlePointerCancel(){clearTimeout(this._holdTimer),clearTimeout(this._tapTimer),this._isHoldTriggered=!1,this._currentNode=void 0}}var et={title:"Power Flow",solar:"Solar",grid:"Grid",battery:"Battery",home:"Home",production:"Production",consumption:"Consumption",import:"Import",export:"Export",charge:"Charge",discharge:"Discharge",inactive:"Inactive",active:"Active",unbalanced:"Unbalanced",not_tracked:"Other Consumption"},tt={device_default_name:"Device",section:{general:"General",nodes:"Primary Nodes",solar:"Solar Node",grid:"Grid Node",battery:"Battery Node",home:"Home Node",devices:"Individual Devices",styles:"Style & Dimensions",effects:"Visual Effects ✨",advanced:"Advanced & Balancing Engine",node_dimensions:"Node & Circle Dimensions",shadows:"Shadows & 3D Depth",typography:"Typography & Spacings",labels:"Node Labels & Chips",cables_and_bus:"Cables Geometry & Bus Routing",particles:"Flow Lines & Particles",home_ring:"Home Multi-Color Mix Ring",meteor_trail:"Meteor Trail",living_icons:"Living Dynamic Icons",glassmorphism:"3D Glassmorphism & Neon Core",impact_ripples:"Impact Shockwave Ripples",badge:"Status Notification Badge",secondary_info:"Secondary Information",actions:"Touch Actions & Gestures"},title:"Card Title",solar:"Solar Node",grid:"Grid Node",battery:"Battery Node",home:"Home Node",devices:"Individual Devices",add_device:"Add Device",remove_device:"Remove Device",move_up:"Move Up",move_down:"Move Down",device_name:"Device Name",device_icon:"Icon",device_color:"Color",id:"Device ID Identifier",name:"Custom Name",icon:"Icon",color:"Primary Color",color_charge:"Charge Color",color_discharge:"Discharge Color",color_idle:"Idle Color",use_idle_color:"Enable Dedicated Idle Battery Color",entity:"Power Entity (Watts)",entity_import:"Import Entity",entity_export:"Export Entity",entity_charge:"Charge Entity",entity_discharge:"Discharge Entity",entity_in:"Input Entity (Legacy)",entity_out:"Output Entity (Legacy)",entity_amperage:"Current Entity (Amperes)",state_of_charge:"State of Charge Entity (SoC %)",switch_entity:"Switch / Control Entity",invert:"Invert Sign Convention",include_in_home:"Include in Home Total",display_zero:"Display Zero Flow",display_zero_tolerance:"Zero Tolerance (W)",show_label:"Show Name / Label",stroke_mode:"Line Thickness Mode",speed_mode:"Particle Speed Mode",layout_mode:"Layout Mode",auto_layout_breakpoint:"Mobile Layout Breakpoint (px)",min_duration:"Min Particle Duration (s)",max_duration:"Max Particle Duration (s)",min_stroke:"Min Stroke Width (px)",max_stroke:"Max Stroke Width (px)",scale_min:"Scale Minimum (W)",scale_max:"Scale Maximum (W)",scale_curve:"Power Scale Curve",smoothing_factor:"Smoothing Factor (EMA)",max_total_particles:"Max Total Particles",decimals:"Display Decimals (Watt/kW)",w_to_kw_threshold:"Watt to kW Threshold",residual_handling:"Residual Balance Handling",residual_absorb_target:"Residual Absorb Target",node_radius_primary:"Primary Node Radius (px)",node_radius_secondary:"Secondary Node Radius (px)",node_border_width:"Circle Border Width (px)",icon_size_primary:"Primary Icon Size (px)",icon_size_secondary:"Secondary Icon Size (px)",spacing_text_above_icon:"Space Above Icon (px)",spacing_text_below_icon:"Space Below Icon (px)",spacing_horizontal:"Horizontal Grid Spacing (px)",spacing_vertical:"Vertical Grid Spacing (px)",font_size_value:"Power Value Font Size (px)",font_size_label:"Node Label Font Size (px)",font_size_directional:"Directional Arrows Font Size (px)",font_size_top_info:"Top Info Font Size (px)",spacing_label_below_node:"Label Distance Below Circle (px)",show_labels:"Show Global Labels",label_chip_enabled:"Enable Chip / Tag Background",label_chip_opacity:"Chip Background Opacity",label_chip_padding_x:"Chip Horizontal Padding (px)",label_chip_padding_y:"Chip Vertical Padding (px)",label_border_radius:"Chip Border Radius (px)",label_border_width:"Chip Border Width (px)",label_color_mode:"Label Text Color Mode",label_color:"Custom Label Text Color",line_routing_mode:"Device Lines Routing Mode",bus_lane_spacing:"Bus Parallel Lane Spacing (px)",bus_corner_radius:"Bus Corner Radius (px)",invert_bus_lane_order:"Invert Bus Lane Order",particles_per_arc:"Particles per Active Line",particle_size_offset:"Extra Particle Glow Size (px)",particle_inner_glow:"Particle White Inner Glow",particle_soft_edge:"Particle Soft Radial Edge",inactive_wire_opacity:"Inactive Line Opacity (Zero Flow)",inactive_wire_style:"Inactive Line Style",hover_glow_radius:"Hover Glow Radius (px)",node_shadow_blur:"Circle Shadow Blur (px)",node_shadow_opacity:"Circle Shadow Opacity",node_shadow_offset_y:"Circle Shadow Y-Offset (px)",show_home_mix_ring:"Show Home Multi-Color Mix Ring",home_glow_mode:"Home Hover Glow Mode",meteor_trail_enabled:"Enable Comet Meteor Trail",meteor_trail_tail_length:"Comet Tail Length (Normalized)",meteor_trail_glow_intensity:"Comet Glow Intensity",living_icons_enabled:"Enable Living Icons & Battery Level",living_icons_battery_type:"Battery Visual Style",living_icons_battery_animated:"Battery Continuous Animation",living_icons_load_animation:"Active Load Icon Animation",glassmorphism_enabled:"Enable 3D Glassmorphism & Neon Ring",glassmorphism_intensity:"Glass Glare Intensity (%)",glassmorphism_neon_core:"Inner Concentric Neon Core Ring",impact_ripples_enabled:"Enable Impact Shockwave Ripples",impact_ripples_size:"Shockwave Max Ripple Size (px)",impact_ripples_color:"Custom Shockwave Ripple Color",badge_enabled:"Show Status Notification Badge",badge_style:"Notification Badge Style",badge_position:"Badge Position on Circle",badge_size:"Badge Size (px)",badge_color_on:"Active State Color (ON)",badge_color_off:"Inactive State Color (OFF)",badge_pulse:"Pulse Animation When Active",badge_quick_toggle:"Quick Tap to Toggle",badge_tap_behavior:"Badge Tap Action",secondary_info_entity:"Secondary Info Entity",secondary_info_unit:"Custom Unit of Measurement",secondary_info_decimals:"Number of Decimals",secondary_info_template:"Formatting Template",tap_action:"Tap Action",hold_action:"Hold Action",double_tap_action:"Double Tap Action",tap_more_info_target:"More-Info Target (Tap)",hold_more_info_target:"More-Info Target (Hold)",double_tap_more_info_target:"More-Info Target (Double Tap)",helper:{stroke_mode:"Controls whether line thickness scales with power (Watts) or current (Amperes).",speed_mode:"Particle speed can be proportional to absolute Watts or to percentage of total active power.",scale_curve:"Square root (sqrt) curve provides the best visual perception for wide dynamic ranges.",scale_min:"Power below which particles move at the minimum allowed speed.",scale_max:"Power at which lines and particles reach maximum thickness and speed.",smoothing_factor:"Exponential smoothing (EMA) factor: lower values make animations smoother.",residual_handling:"Handles mathematical differences between production, storage, and consumption.",residual_absorb_target:"Target node to absorb residual power when residual handling is set to 'Absorb'.",display_zero_tolerance:"Flows with power below this threshold are considered zero/inactive.",line_routing_mode:"Choose direct Bezier curves or a soft orthogonal central bus channel for secondary devices.",invert_bus_lane_order:"Inverts the order of bus lanes for secondary devices.",label_color_mode:"Auto contrast automatically chooses white or dark text based on background luminance.",badge_tap_behavior:"Action executed when directly tapping the status badge.",more_info_target:"Choose whether to open the control switch or power sensor more-info dialog.",include_in_home:"When disabled, this device consumption will not be added to the calculated Home total.",auto_layout_breakpoint:"Card width threshold in pixels below which responsive vertical layout is activated.",id:"Unique internal identifier (alphanumeric, dashes, or underscores)."},option:{layout_mode:{auto:"Auto Responsive",horizontal:"Horizontal",vertical:"Vertical (2 Columns)"},stroke_mode:{watt:"Dynamic (Watts)",fixed:"Fixed",ampere:"Dynamic (Amperes)"},speed_mode:{absolute:"Absolute (Watts)",relative:"Relative (% of total)"},scale_curve:{sqrt:"Square Root (Sqrt)",linear:"Linear",log:"Logarithmic"},residual_handling:{clamp:"Clamp (Zero balance on main arc)",absorb:"Absorb (Absorb into dedicated target)",unbalanced:"Unbalanced (Show residual segment)"},residual_absorb_target:{grid:"Electrical Grid",battery:"Battery Storage"},badge_style:{dot:"Circular LED Dot",icon:"Power Mini-Icon",text:"Micro-Tag (ON / OFF)"},badge_position:{top_right:"Top-Right",top_left:"Top-Left",bottom_right:"Bottom-Right",bottom_left:"Bottom-Left"},badge_tap_behavior:{auto:"Automatic (Based on entity domain)",toggle:"Toggle Switch On / Off","more-info-switch":"Switch Control Dialog","more-info-sensor":"Power Sensor Dialog","more-info":"Entity More-Info Dialog"},more_info_target:{auto:"Automatic (Switch if present, else Sensor)",switch:"Switch Control Dialog",sensor:"Power Sensor Dialog"},label_color_mode:{auto_contrast:"Smart Contrast (Auto B/W)",white:"Pure White (#ffffff)",black:"Dark Slate (#0f172a)",match_entity:"Match Entity Color",secondary:"Standard Secondary Gray",custom:"Custom Color"},battery_type:{gradient:"Dynamic Radial Gradient (Energy Glow)",liquid:"Liquid Level Wave"},load_animation:{rotate:"Continuous Rotation (Fan / Motor)",pulse:"Energy Pulse / Breathing",none:"Static (No Animation)"},line_routing_mode:{bezier_curved:"Direct Bezier Curves",orthogonal_bus:"Central Orthogonal Bus Channel"},inactive_wire_style:{dashed:"Dashed",solid:"Solid"},home_glow_mode:{predominant:"Dynamic (Dominant active power source)",custom:"Fixed (Home base color)"}},error:{invalid_range:"Invalid range: minimum must be strictly less than maximum.",duplicate_id:"Device ID must be unique.",invalid_id:"ID must start with a letter and contain only alphanumeric characters, underscores, or dashes.",reserved_id:"This ID is reserved by the system.",missing_entity:"At least one valid power entity is required."}},ot={missing_entity:"At least one valid power entity is required.",invalid_range:"Invalid range: minimum must be strictly less than maximum."},it={card:et,editor:tt,errors:ot},at={title:"Flusso Energetico",solar:"Solare",grid:"Rete",battery:"Batteria",home:"Casa",production:"Produzione",consumption:"Consumo",import:"Prelevata",export:"Immessa",charge:"Carica",discharge:"Scarica",inactive:"Inattivo",active:"Attivo",unbalanced:"Sbilanciamento",not_tracked:"Altri Consumi"},nt={device_default_name:"Dispositivo",section:{general:"Generale",nodes:"Nodi Principali",solar:"Nodo Solare",grid:"Nodo Rete",battery:"Nodo Batteria",home:"Nodo Casa",devices:"Carichi Individuali",styles:"Stile & Dimensioni",effects:"Effetti Visivi ✨",advanced:"Avanzate & Motore",node_dimensions:"Dimensioni Nodi & Cerchi",shadows:"Ombreggiatura & Profondità 3D",typography:"Tipografia & Spaziature Interne",labels:"Etichette Nodi & Stile Chip/Tag",cables_and_bus:"Geometria Cavi & Routing Bus",particles:"Linee di Flusso & Particelle",home_ring:"Anello Multi-Colore Casa",meteor_trail:"Particelle a Cometa (Meteor Trail)",living_icons:"Icone Vive & Dinamiche (Living Icons)",glassmorphism:"Effetto Vetro 3D & Neon Core",impact_ripples:"Micro-Onde d'Urto (Impact Ripples)",badge:"Badge di Stato Notifica",secondary_info:"Informazioni Secondarie",actions:"Gesti & Azioni Tocco"},title:"Titolo Card",solar:"Nodo Solare",grid:"Nodo Rete",battery:"Nodo Batteria",home:"Nodo Casa",devices:"Carichi Individuali",add_device:"Aggiungi Dispositivo",remove_device:"Rimuovi Dispositivo",move_up:"Sposta su",move_down:"Sposta giù",device_name:"Nome Dispositivo",device_icon:"Icona",device_color:"Colore",id:"Identificativo ID Dispositivo",name:"Nome Personalizzato",icon:"Icona",color:"Colore Principale",color_charge:"Colore Carica",color_discharge:"Colore Scarica",color_idle:"Colore Inattivo (Idle)",use_idle_color:"Attiva Colore Dedicato per Batteria Inattiva",entity:"Entità Potenza (Watt)",entity_import:"Entità Prelievo (Import)",entity_export:"Entità Immissione (Export)",entity_charge:"Entità Carica",entity_discharge:"Entità Scarica",entity_in:"Entità Ingresso (Legacy)",entity_out:"Entità Uscita (Legacy)",entity_amperage:"Entità Corrente (Ampere)",state_of_charge:"Entità Stato di Carica (SoC %)",switch_entity:"Entità Switch / Controllo Accensione",invert:"Inverti Convenzione Segno",include_in_home:"Includi nel Totale Casa",display_zero:"Mostra Linea a Flusso Zero",display_zero_tolerance:"Tolleranza Zero (W)",show_label:"Mostra Nome / Etichetta",stroke_mode:"Modalità Spessore Linea",speed_mode:"Modalità Velocità Particelle",layout_mode:"Modalità Layout",auto_layout_breakpoint:"Soglia Passaggio Layout Mobile (Breakpoint px)",min_duration:"Durata Minima Particelle (s)",max_duration:"Durata Massima Particelle (s)",min_stroke:"Spessore Minimo Linea (px)",max_stroke:"Spessore Massimo Linea (px)",scale_min:"Valore Minimo Scala (W)",scale_max:"Valore Massimo Scala (W)",scale_curve:"Curva di Scala Potenza",smoothing_factor:"Fattore di Smoothing (EMA)",max_total_particles:"Max Particelle Totali",decimals:"Decimali da Visualizzare (Watt/kW)",w_to_kw_threshold:"Soglia Passaggio da Watt a kW",residual_handling:"Gestione Residuo Bilancio",residual_absorb_target:"Target Assorbimento Residuo",node_radius_primary:"Raggio Nodi Primari (px)",node_radius_secondary:"Raggio Nodi Secondari (px)",node_border_width:"Spessore Bordo Cerchi (px)",icon_size_primary:"Dimensione Icone Primarie (px)",icon_size_secondary:"Dimensione Icone Secondarie (px)",spacing_text_above_icon:"Spazio Testo Sopra Icona (px)",spacing_text_below_icon:"Spazio Testo Sotto Icona (px)",spacing_horizontal:"Spaziatura Orizzontale Griglia (px)",spacing_vertical:"Spaziatura Verticale Griglia (px)",font_size_value:"Font Valori Potenza (px)",font_size_label:"Font Etichette Nodi (px)",font_size_directional:"Font Frecce Direzionali (px)",font_size_top_info:"Font Info Superiori (px)",spacing_label_below_node:"Distanza Etichetta dal Cerchio (px)",show_labels:"Mostra Etichette Globali",label_chip_enabled:"Attiva Sfondo Stile Chip / Tag",label_chip_opacity:"Opacità Sfondo Chip",label_chip_padding_x:"Padding Orizzontale Chip (px)",label_chip_padding_y:"Padding Verticale Chip (px)",label_border_radius:"Raggio Bordo Chip (px)",label_border_width:"Spessore Bordo Chip (px)",label_color_mode:"Modalità Colore Testo Etichetta",label_color:"Colore Testo Etichetta Personalizzato",line_routing_mode:"Modalità Percorso Linee Dispositivi",bus_lane_spacing:"Spaziatura Corsie Parallele Bus (px)",bus_corner_radius:"Raggio Curva Raccordo Bus 90° (px)",invert_bus_lane_order:"Inverti Ordine Corsie Bus",particles_per_arc:"Particelle per Linea Attiva",particle_size_offset:"Dimensione Extra Particella Luminosa (px)",particle_inner_glow:"Bagliore Bianco Interno Particelle (Inner Glow)",particle_soft_edge:"Bordo Sfumato / Morbido Particelle",inactive_wire_opacity:"Opacità Linee Spente (Zero Flusso)",inactive_wire_style:"Stile Linea a Flusso Zero",hover_glow_radius:"Raggio Bagliore all'Hover (px)",node_shadow_blur:"Sfocatura Ombra Cerchi (px)",node_shadow_opacity:"Opacità Ombra Cerchi",node_shadow_offset_y:"Offset Verticale Ombra (px)",show_home_mix_ring:"Mostra Anello Multi-Colore Quote Casa",home_glow_mode:"Colore Glow all'Hover sulla Casa",meteor_trail_enabled:"Attiva Coda Luminescente a Cometa",meteor_trail_tail_length:"Lunghezza Coda (Normalizzata)",meteor_trail_glow_intensity:"Intensità Bagliore Coda",living_icons_enabled:"Attiva Icone Vive & Livello Batteria",living_icons_battery_type:"Stile Visualizzazione Batteria",living_icons_battery_animated:"Animazione Continua Batteria (Onde)",living_icons_load_animation:"Animazione Icone Carichi Attivi",glassmorphism_enabled:"Attiva Riflesso Vetro Bombato & Neon Ring",glassmorphism_intensity:"Intensità Riflesso Vetro (%)",glassmorphism_neon_core:"Anello Concentrico Interno Neon (Neon Core)",impact_ripples_enabled:"Attiva Onde d'Urto all'Arrivo Particelle",impact_ripples_size:"Dimensione Espansione Onda (px)",impact_ripples_color:"Colore Onda d'Urto Personalizzato",badge_enabled:"Mostra Badge di Stato Notifica",badge_style:"Stile Badge Notifica",badge_position:"Posizione Badge sul Cerchio",badge_size:"Dimensione Badge (px)",badge_color_on:"Colore Stato Acceso (ON)",badge_color_off:"Colore Stato Spento (OFF)",badge_pulse:"Effetto Pulsazione Energetica quando Attivo",badge_quick_toggle:"Tocco Rapido per Toggle",badge_tap_behavior:"Azione Tocco Badge",secondary_info_entity:"Entità Informazione Secondaria",secondary_info_unit:"Unità di Misura Personalizzata",secondary_info_decimals:"Numero di Decimali",secondary_info_template:"Template Formattazione",tap_action:"Azione Tocco Singolo (Tap)",hold_action:"Azione Pressione Prolungata (Hold)",double_tap_action:"Azione Doppio Tocco (Double Tap)",tap_more_info_target:"Destinazione Scheda Dettagli (Tap)",hold_more_info_target:"Destinazione Scheda Dettagli (Hold)",double_tap_more_info_target:"Destinazione Scheda Dettagli (Double Tap)",helper:{stroke_mode:"Determina se lo spessore delle linee varia in base alla potenza (Watt) o alla corrente (Ampere).",speed_mode:"La velocità delle particelle può essere proporzionale ai Watt assoluti o alla percentuale sul flusso totale.",scale_curve:"La curva radice quadrata (sqrt) offre la migliore percezione visiva per piccoli e grandi consumi.",scale_min:"Potenza al di sotto della quale le particelle viaggiano alla velocità minima consentita.",scale_max:"Potenza alla quale la linea raggiunge lo spessore massimo e la velocità massima.",smoothing_factor:"Fattore di smorzamento esponenziale (EMA): valori bassi rendono le transizioni più morbide.",residual_handling:"Gestisce eventuali discrepanze matematiche fra produzione, accumulo e consumi.",residual_absorb_target:"Nodo su cui convogliare l'energia residua quando la gestione è impostata su 'Assorbimento'.",display_zero_tolerance:"I flussi con potenza inferiore a questa soglia vengono considerati a zero.",line_routing_mode:"Scegli tra curve di Bezier dirette o canale centrale ortogonale morbido per carichi multipli.",invert_bus_lane_order:"Inverte l'ordine delle corsie del canale centrale per i carichi secondari.",label_color_mode:"Contrasto automatico sceglie bianco o nero in base alla luminosità dello sfondo.",badge_tap_behavior:"Comportamento quando si tocca direttamente il badge di stato.",more_info_target:"Scegli se aprire la scheda dello switch di controllo o del sensore di potenza.",include_in_home:"Se disattivato, il consumo del dispositivo non verrà sommato nel totale calcolato della Casa.",auto_layout_breakpoint:"Larghezza della card al di sotto della quale viene attivato il layout responsive verticale.",id:"Identificativo interno univoco (alfanumerico, trattino o underscore)."},option:{layout_mode:{auto:"Automatico (Adattivo)",horizontal:"Orizzontale",vertical:"Verticale (2 Colonne)"},stroke_mode:{watt:"Dinamico (Watt)",fixed:"Fisso",ampere:"Dinamico (Ampere)"},speed_mode:{absolute:"Assoluta (Watt)",relative:"Relativa (% sul totale)"},scale_curve:{sqrt:"Radice Quadrata (Sqrt)",linear:"Lineare",log:"Logaritmica"},residual_handling:{clamp:"Clamp (Bilancia a zero su arco principale)",absorb:"Assorbimento (Absorb su target dedicato)",unbalanced:"Sbilanciamento (Mostra quota residua)"},residual_absorb_target:{grid:"Rete Elettrica (Grid)",battery:"Batteria (Battery)"},badge_style:{dot:"Dot LED Circolare",icon:"Mini-Icona Power",text:"Micro-Tag (ON / OFF)"},badge_position:{top_right:"In alto a destra (Top-Right)",top_left:"In alto a sinistra (Top-Left)",bottom_right:"In basso a destra (Bottom-Right)",bottom_left:"In basso a sinistra (Bottom-Left)"},badge_tap_behavior:{auto:"Automatico (In base al dominio)",toggle:"Accende / Spegne Switch","more-info-switch":"Scheda Gestione Switch","more-info-sensor":"Scheda Consumi Sensore","more-info":"Scheda Dettagli Entità"},more_info_target:{auto:"Automatico (Switch se presente, altrimenti Sensore)",switch:"Scheda Switch di Controllo",sensor:"Scheda Sensore di Potenza"},label_color_mode:{auto_contrast:"Contrasto Intelligente Ottimale (Auto B/W)",white:"Bianco Puro (#ffffff)",black:"Nero Scuro (#0f172a)",match_entity:"Abbina al Colore dell'Entità",secondary:"Grigio Secondario Standard",custom:"Colore Personalizzato"},battery_type:{gradient:"Gradiente Radiale Dinamico (Energy Glow)",liquid:"Livello Liquido con Onda (Liquid Wave)"},load_animation:{rotate:"Rotazione Continua (Ventola / Motore)",pulse:"Pulsazione / Respiro Energetico",none:"Nessuna (Icone Statiche)"},line_routing_mode:{bezier_curved:"Archi Curvi Diretti (Bezier)",orthogonal_bus:"Canale Centrale a Bus (Ortogonale Morbido)"},inactive_wire_style:{dashed:"Tratteggiato (Dashed)",solid:"Continuo (Solid)"},home_glow_mode:{predominant:"Dinamico (Colore della fonte primaria attiva)",custom:"Fisso (Colore base della Casa)"}},error:{invalid_range:"Range non valido: il valore minimo deve essere strettamente inferiore al massimo.",duplicate_id:"L'ID del dispositivo deve essere univoco.",invalid_id:"L'ID deve iniziare con una lettera e contenere solo caratteri alfanumerici, trattini o underscore.",reserved_id:"Questo ID è riservato dal sistema.",missing_entity:"È richiesta almeno un'entità di potenza valida."}},rt={missing_entity:"È richiesta almeno un'entità di potenza valida.",invalid_range:"Range non valido: il valore minimo deve essere strettamente inferiore al massimo."},st={card:at,editor:nt,errors:rt};const lt={en:it||Object.freeze({__proto__:null,card:et,default:it,editor:tt,errors:ot}),it:st||Object.freeze({__proto__:null,card:at,default:st,editor:nt,errors:rt})};function ct(e,t="en"){const o=t.replace(/['"]+/g,"").replace("-","_").split("_")[0],i=lt[o]||lt.en,a=e.split(".");let n=i;for(const t of a){if(!n||"object"!=typeof n||!(t in n)){let t=lt.en;for(const o of a){if(!t||"object"!=typeof t||!(o in t))return e;t=t[o]}return"string"==typeof t?t:e}n=n[t]}return"string"==typeof n?n:e}let dt=class extends ce{constructor(){super(...arguments),this._watchedEntities=new Set,this._previousDeviceIds=new Set,this._gestureController=new Je((e,t)=>Qe(this,this._hass,e,t)),this._particlesMap=new Map,this._particleDomElements={},this._meteorDomElements={},this._meteorGradElements={},this._pathLUT={},this._lastAnimTimestamp=0,this._isCardVisible=!0,this._ripplePool=[],this._lastRippleTriggerTime={},this._liquidPhase=0,this._liquidAccumulator=0,this._lastNodePositions={},this._actualLayout="horizontal"}static async getConfigElement(){return await Promise.resolve().then(function(){return Ct}),document.createElement("simple-power-flow-card-editor")}static getStubConfig(e,t){const o=t||(e?.states?Object.keys(e.states):[]),i=t=>o.find(o=>{const i=o.toLowerCase(),a=e?.states?.[o],n="power"===a?.attributes?.device_class||"W"===a?.attributes?.unit_of_measurement||"kW"===a?.attributes?.unit_of_measurement;return t.some(e=>i.includes(e))&&(n||!e)});return{type:"custom:simple-power-flow-card",title:"Power Flow",solar:{entity:i(["solar","pv","fotovoltaico"])||"sensor.solar_power"},grid:{entity:i(["grid","rete","power_meter","import"])||"sensor.grid_power"},battery:{entity:i(["battery_power","accumulo","batteria"])||"sensor.battery_power"},home:{entity:i(["home_power","house_power","consumo_casa"])||"sensor.home_power"}}}static{this.styles=Ee}_purgeArc(e){this._particlesMap.delete(e),delete this._pathLUT[e],delete this._lastNodePositions[e],delete this._lastRippleTriggerTime[e],this._particleDomElements[e]&&(this._particleDomElements[e].remove(),delete this._particleDomElements[e]),this._meteorDomElements[e]&&(this._meteorDomElements[e].remove(),delete this._meteorDomElements[e]),this._meteorGradElements[e]&&(this._meteorGradElements[e].remove(),delete this._meteorGradElements[e])}setConfig(e){if(!e)throw new Error(ct("errors.missing_entity"));const t={...be,...e,styles:{...ge,...e.styles||{}}};if((!t.card_version||t.card_version<1)&&(t.card_version=1),void 0!==t.scale_min&&void 0!==t.scale_max&&t.scale_min>=t.scale_max){const e=t.scale_min;t.scale_min=t.scale_max,t.scale_max=e>t.scale_max?e:t.scale_max+100}if(void 0!==t.min_duration&&void 0!==t.max_duration&&t.min_duration>=t.max_duration){const e=t.min_duration;t.min_duration=t.max_duration,t.max_duration=e>t.max_duration?e:t.max_duration+.5}if(void 0!==t.min_stroke&&void 0!==t.max_stroke&&t.min_stroke>=t.max_stroke){const e=t.min_stroke;t.min_stroke=t.max_stroke,t.max_stroke=e>t.max_stroke?e:t.max_stroke+.5}const o=new Set((e.devices||[]).map(e=>e.id).filter(Boolean));for(const e of this._previousDeviceIds)o.has(e)||(this._purgeArc(`home-${e}`),this._purgeArc(e));this._previousDeviceIds=o,this._config=t,this._watchedEntities.clear();const i=e=>{e&&this._watchedEntities.add(e)};[this._config.solar,this._config.grid,this._config.battery,this._config.home].forEach(e=>{e&&(i(e.entity),i(e.entity_in),i(e.entity_out),i(e.entity_import),i(e.entity_export),i(e.entity_charge),i(e.entity_discharge),i(e.state_of_charge),i(e.entity_amperage),i(e.switch_entity),i(e.secondary_info?.entity))}),Array.isArray(this._config.devices)&&this._config.devices.forEach(e=>{i(e.entity),i(e.entity_amperage),i(e.switch_entity),i(e.secondary_info?.entity)}),this._checkInitialDimensions()}set hass(e){const t=this._hass;if(this._hass=e,!t||!e||!this._config)return void this.requestUpdate("hass",t);let o=!1;for(const i of this._watchedEntities){const a=t.states?.[i],n=e.states?.[i];if(a!==n&&(a?.state!==n?.state||a?.attributes?.unit_of_measurement!==n?.attributes?.unit_of_measurement)){o=!0;break}}o&&this.requestUpdate("hass",t)}getCardSize(){return"vertical"===this._actualLayout?6:4}getGridOptions(){return{columns:12,rows:"auto",min_columns:6,min_rows:3}}getLayoutOptions(){return{grid_columns:12,grid_rows:"auto",grid_min_columns:6,grid_min_rows:3}}connectedCallback(){super.connectedCallback(),this._setupObservers(),this._checkInitialDimensions(),this._startParticleAnimation()}firstUpdated(){this._checkInitialDimensions(),this._startParticleAnimation()}updated(){this._syncParticles()}disconnectedCallback(){super.disconnectedCallback(),this._cleanupObservers(),this._stopParticleAnimation(),this._ripplePool.forEach(e=>{e.anim&&e.anim.cancel()}),this._ripplePool=[],this._pathLUT={}}_checkInitialDimensions(){const e=this.getBoundingClientRect(),t=e.width>0?e.width:window.innerWidth;this._updateLayoutFromWidth(t)}_updateLayoutFromWidth(e){if("horizontal"===this._config?.layout_mode)return void("horizontal"!==this._actualLayout&&(this._actualLayout="horizontal",this._pathLUT={}));if("vertical"===this._config?.layout_mode)return void("vertical"!==this._actualLayout&&(this._actualLayout="vertical",this._pathLUT={}));const t=this._config?.auto_layout_breakpoint??520,o=e<=t||window.innerWidth<=t;o&&"vertical"!==this._actualLayout?(this._actualLayout="vertical",this._pathLUT={},this.requestUpdate()):!o&&e>t+20&&"horizontal"!==this._actualLayout&&(this._actualLayout="horizontal",this._pathLUT={},this.requestUpdate())}_setupObservers(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(e=>{for(const t of e){const e=t.contentRect.width;e<=0||(this._pathLUT={},this._updateLayoutFromWidth(e))}}),this._resizeObserver.observe(this)),window.addEventListener("resize",()=>{this._pathLUT={},this._checkInitialDimensions()}),this._intersectionObserver||(this._intersectionObserver=new IntersectionObserver(e=>{for(const t of e)this._isCardVisible=t.isIntersecting,t.isIntersecting&&(this._lastAnimTimestamp=0,this._startParticleAnimation())}),this._intersectionObserver.observe(this))}_cleanupObservers(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=void 0),this._intersectionObserver&&(this._intersectionObserver.disconnect(),this._intersectionObserver=void 0)}_startParticleAnimation(){this._animFrameId||(this._lastAnimTimestamp=performance.now(),this._animFrameId=requestAnimationFrame(this._animateParticles.bind(this)))}_stopParticleAnimation(){this._animFrameId&&(cancelAnimationFrame(this._animFrameId),this._animFrameId=void 0)}_syncParticles(){if(!this._config)return;const e={...ge,...this._config.styles||{}},t=ke(this._hass,this._config.solar,"solar"),o=ke(this._hass,this._config.grid,"grid"),i=ke(this._hass,this._config.battery,"battery"),a=ke(this._hass,this._config.home,"home"),n=[];Array.isArray(this._config.devices)&&this._config.devices.forEach(e=>{const t=ke(this._hass,e,"device");n.push({id:e.id,power:t.power,ampere:t.amperage,color:e.color,icon:e.icon,name:e.name,entityId:e.entity,include_in_home:!1!==e.include_in_home})});const r=We({solar:t.power,grid:o.power,battery:i.power,home:a.isValid?a.power:void 0,devices:n},this._config).arcs.filter(e=>e.isActive),s=this._config.effects||fe,l=Boolean(s.meteor_trail?.enabled)?2:1,c=Math.floor((this._config.max_total_particles??30)/l);let d=e.particles_per_arc;r.length*d>c&&(d=Math.max(1,Math.floor(c/r.length)));const p=new Set;r.forEach(t=>{p.add(t.id);const o=1/Math.max(.3,t.duration),i=Math.max(4,.75*t.strokeWidth+(e.particle_size_offset??1.8));for(let e=0;e<d;e++){const a=`${t.id}-${e}`,n=this._particlesMap.get(a);if(n)n.targetSpeed=o,n.radius=i,n.arcColor=t.color,n.targetNodeId=t.to,n.isFadingOut=!1;else{const n=e/d*1.35;this._particlesMap.set(a,{id:a,arcId:t.id,progress:n,prevNormProgress:n%1.35,speed:o,targetSpeed:o,radius:i,totalLength:0,arcColor:t.color,targetNodeId:t.to,isFadingOut:!1})}}for(let e=d;e<10;e++){const o=`${t.id}-${e}`,i=this._particlesMap.get(o);i&&(i.isFadingOut=!0)}});for(const[e,t]of this._particlesMap.entries())p.has(t.arcId)||(t.isFadingOut=!0);this._startParticleAnimation()}_getPathPoint(e,t){let o=this._pathLUT[e];if(!o){const t=this.shadowRoot?.querySelector(`#path-${CSS.escape(e)}`);if(!t)return null;const i=t.getTotalLength();if(!i||i<=0)return null;const a=100,n=[];for(let e=0;e<=a;e++)n.push(t.getPointAtLength(e/a*i));o={totalLength:i,points:n},this._pathLUT[e]=o}const i=Math.max(0,Math.min(1,t))*(o.points.length-1),a=Math.floor(i);if(a>=o.points.length-1)return{pt:o.points[o.points.length-1],totalLength:o.totalLength};const n=i-a,r=o.points[a],s=o.points[a+1];return{pt:{x:r.x+(s.x-r.x)*n,y:r.y+(s.y-r.y)*n},totalLength:o.totalLength}}_triggerImpactRipple(e,t){const o=performance.now();if(o-(this._lastRippleTriggerTime[e]||0)<180)return;this._lastRippleTriggerTime[e]=o;const i=this._lastNodePositions[e];if(!i)return;const a=this._config?.effects||fe,n=a.impact_ripples?.ripple_size??18,r=a.impact_ripples?.ripple_color||t,s=this.shadowRoot?.querySelector("g.ripples-layer");if(!s)return;let l=this._ripplePool.find(e=>!e.inUse);if(!l){if(!(this._ripplePool.length<12))return;{const e=document.createElementNS("http://www.w3.org/2000/svg","circle");e.setAttribute("class","impact-ripple-circle"),e.setAttribute("fill","none"),e.setAttribute("pointer-events","none"),e.style.display="none",s.appendChild(e),l={el:e,inUse:!1},this._ripplePool.push(l)}}l.inUse=!0;const c=l.el;if(c.style.display="",c.setAttribute("cx",i.x.toFixed(1)),c.setAttribute("cy",i.y.toFixed(1)),c.setAttribute("stroke",r),l.anim&&l.anim.cancel(),"function"==typeof c.animate){const e=c.animate([{r:`${i.radius.toFixed(1)}px`,opacity:"0.8",strokeWidth:"2.5px"},{r:`${(i.radius+n).toFixed(1)}px`,opacity:"0",strokeWidth:"0.5px"}],{duration:700,easing:"cubic-bezier(0.1, 0.7, 0.3, 1)",fill:"forwards"});l.anim=e,e.onfinish=()=>{c.style.display="none",l.inUse=!1,l.anim=void 0},e.oncancel=()=>{c.style.display="none",l.inUse=!1,l.anim=void 0}}else c.setAttribute("r",i.radius.toFixed(1)),setTimeout(()=>{c.style.display="none",l.inUse=!1},700)}_animateParticles(e){if(!this._isCardVisible)return void(this._animFrameId=void 0);const t="undefined"!=typeof window&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;this._lastAnimTimestamp||(this._lastAnimTimestamp=e);const o=Math.min((e-this._lastAnimTimestamp)/1e3,.033);this._lastAnimTimestamp=e;const i=this.shadowRoot?.querySelector("g.particles-layer"),a=this.shadowRoot?.querySelector("defs.dynamic-defs");if(!i)return void(this._animFrameId=requestAnimationFrame(this._animateParticles.bind(this)));const n=this._config?.effects||fe,r=Boolean(n.meteor_trail?.enabled&&!t),s=n.meteor_trail?.tail_length??.08,l=n.meteor_trail?.glow_intensity??1.5,c=this._config?.smoothing_factor??.35,d=[];for(const[e,p]of this._particlesMap.entries()){if(t||(p.speed+=(p.targetSpeed-p.speed)*Math.min(1,c*o*10),p.progress+=p.speed*o),p.isFadingOut&&p.progress>=1){d.push(e);continue}const h=p.progress%1.35;if(!t&&!p.isFadingOut&&p.prevNormProgress<1&&h>=1&&n.impact_ripples?.enabled&&this._triggerImpactRipple(p.targetNodeId,p.arcColor),p.prevNormProgress=h,h>1){const t=this._particleDomElements[e];t&&0!==p.lastOpacity&&(t.setAttribute("opacity","0"),p.lastOpacity=0);const o=this._meteorDomElements[e];o&&o.setAttribute("d","");continue}const _=h,m=this._getPathPoint(p.arcId,_);if(!m)continue;const u=m.pt;p.totalLength=m.totalLength;let g=1;const f=.12;_<f?g=Math.max(0,_/f):_>1-f&&(g=Math.max(0,(1-_)/f)),p.isFadingOut&&(g*=Math.max(0,1-_));let b=this._particleDomElements[e];b||(b=document.createElementNS("http://www.w3.org/2000/svg","circle"),b.setAttribute("pointer-events","none"),i.appendChild(b),this._particleDomElements[e]=b),b.setAttribute("cx",u.x.toFixed(1)),b.setAttribute("cy",u.y.toFixed(1)),p.lastRadius!==p.radius&&(b.setAttribute("r",p.radius.toFixed(1)),p.lastRadius=p.radius);const y=`url(#glow-arc-${p.arcId})`;if(p.lastFill!==y&&(b.setAttribute("fill",y),p.lastFill=y),(void 0===p.lastOpacity||Math.abs(p.lastOpacity-g)>.015||0===g&&0!==p.lastOpacity)&&(b.setAttribute("opacity",g.toFixed(3)),p.lastOpacity=g),r&&a){let t=this._meteorDomElements[e],o=this._meteorGradElements[e];if(!o){o=document.createElementNS("http://www.w3.org/2000/svg","linearGradient"),o.setAttribute("id",`meteor-grad-${e}`),o.setAttribute("gradientUnits","userSpaceOnUse");const t=document.createElementNS("http://www.w3.org/2000/svg","stop");t.setAttribute("offset","0%"),t.setAttribute("stop-color",p.arcColor),t.setAttribute("stop-opacity","0");const i=document.createElementNS("http://www.w3.org/2000/svg","stop");i.setAttribute("offset","100%"),i.setAttribute("stop-color",p.arcColor),i.setAttribute("stop-opacity",Math.min(1,l/1.5*.85).toFixed(2)),o.appendChild(t),o.appendChild(i),a.appendChild(o),this._meteorGradElements[e]=o}t||(t=document.createElementNS("http://www.w3.org/2000/svg","path"),t.setAttribute("pointer-events","none"),t.setAttribute("fill","none"),t.setAttribute("stroke-linecap","round"),t.setAttribute("stroke",`url(#meteor-grad-${e})`),i.insertBefore(t,b),this._meteorDomElements[e]=t);const n=Math.max(0,_-s);if(_-n>.001){const e=this._getPathPoint(p.arcId,n),i=this._getPathPoint(p.arcId,n+.33*(_-n)),a=this._getPathPoint(p.arcId,n+.66*(_-n)),r=e?e.pt:u,s=i?i.pt:u,c=a?a.pt:u,d=u,h=`M ${r.x.toFixed(1)} ${r.y.toFixed(1)} C ${s.x.toFixed(1)} ${s.y.toFixed(1)}, ${c.x.toFixed(1)} ${c.y.toFixed(1)}, ${d.x.toFixed(1)} ${d.y.toFixed(1)}`;t.setAttribute("d",h),t.setAttribute("stroke-width",(1.5*p.radius*Math.min(2.5,l)).toFixed(1)),t.setAttribute("opacity",g.toFixed(3));const m=p.lastGradCoords;(!m||Math.abs(m.x1-r.x)>2||Math.abs(m.y1-r.y)>2||Math.abs(m.x2-d.x)>2||Math.abs(m.y2-d.y)>2)&&(o.setAttribute("x1",r.x.toFixed(1)),o.setAttribute("y1",r.y.toFixed(1)),o.setAttribute("x2",d.x.toFixed(1)),o.setAttribute("y2",d.y.toFixed(1)),p.lastGradCoords={x1:r.x,y1:r.y,x2:d.x,y2:d.y})}else t.setAttribute("d","")}else{const t=this._meteorDomElements[e];t&&t.parentNode&&(t.parentNode.removeChild(t),delete this._meteorDomElements[e])}}for(const e of d){this._particlesMap.delete(e);const t=this._particleDomElements[e];t&&t.parentNode&&t.parentNode.removeChild(t),delete this._particleDomElements[e];const o=this._meteorDomElements[e];o&&o.parentNode&&o.parentNode.removeChild(o),delete this._meteorDomElements[e];const i=this._meteorGradElements[e];i&&i.parentNode&&i.parentNode.removeChild(i),delete this._meteorGradElements[e]}if(!t&&n.living_icons?.enabled&&"liquid"===n.living_icons.battery_type&&!1!==n.living_icons.battery_animated&&(this._liquidAccumulator+=o,this._liquidAccumulator>=.033)){this._liquidPhase=((this._liquidPhase||0)+3*this._liquidAccumulator)%(2*Math.PI),this._liquidAccumulator=0;const e=this.shadowRoot?.querySelector("#liquid-wave-battery"),t=this._lastNodePositions.battery;if(e&&t){const o=ke(this._hass,this._config.battery,"battery").socPercent??50,i=t.y+t.radius-o/100*(2*t.radius),a=3.2*Math.sin(this._liquidPhase),n=`M ${(t.x-t.radius).toFixed(1)} ${i.toFixed(1)} Q ${(t.x-t.radius/2).toFixed(1)} ${(i+a).toFixed(1)} ${t.x.toFixed(1)} ${i.toFixed(1)} T ${(t.x+t.radius).toFixed(1)} ${i.toFixed(1)} L ${(t.x+t.radius).toFixed(1)} ${(t.y+t.radius).toFixed(1)} L ${(t.x-t.radius).toFixed(1)} ${(t.y+t.radius).toFixed(1)} Z`;e.setAttribute("d",n)}}this._animFrameId=requestAnimationFrame(this._animateParticles.bind(this))}_handleBadgeClick(e,t){t.stopPropagation(),t.preventDefault(),this._gestureController.handlePointerCancel();const o=e.switchEntityId,i=e.entityId;let a=e.badgeTapBehavior||"auto";if("auto"===a)if(o){const e=o.split(".")[0];a=["climate","media_player","cover","lock","vacuum"].includes(e)?"more-info-switch":"toggle"}else a="more-info-sensor";if("toggle"===a)o&&Qe(this,this._hass,e,"toggle");else if("more-info-switch"===a||"more-info"===a){const e=o||i;if(e){const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}});this.dispatchEvent(t)}}else if("more-info-sensor"===a){const e=i||o;if(e){const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}});this.dispatchEvent(t)}}}_handleNodeKeyDown(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Qe(this,this._hass,t,"tap"))}render(){if(!this._config)return q``;const e=this._hass?.language||"en",t=this._config.decimals??2,o=this._config.w_to_kw_threshold??1e3,i={...ge,...this._config.styles||{}},a={...fe,...this._config.effects||{}},n=ke(this._hass,this._config.solar,"solar"),r=ke(this._hass,this._config.grid,"grid"),s=ke(this._hass,this._config.battery,"battery"),l=ke(this._hass,this._config.home,"home"),c=[];Array.isArray(this._config.devices)&&this._config.devices.forEach(e=>{const t=ke(this._hass,e,"device");c.push({...e,power:t.power,ampere:t.amperage,entityId:e.entity,include_in_home:!1!==e.include_in_home})});const d=[];this._watchedEntities.forEach(e=>{this._hass?.states&&!(e in this._hass.states)&&d.push(e)});const p=We({solar:n.power,grid:r.power,battery:s.power,home:l.isValid?l.power:void 0,devices:c},this._config),h=this._actualLayout,_="horizontal"===h?Ve:je,m=i.node_radius_primary,u=i.node_radius_secondary,g=i.spacing_horizontal,f=i.spacing_vertical,b={};Object.keys(_.nodes).forEach(e=>{b[e]={..._.nodes[e],radius:m}});let y=`0 0 ${_.viewBox.width} ${_.viewBox.height}`;if("horizontal"===h){const e=Ve;if(c.forEach((t,o)=>{const i=Math.floor(o/2),a=o%2,n=e.devicesHorizontal.startX+i*g,r=0===a?e.devicesHorizontal.rowTopY:e.devicesHorizontal.rowBottomY;b[t.id]={x:n,y:r,radius:u}}),c.length>2){const t=Math.ceil(c.length/2),o=e.devicesHorizontal.startX+t*g+35;y=`0 0 ${Math.max(620,o)} 410`}}else{const e=je;if(c.forEach((t,o)=>{const i=o%2,a=Math.floor(o/2),n=0===i?e.devicesVertical.colLeftX:e.devicesVertical.colRightX,r=e.devicesVertical.startY+a*f;b[t.id]={x:n,y:r,radius:u}}),c.length>2){const t=Math.ceil(c.length/2),o=e.devicesVertical.startY+t*f+45;y=`0 0 440 ${Math.max(560,o)}`}}this._lastNodePositions=b;const v=p.arcs.find(e=>"solar-home"===e.id),x=p.arcs.find(e=>"battery-home"===e.id),w=p.arcs.find(e=>"grid-home"===e.id),$=v?.value||0,C=x?.value||0,S=w?.value||0,A=this._config.display_zero_tolerance??0,M=s.power,F=Math.abs(M)<=A,z=Be(this._config.battery?.color_charge||this._config.battery?.color,we),E=Be(this._config.battery?.color_discharge,$e),P=Be(this._config.battery?.color_idle,"var(--secondary-text-color, #94a3b8)"),I=Boolean(this._config.battery?.use_idle_color);let k;k=F?I?P:z:M>0?z:E;const T=$+C+S,D=[];T>0&&($>0&&D.push({id:"solar",color:Be(this._config.solar?.color,ye),percentage:$/T,value:$}),C>0&&D.push({id:"battery",color:E,percentage:C/T,value:C}),S>0&&D.push({id:"grid",color:Be(this._config.grid?.color,ve),percentage:S/T,value:S}));let L,N=Be(this._config.home?.color,Ce);if("predominant"===i.home_glow_mode&&D.length>0){const e=[...D].sort((e,t)=>t.value-e.value);e[0]&&e[0].value>0&&(N=e[0].color)}const O=Be(this._config.grid?.color,ve),B=xe;if(r.isDual)L=[{text:`← ${Ge(r.inPower||0,t,o,this._hass).full}`,color:O},{text:`→ ${Ge(r.outPower||0,t,o,this._hass).full}`,color:B}];else{const e=r.power;L=[{text:`${e>=0?"←":"→"} ${Ge(Math.abs(e),t,o,this._hass).full}`,color:e>=0?O:B}]}let U;if(s.isDual)U=[{text:`↓ ${Ge(s.inPower||0,t,o,this._hass).full}`,color:z},{text:`↑ ${Ge(s.outPower||0,t,o,this._hass).full}`,color:E}];else{const e=F&&I?P:M>=0?z:E;U=[{text:`${M>=0?"↓":"↑"} ${Ge(Math.abs(M),t,o,this._hass).full}`,color:e}]}const R=(e,o,a=!1)=>{const n=function(e){if(!e||"object"!=typeof e)return e;const t={...e},o=[{actionKey:"tap_action",targetKey:"tap_more_info_target"},{actionKey:"hold_action",targetKey:"hold_more_info_target"},{actionKey:"double_tap_action",targetKey:"double_tap_more_info_target"}];for(const{actionKey:e,targetKey:i}of o){const o=t[e];if(o&&"object"==typeof o){const a=o.action;"more-info-switch"===a||"more-info-device"===a?(t[e]={...o,action:"more-info"},t[i]||(t[i]="switch")):"more-info-sensor"===a&&(t[e]={...o,action:"more-info"},t[i]||(t[i]="sensor"))}}return t}(e||{}),r=n.show_label??i.show_labels??!0,s=n.label_font_size??i.font_size_label??10,l=n.label_spacing_below_node??i.spacing_label_below_node??14,c=n.label_chip_enabled??i.label_chip_enabled??!1,d=n.label_chip_opacity??i.label_chip_opacity??.18,p=n.label_chip_padding_x??i.label_chip_padding_x??8,h=n.label_chip_padding_y??i.label_chip_padding_y??3.5,_=n.label_border_radius??i.label_border_radius??6,m=n.label_border_width??i.label_border_width??1,u=Be(n.label_color||i.label_color,""),g=n.label_color_mode??i.label_color_mode??"auto_contrast";let f=n.switch_entity;if(!f&&o){const e=o.split(".")[0];["switch","light","fan","input_boolean"].includes(e)&&(f=o)}let b=null;if(f&&this._hass?.states?.[f]){const e=this._hass.states[f].state;b="on"===e||"off"===e||"unavailable"===e?e:"unknown"}const y=Boolean(f),v=a?Boolean(n.badge_enabled&&y):void 0!==n.badge_enabled?Boolean(n.badge_enabled):Boolean(y),x=n.badge_style??"dot",w=n.badge_position??"top_right",$=n.badge_size??("icon"===x?15:9),C=Be(n.badge_color_on,"#4caf50"),S=Be(n.badge_color_off,"#64748b"),A=n.badge_pulse??!0,M=n.badge_quick_toggle??!0;let F,z=n.badge_tap_behavior;if(!z&&f){const e=f.split(".")[0];z=["climate","media_player","cover","lock","vacuum"].includes(e)?"more-info":"toggle"}if(n.secondary_info?.entity&&this._hass?.states?.[n.secondary_info.entity]){const e=this._hass.states[n.secondary_info.entity],o=n.secondary_info.decimals??t,i=parseFloat(e.state),a=isNaN(i)?e.state:i.toFixed(o),r=void 0!==n.secondary_info.unit?n.secondary_info.unit:e.attributes?.unit_of_measurement||"";F=`${a}${r?` ${r}`:""}`}return{showLabel:r,labelFontSize:s,labelSpacing:l,labelChipEnabled:c,labelChipOpacity:d,labelChipPaddingX:p,labelChipPaddingY:h,labelBorderRadius:_,labelBorderWidth:m,labelColor:u,labelColorMode:g,switchEntityId:f,switchState:b,tapAction:n.tap_action,holdAction:n.hold_action,doubleTapAction:n.double_tap_action,tapMoreInfoTarget:n.tap_more_info_target,holdMoreInfoTarget:n.hold_more_info_target,doubleTapMoreInfoTarget:n.double_tap_more_info_target,badgeEnabled:v,badgeStyle:x,badgePosition:w,badgeSize:$,badgeColorOn:C,badgeColorOff:S,badgePulse:A,badgeQuickToggle:M,badgeTapBehavior:z,secondaryInfoText:F}},W=[{id:"solar",label:this._config.solar?.name||ct("card.solar",e),icon:this._config.solar?.icon||Se,color:Be(this._config.solar?.color,ye),value:Ge(n.power,t,o,this._hass).value,unit:Ge(n.power,t,o,this._hass).unit,amperage:n.amperage,topInfo:void 0!==n.amperage?`${n.amperage} A`:void 0,isActive:n.power>A,isUnavailable:n.isUnavailable,x:b.solar.x,y:b.solar.y,radius:b.solar.radius,entityId:this._config.solar?.entity,styles:i,effects:a,isSecondary:!1,iconSize:i.icon_size_primary,...R(this._config.solar,this._config.solar?.entity,!0)},{id:"grid",label:this._config.grid?.name||ct("card.grid",e),icon:this._config.grid?.icon||Ae,color:Be(this._config.grid?.color,r.power>=0?ve:xe),value:Ge(Math.abs(r.power),t,o,this._hass).value,unit:Ge(Math.abs(r.power),t,o,this._hass).unit,extraValues:L,amperage:r.amperage,topInfo:void 0!==r.amperage?`${r.amperage} A`:void 0,isActive:Math.abs(r.power)>A,isUnavailable:r.isUnavailable,x:b.grid.x,y:b.grid.y,radius:b.grid.radius,entityId:this._config.grid?.entity||this._config.grid?.entity_import||this._config.grid?.entity_export,styles:i,effects:a,isSecondary:!1,iconSize:i.icon_size_primary,...R(this._config.grid,this._config.grid?.entity||this._config.grid?.entity_import||this._config.grid?.entity_export,!0)},{id:"battery",label:this._config.battery?.name||ct("card.battery",e),icon:this._config.battery?.icon||Me,color:k,value:Ge(Math.abs(s.power),t,o,this._hass).value,unit:Ge(Math.abs(s.power),t,o,this._hass).unit,extraValues:U,topInfo:s.soc||(void 0!==s.amperage?`${s.amperage} A`:void 0),socPercent:s.socPercent,amperage:s.amperage,isActive:Math.abs(s.power)>A,isUnavailable:s.isUnavailable,x:b.battery.x,y:b.battery.y,radius:b.battery.radius,entityId:this._config.battery?.entity||this._config.battery?.entity_charge||this._config.battery?.entity_discharge,styles:i,effects:a,isSecondary:!1,iconSize:i.icon_size_primary,...R(this._config.battery,this._config.battery?.entity||this._config.battery?.entity_charge||this._config.battery?.entity_discharge,!0)},{id:"home",label:this._config.home?.name||ct("card.home",e),icon:this._config.home?.icon||Fe,color:N,value:Ge(p.homeConsumption,t,o,this._hass).value,unit:Ge(p.homeConsumption,t,o,this._hass).unit,secondaryText:p.untrackedDevicesPower>A?`${ct("card.not_tracked",e)}: ${Ge(p.untrackedDevicesPower,0,o,this._hass).full}`:void 0,isActive:p.homeConsumption>A,isUnavailable:l.isUnavailable&&!n.isValid&&!r.isValid,x:b.home.x,y:b.home.y,radius:b.home.radius,entityId:this._config.home?.entity,mixSegments:D,styles:i,effects:a,isSecondary:!1,iconSize:i.icon_size_primary,...R(this._config.home,this._config.home?.entity,!0)}];return c.forEach(e=>{const n=b[e.id];n&&W.push({id:e.id,label:e.name||e.id,icon:e.icon||ze,color:Be(e.color,"var(--energy-device-color, #00bcd4)"),value:Ge(e.power,t,o,this._hass).value,unit:Ge(e.power,t,o,this._hass).unit,topInfo:void 0!==e.ampere?`${e.ampere} A`:void 0,isActive:e.power>A,isUnavailable:!1,x:n.x,y:n.y,radius:n.radius,entityId:e.entityId,styles:i,effects:a,isSecondary:!0,iconSize:i.icon_size_secondary,...R(e,e.entityId,!1)})}),q`
      <ha-card>
        ${this._config.title?q`<div class="card-header">${this._config.title}</div>`:""}

        ${d.length>0&&!this._config.solar?.entity?.includes("dummy")?q`
          <div class="warning-box">
            <span>⚠️ Entità non trovate in Home Assistant: ${d.join(", ")}</span>
          </div>
        `:""}

        <div class="flow-container">
          <svg class="flow-svg"
               viewBox="${y}"
               role="group"
               aria-label="${this._config.title||"Power Flow Card"}">
            
            ${function(e=[],t){const o=t?.particle_inner_glow??!0,i=t?.particle_soft_edge??!0;return G`
    <defs>
      <!-- Base Gradients Fallbacks -->
      <radialGradient id="glow-solar" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${o?"#ffffff":"var(--energy-solar-color, #ff9800)"}" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-solar-color, #ff9800)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-solar-color, #ff9800)" stop-opacity="${i?"0.7":"1"}" />
        <stop offset="100%" stop-color="var(--energy-solar-color, #ff9800)" stop-opacity="${i?"0":"1"}" />
      </radialGradient>

      <radialGradient id="glow-grid-import" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${o?"#ffffff":"var(--energy-grid-consumption-color, #f44336)"}" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-grid-consumption-color, #f44336)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-grid-consumption-color, #f44336)" stop-opacity="${i?"0.7":"1"}" />
        <stop offset="100%" stop-color="var(--energy-grid-consumption-color, #f44336)" stop-opacity="${i?"0":"1"}" />
      </radialGradient>

      <radialGradient id="glow-grid-export" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${o?"#ffffff":"var(--energy-grid-return-color, #4caf50)"}" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-grid-return-color, #4caf50)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-grid-return-color, #4caf50)" stop-opacity="${i?"0.7":"1"}" />
        <stop offset="100%" stop-color="var(--energy-grid-return-color, #4caf50)" stop-opacity="${i?"0":"1"}" />
      </radialGradient>

      <radialGradient id="glow-battery-charge" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${o?"#ffffff":"var(--energy-battery-in-color, #4caf50)"}" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-battery-in-color, #4caf50)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-battery-in-color, #4caf50)" stop-opacity="${i?"0.7":"1"}" />
        <stop offset="100%" stop-color="var(--energy-battery-in-color, #4caf50)" stop-opacity="${i?"0":"1"}" />
      </radialGradient>

      <radialGradient id="glow-battery-discharge" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${o?"#ffffff":"var(--energy-battery-out-color, #9c27b0)"}" stop-opacity="1" />
        <stop offset="35%" stop-color="var(--energy-battery-out-color, #9c27b0)" stop-opacity="1" />
        <stop offset="70%" stop-color="var(--energy-battery-out-color, #9c27b0)" stop-opacity="${i?"0.7":"1"}" />
        <stop offset="100%" stop-color="var(--energy-battery-out-color, #9c27b0)" stop-opacity="${i?"0":"1"}" />
      </radialGradient>

      <!-- Dynamic Arc Gradients: Each wire/arc gets its own gradient precisely matching its color -->
      ${e.map(e=>G`
        <radialGradient id="glow-arc-${e.id}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${o?"#ffffff":e.color}" stop-opacity="1" />
          <stop offset="35%" stop-color="${e.color}" stop-opacity="1" />
          <stop offset="70%" stop-color="${e.color}" stop-opacity="${i?"0.7":"1"}" />
          <stop offset="100%" stop-color="${e.color}" stop-opacity="${i?"0":"1"}" />
        </radialGradient>
      `)}
    </defs>
  `}(p.arcs,i)}
            <defs class="dynamic-defs"></defs>

            <!-- Layer 1: Wires -->
            <g class="wires-layer">
              ${(()=>{const e=p.arcs.filter(e=>e.id.startsWith("home-"));return p.arcs.map(t=>{const o=b[t.from],a=b[t.to];if(!o||!a)return G``;const n=t.id.startsWith("home-")?e.findIndex(e=>e.id===t.id):0,r=function(e,t,o,i,a=0,n=1,r){const s=r?.line_routing_mode||"bezier_curved",l=r?.bus_lane_spacing??8,c=r?.bus_corner_radius??20,d=Math.min(12,.4*e.radius),p=Math.min(12,.4*t.radius),h=Math.max(4,e.radius-d),_=Math.max(4,t.radius-p),m=t.x-e.x,u=t.y-e.y,g=Math.atan2(u,m),f=He({x:e.x,y:e.y},h,g),b=He({x:t.x,y:t.y},_,g+Math.PI);if("horizontal"===o){if("solar-home"===i){const o=He({x:e.x,y:e.y},h,.1),i=He({x:t.x,y:t.y},_,-Math.PI/2);return`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} Q ${t.x.toFixed(1)} ${e.y.toFixed(1)} ${i.x.toFixed(1)} ${i.y.toFixed(1)}`}if("battery-home"===i){const o=He({x:e.x,y:e.y},h,-.1),i=He({x:t.x,y:t.y},_,Math.PI/2);return`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} Q ${t.x.toFixed(1)} ${e.y.toFixed(1)} ${i.x.toFixed(1)} ${i.y.toFixed(1)}`}if("solar-battery"===i){const o=He({x:e.x,y:e.y},h,Math.PI/2),i=He({x:t.x,y:t.y},_,-Math.PI/2);return`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} L ${i.x.toFixed(1)} ${i.y.toFixed(1)}`}if(i&&i.startsWith("home-")){const o=t.y<e.y;if("orthogonal_bus"===s){const i=Math.floor(a/2),s=Math.max(0,Math.ceil(n/2)-1),d=((r?.invert_bus_lane_order?s-i:i)+.5)*l,p=o?e.y-d:e.y+d,m=Math.asin(Math.max(-.9,Math.min(.9,(p-e.y)/h))),u=e.x+Math.cos(m)*h,g=t.x,f=o?t.y+_:t.y-_,b=Math.min(c,.45*Math.abs(g-u),.45*Math.abs(f-p)),y=Math.max(6,b);if(o){const e=g-y,t=p-y;return`M ${u.toFixed(1)} ${p.toFixed(1)} L ${e.toFixed(1)} ${p.toFixed(1)} C ${(e+.55*y).toFixed(1)} ${p.toFixed(1)}, ${g.toFixed(1)} ${(p-.45*y).toFixed(1)}, ${g.toFixed(1)} ${t.toFixed(1)} L ${g.toFixed(1)} ${f.toFixed(1)}`}{const e=g-y,t=p+y;return`M ${u.toFixed(1)} ${p.toFixed(1)} L ${e.toFixed(1)} ${p.toFixed(1)} C ${(e+.55*y).toFixed(1)} ${p.toFixed(1)}, ${g.toFixed(1)} ${(p+.45*y).toFixed(1)}, ${g.toFixed(1)} ${t.toFixed(1)} L ${g.toFixed(1)} ${f.toFixed(1)}`}}{const o=He({x:e.x,y:e.y},h,0),i=He({x:t.x,y:t.y},_,Math.PI),a=Math.max(40,i.x-o.x),n=o.x+.45*a,r=o.y,s=o.x+.55*a,l=i.y;return`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} C ${n.toFixed(1)} ${r.toFixed(1)}, ${s.toFixed(1)} ${l.toFixed(1)}, ${i.x.toFixed(1)} ${i.y.toFixed(1)}`}}return`M ${f.x.toFixed(1)} ${f.y.toFixed(1)} L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`}if("solar-home"===i){const o=He({x:e.x,y:e.y},h,Math.PI/2),i=He({x:t.x,y:t.y},_,-Math.PI/2);return`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} L ${i.x.toFixed(1)} ${i.y.toFixed(1)}`}if("grid-battery"===i){const o=He({x:e.x,y:e.y},h,0),i=He({x:t.x,y:t.y},_,Math.PI);return`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} L ${i.x.toFixed(1)} ${i.y.toFixed(1)}`}if(i&&i.startsWith("home-")){const o=t.x<e.x;if("orthogonal_bus"===s){const i=Math.floor(a/2),s=Math.max(0,Math.ceil(n/2)-1),d=((r?.invert_bus_lane_order?s-i:i)+.5)*l,p=o?e.x-d:e.x+d,m=Math.max(-.9,Math.min(.9,(p-e.x)/h)),u=Math.PI/2+Math.asin(m),g=e.y+Math.sin(u)*h,f=o?t.x+_:t.x-_,b=t.y,y=Math.min(c,.45*Math.abs(f-p),.45*Math.abs(b-g)),v=Math.max(6,y);if(o){const e=b-v,t=p-v;return`M ${p.toFixed(1)} ${g.toFixed(1)} L ${p.toFixed(1)} ${e.toFixed(1)} C ${p.toFixed(1)} ${(e+.55*v).toFixed(1)}, ${(p-.45*v).toFixed(1)} ${b.toFixed(1)}, ${t.toFixed(1)} ${b.toFixed(1)} L ${f.toFixed(1)} ${b.toFixed(1)}`}{const e=b-v,t=p+v;return`M ${p.toFixed(1)} ${g.toFixed(1)} L ${p.toFixed(1)} ${e.toFixed(1)} C ${p.toFixed(1)} ${(e+.55*v).toFixed(1)}, ${(p+.45*v).toFixed(1)} ${b.toFixed(1)}, ${t.toFixed(1)} ${b.toFixed(1)} L ${f.toFixed(1)} ${b.toFixed(1)}`}}{const i=He({x:e.x,y:e.y},h,Math.PI/2),a=o?0:Math.PI,n=He({x:t.x,y:t.y},_,a),r=Math.max(40,n.y-i.y),s=i.x,l=i.y+.45*r,c=n.x+(o?20:-20),d=i.y+.65*r;return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} C ${s.toFixed(1)} ${l.toFixed(1)}, ${c.toFixed(1)} ${d.toFixed(1)}, ${n.x.toFixed(1)} ${n.y.toFixed(1)}`}}return`M ${f.x.toFixed(1)} ${f.y.toFixed(1)} L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`}(o,a,h,t.id,n,e.length,i);return function(e,t,o){const i=e.isActive?e.color:e.targetColor||e.color,a=e.isActive?1:o?.inactive_wire_opacity??.35,n=!e.isActive&&"solid"!==o?.inactive_wire_style;return G`
    <path id="path-${e.id}"
          class="flow-wire ${e.isActive?"":"inactive"} ${n?"inactive-dashed":""}"
          d="${t}"
          stroke="${i}"
          stroke-opacity="${a}"
          stroke-width="${e.strokeWidth}" />
  `}(t,r,i)})})()}
            </g>

            <!-- Layer 2: Impact Shockwave Ripples -->
            <g class="ripples-layer"></g>

            <!-- Layer 3: Particles (Managed via continuous RAF Engine for Zero Glitch & Smooth Flow) -->
            <g class="particles-layer"></g>

            <!-- Layer 4: Nodes -->
            <g class="nodes-layer">
              ${W.map(e=>function(e,t,o,i,a,n,r,s,l){const c=s||e.styles||{},d=l||e.effects||{},p=[e.secondaryText,e.secondaryInfoText].filter(Boolean).join(" - "),h=`${e.label}: ${e.value} ${e.unit}${p?` (${p})`:""}`,_=2*Math.PI*e.radius;let m=[];const u=!1!==c.show_home_mix_ring;if(u&&e.mixSegments&&e.mixSegments.length>0&&0!==Number(e.value)){let t=0;m=e.mixSegments.map(o=>{const i=o.percentage*_,a=-t;return t+=i,G`
        <circle class="node-mix-segment"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius}"
                fill="none"
                stroke="${o.color}"
                stroke-width="${c.node_border_width??3.5}"
                stroke-dasharray="${i.toFixed(2)} ${_.toFixed(2)}"
                stroke-dashoffset="${a.toFixed(2)}"
                transform="rotate(-90 ${e.x} ${e.y})" />
      `})}const g="solar"===e.id||"grid"===e.id||"battery"===e.id||"home"===e.id,f=void 0!==e.isSecondary?e.isSecondary:!g,b=Boolean(e.extraValues&&e.extraValues.length>0),y=Boolean(b&&(e.extraValues?.length||0)>=2),v=Boolean(e.topInfo),x=e.iconSize||(f?c.icon_size_secondary??16:c.icon_size_primary??18),w=c.spacing_text_above_icon??4,$=c.spacing_text_below_icon??4,C=e.x-x/2;let S=e.y-x/2,A=S-w-2,M=S+x+$+9,F=S+x+$+8,z=F+(c.font_size_directional?c.font_size_directional+3:11.5);f?v?(S=e.y-x/2-1,A=S-w-2,M=S+x+$+8):(S=e.y-x-1,M=S+x+$+8):v&&y?(S=e.y-x/2-4,A=S-w-3,F=S+x+$+8,z=F+(c.font_size_directional?c.font_size_directional+3:11.5)):v&&!y?(S=e.y-x/2-3,A=S-w-3,M=S+x+$+9,F=M):!v&&y?(S=e.y-x-4,F=S+x+$+7,z=F+(c.font_size_directional?c.font_size_directional+3:11.5)):(S=e.y-x-2,M=S+x+$+9);const E=!1!==e.showLabel,P=e.labelFontSize??c.font_size_label??10,I=e.labelSpacing??c.spacing_label_below_node??14,k=Boolean(e.labelChipEnabled),T=e.labelChipOpacity??c.label_chip_opacity??.18,D=e.labelChipPaddingX??c.label_chip_padding_x??8,L=e.labelChipPaddingY??c.label_chip_padding_y??3.5,N=e.labelBorderRadius??c.label_border_radius??6,O=e.labelBorderWidth??c.label_border_width??1,B=e.labelColorMode??c.label_color_mode??"auto_contrast",U=e.y+e.radius+I;let R=!1,W=e.label.length,H=G`<tspan x="${e.x}">${e.label}</tspan>`;if(e.label.length>11)if(e.label.includes("/")){const t=e.label.split("/"),o=t[0]+"/",i=t.slice(1).join("/");R=!0,W=Math.max(o.length,i.length),H=G`
        <tspan x="${e.x}" dy="0">${o}</tspan>
        <tspan x="${e.x}" dy="${(1.15*P).toFixed(1)}">${i}</tspan>
      `}else if(e.label.includes(" ")){const t=e.label.split(" "),o=Math.ceil(t.length/2),i=t.slice(0,o).join(" "),a=t.slice(o).join(" ");R=!0,W=Math.max(i.length,a.length),H=G`
        <tspan x="${e.x}" dy="0">${i}</tspan>
        <tspan x="${e.x}" dy="${(1.15*P).toFixed(1)}">${a}</tspan>
      `}const q=.62*P,V=Math.max(24,W*q+2*D),j=R?2.2*P+2*L:1.15*P+2*L,Y=e.x-V/2,X=U-.85*P-L;let Z;Z="auto_contrast"===B?k?Ye(e.color,T):e.color:"white"===B?"#ffffff":"black"===B?"#0f172a":"match_entity"===B?e.color:"custom"===B&&(e.labelColor||c.label_color)?e.labelColor||c.label_color||"#ffffff":"var(--secondary-text-color, #94a3b8)";const K=U+(R?2.3*P:1.2*P)+6,Q=`\n    --node-hover-color: ${e.color};\n    --node-hover-glow-radius: ${c.hover_glow_radius??10}px;\n    --node-border-width: ${c.node_border_width??2.5}px;\n    --node-shadow-blur: ${c.node_shadow_blur??10}px;\n    --node-shadow-opacity: ${c.node_shadow_opacity??.35};\n    --node-shadow-offset-y: ${c.node_shadow_offset_y??4}px;\n    --font-size-value: ${c.font_size_value??10}px;\n    --font-size-label: ${P}px;\n    --font-size-top-info: ${c.font_size_top_info??8}px;\n    --font-size-directional: ${c.font_size_directional??8.5}px;\n  `;let J="";if(d.living_icons?.enabled&&e.isActive&&("home"===e.id||f)){const e=d.living_icons.load_animation||"rotate";"rotate"===e?J="animate-rotate":"pulse"===e&&(J="animate-pulse")}const ee="battery"===e.id,te=Boolean(ee&&d.living_icons?.enabled&&"liquid"===d.living_icons.battery_type),oe=Boolean(ee&&d.living_icons?.enabled&&"gradient"===d.living_icons.battery_type),ie=Boolean(d.glassmorphism?.enabled),ae=(d.glassmorphism?.intensity??50)/50,ne=Boolean(ie&&!1!==d.glassmorphism?.neon_core);let re="";if(te){const t=e.socPercent??50,o=e.y+e.radius-t/100*(2*e.radius);re=`M ${e.x-e.radius} ${o} Q ${e.x-e.radius/2} ${o-3} ${e.x} ${o} T ${e.x+e.radius} ${o} L ${e.x+e.radius} ${e.y+e.radius} L ${e.x-e.radius} ${e.y+e.radius} Z`}let se=e.x+.707*e.radius,le=e.y-.707*e.radius;"top_left"===e.badgePosition?(se=e.x-.707*e.radius,le=e.y-.707*e.radius):"bottom_right"===e.badgePosition?(se=e.x+.707*e.radius,le=e.y+.707*e.radius):"bottom_left"===e.badgePosition&&(se=e.x-.707*e.radius,le=e.y+.707*e.radius);const ce="on"===e.switchState||null===e.switchState&&e.isActive,de=ce?e.badgeColorOn||"#4caf50":e.badgeColorOff||"#64748b",pe=e.badgeSize||("icon"===e.badgeStyle?15:9),he=pe/2,_e=Boolean(e.badgePulse&&ce&&e.isActive);return G`
    <g class="node-group ${"off"===e.switchState?"node-is-off":""}"
       tabindex="0"
       role="button"
       style="${Q}"
       aria-label="${h}"
       @pointerdown=${o=>t(o,e)}
       @pointermove=${e=>o(e)}
       @pointerup=${t=>i(t,e)}
       @pointercancel=${()=>a()}
       @pointerleave=${()=>a()}
       @contextmenu=${e=>e.preventDefault()}
       @keydown=${t=>r(t,e)}>

      <defs>
        ${te?G`
          <clipPath id="node-clip-${e.id}">
            <circle cx="${e.x}" cy="${e.y}" r="${e.radius-1}" />
          </clipPath>
        `:""}

        ${oe?G`
          <radialGradient id="battery-glow-${e.id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="${e.color}" stop-opacity="${Math.min(.45,(e.socPercent??50)/100*.45).toFixed(2)}" />
            <stop offset="100%" stop-color="${e.color}" stop-opacity="0" />
          </radialGradient>
        `:""}

        ${ie?G`
          <linearGradient id="glass-glare-${e.id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="${(.28*ae).toFixed(2)}" />
            <stop offset="40%" stop-color="#ffffff" stop-opacity="${(.08*ae).toFixed(2)}" />
            <stop offset="65%" stop-color="#ffffff" stop-opacity="0" />
            <stop offset="100%" stop-color="#000000" stop-opacity="${(.22*ae).toFixed(2)}" />
          </linearGradient>
        `:""}
      </defs>
      
      <!-- Base Background Circle -->
      <circle class="node-circle-bg ${e.isUnavailable?"unavailable":""}"
              cx="${e.x}"
              cy="${e.y}"
              r="${e.radius}"
              stroke="${u&&e.mixSegments&&e.mixSegments.length>0?"transparent":e.color}" />

      <!-- Energy Mix Segments (Home node) -->
      ${m}

      <!-- Battery Liquid Wave -->
      ${te?G`
        <path id="liquid-wave-${e.id}"
              class="node-liquid-wave"
              clip-path="url(#node-clip-${e.id})"
              fill="${e.color}"
              opacity="0.32"
              d="${re}" />
      `:""}

      <!-- Battery Dynamic Radial Gradient Glow -->
      ${oe?G`
        <circle class="node-battery-glow"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius-2}"
                fill="url(#battery-glow-${e.id})"
                pointer-events="none" />
      `:""}

      <!-- Glassmorphism 3D Glare Filter -->
      ${ie?G`
        <circle class="node-glass-glare"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius-1}"
                fill="url(#glass-glare-${e.id})" />
      `:""}

      <!-- Neon Core Concentric Inner Glowing Ring -->
      ${ne?G`
        <circle class="node-neon-ring"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius-3.5}"
                stroke="${e.color}"
                stroke-width="1.5"
                stroke-opacity="${(.65*ae).toFixed(2)}" />
      `:""}

      <!-- Top Info (e.g. SoC 65% or Amperage 1 A) -->
      ${v?G`
        <text class="node-top-info" x="${e.x}" y="${A.toFixed(1)}">
          ${e.topInfo}
        </text>
      `:""}

      <!-- Center Icon with direct pixel dimensions and Living Icon animation class -->
      <foreignObject x="${C.toFixed(1)}" y="${S.toFixed(1)}" width="${x.toFixed(1)}" height="${x.toFixed(1)}" style="overflow: visible;">
        <div class="node-icon-foreign ${J}" xmlns="http://www.w3.org/1999/xhtml" style="width: ${x.toFixed(1)}px; height: ${x.toFixed(1)}px; display: flex; align-items: center; justify-content: center;">
          <ha-icon icon="${e.icon}" style="--mdc-icon-size: ${x.toFixed(1)}px; width: ${x.toFixed(1)}px; height: ${x.toFixed(1)}px; display: flex; align-items: center; justify-content: center;"></ha-icon>
        </div>
      </foreignObject>

      <!-- Values Inside Circle -->
      ${b?G`
        ${e.extraValues.map((t,o)=>{const i=0===o?F:z;return G`
            <text class="node-directional-value" 
                  x="${e.x}" 
                  y="${i.toFixed(1)}" 
                  style="${t.color?`fill: ${t.color};`:""}">
              ${t.text}
            </text>
          `})}
      `:G`
        <text class="node-value" x="${e.x}" y="${M.toFixed(1)}">
          ${e.isUnavailable?"--":`${e.value} ${e.unit}`}
        </text>
      `}

      <!-- Outside Label & Optional Chip Background -->
      ${E?G`
        ${k?G`
          <rect class="node-label-chip"
                x="${Y.toFixed(1)}"
                y="${X.toFixed(1)}"
                width="${V.toFixed(1)}"
                height="${j.toFixed(1)}"
                rx="${N}"
                ry="${N}"
                fill="${e.color}"
                fill-opacity="${T.toFixed(2)}"
                stroke="${e.color}"
                stroke-opacity="${Math.min(1,2.2*T).toFixed(2)}"
                stroke-width="${O}"
                pointer-events="none" />
        `:""}
        <text class="node-label-outside" 
              x="${e.x}" 
              y="${U.toFixed(1)}"
              style="fill: ${Z}; font-size: ${P}px;">
          ${H}
        </text>
      `:""}

      <!-- Optional Secondary Text -->
      ${e.secondaryText&&!b&&E?G`
        <text class="node-sub-outside" x="${e.x}" y="${K.toFixed(1)}">
          ${e.secondaryText}
        </text>
      `:""}

      <!-- Dedicated Secondary Info Text -->
      ${e.secondaryInfoText&&E?G`
        <text class="node-sub-outside node-secondary-info" x="${e.x}" y="${(K+(e.secondaryText&&!b?11:0)).toFixed(1)}">
          ${e.secondaryInfoText}
        </text>
      `:""}

      <!-- Status / Notification Badge -->
      ${e.badgeEnabled?G`
        <g class="node-badge-group ${_e?"badge-pulsing":""}" 
           @pointerdown=${e=>e.stopPropagation()}
           @pointerup=${e=>e.stopPropagation()}
           @pointermove=${e=>e.stopPropagation()}
           @mousedown=${e=>e.stopPropagation()}
           @mouseup=${e=>e.stopPropagation()}
           @click=${t=>n(e,t)}
           style="cursor: pointer; transform-origin: ${se.toFixed(1)}px ${le.toFixed(1)}px;">
          <!-- Cutout ring to separate badge cleanly from node border -->
          <circle cx="${se.toFixed(1)}" 
                  cy="${le.toFixed(1)}" 
                  r="${(he+1.8).toFixed(1)}" 
                  fill="var(--ha-card-background, var(--card-background-color, #1c1c1e))" />
          
          ${"icon"===e.badgeStyle?G`
            <circle cx="${se.toFixed(1)}" 
                    cy="${le.toFixed(1)}" 
                    r="${he.toFixed(1)}" 
                    fill="${de}" />
            <foreignObject x="${(se-he).toFixed(1)}" 
                           y="${(le-he).toFixed(1)}" 
                           width="${pe.toFixed(1)}" 
                           height="${pe.toFixed(1)}" 
                           style="overflow: visible; pointer-events: none;">
              <div xmlns="http://www.w3.org/1999/xhtml" style="width: ${pe}px; height: ${pe}px; display: flex; align-items: center; justify-content: center;">
                <ha-icon icon="${ce?"mdi:power":"mdi:power-off"}" style="--mdc-icon-size: ${(.75*pe).toFixed(1)}px; color: #ffffff; width: ${pe}px; height: ${pe}px; display: flex; align-items: center; justify-content: center;"></ha-icon>
              </div>
            </foreignObject>
          `:"text"===e.badgeStyle?G`
            <rect x="${(se-11).toFixed(1)}" 
                  y="${(le-6.5).toFixed(1)}" 
                  width="22" 
                  height="13" 
                  rx="6.5" 
                  ry="6.5" 
                  fill="${de}" />
            <text x="${se.toFixed(1)}" 
                  y="${(le+3.5).toFixed(1)}" 
                  style="font-size: 7.5px; font-weight: 800; fill: #ffffff; text-anchor: middle; pointer-events: none;">
              ${ce?"ON":"OFF"}
            </text>
          `:G`
            <circle class="node-badge-dot" 
                    cx="${se.toFixed(1)}" 
                    cy="${le.toFixed(1)}" 
                    r="${he.toFixed(1)}" 
                    fill="${de}" />
          `}
        </g>
      `:""}
    </g>
  `}(e,(e,t)=>this._gestureController.handlePointerDown(e,t),e=>this._gestureController.handlePointerMove(e),(e,t)=>this._gestureController.handlePointerUp(e,t),()=>this._gestureController.handlePointerCancel(),(e,t)=>this._handleBadgeClick(e,t),(e,t)=>this._handleNodeKeyDown(e,t),i,a))}
            </g>
          </svg>
        </div>
      </ha-card>
    `}};function pt(e){if(null!=e&&""!==e){if(Array.isArray(e))return e.map(e=>pt(e)).filter(e=>null!=e);if("object"==typeof e){const t={};for(const[o,i]of Object.entries(e))if(null!=i&&""!==i)if("object"==typeof i){const e=pt(i);void 0!==e&&(t[o]=e)}else t[o]=i;return t}return e}}function ht(e){if(!e||"object"!=typeof e)return e;const t={...pt(e)||{}};if(t.styles&&"object"==typeof t.styles){const e={};let o=!1;for(const[i,a]of Object.entries(t.styles)){a!==ge[i]&&(e[i]=a,o=!0)}o?t.styles=e:delete t.styles}if(t.effects&&"object"==typeof t.effects){const e={};let o=!1;for(const[i,a]of Object.entries(t.effects))if(a&&"object"==typeof a){const t=fe[i]||{},n={};let r=!1;for(const[e,o]of Object.entries(a)){o!==t[e]&&(n[e]=o,r=!0)}r&&(e[i]=n,o=!0)}o?t.effects=e:delete t.effects}const o=new Set(["type","card_version","solar","grid","battery","home","devices","styles","effects"]);for(const[e,i]of Object.entries(t))if(!o.has(e)){const o=be[e];void 0!==o&&i===o&&delete t[e]}return t}function _t(e,t="en"){if(e.label)return e.label;const o=e.name;if(!o)return"";const i=`editor.${o}`,a=ct(i,t);if(a!==i)return a;const n=`editor.section.${o}`,r=ct(n,t);return r!==n?r:o}function mt(e,t="en"){if(e.helper)return e.helper;const o=e.name;if(!o)return;const i=`editor.helper.${o}`,a=ct(i,t);return a!==i?a:void 0}function ut(e="en"){return[{name:"title",selector:{text:{}}},{name:"layout_mode",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ct("editor.option.layout_mode.auto",e)},{value:"horizontal",label:ct("editor.option.layout_mode.horizontal",e)},{value:"vertical",label:ct("editor.option.layout_mode.vertical",e)}]}}},{name:"auto_layout_breakpoint",selector:{number:{min:200,max:1200,step:10,unit_of_measurement:"px",mode:"slider"}}},{name:"stroke_mode",selector:{select:{mode:"dropdown",options:[{value:"watt",label:ct("editor.option.stroke_mode.watt",e)},{value:"fixed",label:ct("editor.option.stroke_mode.fixed",e)},{value:"amperage",label:ct("editor.option.stroke_mode.amperage",e)}]}}},{name:"speed_mode",selector:{select:{mode:"dropdown",options:[{value:"absolute",label:ct("editor.option.speed_mode.absolute",e)},{value:"relative",label:ct("editor.option.speed_mode.relative",e)}]}}}]}function gt(e,t="en",o){const i=[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entity",selector:{entity:{domain:"sensor",device_class:"power"}}}];return"solar"===e?i.push({name:"color",selector:{ui_color:{default_color:"#ff9800"}}},{name:"invert",selector:{boolean:{}}}):"grid"===e?i.push({name:"entity_import",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"entity_export",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"color",selector:{ui_color:{default_color:"#f44336"}}},{name:"invert",selector:{boolean:{}}}):"battery"===e?(i.push({name:"entity_charge",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"entity_discharge",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"state_of_charge",selector:{entity:{domain:"sensor",device_class:"battery"}}},{name:"color_charge",selector:{ui_color:{default_color:"#4caf50"}}},{name:"color_discharge",selector:{ui_color:{default_color:"#9c27b0"}}},{name:"use_idle_color",selector:{boolean:{}}}),o?.use_idle_color&&i.push({name:"color_idle",selector:{ui_color:{default_color:"#94a3b8"}}}),i.push({name:"invert",selector:{boolean:{}}})):"home"===e&&i.push({name:"color",selector:{ui_color:{default_color:"#03a9f4"}}},{name:"invert",selector:{boolean:{}}}),i.push({name:"switch_entity",selector:{entity:{domain:["switch","light","fan","input_boolean","climate","media_player","cover","lock","vacuum","sensor"]}}},{name:"display_zero",selector:{boolean:{}}},{name:"display_zero_tolerance",selector:{number:{min:0,max:500,step:1,unit_of_measurement:"W"}}},{name:"show_label",selector:{boolean:{}}}),i.push({name:"secondary_info",type:"expandable",title:ct("editor.section.secondary_info",t),schema:[{name:"entity",selector:{entity:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:3,step:1}}}]}),i.push({name:"badge",type:"expandable",title:ct("editor.section.badge",t),schema:[{name:"badge_enabled",selector:{boolean:{}}},{name:"badge_style",selector:{select:{mode:"dropdown",options:[{value:"dot",label:ct("editor.option.badge_style.dot",t)},{value:"icon",label:ct("editor.option.badge_style.icon",t)},{value:"text",label:ct("editor.option.badge_style.text",t)}]}}},{name:"badge_position",selector:{select:{mode:"dropdown",options:[{value:"top_right",label:ct("editor.option.badge_position.top_right",t)},{value:"top_left",label:ct("editor.option.badge_position.top_left",t)},{value:"bottom_right",label:ct("editor.option.badge_position.bottom_right",t)},{value:"bottom_left",label:ct("editor.option.badge_position.bottom_left",t)}]}}},{name:"badge_size",selector:{number:{min:6,max:30,step:1,unit_of_measurement:"px",mode:"slider"}}},{name:"badge_color_on",selector:{ui_color:{default_color:"#4caf50"}}},{name:"badge_color_off",selector:{ui_color:{default_color:"#64748b"}}},{name:"badge_pulse",selector:{boolean:{}}},{name:"badge_quick_toggle",selector:{boolean:{}}},{name:"badge_tap_behavior",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ct("editor.option.badge_tap_behavior.auto",t)},{value:"toggle",label:ct("editor.option.badge_tap_behavior.toggle",t)},{value:"more-info-switch",label:ct("editor.option.badge_tap_behavior.more_info_switch",t)},{value:"more-info-sensor",label:ct("editor.option.badge_tap_behavior.more_info_sensor",t)},{value:"more-info",label:ct("editor.option.badge_tap_behavior.more_info",t)}]}}}]}),i.push({name:"label_chip",type:"expandable",title:ct("editor.section.label_chip",t),schema:[{name:"label_font_size",selector:{number:{min:6,max:25,step:.5,unit_of_measurement:"px"}}},{name:"label_spacing_below_node",selector:{number:{min:2,max:40,step:1,unit_of_measurement:"px"}}},{name:"label_chip_enabled",selector:{boolean:{}}},{name:"label_chip_opacity",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"label_chip_padding_x",selector:{number:{min:2,max:25,step:1,unit_of_measurement:"px"}}},{name:"label_chip_padding_y",selector:{number:{min:1,max:15,step:.5,unit_of_measurement:"px"}}},{name:"label_border_radius",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}},{name:"label_border_width",selector:{number:{min:0,max:4,step:.5,unit_of_measurement:"px"}}},{name:"label_color_mode",selector:{select:{mode:"dropdown",options:[{value:"auto_contrast",label:ct("editor.option.label_color_mode.auto_contrast",t)},{value:"white",label:ct("editor.option.label_color_mode.white",t)},{value:"black",label:ct("editor.option.label_color_mode.black",t)},{value:"match_entity",label:ct("editor.option.label_color_mode.match_entity",t)},{value:"secondary",label:ct("editor.option.label_color_mode.secondary",t)},{value:"custom",label:ct("editor.option.label_color_mode.custom",t)}]}}},{name:"label_color",selector:{ui_color:{}}}]}),i.push({name:"actions",type:"expandable",title:ct("editor.section.actions",t),schema:[{name:"tap_action",selector:{ui_action:{}}},{name:"tap_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ct("editor.option.more_info_target.auto",t)},{value:"switch",label:ct("editor.option.more_info_target.switch",t)},{value:"sensor",label:ct("editor.option.more_info_target.sensor",t)}]}}},{name:"hold_action",selector:{ui_action:{}}},{name:"hold_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ct("editor.option.more_info_target.auto",t)},{value:"switch",label:ct("editor.option.more_info_target.switch",t)},{value:"sensor",label:ct("editor.option.more_info_target.sensor",t)}]}}},{name:"double_tap_action",selector:{ui_action:{}}},{name:"double_tap_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ct("editor.option.more_info_target.auto",t)},{value:"switch",label:ct("editor.option.more_info_target.switch",t)},{value:"sensor",label:ct("editor.option.more_info_target.sensor",t)}]}}}]}),i}function ft(e="en"){return[{name:"node_dimensions",type:"expandable",title:ct("editor.section.node_dimensions",e),schema:[{name:"node_radius_primary",selector:{number:{min:10,max:50,step:1,unit_of_measurement:"px"}}},{name:"node_radius_secondary",selector:{number:{min:8,max:40,step:1,unit_of_measurement:"px"}}},{name:"icon_size_primary",selector:{number:{min:10,max:50,step:1,unit_of_measurement:"px"}}},{name:"icon_size_secondary",selector:{number:{min:8,max:40,step:1,unit_of_measurement:"px"}}}]},{name:"shadows",type:"expandable",title:ct("editor.section.shadows",e),schema:[{name:"show_node_shadows",selector:{boolean:{}}},{name:"node_shadow_color",selector:{ui_color:{}}},{name:"node_shadow_blur",selector:{number:{min:0,max:30,step:1,unit_of_measurement:"px"}}},{name:"node_shadow_spread",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}}]},{name:"typography",type:"expandable",title:ct("editor.section.typography",e),schema:[{name:"font_size_primary",selector:{number:{min:8,max:28,step:.5,unit_of_measurement:"px"}}},{name:"font_size_secondary",selector:{number:{min:6,max:20,step:.5,unit_of_measurement:"px"}}},{name:"font_size_unit",selector:{number:{min:6,max:18,step:.5,unit_of_measurement:"px"}}},{name:"font_size_extra",selector:{number:{min:6,max:16,step:.5,unit_of_measurement:"px"}}},{name:"font_size_sub",selector:{number:{min:6,max:16,step:.5,unit_of_measurement:"px"}}}]},{name:"labels",type:"expandable",title:ct("editor.section.labels",e),schema:[{name:"show_labels",selector:{boolean:{}}},{name:"font_size_label",selector:{number:{min:6,max:20,step:.5,unit_of_measurement:"px"}}},{name:"spacing_label_below_node",selector:{number:{min:2,max:40,step:1,unit_of_measurement:"px"}}},{name:"label_chip_enabled",selector:{boolean:{}}},{name:"label_chip_opacity",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"label_chip_padding_x",selector:{number:{min:2,max:25,step:1,unit_of_measurement:"px"}}},{name:"label_chip_padding_y",selector:{number:{min:1,max:15,step:.5,unit_of_measurement:"px"}}},{name:"label_border_radius",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}},{name:"label_border_width",selector:{number:{min:0,max:4,step:.5,unit_of_measurement:"px"}}},{name:"label_color_mode",selector:{select:{mode:"dropdown",options:[{value:"auto_contrast",label:ct("editor.option.label_color_mode.auto_contrast",e)},{value:"white",label:ct("editor.option.label_color_mode.white",e)},{value:"black",label:ct("editor.option.label_color_mode.black",e)},{value:"match_entity",label:ct("editor.option.label_color_mode.match_entity",e)},{value:"secondary",label:ct("editor.option.label_color_mode.secondary",e)},{value:"custom",label:ct("editor.option.label_color_mode.custom",e)}]}}},{name:"label_color",selector:{ui_color:{}}}]},{name:"cables_and_bus",type:"expandable",title:ct("editor.section.cables_and_bus",e),schema:[{name:"line_routing_mode",selector:{select:{mode:"dropdown",options:[{value:"curved",label:ct("editor.option.line_routing_mode.curved",e)},{value:"straight",label:ct("editor.option.line_routing_mode.straight",e)},{value:"orthogonal",label:ct("editor.option.line_routing_mode.orthogonal",e)}]}}},{name:"bus_lane_spacing",selector:{number:{min:2,max:30,step:1,unit_of_measurement:"px"}}},{name:"bus_corner_radius",selector:{number:{min:0,max:30,step:1,unit_of_measurement:"px"}}},{name:"invert_bus_lane_order",selector:{boolean:{}}},{name:"spacing_horizontal",selector:{number:{min:10,max:200,step:2,unit_of_measurement:"px"}}},{name:"spacing_vertical",selector:{number:{min:10,max:200,step:2,unit_of_measurement:"px"}}}]},{name:"particles",type:"expandable",title:ct("editor.section.particles",e),schema:[{name:"particles_per_arc",selector:{number:{min:1,max:10,step:1}}},{name:"particle_size_offset",selector:{number:{min:-5,max:10,step:.5,unit_of_measurement:"px"}}},{name:"particle_inner_glow",selector:{boolean:{}}},{name:"particle_soft_edge",selector:{boolean:{}}},{name:"inactive_wire_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}}},{name:"inactive_wire_style",selector:{select:{mode:"dropdown",options:[{value:"dashed",label:ct("editor.option.inactive_wire_style.dashed",e)},{value:"solid",label:ct("editor.option.inactive_wire_style.solid",e)},{value:"hidden",label:ct("editor.option.inactive_wire_style.hidden",e)}]}}},{name:"hover_glow_radius",selector:{number:{min:0,max:40,step:1,unit_of_measurement:"px"}}}]},{name:"home_ring",type:"expandable",title:ct("editor.section.home_ring",e),schema:[{name:"show_home_mix_ring",selector:{boolean:{}}},{name:"home_glow_mode",selector:{select:{mode:"dropdown",options:[{value:"fixed",label:ct("editor.option.home_glow_mode.fixed",e)},{value:"predominant",label:ct("editor.option.home_glow_mode.predominant",e)}]}}}]}]}function bt(e="en"){return[{name:"meteor_trail",type:"expandable",title:ct("editor.section.meteor_trail",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"tail_length",selector:{number:{min:2,max:20,step:1}}},{name:"glow_intensity",selector:{number:{min:.1,max:2,step:.1,mode:"slider"}}}]},{name:"living_icons",type:"expandable",title:ct("editor.section.living_icons",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"battery_type",selector:{select:{mode:"dropdown",options:[{value:"standard",label:ct("editor.option.battery_type.standard",e)},{value:"car",label:ct("editor.option.battery_type.car",e)},{value:"pulse",label:ct("editor.option.battery_type.pulse",e)}]}}},{name:"battery_animated",selector:{boolean:{}}},{name:"load_animation",selector:{select:{mode:"dropdown",options:[{value:"spin",label:ct("editor.option.load_animation.spin",e)},{value:"pulse",label:ct("editor.option.load_animation.pulse",e)},{value:"none",label:ct("editor.option.load_animation.none",e)}]}}}]},{name:"glassmorphism",type:"expandable",title:ct("editor.section.glassmorphism",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"intensity",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"neon_core",selector:{boolean:{}}}]},{name:"impact_ripples",type:"expandable",title:ct("editor.section.impact_ripples",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"ripple_size",selector:{number:{min:5,max:50,step:1,unit_of_measurement:"px"}}},{name:"ripple_color",selector:{ui_color:{}}}]}]}function yt(e="en",t){const o=[{name:"decimals",selector:{number:{min:0,max:3,step:1}}},{name:"w_to_kw_threshold",selector:{number:{min:100,max:1e4,step:50,unit_of_measurement:"W"}}},{name:"scale_curve",selector:{select:{mode:"dropdown",options:[{value:"sqrt",label:ct("editor.option.scale_curve.sqrt",e)},{value:"linear",label:ct("editor.option.scale_curve.linear",e)},{value:"log",label:ct("editor.option.scale_curve.log",e)}]}}},{name:"scale_min",selector:{number:{min:0,max:5e3,step:10,unit_of_measurement:"W"}}},{name:"scale_max",selector:{number:{min:500,max:5e4,step:100,unit_of_measurement:"W"}}},{name:"smoothing_factor",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"max_total_particles",selector:{number:{min:5,max:100,step:1}}},{name:"min_stroke",selector:{number:{min:.5,max:10,step:.5,unit_of_measurement:"px"}}},{name:"max_stroke",selector:{number:{min:1,max:20,step:.5,unit_of_measurement:"px"}}},{name:"min_duration",selector:{number:{min:.2,max:5,step:.1,unit_of_measurement:"s"}}},{name:"max_duration",selector:{number:{min:1,max:20,step:.1,unit_of_measurement:"s"}}},{name:"residual_handling",selector:{select:{mode:"dropdown",options:[{value:"clamp",label:ct("editor.option.residual_handling.clamp",e)},{value:"absorb",label:ct("editor.option.residual_handling.absorb",e)},{value:"unbalanced",label:ct("editor.option.residual_handling.unbalanced",e)}]}}}];return"absorb"===t?.residual_handling&&o.push({name:"residual_absorb_target",selector:{select:{mode:"dropdown",options:[{value:"grid",label:ct("editor.option.residual_absorb_target.grid",e)},{value:"battery",label:ct("editor.option.residual_absorb_target.battery",e)}]}}}),o}function vt(e="en"){return[{name:"id",selector:{text:{}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entity",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"switch_entity",selector:{entity:{domain:["switch","light","fan","input_boolean","climate","media_player","cover","lock","vacuum","sensor"]}}},{name:"entity_amperage",selector:{entity:{domain:"sensor",device_class:"current"}}},{name:"color",selector:{ui_color:{default_color:"#00bcd4"}}},{name:"include_in_home",selector:{boolean:{}}},{name:"invert",selector:{boolean:{}}},{name:"show_label",selector:{boolean:{}}},{name:"display_zero",selector:{boolean:{}}},{name:"display_zero_tolerance",selector:{number:{min:0,max:500,step:1,unit_of_measurement:"W"}}},{name:"secondary_info",type:"expandable",title:ct("editor.section.secondary_info",e),schema:[{name:"entity",selector:{entity:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:3,step:1}}}]},{name:"badge",type:"expandable",title:ct("editor.section.badge",e),schema:[{name:"badge_enabled",selector:{boolean:{}}},{name:"badge_style",selector:{select:{mode:"dropdown",options:[{value:"dot",label:ct("editor.option.badge_style.dot",e)},{value:"icon",label:ct("editor.option.badge_style.icon",e)},{value:"text",label:ct("editor.option.badge_style.text",e)}]}}},{name:"badge_position",selector:{select:{mode:"dropdown",options:[{value:"top_right",label:ct("editor.option.badge_position.top_right",e)},{value:"top_left",label:ct("editor.option.badge_position.top_left",e)},{value:"bottom_right",label:ct("editor.option.badge_position.bottom_right",e)},{value:"bottom_left",label:ct("editor.option.badge_position.bottom_left",e)}]}}},{name:"badge_size",selector:{number:{min:6,max:30,step:1,unit_of_measurement:"px",mode:"slider"}}},{name:"badge_color_on",selector:{ui_color:{default_color:"#4caf50"}}},{name:"badge_color_off",selector:{ui_color:{default_color:"#64748b"}}},{name:"badge_pulse",selector:{boolean:{}}},{name:"badge_quick_toggle",selector:{boolean:{}}},{name:"badge_tap_behavior",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ct("editor.option.badge_tap_behavior.auto",e)},{value:"toggle",label:ct("editor.option.badge_tap_behavior.toggle",e)},{value:"more-info-switch",label:ct("editor.option.badge_tap_behavior.more_info_switch",e)},{value:"more-info-sensor",label:ct("editor.option.badge_tap_behavior.more_info_sensor",e)},{value:"more-info",label:ct("editor.option.badge_tap_behavior.more_info",e)}]}}}]},{name:"label_chip",type:"expandable",title:ct("editor.section.label_chip",e),schema:[{name:"label_font_size",selector:{number:{min:6,max:25,step:.5,unit_of_measurement:"px"}}},{name:"label_spacing_below_node",selector:{number:{min:2,max:40,step:1,unit_of_measurement:"px"}}},{name:"label_chip_enabled",selector:{boolean:{}}},{name:"label_chip_opacity",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"label_chip_padding_x",selector:{number:{min:2,max:25,step:1,unit_of_measurement:"px"}}},{name:"label_chip_padding_y",selector:{number:{min:1,max:15,step:.5,unit_of_measurement:"px"}}},{name:"label_border_radius",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}},{name:"label_border_width",selector:{number:{min:0,max:4,step:.5,unit_of_measurement:"px"}}},{name:"label_color_mode",selector:{select:{mode:"dropdown",options:[{value:"auto_contrast",label:ct("editor.option.label_color_mode.auto_contrast",e)},{value:"white",label:ct("editor.option.label_color_mode.white",e)},{value:"black",label:ct("editor.option.label_color_mode.black",e)},{value:"match_entity",label:ct("editor.option.label_color_mode.match_entity",e)},{value:"secondary",label:ct("editor.option.label_color_mode.secondary",e)},{value:"custom",label:ct("editor.option.label_color_mode.custom",e)}]}}},{name:"label_color",selector:{ui_color:{}}}]},{name:"actions",type:"expandable",title:ct("editor.section.actions",e),schema:[{name:"tap_action",selector:{ui_action:{}}},{name:"tap_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ct("editor.option.more_info_target.auto",e)},{value:"switch",label:ct("editor.option.more_info_target.switch",e)},{value:"sensor",label:ct("editor.option.more_info_target.sensor",e)}]}}},{name:"hold_action",selector:{ui_action:{}}},{name:"hold_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ct("editor.option.more_info_target.auto",e)},{value:"switch",label:ct("editor.option.more_info_target.switch",e)},{value:"sensor",label:ct("editor.option.more_info_target.sensor",e)}]}}},{name:"double_tap_action",selector:{ui_action:{}}},{name:"double_tap_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ct("editor.option.more_info_target.auto",e)},{value:"switch",label:ct("editor.option.more_info_target.switch",e)},{value:"sensor",label:ct("editor.option.more_info_target.sensor",e)}]}}}]}]}e([me({attribute:!1})],dt.prototype,"_config",void 0),e([ue()],dt.prototype,"_actualLayout",void 0),dt=e([pe("simple-power-flow-card")],dt),window.customCards=window.customCards||[],window.customCards.push({type:"simple-power-flow-card",name:"Simple Power Flow Card",description:"An elegant, adaptive power flow card with intelligent Bezier routing and RAF Particle Engine.",preview:!0,documentationURL:"https://github.com/custom-cards/simple-power-flow-card"});let xt=class extends ce{constructor(){super(...arguments),this.devices=[],this.lang="en",this._expandedId=null}static{this.styles=r`
    :host {
      display: block;
      margin-top: 8px;
    }
    .device-item {
      margin-bottom: 8px;
      border: 1px solid var(--divider-color, #e2e8f0);
      border-radius: 8px;
      overflow: hidden;
      background: var(--card-background-color, #ffffff);
    }
    ha-expansion-panel {
      --expansion-panel-summary-padding: 0 8px 0 16px;
    }
    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 8px;
    }
    .panel-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
      font-size: 14px;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .panel-actions {
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .panel-content {
      padding: 8px 16px 16px;
    }
    .id-warning {
      color: var(--error-color, #f44336);
      font-size: 12px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .add-device-btn {
      margin-top: 12px;
      display: flex;
      justify-content: flex-end;
    }
    mwc-button {
      --mdc-theme-primary: var(--primary-color, #03a9f4);
    }
  `}_validateId(e,t){if(!e||!/^[a-zA-Z][a-zA-Z0-9_-]*$/.test(e))return ct("editor.error.invalid_id",this.lang);const o=this.devices.some((o,i)=>i!==t&&o.id===e);return o?ct("editor.error.duplicate_id",this.lang):null}_handleDeviceChanged(e,t){t.stopPropagation();const o=t.detail.value,i=[...this.devices];i[e]={...i[e],...o},this._fireChanged(i)}_handleMoveUp(e,t){if(t.stopPropagation(),e<=0)return;const o=[...this.devices],i=o.splice(e,1)[0];o.splice(e-1,0,i),this._fireChanged(o)}_handleMoveDown(e,t){if(t.stopPropagation(),e>=this.devices.length-1)return;const o=[...this.devices],i=o.splice(e,1)[0];o.splice(e+1,0,i),this._fireChanged(o)}_handleDelete(e,t){t.stopPropagation();const o=this.devices.filter((t,o)=>o!==e);this._fireChanged(o)}_handleAddDevice(){let e=this.devices.length+1,t=`device_${e}`;for(;this.devices.some(e=>e.id===t);)e++,t=`device_${e}`;const o=`${ct("editor.device_default_name",this.lang)} ${e}`,i={id:t,name:o,entity:"",color:"#00bcd4",include_in_home:!0},a=[...this.devices,i];this._expandedId=t,this._fireChanged(a)}_fireChanged(e){this.dispatchEvent(new CustomEvent("devices-changed",{bubbles:!0,composed:!0,detail:{devices:e}}))}render(){const e=vt(this.lang);return q`
      <div class="device-list">
        ${this.devices.map((t,o)=>{const i=this._validateId(t.id,o),a=this._expandedId===t.id;return q`
            <div class="device-item">
              <ha-expansion-panel
                .expanded=${a}
                @expanded-changed=${e=>{e.detail.expanded?this._expandedId=t.id:this._expandedId===t.id&&(this._expandedId=null)}}
              >
                <div slot="header" class="panel-header">
                  <div class="panel-title">
                    <ha-icon .icon=${t.icon||"mdi:devices"}></ha-icon>
                    <span>${t.name||t.id||`${ct("editor.device_default_name",this.lang)} ${o+1}`}</span>
                  </div>
                  <div class="panel-actions" @click=${e=>e.stopPropagation()}>
                    <ha-icon-button
                      .disabled=${0===o}
                      @click=${e=>this._handleMoveUp(o,e)}
                    >
                      <ha-icon icon="mdi:arrow-up"></ha-icon>
                    </ha-icon-button>
                    <ha-icon-button
                      .disabled=${o===this.devices.length-1}
                      @click=${e=>this._handleMoveDown(o,e)}
                    >
                      <ha-icon icon="mdi:arrow-down"></ha-icon>
                    </ha-icon-button>
                    <ha-icon-button
                      @click=${e=>this._handleDelete(o,e)}
                    >
                      <ha-icon icon="mdi:delete"></ha-icon>
                    </ha-icon-button>
                  </div>
                </div>

                <div class="panel-content">
                  ${i?q`
                    <div class="id-warning">
                      <ha-icon icon="mdi:alert-circle"></ha-icon>
                      <span>${i}</span>
                    </div>
                  `:""}

                  <ha-form
                    .hass=${this.hass}
                    .data=${t}
                    .schema=${e}
                    .computeLabel=${e=>_t(e,this.lang)}
                    .computeHelper=${e=>mt(e,this.lang)}
                    @value-changed=${e=>this._handleDeviceChanged(o,e)}
                  ></ha-form>
                </div>
              </ha-expansion-panel>
            </div>
          `})}

        <div class="add-device-btn">
          <mwc-button
            raised
            @click=${()=>this._handleAddDevice()}
          >
            <ha-icon icon="mdi:plus" style="margin-right: 4px;"></ha-icon>
            ${ct("editor.add_device",this.lang)}
          </mwc-button>
        </div>
      </div>
    `}};async function wt(){if(!customElements.get("ha-form")){try{const e=await(window.loadCardHelpers?.());if(e){const t=await e.createCardElement({type:"button"});await(t?.constructor?.getConfigElement?.());const o=await e.createCardElement({type:"entities",entities:[]});await(o?.constructor?.getConfigElement?.())}}catch(e){}if(!customElements.get("ha-form"))try{await Promise.race([customElements.whenDefined("ha-form"),new Promise(e=>setTimeout(e,500))])}catch(e){}}}e([me({attribute:!1})],xt.prototype,"devices",void 0),e([me({attribute:!1})],xt.prototype,"hass",void 0),e([me({type:String})],xt.prototype,"lang",void 0),e([ue()],xt.prototype,"_expandedId",void 0),xt=e([pe("spfc-device-list")],xt);let $t=class extends ce{constructor(){super(...arguments),this._componentsLoaded=!1,this._openSection="general"}static{this.styles=r`
    :host {
      display: block;
      margin-bottom: 24px;
    }
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    ha-expansion-panel {
      border: 1px solid var(--divider-color, #e2e8f0);
      border-radius: 8px;
      overflow: hidden;
      background: var(--card-background-color, #ffffff);
      --expansion-panel-summary-padding: 0 16px;
    }
    .section-header {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
      font-size: 15px;
    }
    .section-content {
      padding: 12px 16px 16px;
    }
    .loading {
      padding: 16px;
      text-align: center;
      color: var(--secondary-text-color, #64748b);
    }
  `}setConfig(e){this._config={...be,...e}}async firstUpdated(){await wt(),this._componentsLoaded=!0}get _lang(){return this.hass?.language||this.hass?.locale?.language||"en"}_toggleSection(e,t){t?this._openSection=e:this._openSection===e&&(this._openSection=null)}_handleGeneralChanged(e){e.stopPropagation();const t={...this._config,...e.detail.value};this._fireConfigChanged(t)}_handleNodeChanged(e,t){t.stopPropagation();const o=t.detail.value,i={...this._config,[e]:{...this._config[e]||{},...o}};this._fireConfigChanged(i)}_handleDevicesChanged(e){e.stopPropagation();const t={...this._config,devices:e.detail.devices};this._fireConfigChanged(t)}_handleStylesChanged(e){e.stopPropagation();const t={...this._config,styles:{...this._config.styles||{},...e.detail.value}};this._fireConfigChanged(t)}_handleEffectsChanged(e){e.stopPropagation();const t={...this._config,effects:{...this._config.effects||{},...e.detail.value}};this._fireConfigChanged(t)}_handleAdvancedChanged(e){e.stopPropagation();const t={...this._config,...e.detail.value};this._fireConfigChanged(t)}_fireConfigChanged(e){this._config=e;const t=ht(e);this.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:t}}))}render(){if(!this._config||!this.hass)return q``;const e=this._lang;return q`
      <div class="card-config">
        <!-- 1. Generale -->
        <ha-expansion-panel
          .expanded=${"general"===this._openSection}
          @expanded-changed=${e=>this._toggleSection("general",e.detail.expanded)}
        >
          <div slot="header" class="section-header">
            <ha-icon icon="mdi:cog"></ha-icon>
            <span>${ct("editor.section.general",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._config}
              .schema=${ut(e)}
              .computeLabel=${t=>_t(t,e)}
              .computeHelper=${t=>mt(t,e)}
              @value-changed=${this._handleGeneralChanged}
            ></ha-form>
          </div>
        </ha-expansion-panel>

        <!-- 2. Solare -->
        <ha-expansion-panel
          .expanded=${"solar"===this._openSection}
          @expanded-changed=${e=>this._toggleSection("solar",e.detail.expanded)}
        >
          <div slot="header" class="section-header">
            <ha-icon icon="mdi:solar-power"></ha-icon>
            <span>${ct("editor.section.solar",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._config.solar||{}}
              .schema=${gt("solar",e,this._config.solar)}
              .computeLabel=${t=>_t(t,e)}
              .computeHelper=${t=>mt(t,e)}
              @value-changed=${e=>this._handleNodeChanged("solar",e)}
            ></ha-form>
          </div>
        </ha-expansion-panel>

        <!-- 3. Rete Elettrica -->
        <ha-expansion-panel
          .expanded=${"grid"===this._openSection}
          @expanded-changed=${e=>this._toggleSection("grid",e.detail.expanded)}
        >
          <div slot="header" class="section-header">
            <ha-icon icon="mdi:transmission-tower"></ha-icon>
            <span>${ct("editor.section.grid",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._config.grid||{}}
              .schema=${gt("grid",e,this._config.grid)}
              .computeLabel=${t=>_t(t,e)}
              .computeHelper=${t=>mt(t,e)}
              @value-changed=${e=>this._handleNodeChanged("grid",e)}
            ></ha-form>
          </div>
        </ha-expansion-panel>

        <!-- 4. Batteria -->
        <ha-expansion-panel
          .expanded=${"battery"===this._openSection}
          @expanded-changed=${e=>this._toggleSection("battery",e.detail.expanded)}
        >
          <div slot="header" class="section-header">
            <ha-icon icon="mdi:battery-charging-100"></ha-icon>
            <span>${ct("editor.section.battery",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._config.battery||{}}
              .schema=${gt("battery",e,this._config.battery)}
              .computeLabel=${t=>_t(t,e)}
              .computeHelper=${t=>mt(t,e)}
              @value-changed=${e=>this._handleNodeChanged("battery",e)}
            ></ha-form>
          </div>
        </ha-expansion-panel>

        <!-- 5. Abitazione -->
        <ha-expansion-panel
          .expanded=${"home"===this._openSection}
          @expanded-changed=${e=>this._toggleSection("home",e.detail.expanded)}
        >
          <div slot="header" class="section-header">
            <ha-icon icon="mdi:home-lightning-bolt"></ha-icon>
            <span>${ct("editor.section.home",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._config.home||{}}
              .schema=${gt("home",e,this._config.home)}
              .computeLabel=${t=>_t(t,e)}
              .computeHelper=${t=>mt(t,e)}
              @value-changed=${e=>this._handleNodeChanged("home",e)}
            ></ha-form>
          </div>
        </ha-expansion-panel>

        <!-- 6. Dispositivi Aggiuntivi -->
        <ha-expansion-panel
          .expanded=${"devices"===this._openSection}
          @expanded-changed=${e=>this._toggleSection("devices",e.detail.expanded)}
        >
          <div slot="header" class="section-header">
            <ha-icon icon="mdi:devices"></ha-icon>
            <span>${ct("editor.section.devices",e)} (${(this._config.devices||[]).length})</span>
          </div>
          <div class="section-content">
            <spfc-device-list
              .hass=${this.hass}
              .devices=${this._config.devices||[]}
              .lang=${e}
              @devices-changed=${this._handleDevicesChanged}
            ></spfc-device-list>
          </div>
        </ha-expansion-panel>

        <!-- 7. Stile & Dimensioni -->
        <ha-expansion-panel
          .expanded=${"styles"===this._openSection}
          @expanded-changed=${e=>this._toggleSection("styles",e.detail.expanded)}
        >
          <div slot="header" class="section-header">
            <ha-icon icon="mdi:palette"></ha-icon>
            <span>${ct("editor.section.styles",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._config.styles||{}}
              .schema=${ft(e)}
              .computeLabel=${t=>_t(t,e)}
              .computeHelper=${t=>mt(t,e)}
              @value-changed=${this._handleStylesChanged}
            ></ha-form>
          </div>
        </ha-expansion-panel>

        <!-- 8. Effetti Visivi -->
        <ha-expansion-panel
          .expanded=${"effects"===this._openSection}
          @expanded-changed=${e=>this._toggleSection("effects",e.detail.expanded)}
        >
          <div slot="header" class="section-header">
            <ha-icon icon="mdi:sparkles"></ha-icon>
            <span>${ct("editor.section.effects",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._config.effects||{}}
              .schema=${bt(e)}
              .computeLabel=${t=>_t(t,e)}
              .computeHelper=${t=>mt(t,e)}
              @value-changed=${this._handleEffectsChanged}
            ></ha-form>
          </div>
        </ha-expansion-panel>

        <!-- 9. Avanzate & Motore -->
        <ha-expansion-panel
          .expanded=${"advanced"===this._openSection}
          @expanded-changed=${e=>this._toggleSection("advanced",e.detail.expanded)}
        >
          <div slot="header" class="section-header">
            <ha-icon icon="mdi:tune-vertical"></ha-icon>
            <span>${ct("editor.section.advanced",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._config}
              .schema=${yt(e,this._config)}
              .computeLabel=${t=>_t(t,e)}
              .computeHelper=${t=>mt(t,e)}
              @value-changed=${this._handleAdvancedChanged}
            ></ha-form>
          </div>
        </ha-expansion-panel>
      </div>
    `}};e([me({attribute:!1})],$t.prototype,"hass",void 0),e([ue()],$t.prototype,"_config",void 0),e([ue()],$t.prototype,"_componentsLoaded",void 0),e([ue()],$t.prototype,"_openSection",void 0),$t=e([pe("simple-power-flow-card-editor")],$t);var Ct=Object.freeze({__proto__:null,get SimplePowerFlowCardEditor(){return $t},get SpfcDeviceList(){return xt},computeHelper:mt,computeLabel:_t,getAdvancedSchema:yt,getDeviceSchema:vt,getEffectsSchema:bt,getGeneralSchema:ut,getNodeSchema:gt,getStylesSchema:ft,loadHaComponents:wt});console.info("%c SIMPLE-POWER-FLOW-CARD %c v1.0.0 ","color: white; background: #0284c7; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;","color: #0284c7; background: #e0f2fe; font-weight: 700; border-radius: 0 4px 4px 0; padding: 2px 6px;");export{dt as SimplePowerFlowCard};
