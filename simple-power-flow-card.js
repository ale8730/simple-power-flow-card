function e(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new n(i,e,o)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:p,getOwnPropertySymbols:_,getPrototypeOf:u}=Object,h=globalThis,m=h.trustedTypes,f=m?m.emptyScript:"",g=h.reactiveElementPolyfillSupport,b=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},x=(e,t)=>!l(e,t),v={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),h.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&d(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:a}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const n=o?.call(this);a?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??v}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...p(e),..._(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),a=t.litNonce;void 0!==a&&o.setAttribute("nonce",a),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=o;const n=a.fromAttribute(t,e.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(e,t,i,o=!1,a){if(void 0!==e){const n=this.constructor;if(!1===o&&(a=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??x)(a,t)||i.useDefault&&i.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:a},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==a||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[b("elementProperties")]=new Map,w[b("finalized")]=new Map,g?.({ReactiveElement:w}),(h.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,S=e=>e,z=$.trustedTypes,F=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+A,k=`<${M}>`,E=document,I=()=>E.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,T="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,N=/>/g,U=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,W=/"/g,B=/^(?:script|style|textarea|title)$/i,G=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),q=G(1),V=G(2),H=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Y=new WeakMap,K=E.createTreeWalker(E,129);function X(e,t){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==F?F.createHTML(t):t}const Z=(e,t)=>{const i=e.length-1,o=[];let a,n=2===t?"<svg>":3===t?"<math>":"",r=L;for(let t=0;t<i;t++){const i=e[t];let s,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===L?"!--"===l[1]?r=O:void 0!==l[1]?r=N:void 0!==l[2]?(B.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=U):void 0!==l[3]&&(r=U):r===U?">"===l[0]?(r=a??L,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?U:'"'===l[3]?W:R):r===W||r===R?r=U:r===O||r===N?r=L:(r=U,a=void 0);const p=r===U&&e[t+1].startsWith("/>")?" ":"";n+=r===L?i+k:d>=0?(o.push(s),i.slice(0,d)+C+i.slice(d)+A+p):i+A+(-2===d?t:p)}return[X(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class Q{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let a=0,n=0;const r=e.length-1,s=this.parts,[l,d]=Z(e,t);if(this.el=Q.createElement(l,i),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=K.nextNode())&&s.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(C)){const t=d[n++],i=o.getAttribute(e).split(A),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?oe:"?"===r[1]?ae:"@"===r[1]?ne:ie}),o.removeAttribute(e)}else e.startsWith(A)&&(s.push({type:6,index:a}),o.removeAttribute(e));if(B.test(o.tagName)){const e=o.textContent.split(A),t=e.length-1;if(t>0){o.textContent=z?z.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],I()),K.nextNode(),s.push({type:2,index:++a});o.append(e[t],I())}}}else if(8===o.nodeType)if(o.data===M)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(A,e+1));)s.push({type:7,index:a}),e+=A.length-1}a++}}static createElement(e,t){const i=E.createElement("template");return i.innerHTML=e,i}}function J(e,t,i=e,o){if(t===H)return t;let a=void 0!==o?i._$Co?.[o]:i._$Cl;const n=P(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e),a._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=a:i._$Cl=a),void 0!==a&&(t=J(e,a._$AS(e,t.values),a,o)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??E).importNode(t,!0);K.currentNode=o;let a=K.nextNode(),n=0,r=0,s=i[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new te(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new re(a,this,e)),this._$AV.push(t),s=i[++r]}n!==s?.index&&(a=K.nextNode(),n++)}return K.currentNode=E,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),P(e)?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==H&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Q.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new ee(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new Q(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const a of e)o===t.length?t.push(i=new te(this.O(I()),this.O(I()),this,this.options)):i=t[o],i._$AI(a),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=S(e).nextSibling;S(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,a){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(e,t=this,i,o){const a=this.strings;let n=!1;if(void 0===a)e=J(this,e,t,0),n=!P(e)||e!==this._$AH&&e!==H,n&&(this._$AH=e);else{const o=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=J(this,o[i+r],t,r),s===H&&(s=this._$AH[r]),n||=!P(s)||s!==this._$AH[r],s===j?e=j:e!==j&&(e+=(s??"")+a[r+1]),this._$AH[r]=s}n&&!o&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class oe extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class ae extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class ne extends ie{constructor(e,t,i,o,a){super(e,t,i,o,a),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??j)===H)return;const i=this._$AH,o=e===j&&i!==j||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==j&&(i===j||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const se=$.litHtmlPolyfillSupport;se?.(Q,te),($.litHtmlVersions??=[]).push("3.3.3");const le=globalThis;let de=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let a=o._$litPart$;if(void 0===a){const e=i?.renderBefore??null;o._$litPart$=a=new te(t.insertBefore(I(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};de._$litElement$=!0,de.finalized=!0,le.litElementHydrateSupport?.({LitElement:de});const ce=le.litElementPolyfillSupport;ce?.({LitElement:de}),(le.litElementVersions??=[]).push("4.2.2");const pe=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},_e={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:x},ue=(e=_e,t,i)=>{const{kind:o,metadata:a}=i;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,a,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const a=this[o];t.call(this,i),this.requestUpdate(o,a,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function he(e){return(t,i)=>"object"==typeof i?ue(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function me(e){return he({...e,state:!0,attribute:!1})}const fe={node_radius_primary:36,node_radius_secondary:28,node_radius_tertiary:21,node_border_width:2.5,sub_device_border_width:2,icon_size_primary:18,icon_size_secondary:16,icon_size_tertiary:13,spacing_text_above_icon:4,spacing_text_below_icon:4,spacing_horizontal:120,spacing_vertical:85,sub_device_spacing_x:75,sub_device_spacing_y:32,font_size_value:10,font_size_primary:10,font_size_secondary:9,font_size_tertiary:8,font_size_unit:8,font_size_extra:8.5,font_size_sub:9,font_size_label:10,font_size_directional:8.5,font_size_top_info:8,particles_per_arc:3,particle_size_offset:1.8,inactive_wire_opacity:.35,inactive_wire_style:"dashed",hover_glow_radius:10,show_node_shadows:!0,node_shadow_color:"",node_shadow_spread:0,node_shadow_blur:10,node_shadow_opacity:.35,node_shadow_offset_y:4,show_home_mix_ring:!0,home_glow_mode:"predominant",line_routing_mode:"bezier_curved",bus_lane_spacing:8,bus_corner_radius:20,invert_bus_lane_order:!1,particle_inner_glow:!0,particle_soft_edge:!0,show_labels:!0,spacing_label_below_node:14,label_chip_enabled:!1,label_chip_opacity:.18,label_chip_padding_x:8,label_chip_padding_y:3.5,label_border_radius:6,label_border_width:1,label_color:"",label_color_mode:"auto_contrast",badge_enabled:!1,badge_style:"dot",badge_position:"top_right",badge_size:10,badge_color_on:"#4caf50",badge_color_off:"#64748b",badge_pulse:!0,badge_quick_toggle:!0,stroke_mode:"watt",speed_mode:"absolute",min_stroke:2,max_stroke:7,min_duration:.8,max_duration:5.5,max_total_particles:30,normalize_speed_by_length:!0},ge={enabled:!1,mode:"dial_24h",anchor:"home",weather_entity:"",show_markers:!0,show_marker_icons:!0,sunrise_icon:"mdi:weather-sunset-up",sunset_icon:"mdi:weather-sunset-down",show_rays:!0,show_tail:!0,show_stars:!0,night_node_mode:!0},be={enabled:!1,scope:"today",label_style:"scope",radius:22,show_ring:!0,ring_width:3.2,show_glow:!0,glow_color:"",custom_label:"",custom_icon:"mdi:leaf",entity_solar_energy:"",entity_battery_energy_discharge:"",entity_grid_energy_import:"",entity_home_energy:"",entity_self_sufficiency:""},ye={meteor_trail:{enabled:!1,tail_length:.08,glow_intensity:1.5},living_icons:{enabled:!1,battery_type:"gradient",battery_animated:!0,load_animation:"rotate"},glassmorphism:{enabled:!1,intensity:50,neon_core:!0},impact_ripples:{enabled:!1,ripple_size:18,ripple_color:""},celestial_tracker:ge,self_sufficiency:be},xe={card_version:2,stroke_mode:"watt",speed_mode:"absolute",scale_curve:"sqrt",layout_mode:"auto",min_duration:.8,max_duration:5.5,normalize_speed_by_length:!0,min_stroke:2,max_stroke:7,scale_min:50,scale_max:6e3,smoothing_factor:.35,max_total_particles:30,display_zero_tolerance:1,w_to_kw_threshold:1e3,decimals:2,residual_handling:"clamp",residual_absorb_target:"grid",auto_layout_breakpoint:520,styles:fe,effects:ye},ve="var(--energy-solar-color, #ff9800)",we="var(--energy-grid-consumption-color, #f44336)",$e="var(--energy-grid-return-color, #4caf50)",Se="var(--energy-battery-in-color, #4caf50)",ze="var(--energy-battery-out-color, #9c27b0)",Fe="var(--energy-home-color, #03a9f4)",Ce="mdi:solar-power",Ae="mdi:transmission-tower",Me="mdi:battery-high",ke="mdi:home-lightning-bolt",Ee="mdi:power-plug",Ie=r`
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
    contain: layout style;
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
    filter: var(--node-shadow-filter, drop-shadow(0 var(--node-shadow-offset-y, 4px) var(--node-shadow-blur, 10px) rgba(0, 0, 0, var(--node-shadow-opacity, 0.35))));
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

  .node-value .node-unit {
    font-size: var(--font-size-unit, 8px);
    font-weight: 500;
    opacity: 0.88;
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
    font-size: var(--font-size-sub, 9px);
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

  /* Impact Ripples Layer (Animated via WAAPI on r/opacity/stroke-width for pixel-perfect concentric SVG expansion) */
  .impact-ripple-group {
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

  /* Celestial Tracker Keyframes & Classes (GPU hardware accelerated) */
  @keyframes celestialRaySpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes starTwinkle {
    0%, 100% { opacity: 0.25; transform: scale(0.75); }
    50% { opacity: 1; transform: scale(1.3); }
  }

  @keyframes moonAuraPulse {
    0%, 100% { opacity: 0.4; transform: scale(0.95); }
    50% { opacity: 0.85; transform: scale(1.1); }
  }

  @keyframes sunAuraPulse {
    0%, 100% { opacity: 0.5; transform: scale(0.95); }
    50% { opacity: 0.95; transform: scale(1.15); }
  }

  .celestial-rays {
    animation: celestialRaySpin 16s linear infinite;
    transform-origin: 0 0;
  }

  .celestial-star {
    transform-origin: center;
    transform-box: fill-box;
  }

  .star-1 { animation: starTwinkle 2.4s ease-in-out infinite 0s; }
  .star-2 { animation: starTwinkle 3.1s ease-in-out infinite 0.7s; }
  .star-3 { animation: starTwinkle 2.7s ease-in-out infinite 1.4s; }
  .star-4 { animation: starTwinkle 3.5s ease-in-out infinite 2.1s; }
  .star-5 { animation: starTwinkle 2.9s ease-in-out infinite 0.4s; }

  .celestial-moon-aura {
    animation: moonAuraPulse 3.5s ease-in-out infinite;
    transform-origin: 0 0;
  }

  .celestial-sun-aura {
    animation: sunAuraPulse 2.8s ease-in-out infinite;
    transform-origin: 0 0;
  }

  .celestial-tail {
    transition: stroke-dashoffset 0.3s ease;
  }

  /* Central Self-Sufficiency Hub Styles */
  @keyframes hubGreenAuraPulse {
    0%, 100% { opacity: 0.35; transform: scale(0.96); }
    50% { opacity: 0.85; transform: scale(1.12); }
  }
  @keyframes hubGoldAuraPulse {
    0%, 100% { opacity: 0.30; transform: scale(0.96); }
    50% { opacity: 0.75; transform: scale(1.10); }
  }
  @keyframes hubAmberAuraPulse {
    0%, 100% { opacity: 0.25; transform: scale(0.96); }
    50% { opacity: 0.65; transform: scale(1.08); }
  }

  .hub-green-aura {
    animation: hubGreenAuraPulse 3.0s ease-in-out infinite;
    transform-origin: center;
    transform-box: fill-box;
  }
  .hub-gold-aura {
    animation: hubGoldAuraPulse 3.0s ease-in-out infinite;
    transform-origin: center;
    transform-box: fill-box;
  }
  .hub-amber-aura {
    animation: hubAmberAuraPulse 3.0s ease-in-out infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  .hub-custom-aura {
    animation: hubGreenAuraPulse 3.0s ease-in-out infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  .hub-group {
    outline: none !important;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .hub-group:focus,
  .hub-group:focus-visible {
    outline: none !important;
  }

  .hub-circle-bg {
    fill: var(--card-background-color, #1a1f2c);
  }

  .hub-value {
    font-weight: 800;
    text-anchor: middle;
    dominant-baseline: central;
    fill: var(--primary-text-color, #ffffff);
    font-family: inherit;
    pointer-events: none;
  }

  .hub-label {
    font-size: 8px;
    font-weight: 700;
    text-anchor: middle;
    fill: var(--secondary-text-color, #94a3b8);
    letter-spacing: 0.5px;
    text-transform: uppercase;
    pointer-events: none;
  }

  /* Accessibility: Prefers Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .particles-layer,
    .particles-glow-layer,
    .meteor-layer,
    .meteor-layer-glow,
    .ripples-layer,
    .particle-circle,
    .meteor-tail,
    .celestial-rays,
    .celestial-star,
    .celestial-moon-aura,
    .celestial-sun-aura,
    .hub-green-aura,
    .hub-gold-aura,
    .hub-amber-aura,
    .hub-custom-aura {
      display: none !important;
      visibility: hidden !important;
      animation: none !important;
      transition: none !important;
    }

    .animate-rotate,
    .animate-pulse,
    .node-badge-pulse,
    .impact-ripple-group,
    .node-liquid-wave {
      animation: none !important;
      transition: none !important;
    }
  }

  /* Diagnostic Debug Overlay */
  .spf-debug-overlay {
    position: absolute;
    bottom: 6px;
    left: 6px;
    background: rgba(15, 23, 42, 0.88);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 6px;
    padding: 4px 8px;
    font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 9px;
    line-height: 1.35;
    color: #38bdf8;
    z-index: 100;
    pointer-events: none;
    user-select: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  }

  .spf-debug-overlay .debug-title {
    font-weight: 700;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
  }

  .spf-debug-overlay .debug-row {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }

  .spf-debug-overlay .debug-val {
    font-weight: 700;
    color: #f8fafc;
  }
`,Pe=["switch","light","fan","input_boolean","climate","water_heater","media_player","vacuum","cover","lock","humidifier"];function De(e){if(null==e)return null;const t=String(e).trim();if(""===t||"unavailable"===t||"unknown"===t)return null;const i=t.replace(",",".").replace(/[^0-9.-]/g,""),o=parseFloat(i);return Number.isFinite(o)?o:null}function Te(e,t){if(!t||"string"!=typeof t||""===t.trim())return{value:0,rawState:"",unit:"",isConfigured:!1,isUnavailable:!1,isUnknown:!1,isValid:!1};if(!e||!e.states||!e.states[t])return{value:0,rawState:"",unit:"",isConfigured:!0,isUnavailable:!0,isUnknown:!1,isValid:!1};const i=e.states[t],o=i.state,a=i.attributes?.unit_of_measurement||"W",n=i.attributes?.device_class,r=function(e,t){const i=e.trim().toLowerCase(),o=(t||"").trim().toLowerCase();return["kwh","wh","mwh","gwh"].includes(i)||"energy"===o?{isValid:!1,reason:`Sensore in unità di energia (${e}) invece che potenza (W/kW). I flussi in tempo reale richiedono sensori di potenza (W/kW).`}:"%"===i&&"battery"!==o?{isValid:!1,reason:"Sensore in percentuale (%) utilizzato come fonte di potenza. Richiesto sensore in W o kW."}:["v","mv","kv","°c","°f","c","f","hz","bar","psi","ppm","lux"].includes(i)?{isValid:!1,reason:`Sensore con unità '${e}' incompatibile con un flusso di potenza (W/kW/A).`}:{isValid:!0}}(a,n);if("unavailable"===o)return{value:0,rawState:o,unit:a,isConfigured:!0,isUnavailable:!0,isUnknown:!1,isValid:!1,hasInvalidUnit:!r.isValid,invalidUnitReason:r.reason};if("unknown"===o)return{value:0,rawState:o,unit:a,isConfigured:!0,isUnavailable:!1,isUnknown:!0,isValid:!1,hasInvalidUnit:!r.isValid,invalidUnitReason:r.reason};const s=De(o);if(null===s)return{value:0,rawState:o,unit:a,isConfigured:!0,isUnavailable:!1,isUnknown:!0,isValid:!1,hasInvalidUnit:!r.isValid,invalidUnitReason:r.reason};return{value:function(e,t){const i=t.trim(),o=i.toLowerCase();if("mW"===i)return.001*e;switch(o){case"kw":case"kva":case"kvar":return 1e3*e;case"mw":case"mva":return 1e6*e;case"gw":case"gva":case"gvar":return 1e9*e;case"w":case"va":case"var":case"a":default:return e;case"ma":return.001*e}}(s,a),rawState:o,unit:a,isConfigured:!0,isUnavailable:!1,isUnknown:!1,isValid:!0,hasInvalidUnit:!r.isValid,invalidUnitReason:r.reason}}function Le(e,t,i="solar"){if(!t)return{power:0,isConfigured:!1,isUnavailable:!1,isUnknown:!1,isValid:!1,rawUnit:"W"};let o,a,n;if(t.entity_amperage){const i=Te(e,t.entity_amperage);i.isValid&&(o=i.value)}let r=t.state_of_charge;if(!r&&t.secondary_info?.entity){const i=e?.states?.[t.secondary_info.entity];"battery"===i?.attributes?.device_class&&(r=t.secondary_info.entity)}if(r&&e?.states?.[r]){const t=e.states[r],i=De(t.state);if(null!==i){const e=t.attributes?.unit_of_measurement,o=t.attributes?.device_class;n=!e&&"battery"===o&&i<=1&&i>=0?Math.max(0,Math.min(100,100*i)):Math.max(0,Math.min(100,i)),a=`${Math.round(n)}%`}}const s=t.entity_import||("grid"===i?t.entity_in:void 0),l=t.entity_export||("grid"===i?t.entity_out:void 0),d=t.entity_charge||("battery"===i?t.entity_in:void 0),c=t.entity_discharge||("battery"===i?t.entity_out:void 0),p=Boolean(s||l),_=Boolean(d||c);if("grid"===i&&p){const t=Te(e,s),i=Te(e,l),a=t.isValid?Math.max(0,t.value):0,n=i.isValid?Math.max(0,i.value):0;return{power:a-n,inPower:a,outPower:n,isDual:!0,isConfigured:!0,amperage:o,isUnavailable:!!s&&t.isUnavailable&&!!l&&i.isUnavailable,isUnknown:t.isUnknown||i.isUnknown,isValid:t.isValid||i.isValid,rawUnit:t.unit||i.unit||"W",hasInvalidUnit:t.hasInvalidUnit||i.hasInvalidUnit,invalidUnitReason:t.invalidUnitReason||i.invalidUnitReason}}if("battery"===i&&_){const t=Te(e,d),i=Te(e,c),r=t.isValid?Math.max(0,t.value):0,s=i.isValid?Math.max(0,i.value):0;return{power:r-s,inPower:r,outPower:s,isDual:!0,isConfigured:!0,soc:a,socPercent:n,amperage:o,isUnavailable:!!d&&t.isUnavailable&&!!c&&i.isUnavailable,isUnknown:t.isUnknown||i.isUnknown,isValid:t.isValid||i.isValid,rawUnit:t.unit||i.unit||"W",hasInvalidUnit:t.hasInvalidUnit||i.hasInvalidUnit,invalidUnitReason:t.invalidUnitReason||i.invalidUnitReason}}const u=Te(e,t.entity);let h=u.value;return t.invert&&(h=-h),{power:h,inPower:h>=0?h:0,outPower:h<0?Math.abs(h):0,isDual:!1,isConfigured:u.isConfigured,soc:a,socPercent:n,amperage:o,isUnavailable:u.isUnavailable,isUnknown:u.isUnknown,isValid:u.isValid,rawUnit:u.unit||"W",hasInvalidUnit:u.hasInvalidUnit,invalidUnitReason:u.invalidUnitReason}}const Oe={red:[244,67,54],pink:[233,30,99],purple:[156,39,176],"deep-purple":[103,58,183],indigo:[63,81,181],blue:[33,150,243],"light-blue":[3,169,244],cyan:[0,188,212],teal:[0,150,136],green:[76,175,80],"light-green":[139,195,74],lime:[205,220,57],yellow:[255,235,59],amber:[255,193,7],orange:[255,152,0],"deep-orange":[255,87,34],brown:[121,85,72],grey:[158,158,158],gray:[158,158,158],"blue-grey":[96,125,139],"blue-gray":[96,125,139],black:[0,0,0],white:[255,255,255]},Ne={primary:"--rgb-primary-color",accent:"--rgb-accent-color",disabled:"--rgb-disabled-color",state:"--rgb-state-default-color"},Ue={primary:[3,169,244],accent:[255,152,0],disabled:[189,189,189],state:[68,115,158]},Re={gray:"grey","blue-gray":"blue-grey"};function We(e){return Math.max(0,Math.min(255,Math.round(e)))}function Be(e,t){if(null==e)return t;if(Array.isArray(e))return e.length>=3?`rgb(${We(e[0])}, ${We(e[1])}, ${We(e[2])})`:t;if("string"!=typeof e)return t;let i=e.trim();if(""===i)return t;if(i.startsWith("#")||i.startsWith("rgb(")||i.startsWith("rgba(")||i.startsWith("hsl(")||i.startsWith("hsla(")||i.startsWith("var("))return i;if(i in Re&&(i=Re[i]),i in Ne){const e=Ue[i]||[128,128,128];return`rgb(var(${Ne[i]}, ${e[0]}, ${e[1]}, ${e[2]}))`}if(i in Oe){const[e,t,o]=Oe[i];return`rgb(var(--rgb-${i}, ${e}, ${t}, ${o}))`}return i}function Ge(e,t,i){if(null==e)return t;if(Array.isArray(e))return e.length>=3?[We(e[0]),We(e[1]),We(e[2])]:t;if("string"!=typeof e)return t;const o=e.trim();if(""===o)return t;if(o.startsWith("#")){const e=o.slice(1);if(3===e.length||4===e.length){const t=parseInt(e[0]+e[0],16),i=parseInt(e[1]+e[1],16),o=parseInt(e[2]+e[2],16);if(!isNaN(t)&&!isNaN(i)&&!isNaN(o))return[t,i,o]}else if(e.length>=6){const t=parseInt(e.substring(0,2),16),i=parseInt(e.substring(2,4),16),o=parseInt(e.substring(4,6),16);if(!isNaN(t)&&!isNaN(i)&&!isNaN(o))return[t,i,o]}return t}if(o.startsWith("rgb(")||o.startsWith("rgba(")){const e=o.match(/rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)/);if(e)return[We(parseFloat(e[1])),We(parseFloat(e[2])),We(parseFloat(e[3]))];const t=o.match(/rgba?\(\s*(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)/);if(t)return[We(parseFloat(t[1])),We(parseFloat(t[2])),We(parseFloat(t[3]))]}const a=Re[o]||o,n=a in Ne,r=a in Oe;if(n||r){if(r)return Oe[o];if(n)return Ue[o]||t}if(o.startsWith("var(")){const e=o.indexOf(",");if(-1!==e&&o.endsWith(")")){return Ge(o.slice(e+1,-1).trim(),t)}}return t}function qe(e,t="sqrt"){const i=Math.max(0,Math.min(1,e));switch(t){case"linear":return i;case"sqrt":default:return Math.sqrt(i);case"log":return Math.log(1+9*i)/Math.LN10}}function Ve(e,t={}){const i=t.display_zero_tolerance??1,o=t.stroke_mode??"watt",a=t.speed_mode??"absolute",n=t.scale_curve??"sqrt",r=t.min_stroke??2,s=t.max_stroke??7,l=t.scale_min??50,d=t.scale_max??6e3,c=t.min_duration??.8,p=t.max_duration??5.5,_=t.residual_handling??"clamp",u=t.residual_absorb_target??"grid",h=Math.max(0,e.solar||0),m=Math.max(0,e.grid||0),f=Math.max(0,-(e.grid||0)),g=Math.max(0,e.battery||0),b=Math.max(0,-(e.battery||0));let y;y=void 0!==e.home&&null!==e.home&&Number.isFinite(e.home)?Math.max(0,e.home):Math.max(0,h+m+b-f-g);let x=0,v=0,w=0,$=h;x=Math.min($,y),$-=x,v=Math.min($,g),$-=v,w=Math.min($,f),$-=w;let S=0,z=0,F=b;const C=Math.max(0,y-x);S=Math.min(F,C),F-=S;const A=Math.max(0,f-w);z=Math.min(F,A),F-=z;let M=0,k=0,E=m;const I=Math.max(0,C-S);M=Math.min(E,I),E-=M;const P=Math.max(0,g-v);k=Math.min(E,P),E-=k;let D=0;const T=y-(x+S+M);Math.abs(T)>i&&("clamp"===_||("absorb"===_?"battery"===u&&b>0?S=Math.max(0,S+T):M=Math.max(0,M+T):D=Math.abs(T)));const{parentPowers:L,devicesSumInHome:O}=function(e){let t=0;const i=new Map;for(const o of e){const e=o.sub_devices||[];let a=0;for(const t of e){const e=Math.max(0,t.power||0);!1!==t.include_in_parent&&(a+=e)}let n=0;n=!0===o.hasOwnEntity||void 0===o.hasOwnEntity&&0===e.length?Math.max(0,o.power||0):!1===o.hasOwnEntity?a:o.power&&o.power>0?o.power:a,i.set(o.id,n),!1!==o.include_in_home&&(t+=n);for(const i of e){const e=Math.max(0,i.power||0);!1===i.include_in_parent&&!1!==i.include_in_home&&(t+=e)}}return{parentPowers:i,devicesSumInHome:t}}(e.devices),N=Math.max(0,y-O),U=O>y&&y>0,R=U?O-y:0,W=Be(t.solar?.color,ve),B=Be(t.grid?.color,we),G=$e,q=Be(t.battery?.color_charge||t.battery?.color,Se),V=Be(t.battery?.color_discharge,ze),H=Be(t.home?.color,Fe),j=!1!==t.solar?.display_zero,Y=!1!==t.battery?.display_zero,K=!1!==t.grid?.display_zero,X=[];(j||x>i)&&X.push({id:"solar-home",from:"solar",to:"home",value:x,color:W,targetColor:H,gradientId:"glow-solar"}),(j||v>i)&&X.push({id:"solar-battery",from:"solar",to:"battery",value:v,color:W,targetColor:q,gradientId:"glow-solar"}),(j||w>i)&&X.push({id:"solar-grid",from:"solar",to:"grid",value:w,color:G,targetColor:G,gradientId:"glow-grid-export"}),(Y||S>i)&&X.push({id:"battery-home",from:"battery",to:"home",value:S,color:V,targetColor:H,gradientId:"glow-battery-discharge"}),(Y||z>i)&&X.push({id:"battery-grid",from:"battery",to:"grid",value:z,color:V,targetColor:G,gradientId:"glow-battery-discharge"});const Z=X.some(e=>"home"===e.to);(K||M>i||!Z)&&X.push({id:"grid-home",from:"grid",to:"home",value:M,color:B,targetColor:H,gradientId:"glow-grid-import"}),(K||k>i)&&X.push({id:"grid-battery",from:"grid",to:"battery",value:k,color:B,targetColor:q,gradientId:"glow-grid-import"}),e.devices.forEach(e=>{const t=L.get(e.id)??Math.max(0,e.power||0),o=!1!==e.display_zero||t>i,a=Be(e.color,"var(--energy-device-color, #00bcd4)");o&&X.push({id:`home-${e.id}`,from:"home",to:e.id,value:t,color:a,targetColor:a,gradientId:"glow-device",ampere:e.ampere,isDevice:!0,isSubDevice:!1}),Array.isArray(e.sub_devices)&&e.sub_devices.forEach(t=>{const o=Math.max(0,t.power||0);if(!1===t.display_zero&&o<=i)return;const n=Be(t.color,a);X.push({id:`${e.id}-${t.id}`,from:e.id,to:t.id,value:o,color:n,targetColor:n,gradientId:"glow-device",ampere:t.ampere,isDevice:!0,isSubDevice:!0})})});const Q=X.reduce((e,t)=>e+(t.value>i?t.value:0),0),J=X.map(e=>{const t=e.value>i,_=function(e,t="watt",i="sqrt",o=2,a=7,n=50,r=6e3,s,l=1){if(e<=l)return 1.5;if("fixed"===t)return(o+a)/2;if("ampere"===t){if(null==s)return o;const e=.5;return o+qe((s-e)/(25-e),i)*(a-o)}return o+qe((e-n)/(r-n),i)*(a-o)}(e.value,o,n,r,s,l,d,e.ampere,i),u=function(e,t="absolute",i="sqrt",o=.8,a=5.5,n=50,r=5e3,s=0,l=1){if(e<=l)return a;let d=0;return d="relative"===t&&s>0?e/s:(e-n)/(r-n),a-qe(d,i)*(a-o)}(e.value,a,n,c,p,l,d,Q,i);return{id:e.id,from:e.from,to:e.to,value:e.value,ampere:e.ampere,color:e.color,targetColor:e.targetColor,gradientId:e.gradientId,isDevice:e.isDevice,isSubDevice:e.isSubDevice,strokeWidth:_,duration:u,isActive:t}});return{arcs:J,homeConsumption:y,untrackedDevicesPower:N,unbalancedPower:D,totalActivePower:Q,devicesSumInHome:O,isHomeOverloaded:U,excessDevicesPower:R}}const He=[{t:.019855071751231884,w:.05061426814518812},{t:.10166676129,w:.11119051722668723},{t:.2372337950418355,w:.15685332293894366},{t:.408282678752175,w:.181341891689181},{t:.591717321247825,w:.181341891689181},{t:.7627662049581645,w:.15685332293894366},{t:.8983332387099999,w:.11119051722668723},{t:.9801449282487681,w:.05061426814518812}];function je(e,t){return Math.hypot(t.x-e.x,t.y-e.y)}function Ye(e,t,i){let o=0;for(let a=0;a<8;a++){const{t:n,w:r}=He[a],s=1-n,l=2*s*(t.x-e.x)+2*n*(i.x-t.x),d=2*s*(t.y-e.y)+2*n*(i.y-t.y);o+=r*Math.hypot(l,d)}return o}function Ke(e,t,i,o){let a=0;for(let n=0;n<8;n++){const{t:r,w:s}=He[n],l=1-r,d=3*l*l,c=6*l*r,p=3*r*r;t.x,e.x,i.x,t.x,o.x,i.x,t.y,e.y,i.y,e.y,i.y,t.y,o.y,i.y;const _=d*(t.x-e.x)+c*(i.x-t.x)+p*(o.x-i.x),u=d*(t.y-e.y)+c*(i.y-t.y)+p*(o.y-i.y);a+=s*Math.hypot(_,u)}return a}function Xe(e,t,i=48){const o=t.reduce((e,t)=>e+t.length,0);if(o<=0||0===t.length)return{d:e,totalLength:0,points:[{x:0,y:0}]};const a=[];let n=0;for(const e of t)a.push(n),n+=e.length;const r=[];for(let e=0;e<=i;e++){const n=e/i*o;let s=0;for(let e=0;e<t.length;e++)if(n>=a[e]&&(e===t.length-1||n<a[e+1])){s=e;break}const l=t[s],d=l.length,c=d>0?Math.max(0,Math.min(1,(n-a[s])/d)):0;if("line"===l.type)r.push({x:l.p0.x+(l.p1.x-l.p0.x)*c,y:l.p0.y+(l.p1.y-l.p0.y)*c});else if("quad"===l.type){const e=l.p0,t=l.p1,i=l.p2,o=1-c;r.push({x:o*o*e.x+2*o*c*t.x+c*c*i.x,y:o*o*e.y+2*o*c*t.y+c*c*i.y})}else{const e=l.p0,t=l.p1,i=l.p2,o=l.p3,a=1-c,n=a*a*a,s=3*a*a*c,d=3*a*c*c,p=c*c*c;r.push({x:n*e.x+s*t.x+d*i.x+p*o.x,y:n*e.y+s*t.y+d*i.y+p*o.y})}}return{d:e,totalLength:o,points:r}}function Ze(e,t,i){return{x:e.x+Math.cos(i)*t,y:e.y+Math.sin(i)*t}}function Qe(e,t,i,o,a=0,n=1,r,s=!1,l=48){const d=r?.line_routing_mode||"bezier_curved",c=r?.bus_lane_spacing??8,p=r?.bus_corner_radius??20;if(s)return function(e,t,i="bezier_curved",o=15,a=48){const n=e.radius,r=t.radius,s=t.x-e.x,l=t.y-e.y;if(Math.abs(l)>=Math.abs(s)){if(l>=0){const s={x:e.x,y:e.y+n},l={x:t.x,y:t.y-r},d=Math.abs(l.x-s.x),c=Math.max(0,l.y-s.y),p=l.x>=s.x?1:-1;if(d<2||c<6)return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"line",p0:s,p1:l,length:je(s,l)}],a);if("orthogonal_bus"===i){const e=s.y+.5*c,t=Math.max(0,Math.min(o,.45*d,.45*c));if(t<1){const t={x:s.x,y:e},i={x:l.x,y:e};return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} L ${s.x.toFixed(1)} ${e.toFixed(1)} L ${l.x.toFixed(1)} ${e.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"line",p0:s,p1:t,length:je(s,t)},{type:"line",p0:t,p1:i,length:je(t,i)},{type:"line",p0:i,p1:l,length:je(i,l)}],a)}const i=e-t,n=s.x+p*t,r=l.x-p*t,_=e+t,u={x:s.x,y:i},h={x:s.x,y:i+.55*t},m={x:s.x+p*t*.45,y:e},f={x:n,y:e},g={x:r,y:e},b={x:r+p*t*.55,y:e},y={x:l.x,y:e+.45*t},x={x:l.x,y:_};return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} L ${s.x.toFixed(1)} ${i.toFixed(1)} C ${s.x.toFixed(1)} ${(i+.55*t).toFixed(1)}, ${(s.x+p*t*.45).toFixed(1)} ${e.toFixed(1)}, ${n.toFixed(1)} ${e.toFixed(1)} L ${r.toFixed(1)} ${e.toFixed(1)} C ${(r+p*t*.55).toFixed(1)} ${e.toFixed(1)}, ${l.x.toFixed(1)} ${(e+.45*t).toFixed(1)}, ${l.x.toFixed(1)} ${_.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"line",p0:s,p1:u,length:je(s,u)},{type:"cubic",p0:u,p1:h,p2:m,p3:f,length:Ke(u,h,m,f)},{type:"line",p0:f,p1:g,length:je(f,g)},{type:"cubic",p0:g,p1:b,p2:y,p3:x,length:Ke(g,b,y,x)},{type:"line",p0:x,p1:l,length:je(x,l)}],a)}{const e={x:s.x,y:s.y+.45*c},t={x:l.x,y:s.y+.55*c};return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} C ${e.x.toFixed(1)} ${e.y.toFixed(1)}, ${t.x.toFixed(1)} ${t.y.toFixed(1)}, ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"cubic",p0:s,p1:e,p2:t,p3:l,length:Ke(s,e,t,l)}],a)}}{const s={x:e.x,y:e.y-n},l={x:t.x,y:t.y+r},d=Math.abs(l.x-s.x),c=Math.max(0,s.y-l.y),p=l.x>=s.x?1:-1;if(d<2||c<6)return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"line",p0:s,p1:l,length:je(s,l)}],a);if("orthogonal_bus"===i){const e=s.y-.5*c,t=Math.max(0,Math.min(o,.45*d,.45*c));if(t<1){const t={x:s.x,y:e},i={x:l.x,y:e};return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} L ${s.x.toFixed(1)} ${e.toFixed(1)} L ${l.x.toFixed(1)} ${e.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"line",p0:s,p1:t,length:je(s,t)},{type:"line",p0:t,p1:i,length:je(t,i)},{type:"line",p0:i,p1:l,length:je(i,l)}],a)}const i=e+t,n=s.x+p*t,r=l.x-p*t,_=e-t,u={x:s.x,y:i},h={x:s.x,y:i-.55*t},m={x:s.x+p*t*.45,y:e},f={x:n,y:e},g={x:r,y:e},b={x:r+p*t*.55,y:e},y={x:l.x,y:e-.45*t},x={x:l.x,y:_};return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} L ${s.x.toFixed(1)} ${i.toFixed(1)} C ${s.x.toFixed(1)} ${(i-.55*t).toFixed(1)}, ${(s.x+p*t*.45).toFixed(1)} ${e.toFixed(1)}, ${n.toFixed(1)} ${e.toFixed(1)} L ${r.toFixed(1)} ${e.toFixed(1)} C ${(r+p*t*.55).toFixed(1)} ${e.toFixed(1)}, ${l.x.toFixed(1)} ${(e-.45*t).toFixed(1)}, ${l.x.toFixed(1)} ${_.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"line",p0:s,p1:u,length:je(s,u)},{type:"cubic",p0:u,p1:h,p2:m,p3:f,length:Ke(u,h,m,f)},{type:"line",p0:f,p1:g,length:je(f,g)},{type:"cubic",p0:g,p1:b,p2:y,p3:x,length:Ke(g,b,y,x)},{type:"line",p0:x,p1:l,length:je(x,l)}],a)}{const e={x:s.x,y:s.y-.45*c},t={x:l.x,y:s.y-.55*c};return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} C ${e.x.toFixed(1)} ${e.y.toFixed(1)}, ${t.x.toFixed(1)} ${t.y.toFixed(1)}, ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"cubic",p0:s,p1:e,p2:t,p3:l,length:Ke(s,e,t,l)}],a)}}}if(s>=0){const s={x:e.x+n,y:e.y},l={x:t.x-r,y:t.y},d=Math.max(0,l.x-s.x),c=Math.abs(l.y-s.y),p=l.y>=s.y?1:-1;if(c<2||d<6)return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"line",p0:s,p1:l,length:je(s,l)}],a);if("orthogonal_bus"===i){const e=s.x+.5*d,t=Math.max(0,Math.min(o,.45*d,.45*c));if(t<1){const t={x:e,y:s.y},i={x:e,y:l.y};return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} L ${e.toFixed(1)} ${s.y.toFixed(1)} L ${e.toFixed(1)} ${l.y.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"line",p0:s,p1:t,length:je(s,t)},{type:"line",p0:t,p1:i,length:je(t,i)},{type:"line",p0:i,p1:l,length:je(i,l)}],a)}const i=e-t,n=s.y+p*t,r=l.y-p*t,_=e+t,u={x:i,y:s.y},h={x:i+.55*t,y:s.y},m={x:e,y:s.y+p*t*.45},f={x:e,y:n},g={x:e,y:r},b={x:e,y:r+p*t*.55},y={x:e+.45*t,y:l.y},x={x:_,y:l.y};return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} L ${i.toFixed(1)} ${s.y.toFixed(1)} C ${(i+.55*t).toFixed(1)} ${s.y.toFixed(1)}, ${e.toFixed(1)} ${(s.y+p*t*.45).toFixed(1)}, ${e.toFixed(1)} ${n.toFixed(1)} L ${e.toFixed(1)} ${r.toFixed(1)} C ${e.toFixed(1)} ${(r+p*t*.55).toFixed(1)}, ${(e+.45*t).toFixed(1)} ${l.y.toFixed(1)}, ${_.toFixed(1)} ${l.y.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"line",p0:s,p1:u,length:je(s,u)},{type:"cubic",p0:u,p1:h,p2:m,p3:f,length:Ke(u,h,m,f)},{type:"line",p0:f,p1:g,length:je(f,g)},{type:"cubic",p0:g,p1:b,p2:y,p3:x,length:Ke(g,b,y,x)},{type:"line",p0:x,p1:l,length:je(x,l)}],a)}{const e={x:s.x+.45*d,y:s.y},t={x:s.x+.55*d,y:l.y};return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} C ${e.x.toFixed(1)} ${e.y.toFixed(1)}, ${t.x.toFixed(1)} ${t.y.toFixed(1)}, ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"cubic",p0:s,p1:e,p2:t,p3:l,length:Ke(s,e,t,l)}],a)}}{const s={x:e.x-n,y:e.y},l={x:t.x+r,y:t.y},d=Math.max(0,s.x-l.x),c=Math.abs(l.y-s.y),p=l.y>=s.y?1:-1;if(c<2||d<6)return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"line",p0:s,p1:l,length:je(s,l)}],a);if("orthogonal_bus"===i){const e=s.x-.5*d,t=Math.max(0,Math.min(o,.45*d,.45*c));if(t<1){const t={x:e,y:s.y},i={x:e,y:l.y};return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} L ${e.toFixed(1)} ${s.y.toFixed(1)} L ${e.toFixed(1)} ${l.y.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"line",p0:s,p1:t,length:je(s,t)},{type:"line",p0:t,p1:i,length:je(t,i)},{type:"line",p0:i,p1:l,length:je(i,l)}],a)}const i=e+t,n=s.y+p*t,r=l.y-p*t,_=e-t,u={x:i,y:s.y},h={x:i-.55*t,y:s.y},m={x:e,y:s.y+p*t*.45},f={x:e,y:n},g={x:e,y:r},b={x:e,y:r+p*t*.55},y={x:e-.45*t,y:l.y},x={x:_,y:l.y};return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} L ${i.toFixed(1)} ${s.y.toFixed(1)} C ${(i-.55*t).toFixed(1)} ${s.y.toFixed(1)}, ${e.toFixed(1)} ${(s.y+p*t*.45).toFixed(1)}, ${e.toFixed(1)} ${n.toFixed(1)} L ${e.toFixed(1)} ${r.toFixed(1)} C ${e.toFixed(1)} ${(r+p*t*.55).toFixed(1)}, ${(e-.45*t).toFixed(1)} ${l.y.toFixed(1)}, ${_.toFixed(1)} ${l.y.toFixed(1)} L ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"line",p0:s,p1:u,length:je(s,u)},{type:"cubic",p0:u,p1:h,p2:m,p3:f,length:Ke(u,h,m,f)},{type:"line",p0:f,p1:g,length:je(f,g)},{type:"cubic",p0:g,p1:b,p2:y,p3:x,length:Ke(g,b,y,x)},{type:"line",p0:x,p1:l,length:je(x,l)}],a)}{const e={x:s.x-.45*d,y:s.y},t={x:s.x-.55*d,y:l.y};return Xe(`M ${s.x.toFixed(1)} ${s.y.toFixed(1)} C ${e.x.toFixed(1)} ${e.y.toFixed(1)}, ${t.x.toFixed(1)} ${t.y.toFixed(1)}, ${l.x.toFixed(1)} ${l.y.toFixed(1)}`,[{type:"cubic",p0:s,p1:e,p2:t,p3:l,length:Ke(s,e,t,l)}],a)}}}(e,t,d,p,l);const _=e.radius,u=t.radius,h=t.x-e.x,m=t.y-e.y,f=Math.atan2(m,h),g=Ze({x:e.x,y:e.y},_,f),b=Ze({x:t.x,y:t.y},u,f+Math.PI);if("horizontal"===i){if("solar-home"===o){const i=Ze({x:e.x,y:e.y},_,.1),o={x:t.x,y:e.y},a=Ze({x:t.x,y:t.y},u,-Math.PI/2);return Xe(`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} Q ${o.x.toFixed(1)} ${o.y.toFixed(1)} ${a.x.toFixed(1)} ${a.y.toFixed(1)}`,[{type:"quad",p0:i,p1:o,p2:a,length:Ye(i,o,a)}],l)}if("battery-home"===o){const i=Ze({x:e.x,y:e.y},_,-.1),o={x:t.x,y:e.y},a=Ze({x:t.x,y:t.y},u,Math.PI/2);return Xe(`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} Q ${o.x.toFixed(1)} ${o.y.toFixed(1)} ${a.x.toFixed(1)} ${a.y.toFixed(1)}`,[{type:"quad",p0:i,p1:o,p2:a,length:Ye(i,o,a)}],l)}if("solar-battery"===o){const i=Ze({x:e.x,y:e.y},_,Math.PI/2),o=Ze({x:t.x,y:t.y},u,-Math.PI/2);return Xe(`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} L ${o.x.toFixed(1)} ${o.y.toFixed(1)}`,[{type:"line",p0:i,p1:o,length:je(i,o)}],l)}if(o&&o.startsWith("home-")){const i=t.y<e.y;if("orthogonal_bus"===d){const o=Math.floor(a/2),s=Math.max(0,Math.ceil(n/2)-1),d=((r?.invert_bus_lane_order?s-o:o)+.5)*c,h=i?e.y-d:e.y+d,m=Math.asin(Math.max(-.9,Math.min(.9,(h-e.y)/_))),f=e.x+Math.cos(m)*_,g=t.x,b=i?t.y+u:t.y-u,y=Math.min(p,.45*Math.abs(g-f),.45*Math.abs(b-h)),x=Math.max(6,y),v={x:f,y:h},w={x:g,y:b};if(i){const e=g-x,t=h-x,i={x:e,y:h},o={x:e+.55*x,y:h},a={x:g,y:h-.45*x},n={x:g,y:t};return Xe(`M ${f.toFixed(1)} ${h.toFixed(1)} L ${e.toFixed(1)} ${h.toFixed(1)} C ${(e+.55*x).toFixed(1)} ${h.toFixed(1)}, ${g.toFixed(1)} ${(h-.45*x).toFixed(1)}, ${g.toFixed(1)} ${t.toFixed(1)} L ${g.toFixed(1)} ${b.toFixed(1)}`,[{type:"line",p0:v,p1:i,length:je(v,i)},{type:"cubic",p0:i,p1:o,p2:a,p3:n,length:Ke(i,o,a,n)},{type:"line",p0:n,p1:w,length:je(n,w)}],l)}{const e=g-x,t=h+x,i={x:e,y:h},o={x:e+.55*x,y:h},a={x:g,y:h+.45*x},n={x:g,y:t};return Xe(`M ${f.toFixed(1)} ${h.toFixed(1)} L ${e.toFixed(1)} ${h.toFixed(1)} C ${(e+.55*x).toFixed(1)} ${h.toFixed(1)}, ${g.toFixed(1)} ${(h+.45*x).toFixed(1)}, ${g.toFixed(1)} ${t.toFixed(1)} L ${g.toFixed(1)} ${b.toFixed(1)}`,[{type:"line",p0:v,p1:i,length:je(v,i)},{type:"cubic",p0:i,p1:o,p2:a,p3:n,length:Ke(i,o,a,n)},{type:"line",p0:n,p1:w,length:je(n,w)}],l)}}{const i=Ze({x:e.x,y:e.y},_,0),o=Ze({x:t.x,y:t.y},u,Math.PI),a=Math.max(40,o.x-i.x),n={x:i.x+.45*a,y:i.y},r={x:i.x+.55*a,y:o.y};return Xe(`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} C ${n.x.toFixed(1)} ${n.y.toFixed(1)}, ${r.x.toFixed(1)} ${r.y.toFixed(1)}, ${o.x.toFixed(1)} ${o.y.toFixed(1)}`,[{type:"cubic",p0:i,p1:n,p2:r,p3:o,length:Ke(i,n,r,o)}],l)}}return Xe(`M ${g.x.toFixed(1)} ${g.y.toFixed(1)} L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`,[{type:"line",p0:g,p1:b,length:je(g,b)}],l)}if("solar-home"===o){const i=Ze({x:e.x,y:e.y},_,Math.PI/2),o=Ze({x:t.x,y:t.y},u,-Math.PI/2);return Xe(`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} L ${o.x.toFixed(1)} ${o.y.toFixed(1)}`,[{type:"line",p0:i,p1:o,length:je(i,o)}],l)}if("grid-battery"===o){const i=Ze({x:e.x,y:e.y},_,0),o=Ze({x:t.x,y:t.y},u,Math.PI);return Xe(`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} L ${o.x.toFixed(1)} ${o.y.toFixed(1)}`,[{type:"line",p0:i,p1:o,length:je(i,o)}],l)}if(o&&o.startsWith("home-")){const i=t.x<e.x;if("orthogonal_bus"===d){const o=Math.floor(a/2),s=Math.max(0,Math.ceil(n/2)-1),d=((r?.invert_bus_lane_order?s-o:o)+.5)*c,h=i?e.x-d:e.x+d,m=Math.max(-.9,Math.min(.9,(h-e.x)/_)),f=Math.PI/2+Math.asin(m),g=e.y+Math.sin(f)*_,b=i?t.x+u:t.x-u,y=t.y,x=Math.min(p,.45*Math.abs(b-h),.45*Math.abs(y-g)),v=Math.max(6,x),w={x:h,y:g},$={x:b,y:y};if(i){const e=y-v,t=h-v,i={x:h,y:e},o={x:h,y:e+.55*v},a={x:h-.45*v,y:y},n={x:t,y:y};return Xe(`M ${h.toFixed(1)} ${g.toFixed(1)} L ${h.toFixed(1)} ${e.toFixed(1)} C ${h.toFixed(1)} ${(e+.55*v).toFixed(1)}, ${(h-.45*v).toFixed(1)} ${y.toFixed(1)}, ${t.toFixed(1)} ${y.toFixed(1)} L ${b.toFixed(1)} ${y.toFixed(1)}`,[{type:"line",p0:w,p1:i,length:je(w,i)},{type:"cubic",p0:i,p1:o,p2:a,p3:n,length:Ke(i,o,a,n)},{type:"line",p0:n,p1:$,length:je(n,$)}],l)}{const e=y-v,t=h+v,i={x:h,y:e},o={x:h,y:e+.55*v},a={x:h+.45*v,y:y},n={x:t,y:y};return Xe(`M ${h.toFixed(1)} ${g.toFixed(1)} L ${h.toFixed(1)} ${e.toFixed(1)} C ${h.toFixed(1)} ${(e+.55*v).toFixed(1)}, ${(h+.45*v).toFixed(1)} ${y.toFixed(1)}, ${t.toFixed(1)} ${y.toFixed(1)} L ${b.toFixed(1)} ${y.toFixed(1)}`,[{type:"line",p0:w,p1:i,length:je(w,i)},{type:"cubic",p0:i,p1:o,p2:a,p3:n,length:Ke(i,o,a,n)},{type:"line",p0:n,p1:$,length:je(n,$)}],l)}}{const o=Ze({x:e.x,y:e.y},_,Math.PI/2),a=i?0:Math.PI,n=Ze({x:t.x,y:t.y},u,a),r=Math.max(40,n.y-o.y),s={x:o.x,y:o.y+.45*r},d={x:n.x+(i?20:-20),y:o.y+.65*r};return Xe(`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} C ${s.x.toFixed(1)} ${s.y.toFixed(1)}, ${d.x.toFixed(1)} ${d.y.toFixed(1)}, ${n.x.toFixed(1)} ${n.y.toFixed(1)}`,[{type:"cubic",p0:o,p1:s,p2:d,p3:n,length:Ke(o,s,d,n)}],l)}}return Xe(`M ${g.x.toFixed(1)} ${g.y.toFixed(1)} L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`,[{type:"line",p0:g,p1:b,length:je(g,b)}],l)}function Je(e,t,i=2){if(!Number.isFinite(e))return"0";const o=Number.isFinite(i)?Math.max(0,Math.min(20,Math.floor(i))):2;if(t?.locale)try{return new Intl.NumberFormat(t.locale.language||"en",{minimumFractionDigits:0,maximumFractionDigits:o}).format(e)}catch{}try{return e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:o})}catch{return e.toFixed(o)}}function et(e,t=2,i=1e3,o){if(!Number.isFinite(e))return{value:"0",unit:"W",full:"0 W"};const a=Math.abs(e),n=Number.isFinite(t)?Math.max(0,Math.min(20,Math.floor(t))):2,r=Number.isFinite(i)&&i>0?i:1e3;if(a>=1e6){const t=Je(e/1e6,o,n);return{value:t,unit:"MW",full:`${t} MW`}}if(a>=r){const t=Je(e/1e3,o,n);return{value:t,unit:"kW",full:`${t} kW`}}const s=Je(Math.round(e),o,0);return{value:s,unit:"W",full:`${s} W`}}function tt(e,t=1,i){if(!Number.isFinite(e))return{value:"0",unit:"A",full:"0 A"};const o=Je(e,i,Number.isFinite(t)?Math.max(0,Math.min(20,Math.floor(t))):1);return{value:o,unit:"A",full:`${o} A`}}const it={viewBox:{width:620,height:410},nodes:{solar:{x:175,y:65,radius:36,defaultIcon:Ce,defaultColor:ve},grid:{x:65,y:200,radius:36,defaultIcon:Ae,defaultColor:we},battery:{x:175,y:335,radius:36,defaultIcon:Me,defaultColor:Se},home:{x:285,y:200,radius:38,defaultIcon:ke,defaultColor:Fe}},devicesHorizontal:{rowTopY:80,rowBottomY:320,startX:410,spacingX:120,radius:28}},ot={viewBox:{width:440,height:560},nodes:{solar:{x:220,y:60,radius:36,defaultIcon:Ce,defaultColor:ve},grid:{x:85,y:175,radius:36,defaultIcon:Ae,defaultColor:we},battery:{x:355,y:175,radius:36,defaultIcon:Me,defaultColor:Se},home:{x:220,y:290,radius:38,defaultIcon:ke,defaultColor:Fe}},devicesVertical:{colLeftX:95,colRightX:345,startY:420,spacingY:85,radius:28}};let at=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const nt={},rt=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends at{constructor(){super(...arguments),this.ot=nt}render(e,t){return t()}update(e,[t,i]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return H}else if(this.ot===t)return H;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,i)}});function st(e,t=1,i){const[o,a,n]=Ge(e,[255,255,255]),r=Math.max(0,Math.min(1,t)),s=function(){if("undefined"==typeof window)return!0;if("undefined"!=typeof document){const e=document.documentElement?.getAttribute("theme")||document.body?.getAttribute("theme");if(e&&(e.includes("dark")||e.includes("black")))return!0;if(e&&e.includes("light"))return!1}return"function"!=typeof window.matchMedia||window.matchMedia("(prefers-color-scheme: dark)").matches}();return(.299*(o*r+(s?30:255)*(1-r))+.587*(a*r+(s?41:255)*(1-r))+.114*(n*r+(s?59:255)*(1-r)))/255>.6?"#0f172a":"#ffffff"}var lt,dt;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(lt||(lt={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(dt||(dt={}));const ct=e=>{((e,t,i,o)=>{o=o||{},i=null==i?{}:i;const a=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});a.detail=i,e.dispatchEvent(a)})(window,"haptic",e)};function pt(e,t){const i=t.split(".")[0]||"homeassistant",o=(e.states?.[t]?.state||"").toLowerCase();"sensor"!==i&&"binary_sensor"!==i&&("climate"===i?"off"===o?e.callService("climate","turn_on",{entity_id:t}):e.callService("climate","turn_off",{entity_id:t}):"water_heater"===i?"off"===o?e.callService("water_heater","turn_on",{entity_id:t}):e.callService("water_heater","turn_off",{entity_id:t}):"lock"===i?"locked"===o?e.callService("lock","unlock",{entity_id:t}):e.callService("lock","lock",{entity_id:t}):e.callService(i,"toggle",{entity_id:t}))}function _t(e,t,i,o){if(!t)return;const a=i.switchEntityId;if("toggle"===o){if(!a)return;try{ct("light")}catch(e){}return void pt(t,a)}let n,r="auto";if("hold"===o)n=i.holdAction,r=i.holdMoreInfoTarget||"auto",n||(n=i.switchEntityId?{action:"toggle"}:{action:"more-info"});else if("double_tap"===o){if(n=i.doubleTapAction,r=i.doubleTapMoreInfoTarget||"auto",!n||"none"===n.action)return}else n=i.tapAction||{action:"more-info"},r=i.tapMoreInfoTarget||"auto";if(!n||"none"===n.action)return;const s=n.action||"none";try{if("toggle"===s){const e=n.target?.entity_id||n.entity||a;if(!e)return;try{ct("medium")}catch(e){}pt(t,e)}else if("more-info-switch"===s||"more-info-device"===s){try{ct("selection")}catch(e){}const t=i.switchEntityId||i.entityId;t&&e.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}else if("more-info-sensor"===s){try{ct("selection")}catch(e){}const t=i.entityId||i.switchEntityId;t&&e.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}else if("more-info"===s){try{ct("selection")}catch(e){}let t;const a=n.target?.entity_id||n.entity,s="hold"===o?i.holdMoreInfoEntity:"double_tap"===o?i.doubleTapMoreInfoEntity:i.tapMoreInfoEntity;t=a||(s||("custom"===r?s||i.entityId||i.switchEntityId:"soc"===r?i.socEntityId||i.entityId:"secondary"===r?i.secondaryEntityId||i.entityId:"amperage"===r?i.amperageEntityId||i.entityId:"sensor"===r?i.entityId:"switch"===r?i.switchEntityId||i.entityId:"battery"===i.id&&"hold"===o&&i.socEntityId?i.socEntityId:i.switchEntityId||i.entityId)),t&&e.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}else if("call-service"===s||"perform-action"===s){try{ct("success")}catch(e){}const e=n.service||n.perform_action;if(e){const[i,o]=e.split(".",2);t.callService(i,o,n.service_data||n.data||{},n.target)}}else if("navigate"===s){const t=n.navigation_path;if(t){try{ct("selection")}catch(e){}window.history.pushState(null,"",t),e.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0}))}}else if("url"===s){const e=n.url_path;if(e){try{ct("selection")}catch(e){}window.open(e,"_blank")}}else if("assist"===s){try{ct("selection")}catch(e){}e.dispatchEvent(new CustomEvent("show-dialog",{bubbles:!0,composed:!0,detail:{dialogTag:"ha-voice-command-dialog",dialogImport:()=>customElements.get("ha-voice-command-dialog")?void 0:customElements.whenDefined("ha-voice-command-dialog"),dialogParams:{pipeline_id:n.pipeline_id,start_listening:n.start_listening}}}))}else if("fire-dom-event"===s){try{ct("selection")}catch(e){}e.dispatchEvent(new CustomEvent("ll-custom",{bubbles:!0,composed:!0,detail:n}))}}catch(e){console.warn("[SimplePowerFlow] Action execution failed:",e)}}class ut{constructor(e){this._lastTapTime=0,this._startX=0,this._startY=0,this._isHoldTriggered=!1,this._onAction=e}handlePointerDown(e,t){e.target?.closest?.(".node-badge-group")||"mouse"===e.pointerType&&0!==e.button||(this._startX=e.clientX,this._startY=e.clientY,this._isHoldTriggered=!1,this._currentNode=t,e.preventDefault(),clearTimeout(this._holdTimer),this._holdTimer=setTimeout(()=>{this._isHoldTriggered=!0,this._onAction(t,"hold")},500))}handlePointerMove(e){const t=e.clientX-this._startX,i=e.clientY-this._startY;Math.sqrt(t*t+i*i)>12&&clearTimeout(this._holdTimer)}handlePointerUp(e,t){if(clearTimeout(this._holdTimer),e.target?.closest?.(".node-badge-group"))return void this.handlePointerCancel();if(this._isHoldTriggered)return void(this._isHoldTriggered=!1);const i=e.clientX-this._startX,o=e.clientY-this._startY;if(Math.sqrt(i*i+o*o)>12)return;const a=Date.now(),n=this._lastTappedNodeId===t.id&&a-this._lastTapTime<350,r=Boolean(t.doubleTapAction&&"none"!==t.doubleTapAction.action);n&&r?(clearTimeout(this._tapTimer),this._lastTapTime=0,this._lastTappedNodeId=void 0,this._onAction(t,"double_tap")):(this._lastTapTime=a,this._lastTappedNodeId=t.id,r?(clearTimeout(this._tapTimer),this._tapTimer=setTimeout(()=>{this._onAction(t,"tap"),this._lastTapTime=0,this._lastTappedNodeId=void 0},260)):this._onAction(t,"tap"))}handlePointerCancel(){clearTimeout(this._holdTimer),clearTimeout(this._tapTimer),this._isHoldTriggered=!1,this._currentNode=void 0}}function ht(e){if(!e||"object"!=typeof e)return e;const t={...e,...e.badge||{},...e.label_chip||{},...e.actions||{}};return delete t.badge,delete t.label_chip,delete t.actions,t}function mt(e){if(!e)return{};const t=ht(e);return{...t,badge:{badge_enabled:void 0!==t.badge_enabled?"boolean"==typeof t.badge_enabled?t.badge_enabled?"enabled":"disabled":t.badge_enabled:"auto",badge_style:t.badge_style,badge_position:t.badge_position,badge_size:t.badge_size,badge_color_on:t.badge_color_on,badge_color_off:t.badge_color_off,badge_pulse:t.badge_pulse,badge_quick_toggle:t.badge_quick_toggle,badge_tap_behavior:t.badge_tap_behavior},label_chip:{show_label:void 0!==t.show_label?"boolean"==typeof t.show_label?t.show_label?"enabled":"disabled":t.show_label:"auto",spacing_text_above_icon:t.spacing_text_above_icon,spacing_text_below_icon:t.spacing_text_below_icon,label_font_size:t.label_font_size??t.font_size_label,label_spacing_below_node:t.label_spacing_below_node??t.spacing_label_below_node,label_chip_enabled:void 0!==t.label_chip_enabled?"boolean"==typeof t.label_chip_enabled?t.label_chip_enabled?"enabled":"disabled":t.label_chip_enabled:"auto",label_chip_opacity:t.label_chip_opacity,label_chip_padding_x:t.label_chip_padding_x,label_chip_padding_y:t.label_chip_padding_y,label_border_radius:t.label_border_radius,label_border_width:t.label_border_width,label_color:t.label_color,label_color_mode:t.label_color_mode},actions:{tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action,tap_more_info_target:t.tap_more_info_target,hold_more_info_target:t.hold_more_info_target,double_tap_more_info_target:t.double_tap_more_info_target,tap_more_info_entity:t.tap_more_info_entity,hold_more_info_entity:t.hold_more_info_entity,double_tap_more_info_entity:t.double_tap_more_info_entity}}}function ft(e){if(!e)return{};const{badge:t,label_chip:i,actions:o,...a}=e;return{...a,...t||{},...i||{},...o||{}}}function gt(e,t){if(!e&&!t)return{};const i=e&&"object"==typeof e?e:{},o=t&&"object"==typeof t?t:{},a={...i,...i.node_dimensions||{},...i.shadows||{},...i.typography||{},...i.labels||{},...i.label_chip||{},...i.home_ring||{},...i.cables_and_bus||{},...i.wires||{},...i.particle_dynamics||{},...i.particles||{},...i.energy_mix||{},...i.bus_routing||{},...i.layout_spacing||{}};return void 0!==o.stroke_mode&&void 0===a.stroke_mode&&(a.stroke_mode=o.stroke_mode),void 0!==o.speed_mode&&void 0===a.speed_mode&&(a.speed_mode=o.speed_mode),void 0!==o.min_stroke&&void 0===a.min_stroke&&(a.min_stroke=o.min_stroke),void 0!==o.max_stroke&&void 0===a.max_stroke&&(a.max_stroke=o.max_stroke),void 0!==o.min_duration&&void 0===a.min_duration&&(a.min_duration=o.min_duration),void 0!==o.max_duration&&void 0===a.max_duration&&(a.max_duration=o.max_duration),void 0!==o.max_total_particles&&void 0===a.max_total_particles&&(a.max_total_particles=o.max_total_particles),void 0!==o.normalize_speed_by_length&&void 0===a.normalize_speed_by_length&&(a.normalize_speed_by_length=o.normalize_speed_by_length),delete a.node_dimensions,delete a.shadows,delete a.typography,delete a.labels,delete a.label_chip,delete a.home_ring,delete a.cables_and_bus,delete a.wires,delete a.particle_dynamics,delete a.particles,delete a.energy_mix,delete a.bus_routing,delete a.layout_spacing,"curved"===a.line_routing_mode?a.line_routing_mode="bezier_curved":"orthogonal"===a.line_routing_mode&&(a.line_routing_mode="orthogonal_bus"),"fixed"===a.home_glow_mode&&(a.home_glow_mode="custom"),a}function bt(e){const t=e||{};return{meteor_trail:{...ye.meteor_trail,...t.meteor_trail||{}},living_icons:{...ye.living_icons,...t.living_icons||{}},glassmorphism:{...ye.glassmorphism,...t.glassmorphism||{}},impact_ripples:{...ye.impact_ripples,...t.impact_ripples||{}},celestial_tracker:{...ye.celestial_tracker,...t.celestial_tracker||{}},self_sufficiency:{...ye.self_sufficiency,...t.self_sufficiency||{}}}}var yt={title:"Power Flow",solar:"Solar",grid:"Grid",battery:"Battery",home:"Home",production:"Production",consumption:"Consumption",import:"Import",export:"Export",charge:"Charge",discharge:"Discharge",inactive:"Inactive",active:"Active",unbalanced:"Unbalance",not_tracked:"Untracked"},xt={device_default_name:"Device",section:{general:"General",nodes:"Primary Nodes",solar:"Solar Node",grid:"Grid Power Node",battery:"Battery & Storage Node",home:"Home & Consumption Node",devices:"Individual Devices & Loads",styles:"Style, Dimensions & Typography",effects:"Visual Effects & Animations ✨",advanced:"Advanced & Calculation Engine",node_dimensions:"Node Radii & Dimensions",shadows:"Shadows & 3D Depth",typography:"Typography & Spacing",labels:"Node Labels & Chip/Tag Style",cables_and_bus:"Wire Geometry & Bus Routing",wires:"Wire Thickness & Zero-Flow Lines",particle_dynamics:"Particle Speed & Dynamics",particles:"Particle Rendering & Density",home_ring:"Home Multi-Color Mix Ring",meteor_trail:"Meteor Comet Particles (Meteor Trail)",living_icons:"Living & Animated Icons (Living Icons)",glassmorphism:"3D Glassmorphism & Neon Core",impact_ripples:"Impact Shockwaves (Impact Ripples)",celestial_tracker:"Solar & Lunar Celestial Tracker ☀️🌙",self_sufficiency:"Self-Sufficiency Hub (Central Node 🌿)",badge:"Status Badge & Switch Control",secondary_info:"Secondary Information",label_chip:"Label & Chip/Tag Background",actions:"Gestures & Tap Actions"},title:"Card Title",solar:"Solar Node",grid:"Grid Node",battery:"Battery Node",home:"Home Node",devices:"Individual Devices",add_device:"Add Device",remove_device:"Remove Device",move_up:"Move up",move_down:"Move down",device_name:"Device Name",device_icon:"Icon",device_color:"Color",id:"Unique Device ID",name:"Custom Name",icon:"Icon",color:"Primary Color",color_charge:"Charge Color",color_discharge:"Discharge Color",color_idle:"Idle Color (Standby)",use_idle_color:"Enable Dedicated Color for Idle Battery",entity:"Power Entity (Watts)",entity_import:"Grid Import Entity",entity_export:"Grid Export Entity",entity_charge:"Battery Charge Entity",entity_discharge:"Battery Discharge Entity",entity_in:"Input Entity (Legacy)",entity_out:"Output Entity (Legacy)",entity_amperage:"Current Entity (Amperes)",state_of_charge:"State of Charge Entity (SoC %)",switch_entity:"Switch / Control Entity",invert:"Invert Sign Convention (+/-)",include_in_home:"Include in Home Total",display_zero:"Show Zero-Flow Line",display_zero_tolerance:"Zero-Flow Tolerance (W)",show_label:"Show Name / Label",stroke_mode:"Line Thickness Mode",speed_mode:"Particle Speed Mode",layout_mode:"Visual Layout Mode",auto_layout_breakpoint:"Mobile Layout Threshold (Breakpoint px)",min_duration:"Minimum Particle Duration (s)",max_duration:"Maximum Particle Duration (s)",normalize_speed_by_length:"Normalize Speed by Wire Length",min_stroke:"Minimum Line Width (px)",max_stroke:"Maximum Line Width (px)",scale_min:"Scale Minimum Power (W)",scale_max:"Scale Maximum Power (W)",scale_curve:"Power Scaling Curve",smoothing_factor:"Smoothing Factor (EMA)",max_total_particles:"Max Active Particles on Screen",decimals:"Number of Decimal Places",w_to_kw_threshold:"Threshold from Watts to kW",residual_handling:"Energy Balance Residual Handling",residual_absorb_target:"Residual Absorb Target",node_radius_primary:"Primary Node Radius (px)",node_radius_secondary:"Secondary Node Radius (px)",node_radius_tertiary:"Tertiary Sub-Device Node Radius (px)",node_border_width:"Circle Border Width (px)",sub_device_border_width:"Sub-Device Border Width (px)",icon_size_primary:"Primary Icon Size (px)",icon_size_secondary:"Secondary Icon Size (px)",icon_size_tertiary:"Tertiary Sub-Device Icon Size (px)",spacing_text_above_icon:"Space Above Icon (px)",spacing_text_below_icon:"Space Below Icon (px)",spacing_horizontal:"Grid Horizontal Spacing (px)",spacing_vertical:"Grid Vertical Spacing (px)",sub_device_spacing_x:"Sub-Devices Horizontal Spacing (px)",sub_device_spacing_y:"Sub-Devices Vertical Spacing (px)",sub_devices_section:"Nested Sub-Devices",add_sub_device:"Add Sub-Device",edit_sub_device:"Edit Sub-Device",no_sub_devices:"No nested sub-devices attached to this node.",sub_device_default_name:"Sub-Device",include_in_parent:"Include in Parent Device",distance_x:"Horizontal Distance (Offset X)",distance_y:"Vertical Distance (Offset Y)",sub_device_radius:"Sub-Device Radius (px)",sub_device_icon_size:"Sub-Device Icon Size (px)",cancel:"Cancel",save:"Save",font_size_primary:"Primary Value Font Size (px)",font_size_secondary:"Secondary Value Font Size (px)",font_size_unit:"Unit Font Size W/kW/A (px)",font_size_extra:"Directional Flow Font Size (px)",font_size_sub:"Subtext & Secondary Info Font Size (px)",font_size_value:"Power Value Font Size (px)",font_size_label:"Node Label Font Size (px)",font_size_directional:"Directional Flow Font Size (px)",font_size_top_info:"Top Info Font Size SoC/Amperes (px)",font_size_tertiary:"Tertiary Sub-Device Font Size (px)",label_font_size:"Node Label Font Size (px)",label_spacing_below_node:"Label Gap Below Node (px)",spacing_label_below_node:"Label Gap Below Circle (px)",mode:"Visual Mode",anchor:"Anchor Node",weather_entity:"Weather Entity",show_markers:"Show Sunrise/Sunset Markers",show_marker_icons:"Show Marker Icons",sunrise_icon:"Sunrise Icon",sunset_icon:"Sunset Icon",show_rays:"Show Sun Rays",show_tail:"Show Orbit Tail",show_stars:"Show Night Stars",night_node_mode:"Night Node Appearance",scope:"Calculation Scope",label_style:"Percentage Label Style",radius:"Element Radius (px)",show_ring:"Show Progress Ring",ring_width:"Ring Thickness (px)",show_glow:"Show Neon Glow",custom_label:"Custom Label",custom_icon:"Custom Icon",entity_solar_energy:"Solar Energy Sensor (kWh)",entity_battery_energy_discharge:"Battery Discharged Energy Sensor (kWh)",entity_grid_energy_import:"Grid Import Energy Sensor (kWh)",entity_home_energy:"Home Total Energy Sensor (kWh)",entity_self_sufficiency:"Direct Self-Sufficiency Sensor (%)",show_labels:"Show Global Labels",label_chip_enabled:"Enable Chip / Tag Style Background",label_chip_opacity:"Chip Background Opacity",label_chip_padding_x:"Chip Horizontal Padding (px)",label_chip_padding_y:"Chip Vertical Padding (px)",label_border_radius:"Chip Border Radius (px)",label_border_width:"Chip Border Width (px)",label_color_mode:"Label Text Color Mode",label_color:"Custom Label Text Color",line_routing_mode:"Device Path Routing Mode",bus_lane_spacing:"Parallel Bus Lane Spacing (px)",bus_corner_radius:"90° Bus Corner Radius (px)",invert_bus_lane_order:"Invert Bus Lane Order",particles_per_arc:"Particles per Active Line",particle_size_offset:"Particle Extra Radius (px)",particle_inner_glow:"White Bright Core (Inner Glow)",particle_soft_edge:"Soft Radial Blurred Edge",inactive_wire_opacity:"Zero-Flow Wire Opacity",inactive_wire_style:"Zero-Flow Line Style",hover_glow_radius:"Hover Glow Radius (px)",show_node_shadows:"Enable Node Shadows",node_shadow_color:"Custom Shadow Color",node_shadow_blur:"Node Shadow Blur (px)",node_shadow_spread:"Node Shadow Spread (px)",node_shadow_opacity:"Node Shadow Opacity",node_shadow_offset_y:"Node Shadow Vertical Offset (px)",show_home_mix_ring:"Show Multi-Color Home Mix Ring",home_glow_mode:"Home Hover Glow Color",enabled:"Enable Effect",tail_length:"Comet Tail Length",glow_intensity:"Tail Glow Intensity",battery_type:"Battery Visual Style",battery_animated:"Continuous Wave Animation",load_animation:"Load Icon Animation",intensity:"Glass Reflection Intensity (%)",neon_core:"Concentric Inner Glowing Ring (Neon Core)",ripple_size:"Shockwave Size (px)",ripple_color:"Custom Shockwave Color",meteor_trail_enabled:"Enable Meteor Comet Trails",meteor_trail_tail_length:"Tail Length (Normalized)",meteor_trail_glow_intensity:"Tail Glow Intensity",living_icons_enabled:"Enable Living Icons & Battery Wave",living_icons_battery_type:"Battery Visual Style",living_icons_battery_animated:"Continuous Battery Wave Animation",living_icons_load_animation:"Active Load Icon Animation",glassmorphism_enabled:"Enable 3D Glassmorphism & Neon Ring",glassmorphism_intensity:"Glass Glare Intensity (%)",glassmorphism_neon_core:"Inner Glowing Ring (Neon Core)",impact_ripples_enabled:"Enable Arrival Shockwave Ripples",impact_ripples_size:"Shockwave Size (px)",impact_ripples_color:"Custom Shockwave Color",badge_enabled:"Show Status Notification Badge",badge_style:"Badge Visual Style",badge_position:"Badge Anchor Position",badge_size:"Badge Size (px)",badge_color_on:"Active State Color (ON)",badge_color_off:"Inactive State Color (OFF)",badge_pulse:"Pulse Animation when Active",badge_quick_toggle:"Quick Tap to Toggle Switch",badge_tap_behavior:"Badge Tap Behavior",secondary_info_entity:"Secondary Info Entity",secondary_info_unit:"Custom Unit",secondary_info_decimals:"Number of Decimals",secondary_info_template:"Formatting Template",unit:"Custom Unit of Measurement",glow_color:"Custom Aura Glow Color",tap_action:"Single Tap Action",hold_action:"Hold Action",double_tap_action:"Double Tap Action",tap_more_info_target:"More Info Target (Tap)",hold_more_info_target:"More Info Target (Hold)",double_tap_more_info_target:"More Info Target (Double Tap)",tap_more_info_entity:"Custom Third-Party Entity (Tap)",hold_more_info_entity:"Custom Third-Party Entity (Hold)",double_tap_more_info_entity:"Custom Third-Party Entity (Double Tap)",helper:{label_font_size:"Font size in pixels for node labels (default: 10px).",label_spacing_below_node:"Vertical distance in pixels between the node circle and the label/chip (default: 14px).",enabled:"Enable or disable this visual feature.",mode:"Select rendering mode for this element.",anchor:"Select which primary node to anchor the celestial orb orbit trajectory to.",scope:"Choose the time interval to calculate self-sufficiency over (Today or Total).",label_style:"Display format for the descriptive text under the percentage.",radius:"Radius of the circular element in pixels.",show_ring:"Show the donut progress ring.",ring_width:"Thickness of the donut ring track in pixels.",show_glow:"Enable the ambient pulsing aura glow.",custom_label:"Custom label text to display.",custom_icon:"Custom MDI icon to display.",tap_action:"Action to perform when the node is tapped.",hold_action:"Action to perform when the node is held.",double_tap_action:"Action to perform when the node is double tapped.",tap_more_info_target:"Target entity for the More Info dialog.",tap_more_info_entity:"Custom entity to open upon tapping.",hold_more_info_target:"Target entity for the More Info dialog on hold.",hold_more_info_entity:"Custom entity to open upon holding.",double_tap_more_info_target:"Target entity for the More Info dialog on double tap.",double_tap_more_info_entity:"Custom entity to open upon double tapping.",node_shadow_offset_y:"Vertical offset of the node drop-shadow in pixels.",title:"Custom title displayed in the card header.",layout_mode:"Choose visual layout: 'Auto' adapts to screen width, 'Horizontal' lines up nodes, 'Vertical' arranges in two compact columns.",stroke_mode:"Determines whether flow line thickness scales based on Power (Watts), Current (Amperes), or stays fixed.",speed_mode:"Particle animation speed can scale with absolute power in Watts or relative percentage of total flow.",auto_layout_breakpoint:"Card width in pixels below which the responsive vertical layout activates (default: 520px).",id:"Unique internal identifier for the device load (alphanumeric, dash, or underscore).",name:"Custom display name shown below the node circle.",icon:"Material Design icon rendered inside the circle (e.g. mdi:solar-power, mdi:heat-pump).",entity:"Primary power sensor entity in Watts or kW for this node.",entity_import:"Sensor for power imported from the grid (positive Watts).",entity_export:"Sensor for power exported to the grid (positive Watts).",entity_charge:"Sensor for power absorbed by the battery during charging (positive Watts).",entity_discharge:"Sensor for power supplied by the battery during discharging (positive Watts).",state_of_charge:"Battery State of Charge sensor (SoC 0% to 100%).",entity_amperage:"Optional current sensor in Amperes shown above the center icon.",color:"Primary color for node circle, glowing particles, and attached flow lines.",color_charge:"Line and particle color during battery charging.",color_discharge:"Line and particle color during battery discharging.",use_idle_color:"Apply a dedicated color when the battery is in standby at 0 W.",color_idle:"Color applied to the battery node circle when idle (0 W).",invert:"Invert sign convention: turns positive numbers to negative and vice versa.",switch_entity:"Switch/light/relay entity associated with the node for toggle control.",include_in_home:"When disabled, this device's consumption is excluded from the calculated Home total.",display_zero:"Keep the connection line visible even when flow power is zero.",display_zero_tolerance:"Threshold in Watts below which power flow is considered zero.",show_label:"Show or hide the text label below the node circle.",node_radius_primary:"Radius in pixels for primary circles (Solar, Grid, Battery, Home; default: 36px).",node_radius_secondary:"Radius in pixels for secondary device circles (default: 28px).",node_radius_tertiary:"Standard radius in pixels for all tertiary sub-device circles (default: 21px).",icon_size_primary:"Icon size in pixels for primary nodes (default: 18px).",icon_size_secondary:"Icon size in pixels for secondary devices (default: 16px).",icon_size_tertiary:"Standard icon size in pixels for tertiary sub-devices (default: 13px).",node_border_width:"Outer circle border stroke width in pixels (default: 2.5px).",sub_device_border_width:"Border stroke width for tertiary sub-devices in pixels (default: 2.0px).",sub_device_spacing_x:"Default horizontal spacing between parent node and sub-devices (default: 75px).",sub_device_spacing_y:"Default vertical spacing between parent node and sub-devices (default: 32px).",include_in_parent:"When enabled, this sub-device's power is part of the parent device load (or contributes to its rollup if the parent has no own entity).",distance_x:"Custom relative horizontal offset from parent node in pixels.",distance_y:"Custom relative vertical offset from parent node in pixels.",sub_device_radius:"Radius of the sub-device circle in pixels (default: 21px).",sub_device_icon_size:"Size of the sub-device icon in pixels (default: 13px).",show_node_shadows:"Apply a soft drop shadow beneath node circles for 3D depth.",node_shadow_color:"Custom shadow color for node circles (leave blank for standard dark shadow).",node_shadow_blur:"Shadow blur radius in pixels (default: 10px).",node_shadow_spread:"Shadow spread expansion in pixels.",font_size_primary:"Power value font size for primary nodes (default: 10px).",font_size_secondary:"Power value font size for secondary devices (default: 9px).",font_size_unit:"Font size for measurement units W/kW/A (default: 8px).",font_size_extra:"Font size for directional arrows and dual charge/import text (default: 8.5px).",font_size_sub:"Font size for untracked consumption and secondary information (default: 9px).",font_size_label:"Font size for node description labels (default: 10px).",font_size_top_info:"Font size for SoC % and Amperage text above the icon (default: 8px).",spacing_label_below_node:"Vertical distance between the node circle and its label (default: 14px).",show_labels:"Globally show or hide labels for all nodes on the card.",label_chip_enabled:"Render a rounded chip/tag background around the label text.",label_chip_opacity:"Chip background opacity tinted with the node color (0.05 to 1.0; default: 0.18).",label_chip_padding_x:"Horizontal internal padding in pixels for the chip (default: 8px).",label_chip_padding_y:"Vertical internal padding in pixels for the chip (default: 3.5px).",label_border_radius:"Corner radius for the rounded chip box (default: 6px).",label_border_width:"Outer stroke border width of the chip (default: 1px).",label_color_mode:"Auto contrast dynamically selects pure white or dark black for guaranteed legibility.",label_color:"Specific text color when label color mode is set to 'Custom'.",inactive_wire_opacity:"Opacity of flow wires when zero energy is transferring (default: 0.35).",inactive_wire_style:"Choose whether zero-flow lines are dashed, solid, or completely hidden.",hover_glow_radius:"Radius of radiant glow halo when hovering a node (default: 10px).",show_home_mix_ring:"Show a multi-color ring around Home with segments proportional to Solar, Grid, and Battery.",home_glow_mode:"On hover, illuminate Home with the predominant power source color or fixed Home color.",line_routing_mode:"Direct Bezier curved arcs or an orthogonal central bus channel for multiple device loads.",bus_lane_spacing:"Distance between parallel load lanes in the central bus channel (default: 8px).",bus_corner_radius:"Corner radius for 90° smooth bends in the central bus channel (default: 20px).",invert_bus_lane_order:"Inverts the order of load lanes in the central channel (innermost vs outermost).",particles_per_arc:"Number of light particles flowing along each active wire (default: 3).",particle_size_offset:"Extra radius offset added to light particles (default: 1.8px).",particle_inner_glow:"Adds a bright white high-density core to each particle.",particle_soft_edge:"Applies a soft blurred radial falloff to particle edges for realistic lighting.",spacing_horizontal:"Horizontal pixel spacing between node columns (default: 120px).",spacing_vertical:"Vertical pixel spacing between node rows (default: 85px).",spacing_text_above_icon:"Gap in pixels between top text (SoC/Amps) and the center icon (default: 4px).",spacing_text_below_icon:"Gap in pixels between center icon and the power value (default: 4px).",meteor_trail:"Luminescent comet tail trailing behind flowing particles.",tail_length:"Length of the comet tail along the wire path (0.02 to 0.25).",glow_intensity:"Glow brightness intensity and thickness multiplier for the comet tail.",living_icons:"Living animations for device icons and dynamic battery visuals (liquid waves or gradient).",battery_type:"Battery visual style: 'Gradient' (radial energy glow) or 'Liquid' (animated wave clipped to circle).",battery_animated:"Maintains continuous liquid wave oscillation in the battery circle.",load_animation:"Animation applied to active device icons (spinning rotation or energy pulse).",glassmorphism:"3D convex glass lens glare filter and glowing Neon Core ring.",intensity:"Intensity percentage of glass glare reflections and neon luminescence.",neon_core:"Shows a concentric glowing inner Neon Core ring inside the node circle.",impact_ripples:"Circular shockwave ripples that expand when a particle arrives at its destination node.",ripple_size:"Maximum expansion radius of the shockwave ripple in pixels (default: 18px).",ripple_color:"Custom shockwave ripple color (leave blank to match arriving particle color).",celestial_tracker:"Real-time tracking of Sun and Moon positions along a 24-hour dial or 180° arc.",self_sufficiency:"Displays a central circular node at the intersection of the 4 primary nodes showing cumulative energy self-sufficiency percentage with a proportional donut ring.",self_sufficiency_scope:"Calculate cumulative self-sufficiency percentage based on today's energy data (Today) or all-time lifetime data (Total).",self_sufficiency_label_style:"Choose what to display under the percentage: scope indicator (TODAY/TOTAL), text 'AUTOSUFF.', MDI icon or clean percentage number.",self_sufficiency_radius:"Radius of the central hub node in pixels (default: 22px).",self_sufficiency_ring_width:"Donut ring stroke width in pixels (default: 3.2px).",self_sufficiency_show_glow:"Enables a glowing aura around the hub (green when >= 90%, amber when < 50%).",glow_color:"Custom color for the pulsing aura glow around the central hub node (leave blank for dynamic calculation based on percentage).",entity_solar_energy:"Sensor tracking solar energy production/consumption in kWh (e.g. sensor.solar_energy_today).",entity_battery_energy_discharge:"Sensor tracking battery discharge energy to home in kWh (e.g. sensor.battery_discharged_today).",entity_grid_energy_import:"Sensor tracking grid import energy to home in kWh (e.g. sensor.grid_energy_imported_today).",entity_home_energy:"Optional: sensor tracking total home consumption in kWh.",entity_self_sufficiency:"Optional: direct percentage sensor for self-sufficiency provided by your inverter.",weather_entity:"Optional weather entity to adapt celestial orb tint, rays and badges (e.g. weather.home).",show_markers:"Show sunrise and sunset graphical badges and time labels on the dial.",show_marker_icons:"Display MDI icons beside sunrise and sunset time labels.",sunrise_icon:"Custom icon for sunrise (default: mdi:weather-sunset-up).",sunset_icon:"Custom icon for sunset (default: mdi:weather-sunset-down).",show_rays:"Enable GPU-accelerated rotating sun rays around the solar orb.",show_tail:"Draw a progressive luminous trail along the traveled celestial path.",show_stars:"Display animated twinkling vector stars distributed along the night sky arc.",night_node_mode:"Transform solar node icon to moon (🌙) when night and 0W production (if not custom).",badge_enabled:"Shows a circular badge on the node corner indicating switch state (ON/OFF) or status.",badge_style:"Badge style: minimal circular LED dot, mini-power icon, or 'ON'/'OFF' text.",badge_position:"Corner anchor position of the badge around the node circle.",badge_size:"Diameter of the notification badge in pixels (default: 10px).",badge_color_on:"Badge color when the device is turned ON or active.",badge_color_off:"Badge color when the device is turned OFF or inactive.",badge_pulse:"Enables continuous energetic pulsing on the badge while active.",badge_quick_toggle:"Enables tapping the badge directly to quickly toggle the switch ON or OFF.",badge_tap_behavior:"Behavior when tapping the status badge.",secondary_info:"Displays supplementary text below the node (e.g. temperature, voltage, daily energy).",unit:"Custom unit of measurement appended to the secondary information value.",decimals:"Number of decimal places shown for power values (default: 2).",w_to_kw_threshold:"Threshold in Watts above which power is automatically formatted in kW (default: 1000 W).",scale_curve:"Mathematical curve used to map Watts to wire thickness and speed: 'Square root' provides the best dynamic range.",scale_min:"Power level below which speed and thickness remain at minimum (default: 50 W).",scale_max:"Power level at which wire thickness and particle speed reach maximum (default: 6000 W).",smoothing_factor:"Exponential moving average (EMA) factor: lower values produce smoother transitions (default: 0.35).",max_total_particles:"Maximum particles active on screen simultaneously to maintain 60 FPS performance (default: 30).",min_stroke:"Minimum flow wire stroke width in pixels (default: 2.0px).",max_stroke:"Maximum flow wire stroke width at full load in pixels (default: 7.0px).",min_duration:"Minimum travel time in seconds for particles at peak power (faster; default: 0.8s).",max_duration:"Maximum travel time in seconds for particles at minimum power (slower; default: 5.5s).",normalize_speed_by_length:"When enabled, normalizes physical particle speed in pixels per second based on the wire path length, preventing particles from flying faster across longer lines.",residual_handling:"Method for balancing mathematical discrepancies: 'Clamp' balances on the primary arc, 'Absorb' routes to grid/battery, 'Unbalanced' displays residual.",residual_absorb_target:"Designated node to absorb residual balance discrepancies when set to 'Absorb'."},option:{override:{auto:"Default (Global)",enabled:"Enabled (Force On)",disabled:"Disabled (Force Off)"},self_sufficiency_scope:{today:"Daily (Today)",total:"Historical (Total)"},self_sufficiency_label_style:{scope:"Time Scope (TODAY / TOTAL)",text:"Text 'AUTOSUFF.'",icon:"Custom MDI Icon",none:"Percentage Only (No label)"},layout_mode:{auto:"Automatic (Adaptive to screen width)",horizontal:"Horizontal (Linear grid)",vertical:"Vertical (Compact 2-Column)"},stroke_mode:{watt:"Dynamic by Power (Watts)",fixed:"Uniform Fixed Width",ampere:"Dynamic by Current (Amperes)"},speed_mode:{absolute:"Absolute Speed (Actual Watts)",relative:"Relative Speed (% of total power)"},scale_curve:{sqrt:"Square Root (Sqrt - Recommended for visual dynamics)",linear:"Linear Proportional",log:"Logarithmic (Wide dynamic range)"},residual_handling:{clamp:"Clamp (Zero balance on primary arc)",absorb:"Absorb (Route to designated target)",unbalanced:"Unbalance (Display residual difference)"},residual_absorb_target:{grid:"Electrical Grid (Grid)",battery:"Battery Storage (Battery)"},badge_style:{dot:"Minimal Circular LED Dot",icon:"Mini Power Icon (ON / OFF)",text:"Micro-Tag (ON / OFF)"},badge_position:{top_right:"Top Right (Top-Right)",top_left:"Top Left (Top-Left)",bottom_right:"Bottom Right (Bottom-Right)",bottom_left:"Bottom Left (Bottom-Left)"},badge_tap_behavior:{auto:"Automatic (Detects switch or sensor)",toggle:"Toggle Switch State (ON / OFF)","more-info-switch":"Open Switch Control Dialog","more-info-sensor":"Open Power Sensor History Dialog","more-info":"Open General Details Dialog"},more_info_target:{auto:"Automatic (Battery: SoC on Long Press, otherwise Switch/Sensor)",soc:"Battery State of Charge (SoC %)",sensor:"Main Power Sensor (W/kW)",secondary:"Secondary Sensor (Secondary Info)",amperage:"Current Sensor (Amperage)",switch:"Switch / Control Entity",custom:"Custom Third-Party Entity (Selector)"},label_color_mode:{auto_contrast:"Optimal Smart Contrast (Auto B/W)",white:"Pure White (#ffffff)",black:"Dark Black (#0f172a)",match_entity:"Match Entity Color",secondary:"Standard Secondary Grey",custom:"Custom Color"},battery_type:{gradient:"Dynamic Radial Gradient (Energy Glow)",liquid:"Animated Liquid Water Level (Liquid Wave)"},load_animation:{rotate:"Continuous Rotation (Fan / Motor)",pulse:"Energy Pulse / Breathing",none:"None (Static Icons)"},line_routing_mode:{bezier_curved:"Direct Curved Arcs (Bezier)",orthogonal_bus:"Central Bus Channel (Smooth Orthogonal)"},inactive_wire_style:{dashed:"Dashed Line",solid:"Solid Line",hidden:"Completely Hidden"},home_glow_mode:{predominant:"Dynamic (Predominant active source color)",custom:"Fixed (Default Home color)"},celestial_mode:{dial_24h:"24-Hour Circular Dial 360° (Day & Night)",semicircle:"180° Semi-circle Arc (Upper Dome)"},celestial_anchor:{home:"Around Home Node",solar:"Around Solar Node (Recommended)"}},error:{invalid_range:"Invalid range: minimum value must be strictly less than maximum value.",duplicate_id:"Device ID must be unique.",invalid_id:"ID must start with a letter and contain only alphanumeric characters, dashes, or underscores.",reserved_id:"This ID is reserved by the system.",missing_entity:"At least one valid power entity is required."}},vt={missing_entity:"At least one valid power entity is required.",invalid_range:"Invalid range: minimum value must be strictly less than maximum value."},wt={self_sufficiency:{scope_today:"TODAY",scope_total:"TOTAL",default_label:"SELF-SUFF."}},$t={card:yt,editor:xt,errors:vt,effects:wt},St={title:"Flusso Energetico",solar:"Solare",grid:"Rete",battery:"Batteria",home:"Casa",production:"Produzione",consumption:"Consumo",import:"Prelevata",export:"Immessa",charge:"Carica",discharge:"Scarica",inactive:"Inattivo",active:"Attivo",unbalanced:"Sbilanciamento",not_tracked:"Altri Consumi"},zt={device_default_name:"Dispositivo",section:{general:"Generale",nodes:"Nodi Principali",solar:"Nodo Solare",grid:"Nodo Rete Elettrica",battery:"Nodo Batteria & Accumulo",home:"Nodo Casa & Fabbisogno",devices:"Carichi Individuali & Dispositivi",styles:"Stile, Dimensioni & Tipografia",effects:"Effetti Visivi & Animazioni ✨",advanced:"Avanzate & Motore di Calcolo",node_dimensions:"Dimensioni Nodi & Cerchi",shadows:"Ombreggiatura & Profondità 3D",typography:"Tipografia & Spaziature Interne",labels:"Etichette Nodi & Stile Chip/Tag",cables_and_bus:"Geometria Cavi & Routing Bus",wires:"Spessore Cavi & Linee a Flusso Zero",particle_dynamics:"Dinamica & Velocità Particelle",particles:"Resa & Densità Particelle",home_ring:"Anello Multi-Colore Casa",meteor_trail:"Particelle a Cometa (Meteor Trail)",living_icons:"Icone Vive & Dinamiche (Living Icons)",glassmorphism:"Effetto Vetro 3D & Neon Core",impact_ripples:"Micro-Onde d'Urto (Impact Ripples)",celestial_tracker:"Tracciatore Solare & Lunare ☀️🌙",self_sufficiency:"Autosufficienza Energetica (Nodo Centrale 🌿)",badge:"Badge di Stato & Controllo Switch",secondary_info:"Informazioni Secondarie",label_chip:"Etichetta & Sfondo Chip/Tag",actions:"Gesti & Azioni Tocco"},title:"Titolo Card",solar:"Nodo Solare",grid:"Nodo Rete",battery:"Nodo Batteria",home:"Nodo Casa",devices:"Carichi Individuali",add_device:"Aggiungi Dispositivo",remove_device:"Rimuovi Dispositivo",move_up:"Sposta su",move_down:"Sposta giù",device_name:"Nome Dispositivo",device_icon:"Icona",device_color:"Colore",id:"Identificativo ID Dispositivo",name:"Nome Personalizzato",icon:"Icona",color:"Colore Principale",color_charge:"Colore Carica",color_discharge:"Colore Scarica",color_idle:"Colore a Riposo (Standby)",use_idle_color:"Attiva Colore Dedicato per Batteria Inattiva",entity:"Entità Potenza (Watt)",entity_import:"Entità Prelievo (Import)",entity_export:"Entità Immissione (Export)",entity_charge:"Entità Carica",entity_discharge:"Entità Scarica",entity_in:"Entità Ingresso (Legacy)",entity_out:"Entità Uscita (Legacy)",entity_amperage:"Entità Corrente (Ampere)",state_of_charge:"Entità Stato di Carica (SoC %)",switch_entity:"Entità Switch / Controllo Accensione",invert:"Inverti Convenzione Segno (+/-)",include_in_home:"Includi nel Totale Casa",display_zero:"Mostra Linea a Flusso Zero",display_zero_tolerance:"Tolleranza Flusso Zero (W)",show_label:"Mostra Nome / Etichetta",stroke_mode:"Modalità Spessore Linea",speed_mode:"Modalità Velocità Particelle",layout_mode:"Modalità Layout Visivo",auto_layout_breakpoint:"Soglia Passaggio Layout Mobile (Breakpoint px)",min_duration:"Durata Minima Particelle (s)",max_duration:"Durata Massima Particelle (s)",normalize_speed_by_length:"Uniforma Velocità in base alla Lunghezza del Cavo",min_stroke:"Spessore Minimo Linea (px)",max_stroke:"Spessore Massimo Linea (px)",scale_min:"Valore Minimo Scala Potenza (W)",scale_max:"Valore Massimo Scala Potenza (W)",scale_curve:"Curva di Scala Potenza",smoothing_factor:"Fattore di Smoothing (EMA)",max_total_particles:"Max Particelle Totali a Schermo",decimals:"Numero di Cifre Decimali",w_to_kw_threshold:"Soglia Passaggio da Watt a kW",residual_handling:"Gestione Residuo Bilancio Energetico",residual_absorb_target:"Target Assorbimento Residuo",node_radius_primary:"Raggio Nodi Primari (px)",node_radius_secondary:"Raggio Nodi Secondari (px)",node_radius_tertiary:"Raggio Nodi Terziari Sub-Devices (px)",node_border_width:"Spessore Bordo Cerchi (px)",sub_device_border_width:"Spessore Bordo Sub-Device (px)",icon_size_primary:"Dimensione Icone Primarie (px)",icon_size_secondary:"Dimensione Icone Secondarie (px)",icon_size_tertiary:"Dimensione Icone Terziarie Sub-Devices (px)",spacing_text_above_icon:"Spazio Testo Sopra Icona (px)",spacing_text_below_icon:"Spazio Testo Sotto Icona (px)",spacing_horizontal:"Spaziatura Orizzontale Griglia (px)",spacing_vertical:"Spaziatura Verticale Griglia (px)",sub_device_spacing_x:"Spaziatura Orizzontale Sub-Devices (px)",sub_device_spacing_y:"Spaziatura Verticale Sub-Devices (px)",sub_devices_section:"Dispositivi Secondari Nidificati (Sub-Devices)",add_sub_device:"Aggiungi Sub-Device",edit_sub_device:"Modifica Sub-Device",no_sub_devices:"Nessun dispositivo secondario nidificato collegato a questo nodo.",sub_device_default_name:"Sub-Device",include_in_parent:"Includi nel Dispositivo Padre",distance_x:"Distanza Orizzontale (Offset X)",distance_y:"Distanza Verticale (Offset Y)",sub_device_radius:"Raggio Sub-Device (px)",sub_device_icon_size:"Dimensione Icona Sub-Device (px)",cancel:"Annulla",save:"Salva",font_size_primary:"Font Valore Nodi Primari (px)",font_size_secondary:"Font Valore Dispositivi Secondari (px)",font_size_unit:"Font Unità di Misura W/kW/A (px)",font_size_extra:"Font Frecce Direzionali Extra (px)",font_size_sub:"Font Sotto-testi e Info Secondarie (px)",font_size_value:"Font Valori Potenza (px)",font_size_label:"Font Etichette Nodi (px)",font_size_directional:"Font Frecce Direzionali (px)",font_size_top_info:"Font Info Superiori SoC/Ampere (px)",font_size_tertiary:"Font Sub-Devices Terziari (px)",label_font_size:"Dimensione Font Etichetta (px)",label_spacing_below_node:"Distanza Etichetta Sotto il Nodo (px)",spacing_label_below_node:"Distanza Etichetta dal Cerchio (px)",mode:"Modalità Visiva",anchor:"Nodo di Ancoraggio",weather_entity:"Entità Meteo",show_markers:"Mostra Indicatori Alba/Tramonto",show_marker_icons:"Mostra Icone Indicatori",sunrise_icon:"Icona Alba",sunset_icon:"Icona Tramonto",show_rays:"Mostra Raggi Solari",show_tail:"Mostra Scia Orbitale",show_stars:"Mostra Stelle Notturne",night_node_mode:"Aspetto Nodo Solare di Notte",scope:"Intervallo Temporale di Calcolo",label_style:"Stile Etichetta Percentuale",radius:"Raggio Elemento (px)",show_ring:"Mostra Anello di Progresso",ring_width:"Spessore Anello (px)",show_glow:"Mostra Bagliore Neon",custom_label:"Etichetta Personalizzata",custom_icon:"Icona Personalizzata",entity_solar_energy:"Sensore Energia Solare Prodotta (kWh)",entity_battery_energy_discharge:"Sensore Energia Batteria Scaricata (kWh)",entity_grid_energy_import:"Sensore Energia Rete Prelevata (kWh)",entity_home_energy:"Sensore Energia Totale Consumo Casa (kWh)",entity_self_sufficiency:"Sensore Diretto Autosufficienza (%)",show_labels:"Mostra Etichette Globali",label_chip_enabled:"Attiva Sfondo Stile Chip / Tag",label_chip_opacity:"Opacità Sfondo Chip",label_chip_padding_x:"Padding Orizzontale Chip (px)",label_chip_padding_y:"Padding Verticale Chip (px)",label_border_radius:"Raggio Bordo Arrotondato Chip (px)",label_border_width:"Spessore Bordo Chip (px)",label_color_mode:"Modalità Colore Testo Etichetta",label_color:"Colore Testo Etichetta Personalizzato",line_routing_mode:"Modalità Percorso Linee Dispositivi",bus_lane_spacing:"Spaziatura Corsie Parallele Bus (px)",bus_corner_radius:"Raggio Raccordo Curva Bus 90° (px)",invert_bus_lane_order:"Inverti Ordine Corsie Bus",particles_per_arc:"Particelle per Linea Attiva",particle_size_offset:"Dimensione Extra Particella Luminosa (px)",particle_inner_glow:"Bagliore Bianco Interno Particelle (Inner Glow)",particle_soft_edge:"Bordo Sfumato / Morbido Particelle",inactive_wire_opacity:"Opacità Linee a Flusso Zero",inactive_wire_style:"Stile Linea a Flusso Zero",hover_glow_radius:"Raggio Bagliore all'Hover (px)",show_node_shadows:"Attiva Ombreggiatura sui Cerchi",node_shadow_color:"Colore Ombra Personalizzato",node_shadow_blur:"Sfocatura Ombra Cerchi (px)",node_shadow_spread:"Espansione Ombra Cerchi (px)",node_shadow_opacity:"Opacità Ombra Cerchi",node_shadow_offset_y:"Offset Verticale Ombra (px)",show_home_mix_ring:"Mostra Anello Multi-Colore Quote Casa",home_glow_mode:"Colore Bagliore all'Hover sulla Casa",enabled:"Abilita Effetto",tail_length:"Lunghezza Coda a Cometa",glow_intensity:"Intensità Bagliore Coda",battery_type:"Stile Visivo Batteria",battery_animated:"Animazione Onde Continua",load_animation:"Animazione Icone Carichi",intensity:"Intensità Riflesso Vetro (%)",neon_core:"Anello Concentrico Neon Interno (Neon Core)",ripple_size:"Dimensione Espansione Onda (px)",ripple_color:"Colore Onda d'Urto Personalizzato",meteor_trail_enabled:"Attiva Coda Luminescente a Cometa",meteor_trail_tail_length:"Lunghezza Coda (Normalizzata)",meteor_trail_glow_intensity:"Intensità Bagliore Coda",living_icons_enabled:"Attiva Icone Vive & Livello Batteria",living_icons_battery_type:"Stile Visualizzazione Batteria",living_icons_battery_animated:"Animazione Continua Batteria (Onde)",living_icons_load_animation:"Animazione Icone Carichi Attivi",glassmorphism_enabled:"Attiva Riflesso Vetro Bombato & Neon Ring",glassmorphism_intensity:"Intensità Riflesso Vetro (%)",glassmorphism_neon_core:"Anello Concentrico Interno Neon (Neon Core)",impact_ripples_enabled:"Attiva Onde d'Urto all'Arrivo Particelle",impact_ripples_size:"Dimensione Espansione Onda (px)",impact_ripples_color:"Colore Onda d'Urto Personalizzato",badge_enabled:"Mostra Badge di Stato Notifica",badge_style:"Stile Visivo Badge",badge_position:"Posizione Ancoraggio Badge",badge_size:"Dimensione Badge (px)",badge_color_on:"Colore Stato Acceso (ON)",badge_color_off:"Colore Stato Spento (OFF)",badge_pulse:"Effetto Pulsazione Energetica quando Attivo",badge_quick_toggle:"Tocco Rapido per Accendere/Spegnere",badge_tap_behavior:"Comportamento al Tocco del Badge",secondary_info_entity:"Entità Informazione Secondaria",secondary_info_unit:"Unità di Misura Personalizzata",secondary_info_decimals:"Numero di Decimali",secondary_info_template:"Template Formattazione",unit:"Unità di Misura Personalizzata",glow_color:"Colore Aura Personalizzato",tap_action:"Azione Tocco Singolo (Tap)",hold_action:"Azione Pressione Prolungata (Hold)",double_tap_action:"Azione Doppio Tocco (Double Tap)",tap_more_info_target:"Destinazione Scheda Dettagli (Tap)",hold_more_info_target:"Destinazione Scheda Dettagli (Hold)",double_tap_more_info_target:"Destinazione Scheda Dettagli (Double Tap)",tap_more_info_entity:"Entità Terza Personalizzata (Tap)",hold_more_info_entity:"Entità Terza Personalizzata (Hold)",double_tap_more_info_entity:"Entità Terza Personalizzata (Double Tap)",helper:{label_font_size:"Dimensione del testo dell'etichetta del nodo in pixel (default: 10px).",label_spacing_below_node:"Distanza verticale in pixel tra il cerchio del nodo e l'etichetta/chip (default: 14px).",enabled:"Attiva o disattiva questa funzionalità visiva.",mode:"Seleziona la modalità di rendering per questo elemento.",anchor:"Seleziona a quale nodo principale ancorare la traiettoria dell'orbe celeste.",scope:"Scegli l'intervallo temporale su cui calcolare l'autosufficienza energetica (Oggi o Totale).",label_style:"Formato di visualizzazione del testo informativo sotto la percentuale.",radius:"Raggio del cerchio in pixel.",show_ring:"Mostra l'anello circolare di avanzamento.",ring_width:"Spessore della linea dell'anello in pixel.",show_glow:"Attiva il bagliore luminoso pulsante.",custom_label:"Testo personalizzato da mostrare.",custom_icon:"Icona MDI personalizzata.",tap_action:"Azione da eseguire al tocco del nodo.",hold_action:"Azione da eseguire alla pressione prolungata.",double_tap_action:"Azione da eseguire al doppio tocco.",tap_more_info_target:"Entità di destinazione per la finestra Altre Info.",tap_more_info_entity:"Entità personalizzata da aprire al tocco.",hold_more_info_target:"Entità di destinazione per la finestra Altre Info alla pressione prolungata.",hold_more_info_entity:"Entità personalizzata da aprire alla pressione prolungata.",double_tap_more_info_target:"Entità di destinazione per la finestra Altre Info al doppio tocco.",double_tap_more_info_entity:"Entità personalizzata da aprire al doppio tocco.",node_shadow_offset_y:"Offset verticale dell'ombra in pixel.",title:"Titolo personalizzato visualizzato nella barra superiore della card.",layout_mode:"Scegli il layout: 'Automatico' passa a verticale su schermi stretti, 'Orizzontale' dispone i nodi su una linea, 'Verticale' su due colonne.",stroke_mode:"Determina se lo spessore delle linee varia in base alla potenza (Watt) o alla corrente (Ampere).",speed_mode:"La velocità delle particelle può essere proporzionale ai Watt assoluti o alla percentuale sul flusso totale.",auto_layout_breakpoint:"Larghezza in pixel della card al di sotto della quale viene attivato il layout responsive verticale (default: 520px).",id:"Identificativo interno univoco del carico (alfanumerico, trattino o underscore).",name:"Nome descrittivo visualizzato nell'etichetta del nodo o carico.",icon:"Icona Material Design al centro del cerchio (es. mdi:solar-power, mdi:heat-pump).",entity:"Sensore principale di potenza in Watt (o kW) associato a questo nodo.",entity_import:"Sensore della potenza prelevata dalla rete (Watt positivi).",entity_export:"Sensore della potenza immessa in rete (Watt positivi).",entity_charge:"Sensore della potenza assorbita per caricare la batteria (Watt positivi).",entity_discharge:"Sensore della potenza erogata dalla batteria in scarica (Watt positivi).",state_of_charge:"Sensore della percentuale di carica della batteria (SoC da 0% a 100%).",entity_amperage:"Sensore opzionale di corrente (Ampere) visualizzato sopra l'icona.",color:"Colore del cerchio, delle particelle luminose e delle linee collegate.",color_charge:"Colore della linea e delle particelle durante la carica della batteria.",color_discharge:"Colore della linea e delle particelle durante la scarica della batteria.",use_idle_color:"Applica una colorazione differente quando la batteria è a riposo (0 W).",color_idle:"Colore applicato al nodo batteria quando è in standby a 0 W.",invert:"Inverte la convenzione del segno: trasforma valori positivi in negativi e viceversa.",switch_entity:"Entità switch/luce/relè associata al nodo per il controllo ON/OFF.",include_in_home:"Se disattivato, il consumo di questo dispositivo viene escluso dal totale calcolato della Casa.",display_zero:"Mantiene visibile la linea di collegamento anche quando la potenza è a zero.",display_zero_tolerance:"Soglia in Watt al di sotto della quale il flusso viene considerato nullo.",show_label:"Mostra o nasconde l'etichetta descrittiva posizionata sotto il cerchio del nodo.",node_radius_primary:"Raggio in pixel dei cerchi principali (Solare, Rete, Batteria, Casa; default: 36px).",node_radius_secondary:"Raggio in pixel dei cerchi dei dispositivi aggiuntivi (default: 28px).",node_radius_tertiary:"Raggio standard per tutti i sub-devices di terzo livello (default: 21px).",icon_size_primary:"Dimensione in pixel delle icone all'interno dei nodi primari (default: 18px).",icon_size_secondary:"Dimensione in pixel delle icone nei dispositivi secondari (default: 16px).",icon_size_tertiary:"Dimensione standard per le icone dei sub-devices di terzo livello (default: 13px).",node_border_width:"Spessore del bordo esterno dei cerchi dei nodi in pixel (default: 2.5px).",sub_device_border_width:"Spessore del bordo per i nodi terziari sub-devices in pixel (default: 2.0px).",sub_device_spacing_x:"Distanza orizzontale predefinita tra nodo genitore e sub-devices (default: 75px).",sub_device_spacing_y:"Distanza verticale predefinita tra nodo genitore e sub-devices (default: 32px).",include_in_parent:"Se abilitato, la potenza di questo sub-device fa parte del carico padre (o contribuisce al suo rollup se il padre non ha entità propria).",distance_x:"Offset orizzontale relativo personalizzato dal nodo padre in pixel.",distance_y:"Offset verticale relativo personalizzato dal nodo padre in pixel.",sub_device_radius:"Raggio del cerchio del sub-device in pixel (default: 21px).",sub_device_icon_size:"Dimensione dell'icona del sub-device in pixel (default: 13px).",show_node_shadows:"Applica un'ombra sfumata sotto i cerchi per conferire profondità 3D.",node_shadow_color:"Colore personalizzato per l'ombra dei nodi (lascia vuoto per l'ombra standard).",node_shadow_blur:"Raggio di sfocatura dell'ombra dei nodi in pixel (default: 10px).",node_shadow_spread:"Estensione dell'ombra dei nodi in pixel.",font_size_primary:"Dimensione del testo del valore di potenza nei nodi primari (default: 10px).",font_size_secondary:"Dimensione del testo del valore di potenza nei dispositivi secondari (default: 9px).",font_size_unit:"Dimensione del testo dell'unità di misura W/kW/A (default: 8px).",font_size_extra:"Dimensione del font per le frecce direzionali di carica/scarica e prelievo/immissione (default: 8.5px).",font_size_sub:"Dimensione del font per i consumi non tracciati e le info secondarie (default: 9px).",font_size_label:"Dimensione del font delle etichette dei nodi (default: 10px).",font_size_top_info:"Dimensione del testo superiore SoC % / Corrente A sopra l'icona (default: 8px).",spacing_label_below_node:"Distanza verticale in pixel tra il cerchio del nodo e l'etichetta (default: 14px).",show_labels:"Abilita o disabilita globalmente le etichette di testo per tutti i nodi.",label_chip_enabled:"Disegna un riquadro smussato in stile chip/tag attorno all'etichetta.",label_chip_opacity:"Opacità dello sfondo del chip con il colore del nodo (da 0.05 a 1.0; default: 0.18).",label_chip_padding_x:"Spaziatura orizzontale interna in pixel del chip (default: 8px).",label_chip_padding_y:"Spaziatura verticale interna in pixel del chip (default: 3.5px).",label_border_radius:"Raggio di curvatura degli angoli arrotondati del chip (default: 6px).",label_border_width:"Spessore del bordo esterno del chip in pixel (default: 1px).",label_color_mode:"Contrasto automatico calcola dinamicamente bianco o nero per la massima leggibilità.",label_color:"Colore del testo dell'etichetta quando la modalità colore è su 'Personalizzato'.",inactive_wire_opacity:"Opacità delle linee quando non c'è flusso di potenza (default: 0.35).",inactive_wire_style:"Scegli se mostrare la linea a flusso zero tratteggiata, continua o nasconderla.",hover_glow_radius:"Raggio dell'effetto bagliore luminoso al passaggio del cursore sopra un nodo (default: 10px).",show_home_mix_ring:"Mostra un anello multi-colore attorno alla Casa con quote proporzionali a Solare, Rete e Batteria.",home_glow_mode:"Al passaggio del cursore la Casa si illumina con il colore della fonte primaria o con il colore fisso.",line_routing_mode:"Scegli tra curve di Bezier dirette o canale centrale a bus ortogonale per carichi multipli.",bus_lane_spacing:"Distanza tra le corsie parallele dei carichi nel canale centrale (default: 8px).",bus_corner_radius:"Raggio di curvatura dei raccordi a 90° nel canale centrale (default: 20px).",invert_bus_lane_order:"Inverte l'ordine delle corsie del canale centrale (dalla più interna alla più esterna).",particles_per_arc:"Numero di particelle luminose che viaggiano su ogni linea attiva (default: 3).",particle_size_offset:"Aumento del raggio delle particelle luminose in pixel (default: 1.8px).",particle_inner_glow:"Aggiunge un nucleo bianco brillante ad alta densità al centro di ciascuna particella.",particle_soft_edge:"Applica una sfumatura radiale morbida ai bordi delle particelle per un effetto luce realistico.",spacing_horizontal:"Spaziatura orizzontale in pixel tra le colonne dei nodi (default: 120px).",spacing_vertical:"Spaziatura verticale in pixel tra le righe dei nodi (default: 85px).",spacing_text_above_icon:"Distanza in pixel tra il testo superiore (SoC/Ampere) e l'icona interna (default: 4px).",spacing_text_below_icon:"Distanza in pixel tra l'icona interna e il valore di potenza (default: 4px).",meteor_trail:"Coda luminescente a cometa che segue le particelle in movimento.",tail_length:"Lunghezza della scia a cometa lungo il percorso del cavo (da 0.02 a 0.25).",glow_intensity:"Intensità del bagliore e spessore della scia a cometa.",living_icons:"Icone animate per i carichi e visualizzazione dinamica della batteria (onde liquide o gradiente).",battery_type:"Visualizzazione batteria: 'Gradiente' (bagliore radiale con SoC) o 'Liquido' (onda d'acqua animata).",battery_animated:"Mantiene l'onda liquida della batteria in oscillazione continua.",load_animation:"Animazione applicata alle icone dei carichi attivi (rotazione o pulsazione).",glassmorphism:"Effetto lente in vetro 3D con riflesso bombato e anello concentrico neon luminoso.",intensity:"Percentuale di intensità dei riflessi di luce e della brillantezza del vetro.",neon_core:"Mostra un anello interno concentrico luminescente (Neon Core) all'interno del cerchio.",impact_ripples:"Onda d'urto circolare (ripple) che si espande all'arrivo di ciascuna particella sul nodo.",ripple_size:"Raggio massimo di espansione dell'onda d'urto in pixel (default: 18px).",ripple_color:"Colore dell'onda d'urto (lascia vuoto per usare il colore dell'energia in arrivo).",celestial_tracker:"Tracciamento in tempo reale della posizione del Sole e della Luna su quadrante 24h o arco 180°.",self_sufficiency:"Mostra un nodo circolare centrale all'incrocio dei 4 nodi principali che visualizza la percentuale di autosufficienza energetica cumulata nel tempo con anello proporzionale.",self_sufficiency_scope:"Calcola la percentuale di autosufficienza sui consumi odierni (Oggi) o sul totale storico complessivo (Totale).",self_sufficiency_label_style:"Cosa mostrare sotto il numero percentuale: indicatore dell'ambito (OGGI/TOTALE), testo 'AUTOSUFF.', icona MDI o solo il numero pulito.",self_sufficiency_radius:"Dimensione del raggio del cerchio centrale in pixel (default: 22px).",self_sufficiency_ring_width:"Spessore della traccia circolare dell'anello donut in pixel (default: 3.2px).",self_sufficiency_show_glow:"Attiva un'elegante aura pulsante colorata attorno al nodo (verde se >= 90%, ambra se sotto il 50%).",glow_color:"Colore personalizzato per l'aura luminosa pulsante attorno al nodo centrale (lascia vuoto per calcolo dinamico in base alla percentuale).",entity_solar_energy:"Sensore con l'energia fotovoltaica prodotta o consumata in kWh (es. sensor.solar_energy_today).",entity_battery_energy_discharge:"Sensore con l'energia scaricata dalla batteria verso i carichi in kWh (es. sensor.battery_discharged_today).",entity_grid_energy_import:"Sensore con l'energia prelevata dalla rete elettrica in kWh (es. sensor.grid_energy_imported_today).",entity_home_energy:"Opzionale: sensore del consumo complessivo della casa in kWh.",entity_self_sufficiency:"Opzionale: sensore diretto di percentuale autosufficienza fornito dall'inverter.",weather_entity:"Entità meteo opzionale per modulare colori, raggi e badge dell'orbe celeste (es. weather.home).",show_markers:"Mostra indicatori grafici e orari per Alba e Tramonto sul quadrante.",show_marker_icons:"Mostra le icone MDI a fianco degli orari di Alba e Tramonto.",sunrise_icon:"Icona personalizzata per il sorgere del sole (default: mdi:weather-sunset-up).",sunset_icon:"Icona personalizzata per il tramonto del sole (default: mdi:weather-sunset-down).",show_rays:"Attiva raggi solari rotanti ad accelerazione hardware GPU attorno all'orbe.",show_tail:"Disegna una coda luminosa progressiva lungo l'arco percorso fino all'orario attuale.",show_stars:"Mostra stelline scintillanti animate distribuite lungo l'arco notturno reale.",night_node_mode:"Di notte e con produzione a 0W, trasforma l'icona del nodo solare in luna (🌙) se non personalizzata.",badge_enabled:"Mostra un badge circolare sullo spigolo del nodo per indicare lo stato dell'interruttore (ON/OFF).",badge_style:"Stile visivo del badge: LED circolare (Dot), icona mini-power o testo 'ON'/'OFF'.",badge_position:"Posizione di ancoraggio del badge attorno al bordo del nodo.",badge_size:"Diametro del badge di notifica in pixel (default: 10px).",badge_color_on:"Colore del badge quando il dispositivo è acceso o attivo.",badge_color_off:"Colore del badge quando il dispositivo è spento o inattivo.",badge_pulse:"Attiva una pulsazione luminosa continua sul badge quando il dispositivo è acceso.",badge_quick_toggle:"Permette di toccare direttamente il badge per accendere o spegnere rapidamente il dispositivo.",badge_tap_behavior:"Comportamento quando si tocca direttamente il badge di stato.",secondary_info:"Visualizza un'informazione testuale aggiuntiva sotto il nodo (es. temperatura, energia giornaliera).",unit:"Unità di misura personalizzata da affiancare al valore dell'informazione secondaria.",decimals:"Numero di cifre decimali da visualizzare nei valori di potenza (default: 2).",w_to_kw_threshold:"Soglia in Watt oltre la quale la visualizzazione passa automaticamente a kW (default: 1000 W).",scale_curve:"La curva radice quadrata (sqrt) offre la migliore percezione visiva per piccoli e grandi consumi.",scale_min:"Potenza al di sotto della quale le particelle viaggiano alla velocità minima consentita (default: 50 W).",scale_max:"Potenza alla quale la linea raggiunge lo spessore massimo e la velocità massima (default: 6000 W).",smoothing_factor:"Fattore di smorzamento esponenziale (EMA): valori bassi rendono le transizioni più morbide (default: 0.35).",max_total_particles:"Numero massimo di particelle attive contemporaneamente a schermo per garantire 60 FPS (default: 30).",min_stroke:"Spessore minimo delle linee di flusso in pixel (default: 2.0px).",max_stroke:"Spessore massimo delle linee di flusso a pieno carico in pixel (default: 7.0px).",min_duration:"Durata minima in secondi del viaggio di una particella alla massima potenza (default: 0.8s).",max_duration:"Durata massima in secondi del viaggio di una particella alla minima potenza (default: 5.5s).",normalize_speed_by_length:"Se attivo, calcola la velocità fisica uniforme in pixel al secondo tenendo conto della lunghezza del cavo, evitando che le particelle viaggino più veloci sui percorsi lunghi.",residual_handling:"Metodo di bilanciamento delle discrepanze matematiche fra produzione, accumulo e consumi.",residual_absorb_target:"Nodo su cui convogliare l'energia residua quando la gestione è impostata su 'Assorbimento'."},option:{override:{auto:"Predefinito (Globale)",enabled:"Attivato (Forza)",disabled:"Disattivato (Nascondi)"},self_sufficiency_scope:{today:"Giornaliera (Oggi)",total:"Storica (Totale)"},self_sufficiency_label_style:{scope:"Ambito Temporale (OGGI / TOTALE)",text:"Testo 'AUTOSUFF.'",icon:"Icona MDI Personalizzata",none:"Solo Percentuale (Nessun testo)"},layout_mode:{auto:"Automatico (Adattivo al dispositivo)",horizontal:"Orizzontale (Griglia lineare)",vertical:"Verticale (Compatto a 2 Colonne)"},stroke_mode:{watt:"Dinamico in base alla Potenza (Watt)",fixed:"Spessore Fisso Uniforme",ampere:"Dinamico in base alla Corrente (Ampere)"},speed_mode:{absolute:"Velocità Assoluta (Watt effettivi)",relative:"Velocità Relativa (% sul totale energetico)"},scale_curve:{sqrt:"Radice Quadrata (Sqrt - Consigliata per dinamica visiva)",linear:"Lineare Proporzionale",log:"Logaritmica (Ampio spettro di potenza)"},residual_handling:{clamp:"Clamp (Bilancia a zero sull'arco principale)",absorb:"Assorbimento (Convoglia su target dedicato)",unbalanced:"Sbilanciamento (Visualizza quota residua)"},residual_absorb_target:{grid:"Rete Elettrica (Grid)",battery:"Batteria & Accumulo (Battery)"},badge_style:{dot:"Dot LED Circolare Minimal",icon:"Mini-Icona Power Attiva/Spenta",text:"Micro-Tag Testuale (ON / OFF)"},badge_position:{top_right:"In alto a destra (Top-Right)",top_left:"In alto a sinistra (Top-Left)",bottom_right:"In basso a destra (Bottom-Right)",bottom_left:"In basso a sinistra (Bottom-Left)"},badge_tap_behavior:{auto:"Automatico (Riconosce switch o sensore)",toggle:"Accende / Spegne lo Switch (Toggle)","more-info-switch":"Apre Scheda di Gestione dello Switch","more-info-sensor":"Apre Scheda Storico del Sensore","more-info":"Apre Scheda Dettagli Generale"},more_info_target:{auto:"Automatico (Batteria: SoC su Long Press, altrimenti Switch/Sensore)",soc:"Stato di Carica Batteria (SoC %)",sensor:"Sensore di Potenza Principale (W/kW)",secondary:"Sensore Secondario (Secondary Info)",amperage:"Sensore Corrente (Amperaggio)",switch:"Entità Switch / Controllo",custom:"Entità Terza Personalizzata"},label_color_mode:{auto_contrast:"Contrasto Intelligente Ottimale (Auto B/W)",white:"Bianco Puro (#ffffff)",black:"Nero Scuro (#0f172a)",match_entity:"Abbina al Colore dell'Entità",secondary:"Grigio Secondario Standard",custom:"Colore Personalizzato"},battery_type:{gradient:"Gradiente Radiale Dinamico (Energy Glow)",liquid:"Livello Liquido con Onda Animata (Liquid Wave)"},load_animation:{rotate:"Rotazione Continua (Ventola / Motore)",pulse:"Pulsazione / Respiro Energetico",none:"Nessuna (Icone Statiche)"},line_routing_mode:{bezier_curved:"Archi Curvi Diretti (Bezier)",orthogonal_bus:"Canale Centrale a Bus (Ortogonale Morbido)"},inactive_wire_style:{dashed:"Tratteggiato (Dashed)",solid:"Continuo (Solid)",hidden:"Completamente Nascosto"},home_glow_mode:{predominant:"Dinamico (Colore della fonte primaria attiva)",custom:"Fisso (Colore base della Casa)"},celestial_mode:{dial_24h:"Quadrante 24h a 360° (Giorno & Notte)",semicircle:"Semicerchio 180° (Cupola Superiore)"},celestial_anchor:{home:"Attorno al Nodo Casa",solar:"Attorno al Nodo Solare (Consigliato)"}},error:{invalid_range:"Range non valido: il valore minimo deve essere strettamente inferiore al massimo.",duplicate_id:"L'ID del dispositivo deve essere univoco.",invalid_id:"L'ID deve iniziare con una lettera e contenere solo caratteri alfanumerici, trattini o underscore.",reserved_id:"Questo ID è riservato dal sistema.",missing_entity:"È richiesta almeno un'entità di potenza valida."}},Ft={missing_entity:"È richiesta almeno un'entità di potenza valida.",invalid_range:"Range non valido: il valore minimo deve essere strettamente inferiore al massimo."},Ct={self_sufficiency:{scope_today:"OGGI",scope_total:"TOTALE",default_label:"AUTOSUFF."}},At={card:St,editor:zt,errors:Ft,effects:Ct};const Mt={en:$t||Object.freeze({__proto__:null,card:yt,default:$t,editor:xt,effects:wt,errors:vt}),it:At||Object.freeze({__proto__:null,card:St,default:At,editor:zt,effects:Ct,errors:Ft})};function kt(e,t="en"){const i=t.replace(/['"]+/g,"").replace("-","_").split("_")[0],o=Mt[i]||Mt.en,a=e.split(".");let n=o;for(const t of a){if(!n||"object"!=typeof n||!(t in n)){let t=Mt.en;for(const i of a){if(!t||"object"!=typeof t||!(i in t))return e;t=t[i]}return"string"==typeof t?t:e}n=n[t]}return"string"==typeof n?n:e}function Et(e,t=12){if(!e)return t;try{const i=new Date(e);return isNaN(i.getTime())?t:i.getHours()+i.getMinutes()/60+i.getSeconds()/3600}catch{return t}}function It(e){const t=(e%24+24)%24,i=Math.floor(t),o=Math.round(60*(t-i))%60;return`${i.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`}function Pt(e,t,i){const o=(90+15*i)*(Math.PI/180);return{x:e.x+t*Math.cos(o),y:e.y+t*Math.sin(o)}}function Dt(e,t,i,o,a,n){if(i){let i="url(#glow-sun-sunny)",r="#f59e0b";"partlycloudy"===o?(i="url(#glow-sun-partlycloudy)",r="#fbbf24"):"cloudy"===o?(i="url(#glow-sun-cloudy)",r="#94a3b8"):"rainy"===o?(i="url(#glow-sun-rainy)",r="#38bdf8"):"fog"===o?(i="url(#glow-sun-fog)",r="#cbd5e1"):"lightning"===o&&(i="url(#glow-sun-lightning)",r="#eab308");let s=V``;if(n&&"cloudy"!==o&&"fog"!==o){const e=8,t=8.5,i=13,o=[];for(let a=0;a<e;a++){const n=2*a*Math.PI/e,s=Math.cos(n)*t,l=Math.sin(n)*t,d=Math.cos(n)*i,c=Math.sin(n)*i;o.push(V`
          <line x1="${s.toFixed(1)}" y1="${l.toFixed(1)}"
                x2="${d.toFixed(1)}" y2="${c.toFixed(1)}"
                stroke="${r}" stroke-width="1.6" stroke-linecap="round" />
        `)}s=V`
        <g class="celestial-rays">
          ${o}
        </g>
      `}const l=a?V`<text x="8.5" y="-6.5" font-size="11" text-anchor="start" style="user-select: none;">${a}</text>`:V``;return V`
      <g id="celestialOrbGroup" transform="translate(${e.toFixed(1)}, ${t.toFixed(1)})">
        <!-- Alone solare pulsante CSS -->
        <circle class="celestial-sun-aura" cx="0" cy="0" r="12" fill="${i}" opacity="0.6" filter="url(#celestial-glow)" />
        
        <!-- Raggi rotanti CSS -->
        ${s}

        <!-- Nucleo solare con centro bianco -->
        <circle cx="0" cy="0" r="6.2" fill="${i}" filter="url(#celestial-glow)" />
        <circle cx="0" cy="0" r="3" fill="#ffffff" opacity="0.85" />
        
        ${l}
      </g>
    `}{const i=a?V`<text x="9.5" y="-6.0" font-size="10.5" text-anchor="start" style="user-select: none;">${a}</text>`:V``;return V`
      <g id="celestialOrbGroup" transform="translate(${e.toFixed(1)}, ${t.toFixed(1)})">
        <!-- Alone lunare soffuso -->
        <circle class="celestial-moon-aura" cx="0" cy="0" r="14" fill="url(#glow-moon-halo)" filter="url(#moon-glow-strong)" />

        <!-- Falce di luna con riflesso -->
        <g filter="url(#celestial-glow)">
          <path d="M 0,-6.5 A 6.5 6.5 0 1 0 6.5,0 A 5.2 5.2 0 1 1 0,-6.5 Z" fill="url(#glow-moon)" />
          <circle cx="-1.4" cy="0" r="1.1" fill="#ffffff" opacity="0.9" />
        </g>
        
        ${i}
      </g>
    `}}function Tt(e,t,i,o){const{x:a,y:n}=i,r=e.mode||"dial_24h",{timeOfDay:s,sunrise:l,sunset:d,isDay:c,weatherCondition:p,weatherBadge:_}=t,u=!1!==e.show_rays,h=!1!==e.show_tail,m=!1!==e.show_stars,f=!1!==e.show_markers;if("dial_24h"===r){const t=Pt(i,o,l),a=Pt(i,o,d),n=Pt(i,o,s),r=((d-l)%24+24)%24>12?1:0,g=((l-d)%24+24)%24>12?1:0,b="sunny"===p?"#fbbf24":"#cbd5e1",y=Pt(i,o,12),x=Pt(i,o,0);let v=[];if(m){const e=function(e,t,i,o){const a=((i-o)%24+24)%24,n=[7,-6,8,-6,7],r=[3.2,3.8,2.8,4,3.2];return[.15,.35,.5,.65,.85].map((i,s)=>{const l=Pt(e,t+n[s],(o+i*a)%24);return{x:l.x,y:l.y,cls:`star-${s+1}`,size:r[s]}})}(i,o,l,d);v=e.map(e=>{const t=e.size;return V`
          <polygon class="celestial-star ${e.cls}"
                   points="${e.x.toFixed(1)},${(e.y-t).toFixed(1)} ${(e.x+.4*t).toFixed(1)},${e.y.toFixed(1)} ${e.x.toFixed(1)},${(e.y+t).toFixed(1)} ${(e.x-.4*t).toFixed(1)},${e.y.toFixed(1)}"
                   fill="#e0f2fe" opacity="${c?"0.3":"0.85"}" />
        `})}let w=V``;if(h)if(c){const e=s-l;if(e>.1){const i=e>12?1:0;w=V`
            <path class="celestial-tail"
                  d="M ${t.x.toFixed(1)} ${t.y.toFixed(1)} A ${o} ${o} 0 ${i} 1 ${n.x.toFixed(1)} ${n.y.toFixed(1)}"
                  fill="none"
                  stroke="url(#grad-sun-tail)"
                  stroke-width="3.2"
                  stroke-linecap="round"
                  filter="url(#celestial-glow)" />
          `}}else{const e=s>=d?s-d:s+24-d;if(e>.1){const t=e>12?1:0;w=V`
            <path class="celestial-tail"
                  d="M ${a.x.toFixed(1)} ${a.y.toFixed(1)} A ${o} ${o} 0 ${t} 1 ${n.x.toFixed(1)} ${n.y.toFixed(1)}"
                  fill="none"
                  stroke="url(#grad-moon-tail)"
                  stroke-width="3.0"
                  stroke-linecap="round"
                  filter="url(#celestial-glow)" />
          `}}let $=V``;if(f){const i=!1!==e.show_marker_icons,o=e.sunrise_icon||"mdi:weather-sunset-up",n=e.sunset_icon||"mdi:weather-sunset-down",r=i?V`
        <foreignObject x="${(t.x-22).toFixed(1)}" y="${(t.y-7).toFixed(1)}" width="14" height="14" style="overflow: visible; pointer-events: none;">
          <ha-icon .icon="${o}" style="--mdc-icon-size: 13px; color: #fbbf24; width: 13px; height: 13px; display: flex; align-items: center; justify-content: center;"></ha-icon>
        </foreignObject>
      `:V``,s=i?V`
        <foreignObject x="${(a.x+8).toFixed(1)}" y="${(a.y-7).toFixed(1)}" width="14" height="14" style="overflow: visible; pointer-events: none;">
          <ha-icon .icon="${n}" style="--mdc-icon-size: 13px; color: #f97316; width: 13px; height: 13px; display: flex; align-items: center; justify-content: center;"></ha-icon>
        </foreignObject>
      `:V``,c=i?24:8;$=V`
        <g class="celestial-sun-markers">
          <!-- Sunrise Marker -->
          <circle cx="${t.x.toFixed(1)}" cy="${t.y.toFixed(1)}" r="3" fill="#fbbf24" filter="url(#celestial-glow)" />
          ${r}
          <text x="${(t.x-c).toFixed(1)}" y="${(t.y+3.5).toFixed(1)}" font-size="9" font-weight="600" fill="#fbbf24" text-anchor="end">${It(l)}</text>
          
          <!-- Sunset Marker -->
          <circle cx="${a.x.toFixed(1)}" cy="${a.y.toFixed(1)}" r="3" fill="#f97316" filter="url(#celestial-glow)" />
          ${s}
          <text x="${(a.x+c).toFixed(1)}" y="${(a.y+3.5).toFixed(1)}" font-size="9" font-weight="600" fill="#f97316" text-anchor="start">${It(d)}</text>
        </g>
      `}return V`
      <g class="celestial-layer-group">
        <!-- Fascia Giorno 24h -->
        <path d="M ${t.x.toFixed(1)} ${t.y.toFixed(1)} A ${o} ${o} 0 ${r} 1 ${a.x.toFixed(1)} ${a.y.toFixed(1)}"
              fill="none"
              stroke="${b}"
              stroke-width="2.6"
              stroke-opacity="0.4"
              stroke-linecap="round"
              filter="url(#celestial-glow)" />

        <!-- Fascia Notte 24h -->
        <path d="M ${a.x.toFixed(1)} ${a.y.toFixed(1)} A ${o} ${o} 0 ${g} 1 ${t.x.toFixed(1)} ${t.y.toFixed(1)}"
              fill="none"
              stroke="#38bdf8"
              stroke-width="2.0"
              stroke-opacity="0.25"
              stroke-dasharray="3 3.5" />

        <!-- Tacche Orarie 12:00 e 00:00 -->
        <g class="celestial-ticks" opacity="0.6">
          <circle cx="${y.x.toFixed(1)}" cy="${y.y.toFixed(1)}" r="1.6" fill="#ffffff" />
          <text x="${y.x.toFixed(1)}" y="${(y.y-7).toFixed(1)}" font-size="8" font-weight="600" fill="var(--secondary-text-color, #94a3b8)" text-anchor="middle">12:00</text>
          <circle cx="${x.x.toFixed(1)}" cy="${x.y.toFixed(1)}" r="1.6" fill="#818cf8" />
          <text x="${x.x.toFixed(1)}" y="${(x.y+13).toFixed(1)}" font-size="8" font-weight="600" fill="var(--secondary-text-color, #94a3b8)" text-anchor="middle">00:00</text>
        </g>

        <!-- Marcatori Alba e Tramonto -->
        ${$}

        <!-- Stelle Notturne Scintillanti -->
        ${v}

        <!-- Coda Progressiva -->
        ${w}

        <!-- Orbe Celeste (Sole / Luna) -->
        ${Dt(n.x,n.y,c,p,_,u)}
      </g>
    `}{let e=0;if(c)e=Math.min(1,Math.max(0,(s-l)/(d-l)));else{const t=((l-d)%24+24)%24;e=s>=d?(s-d)/t:(s+(24-d))/t,e=Math.min(1,Math.max(0,e))}const t=Math.PI*(1-e),i=a+o*Math.cos(t),r=n-o*Math.sin(t),m=c?"sunny"===p?"rgba(251, 191, 36, 0.25)":"rgba(148, 163, 184, 0.28)":"rgba(56, 189, 248, 0.25)";let f=V``;if(h&&e>.01){const e=c?"url(#grad-sun-tail)":"url(#grad-moon-tail)";f=V`
        <path class="celestial-tail"
              d="M ${(a-o).toFixed(1)} ${n.toFixed(1)} A ${o} ${o} 0 0 1 ${i.toFixed(1)} ${r.toFixed(1)}"
              fill="none"
              stroke="${e}"
              stroke-width="2.8"
              stroke-linecap="round"
              filter="url(#celestial-glow)" />
      `}return V`
      <g class="celestial-layer-group">
        <circle cx="${(a-o).toFixed(1)}" cy="${n.toFixed(1)}" r="2.5" fill="${m}" />
        <circle cx="${(a+o).toFixed(1)}" cy="${n.toFixed(1)}" r="2.5" fill="${m}" />
        <path d="M ${(a-o).toFixed(1)} ${n.toFixed(1)} A ${o} ${o} 0 0 1 ${(a+o).toFixed(1)} ${n.toFixed(1)}"
              fill="none"
              stroke="${m}"
              stroke-width="1.8"
              stroke-dasharray="3 3.5" />

        ${f}
        ${Dt(i,r,c,p,_,u)}
      </g>
    `}}function Lt(e,t){if(!e||!t)return 0;const i=e.states[t];if(!i||"unavailable"===i.state||"unknown"===i.state)return 0;const o=parseFloat(i.state);return isNaN(o)?0:Math.max(0,o)}function Ot(e,t,i,o=.35){const a=1+o;t>0&&(e.speed=function(e,t,i,o){if(o<=0)return e;const a=Math.max(.01,10*i);return t+(e-t)*Math.exp(-a*o)}(e.speed,e.targetSpeed,i,t),e.progress+=e.speed*t);const n=e.progress%a,r=e.prevNormProgress,s=r<1&&(n>=1||n<r),l=!e.isFadingOut&&s;let d=!1;return e.isFadingOut&&(s||n>=1)&&(d=!0),e.prevNormProgress=n,{cycleProg:n,completedFadeOut:d,arrivalTriggered:l}}function Nt(e,t){if(!t||0===t.length)return e;const i=t.reduce((e,t)=>e+t.speed,0);return i/t.length}function Ut(e,t=.08,i=.08){return e<0||e>1?0:e<t?Math.max(0,Math.min(1,e/t)):e>1-i?Math.max(0,Math.min(1,(1-e)/i)):1}function Rt(e=.35,t=.08,i=.08){const o=1+e,a=1/o*100,n=(1-i)/o*100;return[{offsetDistance:"0%",opacity:0,easing:"ease-in"},{offsetDistance:`${(t/o*100).toFixed(2)}%`,opacity:1,easing:"linear"},{offsetDistance:`${n.toFixed(2)}%`,opacity:1,easing:"ease-out"},{offsetDistance:`${a.toFixed(2)}%`,opacity:0,easing:"linear"},{offsetDistance:"100%",opacity:0}]}function Wt(e,t=.35,i=0,o=1){const a=1e3*(Math.max(.2,e)*(1+t)),n=o>1&&i>0?i/o:0;return{durationMs:a,delayMs:n>0?-n*a:0,travelRatio:1/(1+t)}}let Bt=class extends de{constructor(){super(...arguments),this._watchedEntities=new Set,this._previousDeviceIds=new Set,this._configWarnings=[],this._gestureController=new ut((e,t)=>_t(this,this._hass,e,t)),this._particlesMap=new Map,this._particleDomElements={},this._meteorDomElements={},this._meteorGradElements={},this._pathLUT={},this._lastArcDurations={},this._lastGeometryHash="",this._lastAnimTimestamp=0,this._isCardVisible=!0,this._debugFps=0,this._debugAvgFps=0,this._debugWorstFrameMs=0,this._debugRendersPerSec=0,this._debugRenderCount=0,this._debugLastRenderSec=0,this._debugFrameTimes=[],this._debugEngine="raf",this._waapiAnimations=new Map,this._waapiBaseDurations={},this._waapiLastPaths={},this._cachedCardStylesConfig={...fe},this._cachedCardEffectsConfig={...ye},this._ripplePool=[],this._lastRippleTriggerTime={},this._liquidPhase=0,this._liquidAccumulator=0,this._lastNodePositions={},this._actualLayout="horizontal",this._lastHassUpdateTime=0,this._handleVisibilityChange=()=>{"undefined"!=typeof document&&document.hidden?(this._isCardVisible=!1,this._stopParticleAnimation()):(this._isCardVisible=!0,this._lastAnimTimestamp=0,this._startParticleAnimation())},this._bufferedActiveArcsCount=0,this._lastActiveCountDecreaseTime=0}static async getConfigElement(){return await Promise.resolve().then(function(){return oi}),document.createElement("simple-power-flow-card-editor")}static getStubConfig(e,t){const i=t||(e?.states?Object.keys(e.states):[]),o=t=>i.find(i=>{const o=i.toLowerCase(),a=e?.states?.[i],n="power"===a?.attributes?.device_class||"W"===a?.attributes?.unit_of_measurement||"kW"===a?.attributes?.unit_of_measurement;return t.some(e=>o.includes(e))&&(n||!e)});return{type:"custom:simple-power-flow-card",card_version:2,title:"Power Flow",solar:{entity:o(["solar","pv","fotovoltaico"])||"sensor.solar_power"},grid:{entity:o(["grid","rete","power_meter","import"])||"sensor.grid_power"},battery:{entity:o(["battery_power","accumulo","batteria"])||"sensor.battery_power"},home:{entity:o(["home_power","house_power","consumo_casa"])||"sensor.home_power"}}}static{this.styles=Ie}_purgeArc(e){for(let t=0;t<10;t++){const i=`${e}-${t}`;this._particlesMap.delete(i);const o=this._waapiAnimations.get(i);if(o){try{o.cancel()}catch(e){}this._waapiAnimations.delete(i)}this._particleDomElements[i]&&(this._particleDomElements[i].remove(),delete this._particleDomElements[i]),this._meteorDomElements[i]&&(this._meteorDomElements[i].remove(),delete this._meteorDomElements[i]),this._meteorGradElements[i]&&(this._meteorGradElements[i].remove(),delete this._meteorGradElements[i])}delete this._pathLUT[e],delete this._lastNodePositions[e],delete this._lastRippleTriggerTime[e],delete this._lastArcDurations[e]}setConfig(e){if(!e)throw new Error(kt("errors.missing_entity"));const t=function(e){if(!e||"object"!=typeof e)return e;const t={...e},i=t.card_version;return(!i||"number"!=typeof i||i<2)&&(void 0===t.display_zero_tolerance&&(t.display_zero_tolerance=0),t.card_version=2),t}(e),i=(e,t,i,o)=>{const a=((e,t)=>"number"==typeof e&&Number.isFinite(e)?e:t)(e,o);return Math.max(t,Math.min(i,a))},o=i(t.decimals,0,3,2),a=i(t.w_to_kw_threshold,100,1e4,1e3),n=i(t.scale_min,0,5e3,50),r=i(t.scale_max,500,5e4,6e3),s=i(t.min_duration,.2,5,.8),l=i(t.max_duration,1,20,5.5),d=i(t.min_stroke,.5,10,2),c=i(t.max_stroke,1,20,7),p=i(t.display_zero_tolerance,0,50,1),_=i(t.smoothing_factor,.05,1,.35),u=i(t.max_total_particles,5,100,30),h=i(t.auto_layout_breakpoint,200,1200,520),m=gt(t.styles||{},t),f=new Set(["solar","grid","battery","home"]),g=new Set;this._configWarnings=[];const b=[];Array.isArray(t.devices)&&t.devices.forEach((e,t)=>{const i=ht(e);let o=(i.id||`device_${t+1}`).trim();const a=o;if(f.has(o)&&(o=`${o}_device`,this._configWarnings.push(`Dispositivo #${t+1} usa l'ID riservato '${a}'. È stato rinominato in '${o}'. Correggi lo YAML.`)),g.has(o)){let e=2,t=`${o}_${e}`;for(;g.has(t)||f.has(t);)e++,t=`${o}_${e}`;this._configWarnings.push(`ID dispositivo duplicato '${a}'. È stato rinominato in '${t}'. Correggi lo YAML.`),o=t}g.add(o);const n=[];Array.isArray(e.sub_devices)&&e.sub_devices.forEach((e,t)=>{const i=ht(e);let a=(i.id||`${o}_sub_${t+1}`).trim();const r=a;if(f.has(a)&&(a=`${a}_sub`,this._configWarnings.push(`Sub-device #${t+1} usa l'ID riservato '${r}'. Rinominato in '${a}'.`)),g.has(a)){let e=2,t=`${a}_${e}`;for(;g.has(t)||f.has(t);)e++,t=`${a}_${e}`;this._configWarnings.push(`ID sub-device duplicato '${r}'. Rinominato in '${t}'.`),a=t}g.add(a),n.push({...i,id:a,include_in_parent:!1!==e.include_in_parent,include_in_home:!1!==e.include_in_home,distance_x:e.distance_x,distance_y:e.distance_y,sub_device_radius:e.sub_device_radius,sub_device_icon_size:e.sub_device_icon_size})}),b.push({...i,id:o,sub_devices:n})});const y={...xe,...t,card_version:t.card_version||2,decimals:o,w_to_kw_threshold:a,scale_min:n,scale_max:r,min_duration:s,max_duration:l,min_stroke:d,max_stroke:c,display_zero_tolerance:p,smoothing_factor:_,max_total_particles:u,auto_layout_breakpoint:h,stroke_mode:m.stroke_mode??t.stroke_mode??xe.stroke_mode,speed_mode:m.speed_mode??t.speed_mode??xe.speed_mode,normalize_speed_by_length:m.normalize_speed_by_length??t.normalize_speed_by_length??xe.normalize_speed_by_length,styles:{...fe,...m},devices:b};if(y.solar&&(y.solar=ht(y.solar)),y.grid&&(y.grid=ht(y.grid)),y.battery&&(y.battery=ht(y.battery)),y.home&&(y.home=ht(y.home)),void 0!==y.scale_min&&void 0!==y.scale_max&&y.scale_min>=y.scale_max){const e=y.scale_min;y.scale_min=y.scale_max,y.scale_max=e>y.scale_max?e:y.scale_max+100}if(void 0!==y.min_duration&&void 0!==y.max_duration&&y.min_duration>=y.max_duration){const e=y.min_duration;y.min_duration=y.max_duration,y.max_duration=e>y.max_duration?e:y.max_duration+.5}if(void 0!==y.min_stroke&&void 0!==y.max_stroke&&y.min_stroke>=y.max_stroke){const e=y.min_stroke;y.min_stroke=y.max_stroke,y.max_stroke=e>y.max_stroke?e:y.max_stroke+.5}const x=new Set;b.forEach(e=>{x.add(e.id),Array.isArray(e.sub_devices)&&e.sub_devices.forEach(e=>x.add(e.id))});for(const e of this._previousDeviceIds)x.has(e)||(this._purgeArc(`home-${e}`),this._purgeArc(e));this._previousDeviceIds=x,this._pathLUT={},this._config=y,this._cachedCardStylesConfig={...fe,...this._config.styles||{}},this._cachedCardEffectsConfig={...ye,...this._config.effects||{}},this._watchedEntities.clear();const v=e=>{e&&this._watchedEntities.add(e)};[this._config.solar,this._config.grid,this._config.battery,this._config.home].forEach(e=>{e&&(v(e.entity),v(e.entity_in),v(e.entity_out),v(e.entity_import),v(e.entity_export),v(e.entity_charge),v(e.entity_discharge),v(e.state_of_charge),v(e.entity_amperage),v(e.switch_entity),v(e.secondary_info?.entity))}),Array.isArray(this._config.devices)&&this._config.devices.forEach(e=>{v(e.entity),v(e.entity_amperage),v(e.switch_entity),v(e.secondary_info?.entity),Array.isArray(e.sub_devices)&&e.sub_devices.forEach(e=>{v(e.entity),v(e.entity_amperage),v(e.switch_entity),v(e.secondary_info?.entity)})}),this._checkInitialDimensions(),this.requestUpdate()}set hass(e){const t=this._hass;if(this._hass=e,!t||this._hasWatchedEntityChanged(t,e)){const e=performance.now(),t=e-this._lastHassUpdateTime,i=100;if(t>=i)this._lastHassUpdateTime=e,this._hassThrottleTimer&&(clearTimeout(this._hassThrottleTimer),this._hassThrottleTimer=void 0),this.requestUpdate();else if(!this._hassThrottleTimer){const e=i-t;this._hassThrottleTimer=setTimeout(()=>{this._lastHassUpdateTime=performance.now(),this._hassThrottleTimer=void 0,this.requestUpdate()},e)}}}_hasWatchedEntityChanged(e,t){if(!e?.states||!t?.states)return!0;for(const i of this._watchedEntities)if(e.states[i]!==t.states[i])return!0;return!1}getCardSize(){return 4}getGridOptions(){return{columns:12,rows:"auto",min_columns:6,min_rows:3}}getLayoutOptions(){return{grid_columns:4,grid_rows:3,grid_min_columns:2,grid_min_rows:2}}connectedCallback(){super.connectedCallback(),this._isCardVisible=!0,"undefined"!=typeof document&&document.addEventListener("visibilitychange",this._handleVisibilityChange),this._setupObservers(),this._checkInitialDimensions(),this._startParticleAnimation()}disconnectedCallback(){super.disconnectedCallback(),this._isCardVisible=!1,"undefined"!=typeof document&&document.removeEventListener("visibilitychange",this._handleVisibilityChange),this._hassThrottleTimer&&(clearTimeout(this._hassThrottleTimer),this._hassThrottleTimer=void 0),this._stopParticleAnimation(),this._resetRipplePool(),this._cleanupObservers(),this._gestureController.handlePointerCancel()}updated(e){super.updated(e),this._debugRenderCount++,this._particlesLayerEl=this.shadowRoot?.querySelector("g.particles-layer"),this._ripplesLayerEl=this.shadowRoot?.querySelector("g.ripples-layer"),this._dynamicDefsEl=this.shadowRoot?.querySelector("defs.dynamic-defs"),this._wavePathsEls=this.shadowRoot?.querySelectorAll("path.node-liquid-wave"),this._syncParticles()}_checkInitialDimensions(){const e=this.getBoundingClientRect();e&&e.width>0&&this._updateLayoutFromWidth(e.width)}_resetRipplePool(){this._ripplePool.forEach(e=>{e.anim&&(e.anim.cancel(),e.anim=void 0),e.el.style.display="none",e.inUse=!1})}_updateLayoutFromWidth(e){const t=this._config?.layout_mode||"auto";if("horizontal"===t)return void("horizontal"!==this._actualLayout&&(this._actualLayout="horizontal",this._resetRipplePool(),this.requestUpdate()));if("vertical"===t)return void("vertical"!==this._actualLayout&&(this._actualLayout="vertical",this._resetRipplePool(),this.requestUpdate()));const i=this._config?.auto_layout_breakpoint??520,o=e<=i||"undefined"!=typeof window&&window.innerWidth<=i;o&&"vertical"!==this._actualLayout?(this._actualLayout="vertical",this._resetRipplePool(),this.requestUpdate()):!o&&e>i+20&&"horizontal"!==this._actualLayout&&(this._actualLayout="horizontal",this._resetRipplePool(),this.requestUpdate())}_setupObservers(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(e=>{for(const t of e){const e=t.contentRect.width;e<=0||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>{this._updateLayoutFromWidth(e)},120))}}),this._resizeObserver.observe(this)),this._intersectionObserver||(this._intersectionObserver=new IntersectionObserver(e=>{for(const t of e)this._isCardVisible=t.isIntersecting,t.isIntersecting&&(this._lastAnimTimestamp=0,this._startParticleAnimation())}),this._intersectionObserver.observe(this))}_cleanupObservers(){this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=void 0),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=void 0),this._intersectionObserver&&(this._intersectionObserver.disconnect(),this._intersectionObserver=void 0)}_shouldUseWAAPI(){if("raf"===(this._config?.particle_engine||"auto"))return!1;const e=this._config?.effects||ye;if(e.meteor_trail?.enabled)return!1;const t="undefined"!=typeof CSS&&CSS.supports&&CSS.supports("offset-path",'path("M0 0 L1 1")')&&"function"==typeof Element.prototype.animate;return Boolean(t)}_stopWaapiAnimations(){for(const e of this._waapiAnimations.values())try{e.cancel()}catch(e){}this._waapiAnimations.clear(),this._waapiPollTimer&&(clearInterval(this._waapiPollTimer),this._waapiPollTimer=void 0)}_pollWaapiRipples(){if(!this._isCardVisible||"waapi"!==this._debugEngine)return;const e=this._config?.effects||ye;if(e.impact_ripples?.enabled)for(const[e,t]of this._waapiAnimations.entries()){const i=this._particlesMap.get(e);if(!i||i.isFadingOut)continue;const o=t.effect,a=o?.getComputedTiming();if(!a||null===a.progress||void 0===a.progress)continue;const n=a.progress,r=1/1.35;i.prevNormProgress<r&&n>=r&&this._triggerImpactRipple(i.targetNodeId,i.arcColor),i.prevNormProgress=n}}_startParticleAnimation(){if(!this._isCardVisible)return;const e=this._shouldUseWAAPI();if(this._debugEngine=e?"waapi":"raf",e){this._waapiPollTimer||(this._waapiPollTimer=setInterval(()=>this._pollWaapiRipples(),50));const e=(this._config?.effects||ye).living_icons;return void(e?.enabled&&"liquid"===e.battery_type&&!1!==e.battery_animated?this._animFrameId||(this._lastAnimTimestamp=performance.now(),this._animFrameId=requestAnimationFrame(this._animateParticles.bind(this))):this._animFrameId&&(cancelAnimationFrame(this._animFrameId),this._animFrameId=void 0))}this._stopWaapiAnimations(),this._animFrameId||(this._lastAnimTimestamp=performance.now(),this._animFrameId=requestAnimationFrame(this._animateParticles.bind(this)))}_stopParticleAnimation(){this._animFrameId&&(cancelAnimationFrame(this._animFrameId),this._animFrameId=void 0),this._waapiPollTimer&&(clearInterval(this._waapiPollTimer),this._waapiPollTimer=void 0);for(const e of this._waapiAnimations.values())try{e.pause()}catch(e){}}_isLowPowerDevice(){const e=this._config?.low_power_mode||"auto";if("always"===e)return!0;if("never"===e)return!1;if("undefined"==typeof navigator)return!1;const t=navigator.deviceMemory;if("number"==typeof t&&t<=2)return!0;const i=navigator.hardwareConcurrency;if("number"==typeof i&&i<=4&&"undefined"!=typeof window&&window.matchMedia?.("(pointer: coarse)")?.matches)return!0;if("undefined"!=typeof window){const e=window.matchMedia?.("(pointer: coarse)")?.matches,t=window.innerWidth<=480||window.innerHeight<=480;if(e&&t&&i&&i<=4)return!0}return!1}_syncParticles(){if(!this._config||!this._lastCalculatedFlows)return;const e=this._cachedCardStylesConfig,t=this._lastCalculatedFlows.arcs.filter(e=>e.isActive),i=t.length,o=performance.now();i>=this._bufferedActiveArcsCount||0===this._bufferedActiveArcsCount||i<=this._bufferedActiveArcsCount-2?(this._bufferedActiveArcsCount=i,this._lastActiveCountDecreaseTime=0):0===this._lastActiveCountDecreaseTime?this._lastActiveCountDecreaseTime=o:o-this._lastActiveCountDecreaseTime>2500&&(this._bufferedActiveArcsCount=i,this._lastActiveCountDecreaseTime=0);const a=this._config.effects||ye,n=Boolean(a.meteor_trail?.enabled)?2:1,r=this._isLowPowerDevice();let s=Math.floor((this._config.max_total_particles??30)/n);r&&(s=Math.min(12,s));const l=Math.floor(1.5*s),d=Math.max(1,this._bufferedActiveArcsCount);let c=e.particles_per_arc;d*c>s&&(c=Math.max(1,Math.floor(s/d)));const p=new Set,_=e.normalize_speed_by_length??this._config?.normalize_speed_by_length??!0,u=this._shouldUseWAAPI(),h=this._particlesLayerEl||this.shadowRoot?.querySelector("g.particles-layer");t.forEach(t=>{p.add(t.id),this._lastArcDurations[t.id]=t.duration;let i=t.duration;const o=this._pathLUT[t.id];_&&o&&o.totalLength>0&&(i=Math.max(.3,t.duration*(o.totalLength/200)));const a=1/Math.max(.2,i),n=Math.max(4,.75*t.strokeWidth+(e.particle_size_offset??1.8)),r=.35;this._pathLUT[t.id];for(let e=0;e<c;e++){const s=`${t.id}-${e}`,l=this._particlesMap.get(s);if(l)l.targetSpeed=a,l.radius=n,l.arcColor=t.color,l.targetNodeId=t.to,l.isFadingOut=!1;else{const i=e/c*1.35,r=Nt(a,Array.from(this._particlesMap.values()).filter(e=>e.arcId===t.id&&!e.isFadingOut));this._particlesMap.set(s,{id:s,arcId:t.id,progress:i,prevNormProgress:i%1.35,speed:r,targetSpeed:a,radius:n,totalLength:o?.totalLength??0,arcColor:t.color,targetNodeId:t.to,isFadingOut:!1})}if(u&&h){let o=this._particleDomElements[s];o||(o=document.createElementNS("http://www.w3.org/2000/svg","circle"),o.setAttribute("class","particle-circle"),o.setAttribute("cx","0"),o.setAttribute("cy","0"),o.style.offsetRotate="0deg",h.appendChild(o),this._particleDomElements[s]=o),o.setAttribute("r",n.toFixed(1)),o.setAttribute("fill",t.color);this._pathLUT[t.id];this._waapiLastPaths[t.id];let a=this._waapiAnimations.get(s);const l=Wt(i,r,e,c);if(a){const e=(this._waapiBaseDurations[s]||l.durationMs)/l.durationMs;try{"function"==typeof a.updatePlaybackRate?a.updatePlaybackRate(e):a.playbackRate=e,"paused"===a.playState&&a.play()}catch(e){}}else{o.style.offsetPath=`path("${this._waapiLastPaths[t.id]||""}")`;const e=Rt(r);try{a=o.animate(e,{duration:l.durationMs,delay:l.delayMs,iterations:1/0,fill:"both"}),this._waapiAnimations.set(s,a),this._waapiBaseDurations[s]=l.durationMs}catch(e){}}}}for(let e=c;e<10;e++){const i=`${t.id}-${e}`,o=this._particlesMap.get(i);if(o&&(o.isFadingOut=!0),u){const e=this._waapiAnimations.get(i);if(e){try{e.cancel()}catch(e){}this._waapiAnimations.delete(i)}const t=this._particleDomElements[i];t&&t.parentNode&&t.parentNode.removeChild(t),delete this._particleDomElements[i]}}});for(const[e,t]of this._particlesMap.entries())if(!p.has(t.arcId)&&(t.isFadingOut=!0,u)){const t=this._waapiAnimations.get(e);if(t){try{t.cancel()}catch(e){}this._waapiAnimations.delete(e)}const i=this._particleDomElements[e];i&&i.parentNode&&i.parentNode.removeChild(i),delete this._particleDomElements[e]}if(this._particlesMap.size>l){let e=this._particlesMap.size-l;for(const[t,i]of this._particlesMap.entries()){if(e<=0)break;if(i.isFadingOut){this._particlesMap.delete(t);const i=this._particleDomElements[t];i&&i.parentNode&&i.parentNode.removeChild(i),delete this._particleDomElements[t];const o=this._meteorDomElements[t];o&&o.parentNode&&o.parentNode.removeChild(o),delete this._meteorDomElements[t];const a=this._waapiAnimations.get(t);if(a){try{a.cancel()}catch(e){}this._waapiAnimations.delete(t)}e--}}}this._startParticleAnimation()}_getPathPoint(e,t){const i=this._pathLUT[e];if(!i||!i.points||0===i.points.length)return null;const o=Math.max(0,Math.min(1,t))*(i.points.length-1),a=Math.floor(o);if(a>=i.points.length-1)return{pt:i.points[i.points.length-1],totalLength:i.totalLength};const n=o-a,r=i.points[a],s=i.points[a+1];return{pt:{x:r.x+(s.x-r.x)*n,y:r.y+(s.y-r.y)*n},totalLength:i.totalLength}}_triggerImpactRipple(e,t){const i=performance.now();if(i-(this._lastRippleTriggerTime[e]||0)<180)return;this._lastRippleTriggerTime[e]=i;const o=this._lastNodePositions[e];if(!o)return;const a=this._config?.effects||ye,n=a.impact_ripples?.ripple_size??18,r=a.impact_ripples?.ripple_color||t,s=this._ripplesLayerEl||this.shadowRoot?.querySelector("g.ripples-layer");if(!s)return;let l=this._ripplePool.find(e=>!e.inUse);const d=this._isLowPowerDevice()?4:12;if(!l)if(this._ripplePool.length<d){const e=document.createElementNS("http://www.w3.org/2000/svg","circle");e.setAttribute("class","impact-ripple-group"),e.setAttribute("fill","none"),s.appendChild(e),l={el:e,inUse:!0},this._ripplePool.push(l)}else l=this._ripplePool[0],l.anim&&l.anim.cancel();const c=o.radius,p=o.radius+n;l.inUse=!0;const _=l.el;if(_.setAttribute("cx",o.x.toFixed(1)),_.setAttribute("cy",o.y.toFixed(1)),_.setAttribute("stroke",r),_.setAttribute("stroke-width","3px"),_.setAttribute("r",`${c}px`),_.setAttribute("opacity","0.85"),_.style.display="","function"==typeof _.animate){const e=_.animate([{r:`${c}px`,opacity:.85,strokeWidth:"3px"},{r:`${p}px`,opacity:0,strokeWidth:"0.5px"}],{duration:700,easing:"cubic-bezier(0.1, 0.8, 0.3, 1)",fill:"forwards"});l.anim=e,e.onfinish=()=>{_.style.display="none",l.inUse=!1,l.anim=void 0},e.oncancel=()=>{_.style.display="none",l.inUse=!1,l.anim=void 0}}else{let e=performance.now();const t=700,i=o=>{const a=Math.min(1,(o-e)/t),n=1-Math.pow(1-a,3),r=c+(p-c)*n,s=.85*(1-a);_.setAttribute("r",r.toFixed(1)),_.setAttribute("opacity",s.toFixed(3)),a<1?requestAnimationFrame(i):(_.style.display="none",l.inUse=!1)};requestAnimationFrame(i)}}_updateDebugMetrics(e){if(e<=0)return;const t=performance.now(),i=1e3*e,o=1/e;for(this._debugFps=o,this._debugFrameTimes.push({time:t,duration:i,fps:o});this._debugFrameTimes.length>0&&t-this._debugFrameTimes[0].time>5e3;)this._debugFrameTimes.shift();let a=0,n=0,r=0;for(const e of this._debugFrameTimes)e.duration>a&&(a=e.duration),t-e.time<=2e3&&(n+=e.fps,r++);this._debugWorstFrameMs=a,this._debugAvgFps=r>0?n/r:o;const s=Math.floor(t/1e3);if(s!==this._debugLastRenderSec&&(this._debugRendersPerSec=this._debugRenderCount,this._debugRenderCount=0,this._debugLastRenderSec=s),this.shadowRoot){const e=this.shadowRoot.querySelector(".spf-debug-overlay");if(e){const t=e.querySelector(".debug-engine-val");t&&(t.textContent=this._debugEngine);const i=e.querySelector(".debug-fps-val");i&&(i.textContent=`${this._debugFps.toFixed(0)} / ${this._debugAvgFps.toFixed(0)}`);const o=e.querySelector(".debug-worst-val");o&&(o.textContent=`${this._debugWorstFrameMs.toFixed(1)} ms`);const a=e.querySelector(".debug-part-val");a&&(a.textContent=`${this._particlesMap.size}`);const n=e.querySelector(".debug-render-val");n&&(n.textContent=`${this._debugRendersPerSec}/s`)}}}_animateParticles(e){if(!this._isCardVisible)return void(this._animFrameId=void 0);const t="undefined"!=typeof window&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;this._lastAnimTimestamp||(this._lastAnimTimestamp=e);const i=(e-this._lastAnimTimestamp)/1e3;this._lastAnimTimestamp=e;const o=function(e,t=.25){return!Number.isFinite(e)||e<=0?0:Math.min(e,t)}(i,.25);this._config?.debug_overlay&&this._updateDebugMetrics(i);const a=this._particlesLayerEl||this.shadowRoot?.querySelector("g.particles-layer"),n=this._dynamicDefsEl||this.shadowRoot?.querySelector("defs.dynamic-defs");if(!a)return void(this._animFrameId=requestAnimationFrame(this._animateParticles.bind(this)));const r=this._config?.effects||ye,s=Boolean(r.meteor_trail?.enabled&&!t),l=r.meteor_trail?.tail_length??.08,d=r.meteor_trail?.glow_intensity??1.5,c=this._config?.smoothing_factor??.35,p=[];for(const[e,i]of this._particlesMap.entries()){const _=Ot(i,t?0:o,c,.35);if(_.completedFadeOut){p.push(e);continue}!t&&_.arrivalTriggered&&r.impact_ripples?.enabled&&this._triggerImpactRipple(i.targetNodeId,i.arcColor);const u=_.cycleProg;if(u>1||t){const t=this._particleDomElements[e];t&&0!==i.lastOpacity&&(t.setAttribute("opacity","0"),i.lastOpacity=0);const o=this._meteorDomElements[e];o&&o.setAttribute("d","");continue}const h=this._getPathPoint(i.arcId,u);if(!h)continue;const{pt:m}=h,f=Ut(u,.08,.08);let g=this._particleDomElements[e];if(g||(g=document.createElementNS("http://www.w3.org/2000/svg","circle"),g.setAttribute("class","particle-circle"),a.appendChild(g),this._particleDomElements[e]=g),g.setAttribute("cx",m.x.toFixed(1)),g.setAttribute("cy",m.y.toFixed(1)),i.lastRadius!==i.radius&&(g.setAttribute("r",i.radius.toFixed(1)),i.lastRadius=i.radius),i.lastFill!==i.arcColor&&(g.setAttribute("fill",i.arcColor),i.lastFill=i.arcColor),i.lastOpacity!==f&&(g.setAttribute("opacity",f.toFixed(3)),i.lastOpacity=f),s&&n&&f>.05){let t=this._meteorDomElements[e],o=this._meteorGradElements[e];t||(t=document.createElementNS("http://www.w3.org/2000/svg","path"),t.setAttribute("class","meteor-tail"),t.setAttribute("fill","none"),t.setAttribute("stroke-linecap","round"),a.insertBefore(t,g),this._meteorDomElements[e]=t);const r=`meteor-grad-${e.replace(/[^a-zA-Z0-9-_]/g,"_")}`;if(!o){o=document.createElementNS("http://www.w3.org/2000/svg","linearGradient"),o.setAttribute("id",r),o.setAttribute("gradientUnits","userSpaceOnUse");const a=document.createElementNS("http://www.w3.org/2000/svg","stop");a.setAttribute("offset","0%"),a.setAttribute("stop-color",i.arcColor),a.setAttribute("stop-opacity","0");const s=document.createElementNS("http://www.w3.org/2000/svg","stop");s.setAttribute("offset","60%"),s.setAttribute("stop-color",i.arcColor),s.setAttribute("stop-opacity","0.45");const l=document.createElementNS("http://www.w3.org/2000/svg","stop");l.setAttribute("offset","100%"),l.setAttribute("stop-color",i.arcColor),l.setAttribute("stop-opacity","0.95"),o.appendChild(a),o.appendChild(s),o.appendChild(l),n.appendChild(o),this._meteorGradElements[e]=o,t.setAttribute("stroke",`url(#${r})`)}const s=Math.max(0,u-l),c=this._getPathPoint(i.arcId,s),p=this._getPathPoint(i.arcId,s+.33*(u-s)),_=this._getPathPoint(i.arcId,s+.66*(u-s)),h=m;if(c&&p&&_){const e=c.pt,a=p.pt,n=_.pt,r=`M ${e.x.toFixed(1)} ${e.y.toFixed(1)} C ${a.x.toFixed(1)} ${a.y.toFixed(1)}, ${n.x.toFixed(1)} ${n.y.toFixed(1)}, ${h.x.toFixed(1)} ${h.y.toFixed(1)}`;t.setAttribute("d",r),t.setAttribute("stroke-width",(1.5*i.radius*Math.min(2.5,d)).toFixed(1)),t.setAttribute("opacity",f.toFixed(3));const s=i.lastGradCoords;(!s||Math.abs(s.x1-e.x)>2||Math.abs(s.y1-e.y)>2||Math.abs(s.x2-h.x)>2||Math.abs(s.y2-h.y)>2)&&(o.setAttribute("x1",e.x.toFixed(1)),o.setAttribute("y1",e.y.toFixed(1)),o.setAttribute("x2",h.x.toFixed(1)),o.setAttribute("y2",h.y.toFixed(1)),i.lastGradCoords={x1:e.x,y1:e.y,x2:h.x,y2:h.y})}else t.setAttribute("d","")}else{const t=this._meteorDomElements[e];t&&t.parentNode&&(t.parentNode.removeChild(t),delete this._meteorDomElements[e])}}for(const e of p){this._particlesMap.delete(e);const t=this._particleDomElements[e];t&&t.parentNode&&t.parentNode.removeChild(t),delete this._particleDomElements[e];const i=this._meteorDomElements[e];i&&i.parentNode&&i.parentNode.removeChild(i),delete this._meteorDomElements[e]}const _=r.living_icons;if(_?.enabled&&"liquid"===_.battery_type&&!1!==_.battery_animated){this._liquidPhase=function(e,t,i=120){return t<=0?e:(e+i*t)%360}(this._liquidPhase,o,120);const e=this._wavePathsEls||this.shadowRoot?.querySelectorAll("path.node-liquid-wave");if(e&&e.length>0){const t=this._liquidPhase*Math.PI/180,i=4*Math.sin(t);e.forEach(e=>{parseFloat(e.getAttribute("data-cy")||"0");const t=parseFloat(e.getAttribute("data-r")||"0"),o=parseFloat(e.getAttribute("data-wy")||"0");if(t>0){const a=o+i,n=o-i,r=parseFloat(e.getAttribute("data-x0")||"0"),s=parseFloat(e.getAttribute("data-x3")||"0"),l=`M ${r} ${o} C ${r+.35*(s-r)} ${a}, ${r+.65*(s-r)} ${n}, ${s} ${o} A ${t} ${t} 0 0 1 ${r} ${o} Z`;e.setAttribute("d",l)}})}}this._animFrameId=requestAnimationFrame(this._animateParticles.bind(this))}_handleBadgeClick(e,t){t.stopPropagation(),t.preventDefault(),this._gestureController.handlePointerCancel();const i=e.switchEntityId,o=e.entityId,a=!1!==e.badgeQuickToggle;let n=e.badgeTapBehavior||"auto";if("auto"===n)if(i)if(a){const e=i.split(".")[0];n=["climate","media_player","cover","lock","vacuum","water_heater"].includes(e)?"more-info-switch":"toggle"}else n="more-info-switch";else n="more-info-sensor";if("toggle"===n)i&&a&&_t(this,this._hass,e,"toggle");else if("more-info-switch"===n||"more-info"===n){const e=i||o;if(e){const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}});this.dispatchEvent(t)}}else if("more-info-sensor"===n){const e=o||i;if(e){const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}});this.dispatchEvent(t)}}}_handleNodeKeyDown(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),_t(this,this._hass,t,"tap"))}render(){if(!this._config||!this._hass)return q``;const e=this._hass?.language||"en",t=this._config.decimals??2,i=this._config.w_to_kw_threshold??1e3,o=this._cachedCardStylesConfig,a=this._cachedCardEffectsConfig,n={...ge,...this._config.effects?.celestial_tracker||{}},r=function(e,t){const i=new Date,o=i.getHours()+i.getMinutes()/60+i.getSeconds()/3600;let a=6,n=20,r=o>=a&&o<n;const s=e?.states?.["sun.sun"];s&&(s.attributes?.next_rising&&(a=Et(s.attributes.next_rising,6)),s.attributes?.next_setting&&(n=Et(s.attributes.next_setting,20)),r="above_horizon"===s.state||"below_horizon"!==s.state&&o>=a&&o<n);let l="sunny",d="";if(t&&e?.states?.[t]){const i=(e.states[t].state||"").toLowerCase();["sunny","clear-night","exceptional"].includes(i)?l="sunny":["partlycloudy","windy","windy-variant"].includes(i)?(l="partlycloudy",d="⛅"):["cloudy","overcast"].includes(i)?(l="cloudy",d="☁️"):["rainy","pouring","snowy","snowy-rainy","hail"].includes(i)?(l="rainy",d="🌧️"):["fog"].includes(i)?(l="fog",d="🌫️"):["lightning","lightning-rainy"].includes(i)&&(l="lightning",d="⚡")}return{isDay:r,timeOfDay:o,sunrise:a,sunset:n,weatherCondition:l,weatherBadge:d}}(this._hass,n.weather_entity),s=Le(this._hass,this._config.solar,"solar"),l=Le(this._hass,this._config.grid,"grid"),d=Le(this._hass,this._config.battery,"battery"),c=Le(this._hass,this._config.home,"home"),p=[];Array.isArray(this._config.devices)&&this._config.devices.forEach(e=>{const t=Le(this._hass,e,"device"),i=[];Array.isArray(e.sub_devices)&&e.sub_devices.forEach(e=>{const t=Le(this._hass,e,"device");i.push({...e,power:t.power,ampere:t.amperage,entityId:e.entity,include_in_parent:!1!==e.include_in_parent,include_in_home:!1!==e.include_in_home,hasOwnEntity:t.isConfigured&&t.isValid,hasInvalidUnit:t.hasInvalidUnit,invalidUnitReason:t.invalidUnitReason})}),p.push({...e,power:t.power,ampere:t.amperage,entityId:e.entity,include_in_home:!1!==e.include_in_home,hasOwnEntity:t.isConfigured&&t.isValid,hasInvalidUnit:t.hasInvalidUnit,invalidUnitReason:t.invalidUnitReason,sub_devices:i})});const _=[];s.hasInvalidUnit&&s.invalidUnitReason&&_.push(`Solare: ${s.invalidUnitReason}`),l.hasInvalidUnit&&l.invalidUnitReason&&_.push(`Rete: ${l.invalidUnitReason}`),d.hasInvalidUnit&&d.invalidUnitReason&&_.push(`Batteria: ${d.invalidUnitReason}`),c.hasInvalidUnit&&c.invalidUnitReason&&_.push(`Casa: ${c.invalidUnitReason}`),p.forEach(e=>{e.hasInvalidUnit&&e.invalidUnitReason&&_.push(`${e.name||e.id}: ${e.invalidUnitReason}`),Array.isArray(e.sub_devices)&&e.sub_devices.forEach(e=>{e.hasInvalidUnit&&e.invalidUnitReason&&_.push(`${e.name||e.id}: ${e.invalidUnitReason}`)})});const u=[];this._watchedEntities.forEach(e=>{this._hass?.states&&!(e in this._hass.states)&&u.push(e)});const h=Boolean(this._config.solar?.entity||this._config.solar?.entity_import||this._config.solar?.entity_in||this._config.grid?.entity||this._config.grid?.entity_import||this._config.grid?.entity_in||this._config.battery?.entity||this._config.battery?.entity_charge||this._config.battery?.entity_in||this._config.home?.entity||this._config.devices&&this._config.devices.length>0),m=Ve({solar:s.power,grid:l.power,battery:d.power,home:c.isConfigured&&c.isValid?c.power:void 0,devices:p},this._config);this._lastCalculatedFlows=m;const f=this._actualLayout,g="horizontal"===f?it:ot,b=o.node_radius_primary,y=o.node_radius_secondary,x=o.node_radius_tertiary,v=o.spacing_horizontal,w=o.spacing_vertical,$=n.enabled&&"solar"===n.anchor?"vertical"===f?24:18:0,S=function(e,t,i,o){const a=i.node_radius_primary??36,n=i.node_radius_secondary??28,r=i.node_radius_tertiary??21,s={};Object.keys(o.nodes).forEach(e=>{s[e]={...o.nodes[e],radius:a,isSecondary:!1,isTertiary:!1,isSubDevice:!1}});let l=0,d=0;if(Object.values(s).forEach(e=>{l=Math.max(l,e.x+e.radius),d=Math.max(d,e.y+e.radius)}),"horizontal"===t){const t=o.devicesHorizontal||{startX:410,rowTopY:80,rowBottomY:320,spacingX:120},a=i.spacing_horizontal??t.spacingX,c=i.sub_device_spacing_x??75,p=i.sub_device_spacing_y??32,_=Math.ceil(e.length/2);let u=t.startX;for(let i=0;i<_;i++){const o=e[2*i],_=e[2*i+1];let h=!1,m=0;if(o){s[o.id]={x:u,y:t.rowTopY,radius:n,isSecondary:!0,isTertiary:!1,isSubDevice:!1},l=Math.max(l,u+n),d=Math.max(d,t.rowTopY+n);const e=(o.sub_devices||[]).filter(e=>!1!==e.display_zero||(e.power||0)>0);if(e.length>0){h=!0;const i=e.length;e.forEach((e,a)=>{const n=e.distance_x??c;m=Math.max(m,n);let _=0;_=void 0!==e.distance_y?e.distance_y:1===i?0:2===i?0===a?-p:p:3===i?0===a?1.2*-p:1===a?0:1.2*p:a*(2*p/(i-1))-p;const h=e.sub_device_radius??r,f=u+n,g=t.rowTopY+_;s[e.id]={x:f,y:g,radius:h,isSecondary:!1,isTertiary:!0,isSubDevice:!0,parentId:o.id},l=Math.max(l,f+h),d=Math.max(d,g+h)})}}if(_){s[_.id]={x:u,y:t.rowBottomY,radius:n,isSecondary:!0,isTertiary:!1,isSubDevice:!1},l=Math.max(l,u+n),d=Math.max(d,t.rowBottomY+n);const e=(_.sub_devices||[]).filter(e=>!1!==e.display_zero||(e.power||0)>0);if(e.length>0){h=!0;const i=e.length;e.forEach((e,o)=>{const a=e.distance_x??c;m=Math.max(m,a);let n=0;n=void 0!==e.distance_y?e.distance_y:1===i?0:2===i?0===o?-p:p:3===i?0===o?1.2*-p:1===o?0:1.2*p:o*(2*p/(i-1))-p;const h=e.sub_device_radius??r,f=u+a,g=t.rowBottomY+n;s[e.id]={x:f,y:g,radius:h,isSecondary:!1,isTertiary:!0,isSubDevice:!0,parentId:_.id},l=Math.max(l,f+h),d=Math.max(d,g+h)})}}u+=h?a+m-25:a}return{nodePositions:s,maxX:l,maxY:d,columnsCount:_,rowsCount:Math.min(e.length,2)}}{const t=o.devicesVertical||{startY:420,colLeftX:95,colRightX:345,spacingY:85},a=i.spacing_vertical??t.spacingY,c=i.sub_device_spacing_y??85,p=Math.ceil(e.length/2);let _=t.startY;for(let i=0;i<p;i++){const o=e[2*i],p=e[2*i+1];let u=!1,h=0;if(o){s[o.id]={x:t.colLeftX,y:_,radius:n,isSecondary:!0,isTertiary:!1,isSubDevice:!1},l=Math.max(l,t.colLeftX+n),d=Math.max(d,_+n);const e=(o.sub_devices||[]).filter(e=>!1!==e.display_zero||(e.power||0)>0);if(e.length>0){u=!0;const i=e.length;e.forEach((e,a)=>{const n=e.distance_y??c;h=Math.max(h,n);let p=t.colLeftX;p=void 0!==e.distance_x?t.colLeftX+e.distance_x:1===i?t.colLeftX:2===i?0===a?58:132:3===i?0===a?46:1===a?95:144:55+a*(80/(i-1));const u=e.sub_device_radius??r,m=_+n;s[e.id]={x:p,y:m,radius:u,isSecondary:!1,isTertiary:!0,isSubDevice:!0,parentId:o.id},l=Math.max(l,p+u),d=Math.max(d,m+u)})}}if(p){s[p.id]={x:t.colRightX,y:_,radius:n,isSecondary:!0,isTertiary:!1,isSubDevice:!1},l=Math.max(l,t.colRightX+n),d=Math.max(d,_+n);const e=(p.sub_devices||[]).filter(e=>!1!==e.display_zero||(e.power||0)>0);if(e.length>0){u=!0;const i=e.length;e.forEach((e,o)=>{const a=e.distance_y??c;h=Math.max(h,a);let n=t.colRightX;n=void 0!==e.distance_x?t.colRightX+e.distance_x:1===i?t.colRightX:2===i?0===o?308:382:3===i?0===o?296:1===o?345:394:305+o*(80/(i-1));const u=e.sub_device_radius??r,m=_+a;s[e.id]={x:n,y:m,radius:u,isSecondary:!1,isTertiary:!0,isSubDevice:!0,parentId:p.id},l=Math.max(l,n+u),d=Math.max(d,m+u)})}}_+=u?a+h-5:a}return{nodePositions:s,maxX:l,maxY:d,columnsCount:Math.min(e.length,2),rowsCount:p}}}(p,f,o,g),z=S.nodePositions,F=function(e,t,i,o){const a=-o;if("horizontal"===e){const e=i.maxX+45,n=Math.max(t.height,i.maxY+45)+o;return`0 ${a} ${Math.max(t.width,e)} ${n}`}{const e=Math.max(t.height,i.maxY+50)+o;return`0 ${a} ${t.width} ${e}`}}(f,g.viewBox,S,$,b,y),C=p.map(e=>`${e.id}:[${(e.sub_devices||[]).map(e=>`${e.id}@${e.distance_x??""}x${e.distance_y??""}`).join(",")}]`).join("|"),A=`${F}_${f}_${b}_${y}_${x}_${v}_${w}_${o.sub_device_spacing_x}_${o.sub_device_spacing_y}_${o.line_routing_mode}_${o.bus_lane_spacing}_${o.bus_corner_radius}_${o.invert_bus_lane_order}_${C}`;this._lastGeometryHash!==A&&(this._pathLUT={},this._lastGeometryHash=A),this._lastNodePositions=z;const M=m.arcs.find(e=>"solar-home"===e.id),k=m.arcs.find(e=>"battery-home"===e.id),E=m.arcs.find(e=>"grid-home"===e.id),I=M?.value||0,P=k?.value||0,D=E?.value||0,T=this._config.display_zero_tolerance??1,L=d.power,O=Math.abs(L)<=T,N=Be(this._config.battery?.color_charge||this._config.battery?.color,Se),U=Be(this._config.battery?.color_discharge,ze),R=Be(this._config.battery?.color_idle,"var(--secondary-text-color, #94a3b8)"),W=Boolean(this._config.battery?.use_idle_color);let B;B=O?W?R:N:L>0?N:U;const G=I+P+D,H=[];G>0&&(I>0&&H.push({id:"solar",color:Be(this._config.solar?.color,ve),percentage:I/G,value:I}),P>0&&H.push({id:"battery",color:U,percentage:P/G,value:P}),D>0&&H.push({id:"grid",color:Be(this._config.grid?.color,we),percentage:D/G,value:D}));let j,Y=Be(this._config.home?.color,Fe);if("predominant"===o.home_glow_mode&&H.length>0){const e=[...H].sort((e,t)=>t.value-e.value);e[0]&&e[0].value>0&&(Y=e[0].color)}const K=Be(this._config.grid?.color,we),X=$e;if(l.isDual)j=[{text:`→ ${et(l.inPower||0,t,i,this._hass).full}`,color:K},{text:`← ${et(l.outPower||0,t,i,this._hass).full}`,color:X}];else{const e=l.power;j=[{text:`${e>=0?"→":"←"} ${et(Math.abs(e),t,i,this._hass).full}`,color:e>=0?K:X}]}let Z;if(d.isDual)Z=[{text:`↓ ${et(d.inPower||0,t,i,this._hass).full}`,color:N},{text:`↑ ${et(d.outPower||0,t,i,this._hass).full}`,color:U}];else{const e=O&&W?R:L>=0?N:U;Z=[{text:`${L>=0?"↓":"↑"} ${et(Math.abs(L),t,i,this._hass).full}`,color:e}]}const Q=(e,t,i=!1)=>"enabled"===e||!0===e||"disabled"!==e&&!1!==e&&(void 0!==t?Boolean(t):i),J=(e,i,a=!1)=>{const n=function(e){if(!e||"object"!=typeof e)return e;const t={...e},i=[{actionKey:"tap_action",targetKey:"tap_more_info_target"},{actionKey:"hold_action",targetKey:"hold_more_info_target"},{actionKey:"double_tap_action",targetKey:"double_tap_more_info_target"}];for(const{actionKey:e,targetKey:o}of i){const i=t[e];if(i&&"object"==typeof i){const a=i.action;"more-info-switch"===a||"more-info-device"===a?(t[e]={...i,action:"more-info"},t[o]||(t[o]="switch")):"more-info-sensor"===a&&(t[e]={...i,action:"more-info"},t[o]||(t[o]="sensor"))}}return t}(e||{}),r=Q(n.show_label??n.show_labels,o.show_labels,!0),s=n.label_font_size??n.font_size_label??o.font_size_label??10,l=n.label_spacing_below_node??n.spacing_label_below_node??o.spacing_label_below_node??14,d=Q(n.label_chip_enabled,o.label_chip_enabled,!1),c=n.label_chip_opacity??o.label_chip_opacity??.18,p=n.label_chip_padding_x??o.label_chip_padding_x??8,_=n.label_chip_padding_y??o.label_chip_padding_y??3.5,u=n.label_border_radius??o.label_border_radius??6,h=n.label_border_width??o.label_border_width??1,m=Be(n.label_color||o.label_color,""),f=n.label_color_mode??o.label_color_mode??"auto_contrast";let g=n.switch_entity;if(!g&&i){const e=i.split(".")[0];Pe.includes(e)&&(g=i)}const b=function(e,t){if(!t||"string"!=typeof t||""===t.trim())return{isConfigured:!1,isUnavailable:!1,isUnknown:!1,isActive:!1,state:null,rawState:""};if(!e||!e.states||!e.states[t])return{isConfigured:!0,isUnavailable:!0,isUnknown:!1,isActive:!1,state:"unavailable",rawState:"unavailable",badgeIcon:"mdi:alert-circle-outline",badgeText:"ERR"};const i=e.states[t],o=(i.state||"").trim().toLowerCase(),a=t.split(".")[0]||"",n=i.attributes||{};if("unavailable"===o)return{isConfigured:!0,isUnavailable:!0,isUnknown:!1,isActive:!1,state:"unavailable",rawState:o,badgeIcon:"mdi:alert-circle-outline",badgeText:"ERR"};if("unknown"===o)return{isConfigured:!0,isUnavailable:!1,isUnknown:!0,isActive:!1,state:"unknown",rawState:o,badgeIcon:"mdi:help-circle-outline",badgeText:"?"};switch(a){case"climate":{const e="off"===o,t=(n.hvac_action||"").toLowerCase();let i,a="mdi:thermostat";"heat"===o||"heating"===t?(a="mdi:fire",i="#ff7043"):"cool"===o||"cooling"===t?(a="mdi:snowflake",i="#29b6f6"):"heat_cool"===o||"auto"===o||"auto"===t?(a="mdi:thermostat-auto",i="#66bb6a"):"fan_only"===o||"fan"===t?(a="mdi:fan",i="#ab47bc"):"dry"===o||"drying"===t?(a="mdi:water-percent",i="#26a69a"):e&&(a="mdi:power-off");let r="ON";return e?r="OFF":"heat"===o?r="HEAT":"cool"===o?r="COOL":"auto"===o||"heat_cool"===o?r="AUTO":"dry"===o?r="DRY":"fan_only"===o&&(r="FAN"),{isConfigured:!0,isUnavailable:!1,isUnknown:!1,isActive:!e,state:e?"off":"on",rawState:o,badgeIcon:a,badgeText:r,badgeColor:i}}case"water_heater":{const e="off"===o;return{isConfigured:!0,isUnavailable:!1,isUnknown:!1,isActive:!e,state:e?"off":"on",rawState:o,badgeIcon:e?"mdi:power-off":"mdi:water-boiler",badgeText:e?"OFF":"ON",badgeColor:e?void 0:"#ff7043"}}case"media_player":{const e=["playing","paused","on","buffering"].includes(o);return{isConfigured:!0,isUnavailable:!1,isUnknown:!1,isActive:e,state:e?"on":"off",rawState:o,badgeIcon:"playing"===o?"mdi:play":"paused"===o?"mdi:pause":e?"mdi:cast":"mdi:power-off",badgeText:"playing"===o?"PLAY":"paused"===o?"PAUS":e?"ON":"OFF"}}case"vacuum":{const e=["cleaning","returning","on","auto"].includes(o);return{isConfigured:!0,isUnavailable:!1,isUnknown:!1,isActive:e,state:e?"on":"off",rawState:o,badgeIcon:e?"mdi:robot-vacuum":"mdi:robot-vacuum-off",badgeText:e?"CLEAN":"docked"===o?"DOCK":"returning"===o?"RET":"OFF"}}case"cover":{const e="closed"!==o;return{isConfigured:!0,isUnavailable:!1,isUnknown:!1,isActive:e,state:e?"on":"off",rawState:o,badgeIcon:e?"mdi:window-shutter-open":"mdi:window-shutter",badgeText:"open"===o?"OPEN":"closed"===o?"CLSD":o.toUpperCase().slice(0,4)}}case"lock":{const e="unlocked"===o||"unlocking"===o;return{isConfigured:!0,isUnavailable:!1,isUnknown:!1,isActive:e,state:e?"on":"off",rawState:o,badgeIcon:e?"mdi:lock-open-variant":"mdi:lock",badgeText:e?"UNLK":"LOCK"}}case"fan":{const e="on"===o;return{isConfigured:!0,isUnavailable:!1,isUnknown:!1,isActive:e,state:e?"on":"off",rawState:o,badgeIcon:e?"mdi:fan":"mdi:fan-off",badgeText:e?"ON":"OFF"}}case"light":{const e="on"===o;return{isConfigured:!0,isUnavailable:!1,isUnknown:!1,isActive:e,state:e?"on":"off",rawState:o,badgeIcon:e?"mdi:lightbulb":"mdi:lightbulb-off",badgeText:e?"ON":"OFF"}}default:{const e="on"===o,t="off"===o;return{isConfigured:!0,isUnavailable:!1,isUnknown:!e&&!t,isActive:e,state:e?"on":t?"off":"unknown",rawState:o,badgeIcon:e?"mdi:power":"mdi:power-off",badgeText:e?"ON":t?"OFF":o.toUpperCase().slice(0,4)}}}}(this._hass,g),y=b.state,x=Boolean(g),v=a?Boolean(Q(n.badge_enabled,o.badge_enabled,!1)&&x):void 0!==n.badge_enabled&&"auto"!==n.badge_enabled?Q(n.badge_enabled,o.badge_enabled,!1):Boolean(x),w=n.badge_style??o.badge_style??"dot",$=n.badge_position??o.badge_position??"top_right",S=n.badge_size??o.badge_size??("icon"===w?15:9),z=b.badgeColor||"#4caf50",F=Be(n.badge_color_on||o.badge_color_on,z),C=Be(n.badge_color_off||o.badge_color_off,"#64748b"),A=n.badge_pulse??o.badge_pulse??!0,M=n.badge_quick_toggle??o.badge_quick_toggle??!0;let k,E=n.badge_tap_behavior;if(!E&&g){const e=g.split(".")[0];E=["climate","media_player","cover","lock","vacuum","water_heater"].includes(e)?"more-info":"toggle"}if(n.secondary_info?.entity&&this._hass?.states?.[n.secondary_info.entity]){const e=this._hass.states[n.secondary_info.entity],i=n.secondary_info.decimals??t,o=parseFloat(e.state),a=isNaN(o)?e.state:o.toFixed(i),r=void 0!==n.secondary_info.unit?n.secondary_info.unit:e.attributes?.unit_of_measurement||"";k=`${a}${r?` ${r}`:""}`}const I=n.state_of_charge||(n.secondary_info?.entity&&"battery"===this._hass?.states?.[n.secondary_info.entity]?.attributes?.device_class?n.secondary_info.entity:void 0),P=n.secondary_info?.entity,D=n.entity_amperage;return{showLabel:r,spacingTextAboveIcon:n.spacing_text_above_icon,spacingTextBelowIcon:n.spacing_text_below_icon,labelFontSize:s,labelSpacing:l,labelChipEnabled:d,labelChipOpacity:c,labelChipPaddingX:p,labelChipPaddingY:_,labelBorderRadius:u,labelBorderWidth:h,labelColor:m,labelColorMode:f,switchEntityId:g,switchState:y,socEntityId:I,secondaryEntityId:P,amperageEntityId:D,tapAction:n.tap_action,holdAction:n.hold_action,doubleTapAction:n.double_tap_action,tapMoreInfoTarget:n.tap_more_info_target,holdMoreInfoTarget:n.hold_more_info_target,doubleTapMoreInfoTarget:n.double_tap_more_info_target,tapMoreInfoEntity:n.tap_more_info_entity,holdMoreInfoEntity:n.hold_more_info_entity,doubleTapMoreInfoEntity:n.double_tap_more_info_entity,badgeEnabled:v,badgeStyle:w,badgePosition:$,badgeSize:S,badgeColorOn:F,badgeColorOff:C,badgePulse:A,badgeQuickToggle:M,badgeTapBehavior:E,badgeIcon:b.badgeIcon,badgeText:b.badgeText,secondaryInfoText:k}},ee=et(s.power,t,i,this._hass),te=et(Math.abs(l.power),t,i,this._hass),ie=et(Math.abs(d.power),t,i,this._hass),oe=et(m.homeConsumption,t,i,this._hass),ae=[];m.untrackedDevicesPower>T&&ae.push(`${kt("card.not_tracked",e)}: ${et(m.untrackedDevicesPower,0,i,this._hass).full}`),m.isHomeOverloaded&&ae.push(`⚠️ +${et(m.excessDevicesPower,0,i,this._hass).full}`),"unbalanced"===this._config.residual_handling&&m.unbalancedPower>T&&ae.push(`Residuo: ${et(m.unbalancedPower,0,i,this._hass).full}`);const ne=Boolean(this._config.solar?.icon),re=s.power<=T,se=n.enabled&&n.night_node_mode&&!r.isDay&&re;let le=this._config.solar?.icon||Ce,de=this._config.solar?.name||kt("card.solar",e),ce=Be(this._config.solar?.color,ve);se&&(ne||(le="mdi:weather-night"),de=this._config.solar?.name?`${this._config.solar.name} (Notte)`:`${kt("card.solar",e)} (Notte)`,ce=Be(this._config.solar?.color_idle,"var(--disabled-text-color, #94a3b8)"));const pe=[{id:"solar",label:de,icon:le,color:ce,value:ee.value,rawValue:s.power,unit:ee.unit,amperage:s.amperage,topInfo:void 0!==s.amperage?tt(s.amperage,1,this._hass).full:void 0,isActive:s.power>T,isUnavailable:s.isUnavailable,x:z.solar.x,y:z.solar.y,radius:z.solar.radius,entityId:this._config.solar?.entity,styles:o,effects:a,isSecondary:!1,iconSize:o.icon_size_primary,...J(this._config.solar,this._config.solar?.entity,!0)},{id:"grid",label:this._config.grid?.name||kt("card.grid",e),icon:this._config.grid?.icon||Ae,color:Be(this._config.grid?.color,l.power>=0?we:$e),value:te.value,rawValue:l.power,unit:te.unit,extraValues:j,amperage:l.amperage,topInfo:void 0!==l.amperage?tt(l.amperage,1,this._hass).full:void 0,isActive:Math.abs(l.power)>T,isUnavailable:l.isUnavailable,x:z.grid.x,y:z.grid.y,radius:z.grid.radius,entityId:this._config.grid?.entity||this._config.grid?.entity_import||this._config.grid?.entity_export,styles:o,effects:a,isSecondary:!1,iconSize:o.icon_size_primary,...J(this._config.grid,this._config.grid?.entity||this._config.grid?.entity_import||this._config.grid?.entity_export,!0)},{id:"battery",label:this._config.battery?.name||kt("card.battery",e),icon:this._config.battery?.icon||Me,color:B,value:ie.value,rawValue:d.power,unit:ie.unit,extraValues:Z,topInfo:d.soc||(void 0!==d.amperage?tt(d.amperage,1,this._hass).full:void 0),socPercent:d.socPercent,amperage:d.amperage,isActive:Math.abs(d.power)>T,isUnavailable:d.isUnavailable,x:z.battery.x,y:z.battery.y,radius:z.battery.radius,entityId:this._config.battery?.entity||this._config.battery?.entity_charge||this._config.battery?.entity_discharge,styles:o,effects:a,isSecondary:!1,iconSize:o.icon_size_primary,...J(this._config.battery,this._config.battery?.entity||this._config.battery?.entity_charge||this._config.battery?.entity_discharge,!0)},{id:"home",label:this._config.home?.name||kt("card.home",e),icon:this._config.home?.icon||ke,color:Y,value:oe.value,rawValue:m.homeConsumption,unit:oe.unit,secondaryText:ae.length>0?ae.join(" | "):void 0,isActive:m.homeConsumption>T,isUnavailable:!!c.isConfigured&&c.isUnavailable,x:z.home.x,y:z.home.y,radius:z.home.radius,entityId:this._config.home?.entity,mixSegments:H,styles:o,effects:a,isSecondary:!1,iconSize:o.icon_size_primary,...J(this._config.home,this._config.home?.entity,!0)}];p.forEach(e=>{const n=z[e.id];if(n){const r=m.arcs.find(t=>t.id===`home-${e.id}`)?.value??e.power,s=et(r,t,i,this._hass);pe.push({id:e.id,label:e.name||e.id,icon:e.icon||Ee,color:Be(e.color,"var(--energy-device-color, #00bcd4)"),value:s.value,rawValue:r,unit:s.unit,topInfo:void 0!==e.ampere?tt(e.ampere,1,this._hass).full:void 0,isActive:r>T,isUnavailable:!1,x:n.x,y:n.y,radius:n.radius,entityId:e.entityId,styles:o,effects:a,isSecondary:!0,isTertiary:!1,isSubDevice:!1,iconSize:o.icon_size_secondary,...J(e,e.entityId,!1)})}Array.isArray(e.sub_devices)&&e.sub_devices.forEach(n=>{const r=z[n.id];if(!r)return;const s=Math.max(0,n.power||0);if(!1===n.display_zero&&s<=T)return;const l=et(s,t,i,this._hass),d=Be(e.color,"var(--energy-device-color, #00bcd4)"),c=Be(n.color,d);pe.push({id:n.id,label:n.name||n.id,icon:n.icon||e.icon||Ee,color:c,value:l.value,rawValue:s,unit:l.unit,isActive:s>T,isUnavailable:!1,x:r.x,y:r.y,radius:r.radius,entityId:n.entityId,styles:o,effects:a,isSecondary:!1,isTertiary:!0,isSubDevice:!0,parentId:e.id,iconSize:n.sub_device_icon_size||o.icon_size_tertiary||13,...J(n,n.entityId,!1)})})});const _e={...be,...this._config.effects?.self_sufficiency||{}},ue={solar:ce,battery:Be(this._config.battery?.color_discharge,ze),grid:Be(this._config.grid?.color,we)},he=function(e,t,i,o=[]){if(t.entity_self_sufficiency&&e){const i=e.states[t.entity_self_sufficiency];if(i&&"unavailable"!==i.state&&"unknown"!==i.state){const e=parseFloat(i.state);if(!isNaN(e)){const t=Math.min(100,Math.max(0,Math.round(e)));return{percentage:t,totalEnergy:100,selfEnergy:t,segments:[],isEntityDriven:!0,unit:"%"}}}}let a=0,n=0,r=0,s=!1;if(Boolean(t.entity_solar_energy||t.entity_battery_energy_discharge||t.entity_grid_energy_import)&&e)a=Lt(e,t.entity_solar_energy),n=Lt(e,t.entity_battery_energy_discharge),r=Lt(e,t.entity_grid_energy_import),s=!0;else{const e=o.find(e=>"solar-home"===e.id)?.value||0,t=o.find(e=>"battery-home"===e.id)?.value||0,i=o.find(e=>"grid-home"===e.id)?.value||0;a=e,n=t,r=i}const l=a+n,d=l+r,c=d>0?Math.min(100,Math.max(0,Math.round(l/d*100))):100,p=t.radius??22,_=2*Math.PI*p,u=[{value:a,color:i.solar},{value:n,color:i.battery},{value:r,color:i.grid}],h=d>0?u.filter(e=>e.value>0).map(e=>({value:e.value,color:e.color,segLength:e.value/d*_})):[];return{percentage:c,totalEnergy:d,selfEnergy:l,segments:h,isEntityDriven:s,unit:s?"kWh":"W"}}(this._hass,_e,ue,m.arcs),me=function(e,t){if("vertical"===e)return{x:t.home?.x??t.solar?.x??220,y:t.grid?.y??t.battery?.y??175};return{x:t.solar?.x??t.battery?.x??175,y:t.home?.y??t.grid?.y??200}}(f,z);return q`
      <ha-card>
        ${this._config.title?q`<div class="card-header">${this._config.title}</div>`:""}

        ${h?"":q`
          <ha-alert alert-type="info">
            Configura almeno un'entità per visualizzare i flussi energetici in tempo reale.
          </ha-alert>
        `}

        ${u.length>0?q`
          <ha-alert alert-type="warning">
            Entità non trovate in Home Assistant: ${u.join(", ")}
          </ha-alert>
        `:""}

        ${this._configWarnings.map(e=>q`
          <ha-alert alert-type="warning">${e}</ha-alert>
        `)}

        ${_.map(e=>q`
          <ha-alert alert-type="warning">${e}</ha-alert>
        `)}

        <div class="flow-container">
          <svg class="flow-svg"
               viewBox="${F}"
               role="group"
               aria-label="${this._config.title||"Power Flow Card"}">
            
            ${function(e=[],t){const i=t?.particle_inner_glow??!0,o=t?.particle_soft_edge??!0;return V`
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
      ${e.map(e=>V`
        <radialGradient id="glow-arc-${e.id}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${i?"#ffffff":e.color}" stop-opacity="1" />
          <stop offset="35%" stop-color="${e.color}" stop-opacity="1" />
          <stop offset="70%" stop-color="${e.color}" stop-opacity="${o?"0.7":"1"}" />
          <stop offset="100%" stop-color="${e.color}" stop-opacity="${o?"0":"1"}" />
        </radialGradient>
      `)}
    </defs>
  `}(m.arcs,o)}
            <defs class="dynamic-defs">
              ${n.enabled||_e.enabled?V`
    <!-- Filtro Glow per Arco e Particelle Celesti -->
    <filter id="celestial-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2.8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Filtro Glow Lunare Rinforzato -->
    <filter id="moon-glow-strong" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="4.0" result="blur1" />
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur2" />
      <feMerge>
        <feMergeNode in="blur1" />
        <feMergeNode in="blur2" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Gradienti Sole Meteo-Adattivi -->
    <radialGradient id="glow-sun-sunny" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="35%" stop-color="#fde047" stop-opacity="0.95" />
      <stop offset="70%" stop-color="#f59e0b" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#ea580c" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="glow-sun-partlycloudy" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="40%" stop-color="#fef08a" stop-opacity="0.9" />
      <stop offset="75%" stop-color="#fbbf24" stop-opacity="0.75" />
      <stop offset="100%" stop-color="#94a3b8" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="glow-sun-cloudy" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f8fafc" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#cbd5e1" stop-opacity="0.7" />
      <stop offset="80%" stop-color="#94a3b8" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#64748b" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="glow-sun-rainy" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#e0f2fe" stop-opacity="0.9" />
      <stop offset="45%" stop-color="#38bdf8" stop-opacity="0.75" />
      <stop offset="80%" stop-color="#0284c7" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#0369a1" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="glow-sun-fog" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#e2e8f0" stop-opacity="0.6" />
      <stop offset="85%" stop-color="#94a3b8" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#64748b" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="glow-sun-lightning" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="30%" stop-color="#fef08a" stop-opacity="0.95" />
      <stop offset="65%" stop-color="#eab308" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#7c3aed" stop-opacity="0" />
    </radialGradient>

    <!-- Gradienti Luna & Cielo Notturno -->
    <radialGradient id="glow-moon" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="45%" stop-color="#e0f2fe" stop-opacity="0.95" />
      <stop offset="80%" stop-color="#7dd3fc" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.6" />
    </radialGradient>

    <radialGradient id="glow-moon-halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#bae6fd" stop-opacity="0.7" />
      <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.35" />
      <stop offset="85%" stop-color="#0284c7" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#0369a1" stop-opacity="0" />
    </radialGradient>

    <!-- Gradienti Code Luminose Celesti -->
    <linearGradient id="grad-sun-tail" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.1" />
      <stop offset="60%" stop-color="#f59e0b" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#fef08a" stop-opacity="0.95" />
    </linearGradient>

    <linearGradient id="grad-moon-tail" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.08" />
      <stop offset="60%" stop-color="#7dd3fc" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#e0f2fe" stop-opacity="0.9" />
    </linearGradient>
  `:""}
            </defs>

            <!-- Layer 1: Wires -->
            <g class="wires-layer">
              ${(()=>{const e=m.arcs.filter(e=>e.id.startsWith("home-"));return m.arcs.map(t=>{const i=z[t.from],a=z[t.to];if(!i||!a)return V``;const n=t.id.startsWith("home-")?e.findIndex(e=>e.id===t.id):0,r=Qe(i,a,f,t.id,n,e.length,o,t.isSubDevice);return this._pathLUT[t.id]={totalLength:r.totalLength,points:r.points},this._waapiLastPaths[t.id]=r.d,function(e,t,i){const o=e.isActive?e.color:e.targetColor||e.color,a=e.isActive?1:i?.inactive_wire_opacity??.35,n=!e.isActive&&"solid"!==i?.inactive_wire_style,r=!e.isActive&&"hidden"===i?.inactive_wire_style,s=Math.round(10*e.strokeWidth),l=Math.round(20*e.duration);return rt([e.id,e.isActive,t,o,s,l,a,n,r],()=>r?V``:V`
        <path id="path-${e.id}"
              class="flow-wire ${e.isActive?"":"inactive"} ${n?"inactive-dashed":""}"
              d="${t}"
              stroke="${o}"
              stroke-opacity="${a}"
              stroke-width="${e.strokeWidth}" />
      `)}(t,r.d,o)})})()}
            </g>

            <!-- Layer 2: Impact Shockwave Ripples -->
            <g class="ripples-layer"></g>

            <!-- Layer 3: Particles (Managed via continuous RAF Engine for Zero Glitch & Smooth Flow) -->
            <g class="particles-layer"></g>

            <!-- Layer 4: Nodes -->
            <g class="nodes-layer">
              ${pe.map(e=>function(e,t,i,o,a,n,r,s,l){const d=s||e.styles||{},c=l||e.effects||{},p=[e.secondaryText,e.secondaryInfoText].filter(Boolean).join(" - "),_=`${e.label}: ${e.value} ${e.unit}${p?` (${p})`:""}`,u=2*Math.PI*e.radius;let h=[];const m=!1!==d.show_home_mix_ring;if(m&&e.mixSegments&&e.mixSegments.length>0&&0!==(e.rawValue??0)){let t=0;h=e.mixSegments.map(i=>{const o=i.percentage*u,a=-t;return t+=o,V`
        <circle class="node-mix-segment"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius}"
                fill="none"
                stroke="${i.color}"
                stroke-width="${d.node_border_width??3.5}"
                stroke-dasharray="${o.toFixed(2)} ${u.toFixed(2)}"
                stroke-dashoffset="${a.toFixed(2)}"
                transform="rotate(-90 ${e.x} ${e.y})" />
      `})}const f="solar"===e.id||"grid"===e.id||"battery"===e.id||"home"===e.id,g=Boolean(e.isTertiary||e.isSubDevice),b=!f&&!g,y=Boolean(!g&&e.extraValues&&e.extraValues.length>0),x=Boolean(y&&(e.extraValues?.length||0)>=2),v=Boolean(!g&&e.topInfo),w=e.iconSize||(g?d.icon_size_tertiary??13:b?d.icon_size_secondary??16:d.icon_size_primary??18),$=e.spacingTextAboveIcon??d.spacing_text_above_icon??4,S=e.spacingTextBelowIcon??d.spacing_text_below_icon??4,z=e.x-w/2;let F=e.y-w/2,C=F-$-2,A=F+w+S+7,M=F+w+S+7;const k=d.font_size_extra??d.font_size_directional??8.5;let E=M+k+3;g?(F=e.y-w/2-Math.max(1,S/2),A=F+w+S+5):b?v?(F=e.y-w/2-1,C=F-$-2,A=F+w+S+7):(F=e.y-w-1,A=F+w+S+7):v&&x?(F=e.y-w/2-4,C=F-$-3,M=F+w+S+7,E=M+k+3):v&&!x?(F=e.y-w/2-3,C=F-$-3,A=F+w+S+8,M=A):!v&&x?(F=e.y-w-4,M=F+w+S+7,E=M+k+3):(F=e.y-w-2,A=F+w+S+8);const I=g?d.font_size_tertiary??8:b?d.font_size_secondary??d.font_size_value??9:d.font_size_primary??d.font_size_value??10,P=g?7:d.font_size_unit??8,D=k,T=d.font_size_top_info??8,L=d.font_size_sub??9,O=g?e.labelFontSize??8:e.labelFontSize??d.font_size_label??10,N=g?d.sub_device_border_width??2:d.node_border_width??2.5,U=!1!==d.show_node_shadows,R=d.node_shadow_offset_y??4,W=d.node_shadow_blur??10,B=d.node_shadow_color?Be(d.node_shadow_color,"rgba(0, 0, 0, 0.35)"):`rgba(0, 0, 0, ${d.node_shadow_opacity??.35})`,G=U?`drop-shadow(0 ${R}px ${W}px ${B})`:"none",q=!1!==e.showLabel,H=e.labelSpacing??d.spacing_label_below_node??14,j=void 0!==e.labelChipEnabled?Boolean(e.labelChipEnabled):Boolean(d.label_chip_enabled),Y=e.labelChipOpacity??d.label_chip_opacity??.18,K=e.labelChipPaddingX??d.label_chip_padding_x??8,X=e.labelChipPaddingY??d.label_chip_padding_y??3.5,Z=e.labelBorderRadius??d.label_border_radius??6,Q=e.labelBorderWidth??d.label_border_width??1,J=e.labelColorMode??d.label_color_mode??"auto_contrast",ee=e.y+e.radius+H;let te=!1,ie=e.label.length,oe=V`<tspan x="${e.x}">${e.label}</tspan>`;if(e.label.length>11)if(e.label.includes("/")){const t=e.label.split("/"),i=t[0]+"/",o=t.slice(1).join("/");te=!0,ie=Math.max(i.length,o.length),oe=V`
        <tspan x="${e.x}" dy="0">${i}</tspan>
        <tspan x="${e.x}" dy="${(1.15*O).toFixed(1)}">${o}</tspan>
      `}else if(e.label.includes(" ")){const t=e.label.split(" "),i=Math.ceil(t.length/2),o=t.slice(0,i).join(" "),a=t.slice(i).join(" ");te=!0,ie=Math.max(o.length,a.length),oe=V`
        <tspan x="${e.x}" dy="0">${o}</tspan>
        <tspan x="${e.x}" dy="${(1.15*O).toFixed(1)}">${a}</tspan>
      `}const ae=.72*O,ne=Math.max(28,ie*ae+2*K),re=1.15*O,se=te?1.25*O+re+2*X:1.25*O+2*X,le=e.x-ne/2,de=ee-.95*O-X;let ce;ce="auto_contrast"===J?j?st(e.color,Y):"var(--primary-text-color, #e2e8f0)":"white"===J?"#ffffff":"black"===J?"#0f172a":"match_entity"===J?e.color:"secondary"===J?"var(--secondary-text-color, #94a3b8)":"custom"===J?Be(e.labelColor||d.label_color,"#ffffff"):"var(--primary-text-color, #e2e8f0)";const pe=j?de+se+4:ee+(te?1.25*O+re:1.1*O)+4,_e=`\n    --node-hover-color: ${e.color};\n    --node-hover-glow-radius: ${d.hover_glow_radius??10}px;\n    --node-border-width: ${N}px;\n    --node-shadow-filter: ${G};\n    --font-size-value: ${I}px;\n    --font-size-unit: ${P}px;\n    --font-size-label: ${O}px;\n    --font-size-top-info: ${T}px;\n    --font-size-directional: ${D}px;\n    --font-size-sub: ${L}px;\n  `;let ue="";if(c.living_icons?.enabled&&e.isActive&&("home"===e.id||b||g)){const e=c.living_icons.load_animation||"rotate";"rotate"===e?ue="animate-rotate":"pulse"===e&&(ue="animate-pulse")}const he="battery"===e.id,me=Boolean(he&&c.living_icons?.enabled&&"liquid"===c.living_icons.battery_type),fe=Boolean(he&&c.living_icons?.enabled&&"gradient"===c.living_icons.battery_type),ge=Boolean(c.glassmorphism?.enabled),be=(c.glassmorphism?.intensity??50)/50,ye=Boolean(ge&&!1!==c.glassmorphism?.neon_core);let xe="";if(me){const t=e.socPercent??50,i=e.y+e.radius-t/100*(2*e.radius);xe=`M ${e.x-e.radius} ${i} Q ${e.x-e.radius/2} ${i-3} ${e.x} ${i} T ${e.x+e.radius} ${i} L ${e.x+e.radius} ${e.y+e.radius} L ${e.x-e.radius} ${e.y+e.radius} Z`}let ve=e.x+.707*e.radius,we=e.y-.707*e.radius;"top_left"===e.badgePosition?(ve=e.x-.707*e.radius,we=e.y-.707*e.radius):"bottom_right"===e.badgePosition?(ve=e.x+.707*e.radius,we=e.y+.707*e.radius):"bottom_left"===e.badgePosition&&(ve=e.x-.707*e.radius,we=e.y+.707*e.radius);const $e="on"===e.switchState||null===e.switchState&&e.isActive,Se=$e?e.badgeColorOn||"#4caf50":e.badgeColorOff||"#64748b",ze=g?"icon"===e.badgeStyle?12:7.5:"icon"===e.badgeStyle?15:9,Fe=e.badgeSize?g?Math.min(12,e.badgeSize):e.badgeSize:ze,Ce=Fe/2,Ae=Boolean(e.badgePulse&&$e&&e.isActive),Me=e.badgeIcon||($e?"mdi:power":"mdi:power-off"),ke=e.badgeText||($e?"ON":"OFF"),Ee=ke.length>3?28:ke.length>2?24:20,Ie=Ee/2;return V`
    <g class="node-group ${"off"===e.switchState?"node-is-off":""}"
       tabindex="0"
       role="button"
       style="${_e}"
       aria-label="${_}"
       @pointerdown=${i=>t(i,e)}
       @pointermove=${e=>i(e)}
       @pointerup=${t=>o(t,e)}
       @pointercancel=${()=>a()}
       @pointerleave=${()=>a()}
       @contextmenu=${e=>e.preventDefault()}
       @keydown=${t=>r(t,e)}>

      <defs>
        ${me?V`
          <clipPath id="node-clip-${e.id}">
            <circle cx="${e.x}" cy="${e.y}" r="${e.radius-1}" />
          </clipPath>
        `:""}

        ${fe?V`
          <radialGradient id="battery-glow-${e.id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="${e.color}" stop-opacity="${Math.min(.45,(e.socPercent??50)/100*.45).toFixed(2)}" />
            <stop offset="100%" stop-color="${e.color}" stop-opacity="0" />
          </radialGradient>
        `:""}

        ${ge?V`
          <linearGradient id="glass-glare-${e.id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="${(.28*be).toFixed(2)}" />
            <stop offset="40%" stop-color="#ffffff" stop-opacity="${(.08*be).toFixed(2)}" />
            <stop offset="65%" stop-color="#ffffff" stop-opacity="0" />
            <stop offset="100%" stop-color="#000000" stop-opacity="${(.22*be).toFixed(2)}" />
          </linearGradient>
        `:""}
      </defs>
      
      <!-- Base Background Circle -->
      <circle class="node-circle-bg ${e.isUnavailable?"unavailable":""}"
              cx="${e.x}"
              cy="${e.y}"
              r="${e.radius}"
              stroke="${m&&e.mixSegments&&e.mixSegments.length>0?"transparent":e.color}" />

      <!-- Energy Mix Segments (Home node) -->
      ${h}

      <!-- Battery Liquid Wave -->
      ${me?V`
        <path id="liquid-wave-${e.id}"
              class="node-liquid-wave"
              clip-path="url(#node-clip-${e.id})"
              fill="${e.color}"
              opacity="0.32"
              d="${xe}" />
      `:""}

      <!-- Battery Dynamic Radial Gradient Glow -->
      ${fe?V`
        <circle class="node-battery-glow"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius-2}"
                fill="url(#battery-glow-${e.id})"
                pointer-events="none" />
      `:""}

      <!-- Glassmorphism 3D Glare Filter -->
      ${ge?V`
        <circle class="node-glass-glare"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius-1}"
                fill="url(#glass-glare-${e.id})" />
      `:""}

      <!-- Neon Core Concentric Inner Glowing Ring -->
      ${ye?V`
        <circle class="node-neon-ring"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius-3.5}"
                stroke="${e.color}"
                stroke-width="1.5"
                stroke-opacity="${(.65*be).toFixed(2)}" />
      `:""}

      <!-- Top Info (e.g. SoC 65% or Amperage 1 A) -->
      ${v?V`
        <text class="node-top-info" x="${e.x}" y="${C.toFixed(1)}">
          ${e.topInfo}
        </text>
      `:""}

      <!-- Center Icon with direct pixel dimensions and Living Icon animation class -->
      ${rt([e.id,e.icon,w,e.color,z.toFixed(1),F.toFixed(1),e.isActive,ue],()=>V`
          <foreignObject x="${z.toFixed(1)}" y="${F.toFixed(1)}" width="${w.toFixed(1)}" height="${w.toFixed(1)}" style="overflow: visible;">
            <div class="node-icon-foreign ${ue}" xmlns="http://www.w3.org/1999/xhtml" style="width: ${w.toFixed(1)}px; height: ${w.toFixed(1)}px; display: flex; align-items: center; justify-content: center;">
              <ha-icon icon="${e.icon}" style="--mdc-icon-size: ${w.toFixed(1)}px; width: ${w.toFixed(1)}px; height: ${w.toFixed(1)}px; display: flex; align-items: center; justify-content: center;"></ha-icon>
            </div>
          </foreignObject>
        `)}

      <!-- Values Inside Circle -->
      ${y?V`
        ${e.extraValues.map((t,i)=>{const o=0===i?M:E;return V`
            <text class="node-directional-value" 
                  x="${e.x}" 
                  y="${o.toFixed(1)}" 
                  style="${t.color?`fill: ${t.color};`:""}">
              ${t.text}
            </text>
          `})}
      `:V`
        <text class="node-value" x="${e.x}" y="${A.toFixed(1)}">
          ${e.isUnavailable?"--":V`<tspan>${e.value}</tspan>${e.unit?V` <tspan class="node-unit">${e.unit}</tspan>`:""}`}
        </text>
      `}

      <!-- Outside Label & Optional Chip Background -->
      ${q?V`
        ${j?V`
          <rect class="node-label-chip"
                x="${le.toFixed(1)}"
                y="${de.toFixed(1)}"
                width="${ne.toFixed(1)}"
                height="${se.toFixed(1)}"
                rx="${Z}"
                ry="${Z}"
                fill="${e.color}"
                fill-opacity="${Y.toFixed(2)}"
                stroke="${e.color}"
                stroke-opacity="${Math.min(1,2.2*Y).toFixed(2)}"
                stroke-width="${Q}"
                pointer-events="none" />
        `:""}
        <text class="node-label-outside" 
               x="${e.x}" 
               y="${ee.toFixed(1)}" 
               style="fill: ${ce}; font-size: ${O}px;">
          ${oe}
        </text>
      `:""}

      <!-- Optional Secondary Text -->
      ${e.secondaryText&&!y&&q?V`
        <text class="node-sub-outside" x="${e.x}" y="${pe.toFixed(1)}">
          ${e.secondaryText}
        </text>
      `:""}

      <!-- Dedicated Secondary Info Text -->
      ${e.secondaryInfoText&&q?V`
        <text class="node-sub-outside node-secondary-info" x="${e.x}" y="${(pe+(e.secondaryText&&!y?11:0)).toFixed(1)}">
          ${e.secondaryInfoText}
        </text>
      `:""}

      <!-- Status / Notification Badge -->
      ${e.badgeEnabled?V`
        <g class="node-badge-group ${Ae?"badge-pulsing":""}" 
           @pointerdown=${e=>e.stopPropagation()}
           @pointerup=${e=>e.stopPropagation()}
           @pointermove=${e=>e.stopPropagation()}
           @mousedown=${e=>e.stopPropagation()}
           @mouseup=${e=>e.stopPropagation()}
           @click=${t=>n(e,t)}
           style="cursor: pointer; transform-origin: ${ve.toFixed(1)}px ${we.toFixed(1)}px;">
          <!-- Cutout ring to separate badge cleanly from node border -->
          <circle cx="${ve.toFixed(1)}" 
                  cy="${we.toFixed(1)}" 
                  r="${(Ce+1.8).toFixed(1)}" 
                  fill="var(--ha-card-background, var(--card-background-color, #1c1c1e))" />
          
          ${"icon"===e.badgeStyle?V`
            <circle cx="${ve.toFixed(1)}" 
                    cy="${we.toFixed(1)}" 
                    r="${Ce.toFixed(1)}" 
                    fill="${Se}" />
            ${rt([e.id,Me,Fe.toFixed(1),ve.toFixed(1),we.toFixed(1),Se],()=>V`
                <foreignObject x="${(ve-Ce).toFixed(1)}" 
                               y="${(we-Ce).toFixed(1)}" 
                               width="${Fe.toFixed(1)}" 
                               height="${Fe.toFixed(1)}" 
                               style="overflow: visible; pointer-events: none;">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="width: ${Fe}px; height: ${Fe}px; display: flex; align-items: center; justify-content: center;">
                    <ha-icon icon="${Me}" style="--mdc-icon-size: ${(.75*Fe).toFixed(1)}px; color: #ffffff; width: ${Fe}px; height: ${Fe}px; display: flex; align-items: center; justify-content: center;"></ha-icon>
                  </div>
                </foreignObject>
              `)}
          `:"text"===e.badgeStyle?V`
            <rect x="${(ve-Ie).toFixed(1)}" 
                  y="${(we-6.5).toFixed(1)}" 
                  width="${Ee}" 
                  height="13" 
                  rx="6.5" 
                  ry="6.5" 
                  fill="${Se}" />
            <text x="${ve.toFixed(1)}" 
                  y="${(we+3.5).toFixed(1)}" 
                  style="font-size: 7.5px; font-weight: 800; fill: #ffffff; text-anchor: middle; pointer-events: none;">
              ${ke}
            </text>
          `:V`
            <circle class="node-badge-dot" 
                    cx="${ve.toFixed(1)}" 
                    cy="${we.toFixed(1)}" 
                    r="${Ce.toFixed(1)}" 
                    fill="${Se}" />
          `}
        </g>
      `:""}
    </g>
  `}(e,(e,t)=>this._gestureController.handlePointerDown(e,t),e=>this._gestureController.handlePointerMove(e),(e,t)=>this._gestureController.handlePointerUp(e,t),()=>this._gestureController.handlePointerCancel(),(e,t)=>this._handleBadgeClick(e,t),(e,t)=>this._handleNodeKeyDown(e,t),o,a))}
            </g>

            <!-- Layer 5: Celestial Tracker (Sun/Moon Dial & Orb on TOP of wires & particles) -->
            ${(()=>{if(!n.enabled)return V``;const e=n.anchor||"home",t=z[e];if(!t)return V``;const i=function(e,t,i,o){const a=o.node_border_width||2.5,n=Math.min(o.hover_glow_radius||10,14),r=e.radius+a+n+8,s=e.radius+a+6;let l=r;for(const o of Object.keys(t)){if(o===i)continue;const a=t[o],n=a.x-e.x,r=a.y-e.y,d=Math.sqrt(n*n+r*r)-a.radius-12;if(d<s)return null;d<l&&(l=d)}return l}(t,z,e,o);return null===i?V``:V`
                <g class="celestial-layer">
                  ${Tt(n,r,t,i)}
                </g>
              `})()}

            <!-- Layer 6: Self-Sufficiency Hub (on TOP of wires & particles at the central intersection) -->
            ${_e.enabled?V`
              <g class="self-sufficiency-layer">
                ${function({config:e,data:t,center:i,lang:o}){if(!e.enabled)return V``;const a=e.radius??22,n=e.ring_width??3.2,r=2*Math.PI*a,s=e.show_glow??!0,l=e.show_ring??!0,d=e.label_style??"scope";let c=V``;s&&(c=e.glow_color?V`
        <circle class="hub-custom-aura" cx="${i.x}" cy="${i.y}" r="${a+6}" fill="${e.glow_color}" opacity="0.35" filter="url(#celestial-glow)" />
      `:t.percentage>=90?V`
        <circle class="hub-green-aura" cx="${i.x}" cy="${i.y}" r="${a+6}" fill="rgba(34, 197, 94, 0.35)" filter="url(#celestial-glow)" />
      `:t.percentage>=50?V`
        <circle class="hub-gold-aura" cx="${i.x}" cy="${i.y}" r="${a+5}" fill="rgba(251, 191, 36, 0.28)" filter="url(#celestial-glow)" />
      `:V`
        <circle class="hub-amber-aura" cx="${i.x}" cy="${i.y}" r="${a+4}" fill="rgba(244, 67, 54, 0.22)" filter="url(#celestial-glow)" />
      `);let p=V``;if(l&&t.segments.length>0&&t.totalEnergy>0){let e=0;p=V`
      ${t.segments.map(t=>{const o=V`
          <circle cx="${i.x}" cy="${i.y}" r="${a}"
                  fill="none"
                  stroke="${t.color}"
                  stroke-width="${n}"
                  stroke-dasharray="${t.segLength.toFixed(1)} ${r.toFixed(1)}"
                  stroke-dashoffset="${(-e).toFixed(1)}"
                  transform="rotate(-90 ${i.x} ${i.y})" />
        `;return e+=t.segLength,o})}
    `}else l&&(p=V`
      <circle cx="${i.x}" cy="${i.y}" r="${a}"
              fill="none"
              stroke="rgba(255, 255, 255, 0.18)"
              stroke-width="1.8"
              stroke-dasharray="2.5 3" />
    `);let _=V``;if("scope"===d){const t="total"===e.scope?kt("effects.self_sufficiency.scope_total",o)||"TOTALE":kt("effects.self_sufficiency.scope_today",o)||"OGGI";_=V`
      <text class="hub-label" x="${i.x}" y="${i.y+a+11}">${t}</text>
    `}else if("text"===d){const t=e.custom_label||kt("effects.self_sufficiency.default_label",o)||"AUTOSUFF.";_=V`
      <text class="hub-label" x="${i.x}" y="${i.y+a+11}">${t}</text>
    `}else if("icon"===d){const t=e.custom_icon||"mdi:leaf";_=V`
      <foreignObject x="${i.x-7}" y="${i.y+a+2}" width="14" height="14" style="overflow: visible; pointer-events: none;">
        <ha-icon .icon="${t}" style="--mdc-icon-size: 14px; width: 14px; height: 14px; color: var(--primary-text-color, #ffffff); display: flex; align-items: center; justify-content: center;"></ha-icon>
      </foreignObject>
    `}const u=a>=26?12:a>=20?10.5:9,h=`Autosufficienza Energetica (${"total"===e.scope?"Totale":"Oggi"}): ${t.percentage}% (${t.selfEnergy.toFixed(1)} / ${t.totalEnergy.toFixed(1)} ${t.unit})`;return V`
    <g class="self-sufficiency-hub-group hub-group" role="group" aria-label="${h}">
      <title>${h}</title>
      ${c}
      <circle class="hub-circle-bg"
              cx="${i.x}"
              cy="${i.y}"
              r="${a}"
              stroke="rgba(255, 255, 255, 0.12)"
              stroke-width="1.5" />
      ${p}
      <text class="hub-value" x="${i.x}" y="${i.y+.5}" font-size="${u}">${t.percentage}%</text>
      ${_}
    </g>
  `}({config:_e,data:he,center:me,lang:e})}
              </g>
            `:V``}
          </svg>
        </div>

        ${this._config?.debug_overlay?q`
          <div class="spf-debug-overlay">
            <div class="debug-title">SPF Diagnostic</div>
            <div class="debug-row"><span>Engine:</span><span class="debug-val debug-engine-val">${this._debugEngine}</span></div>
            <div class="debug-row"><span>FPS (inst/avg):</span><span class="debug-val debug-fps-val">${this._debugFps.toFixed(0)} / ${this._debugAvgFps.toFixed(0)}</span></div>
            <div class="debug-row"><span>Worst (5s):</span><span class="debug-val debug-worst-val">${this._debugWorstFrameMs.toFixed(1)} ms</span></div>
            <div class="debug-row"><span>Live Particles:</span><span class="debug-val debug-part-val">${this._particlesMap.size}</span></div>
            <div class="debug-row"><span>Lit Renders:</span><span class="debug-val debug-render-val">${this._debugRendersPerSec}/s</span></div>
          </div>
        `:""}
      </ha-card>
    `}};function Gt(e){if(null!=e&&""!==e){if(Array.isArray(e))return e.map(e=>Gt(e)).filter(e=>null!=e);if("object"==typeof e){const t={};for(const[i,o]of Object.entries(e))if(null!=o&&""!==o)if("object"==typeof o){const e=Gt(o);void 0!==e&&(t[i]=e)}else t[i]=o;return t}return e}}function qt(e){if(!e||"object"!=typeof e)return e;const t={...Gt(e)||{}};t.styles&&"object"==typeof t.styles&&(t.styles=gt(t.styles));const i=e=>{if(!e||"object"!=typeof e)return e;const t={...ht(e)};return"auto"===t.show_label&&delete t.show_label,"auto"===t.label_chip_enabled&&delete t.label_chip_enabled,"auto"===t.badge_enabled&&delete t.badge_enabled,Array.isArray(t.sub_devices)&&(t.sub_devices=t.sub_devices.map(e=>i(e))),t};if(t.solar&&(t.solar=i(t.solar)),t.grid&&(t.grid=i(t.grid)),t.battery&&(t.battery=i(t.battery)),t.home&&(t.home=i(t.home)),Array.isArray(t.devices)&&(t.devices=t.devices.map(e=>i(e))),t.styles&&"object"==typeof t.styles){const e={};let i=!1;for(const[o,a]of Object.entries(t.styles)){a!==fe[o]&&(e[o]=a,i=!0)}i?t.styles=e:delete t.styles}if(t.effects&&"object"==typeof t.effects){const e={};let i=!1;for(const[o,a]of Object.entries(t.effects))if(a&&"object"==typeof a){const t=ye[o]||{},n={};let r=!1;for(const[e,i]of Object.entries(a)){i!==t[e]&&(n[e]=i,r=!0)}r&&(e[o]=n,i=!0)}i?t.effects=e:delete t.effects}const o=new Set(["type","card_version","solar","grid","battery","home","devices","styles","effects"]);for(const[e,i]of Object.entries(t))if(!o.has(e)){const o=xe[e];void 0!==o&&i===o&&delete t[e]}return t}function Vt(e,t="en"){if(e.label)return e.label;const i=e.name;if(!i)return"";const o=`editor.${i}`,a=kt(o,t);if(a!==o)return a;const n=`editor.section.${i}`,r=kt(n,t);return r!==n?r:i}function Ht(e,t="en"){if(e.helper)return e.helper;const i=e.name;if(!i)return;const o=`editor.helper.${i}`,a=kt(o,t);return a!==o?a:void 0}function jt(e="en"){return[{name:"title",selector:{text:{}}},{name:"layout_mode",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.layout_mode.auto",e)},{value:"horizontal",label:kt("editor.option.layout_mode.horizontal",e)},{value:"vertical",label:kt("editor.option.layout_mode.vertical",e)}]}}},{name:"auto_layout_breakpoint",selector:{number:{min:200,max:1200,step:10,unit_of_measurement:"px",mode:"slider"}}}]}function Yt(e,t="en",i){const o=[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entity",selector:{entity:{domain:"sensor",device_class:"power"}}}];return"solar"===e?o.push({name:"color",selector:{ui_color:{default_color:"#ff9800"}}},{name:"invert",selector:{boolean:{}}}):"grid"===e?o.push({name:"entity_import",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"entity_export",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"color",selector:{ui_color:{default_color:"#f44336"}}},{name:"invert",selector:{boolean:{}}}):"battery"===e?(o.push({name:"entity_charge",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"entity_discharge",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"state_of_charge",selector:{entity:{domain:"sensor",device_class:"battery"}}},{name:"color_charge",selector:{ui_color:{default_color:"#4caf50"}}},{name:"color_discharge",selector:{ui_color:{default_color:"#9c27b0"}}},{name:"use_idle_color",selector:{boolean:{}}}),i?.use_idle_color&&o.push({name:"color_idle",selector:{ui_color:{default_color:"#94a3b8"}}}),o.push({name:"invert",selector:{boolean:{}}})):"home"===e&&o.push({name:"color",selector:{ui_color:{default_color:"#03a9f4"}}},{name:"invert",selector:{boolean:{}}}),o.push({name:"switch_entity",selector:{entity:{domain:["switch","light","fan","input_boolean","climate","water_heater","media_player","cover","lock","vacuum","humidifier"]}}},{name:"display_zero",selector:{boolean:{}}},{name:"display_zero_tolerance",selector:{number:{min:0,max:500,step:1,unit_of_measurement:"W"}}},{name:"show_label",selector:{boolean:{}}}),o.push({name:"badge",type:"expandable",title:kt("editor.section.badge",t),schema:[{name:"badge_enabled",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.override.auto",t)},{value:"enabled",label:kt("editor.option.override.enabled",t)},{value:"disabled",label:kt("editor.option.override.disabled",t)}]}}},{name:"badge_style",selector:{select:{mode:"dropdown",options:[{value:"dot",label:kt("editor.option.badge_style.dot",t)},{value:"icon",label:kt("editor.option.badge_style.icon",t)},{value:"text",label:kt("editor.option.badge_style.text",t)}]}}},{name:"badge_position",selector:{select:{mode:"dropdown",options:[{value:"top_right",label:kt("editor.option.badge_position.top_right",t)},{value:"top_left",label:kt("editor.option.badge_position.top_left",t)},{value:"bottom_right",label:kt("editor.option.badge_position.bottom_right",t)},{value:"bottom_left",label:kt("editor.option.badge_position.bottom_left",t)}]}}},{name:"badge_size",selector:{number:{min:6,max:24,step:1,unit_of_measurement:"px"}}},{name:"badge_color_on",selector:{ui_color:{}}},{name:"badge_color_off",selector:{ui_color:{}}},{name:"badge_pulse",selector:{boolean:{}}},{name:"badge_quick_toggle",selector:{boolean:{}}},{name:"badge_tap_behavior",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.badge_tap_behavior.auto",t)},{value:"toggle",label:kt("editor.option.badge_tap_behavior.toggle",t)},{value:"more-info-switch",label:kt("editor.option.badge_tap_behavior.more_info_switch",t)},{value:"more-info-sensor",label:kt("editor.option.badge_tap_behavior.more_info_sensor",t)},{value:"more-info",label:kt("editor.option.badge_tap_behavior.more_info",t)}]}}}]}),o.push({name:"secondary_info",type:"expandable",title:kt("editor.section.secondary_info",t),schema:[{name:"entity",selector:{entity:{}}},{name:"decimals",selector:{number:{min:0,max:3,step:1}}},{name:"unit",selector:{text:{}}}]}),o.push({name:"label_chip",type:"expandable",title:kt("editor.section.label_chip",t),schema:[{name:"show_label",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.override.auto",t)},{value:"enabled",label:kt("editor.option.override.enabled",t)},{value:"disabled",label:kt("editor.option.override.disabled",t)}]}}},{name:"spacing_text_above_icon",selector:{number:{min:0,max:30,step:1,unit_of_measurement:"px"}}},{name:"spacing_text_below_icon",selector:{number:{min:0,max:30,step:1,unit_of_measurement:"px"}}},{name:"label_font_size",selector:{number:{min:6,max:20,step:.5,unit_of_measurement:"px"}}},{name:"label_spacing_below_node",selector:{number:{min:0,max:30,step:1,unit_of_measurement:"px"}}},{name:"label_chip_enabled",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.override.auto",t)},{value:"enabled",label:kt("editor.option.override.enabled",t)},{value:"disabled",label:kt("editor.option.override.disabled",t)}]}}},{name:"label_chip_opacity",selector:{number:{min:0,max:1,step:.05}}},{name:"label_chip_padding_x",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}},{name:"label_chip_padding_y",selector:{number:{min:0,max:15,step:.5,unit_of_measurement:"px"}}},{name:"label_border_radius",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}},{name:"label_border_width",selector:{number:{min:0,max:4,step:.5,unit_of_measurement:"px"}}},{name:"label_color_mode",selector:{select:{mode:"dropdown",options:[{value:"auto_contrast",label:kt("editor.option.label_color_mode.auto_contrast",t)},{value:"white",label:kt("editor.option.label_color_mode.white",t)},{value:"black",label:kt("editor.option.label_color_mode.black",t)},{value:"match_entity",label:kt("editor.option.label_color_mode.match_entity",t)},{value:"secondary",label:kt("editor.option.label_color_mode.secondary",t)},{value:"custom",label:kt("editor.option.label_color_mode.custom",t)}]}}},{name:"label_color",selector:{ui_color:{}}}]}),o.push({name:"actions",type:"expandable",title:kt("editor.section.actions",t),schema:[{name:"tap_action",selector:{ui_action:{}}},{name:"tap_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.more_info_target.auto",t)},{value:"soc",label:kt("editor.option.more_info_target.soc",t)},{value:"sensor",label:kt("editor.option.more_info_target.sensor",t)},{value:"secondary",label:kt("editor.option.more_info_target.secondary",t)},{value:"amperage",label:kt("editor.option.more_info_target.amperage",t)},{value:"switch",label:kt("editor.option.more_info_target.switch",t)},{value:"custom",label:kt("editor.option.more_info_target.custom",t)}]}}},{name:"tap_more_info_entity",selector:{entity:{}}},{name:"hold_action",selector:{ui_action:{}}},{name:"hold_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.more_info_target.auto",t)},{value:"soc",label:kt("editor.option.more_info_target.soc",t)},{value:"sensor",label:kt("editor.option.more_info_target.sensor",t)},{value:"secondary",label:kt("editor.option.more_info_target.secondary",t)},{value:"amperage",label:kt("editor.option.more_info_target.amperage",t)},{value:"switch",label:kt("editor.option.more_info_target.switch",t)},{value:"custom",label:kt("editor.option.more_info_target.custom",t)}]}}},{name:"hold_more_info_entity",selector:{entity:{}}},{name:"double_tap_action",selector:{ui_action:{}}},{name:"double_tap_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.more_info_target.auto",t)},{value:"soc",label:kt("editor.option.more_info_target.soc",t)},{value:"sensor",label:kt("editor.option.more_info_target.sensor",t)},{value:"secondary",label:kt("editor.option.more_info_target.secondary",t)},{value:"amperage",label:kt("editor.option.more_info_target.amperage",t)},{value:"switch",label:kt("editor.option.more_info_target.switch",t)},{value:"custom",label:kt("editor.option.more_info_target.custom",t)}]}}},{name:"double_tap_more_info_entity",selector:{entity:{}}}]}),o}function Kt(e="en"){return[{name:"node_dimensions",type:"expandable",title:kt("editor.section.node_dimensions",e),schema:[{name:"node_radius_primary",selector:{number:{min:10,max:60,step:1,unit_of_measurement:"px"}}},{name:"node_radius_secondary",selector:{number:{min:8,max:50,step:1,unit_of_measurement:"px"}}},{name:"node_radius_tertiary",selector:{number:{min:8,max:40,step:1,unit_of_measurement:"px"}}},{name:"icon_size_primary",selector:{number:{min:10,max:50,step:1,unit_of_measurement:"px"}}},{name:"icon_size_secondary",selector:{number:{min:8,max:40,step:1,unit_of_measurement:"px"}}},{name:"icon_size_tertiary",selector:{number:{min:6,max:30,step:1,unit_of_measurement:"px"}}},{name:"node_border_width",selector:{number:{min:.5,max:10,step:.5,unit_of_measurement:"px"}}},{name:"sub_device_border_width",selector:{number:{min:.5,max:6,step:.5,unit_of_measurement:"px"}}}]},{name:"shadows",type:"expandable",title:kt("editor.section.shadows",e),schema:[{name:"show_node_shadows",selector:{boolean:{}}},{name:"hover_glow_radius",selector:{number:{min:0,max:60,step:1,unit_of_measurement:"px"}}},{name:"node_shadow_color",selector:{ui_color:{}}},{name:"node_shadow_blur",selector:{number:{min:0,max:40,step:1,unit_of_measurement:"px"}}},{name:"node_shadow_spread",selector:{number:{min:0,max:30,step:1,unit_of_measurement:"px"}}},{name:"node_shadow_offset_y",selector:{number:{min:-20,max:30,step:1,unit_of_measurement:"px"}}}]},{name:"typography",type:"expandable",title:kt("editor.section.typography",e),schema:[{name:"font_size_primary",selector:{number:{min:8,max:28,step:.5,unit_of_measurement:"px"}}},{name:"font_size_secondary",selector:{number:{min:6,max:22,step:.5,unit_of_measurement:"px"}}},{name:"font_size_unit",selector:{number:{min:5,max:18,step:.5,unit_of_measurement:"px"}}},{name:"font_size_extra",selector:{number:{min:6,max:18,step:.5,unit_of_measurement:"px"}}},{name:"font_size_sub",selector:{number:{min:6,max:18,step:.5,unit_of_measurement:"px"}}},{name:"font_size_top_info",selector:{number:{min:6,max:18,step:.5,unit_of_measurement:"px"}}},{name:"spacing_text_above_icon",selector:{number:{min:0,max:30,step:.5,unit_of_measurement:"px"}}},{name:"spacing_text_below_icon",selector:{number:{min:0,max:30,step:.5,unit_of_measurement:"px"}}}]},{name:"labels",type:"expandable",title:kt("editor.section.labels",e),schema:[{name:"show_labels",selector:{boolean:{}}},{name:"font_size_label",selector:{number:{min:6,max:22,step:.5,unit_of_measurement:"px"}}},{name:"spacing_label_below_node",selector:{number:{min:2,max:40,step:1,unit_of_measurement:"px"}}},{name:"label_color_mode",selector:{select:{mode:"dropdown",options:[{value:"auto_contrast",label:kt("editor.option.label_color_mode.auto_contrast",e)},{value:"white",label:kt("editor.option.label_color_mode.white",e)},{value:"black",label:kt("editor.option.label_color_mode.black",e)},{value:"match_entity",label:kt("editor.option.label_color_mode.match_entity",e)},{value:"secondary",label:kt("editor.option.label_color_mode.secondary",e)},{value:"custom",label:kt("editor.option.label_color_mode.custom",e)}]}}},{name:"label_color",selector:{ui_color:{}}},{name:"label_chip_enabled",selector:{boolean:{}}},{name:"label_chip_opacity",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"label_chip_padding_x",selector:{number:{min:2,max:25,step:1,unit_of_measurement:"px"}}},{name:"label_chip_padding_y",selector:{number:{min:1,max:15,step:.5,unit_of_measurement:"px"}}},{name:"label_border_radius",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}},{name:"label_border_width",selector:{number:{min:0,max:4,step:.5,unit_of_measurement:"px"}}}]},{name:"home_ring",type:"expandable",title:kt("editor.section.home_ring",e),schema:[{name:"show_home_mix_ring",selector:{boolean:{}}},{name:"home_glow_mode",selector:{select:{mode:"dropdown",options:[{value:"predominant",label:kt("editor.option.home_glow_mode.predominant",e)},{value:"custom",label:kt("editor.option.home_glow_mode.custom",e)}]}}}]},{name:"cables_and_bus",type:"expandable",title:kt("editor.section.cables_and_bus",e),schema:[{name:"line_routing_mode",selector:{select:{mode:"dropdown",options:[{value:"bezier_curved",label:kt("editor.option.line_routing_mode.bezier_curved",e)},{value:"orthogonal_bus",label:kt("editor.option.line_routing_mode.orthogonal_bus",e)}]}}},{name:"bus_lane_spacing",selector:{number:{min:2,max:30,step:1,unit_of_measurement:"px"}}},{name:"bus_corner_radius",selector:{number:{min:0,max:30,step:1,unit_of_measurement:"px"}}},{name:"invert_bus_lane_order",selector:{boolean:{}}},{name:"spacing_horizontal",selector:{number:{min:10,max:250,step:2,unit_of_measurement:"px"}}},{name:"spacing_vertical",selector:{number:{min:10,max:250,step:2,unit_of_measurement:"px"}}},{name:"sub_device_spacing_x",selector:{number:{min:10,max:200,step:2,unit_of_measurement:"px"}}},{name:"sub_device_spacing_y",selector:{number:{min:10,max:150,step:2,unit_of_measurement:"px"}}}]},{name:"wires",type:"expandable",title:kt("editor.section.wires",e),schema:[{name:"stroke_mode",selector:{select:{mode:"dropdown",options:[{value:"watt",label:kt("editor.option.stroke_mode.watt",e)},{value:"fixed",label:kt("editor.option.stroke_mode.fixed",e)},{value:"amperage",label:kt("editor.option.stroke_mode.amperage",e)}]}}},{name:"min_stroke",selector:{number:{min:.5,max:10,step:.5,unit_of_measurement:"px"}}},{name:"max_stroke",selector:{number:{min:1,max:20,step:.5,unit_of_measurement:"px"}}},{name:"inactive_wire_style",selector:{select:{mode:"dropdown",options:[{value:"dashed",label:kt("editor.option.inactive_wire_style.dashed",e)},{value:"solid",label:kt("editor.option.inactive_wire_style.solid",e)},{value:"hidden",label:kt("editor.option.inactive_wire_style.hidden",e)}]}}},{name:"inactive_wire_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}}}]},{name:"particle_dynamics",type:"expandable",title:kt("editor.section.particle_dynamics",e),schema:[{name:"speed_mode",selector:{select:{mode:"dropdown",options:[{value:"absolute",label:kt("editor.option.speed_mode.absolute",e)},{value:"relative",label:kt("editor.option.speed_mode.relative",e)}]}}},{name:"normalize_speed_by_length",selector:{boolean:{}}},{name:"min_duration",selector:{number:{min:.2,max:5,step:.1,unit_of_measurement:"s"}}},{name:"max_duration",selector:{number:{min:1,max:20,step:.1,unit_of_measurement:"s"}}}]},{name:"particles",type:"expandable",title:kt("editor.section.particles",e),schema:[{name:"particles_per_arc",selector:{number:{min:1,max:10,step:1}}},{name:"max_total_particles",selector:{number:{min:5,max:100,step:1}}},{name:"particle_size_offset",selector:{number:{min:-5,max:10,step:.5,unit_of_measurement:"px"}}},{name:"particle_inner_glow",selector:{boolean:{}}},{name:"particle_soft_edge",selector:{boolean:{}}}]}]}function Xt(e="en"){return[{name:"meteor_trail",type:"expandable",title:kt("editor.section.meteor_trail",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"tail_length",selector:{number:{min:2,max:20,step:1}}},{name:"glow_intensity",selector:{number:{min:.1,max:2,step:.1,mode:"slider"}}}]},{name:"living_icons",type:"expandable",title:kt("editor.section.living_icons",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"battery_type",selector:{select:{mode:"dropdown",options:[{value:"gradient",label:kt("editor.option.battery_type.gradient",e)},{value:"liquid",label:kt("editor.option.battery_type.liquid",e)}]}}},{name:"battery_animated",selector:{boolean:{}}},{name:"load_animation",selector:{select:{mode:"dropdown",options:[{value:"rotate",label:kt("editor.option.load_animation.rotate",e)},{value:"pulse",label:kt("editor.option.load_animation.pulse",e)},{value:"none",label:kt("editor.option.load_animation.none",e)}]}}}]},{name:"glassmorphism",type:"expandable",title:kt("editor.section.glassmorphism",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"intensity",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"neon_core",selector:{boolean:{}}}]},{name:"impact_ripples",type:"expandable",title:kt("editor.section.impact_ripples",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"ripple_size",selector:{number:{min:5,max:50,step:1,unit_of_measurement:"px"}}},{name:"ripple_color",selector:{ui_color:{}}}]},{name:"celestial_tracker",type:"expandable",title:kt("editor.section.celestial_tracker",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"mode",selector:{select:{mode:"dropdown",options:[{value:"dial_24h",label:kt("editor.option.celestial_mode.dial_24h",e)},{value:"semicircle",label:kt("editor.option.celestial_mode.semicircle",e)}]}}},{name:"anchor",selector:{select:{mode:"dropdown",options:[{value:"home",label:kt("editor.option.celestial_anchor.home",e)},{value:"solar",label:kt("editor.option.celestial_anchor.solar",e)}]}}},{name:"weather_entity",selector:{entity:{domain:"weather"}}},{name:"show_markers",selector:{boolean:{}}},{name:"show_marker_icons",selector:{boolean:{}}},{name:"sunrise_icon",selector:{icon:{}}},{name:"sunset_icon",selector:{icon:{}}},{name:"show_rays",selector:{boolean:{}}},{name:"show_tail",selector:{boolean:{}}},{name:"show_stars",selector:{boolean:{}}},{name:"night_node_mode",selector:{boolean:{}}}]},{name:"self_sufficiency",type:"expandable",title:kt("editor.section.self_sufficiency",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"scope",selector:{select:{mode:"dropdown",options:[{value:"today",label:kt("editor.option.self_sufficiency_scope.today",e)},{value:"total",label:kt("editor.option.self_sufficiency_scope.total",e)}]}}},{name:"label_style",selector:{select:{mode:"dropdown",options:[{value:"scope",label:kt("editor.option.self_sufficiency_label_style.scope",e)},{value:"text",label:kt("editor.option.self_sufficiency_label_style.text",e)},{value:"icon",label:kt("editor.option.self_sufficiency_label_style.icon",e)},{value:"none",label:kt("editor.option.self_sufficiency_label_style.none",e)}]}}},{name:"radius",selector:{number:{min:10,max:50,step:1,unit_of_measurement:"px",mode:"slider"}}},{name:"show_ring",selector:{boolean:{}}},{name:"ring_width",selector:{number:{min:.5,max:10,step:.5,unit_of_measurement:"px",mode:"slider"}}},{name:"show_glow",selector:{boolean:{}}},{name:"glow_color",selector:{ui_color:{}}},{name:"custom_label",selector:{text:{}}},{name:"custom_icon",selector:{icon:{}}},{name:"entity_solar_energy",selector:{entity:{domain:"sensor",device_class:"energy"}}},{name:"entity_battery_energy_discharge",selector:{entity:{domain:"sensor",device_class:"energy"}}},{name:"entity_grid_energy_import",selector:{entity:{domain:"sensor",device_class:"energy"}}},{name:"entity_home_energy",selector:{entity:{domain:"sensor",device_class:"energy"}}},{name:"entity_self_sufficiency",selector:{entity:{domain:"sensor"}}}]}]}function Zt(e="en",t){const i=[{name:"decimals",selector:{number:{min:0,max:3,step:1}}},{name:"w_to_kw_threshold",selector:{number:{min:100,max:1e4,step:50,unit_of_measurement:"W"}}},{name:"scale_curve",selector:{select:{mode:"dropdown",options:[{value:"sqrt",label:kt("editor.option.scale_curve.sqrt",e)},{value:"linear",label:kt("editor.option.scale_curve.linear",e)},{value:"log",label:kt("editor.option.scale_curve.log",e)}]}}},{name:"scale_min",selector:{number:{min:0,max:5e3,step:10,unit_of_measurement:"W"}}},{name:"scale_max",selector:{number:{min:500,max:5e4,step:100,unit_of_measurement:"W"}}},{name:"smoothing_factor",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"display_zero_tolerance",selector:{number:{min:0,max:50,step:.5,unit_of_measurement:"W"}}},{name:"residual_handling",selector:{select:{mode:"dropdown",options:[{value:"clamp",label:kt("editor.option.residual_handling.clamp",e)},{value:"absorb",label:kt("editor.option.residual_handling.absorb",e)},{value:"unbalanced",label:kt("editor.option.residual_handling.unbalanced",e)}]}}}];return"absorb"===t?.residual_handling&&i.push({name:"residual_absorb_target",selector:{select:{mode:"dropdown",options:[{value:"grid",label:kt("editor.option.residual_absorb_target.grid",e)},{value:"battery",label:kt("editor.option.residual_absorb_target.battery",e)}]}}}),i}function Qt(e="en"){return[{name:"id",selector:{text:{}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entity",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"switch_entity",selector:{entity:{domain:["switch","light","fan","input_boolean","climate","water_heater","media_player","cover","lock","vacuum","humidifier"]}}},{name:"entity_amperage",selector:{entity:{domain:"sensor",device_class:"current"}}},{name:"color",selector:{ui_color:{default_color:"#00bcd4"}}},{name:"include_in_home",selector:{boolean:{}}},{name:"invert",selector:{boolean:{}}},{name:"display_zero",selector:{boolean:{}}},{name:"display_zero_tolerance",selector:{number:{min:0,max:500,step:1,unit_of_measurement:"W"}}},{name:"secondary_info",type:"expandable",title:kt("editor.section.secondary_info",e),schema:[{name:"entity",selector:{entity:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:3,step:1}}}]},{name:"badge",type:"expandable",title:kt("editor.section.badge",e),schema:[{name:"badge_enabled",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.override.auto",e)},{value:"enabled",label:kt("editor.option.override.enabled",e)},{value:"disabled",label:kt("editor.option.override.disabled",e)}]}}},{name:"badge_style",selector:{select:{mode:"dropdown",options:[{value:"dot",label:kt("editor.option.badge_style.dot",e)},{value:"icon",label:kt("editor.option.badge_style.icon",e)},{value:"text",label:kt("editor.option.badge_style.text",e)}]}}},{name:"badge_position",selector:{select:{mode:"dropdown",options:[{value:"top_right",label:kt("editor.option.badge_position.top_right",e)},{value:"top_left",label:kt("editor.option.badge_position.top_left",e)},{value:"bottom_right",label:kt("editor.option.badge_position.bottom_right",e)},{value:"bottom_left",label:kt("editor.option.badge_position.bottom_left",e)}]}}},{name:"badge_size",selector:{number:{min:6,max:30,step:1,unit_of_measurement:"px",mode:"slider"}}},{name:"badge_color_on",selector:{ui_color:{default_color:"#4caf50"}}},{name:"badge_color_off",selector:{ui_color:{default_color:"#64748b"}}},{name:"badge_pulse",selector:{boolean:{}}},{name:"badge_quick_toggle",selector:{boolean:{}}},{name:"badge_tap_behavior",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.badge_tap_behavior.auto",e)},{value:"toggle",label:kt("editor.option.badge_tap_behavior.toggle",e)},{value:"more-info-switch",label:kt("editor.option.badge_tap_behavior.more_info_switch",e)},{value:"more-info-sensor",label:kt("editor.option.badge_tap_behavior.more_info_sensor",e)},{value:"more-info",label:kt("editor.option.badge_tap_behavior.more_info",e)}]}}}]},{name:"label_chip",type:"expandable",title:kt("editor.section.label_chip",e),schema:[{name:"show_label",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.override.auto",e)},{value:"enabled",label:kt("editor.option.override.enabled",e)},{value:"disabled",label:kt("editor.option.override.disabled",e)}]}}},{name:"spacing_text_above_icon",selector:{number:{min:0,max:30,step:1,unit_of_measurement:"px"}}},{name:"spacing_text_below_icon",selector:{number:{min:0,max:30,step:1,unit_of_measurement:"px"}}},{name:"label_font_size",selector:{number:{min:6,max:25,step:.5,unit_of_measurement:"px"}}},{name:"label_spacing_below_node",selector:{number:{min:2,max:40,step:1,unit_of_measurement:"px"}}},{name:"label_chip_enabled",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.override.auto",e)},{value:"enabled",label:kt("editor.option.override.enabled",e)},{value:"disabled",label:kt("editor.option.override.disabled",e)}]}}},{name:"label_chip_opacity",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"label_chip_padding_x",selector:{number:{min:2,max:25,step:1,unit_of_measurement:"px"}}},{name:"label_chip_padding_y",selector:{number:{min:1,max:15,step:.5,unit_of_measurement:"px"}}},{name:"label_border_radius",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}},{name:"label_border_width",selector:{number:{min:0,max:4,step:.5,unit_of_measurement:"px"}}},{name:"label_color_mode",selector:{select:{mode:"dropdown",options:[{value:"auto_contrast",label:kt("editor.option.label_color_mode.auto_contrast",e)},{value:"white",label:kt("editor.option.label_color_mode.white",e)},{value:"black",label:kt("editor.option.label_color_mode.black",e)},{value:"match_entity",label:kt("editor.option.label_color_mode.match_entity",e)},{value:"secondary",label:kt("editor.option.label_color_mode.secondary",e)},{value:"custom",label:kt("editor.option.label_color_mode.custom",e)}]}}},{name:"label_color",selector:{ui_color:{}}}]},{name:"actions",type:"expandable",title:kt("editor.section.actions",e),schema:[{name:"tap_action",selector:{ui_action:{}}},{name:"tap_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.more_info_target.auto",e)},{value:"soc",label:kt("editor.option.more_info_target.soc",e)},{value:"sensor",label:kt("editor.option.more_info_target.sensor",e)},{value:"secondary",label:kt("editor.option.more_info_target.secondary",e)},{value:"amperage",label:kt("editor.option.more_info_target.amperage",e)},{value:"switch",label:kt("editor.option.more_info_target.switch",e)},{value:"custom",label:kt("editor.option.more_info_target.custom",e)}]}}},{name:"tap_more_info_entity",selector:{entity:{}}},{name:"hold_action",selector:{ui_action:{}}},{name:"hold_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.more_info_target.auto",e)},{value:"soc",label:kt("editor.option.more_info_target.soc",e)},{value:"sensor",label:kt("editor.option.more_info_target.sensor",e)},{value:"secondary",label:kt("editor.option.more_info_target.secondary",e)},{value:"amperage",label:kt("editor.option.more_info_target.amperage",e)},{value:"switch",label:kt("editor.option.more_info_target.switch",e)},{value:"custom",label:kt("editor.option.more_info_target.custom",e)}]}}},{name:"hold_more_info_entity",selector:{entity:{}}},{name:"double_tap_action",selector:{ui_action:{}}},{name:"double_tap_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.more_info_target.auto",e)},{value:"soc",label:kt("editor.option.more_info_target.soc",e)},{value:"sensor",label:kt("editor.option.more_info_target.sensor",e)},{value:"secondary",label:kt("editor.option.more_info_target.secondary",e)},{value:"amperage",label:kt("editor.option.more_info_target.amperage",e)},{value:"switch",label:kt("editor.option.more_info_target.switch",e)},{value:"custom",label:kt("editor.option.more_info_target.custom",e)}]}}},{name:"double_tap_more_info_entity",selector:{entity:{}}}]}]}function Jt(e="en"){return[{name:"id",selector:{text:{}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entity",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"switch_entity",selector:{entity:{domain:["switch","light","fan","input_boolean","climate","water_heater","media_player","cover","lock","vacuum","humidifier"]}}},{name:"entity_amperage",selector:{entity:{domain:"sensor",device_class:"current"}}},{name:"color",selector:{ui_color:{default_color:"#00bcd4"}}},{type:"grid",name:"",schema:[{name:"include_in_parent",selector:{boolean:{}}},{name:"include_in_home",selector:{boolean:{}}}]},{type:"grid",name:"",schema:[{name:"distance_x",selector:{number:{min:-150,max:200,step:1,mode:"box"}}},{name:"distance_y",selector:{number:{min:-150,max:150,step:1,mode:"box"}}}]},{type:"grid",name:"",schema:[{name:"sub_device_radius",selector:{number:{min:14,max:36,step:1,mode:"box"}}},{name:"sub_device_icon_size",selector:{number:{min:8,max:24,step:1,mode:"box"}}}]},{type:"grid",name:"",schema:[{name:"display_zero",selector:{boolean:{}}},{name:"display_zero_tolerance",selector:{number:{min:0,max:100,step:1,mode:"box"}}}]},{name:"badge",type:"expandable",title:kt("editor.section.badge",e),schema:[{name:"badge_enabled",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.override.auto",e)},{value:"enabled",label:kt("editor.option.override.enabled",e)},{value:"disabled",label:kt("editor.option.override.disabled",e)}]}}},{name:"badge_style",selector:{select:{mode:"dropdown",options:[{value:"dot",label:kt("editor.option.badge_style.dot",e)},{value:"icon",label:kt("editor.option.badge_style.icon",e)},{value:"text",label:kt("editor.option.badge_style.text",e)}]}}},{name:"badge_position",selector:{select:{mode:"dropdown",options:[{value:"top_right",label:kt("editor.option.badge_position.top_right",e)},{value:"top_left",label:kt("editor.option.badge_position.top_left",e)},{value:"bottom_right",label:kt("editor.option.badge_position.bottom_right",e)},{value:"bottom_left",label:kt("editor.option.badge_position.bottom_left",e)}]}}},{name:"badge_size",selector:{number:{min:6,max:20,step:1,unit_of_measurement:"px",mode:"slider"}}},{name:"badge_color_on",selector:{ui_color:{default_color:"#4caf50"}}},{name:"badge_color_off",selector:{ui_color:{default_color:"#64748b"}}},{name:"badge_pulse",selector:{boolean:{}}},{name:"badge_quick_toggle",selector:{boolean:{}}}]},{name:"label_chip",type:"expandable",title:kt("editor.section.label_chip",e),schema:[{name:"show_label",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.override.auto",e)},{value:"enabled",label:kt("editor.option.override.enabled",e)},{value:"disabled",label:kt("editor.option.override.disabled",e)}]}}},{name:"spacing_text_above_icon",selector:{number:{min:0,max:30,step:1,unit_of_measurement:"px"}}},{name:"spacing_text_below_icon",selector:{number:{min:0,max:30,step:1,unit_of_measurement:"px"}}},{name:"label_font_size",selector:{number:{min:6,max:20,step:.5,unit_of_measurement:"px"}}},{name:"label_spacing_below_node",selector:{number:{min:2,max:40,step:1,unit_of_measurement:"px"}}},{name:"label_chip_enabled",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.override.auto",e)},{value:"enabled",label:kt("editor.option.override.enabled",e)},{value:"disabled",label:kt("editor.option.override.disabled",e)}]}}},{name:"label_chip_opacity",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"label_chip_padding_x",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}},{name:"label_chip_padding_y",selector:{number:{min:0,max:15,step:.5,unit_of_measurement:"px"}}},{name:"label_border_radius",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}},{name:"label_border_width",selector:{number:{min:0,max:4,step:.5,unit_of_measurement:"px"}}},{name:"label_color_mode",selector:{select:{mode:"dropdown",options:[{value:"auto_contrast",label:kt("editor.option.label_color_mode.auto_contrast",e)},{value:"white",label:kt("editor.option.label_color_mode.white",e)},{value:"black",label:kt("editor.option.label_color_mode.black",e)},{value:"match_entity",label:kt("editor.option.label_color_mode.match_entity",e)},{value:"secondary",label:kt("editor.option.label_color_mode.secondary",e)},{value:"custom",label:kt("editor.option.label_color_mode.custom",e)}]}}},{name:"label_color",selector:{ui_color:{}}}]},{name:"actions",type:"expandable",title:kt("editor.section.actions",e),schema:[{name:"tap_action",selector:{ui_action:{}}},{name:"tap_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:kt("editor.option.more_info_target.auto",e)},{value:"sensor",label:kt("editor.option.more_info_target.sensor",e)},{value:"switch",label:kt("editor.option.more_info_target.switch",e)},{value:"custom",label:kt("editor.option.more_info_target.custom",e)}]}}},{name:"tap_more_info_entity",selector:{entity:{}}},{name:"hold_action",selector:{ui_action:{}}},{name:"double_tap_action",selector:{ui_action:{}}}]}]}e([he({attribute:!1})],Bt.prototype,"_config",void 0),e([me()],Bt.prototype,"_actualLayout",void 0),Bt=e([pe("simple-power-flow-card")],Bt),window.customCards=window.customCards||[],window.customCards.push({type:"simple-power-flow-card",name:"Simple Power Flow Card",description:"An elegant, adaptive power flow card with intelligent Bezier routing and RAF Particle Engine.",preview:!0,documentationURL:"https://github.com/ale8730/simple-power-flow-card"});let ei=class extends de{constructor(){super(...arguments),this.devices=[],this.lang="en",this._expandedIndex=null,this._expandedSubKey=null}static{this.styles=r`
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
    .subdevices-section {
      margin-top: 16px;
      padding-top: 12px;
      border-top: 1px dashed var(--divider-color, #e2e8f0);
    }
    .subdevices-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .subdevices-title-container {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 500;
      font-size: 13px;
      color: var(--primary-text-color, #1e293b);
    }
    .subdevices-title-container ha-icon {
      --mdc-icon-size: 18px;
      color: var(--primary-color, #03a9f4);
    }
    .sub-count-badge {
      font-size: 11px;
      font-weight: 600;
      background: var(--primary-color, #03a9f4);
      color: #ffffff;
      padding: 1px 6px;
      border-radius: 10px;
    }
    .subdevices-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 6px;
    }
    .subdevice-item {
      border: 1px solid var(--divider-color, #e2e8f0);
      border-radius: 6px;
      overflow: hidden;
      background: var(--secondary-background-color, #f8fafc);
      margin-left: 8px;
      border-left: 3px solid var(--primary-color, #03a9f4);
    }
    .subpanel-header {
      padding: 0 4px;
    }
    .subpanel-title {
      font-size: 13px;
      gap: 6px;
    }
    .subpanel-title ha-icon {
      --mdc-icon-size: 16px;
    }
    .sub-status-tag {
      font-size: 10px;
      font-weight: 500;
      padding: 1px 6px;
      border-radius: 4px;
      border: 1px solid transparent;
      margin-left: 4px;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    .subpanel-content {
      padding: 8px 12px 12px;
      background: var(--card-background-color, #ffffff);
      border-top: 1px solid var(--divider-color, #e2e8f0);
    }
    .subpanel-header .panel-actions ha-icon-button {
      --mdc-icon-button-size: 28px;
      --mdc-icon-size: 16px;
    }
    .subdevices-empty {
      font-size: 12px;
      color: var(--secondary-text-color, #94a3b8);
      font-style: italic;
      padding: 6px 0;
    }
    .add-device-btn {
      margin-top: 12px;
      display: flex;
      justify-content: flex-end;
    }
    mwc-button {
      --mdc-theme-primary: var(--primary-color, #03a9f4);
    }
  `}_validateId(e,t){if(!e||!/^[a-zA-Z][a-zA-Z0-9_-]*$/.test(e))return kt("editor.error.invalid_id",this.lang);const i=this.devices.some((i,o)=>o!==t&&i.id===e);return i?kt("editor.error.duplicate_id",this.lang):null}_validateSubId(e,t,i){if(!e||!/^[a-zA-Z][a-zA-Z0-9_-]*$/.test(e))return kt("editor.error.invalid_id",this.lang);const o=this.devices[t],a=(o?.sub_devices||[]).some((t,o)=>o!==i&&t.id===e);return a?kt("editor.error.duplicate_id",this.lang):null}_handleDeviceChanged(e,t){t.stopPropagation();const i=ft(t.detail.value),o=[...this.devices];o[e]={...o[e],...i,sub_devices:o[e].sub_devices||[]},this._fireChanged(o)}_handleSubDeviceChanged(e,t,i){i.stopPropagation();const o=ft(i.detail.value),a=[...this.devices],n={...a[e]},r=[...n.sub_devices||[]];r[t]={...r[t],...o},n.sub_devices=r,a[e]=n,this._fireChanged(a)}_handleMoveUp(e,t){if(t.stopPropagation(),e<=0)return;const i=[...this.devices],o=i.splice(e,1)[0];i.splice(e-1,0,o),this._expandedIndex===e?this._expandedIndex=e-1:this._expandedIndex===e-1&&(this._expandedIndex=e),this._fireChanged(i)}_handleMoveDown(e,t){if(t.stopPropagation(),e>=this.devices.length-1)return;const i=[...this.devices],o=i.splice(e,1)[0];i.splice(e+1,0,o),this._expandedIndex===e?this._expandedIndex=e+1:this._expandedIndex===e+1&&(this._expandedIndex=e),this._fireChanged(i)}_handleDelete(e,t){t.stopPropagation();const i=this.devices.filter((t,i)=>i!==e);this._expandedIndex===e?this._expandedIndex=null:null!==this._expandedIndex&&this._expandedIndex>e&&this._expandedIndex--,this._fireChanged(i)}_handleAddDevice(){let e=this.devices.length+1,t=`device_${e}`;for(;this.devices.some(e=>e.id===t);)e++,t=`device_${e}`;const i=`${kt("editor.device_default_name",this.lang)} ${e}`,o={id:t,name:i,entity:"",color:"#00bcd4",include_in_home:!0,sub_devices:[]},a=[...this.devices,o];this._expandedIndex=a.length-1,this._fireChanged(a)}_handleAddSubDevice(e){const t=[...this.devices],i={...t[e]},o=[...i.sub_devices||[]];let a=o.length+1,n=`sub_${a}`;for(;o.some(e=>e.id===n);)a++,n=`sub_${a}`;const r=`${kt("editor.sub_device_default_name",this.lang)} ${a}`,s={id:n,name:r,entity:"",color:i.color||"#00bcd4",include_in_parent:!0,include_in_home:!0};o.push(s),i.sub_devices=o,t[e]=i,this._expandedSubKey=`${e}-${o.length-1}`,this._fireChanged(t)}_handleMoveUpSubDevice(e,t,i){if(i.stopPropagation(),t<=0)return;const o=[...this.devices],a={...o[e]},n=[...a.sub_devices||[]],r=n.splice(t,1)[0];n.splice(t-1,0,r),a.sub_devices=n,o[e]=a;const s=`${e}-${t}`,l=`${e}-${t-1}`;this._expandedSubKey===s?this._expandedSubKey=l:this._expandedSubKey===l&&(this._expandedSubKey=s),this._fireChanged(o)}_handleMoveDownSubDevice(e,t,i){i.stopPropagation();const o=this.devices[e];if(t>=(o?.sub_devices||[]).length-1)return;const a=[...this.devices],n={...a[e]},r=[...n.sub_devices||[]],s=r.splice(t,1)[0];r.splice(t+1,0,s),n.sub_devices=r,a[e]=n;const l=`${e}-${t}`,d=`${e}-${t+1}`;this._expandedSubKey===l?this._expandedSubKey=d:this._expandedSubKey===d&&(this._expandedSubKey=l),this._fireChanged(a)}_handleDeleteSubDevice(e,t,i){i.stopPropagation();const o=[...this.devices],a={...o[e]},n=[...a.sub_devices||[]];n.splice(t,1),a.sub_devices=n,o[e]=a;const r=`${e}-${t}`;this._expandedSubKey===r&&(this._expandedSubKey=null),this._fireChanged(o)}_fireChanged(e){this.dispatchEvent(new CustomEvent("devices-changed",{bubbles:!0,composed:!0,detail:{devices:e}}))}render(){const e=Qt(this.lang),t=Jt(this.lang);return q`
      <div class="device-list">
        ${this.devices.map((i,o)=>{const a=this._validateId(i.id,o),n=this._expandedIndex===o,r=i.sub_devices||[];return q`
            <div class="device-item">
              <ha-expansion-panel
                .expanded=${n}
                @expanded-changed=${e=>{e.detail.expanded?this._expandedIndex=o:this._expandedIndex===o&&(this._expandedIndex=null)}}
              >
                <div slot="header" class="panel-header">
                  <div class="panel-title">
                    <ha-icon .icon=${i.icon||"mdi:devices"}></ha-icon>
                    <span>${i.name||i.id||`${kt("editor.device_default_name",this.lang)} ${o+1}`}</span>
                    ${r.length>0?q`<span class="sub-count-badge">${r.length} sub</span>`:""}
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
                  ${a?q`
                    <div class="id-warning">
                      <ha-icon icon="mdi:alert-circle"></ha-icon>
                      <span>${a}</span>
                    </div>
                  `:""}

                  <ha-form
                    .hass=${this.hass}
                    .data=${mt(i)}
                    .schema=${e}
                    .computeLabel=${e=>Vt(e,this.lang)}
                    .computeHelper=${e=>Ht(e,this.lang)}
                    @value-changed=${e=>this._handleDeviceChanged(o,e)}
                  ></ha-form>

                  <!-- Nested Sub-devices section as internal accordions -->
                  <div class="subdevices-section">
                    <div class="subdevices-header">
                      <div class="subdevices-title-container">
                        <ha-icon icon="mdi:source-branch"></ha-icon>
                        <span class="subdevices-title">${kt("editor.sub_devices_section",this.lang)}</span>
                        ${r.length>0?q`<span class="sub-count-badge">${r.length}</span>`:""}
                      </div>
                      <mwc-button dense @click=${()=>this._handleAddSubDevice(o)}>
                        <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
                        ${kt("editor.add_sub_device",this.lang)}
                      </mwc-button>
                    </div>

                    ${r.length>0?q`
                      <div class="subdevices-list">
                        ${r.map((e,a)=>{const n=`${o}-${a}`,s=this._expandedSubKey===n,l=this._validateSubId(e.id,o,a),d=e.color||i.color||"#00bcd4";return q`
                            <div class="subdevice-item" style="border-left-color: ${d};">
                              <ha-expansion-panel
                                .expanded=${s}
                                @expanded-changed=${e=>{e.detail.expanded?this._expandedSubKey=n:this._expandedSubKey===n&&(this._expandedSubKey=null)}}
                              >
                                <div slot="header" class="panel-header subpanel-header">
                                  <div class="panel-title subpanel-title">
                                    <ha-icon .icon=${e.icon||"mdi:devices"}></ha-icon>
                                    <span>${e.name||e.id||`${kt("editor.sub_device_default_name",this.lang)} ${a+1}`}</span>
                                    <span
                                      class="sub-status-tag"
                                      style="background: ${d}20; color: ${d}; border-color: ${d}40;"
                                    >
                                      ${!1!==e.include_in_parent?"in parent":"detached"}
                                    </span>
                                  </div>
                                  <div class="panel-actions" @click=${e=>e.stopPropagation()}>
                                    <ha-icon-button
                                      .disabled=${0===a}
                                      @click=${e=>this._handleMoveUpSubDevice(o,a,e)}
                                    >
                                      <ha-icon icon="mdi:arrow-up"></ha-icon>
                                    </ha-icon-button>
                                    <ha-icon-button
                                      .disabled=${a===r.length-1}
                                      @click=${e=>this._handleMoveDownSubDevice(o,a,e)}
                                    >
                                      <ha-icon icon="mdi:arrow-down"></ha-icon>
                                    </ha-icon-button>
                                    <ha-icon-button
                                      @click=${e=>this._handleDeleteSubDevice(o,a,e)}
                                    >
                                      <ha-icon icon="mdi:delete"></ha-icon>
                                    </ha-icon-button>
                                  </div>
                                </div>

                                <div class="panel-content subpanel-content">
                                  ${l?q`
                                    <div class="id-warning">
                                      <ha-icon icon="mdi:alert-circle"></ha-icon>
                                      <span>${l}</span>
                                    </div>
                                  `:""}

                                  <ha-form
                                    .hass=${this.hass}
                                    .data=${mt(e)}
                                    .schema=${t}
                                    .computeLabel=${e=>Vt(e,this.lang)}
                                    .computeHelper=${e=>Ht(e,this.lang)}
                                    @value-changed=${e=>this._handleSubDeviceChanged(o,a,e)}
                                  ></ha-form>
                                </div>
                              </ha-expansion-panel>
                            </div>
                          `})}
                      </div>
                    `:q`
                      <div class="subdevices-empty">
                        ${kt("editor.no_sub_devices",this.lang)}
                      </div>
                    `}
                  </div>
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
            ${kt("editor.add_device",this.lang)}
          </mwc-button>
        </div>
      </div>
    `}};async function ti(){if(!customElements.get("ha-form")){try{const e=await(window.loadCardHelpers?.());if(e){const t=await e.createCardElement({type:"button"});await(t?.constructor?.getConfigElement?.());const i=await e.createCardElement({type:"entities",entities:[]});await(i?.constructor?.getConfigElement?.())}}catch(e){}if(!customElements.get("ha-form"))try{await Promise.race([customElements.whenDefined("ha-form"),new Promise(e=>setTimeout(e,500))])}catch(e){}if(!customElements.get("ha-dialog")&&!customElements.get("mwc-dialog"))try{await Promise.race([customElements.whenDefined("ha-dialog"),customElements.whenDefined("mwc-dialog"),new Promise(e=>setTimeout(e,500))])}catch(e){}}}e([he({attribute:!1})],ei.prototype,"devices",void 0),e([he({attribute:!1})],ei.prototype,"hass",void 0),e([he({type:String})],ei.prototype,"lang",void 0),e([me()],ei.prototype,"_expandedIndex",void 0),e([me()],ei.prototype,"_expandedSubKey",void 0),ei=e([pe("spfc-device-list")],ei);let ii=class extends de{constructor(){super(...arguments),this._componentsLoaded=!1,this._openSection="general"}static{this.styles=r`
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
  `}setConfig(e){const t=gt(e.styles||{});this._config={...xe,...e,styles:{...fe,...t},effects:bt(e.effects)}}async firstUpdated(){await ti(),this._componentsLoaded=!0}get _lang(){return this.hass?.language||this.hass?.locale?.language||"en"}_toggleSection(e,t){t?this._openSection=e:this._openSection===e&&(this._openSection=null)}_handleGeneralChanged(e){e.stopPropagation();const t={...this._config,...e.detail.value};this._fireConfigChanged(t)}_handleNodeChanged(e,t){t.stopPropagation();const i=ft(t.detail.value),o=ht(this._config[e]||{}),a={...this._config,[e]:{...o,...i}};this._fireConfigChanged(a)}_handleDevicesChanged(e){e.stopPropagation();const t={...this._config,devices:e.detail.devices};this._fireConfigChanged(t)}_handleStylesChanged(e){e.stopPropagation();const t=function(e){if(!e)return{};const{node_dimensions:t,shadows:i,typography:o,labels:a,label_chip:n,home_ring:r,cables_and_bus:s,wires:l,particle_dynamics:d,particles:c,energy_mix:p,bus_routing:_,layout_spacing:u,...h}=e;return gt({...h,...t||{},...i||{},...o||{},...a||{},...n||{},...r||{},...s||{},...l||{},...d||{},...c||{},...p||{},..._||{},...u||{}})}(e.detail.value),i={...gt(this._config.styles||{},this._config),...t},o={...this._config,stroke_mode:i.stroke_mode??this._config.stroke_mode,speed_mode:i.speed_mode??this._config.speed_mode,min_stroke:i.min_stroke??this._config.min_stroke,max_stroke:i.max_stroke??this._config.max_stroke,min_duration:i.min_duration??this._config.min_duration,max_duration:i.max_duration??this._config.max_duration,max_total_particles:i.max_total_particles??this._config.max_total_particles,normalize_speed_by_length:i.normalize_speed_by_length??this._config.normalize_speed_by_length,styles:i};this._fireConfigChanged(o)}_handleEffectsChanged(e){e.stopPropagation();const t={...this._config,effects:e.detail.value};this._fireConfigChanged(t)}_handleAdvancedChanged(e){e.stopPropagation();const t={...this._config,...e.detail.value};this._fireConfigChanged(t)}_fireConfigChanged(e){const t=gt(e.styles||{},e);this._config={...xe,...e,stroke_mode:t.stroke_mode??e.stroke_mode,speed_mode:t.speed_mode??e.speed_mode,min_stroke:t.min_stroke??e.min_stroke,max_stroke:t.max_stroke??e.max_stroke,min_duration:t.min_duration??e.min_duration,max_duration:t.max_duration??e.max_duration,max_total_particles:t.max_total_particles??e.max_total_particles,normalize_speed_by_length:t.normalize_speed_by_length??e.normalize_speed_by_length,styles:{...fe,...t},effects:bt(e.effects)};const i=qt(e);this.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:i}}))}render(){if(!this._config||!this.hass)return q``;const e=this._lang;return q`
      <div class="card-config">
        <!-- 1. Generale -->
        <ha-expansion-panel
          .expanded=${"general"===this._openSection}
          @expanded-changed=${e=>this._toggleSection("general",e.detail.expanded)}
        >
          <div slot="header" class="section-header">
            <ha-icon icon="mdi:cog"></ha-icon>
            <span>${kt("editor.section.general",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._config}
              .schema=${jt(e)}
              .computeLabel=${t=>Vt(t,e)}
              .computeHelper=${t=>Ht(t,e)}
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
            <span>${kt("editor.section.solar",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${mt(this._config.solar||{})}
              .schema=${Yt("solar",e,this._config.solar)}
              .computeLabel=${t=>Vt(t,e)}
              .computeHelper=${t=>Ht(t,e)}
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
            <span>${kt("editor.section.grid",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${mt(this._config.grid||{})}
              .schema=${Yt("grid",e,this._config.grid)}
              .computeLabel=${t=>Vt(t,e)}
              .computeHelper=${t=>Ht(t,e)}
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
            <span>${kt("editor.section.battery",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${mt(this._config.battery||{})}
              .schema=${Yt("battery",e,this._config.battery)}
              .computeLabel=${t=>Vt(t,e)}
              .computeHelper=${t=>Ht(t,e)}
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
            <span>${kt("editor.section.home",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${mt(this._config.home||{})}
              .schema=${Yt("home",e,this._config.home)}
              .computeLabel=${t=>Vt(t,e)}
              .computeHelper=${t=>Ht(t,e)}
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
            <span>${kt("editor.section.devices",e)} (${(this._config.devices||[]).length})</span>
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
            <span>${kt("editor.section.styles",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${function(e,t){const i=gt(e||{},t),o={...fe,...i};return{...o,node_dimensions:{node_radius_primary:o.node_radius_primary,node_radius_secondary:o.node_radius_secondary,node_radius_tertiary:o.node_radius_tertiary,icon_size_primary:o.icon_size_primary,icon_size_secondary:o.icon_size_secondary,icon_size_tertiary:o.icon_size_tertiary,node_border_width:o.node_border_width,sub_device_border_width:o.sub_device_border_width},shadows:{show_node_shadows:o.show_node_shadows,hover_glow_radius:o.hover_glow_radius,node_shadow_color:o.node_shadow_color,node_shadow_blur:o.node_shadow_blur,node_shadow_spread:o.node_shadow_spread,node_shadow_offset_y:o.node_shadow_offset_y},typography:{font_size_primary:o.font_size_primary,font_size_secondary:o.font_size_secondary,font_size_unit:o.font_size_unit,font_size_extra:o.font_size_extra,font_size_sub:o.font_size_sub,font_size_top_info:o.font_size_top_info,spacing_text_above_icon:o.spacing_text_above_icon,spacing_text_below_icon:o.spacing_text_below_icon},labels:{show_labels:o.show_labels,font_size_label:o.font_size_label,spacing_label_below_node:o.spacing_label_below_node,label_color_mode:o.label_color_mode,label_color:o.label_color,label_chip_enabled:o.label_chip_enabled,label_chip_opacity:o.label_chip_opacity,label_chip_padding_x:o.label_chip_padding_x,label_chip_padding_y:o.label_chip_padding_y,label_border_radius:o.label_border_radius,label_border_width:o.label_border_width},home_ring:{show_home_mix_ring:o.show_home_mix_ring,home_glow_mode:o.home_glow_mode},cables_and_bus:{line_routing_mode:o.line_routing_mode,bus_lane_spacing:o.bus_lane_spacing,bus_corner_radius:o.bus_corner_radius,invert_bus_lane_order:o.invert_bus_lane_order,spacing_horizontal:o.spacing_horizontal,spacing_vertical:o.spacing_vertical,sub_device_spacing_x:o.sub_device_spacing_x,sub_device_spacing_y:o.sub_device_spacing_y},wires:{stroke_mode:o.stroke_mode,min_stroke:o.min_stroke,max_stroke:o.max_stroke,inactive_wire_style:o.inactive_wire_style,inactive_wire_opacity:o.inactive_wire_opacity},particle_dynamics:{speed_mode:o.speed_mode,normalize_speed_by_length:o.normalize_speed_by_length,min_duration:o.min_duration,max_duration:o.max_duration},particles:{particles_per_arc:o.particles_per_arc,max_total_particles:o.max_total_particles,particle_size_offset:o.particle_size_offset,particle_inner_glow:o.particle_inner_glow,particle_soft_edge:o.particle_soft_edge}}}(this._config.styles||{},this._config)}
              .schema=${Kt(e)}
              .computeLabel=${t=>Vt(t,e)}
              .computeHelper=${t=>Ht(t,e)}
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
            <span>${kt("editor.section.effects",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${bt(this._config.effects||{})}
              .schema=${Xt(e)}
              .computeLabel=${t=>Vt(t,e)}
              .computeHelper=${t=>Ht(t,e)}
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
            <span>${kt("editor.section.advanced",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._config}
              .schema=${Zt(e,this._config)}
              .computeLabel=${t=>Vt(t,e)}
              .computeHelper=${t=>Ht(t,e)}
              @value-changed=${this._handleAdvancedChanged}
            ></ha-form>
          </div>
        </ha-expansion-panel>
      </div>
    `}};e([he({attribute:!1})],ii.prototype,"hass",void 0),e([me()],ii.prototype,"_config",void 0),e([me()],ii.prototype,"_componentsLoaded",void 0),e([me()],ii.prototype,"_openSection",void 0),ii=e([pe("simple-power-flow-card-editor")],ii);var oi=Object.freeze({__proto__:null,get SimplePowerFlowCardEditor(){return ii},get SpfcDeviceList(){return ei},computeHelper:Ht,computeLabel:Vt,getAdvancedSchema:Zt,getDeviceSchema:Qt,getEffectsSchema:Xt,getGeneralSchema:jt,getNodeSchema:Yt,getStylesSchema:Kt,getSubDeviceSchema:Jt,loadHaComponents:ti});console.info("%c SIMPLE-POWER-FLOW-CARD %c v1.0.0 ","color: white; background: #0284c7; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;","color: #0284c7; background: #e0f2fe; font-weight: 700; border-radius: 0 4px 4px 0; padding: 2px 6px;");export{Bt as SimplePowerFlowCard};
