function e(e,t,o,i){var a,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,o=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;let n=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&a.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new n(o,e,i)},s=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:_,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,m=globalThis,u=m.trustedTypes,g=u?u.emptyScript:"",f=m.reactiveElementPolyfillSupport,b=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},v=(e,t)=>!l(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&d(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:a}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const n=i?.call(this);a?.call(this,t),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[..._(e),...p(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(o)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of i){const i=document.createElement("style"),a=t.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=o.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const a=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(t,o.type);this._$Em=e,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=i;const n=a.fromAttribute(t,e.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(e,t,o,i=!1,a){if(void 0!==e){const n=this.constructor;if(!1===i&&(a=this[e]),o??=n.getPropertyOptions(e),!((o.hasChanged??v)(a,t)||o.useDefault&&o.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:a},n){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==a||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[b("elementProperties")]=new Map,w[b("finalized")]=new Map,f?.({ReactiveElement:w}),(m.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,z=e=>e,C=$.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+k,F=`<${M}>`,P=document,E=()=>P.createComment(""),I=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,T="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,U=/>/g,O=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,B=/"/g,W=/^(?:script|style|textarea|title)$/i,q=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),V=q(1),H=q(2),G=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Z=new WeakMap,Y=P.createTreeWalker(P,129);function X(e,t){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const K=(e,t)=>{const o=e.length-1,i=[];let a,n=2===t?"<svg>":3===t?"<math>":"",r=L;for(let t=0;t<o;t++){const o=e[t];let s,l,d=-1,c=0;for(;c<o.length&&(r.lastIndex=c,l=r.exec(o),null!==l);)c=r.lastIndex,r===L?"!--"===l[1]?r=N:void 0!==l[1]?r=U:void 0!==l[2]?(W.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=a??L,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?O:'"'===l[3]?B:R):r===B||r===R?r=O:r===N||r===U?r=L:(r=O,a=void 0);const _=r===O&&e[t+1].startsWith("/>")?" ":"";n+=r===L?o+F:d>=0?(i.push(s),o.slice(0,d)+A+o.slice(d)+k+_):o+k+(-2===d?t:_)}return[X(e,n+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Q{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let a=0,n=0;const r=e.length-1,s=this.parts,[l,d]=K(e,t);if(this.el=Q.createElement(l,o),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Y.nextNode())&&s.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(A)){const t=d[n++],o=i.getAttribute(e).split(k),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:o,ctor:"."===r[1]?ie:"?"===r[1]?ae:"@"===r[1]?ne:oe}),i.removeAttribute(e)}else e.startsWith(k)&&(s.push({type:6,index:a}),i.removeAttribute(e));if(W.test(i.tagName)){const e=i.textContent.split(k),t=e.length-1;if(t>0){i.textContent=C?C.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],E()),Y.nextNode(),s.push({type:2,index:++a});i.append(e[t],E())}}}else if(8===i.nodeType)if(i.data===M)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=i.data.indexOf(k,e+1));)s.push({type:7,index:a}),e+=k.length-1}a++}}static createElement(e,t){const o=P.createElement("template");return o.innerHTML=e,o}}function J(e,t,o=e,i){if(t===G)return t;let a=void 0!==i?o._$Co?.[i]:o._$Cl;const n=I(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e),a._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=a:o._$Cl=a),void 0!==a&&(t=J(e,a._$AS(e,t.values),a,i)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??P).importNode(t,!0);Y.currentNode=i;let a=Y.nextNode(),n=0,r=0,s=o[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new te(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new re(a,this,e)),this._$AV.push(t),s=o[++r]}n!==s?.index&&(a=Y.nextNode(),n++)}return Y.currentNode=P,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),I(e)?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Q.createElement(X(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new ee(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new Q(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const a of e)i===t.length?t.push(o=new te(this.O(E()),this.O(E()),this,this.options)):o=t[i],o._$AI(a),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=z(e).nextSibling;z(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class oe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,a){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=j}_$AI(e,t=this,o,i){const a=this.strings;let n=!1;if(void 0===a)e=J(this,e,t,0),n=!I(e)||e!==this._$AH&&e!==G,n&&(this._$AH=e);else{const i=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=J(this,i[o+r],t,r),s===G&&(s=this._$AH[r]),n||=!I(s)||s!==this._$AH[r],s===j?e=j:e!==j&&(e+=(s??"")+a[r+1]),this._$AH[r]=s}n&&!i&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class ae extends oe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class ne extends oe{constructor(e,t,o,i,a){super(e,t,o,i,a),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??j)===G)return;const o=this._$AH,i=e===j&&o!==j||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==j&&(o===j||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const se=$.litHtmlPolyfillSupport;se?.(Q,te),($.litHtmlVersions??=[]).push("3.3.3");const le=globalThis;class de extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let a=i._$litPart$;if(void 0===a){const e=o?.renderBefore??null;i._$litPart$=a=new te(t.insertBefore(E(),e),e,void 0,o??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}de._$litElement$=!0,de.finalized=!0,le.litElementHydrateSupport?.({LitElement:de});const ce=le.litElementPolyfillSupport;ce?.({LitElement:de}),(le.litElementVersions??=[]).push("4.2.2");const _e=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},he=(e=pe,t,o)=>{const{kind:i,metadata:a}=o;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),n.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const a=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,a,e,!0,o)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=o;return function(o){const a=this[i];t.call(this,o),this.requestUpdate(i,a,e,!0,o)}}throw Error("Unsupported decorator location: "+i)};function me(e){return(t,o)=>"object"==typeof o?he(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function ue(e){return me({...e,state:!0,attribute:!1})}const ge={node_radius_primary:36,node_radius_secondary:28,node_border_width:2.5,icon_size_primary:18,icon_size_secondary:16,spacing_text_above_icon:4,spacing_text_below_icon:4,spacing_horizontal:120,spacing_vertical:85,font_size_value:10,font_size_primary:10,font_size_secondary:9,font_size_unit:8,font_size_extra:8.5,font_size_sub:9,font_size_label:10,font_size_directional:8.5,font_size_top_info:8,particles_per_arc:3,particle_size_offset:1.8,inactive_wire_opacity:.35,inactive_wire_style:"dashed",hover_glow_radius:10,show_node_shadows:!0,node_shadow_color:"",node_shadow_spread:0,node_shadow_blur:10,node_shadow_opacity:.35,node_shadow_offset_y:4,show_home_mix_ring:!0,home_glow_mode:"predominant",line_routing_mode:"bezier_curved",bus_lane_spacing:8,bus_corner_radius:20,invert_bus_lane_order:!1,particle_inner_glow:!0,particle_soft_edge:!0,show_labels:!0,spacing_label_below_node:14,label_chip_enabled:!1,label_chip_opacity:.18,label_chip_padding_x:8,label_chip_padding_y:3.5,label_border_radius:6,label_border_width:1,label_color:"",label_color_mode:"auto_contrast",badge_enabled:!1,badge_style:"dot",badge_position:"top_right",badge_size:10,badge_color_on:"#4caf50",badge_color_off:"#64748b",badge_pulse:!0,badge_quick_toggle:!0,stroke_mode:"watt",speed_mode:"absolute",min_stroke:2,max_stroke:7,min_duration:.8,max_duration:5.5,max_total_particles:30,normalize_speed_by_length:!0},fe={meteor_trail:{enabled:!1,tail_length:.08,glow_intensity:1.5},living_icons:{enabled:!1,battery_type:"gradient",battery_animated:!0,load_animation:"rotate"},glassmorphism:{enabled:!1,intensity:50,neon_core:!0},impact_ripples:{enabled:!1,ripple_size:18,ripple_color:""}},be={card_version:2,stroke_mode:"watt",speed_mode:"absolute",scale_curve:"sqrt",layout_mode:"auto",min_duration:.8,max_duration:5.5,normalize_speed_by_length:!0,min_stroke:2,max_stroke:7,scale_min:50,scale_max:6e3,smoothing_factor:.35,max_total_particles:30,display_zero_tolerance:1,w_to_kw_threshold:1e3,decimals:2,residual_handling:"clamp",residual_absorb_target:"grid",auto_layout_breakpoint:520,styles:ge,effects:fe},ye="var(--energy-solar-color, #ff9800)",ve="var(--energy-grid-consumption-color, #f44336)",xe="var(--energy-grid-return-color, #4caf50)",we="var(--energy-battery-in-color, #4caf50)",$e="var(--energy-battery-out-color, #9c27b0)",ze="var(--energy-home-color, #03a9f4)",Ce="mdi:solar-power",Se="mdi:transmission-tower",Ae="mdi:battery-high",ke="mdi:home-lightning-bolt",Me="mdi:power-plug",Fe=r`
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

  /* Accessibility: Prefers Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .particles-layer,
    .particles-glow-layer,
    .meteor-layer,
    .meteor-layer-glow,
    .ripples-layer,
    .particle-circle,
    .meteor-tail {
      display: none !important;
      visibility: hidden !important;
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
`;function Pe(e){if(null==e)return null;const t=String(e).trim();if(""===t||"unavailable"===t||"unknown"===t)return null;const o=t.replace(",",".").replace(/[^0-9.-]/g,""),i=parseFloat(o);return Number.isFinite(i)?i:null}function Ee(e,t){if(!t||"string"!=typeof t||""===t.trim())return{value:0,rawState:"",unit:"",isConfigured:!1,isUnavailable:!1,isUnknown:!1,isValid:!1};if(!e||!e.states||!e.states[t])return{value:0,rawState:"",unit:"",isConfigured:!0,isUnavailable:!0,isUnknown:!1,isValid:!1};const o=e.states[t],i=o.state,a=o.attributes?.unit_of_measurement||"W",n=o.attributes?.device_class,r=function(e,t){const o=e.trim().toLowerCase(),i=(t||"").trim().toLowerCase();return["kwh","wh","mwh","gwh"].includes(o)||"energy"===i?{isValid:!1,reason:`Sensore in unità di energia (${e}) invece che potenza (W/kW). I flussi in tempo reale richiedono sensori di potenza (W/kW).`}:"%"===o&&"battery"!==i?{isValid:!1,reason:"Sensore in percentuale (%) utilizzato come fonte di potenza. Richiesto sensore in W o kW."}:["v","mv","kv","°c","°f","c","f","hz","bar","psi","ppm","lux"].includes(o)?{isValid:!1,reason:`Sensore con unità '${e}' incompatibile con un flusso di potenza (W/kW/A).`}:{isValid:!0}}(a,n);if("unavailable"===i)return{value:0,rawState:i,unit:a,isConfigured:!0,isUnavailable:!0,isUnknown:!1,isValid:!1,hasInvalidUnit:!r.isValid,invalidUnitReason:r.reason};if("unknown"===i)return{value:0,rawState:i,unit:a,isConfigured:!0,isUnavailable:!1,isUnknown:!0,isValid:!1,hasInvalidUnit:!r.isValid,invalidUnitReason:r.reason};const s=Pe(i);if(null===s)return{value:0,rawState:i,unit:a,isConfigured:!0,isUnavailable:!1,isUnknown:!0,isValid:!1,hasInvalidUnit:!r.isValid,invalidUnitReason:r.reason};return{value:function(e,t){const o=t.trim(),i=o.toLowerCase();if("mW"===o)return.001*e;switch(i){case"kw":case"kva":case"kvar":return 1e3*e;case"mw":case"mva":return 1e6*e;case"gw":case"gva":case"gvar":return 1e9*e;case"w":case"va":case"var":case"a":default:return e;case"ma":return.001*e}}(s,a),rawState:i,unit:a,isConfigured:!0,isUnavailable:!1,isUnknown:!1,isValid:!0,hasInvalidUnit:!r.isValid,invalidUnitReason:r.reason}}function Ie(e,t,o="solar"){if(!t)return{power:0,isConfigured:!1,isUnavailable:!1,isUnknown:!1,isValid:!1,rawUnit:"W"};let i,a,n;if(t.entity_amperage){const o=Ee(e,t.entity_amperage);o.isValid&&(i=o.value)}let r=t.state_of_charge;if(!r&&t.secondary_info?.entity){const o=e?.states?.[t.secondary_info.entity];"battery"===o?.attributes?.device_class&&(r=t.secondary_info.entity)}if(r&&e?.states?.[r]){const t=e.states[r],o=Pe(t.state);if(null!==o){const e=t.attributes?.unit_of_measurement,i=t.attributes?.device_class;n=!e&&"battery"===i&&o<=1&&o>=0?Math.max(0,Math.min(100,100*o)):Math.max(0,Math.min(100,o)),a=`${Math.round(n)}%`}}const s=t.entity_import||("grid"===o?t.entity_in:void 0),l=t.entity_export||("grid"===o?t.entity_out:void 0),d=t.entity_charge||("battery"===o?t.entity_in:void 0),c=t.entity_discharge||("battery"===o?t.entity_out:void 0),_=Boolean(s||l),p=Boolean(d||c);if("grid"===o&&_){const t=Ee(e,s),o=Ee(e,l),a=t.isValid?Math.max(0,t.value):0,n=o.isValid?Math.max(0,o.value):0;return{power:a-n,inPower:a,outPower:n,isDual:!0,isConfigured:!0,amperage:i,isUnavailable:!!s&&t.isUnavailable&&!!l&&o.isUnavailable,isUnknown:t.isUnknown||o.isUnknown,isValid:t.isValid||o.isValid,rawUnit:t.unit||o.unit||"W",hasInvalidUnit:t.hasInvalidUnit||o.hasInvalidUnit,invalidUnitReason:t.invalidUnitReason||o.invalidUnitReason}}if("battery"===o&&p){const t=Ee(e,d),o=Ee(e,c),r=t.isValid?Math.max(0,t.value):0,s=o.isValid?Math.max(0,o.value):0;return{power:r-s,inPower:r,outPower:s,isDual:!0,isConfigured:!0,soc:a,socPercent:n,amperage:i,isUnavailable:!!d&&t.isUnavailable&&!!c&&o.isUnavailable,isUnknown:t.isUnknown||o.isUnknown,isValid:t.isValid||o.isValid,rawUnit:t.unit||o.unit||"W",hasInvalidUnit:t.hasInvalidUnit||o.hasInvalidUnit,invalidUnitReason:t.invalidUnitReason||o.invalidUnitReason}}const h=Ee(e,t.entity);let m=h.value;return t.invert&&(m=-m),{power:m,inPower:m>=0?m:0,outPower:m<0?Math.abs(m):0,isDual:!1,isConfigured:h.isConfigured,soc:a,socPercent:n,amperage:i,isUnavailable:h.isUnavailable,isUnknown:h.isUnknown,isValid:h.isValid,rawUnit:h.unit||"W",hasInvalidUnit:h.hasInvalidUnit,invalidUnitReason:h.invalidUnitReason}}const De={red:[244,67,54],pink:[233,30,99],purple:[156,39,176],"deep-purple":[103,58,183],indigo:[63,81,181],blue:[33,150,243],"light-blue":[3,169,244],cyan:[0,188,212],teal:[0,150,136],green:[76,175,80],"light-green":[139,195,74],lime:[205,220,57],yellow:[255,235,59],amber:[255,193,7],orange:[255,152,0],"deep-orange":[255,87,34],brown:[121,85,72],grey:[158,158,158],gray:[158,158,158],"blue-grey":[96,125,139],"blue-gray":[96,125,139],black:[0,0,0],white:[255,255,255]},Te={primary:"--rgb-primary-color",accent:"--rgb-accent-color",disabled:"--rgb-disabled-color",state:"--rgb-state-default-color"},Le={primary:[3,169,244],accent:[255,152,0],disabled:[189,189,189],state:[68,115,158]},Ne={gray:"grey","blue-gray":"blue-grey"};function Ue(e){return Math.max(0,Math.min(255,Math.round(e)))}function Oe(e,t){if(null==e)return t;if(Array.isArray(e))return e.length>=3?`rgb(${Ue(e[0])}, ${Ue(e[1])}, ${Ue(e[2])})`:t;if("string"!=typeof e)return t;let o=e.trim();if(""===o)return t;if(o.startsWith("#")||o.startsWith("rgb(")||o.startsWith("rgba(")||o.startsWith("hsl(")||o.startsWith("hsla(")||o.startsWith("var("))return o;if(o in Ne&&(o=Ne[o]),o in Te){const e=Le[o]||[128,128,128];return`rgb(var(${Te[o]}, ${e[0]}, ${e[1]}, ${e[2]}))`}if(o in De){const[e,t,i]=De[o];return`rgb(var(--rgb-${o}, ${e}, ${t}, ${i}))`}return o}function Re(e,t,o){if(null==e)return t;if(Array.isArray(e))return e.length>=3?[Ue(e[0]),Ue(e[1]),Ue(e[2])]:t;if("string"!=typeof e)return t;const i=e.trim();if(""===i)return t;if(i.startsWith("#")){const e=i.slice(1);if(3===e.length||4===e.length){const t=parseInt(e[0]+e[0],16),o=parseInt(e[1]+e[1],16),i=parseInt(e[2]+e[2],16);if(!isNaN(t)&&!isNaN(o)&&!isNaN(i))return[t,o,i]}else if(e.length>=6){const t=parseInt(e.substring(0,2),16),o=parseInt(e.substring(2,4),16),i=parseInt(e.substring(4,6),16);if(!isNaN(t)&&!isNaN(o)&&!isNaN(i))return[t,o,i]}return t}if(i.startsWith("rgb(")||i.startsWith("rgba(")){const e=i.match(/rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)/);if(e)return[Ue(parseFloat(e[1])),Ue(parseFloat(e[2])),Ue(parseFloat(e[3]))];const t=i.match(/rgba?\(\s*(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)/);if(t)return[Ue(parseFloat(t[1])),Ue(parseFloat(t[2])),Ue(parseFloat(t[3]))]}const a=Ne[i]||i,n=a in Te,r=a in De;if(n||r){if(r)return De[i];if(n)return Le[i]||t}if(i.startsWith("var(")){const e=i.indexOf(",");if(-1!==e&&i.endsWith(")")){return Re(i.slice(e+1,-1).trim(),t)}}return t}function Be(e,t="sqrt"){const o=Math.max(0,Math.min(1,e));switch(t){case"linear":return o;case"sqrt":default:return Math.sqrt(o);case"log":return Math.log(1+9*o)/Math.LN10}}function We(e,t={}){const o=t.display_zero_tolerance??1,i=t.stroke_mode??"watt",a=t.speed_mode??"absolute",n=t.scale_curve??"sqrt",r=t.min_stroke??2,s=t.max_stroke??7,l=t.scale_min??50,d=t.scale_max??6e3,c=t.min_duration??.8,_=t.max_duration??5.5,p=t.residual_handling??"clamp",h=t.residual_absorb_target??"grid",m=Math.max(0,e.solar||0),u=Math.max(0,e.grid||0),g=Math.max(0,-(e.grid||0)),f=Math.max(0,e.battery||0),b=Math.max(0,-(e.battery||0));let y;y=void 0!==e.home&&null!==e.home&&Number.isFinite(e.home)?Math.max(0,e.home):Math.max(0,m+u+b-g-f);let v=Math.min(m,y),x=m-v,w=y-v,$=Math.min(x,f),z=x-$,C=f-$,S=Math.min(z,g),A=Math.min(b,w),k=w-A,M=b-A,F=Math.min(M,Math.max(0,g-S)),P=Math.min(u,k),E=Math.min(Math.max(0,u-P),C),I=0;const D=y-(v+A+P);Math.abs(D)>o&&("clamp"===p?u>0||P>0?P=Math.max(0,P+D):A>0?A=Math.max(0,A+D):v=Math.max(0,v+D):"absorb"===p?"battery"===h&&(b>0||A>0)?A=Math.max(0,A+D):P=Math.max(0,P+D):I=Math.abs(D));let T=0;e.devices.forEach(e=>{!1!==e.include_in_home&&(T+=Math.max(0,e.power||0))});const L=Math.max(0,y-T),N=T>y&&y>0,U=N?T-y:0,O=Oe(t.solar?.color,ye),R=Oe(t.grid?.color,ve),B=xe,W=Oe(t.battery?.color_charge||t.battery?.color,we),q=Oe(t.battery?.color_discharge,$e),V=Oe(t.home?.color,ze),H=!1!==t.solar?.display_zero,G=!1!==t.battery?.display_zero,j=!1!==t.grid?.display_zero,Z=[];(H||v>o)&&Z.push({id:"solar-home",from:"solar",to:"home",value:v,color:O,targetColor:V,gradientId:"glow-solar"}),(H||$>o)&&Z.push({id:"solar-battery",from:"solar",to:"battery",value:$,color:O,targetColor:W,gradientId:"glow-solar"}),(H||S>o)&&Z.push({id:"solar-grid",from:"solar",to:"grid",value:S,color:B,targetColor:B,gradientId:"glow-grid-export"}),(G||A>o)&&Z.push({id:"battery-home",from:"battery",to:"home",value:A,color:q,targetColor:V,gradientId:"glow-battery-discharge"}),(G||F>o)&&Z.push({id:"battery-grid",from:"battery",to:"grid",value:F,color:q,targetColor:B,gradientId:"glow-battery-discharge"});const Y=Z.some(e=>"home"===e.to);(j||P>o||!Y)&&Z.push({id:"grid-home",from:"grid",to:"home",value:P,color:R,targetColor:V,gradientId:"glow-grid-import"}),(j||E>o)&&Z.push({id:"grid-battery",from:"grid",to:"battery",value:E,color:R,targetColor:W,gradientId:"glow-grid-import"}),e.devices.forEach(e=>{const t=Math.max(0,e.power||0);if(!1===e.display_zero&&t<=o)return;const i=Oe(e.color,"var(--energy-device-color, #00bcd4)");Z.push({id:`home-${e.id}`,from:"home",to:e.id,value:t,color:i,targetColor:i,gradientId:"glow-device",ampere:e.ampere,isDevice:!0})});const X=Z.reduce((e,t)=>e+(t.value>o?t.value:0),0),K=Z.map(e=>{const t=e.value>o,p=function(e,t="watt",o="sqrt",i=2,a=7,n=50,r=6e3,s,l=1){if(e<=l)return 1.5;if("fixed"===t)return(i+a)/2;if("ampere"===t){if(null==s)return i;const e=.5;return i+Be((s-e)/(25-e),o)*(a-i)}return i+Be((e-n)/(r-n),o)*(a-i)}(e.value,i,n,r,s,l,d,e.ampere,o),h=function(e,t="absolute",o="sqrt",i=.8,a=5.5,n=50,r=5e3,s=0,l=1){if(e<=l)return a;let d=0;return d="relative"===t&&s>0?e/s:(e-n)/(r-n),a-Be(d,o)*(a-i)}(e.value,a,n,c,_,l,d,X,o);return{id:e.id,from:e.from,to:e.to,value:e.value,ampere:e.ampere,color:e.color,targetColor:e.targetColor,gradientId:e.gradientId,isDevice:e.isDevice,strokeWidth:p,duration:h,isActive:t}});return{arcs:K,homeConsumption:y,untrackedDevicesPower:L,unbalancedPower:I,totalActivePower:X,devicesSumInHome:T,isHomeOverloaded:N,excessDevicesPower:U}}function qe(e,t,o){return{x:e.x+Math.cos(o)*t,y:e.y+Math.sin(o)*t}}function Ve(e,t,o=2){if(!Number.isFinite(e))return"0";const i=Number.isFinite(o)?Math.max(0,Math.min(20,Math.floor(o))):2;if(t?.locale)try{return new Intl.NumberFormat(t.locale.language||"en",{minimumFractionDigits:0,maximumFractionDigits:i}).format(e)}catch{}try{return e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:i})}catch{return e.toFixed(i)}}function He(e,t=2,o=1e3,i){if(!Number.isFinite(e))return{value:"0",unit:"W",full:"0 W"};const a=Math.abs(e),n=Number.isFinite(t)?Math.max(0,Math.min(20,Math.floor(t))):2,r=Number.isFinite(o)&&o>0?o:1e3;if(a>=1e6){const t=Ve(e/1e6,i,n);return{value:t,unit:"MW",full:`${t} MW`}}if(a>=r){const t=Ve(e/1e3,i,n);return{value:t,unit:"kW",full:`${t} kW`}}const s=Ve(Math.round(e),i,0);return{value:s,unit:"W",full:`${s} W`}}function Ge(e,t=1,o){if(!Number.isFinite(e))return{value:"0",unit:"A",full:"0 A"};const i=Ve(e,o,Number.isFinite(t)?Math.max(0,Math.min(20,Math.floor(t))):1);return{value:i,unit:"A",full:`${i} A`}}const je={viewBox:{width:620,height:410},nodes:{solar:{x:175,y:65,radius:36,defaultIcon:Ce,defaultColor:ye},grid:{x:65,y:200,radius:36,defaultIcon:Se,defaultColor:ve},battery:{x:175,y:335,radius:36,defaultIcon:Ae,defaultColor:we},home:{x:285,y:200,radius:38,defaultIcon:ke,defaultColor:ze}},devicesHorizontal:{rowTopY:80,rowBottomY:320,startX:410}},Ze={viewBox:{width:440,height:560},nodes:{solar:{x:220,y:60,radius:36,defaultIcon:Ce,defaultColor:ye},grid:{x:85,y:175,radius:36,defaultIcon:Se,defaultColor:ve},battery:{x:355,y:175,radius:36,defaultIcon:Ae,defaultColor:we},home:{x:220,y:290,radius:38,defaultIcon:ke,defaultColor:ze}},devicesVertical:{colLeftX:95,colRightX:345,startY:420}};function Ye(e,t=1,o){const[i,a,n]=Re(e,[255,255,255]),r=Math.max(0,Math.min(1,t));return(.299*(i*r+30*(1-r))+.587*(a*r+41*(1-r))+.114*(n*r+59*(1-r)))/255>.58?"#0f172a":"#ffffff"}var Xe,Ke;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Xe||(Xe={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ke||(Ke={}));const Qe=e=>{((e,t,o,i)=>{i=i||{},o=null==o?{}:o;const a=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});a.detail=o,e.dispatchEvent(a)})(window,"haptic",e)};function Je(e,t,o,i){if(!t)return;const a=o.switchEntityId;if("toggle"===i){if(!a)return;try{Qe("light")}catch(e){}const e=a.split(".")[0]||"homeassistant";return void t.callService(e,"toggle",{entity_id:a})}let n,r="auto";if("hold"===i)n=o.holdAction,r=o.holdMoreInfoTarget||"auto",n||(n=o.switchEntityId?{action:"toggle"}:{action:"more-info"});else if("double_tap"===i){if(n=o.doubleTapAction,r=o.doubleTapMoreInfoTarget||"auto",!n||"none"===n.action)return}else n=o.tapAction||{action:"more-info"},r=o.tapMoreInfoTarget||"auto";if(!n||"none"===n.action)return;const s=n.action||"none";try{if("toggle"===s){const e=n.target?.entity_id||n.entity||a;if(!e)return;try{Qe("medium")}catch(e){}const o=e.split(".")[0]||"homeassistant";t.callService(o,"toggle",{entity_id:e})}else if("more-info-switch"===s||"more-info-device"===s){try{Qe("selection")}catch(e){}const t=o.switchEntityId||o.entityId;t&&e.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}else if("more-info-sensor"===s){try{Qe("selection")}catch(e){}const t=o.entityId||o.switchEntityId;t&&e.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}else if("more-info"===s){try{Qe("selection")}catch(e){}let t;const i=n.target?.entity_id||n.entity;t=i||("sensor"===r?o.entityId||o.switchEntityId:o.switchEntityId||o.entityId),t&&e.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}else if("call-service"===s||"perform-action"===s){try{Qe("success")}catch(e){}const e=n.service||n.perform_action;if(e){const[o,i]=e.split(".",2);t.callService(o,i,n.service_data||n.data||{},n.target)}}else if("navigate"===s){const t=n.navigation_path;if(t){try{Qe("selection")}catch(e){}window.history.pushState(null,"",t),e.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0}))}}else if("url"===s){const e=n.url_path;if(e){try{Qe("selection")}catch(e){}window.open(e,"_blank")}}else if("assist"===s){try{Qe("selection")}catch(e){}e.dispatchEvent(new CustomEvent("show-dialog",{bubbles:!0,composed:!0,detail:{dialogTag:"ha-voice-command-dialog",dialogImport:()=>customElements.get("ha-voice-command-dialog")?void 0:customElements.whenDefined("ha-voice-command-dialog"),dialogParams:{pipeline_id:n.pipeline_id,start_listening:n.start_listening}}}))}else if("fire-dom-event"===s){try{Qe("selection")}catch(e){}e.dispatchEvent(new CustomEvent("ll-custom",{bubbles:!0,composed:!0,detail:n}))}}catch(e){console.warn("[SimplePowerFlow] Action execution failed:",e)}}class et{constructor(e){this._lastTapTime=0,this._startX=0,this._startY=0,this._isHoldTriggered=!1,this._onAction=e}handlePointerDown(e,t){e.target?.closest?.(".node-badge-group")||"mouse"===e.pointerType&&0!==e.button||(this._startX=e.clientX,this._startY=e.clientY,this._isHoldTriggered=!1,this._currentNode=t,e.preventDefault(),clearTimeout(this._holdTimer),this._holdTimer=setTimeout(()=>{this._isHoldTriggered=!0,this._onAction(t,"hold")},500))}handlePointerMove(e){const t=e.clientX-this._startX,o=e.clientY-this._startY;Math.sqrt(t*t+o*o)>12&&clearTimeout(this._holdTimer)}handlePointerUp(e,t){if(clearTimeout(this._holdTimer),e.target?.closest?.(".node-badge-group"))return void this.handlePointerCancel();if(this._isHoldTriggered)return void(this._isHoldTriggered=!1);const o=e.clientX-this._startX,i=e.clientY-this._startY;if(Math.sqrt(o*o+i*i)>12)return;const a=Date.now(),n=this._lastTappedNodeId===t.id&&a-this._lastTapTime<350,r=Boolean(t.doubleTapAction&&"none"!==t.doubleTapAction.action);n&&r?(clearTimeout(this._tapTimer),this._lastTapTime=0,this._lastTappedNodeId=void 0,this._onAction(t,"double_tap")):(this._lastTapTime=a,this._lastTappedNodeId=t.id,r?(clearTimeout(this._tapTimer),this._tapTimer=setTimeout(()=>{this._onAction(t,"tap"),this._lastTapTime=0,this._lastTappedNodeId=void 0},260)):this._onAction(t,"tap"))}handlePointerCancel(){clearTimeout(this._holdTimer),clearTimeout(this._tapTimer),this._isHoldTriggered=!1,this._currentNode=void 0}}function tt(e){if(!e||"object"!=typeof e)return e;const t={...e,...e.badge||{},...e.label_chip||{},...e.actions||{}};return delete t.badge,delete t.label_chip,delete t.actions,t}function ot(e){if(!e)return{};const t=tt(e);return{...t,badge:{badge_enabled:t.badge_enabled,badge_style:t.badge_style,badge_position:t.badge_position,badge_size:t.badge_size,badge_color_on:t.badge_color_on,badge_color_off:t.badge_color_off,badge_pulse:t.badge_pulse,badge_quick_toggle:t.badge_quick_toggle,badge_tap_behavior:t.badge_tap_behavior},label_chip:{label_font_size:t.label_font_size,label_spacing_below_node:t.label_spacing_below_node,label_chip_enabled:t.label_chip_enabled,label_chip_opacity:t.label_chip_opacity,label_chip_padding_x:t.label_chip_padding_x,label_chip_padding_y:t.label_chip_padding_y,label_border_radius:t.label_border_radius,label_border_width:t.label_border_width,label_color:t.label_color,label_color_mode:t.label_color_mode},actions:{tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action,tap_more_info_target:t.tap_more_info_target,hold_more_info_target:t.hold_more_info_target,double_tap_more_info_target:t.double_tap_more_info_target}}}function it(e){if(!e)return{};const{badge:t,label_chip:o,actions:i,...a}=e;return{...a,...t||{},...o||{},...i||{}}}function at(e,t){if(!e&&!t)return{};const o=e&&"object"==typeof e?e:{},i=t&&"object"==typeof t?t:{},a={...o,...o.node_dimensions||{},...o.shadows||{},...o.typography||{},...o.labels||{},...o.label_chip||{},...o.home_ring||{},...o.cables_and_bus||{},...o.wires||{},...o.particle_dynamics||{},...o.particles||{},...o.energy_mix||{},...o.bus_routing||{},...o.layout_spacing||{}};return void 0!==i.stroke_mode&&void 0===a.stroke_mode&&(a.stroke_mode=i.stroke_mode),void 0!==i.speed_mode&&void 0===a.speed_mode&&(a.speed_mode=i.speed_mode),void 0!==i.min_stroke&&void 0===a.min_stroke&&(a.min_stroke=i.min_stroke),void 0!==i.max_stroke&&void 0===a.max_stroke&&(a.max_stroke=i.max_stroke),void 0!==i.min_duration&&void 0===a.min_duration&&(a.min_duration=i.min_duration),void 0!==i.max_duration&&void 0===a.max_duration&&(a.max_duration=i.max_duration),void 0!==i.max_total_particles&&void 0===a.max_total_particles&&(a.max_total_particles=i.max_total_particles),void 0!==i.normalize_speed_by_length&&void 0===a.normalize_speed_by_length&&(a.normalize_speed_by_length=i.normalize_speed_by_length),delete a.node_dimensions,delete a.shadows,delete a.typography,delete a.labels,delete a.label_chip,delete a.home_ring,delete a.cables_and_bus,delete a.wires,delete a.particle_dynamics,delete a.particles,delete a.energy_mix,delete a.bus_routing,delete a.layout_spacing,"curved"===a.line_routing_mode?a.line_routing_mode="bezier_curved":"orthogonal"===a.line_routing_mode&&(a.line_routing_mode="orthogonal_bus"),"fixed"===a.home_glow_mode&&(a.home_glow_mode="custom"),a}function nt(e){const t=e||{};return{meteor_trail:{...fe.meteor_trail,...t.meteor_trail||{}},living_icons:{...fe.living_icons,...t.living_icons||{}},glassmorphism:{...fe.glassmorphism,...t.glassmorphism||{}},impact_ripples:{...fe.impact_ripples,...t.impact_ripples||{}}}}var rt={title:"Power Flow",solar:"Solar",grid:"Grid",battery:"Battery",home:"Home",production:"Production",consumption:"Consumption",import:"Import",export:"Export",charge:"Charge",discharge:"Discharge",inactive:"Inactive",active:"Active",unbalanced:"Unbalance",not_tracked:"Untracked"},st={device_default_name:"Device",section:{general:"General",nodes:"Primary Nodes",solar:"Solar Node",grid:"Grid Power Node",battery:"Battery & Storage Node",home:"Home & Consumption Node",devices:"Individual Devices & Loads",styles:"Style, Dimensions & Typography",effects:"Visual Effects & Animations ✨",advanced:"Advanced & Calculation Engine",node_dimensions:"Node Radii & Dimensions",shadows:"Shadows & 3D Depth",typography:"Typography & Spacing",labels:"Node Labels & Chip/Tag Style",cables_and_bus:"Wire Geometry & Bus Routing",wires:"Wire Thickness & Zero-Flow Lines",particle_dynamics:"Particle Speed & Dynamics",particles:"Particle Rendering & Density",home_ring:"Home Multi-Color Mix Ring",meteor_trail:"Meteor Comet Particles (Meteor Trail)",living_icons:"Living & Animated Icons (Living Icons)",glassmorphism:"3D Glassmorphism & Neon Core",impact_ripples:"Impact Shockwaves (Impact Ripples)",badge:"Status Badge & Switch Control",secondary_info:"Secondary Information",label_chip:"Label & Chip/Tag Background",actions:"Gestures & Tap Actions"},title:"Card Title",solar:"Solar Node",grid:"Grid Node",battery:"Battery Node",home:"Home Node",devices:"Individual Devices",add_device:"Add Device",remove_device:"Remove Device",move_up:"Move up",move_down:"Move down",device_name:"Device Name",device_icon:"Icon",device_color:"Color",id:"Unique Device ID",name:"Custom Name",icon:"Icon",color:"Primary Color",color_charge:"Charge Color",color_discharge:"Discharge Color",color_idle:"Idle Color (Standby)",use_idle_color:"Enable Dedicated Color for Idle Battery",entity:"Power Entity (Watts)",entity_import:"Grid Import Entity",entity_export:"Grid Export Entity",entity_charge:"Battery Charge Entity",entity_discharge:"Battery Discharge Entity",entity_in:"Input Entity (Legacy)",entity_out:"Output Entity (Legacy)",entity_amperage:"Current Entity (Amperes)",state_of_charge:"State of Charge Entity (SoC %)",switch_entity:"Switch / Control Entity",invert:"Invert Sign Convention (+/-)",include_in_home:"Include in Home Total",display_zero:"Show Zero-Flow Line",display_zero_tolerance:"Zero-Flow Tolerance (W)",show_label:"Show Name / Label",stroke_mode:"Line Thickness Mode",speed_mode:"Particle Speed Mode",layout_mode:"Visual Layout Mode",auto_layout_breakpoint:"Mobile Layout Threshold (Breakpoint px)",min_duration:"Minimum Particle Duration (s)",max_duration:"Maximum Particle Duration (s)",normalize_speed_by_length:"Normalize Speed by Wire Length",min_stroke:"Minimum Line Width (px)",max_stroke:"Maximum Line Width (px)",scale_min:"Scale Minimum Power (W)",scale_max:"Scale Maximum Power (W)",scale_curve:"Power Scaling Curve",smoothing_factor:"Smoothing Factor (EMA)",max_total_particles:"Max Active Particles on Screen",decimals:"Number of Decimal Places",w_to_kw_threshold:"Threshold from Watts to kW",residual_handling:"Energy Balance Residual Handling",residual_absorb_target:"Residual Absorb Target",node_radius_primary:"Primary Node Radius (px)",node_radius_secondary:"Secondary Node Radius (px)",node_border_width:"Circle Border Width (px)",icon_size_primary:"Primary Icon Size (px)",icon_size_secondary:"Secondary Icon Size (px)",spacing_text_above_icon:"Space Above Icon (px)",spacing_text_below_icon:"Space Below Icon (px)",spacing_horizontal:"Grid Horizontal Spacing (px)",spacing_vertical:"Grid Vertical Spacing (px)",font_size_primary:"Primary Value Font Size (px)",font_size_secondary:"Secondary Value Font Size (px)",font_size_unit:"Unit Font Size W/kW/A (px)",font_size_extra:"Directional Flow Font Size (px)",font_size_sub:"Subtext & Secondary Info Font Size (px)",font_size_value:"Power Value Font Size (px)",font_size_label:"Node Label Font Size (px)",font_size_directional:"Directional Flow Font Size (px)",font_size_top_info:"Top Info Font Size SoC/Amperes (px)",spacing_label_below_node:"Label Gap Below Circle (px)",show_labels:"Show Global Labels",label_chip_enabled:"Enable Chip / Tag Style Background",label_chip_opacity:"Chip Background Opacity",label_chip_padding_x:"Chip Horizontal Padding (px)",label_chip_padding_y:"Chip Vertical Padding (px)",label_border_radius:"Chip Border Radius (px)",label_border_width:"Chip Border Width (px)",label_color_mode:"Label Text Color Mode",label_color:"Custom Label Text Color",line_routing_mode:"Device Path Routing Mode",bus_lane_spacing:"Parallel Bus Lane Spacing (px)",bus_corner_radius:"90° Bus Corner Radius (px)",invert_bus_lane_order:"Invert Bus Lane Order",particles_per_arc:"Particles per Active Line",particle_size_offset:"Particle Extra Radius (px)",particle_inner_glow:"White Bright Core (Inner Glow)",particle_soft_edge:"Soft Radial Blurred Edge",inactive_wire_opacity:"Zero-Flow Wire Opacity",inactive_wire_style:"Zero-Flow Line Style",hover_glow_radius:"Hover Glow Radius (px)",show_node_shadows:"Enable Node Shadows",node_shadow_color:"Custom Shadow Color",node_shadow_blur:"Node Shadow Blur (px)",node_shadow_spread:"Node Shadow Spread (px)",node_shadow_opacity:"Node Shadow Opacity",node_shadow_offset_y:"Node Shadow Vertical Offset (px)",show_home_mix_ring:"Show Multi-Color Home Mix Ring",home_glow_mode:"Home Hover Glow Color",enabled:"Enable Effect",tail_length:"Comet Tail Length",glow_intensity:"Tail Glow Intensity",battery_type:"Battery Visual Style",battery_animated:"Continuous Wave Animation",load_animation:"Load Icon Animation",intensity:"Glass Reflection Intensity (%)",neon_core:"Concentric Inner Glowing Ring (Neon Core)",ripple_size:"Shockwave Size (px)",ripple_color:"Custom Shockwave Color",meteor_trail_enabled:"Enable Meteor Comet Trails",meteor_trail_tail_length:"Tail Length (Normalized)",meteor_trail_glow_intensity:"Tail Glow Intensity",living_icons_enabled:"Enable Living Icons & Battery Wave",living_icons_battery_type:"Battery Visual Style",living_icons_battery_animated:"Continuous Battery Wave Animation",living_icons_load_animation:"Active Load Icon Animation",glassmorphism_enabled:"Enable 3D Glassmorphism & Neon Ring",glassmorphism_intensity:"Glass Glare Intensity (%)",glassmorphism_neon_core:"Inner Glowing Ring (Neon Core)",impact_ripples_enabled:"Enable Arrival Shockwave Ripples",impact_ripples_size:"Shockwave Size (px)",impact_ripples_color:"Custom Shockwave Color",badge_enabled:"Show Status Notification Badge",badge_style:"Badge Visual Style",badge_position:"Badge Anchor Position",badge_size:"Badge Size (px)",badge_color_on:"Active State Color (ON)",badge_color_off:"Inactive State Color (OFF)",badge_pulse:"Pulse Animation when Active",badge_quick_toggle:"Quick Tap to Toggle Switch",badge_tap_behavior:"Badge Tap Behavior",secondary_info_entity:"Secondary Info Entity",secondary_info_unit:"Custom Unit",secondary_info_decimals:"Number of Decimals",secondary_info_template:"Formatting Template",unit:"Custom Unit of Measurement",tap_action:"Single Tap Action",hold_action:"Hold Action",double_tap_action:"Double Tap Action",tap_more_info_target:"More Info Target (Tap)",hold_more_info_target:"More Info Target (Hold)",double_tap_more_info_target:"More Info Target (Double Tap)",helper:{title:"Custom title displayed in the card header.",layout_mode:"Choose visual layout: 'Auto' adapts to screen width, 'Horizontal' lines up nodes, 'Vertical' arranges in two compact columns.",stroke_mode:"Determines whether flow line thickness scales based on Power (Watts), Current (Amperes), or stays fixed.",speed_mode:"Particle animation speed can scale with absolute power in Watts or relative percentage of total flow.",auto_layout_breakpoint:"Card width in pixels below which the responsive vertical layout activates (default: 520px).",id:"Unique internal identifier for the device load (alphanumeric, dash, or underscore).",name:"Custom display name shown below the node circle.",icon:"Material Design icon rendered inside the circle (e.g. mdi:solar-power, mdi:heat-pump).",entity:"Primary power sensor entity in Watts or kW for this node.",entity_import:"Sensor for power imported from the grid (positive Watts).",entity_export:"Sensor for power exported to the grid (positive Watts).",entity_charge:"Sensor for power absorbed by the battery during charging (positive Watts).",entity_discharge:"Sensor for power supplied by the battery during discharging (positive Watts).",state_of_charge:"Battery State of Charge sensor (SoC 0% to 100%).",entity_amperage:"Optional current sensor in Amperes shown above the center icon.",color:"Primary color for node circle, glowing particles, and attached flow lines.",color_charge:"Line and particle color during battery charging.",color_discharge:"Line and particle color during battery discharging.",use_idle_color:"Apply a dedicated color when the battery is in standby at 0 W.",color_idle:"Color applied to the battery node circle when idle (0 W).",invert:"Invert sign convention: turns positive numbers to negative and vice versa.",switch_entity:"Switch/light/relay entity associated with the node for toggle control.",include_in_home:"When disabled, this device's consumption is excluded from the calculated Home total.",display_zero:"Keep the connection line visible even when flow power is zero.",display_zero_tolerance:"Threshold in Watts below which power flow is considered zero.",show_label:"Show or hide the text label below the node circle.",node_radius_primary:"Radius in pixels for primary circles (Solar, Grid, Battery, Home; default: 36px).",node_radius_secondary:"Radius in pixels for secondary device circles (default: 28px).",icon_size_primary:"Icon size in pixels for primary nodes (default: 18px).",icon_size_secondary:"Icon size in pixels for secondary devices (default: 16px).",node_border_width:"Outer circle border stroke width in pixels (default: 2.5px).",show_node_shadows:"Apply a soft drop shadow beneath node circles for 3D depth.",node_shadow_color:"Custom shadow color for node circles (leave blank for standard dark shadow).",node_shadow_blur:"Shadow blur radius in pixels (default: 10px).",node_shadow_spread:"Shadow spread expansion in pixels.",font_size_primary:"Power value font size for primary nodes (default: 10px).",font_size_secondary:"Power value font size for secondary devices (default: 9px).",font_size_unit:"Font size for measurement units W/kW/A (default: 8px).",font_size_extra:"Font size for directional arrows and dual charge/import text (default: 8.5px).",font_size_sub:"Font size for untracked consumption and secondary information (default: 9px).",font_size_label:"Font size for node description labels (default: 10px).",font_size_top_info:"Font size for SoC % and Amperage text above the icon (default: 8px).",spacing_label_below_node:"Vertical distance between the node circle and its label (default: 14px).",show_labels:"Globally show or hide labels for all nodes on the card.",label_chip_enabled:"Render a rounded chip/tag background around the label text.",label_chip_opacity:"Chip background opacity tinted with the node color (0.05 to 1.0; default: 0.18).",label_chip_padding_x:"Horizontal internal padding in pixels for the chip (default: 8px).",label_chip_padding_y:"Vertical internal padding in pixels for the chip (default: 3.5px).",label_border_radius:"Corner radius for the rounded chip box (default: 6px).",label_border_width:"Outer stroke border width of the chip (default: 1px).",label_color_mode:"Auto contrast dynamically selects pure white or dark black for guaranteed legibility.",label_color:"Specific text color when label color mode is set to 'Custom'.",inactive_wire_opacity:"Opacity of flow wires when zero energy is transferring (default: 0.35).",inactive_wire_style:"Choose whether zero-flow lines are dashed, solid, or completely hidden.",hover_glow_radius:"Radius of radiant glow halo when hovering a node (default: 10px).",show_home_mix_ring:"Show a multi-color ring around Home with segments proportional to Solar, Grid, and Battery.",home_glow_mode:"On hover, illuminate Home with the predominant power source color or fixed Home color.",line_routing_mode:"Direct Bezier curved arcs or an orthogonal central bus channel for multiple device loads.",bus_lane_spacing:"Distance between parallel load lanes in the central bus channel (default: 8px).",bus_corner_radius:"Corner radius for 90° smooth bends in the central bus channel (default: 20px).",invert_bus_lane_order:"Inverts the order of load lanes in the central channel (innermost vs outermost).",particles_per_arc:"Number of light particles flowing along each active wire (default: 3).",particle_size_offset:"Extra radius offset added to light particles (default: 1.8px).",particle_inner_glow:"Adds a bright white high-density core to each particle.",particle_soft_edge:"Applies a soft blurred radial falloff to particle edges for realistic lighting.",spacing_horizontal:"Horizontal pixel spacing between node columns (default: 120px).",spacing_vertical:"Vertical pixel spacing between node rows (default: 85px).",spacing_text_above_icon:"Gap in pixels between top text (SoC/Amps) and the center icon (default: 4px).",spacing_text_below_icon:"Gap in pixels between center icon and the power value (default: 4px).",meteor_trail:"Luminescent comet tail trailing behind flowing particles.",tail_length:"Length of the comet tail along the wire path (0.02 to 0.25).",glow_intensity:"Glow brightness intensity and thickness multiplier for the comet tail.",living_icons:"Living animations for device icons and dynamic battery visuals (liquid waves or gradient).",battery_type:"Battery visual style: 'Gradient' (radial energy glow) or 'Liquid' (animated wave clipped to circle).",battery_animated:"Maintains continuous liquid wave oscillation in the battery circle.",load_animation:"Animation applied to active device icons (spinning rotation or energy pulse).",glassmorphism:"3D convex glass lens glare filter and glowing Neon Core ring.",intensity:"Intensity percentage of glass glare reflections and neon luminescence.",neon_core:"Shows a concentric glowing inner Neon Core ring inside the node circle.",impact_ripples:"Circular shockwave ripples that expand when a particle arrives at its destination node.",ripple_size:"Maximum expansion radius of the shockwave ripple in pixels (default: 18px).",ripple_color:"Custom shockwave ripple color (leave blank to match arriving particle color).",badge_enabled:"Shows a circular badge on the node corner indicating switch state (ON/OFF) or status.",badge_style:"Badge style: minimal circular LED dot, mini-power icon, or 'ON'/'OFF' text.",badge_position:"Corner anchor position of the badge around the node circle.",badge_size:"Diameter of the notification badge in pixels (default: 10px).",badge_color_on:"Badge color when the device is turned ON or active.",badge_color_off:"Badge color when the device is turned OFF or inactive.",badge_pulse:"Enables continuous energetic pulsing on the badge while active.",badge_quick_toggle:"Enables tapping the badge directly to quickly toggle the switch ON or OFF.",badge_tap_behavior:"Behavior when tapping the status badge.",secondary_info:"Displays supplementary text below the node (e.g. temperature, voltage, daily energy).",unit:"Custom unit of measurement appended to the secondary information value.",decimals:"Number of decimal places shown for power values (default: 2).",w_to_kw_threshold:"Threshold in Watts above which power is automatically formatted in kW (default: 1000 W).",scale_curve:"Mathematical curve used to map Watts to wire thickness and speed: 'Square root' provides the best dynamic range.",scale_min:"Power level below which speed and thickness remain at minimum (default: 50 W).",scale_max:"Power level at which wire thickness and particle speed reach maximum (default: 6000 W).",smoothing_factor:"Exponential moving average (EMA) factor: lower values produce smoother transitions (default: 0.35).",max_total_particles:"Maximum particles active on screen simultaneously to maintain 60 FPS performance (default: 30).",min_stroke:"Minimum flow wire stroke width in pixels (default: 2.0px).",max_stroke:"Maximum flow wire stroke width at full load in pixels (default: 7.0px).",min_duration:"Minimum travel time in seconds for particles at peak power (faster; default: 0.8s).",max_duration:"Maximum travel time in seconds for particles at minimum power (slower; default: 5.5s).",normalize_speed_by_length:"When enabled, normalizes physical particle speed in pixels per second based on the wire path length, preventing particles from flying faster across longer lines.",residual_handling:"Method for balancing mathematical discrepancies: 'Clamp' balances on the primary arc, 'Absorb' routes to grid/battery, 'Unbalanced' displays residual.",residual_absorb_target:"Designated node to absorb residual balance discrepancies when set to 'Absorb'."},option:{layout_mode:{auto:"Automatic (Adaptive to screen width)",horizontal:"Horizontal (Linear grid)",vertical:"Vertical (Compact 2-Column)"},stroke_mode:{watt:"Dynamic by Power (Watts)",fixed:"Uniform Fixed Width",ampere:"Dynamic by Current (Amperes)"},speed_mode:{absolute:"Absolute Speed (Actual Watts)",relative:"Relative Speed (% of total power)"},scale_curve:{sqrt:"Square Root (Sqrt - Recommended for visual dynamics)",linear:"Linear Proportional",log:"Logarithmic (Wide dynamic range)"},residual_handling:{clamp:"Clamp (Zero balance on primary arc)",absorb:"Absorb (Route to designated target)",unbalanced:"Unbalance (Display residual difference)"},residual_absorb_target:{grid:"Electrical Grid (Grid)",battery:"Battery Storage (Battery)"},badge_style:{dot:"Minimal Circular LED Dot",icon:"Mini Power Icon (ON / OFF)",text:"Micro-Tag (ON / OFF)"},badge_position:{top_right:"Top Right (Top-Right)",top_left:"Top Left (Top-Left)",bottom_right:"Bottom Right (Bottom-Right)",bottom_left:"Bottom Left (Bottom-Left)"},badge_tap_behavior:{auto:"Automatic (Detects switch or sensor)",toggle:"Toggle Switch State (ON / OFF)","more-info-switch":"Open Switch Control Dialog","more-info-sensor":"Open Power Sensor History Dialog","more-info":"Open General Details Dialog"},more_info_target:{auto:"Automatic (Switch if present, otherwise Sensor)",switch:"Switch Control Dialog",sensor:"Power Sensor History Dialog"},label_color_mode:{auto_contrast:"Optimal Smart Contrast (Auto B/W)",white:"Pure White (#ffffff)",black:"Dark Black (#0f172a)",match_entity:"Match Entity Color",secondary:"Standard Secondary Grey",custom:"Custom Color"},battery_type:{gradient:"Dynamic Radial Gradient (Energy Glow)",liquid:"Animated Liquid Water Level (Liquid Wave)"},load_animation:{rotate:"Continuous Rotation (Fan / Motor)",pulse:"Energy Pulse / Breathing",none:"None (Static Icons)"},line_routing_mode:{bezier_curved:"Direct Curved Arcs (Bezier)",orthogonal_bus:"Central Bus Channel (Smooth Orthogonal)"},inactive_wire_style:{dashed:"Dashed Line",solid:"Solid Line",hidden:"Completely Hidden"},home_glow_mode:{predominant:"Dynamic (Predominant active source color)",custom:"Fixed (Default Home color)"}},error:{invalid_range:"Invalid range: minimum value must be strictly less than maximum value.",duplicate_id:"Device ID must be unique.",invalid_id:"ID must start with a letter and contain only alphanumeric characters, dashes, or underscores.",reserved_id:"This ID is reserved by the system.",missing_entity:"At least one valid power entity is required."}},lt={missing_entity:"At least one valid power entity is required.",invalid_range:"Invalid range: minimum value must be strictly less than maximum value."},dt={card:rt,editor:st,errors:lt},ct={title:"Flusso Energetico",solar:"Solare",grid:"Rete",battery:"Batteria",home:"Casa",production:"Produzione",consumption:"Consumo",import:"Prelevata",export:"Immessa",charge:"Carica",discharge:"Scarica",inactive:"Inattivo",active:"Attivo",unbalanced:"Sbilanciamento",not_tracked:"Altri Consumi"},_t={device_default_name:"Dispositivo",section:{general:"Generale",nodes:"Nodi Principali",solar:"Nodo Solare",grid:"Nodo Rete Elettrica",battery:"Nodo Batteria & Accumulo",home:"Nodo Casa & Fabbisogno",devices:"Carichi Individuali & Dispositivi",styles:"Stile, Dimensioni & Tipografia",effects:"Effetti Visivi & Animazioni ✨",advanced:"Avanzate & Motore di Calcolo",node_dimensions:"Dimensioni Nodi & Cerchi",shadows:"Ombreggiatura & Profondità 3D",typography:"Tipografia & Spaziature Interne",labels:"Etichette Nodi & Stile Chip/Tag",cables_and_bus:"Geometria Cavi & Routing Bus",wires:"Spessore Cavi & Linee a Flusso Zero",particle_dynamics:"Dinamica & Velocità Particelle",particles:"Resa & Densità Particelle",home_ring:"Anello Multi-Colore Casa",meteor_trail:"Particelle a Cometa (Meteor Trail)",living_icons:"Icone Vive & Dinamiche (Living Icons)",glassmorphism:"Effetto Vetro 3D & Neon Core",impact_ripples:"Micro-Onde d'Urto (Impact Ripples)",badge:"Badge di Stato & Controllo Switch",secondary_info:"Informazioni Secondarie",label_chip:"Etichetta & Sfondo Chip/Tag",actions:"Gesti & Azioni Tocco"},title:"Titolo Card",solar:"Nodo Solare",grid:"Nodo Rete",battery:"Nodo Batteria",home:"Nodo Casa",devices:"Carichi Individuali",add_device:"Aggiungi Dispositivo",remove_device:"Rimuovi Dispositivo",move_up:"Sposta su",move_down:"Sposta giù",device_name:"Nome Dispositivo",device_icon:"Icona",device_color:"Colore",id:"Identificativo ID Dispositivo",name:"Nome Personalizzato",icon:"Icona",color:"Colore Principale",color_charge:"Colore Carica",color_discharge:"Colore Scarica",color_idle:"Colore a Riposo (Standby)",use_idle_color:"Attiva Colore Dedicato per Batteria Inattiva",entity:"Entità Potenza (Watt)",entity_import:"Entità Prelievo (Import)",entity_export:"Entità Immissione (Export)",entity_charge:"Entità Carica",entity_discharge:"Entità Scarica",entity_in:"Entità Ingresso (Legacy)",entity_out:"Entità Uscita (Legacy)",entity_amperage:"Entità Corrente (Ampere)",state_of_charge:"Entità Stato di Carica (SoC %)",switch_entity:"Entità Switch / Controllo Accensione",invert:"Inverti Convenzione Segno (+/-)",include_in_home:"Includi nel Totale Casa",display_zero:"Mostra Linea a Flusso Zero",display_zero_tolerance:"Tolleranza Flusso Zero (W)",show_label:"Mostra Nome / Etichetta",stroke_mode:"Modalità Spessore Linea",speed_mode:"Modalità Velocità Particelle",layout_mode:"Modalità Layout Visivo",auto_layout_breakpoint:"Soglia Passaggio Layout Mobile (Breakpoint px)",min_duration:"Durata Minima Particelle (s)",max_duration:"Durata Massima Particelle (s)",normalize_speed_by_length:"Uniforma Velocità in base alla Lunghezza del Cavo",min_stroke:"Spessore Minimo Linea (px)",max_stroke:"Spessore Massimo Linea (px)",scale_min:"Valore Minimo Scala Potenza (W)",scale_max:"Valore Massimo Scala Potenza (W)",scale_curve:"Curva di Scala Potenza",smoothing_factor:"Fattore di Smoothing (EMA)",max_total_particles:"Max Particelle Totali a Schermo",decimals:"Numero di Cifre Decimali",w_to_kw_threshold:"Soglia Passaggio da Watt a kW",residual_handling:"Gestione Residuo Bilancio Energetico",residual_absorb_target:"Target Assorbimento Residuo",node_radius_primary:"Raggio Nodi Primari (px)",node_radius_secondary:"Raggio Nodi Secondari (px)",node_border_width:"Spessore Bordo Cerchi (px)",icon_size_primary:"Dimensione Icone Primarie (px)",icon_size_secondary:"Dimensione Icone Secondarie (px)",spacing_text_above_icon:"Spazio Testo Sopra Icona (px)",spacing_text_below_icon:"Spazio Testo Sotto Icona (px)",spacing_horizontal:"Spaziatura Orizzontale Griglia (px)",spacing_vertical:"Spaziatura Verticale Griglia (px)",font_size_primary:"Font Valore Nodi Primari (px)",font_size_secondary:"Font Valore Dispositivi Secondari (px)",font_size_unit:"Font Unità di Misura W/kW/A (px)",font_size_extra:"Font Frecce Direzionali Extra (px)",font_size_sub:"Font Sotto-testi e Info Secondarie (px)",font_size_value:"Font Valori Potenza (px)",font_size_label:"Font Etichette Nodi (px)",font_size_directional:"Font Frecce Direzionali (px)",font_size_top_info:"Font Info Superiori SoC/Ampere (px)",spacing_label_below_node:"Distanza Etichetta dal Cerchio (px)",show_labels:"Mostra Etichette Globali",label_chip_enabled:"Attiva Sfondo Stile Chip / Tag",label_chip_opacity:"Opacità Sfondo Chip",label_chip_padding_x:"Padding Orizzontale Chip (px)",label_chip_padding_y:"Padding Verticale Chip (px)",label_border_radius:"Raggio Bordo Arrotondato Chip (px)",label_border_width:"Spessore Bordo Chip (px)",label_color_mode:"Modalità Colore Testo Etichetta",label_color:"Colore Testo Etichetta Personalizzato",line_routing_mode:"Modalità Percorso Linee Dispositivi",bus_lane_spacing:"Spaziatura Corsie Parallele Bus (px)",bus_corner_radius:"Raggio Raccordo Curva Bus 90° (px)",invert_bus_lane_order:"Inverti Ordine Corsie Bus",particles_per_arc:"Particelle per Linea Attiva",particle_size_offset:"Dimensione Extra Particella Luminosa (px)",particle_inner_glow:"Bagliore Bianco Interno Particelle (Inner Glow)",particle_soft_edge:"Bordo Sfumato / Morbido Particelle",inactive_wire_opacity:"Opacità Linee a Flusso Zero",inactive_wire_style:"Stile Linea a Flusso Zero",hover_glow_radius:"Raggio Bagliore all'Hover (px)",show_node_shadows:"Attiva Ombreggiatura sui Cerchi",node_shadow_color:"Colore Ombra Personalizzato",node_shadow_blur:"Sfocatura Ombra Cerchi (px)",node_shadow_spread:"Espansione Ombra Cerchi (px)",node_shadow_opacity:"Opacità Ombra Cerchi",node_shadow_offset_y:"Offset Verticale Ombra (px)",show_home_mix_ring:"Mostra Anello Multi-Colore Quote Casa",home_glow_mode:"Colore Bagliore all'Hover sulla Casa",enabled:"Abilita Effetto",tail_length:"Lunghezza Coda a Cometa",glow_intensity:"Intensità Bagliore Coda",battery_type:"Stile Visivo Batteria",battery_animated:"Animazione Onde Continua",load_animation:"Animazione Icone Carichi",intensity:"Intensità Riflesso Vetro (%)",neon_core:"Anello Concentrico Neon Interno (Neon Core)",ripple_size:"Dimensione Espansione Onda (px)",ripple_color:"Colore Onda d'Urto Personalizzato",meteor_trail_enabled:"Attiva Coda Luminescente a Cometa",meteor_trail_tail_length:"Lunghezza Coda (Normalizzata)",meteor_trail_glow_intensity:"Intensità Bagliore Coda",living_icons_enabled:"Attiva Icone Vive & Livello Batteria",living_icons_battery_type:"Stile Visualizzazione Batteria",living_icons_battery_animated:"Animazione Continua Batteria (Onde)",living_icons_load_animation:"Animazione Icone Carichi Attivi",glassmorphism_enabled:"Attiva Riflesso Vetro Bombato & Neon Ring",glassmorphism_intensity:"Intensità Riflesso Vetro (%)",glassmorphism_neon_core:"Anello Concentrico Interno Neon (Neon Core)",impact_ripples_enabled:"Attiva Onde d'Urto all'Arrivo Particelle",impact_ripples_size:"Dimensione Espansione Onda (px)",impact_ripples_color:"Colore Onda d'Urto Personalizzato",badge_enabled:"Mostra Badge di Stato Notifica",badge_style:"Stile Visivo Badge",badge_position:"Posizione Ancoraggio Badge",badge_size:"Dimensione Badge (px)",badge_color_on:"Colore Stato Acceso (ON)",badge_color_off:"Colore Stato Spento (OFF)",badge_pulse:"Effetto Pulsazione Energetica quando Attivo",badge_quick_toggle:"Tocco Rapido per Accendere/Spegnere",badge_tap_behavior:"Comportamento al Tocco del Badge",secondary_info_entity:"Entità Informazione Secondaria",secondary_info_unit:"Unità di Misura Personalizzata",secondary_info_decimals:"Numero di Decimali",secondary_info_template:"Template Formattazione",unit:"Unità di Misura Personalizzata",tap_action:"Azione Tocco Singolo (Tap)",hold_action:"Azione Pressione Prolungata (Hold)",double_tap_action:"Azione Doppio Tocco (Double Tap)",tap_more_info_target:"Destinazione Scheda Dettagli (Tap)",hold_more_info_target:"Destinazione Scheda Dettagli (Hold)",double_tap_more_info_target:"Destinazione Scheda Dettagli (Double Tap)",helper:{title:"Titolo personalizzato visualizzato nella barra superiore della card.",layout_mode:"Scegli il layout: 'Automatico' passa a verticale su schermi stretti, 'Orizzontale' dispone i nodi su una linea, 'Verticale' su due colonne.",stroke_mode:"Determina se lo spessore delle linee varia in base alla potenza (Watt) o alla corrente (Ampere).",speed_mode:"La velocità delle particelle può essere proporzionale ai Watt assoluti o alla percentuale sul flusso totale.",auto_layout_breakpoint:"Larghezza in pixel della card al di sotto della quale viene attivato il layout responsive verticale (default: 520px).",id:"Identificativo interno univoco del carico (alfanumerico, trattino o underscore).",name:"Nome descrittivo visualizzato nell'etichetta del nodo o carico.",icon:"Icona Material Design al centro del cerchio (es. mdi:solar-power, mdi:heat-pump).",entity:"Sensore principale di potenza in Watt (o kW) associato a questo nodo.",entity_import:"Sensore della potenza prelevata dalla rete (Watt positivi).",entity_export:"Sensore della potenza immessa in rete (Watt positivi).",entity_charge:"Sensore della potenza assorbita per caricare la batteria (Watt positivi).",entity_discharge:"Sensore della potenza erogata dalla batteria in scarica (Watt positivi).",state_of_charge:"Sensore della percentuale di carica della batteria (SoC da 0% a 100%).",entity_amperage:"Sensore opzionale di corrente (Ampere) visualizzato sopra l'icona.",color:"Colore del cerchio, delle particelle luminose e delle linee collegate.",color_charge:"Colore della linea e delle particelle durante la carica della batteria.",color_discharge:"Colore della linea e delle particelle durante la scarica della batteria.",use_idle_color:"Applica una colorazione differente quando la batteria è a riposo (0 W).",color_idle:"Colore applicato al nodo batteria quando è in standby a 0 W.",invert:"Inverte la convenzione del segno: trasforma valori positivi in negativi e viceversa.",switch_entity:"Entità switch/luce/relè associata al nodo per il controllo ON/OFF.",include_in_home:"Se disattivato, il consumo di questo dispositivo viene escluso dal totale calcolato della Casa.",display_zero:"Mantiene visibile la linea di collegamento anche quando la potenza è a zero.",display_zero_tolerance:"Soglia in Watt al di sotto della quale il flusso viene considerato nullo.",show_label:"Mostra o nasconde l'etichetta descrittiva posizionata sotto il cerchio del nodo.",node_radius_primary:"Raggio in pixel dei cerchi principali (Solare, Rete, Batteria, Casa; default: 36px).",node_radius_secondary:"Raggio in pixel dei cerchi dei dispositivi aggiuntivi (default: 28px).",icon_size_primary:"Dimensione in pixel delle icone all'interno dei nodi primari (default: 18px).",icon_size_secondary:"Dimensione in pixel delle icone nei dispositivi secondari (default: 16px).",node_border_width:"Spessore del bordo esterno dei cerchi dei nodi in pixel (default: 2.5px).",show_node_shadows:"Applica un'ombra sfumata sotto i cerchi per conferire profondità 3D.",node_shadow_color:"Colore personalizzato per l'ombra dei nodi (lascia vuoto per l'ombra standard).",node_shadow_blur:"Raggio di sfocatura dell'ombra dei nodi in pixel (default: 10px).",node_shadow_spread:"Estensione dell'ombra dei nodi in pixel.",font_size_primary:"Dimensione del testo del valore di potenza nei nodi primari (default: 10px).",font_size_secondary:"Dimensione del testo del valore di potenza nei dispositivi secondari (default: 9px).",font_size_unit:"Dimensione del testo dell'unità di misura W/kW/A (default: 8px).",font_size_extra:"Dimensione del font per le frecce direzionali di carica/scarica e prelievo/immissione (default: 8.5px).",font_size_sub:"Dimensione del font per i consumi non tracciati e le info secondarie (default: 9px).",font_size_label:"Dimensione del font delle etichette dei nodi (default: 10px).",font_size_top_info:"Dimensione del testo superiore SoC % / Corrente A sopra l'icona (default: 8px).",spacing_label_below_node:"Distanza verticale in pixel tra il cerchio del nodo e l'etichetta (default: 14px).",show_labels:"Abilita o disabilita globalmente le etichette di testo per tutti i nodi.",label_chip_enabled:"Disegna un riquadro smussato in stile chip/tag attorno all'etichetta.",label_chip_opacity:"Opacità dello sfondo del chip con il colore del nodo (da 0.05 a 1.0; default: 0.18).",label_chip_padding_x:"Spaziatura orizzontale interna in pixel del chip (default: 8px).",label_chip_padding_y:"Spaziatura verticale interna in pixel del chip (default: 3.5px).",label_border_radius:"Raggio di curvatura degli angoli arrotondati del chip (default: 6px).",label_border_width:"Spessore del bordo esterno del chip in pixel (default: 1px).",label_color_mode:"Contrasto automatico calcola dinamicamente bianco o nero per la massima leggibilità.",label_color:"Colore del testo dell'etichetta quando la modalità colore è su 'Personalizzato'.",inactive_wire_opacity:"Opacità delle linee quando non c'è flusso di potenza (default: 0.35).",inactive_wire_style:"Scegli se mostrare la linea a flusso zero tratteggiata, continua o nasconderla.",hover_glow_radius:"Raggio dell'effetto bagliore luminoso al passaggio del cursore sopra un nodo (default: 10px).",show_home_mix_ring:"Mostra un anello multi-colore attorno alla Casa con quote proporzionali a Solare, Rete e Batteria.",home_glow_mode:"Al passaggio del cursore la Casa si illumina con il colore della fonte primaria o con il colore fisso.",line_routing_mode:"Scegli tra curve di Bezier dirette o canale centrale a bus ortogonale per carichi multipli.",bus_lane_spacing:"Distanza tra le corsie parallele dei carichi nel canale centrale (default: 8px).",bus_corner_radius:"Raggio di curvatura dei raccordi a 90° nel canale centrale (default: 20px).",invert_bus_lane_order:"Inverte l'ordine delle corsie del canale centrale (dalla più interna alla più esterna).",particles_per_arc:"Numero di particelle luminose che viaggiano su ogni linea attiva (default: 3).",particle_size_offset:"Aumento del raggio delle particelle luminose in pixel (default: 1.8px).",particle_inner_glow:"Aggiunge un nucleo bianco brillante ad alta densità al centro di ciascuna particella.",particle_soft_edge:"Applica una sfumatura radiale morbida ai bordi delle particelle per un effetto luce realistico.",spacing_horizontal:"Spaziatura orizzontale in pixel tra le colonne dei nodi (default: 120px).",spacing_vertical:"Spaziatura verticale in pixel tra le righe dei nodi (default: 85px).",spacing_text_above_icon:"Distanza in pixel tra il testo superiore (SoC/Ampere) e l'icona interna (default: 4px).",spacing_text_below_icon:"Distanza in pixel tra l'icona interna e il valore di potenza (default: 4px).",meteor_trail:"Coda luminescente a cometa che segue le particelle in movimento.",tail_length:"Lunghezza della scia a cometa lungo il percorso del cavo (da 0.02 a 0.25).",glow_intensity:"Intensità del bagliore e spessore della scia a cometa.",living_icons:"Icone animate per i carichi e visualizzazione dinamica della batteria (onde liquide o gradiente).",battery_type:"Visualizzazione batteria: 'Gradiente' (bagliore radiale con SoC) o 'Liquido' (onda d'acqua animata).",battery_animated:"Mantiene l'onda liquida della batteria in oscillazione continua.",load_animation:"Animazione applicata alle icone dei carichi attivi (rotazione o pulsazione).",glassmorphism:"Effetto lente in vetro 3D con riflesso bombato e anello concentrico neon luminoso.",intensity:"Percentuale di intensità dei riflessi di luce e della brillantezza del vetro.",neon_core:"Mostra un anello interno concentrico luminescente (Neon Core) all'interno del cerchio.",impact_ripples:"Onda d'urto circolare (ripple) che si espande all'arrivo di ciascuna particella sul nodo.",ripple_size:"Raggio massimo di espansione dell'onda d'urto in pixel (default: 18px).",ripple_color:"Colore dell'onda d'urto (lascia vuoto per usare il colore dell'energia in arrivo).",badge_enabled:"Mostra un badge circolare sullo spigolo del nodo per indicare lo stato dell'interruttore (ON/OFF).",badge_style:"Stile visivo del badge: LED circolare (Dot), icona mini-power o testo 'ON'/'OFF'.",badge_position:"Posizione di ancoraggio del badge attorno al bordo del nodo.",badge_size:"Diametro del badge di notifica in pixel (default: 10px).",badge_color_on:"Colore del badge quando il dispositivo è acceso o attivo.",badge_color_off:"Colore del badge quando il dispositivo è spento o inattivo.",badge_pulse:"Attiva una pulsazione luminosa continua sul badge quando il dispositivo è acceso.",badge_quick_toggle:"Permette di toccare direttamente il badge per accendere o spegnere rapidamente il dispositivo.",badge_tap_behavior:"Comportamento quando si tocca direttamente il badge di stato.",secondary_info:"Visualizza un'informazione testuale aggiuntiva sotto il nodo (es. temperatura, energia giornaliera).",unit:"Unità di misura personalizzata da affiancare al valore dell'informazione secondaria.",decimals:"Numero di cifre decimali da visualizzare nei valori di potenza (default: 2).",w_to_kw_threshold:"Soglia in Watt oltre la quale la visualizzazione passa automaticamente a kW (default: 1000 W).",scale_curve:"La curva radice quadrata (sqrt) offre la migliore percezione visiva per piccoli e grandi consumi.",scale_min:"Potenza al di sotto della quale le particelle viaggiano alla velocità minima consentita (default: 50 W).",scale_max:"Potenza alla quale la linea raggiunge lo spessore massimo e la velocità massima (default: 6000 W).",smoothing_factor:"Fattore di smorzamento esponenziale (EMA): valori bassi rendono le transizioni più morbide (default: 0.35).",max_total_particles:"Numero massimo di particelle attive contemporaneamente a schermo per garantire 60 FPS (default: 30).",min_stroke:"Spessore minimo delle linee di flusso in pixel (default: 2.0px).",max_stroke:"Spessore massimo delle linee di flusso a pieno carico in pixel (default: 7.0px).",min_duration:"Durata minima in secondi del viaggio di una particella alla massima potenza (default: 0.8s).",max_duration:"Durata massima in secondi del viaggio di una particella alla minima potenza (default: 5.5s).",normalize_speed_by_length:"Se attivo, calcola la velocità fisica uniforme in pixel al secondo tenendo conto della lunghezza del cavo, evitando che le particelle viaggino più veloci sui percorsi lunghi.",residual_handling:"Metodo di bilanciamento delle discrepanze matematiche fra produzione, accumulo e consumi.",residual_absorb_target:"Nodo su cui convogliare l'energia residua quando la gestione è impostata su 'Assorbimento'."},option:{layout_mode:{auto:"Automatico (Adattivo al dispositivo)",horizontal:"Orizzontale (Griglia lineare)",vertical:"Verticale (Compatto a 2 Colonne)"},stroke_mode:{watt:"Dinamico in base alla Potenza (Watt)",fixed:"Spessore Fisso Uniforme",ampere:"Dinamico in base alla Corrente (Ampere)"},speed_mode:{absolute:"Velocità Assoluta (Watt effettivi)",relative:"Velocità Relativa (% sul totale energetico)"},scale_curve:{sqrt:"Radice Quadrata (Sqrt - Consigliata per dinamica visiva)",linear:"Lineare Proporzionale",log:"Logaritmica (Ampio spettro di potenza)"},residual_handling:{clamp:"Clamp (Bilancia a zero sull'arco principale)",absorb:"Assorbimento (Convoglia su target dedicato)",unbalanced:"Sbilanciamento (Visualizza quota residua)"},residual_absorb_target:{grid:"Rete Elettrica (Grid)",battery:"Batteria & Accumulo (Battery)"},badge_style:{dot:"Dot LED Circolare Minimal",icon:"Mini-Icona Power Attiva/Spenta",text:"Micro-Tag Testuale (ON / OFF)"},badge_position:{top_right:"In alto a destra (Top-Right)",top_left:"In alto a sinistra (Top-Left)",bottom_right:"In basso a destra (Bottom-Right)",bottom_left:"In basso a sinistra (Bottom-Left)"},badge_tap_behavior:{auto:"Automatico (Riconosce switch o sensore)",toggle:"Accende / Spegne lo Switch (Toggle)","more-info-switch":"Apre Scheda di Gestione dello Switch","more-info-sensor":"Apre Scheda Storico del Sensore","more-info":"Apre Scheda Dettagli Generale"},more_info_target:{auto:"Automatico (Switch se presente, altrimenti Sensore)",switch:"Scheda Switch di Controllo",sensor:"Scheda Sensore di Potenza"},label_color_mode:{auto_contrast:"Contrasto Intelligente Ottimale (Auto B/W)",white:"Bianco Puro (#ffffff)",black:"Nero Scuro (#0f172a)",match_entity:"Abbina al Colore dell'Entità",secondary:"Grigio Secondario Standard",custom:"Colore Personalizzato"},battery_type:{gradient:"Gradiente Radiale Dinamico (Energy Glow)",liquid:"Livello Liquido con Onda Animata (Liquid Wave)"},load_animation:{rotate:"Rotazione Continua (Ventola / Motore)",pulse:"Pulsazione / Respiro Energetico",none:"Nessuna (Icone Statiche)"},line_routing_mode:{bezier_curved:"Archi Curvi Diretti (Bezier)",orthogonal_bus:"Canale Centrale a Bus (Ortogonale Morbido)"},inactive_wire_style:{dashed:"Tratteggiato (Dashed)",solid:"Continuo (Solid)",hidden:"Completamente Nascosto"},home_glow_mode:{predominant:"Dinamico (Colore della fonte primaria attiva)",custom:"Fisso (Colore base della Casa)"}},error:{invalid_range:"Range non valido: il valore minimo deve essere strettamente inferiore al massimo.",duplicate_id:"L'ID del dispositivo deve essere univoco.",invalid_id:"L'ID deve iniziare con una lettera e contenere solo caratteri alfanumerici, trattini o underscore.",reserved_id:"Questo ID è riservato dal sistema.",missing_entity:"È richiesta almeno un'entità di potenza valida."}},pt={missing_entity:"È richiesta almeno un'entità di potenza valida.",invalid_range:"Range non valido: il valore minimo deve essere strettamente inferiore al massimo."},ht={card:ct,editor:_t,errors:pt};const mt={en:dt||Object.freeze({__proto__:null,card:rt,default:dt,editor:st,errors:lt}),it:ht||Object.freeze({__proto__:null,card:ct,default:ht,editor:_t,errors:pt})};function ut(e,t="en"){const o=t.replace(/['"]+/g,"").replace("-","_").split("_")[0],i=mt[o]||mt.en,a=e.split(".");let n=i;for(const t of a){if(!n||"object"!=typeof n||!(t in n)){let t=mt.en;for(const o of a){if(!t||"object"!=typeof t||!(o in t))return e;t=t[o]}return"string"==typeof t?t:e}n=n[t]}return"string"==typeof n?n:e}let gt=class extends de{constructor(){super(...arguments),this._watchedEntities=new Set,this._previousDeviceIds=new Set,this._configWarnings=[],this._gestureController=new et((e,t)=>Je(this,this._hass,e,t)),this._particlesMap=new Map,this._particleDomElements={},this._meteorDomElements={},this._meteorGradElements={},this._pathLUT={},this._lastArcDurations={},this._lastGeometryHash="",this._lastAnimTimestamp=0,this._isCardVisible=!0,this._ripplePool=[],this._lastRippleTriggerTime={},this._liquidPhase=0,this._liquidAccumulator=0,this._lastNodePositions={},this._actualLayout="horizontal"}static async getConfigElement(){return await Promise.resolve().then(function(){return Ft}),document.createElement("simple-power-flow-card-editor")}static getStubConfig(e,t){const o=t||(e?.states?Object.keys(e.states):[]),i=t=>o.find(o=>{const i=o.toLowerCase(),a=e?.states?.[o],n="power"===a?.attributes?.device_class||"W"===a?.attributes?.unit_of_measurement||"kW"===a?.attributes?.unit_of_measurement;return t.some(e=>i.includes(e))&&(n||!e)});return{type:"custom:simple-power-flow-card",card_version:2,title:"Power Flow",solar:{entity:i(["solar","pv","fotovoltaico"])||"sensor.solar_power"},grid:{entity:i(["grid","rete","power_meter","import"])||"sensor.grid_power"},battery:{entity:i(["battery_power","accumulo","batteria"])||"sensor.battery_power"},home:{entity:i(["home_power","house_power","consumo_casa"])||"sensor.home_power"}}}static{this.styles=Fe}_purgeArc(e){this._particlesMap.delete(e),delete this._pathLUT[e],delete this._lastNodePositions[e],delete this._lastRippleTriggerTime[e],this._particleDomElements[e]&&(this._particleDomElements[e].remove(),delete this._particleDomElements[e]),this._meteorDomElements[e]&&(this._meteorDomElements[e].remove(),delete this._meteorDomElements[e]),this._meteorGradElements[e]&&(this._meteorGradElements[e].remove(),delete this._meteorGradElements[e])}setConfig(e){if(!e)throw new Error(ut("errors.missing_entity"));const t=function(e){if(!e||"object"!=typeof e)return e;const t={...e},o=t.card_version;return(!o||"number"!=typeof o||o<2)&&(void 0===t.display_zero_tolerance&&(t.display_zero_tolerance=0),t.card_version=2),t}(e),o=(e,t,o,i)=>{const a=((e,t)=>"number"==typeof e&&Number.isFinite(e)?e:t)(e,i);return Math.max(t,Math.min(o,a))},i=o(t.decimals,0,3,2),a=o(t.w_to_kw_threshold,100,1e4,1e3),n=o(t.scale_min,0,5e3,50),r=o(t.scale_max,500,5e4,6e3),s=o(t.min_duration,.2,5,.8),l=o(t.max_duration,1,20,5.5),d=o(t.min_stroke,.5,10,2),c=o(t.max_stroke,1,20,7),_=o(t.display_zero_tolerance,0,50,1),p=o(t.smoothing_factor,.05,1,.35),h=o(t.max_total_particles,5,100,30),m=o(t.auto_layout_breakpoint,200,1200,520),u=at(t.styles||{},t),g=new Set(["solar","grid","battery","home"]),f=new Set;this._configWarnings=[];const b=[];Array.isArray(t.devices)&&t.devices.forEach((e,t)=>{const o=tt(e);let i=(o.id||`device_${t+1}`).trim();const a=i;if(g.has(i)&&(i=`${i}_device`,this._configWarnings.push(`Dispositivo #${t+1} usa l'ID riservato '${a}'. È stato rinominato in '${i}'. Correggi lo YAML.`)),f.has(i)){let e=2,t=`${i}_${e}`;for(;f.has(t)||g.has(t);)e++,t=`${i}_${e}`;this._configWarnings.push(`ID dispositivo duplicato '${a}'. È stato rinominato in '${t}'. Correggi lo YAML.`),i=t}f.add(i),b.push({...o,id:i})});const y={...be,...t,card_version:t.card_version||2,decimals:i,w_to_kw_threshold:a,scale_min:n,scale_max:r,min_duration:s,max_duration:l,min_stroke:d,max_stroke:c,display_zero_tolerance:_,smoothing_factor:p,max_total_particles:h,auto_layout_breakpoint:m,stroke_mode:u.stroke_mode??t.stroke_mode??be.stroke_mode,speed_mode:u.speed_mode??t.speed_mode??be.speed_mode,normalize_speed_by_length:u.normalize_speed_by_length??t.normalize_speed_by_length??be.normalize_speed_by_length,styles:{...ge,...u},devices:b};if(y.solar&&(y.solar=tt(y.solar)),y.grid&&(y.grid=tt(y.grid)),y.battery&&(y.battery=tt(y.battery)),y.home&&(y.home=tt(y.home)),void 0!==y.scale_min&&void 0!==y.scale_max&&y.scale_min>=y.scale_max){const e=y.scale_min;y.scale_min=y.scale_max,y.scale_max=e>y.scale_max?e:y.scale_max+100}if(void 0!==y.min_duration&&void 0!==y.max_duration&&y.min_duration>=y.max_duration){const e=y.min_duration;y.min_duration=y.max_duration,y.max_duration=e>y.max_duration?e:y.max_duration+.5}if(void 0!==y.min_stroke&&void 0!==y.max_stroke&&y.min_stroke>=y.max_stroke){const e=y.min_stroke;y.min_stroke=y.max_stroke,y.max_stroke=e>y.max_stroke?e:y.max_stroke+.5}const v=new Set(b.map(e=>e.id).filter(Boolean));for(const e of this._previousDeviceIds)v.has(e)||(this._purgeArc(`home-${e}`),this._purgeArc(e));this._previousDeviceIds=v,this._pathLUT={},this._config=y,this._watchedEntities.clear();const x=e=>{e&&this._watchedEntities.add(e)};[this._config.solar,this._config.grid,this._config.battery,this._config.home].forEach(e=>{e&&(x(e.entity),x(e.entity_in),x(e.entity_out),x(e.entity_import),x(e.entity_export),x(e.entity_charge),x(e.entity_discharge),x(e.state_of_charge),x(e.entity_amperage),x(e.switch_entity),x(e.secondary_info?.entity))}),Array.isArray(this._config.devices)&&this._config.devices.forEach(e=>{x(e.entity),x(e.entity_amperage),x(e.switch_entity),x(e.secondary_info?.entity)}),this._checkInitialDimensions(),this.requestUpdate()}set hass(e){const t=this._hass;this._hass=e,t&&!this._hasWatchedEntityChanged(t,e)||this.requestUpdate()}_hasWatchedEntityChanged(e,t){if(!e?.states||!t?.states)return!0;for(const o of this._watchedEntities)if(e.states[o]!==t.states[o])return!0;return!1}getCardSize(){return 4}getGridOptions(){return{columns:12,rows:"auto",min_columns:6,min_rows:3}}getLayoutOptions(){return{grid_columns:4,grid_rows:3,grid_min_columns:2,grid_min_rows:2}}connectedCallback(){super.connectedCallback(),this._isCardVisible=!0,this._setupObservers(),this._checkInitialDimensions(),this._startParticleAnimation()}disconnectedCallback(){super.disconnectedCallback(),this._isCardVisible=!1,this._stopParticleAnimation(),this._resetRipplePool(),this._cleanupObservers(),this._gestureController.handlePointerCancel()}updated(e){super.updated(e),this._syncParticles()}_checkInitialDimensions(){const e=this.getBoundingClientRect();e&&e.width>0&&this._updateLayoutFromWidth(e.width)}_resetRipplePool(){this._ripplePool.forEach(e=>{e.anim&&(e.anim.cancel(),e.anim=void 0),e.el.style.display="none",e.inUse=!1})}_updateLayoutFromWidth(e){const t=this._config?.layout_mode||"auto";if("horizontal"===t)return void("horizontal"!==this._actualLayout&&(this._actualLayout="horizontal",this._resetRipplePool(),this.requestUpdate()));if("vertical"===t)return void("vertical"!==this._actualLayout&&(this._actualLayout="vertical",this._resetRipplePool(),this.requestUpdate()));const o=this._config?.auto_layout_breakpoint??520,i=e<=o||"undefined"!=typeof window&&window.innerWidth<=o;i&&"vertical"!==this._actualLayout?(this._actualLayout="vertical",this._resetRipplePool(),this.requestUpdate()):!i&&e>o+20&&"horizontal"!==this._actualLayout&&(this._actualLayout="horizontal",this._resetRipplePool(),this.requestUpdate())}_setupObservers(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(e=>{for(const t of e){const e=t.contentRect.width;e<=0||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>{this._updateLayoutFromWidth(e)},120))}}),this._resizeObserver.observe(this)),this._intersectionObserver||(this._intersectionObserver=new IntersectionObserver(e=>{for(const t of e)this._isCardVisible=t.isIntersecting,t.isIntersecting&&(this._lastAnimTimestamp=0,this._startParticleAnimation())}),this._intersectionObserver.observe(this))}_cleanupObservers(){this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=void 0),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=void 0),this._intersectionObserver&&(this._intersectionObserver.disconnect(),this._intersectionObserver=void 0)}_startParticleAnimation(){!this._animFrameId&&this._isCardVisible&&(this._lastAnimTimestamp=performance.now(),this._animFrameId=requestAnimationFrame(this._animateParticles.bind(this)))}_stopParticleAnimation(){this._animFrameId&&(cancelAnimationFrame(this._animFrameId),this._animFrameId=void 0)}_syncParticles(){if(!this._config||!this._lastCalculatedFlows)return;const e={...ge,...this._config.styles||{}},t=this._lastCalculatedFlows.arcs.filter(e=>e.isActive),o=this._config.effects||fe,i=Boolean(o.meteor_trail?.enabled)?2:1,a=Math.floor((this._config.max_total_particles??30)/i);let n=e.particles_per_arc;t.length*n>a&&(n=Math.max(1,Math.floor(a/t.length)));const r=new Set,s=e.normalize_speed_by_length??this._config?.normalize_speed_by_length??!0;t.forEach(t=>{r.add(t.id),this._lastArcDurations[t.id]=t.duration;let o=t.duration;const i=this._pathLUT[t.id];s&&i&&i.totalLength>0&&(o=Math.max(.3,t.duration*(i.totalLength/200)));const a=1/Math.max(.2,o),l=Math.max(4,.75*t.strokeWidth+(e.particle_size_offset??1.8));for(let e=0;e<n;e++){const o=`${t.id}-${e}`,r=this._particlesMap.get(o);if(r)r.targetSpeed=a,r.radius=l,r.arcColor=t.color,r.targetNodeId=t.to,r.isFadingOut=!1;else{const r=e/n*1.35;this._particlesMap.set(o,{id:o,arcId:t.id,progress:r,prevNormProgress:r%1.35,speed:a,targetSpeed:a,radius:l,totalLength:i?.totalLength??0,arcColor:t.color,targetNodeId:t.to,isFadingOut:!1})}}for(let e=n;e<10;e++){const o=`${t.id}-${e}`,i=this._particlesMap.get(o);i&&(i.isFadingOut=!0)}});for(const[e,t]of this._particlesMap.entries())r.has(t.arcId)||(t.isFadingOut=!0);this._startParticleAnimation()}_getPathPoint(e,t){let o=this._pathLUT[e];if(!o){const t=this.shadowRoot?.querySelector(`#path-${CSS.escape(e)}`);if(!t)return null;const i=t.getTotalLength();if(!i||i<=0)return null;const a=100,n=[];for(let e=0;e<=a;e++)n.push(t.getPointAtLength(e/a*i));o={totalLength:i,points:n},this._pathLUT[e]=o;const r={...ge,...this._config?.styles||{}}.normalize_speed_by_length??this._config?.normalize_speed_by_length??!0,s=this._lastArcDurations[e];if(r&&i>0&&s){const t=Math.max(.3,s*(i/200)),o=1/Math.max(.2,t);for(let t=0;t<10;t++){const a=this._particlesMap.get(`${e}-${t}`);a&&(a.targetSpeed=o,a.totalLength=i)}}}const i=Math.max(0,Math.min(1,t))*(o.points.length-1),a=Math.floor(i);if(a>=o.points.length-1)return{pt:o.points[o.points.length-1],totalLength:o.totalLength};const n=i-a,r=o.points[a],s=o.points[a+1];return{pt:{x:r.x+(s.x-r.x)*n,y:r.y+(s.y-r.y)*n},totalLength:o.totalLength}}_triggerImpactRipple(e,t){const o=performance.now();if(o-(this._lastRippleTriggerTime[e]||0)<180)return;this._lastRippleTriggerTime[e]=o;const i=this._lastNodePositions[e];if(!i)return;const a=this._config?.effects||fe,n=a.impact_ripples?.ripple_size??18,r=a.impact_ripples?.ripple_color||t,s=this.shadowRoot?.querySelector("g.ripples-layer");if(!s)return;let l=this._ripplePool.find(e=>!e.inUse);if(!l)if(this._ripplePool.length<12){const e=document.createElementNS("http://www.w3.org/2000/svg","circle");e.setAttribute("class","impact-ripple-group"),e.setAttribute("fill","none"),s.appendChild(e),l={el:e,inUse:!0},this._ripplePool.push(l)}else l=this._ripplePool[0],l.anim&&l.anim.cancel();const d=i.radius,c=i.radius+n;l.inUse=!0;const _=l.el;if(_.setAttribute("cx",i.x.toFixed(1)),_.setAttribute("cy",i.y.toFixed(1)),_.setAttribute("stroke",r),_.setAttribute("stroke-width","3px"),_.setAttribute("r",`${d}px`),_.setAttribute("opacity","0.85"),_.style.display="","function"==typeof _.animate){const e=_.animate([{r:`${d}px`,opacity:.85,strokeWidth:"3px"},{r:`${c}px`,opacity:0,strokeWidth:"0.5px"}],{duration:700,easing:"cubic-bezier(0.1, 0.8, 0.3, 1)",fill:"forwards"});l.anim=e,e.onfinish=()=>{_.style.display="none",l.inUse=!1,l.anim=void 0},e.oncancel=()=>{_.style.display="none",l.inUse=!1,l.anim=void 0}}else{let e=performance.now();const t=700,o=i=>{const a=Math.min(1,(i-e)/t),n=1-Math.pow(1-a,3),r=d+(c-d)*n,s=.85*(1-a);_.setAttribute("r",r.toFixed(1)),_.setAttribute("opacity",s.toFixed(3)),a<1?requestAnimationFrame(o):(_.style.display="none",l.inUse=!1)};requestAnimationFrame(o)}}_animateParticles(e){if(!this._isCardVisible)return void(this._animFrameId=void 0);const t="undefined"!=typeof window&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;this._lastAnimTimestamp||(this._lastAnimTimestamp=e);const o=Math.min((e-this._lastAnimTimestamp)/1e3,.033);this._lastAnimTimestamp=e;const i=this.shadowRoot?.querySelector("g.particles-layer"),a=this.shadowRoot?.querySelector("defs.dynamic-defs");if(!i)return void(this._animFrameId=requestAnimationFrame(this._animateParticles.bind(this)));const n=this._config?.effects||fe,r=Boolean(n.meteor_trail?.enabled&&!t),s=n.meteor_trail?.tail_length??.08,l=n.meteor_trail?.glow_intensity??1.5,d=this._config?.smoothing_factor??.35,c=[];for(const[e,_]of this._particlesMap.entries()){if(t||(_.speed+=(_.targetSpeed-_.speed)*Math.min(1,d*o*10),_.progress+=_.speed*o),_.isFadingOut&&_.progress>=1){c.push(e);continue}const p=_.progress%1.35;if(!t&&!_.isFadingOut&&_.prevNormProgress<1&&p>=1&&n.impact_ripples?.enabled&&this._triggerImpactRipple(_.targetNodeId,_.arcColor),_.prevNormProgress=p,p>1||t){const t=this._particleDomElements[e];t&&0!==_.lastOpacity&&(t.setAttribute("opacity","0"),_.lastOpacity=0);const o=this._meteorDomElements[e];o&&o.setAttribute("d","");continue}const h=this._getPathPoint(_.arcId,p);if(!h)continue;const{pt:m}=h,u=.08,g=.08;let f=1;p<u?f=p/u:p>1-g&&(f=(1-p)/g),f=Math.max(0,Math.min(1,f));let b=this._particleDomElements[e];if(b||(b=document.createElementNS("http://www.w3.org/2000/svg","circle"),b.setAttribute("class","particle-circle"),i.appendChild(b),this._particleDomElements[e]=b),b.setAttribute("cx",m.x.toFixed(1)),b.setAttribute("cy",m.y.toFixed(1)),_.lastRadius!==_.radius&&(b.setAttribute("r",_.radius.toFixed(1)),_.lastRadius=_.radius),_.lastFill!==_.arcColor&&(b.setAttribute("fill",_.arcColor),_.lastFill=_.arcColor),_.lastOpacity!==f&&(b.setAttribute("opacity",f.toFixed(3)),_.lastOpacity=f),r&&a&&f>.05){let t=this._meteorDomElements[e],o=this._meteorGradElements[e];t||(t=document.createElementNS("http://www.w3.org/2000/svg","path"),t.setAttribute("class","meteor-tail"),t.setAttribute("fill","none"),t.setAttribute("stroke-linecap","round"),t.setAttribute("filter","url(#glow-meteor)"),i.insertBefore(t,b),this._meteorDomElements[e]=t);const n=`meteor-grad-${e.replace(/[^a-zA-Z0-9-_]/g,"_")}`;if(!o){o=document.createElementNS("http://www.w3.org/2000/svg","linearGradient"),o.setAttribute("id",n),o.setAttribute("gradientUnits","userSpaceOnUse");const i=document.createElementNS("http://www.w3.org/2000/svg","stop");i.setAttribute("offset","0%"),i.setAttribute("stop-color",_.arcColor),i.setAttribute("stop-opacity","0");const r=document.createElementNS("http://www.w3.org/2000/svg","stop");r.setAttribute("offset","100%"),r.setAttribute("stop-color",_.arcColor),r.setAttribute("stop-opacity","0.95"),o.appendChild(i),o.appendChild(r),a.appendChild(o),this._meteorGradElements[e]=o,t.setAttribute("stroke",`url(#${n})`)}const r=Math.max(0,p-s),d=this._getPathPoint(_.arcId,r),c=this._getPathPoint(_.arcId,r+.33*(p-r)),h=this._getPathPoint(_.arcId,r+.66*(p-r)),u=m;if(d&&c&&h){const e=d.pt,i=c.pt,a=h.pt,n=`M ${e.x.toFixed(1)} ${e.y.toFixed(1)} C ${i.x.toFixed(1)} ${i.y.toFixed(1)}, ${a.x.toFixed(1)} ${a.y.toFixed(1)}, ${u.x.toFixed(1)} ${u.y.toFixed(1)}`;t.setAttribute("d",n),t.setAttribute("stroke-width",(1.5*_.radius*Math.min(2.5,l)).toFixed(1)),t.setAttribute("opacity",f.toFixed(3));const r=_.lastGradCoords;(!r||Math.abs(r.x1-e.x)>2||Math.abs(r.y1-e.y)>2||Math.abs(r.x2-u.x)>2||Math.abs(r.y2-u.y)>2)&&(o.setAttribute("x1",e.x.toFixed(1)),o.setAttribute("y1",e.y.toFixed(1)),o.setAttribute("x2",u.x.toFixed(1)),o.setAttribute("y2",u.y.toFixed(1)),_.lastGradCoords={x1:e.x,y1:e.y,x2:u.x,y2:u.y})}else t.setAttribute("d","")}else{const t=this._meteorDomElements[e];t&&t.parentNode&&(t.parentNode.removeChild(t),delete this._meteorDomElements[e])}}for(const e of c){this._particlesMap.delete(e);const t=this._particleDomElements[e];t&&t.parentNode&&t.parentNode.removeChild(t),delete this._particleDomElements[e];const o=this._meteorDomElements[e];o&&o.parentNode&&o.parentNode.removeChild(o),delete this._meteorDomElements[e]}const _=n.living_icons;if(_?.enabled&&"liquid"===_.battery_type&&!1!==_.battery_animated&&(this._liquidAccumulator+=o,this._liquidAccumulator>=.033)){this._liquidPhase=(this._liquidPhase+4)%360,this._liquidAccumulator=0;const e=this.shadowRoot?.querySelectorAll("path.node-liquid-wave");e&&e.forEach(e=>{const t=this._liquidPhase*Math.PI/180;parseFloat(e.getAttribute("data-cy")||"0");const o=parseFloat(e.getAttribute("data-r")||"0"),i=parseFloat(e.getAttribute("data-wy")||"0");if(o>0){const a=i+4*Math.sin(t),n=i-4*Math.sin(t),r=parseFloat(e.getAttribute("data-x0")||"0"),s=parseFloat(e.getAttribute("data-x3")||"0"),l=`M ${r} ${i} C ${r+.35*(s-r)} ${a}, ${r+.65*(s-r)} ${n}, ${s} ${i} A ${o} ${o} 0 0 1 ${r} ${i} Z`;e.setAttribute("d",l)}})}this._animFrameId=requestAnimationFrame(this._animateParticles.bind(this))}_handleBadgeClick(e,t){t.stopPropagation(),t.preventDefault(),this._gestureController.handlePointerCancel();const o=e.switchEntityId,i=e.entityId,a=!1!==e.badgeQuickToggle;let n=e.badgeTapBehavior||"auto";if("auto"===n)if(o)if(a){const e=o.split(".")[0];n=["climate","media_player","cover","lock","vacuum"].includes(e)?"more-info-switch":"toggle"}else n="more-info-switch";else n="more-info-sensor";if("toggle"===n)o&&a&&Je(this,this._hass,e,"toggle");else if("more-info-switch"===n||"more-info"===n){const e=o||i;if(e){const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}});this.dispatchEvent(t)}}else if("more-info-sensor"===n){const e=i||o;if(e){const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}});this.dispatchEvent(t)}}}_handleNodeKeyDown(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Je(this,this._hass,t,"tap"))}render(){if(!this._config||!this._hass)return V``;const e=this._hass?.language||"en",t=this._config.decimals??2,o=this._config.w_to_kw_threshold??1e3,i={...ge,...this._config.styles||{}},a={...fe,...this._config.effects||{}},n=Ie(this._hass,this._config.solar,"solar"),r=Ie(this._hass,this._config.grid,"grid"),s=Ie(this._hass,this._config.battery,"battery"),l=Ie(this._hass,this._config.home,"home"),d=[];Array.isArray(this._config.devices)&&this._config.devices.forEach(e=>{const t=Ie(this._hass,e,"device");d.push({...e,power:t.power,ampere:t.amperage,entityId:e.entity,include_in_home:!1!==e.include_in_home,hasInvalidUnit:t.hasInvalidUnit,invalidUnitReason:t.invalidUnitReason})});const c=[];n.hasInvalidUnit&&n.invalidUnitReason&&c.push(`Solare: ${n.invalidUnitReason}`),r.hasInvalidUnit&&r.invalidUnitReason&&c.push(`Rete: ${r.invalidUnitReason}`),s.hasInvalidUnit&&s.invalidUnitReason&&c.push(`Batteria: ${s.invalidUnitReason}`),l.hasInvalidUnit&&l.invalidUnitReason&&c.push(`Casa: ${l.invalidUnitReason}`),d.forEach(e=>{e.hasInvalidUnit&&e.invalidUnitReason&&c.push(`${e.name||e.id}: ${e.invalidUnitReason}`)});const _=[];this._watchedEntities.forEach(e=>{this._hass?.states&&!(e in this._hass.states)&&_.push(e)});const p=Boolean(this._config.solar?.entity||this._config.solar?.entity_import||this._config.solar?.entity_in||this._config.grid?.entity||this._config.grid?.entity_import||this._config.grid?.entity_in||this._config.battery?.entity||this._config.battery?.entity_charge||this._config.battery?.entity_in||this._config.home?.entity||this._config.devices&&this._config.devices.length>0),h=We({solar:n.power,grid:r.power,battery:s.power,home:l.isConfigured&&l.isValid?l.power:void 0,devices:d},this._config);this._lastCalculatedFlows=h;const m=this._actualLayout,u="horizontal"===m?je:Ze,g=i.node_radius_primary,f=i.node_radius_secondary,b=i.spacing_horizontal,y=i.spacing_vertical,v={};Object.keys(u.nodes).forEach(e=>{v[e]={...u.nodes[e],radius:g}});let x=`0 0 ${u.viewBox.width} ${u.viewBox.height}`;if("horizontal"===m){const e=je;d.forEach((t,o)=>{const i=Math.floor(o/2),a=o%2,n=e.devicesHorizontal.startX+i*b,r=0===a?e.devicesHorizontal.rowTopY:e.devicesHorizontal.rowBottomY;v[t.id]={x:n,y:r,radius:f}});const t=d.length>0?e.devicesHorizontal.startX+Math.floor((d.length-1)/2)*b+f+45:620;x=`0 0 ${Math.max(620,t)} ${Math.max(410,335+g+45)}`}else{const e=Ze;d.forEach((t,o)=>{const i=o%2,a=Math.floor(o/2),n=0===i?e.devicesVertical.colLeftX:e.devicesVertical.colRightX,r=e.devicesVertical.startY+a*y;v[t.id]={x:n,y:r,radius:f}});const t=d.length>0?e.devicesVertical.startY+Math.floor((d.length-1)/2)*y+f+50:560;x=`0 0 440 ${Math.max(560,t)}`}const w=`${x}_${m}_${g}_${f}_${b}_${y}_${i.line_routing_mode}_${i.bus_lane_spacing}_${i.bus_corner_radius}_${i.invert_bus_lane_order}_${d.map(e=>e.id).join(",")}`;this._lastGeometryHash!==w&&(this._pathLUT={},this._lastGeometryHash=w),this._lastNodePositions=v;const $=h.arcs.find(e=>"solar-home"===e.id),z=h.arcs.find(e=>"battery-home"===e.id),C=h.arcs.find(e=>"grid-home"===e.id),S=$?.value||0,A=z?.value||0,k=C?.value||0,M=this._config.display_zero_tolerance??1,F=s.power,P=Math.abs(F)<=M,E=Oe(this._config.battery?.color_charge||this._config.battery?.color,we),I=Oe(this._config.battery?.color_discharge,$e),D=Oe(this._config.battery?.color_idle,"var(--secondary-text-color, #94a3b8)"),T=Boolean(this._config.battery?.use_idle_color);let L;L=P?T?D:E:F>0?E:I;const N=S+A+k,U=[];N>0&&(S>0&&U.push({id:"solar",color:Oe(this._config.solar?.color,ye),percentage:S/N,value:S}),A>0&&U.push({id:"battery",color:I,percentage:A/N,value:A}),k>0&&U.push({id:"grid",color:Oe(this._config.grid?.color,ve),percentage:k/N,value:k}));let O,R=Oe(this._config.home?.color,ze);if("predominant"===i.home_glow_mode&&U.length>0){const e=[...U].sort((e,t)=>t.value-e.value);e[0]&&e[0].value>0&&(R=e[0].color)}const B=Oe(this._config.grid?.color,ve),W=xe;if(r.isDual)O=[{text:`← ${He(r.inPower||0,t,o,this._hass).full}`,color:B},{text:`→ ${He(r.outPower||0,t,o,this._hass).full}`,color:W}];else{const e=r.power;O=[{text:`${e>=0?"←":"→"} ${He(Math.abs(e),t,o,this._hass).full}`,color:e>=0?B:W}]}let q;if(s.isDual)q=[{text:`↓ ${He(s.inPower||0,t,o,this._hass).full}`,color:E},{text:`↑ ${He(s.outPower||0,t,o,this._hass).full}`,color:I}];else{const e=P&&T?D:F>=0?E:I;q=[{text:`${F>=0?"↓":"↑"} ${He(Math.abs(F),t,o,this._hass).full}`,color:e}]}const G=(e,o,a=!1)=>{const n=function(e){if(!e||"object"!=typeof e)return e;const t={...e},o=[{actionKey:"tap_action",targetKey:"tap_more_info_target"},{actionKey:"hold_action",targetKey:"hold_more_info_target"},{actionKey:"double_tap_action",targetKey:"double_tap_more_info_target"}];for(const{actionKey:e,targetKey:i}of o){const o=t[e];if(o&&"object"==typeof o){const a=o.action;"more-info-switch"===a||"more-info-device"===a?(t[e]={...o,action:"more-info"},t[i]||(t[i]="switch")):"more-info-sensor"===a&&(t[e]={...o,action:"more-info"},t[i]||(t[i]="sensor"))}}return t}(e||{}),r=n.show_label??i.show_labels??!0,s=n.label_font_size??i.font_size_label??10,l=n.label_spacing_below_node??i.spacing_label_below_node??14,d=n.label_chip_enabled??i.label_chip_enabled??!1,c=n.label_chip_opacity??i.label_chip_opacity??.18,_=n.label_chip_padding_x??i.label_chip_padding_x??8,p=n.label_chip_padding_y??i.label_chip_padding_y??3.5,h=n.label_border_radius??i.label_border_radius??6,m=n.label_border_width??i.label_border_width??1,u=Oe(n.label_color||i.label_color,""),g=n.label_color_mode??i.label_color_mode??"auto_contrast";let f=n.switch_entity;if(!f&&o){const e=o.split(".")[0];["switch","light","fan","input_boolean"].includes(e)&&(f=o)}let b=null;if(f&&this._hass?.states?.[f]){const e=this._hass.states[f].state;b="on"===e||"off"===e||"unavailable"===e?e:"unknown"}const y=Boolean(f),v=a?Boolean(n.badge_enabled&&y):void 0!==n.badge_enabled?Boolean(n.badge_enabled):Boolean(y),x=n.badge_style??i.badge_style??"dot",w=n.badge_position??i.badge_position??"top_right",$=n.badge_size??i.badge_size??("icon"===x?15:9),z=Oe(n.badge_color_on||i.badge_color_on,"#4caf50"),C=Oe(n.badge_color_off||i.badge_color_off,"#64748b"),S=n.badge_pulse??i.badge_pulse??!0,A=n.badge_quick_toggle??i.badge_quick_toggle??!0;let k,M=n.badge_tap_behavior;if(!M&&f){const e=f.split(".")[0];M=["climate","media_player","cover","lock","vacuum"].includes(e)?"more-info":"toggle"}if(n.secondary_info?.entity&&this._hass?.states?.[n.secondary_info.entity]){const e=this._hass.states[n.secondary_info.entity],o=n.secondary_info.decimals??t,i=parseFloat(e.state),a=isNaN(i)?e.state:i.toFixed(o),r=void 0!==n.secondary_info.unit?n.secondary_info.unit:e.attributes?.unit_of_measurement||"";k=`${a}${r?` ${r}`:""}`}return{showLabel:r,labelFontSize:s,labelSpacing:l,labelChipEnabled:d,labelChipOpacity:c,labelChipPaddingX:_,labelChipPaddingY:p,labelBorderRadius:h,labelBorderWidth:m,labelColor:u,labelColorMode:g,switchEntityId:f,switchState:b,tapAction:n.tap_action,holdAction:n.hold_action,doubleTapAction:n.double_tap_action,tapMoreInfoTarget:n.tap_more_info_target,holdMoreInfoTarget:n.hold_more_info_target,doubleTapMoreInfoTarget:n.double_tap_more_info_target,badgeEnabled:v,badgeStyle:x,badgePosition:w,badgeSize:$,badgeColorOn:z,badgeColorOff:C,badgePulse:S,badgeQuickToggle:A,badgeTapBehavior:M,secondaryInfoText:k}},j=He(n.power,t,o,this._hass),Z=He(Math.abs(r.power),t,o,this._hass),Y=He(Math.abs(s.power),t,o,this._hass),X=He(h.homeConsumption,t,o,this._hass),K=[];h.untrackedDevicesPower>M&&K.push(`${ut("card.not_tracked",e)}: ${He(h.untrackedDevicesPower,0,o,this._hass).full}`),h.isHomeOverloaded&&K.push(`⚠️ +${He(h.excessDevicesPower,0,o,this._hass).full}`),"unbalanced"===this._config.residual_handling&&h.unbalancedPower>M&&K.push(`Residuo: ${He(h.unbalancedPower,0,o,this._hass).full}`);const Q=[{id:"solar",label:this._config.solar?.name||ut("card.solar",e),icon:this._config.solar?.icon||Ce,color:Oe(this._config.solar?.color,ye),value:j.value,rawValue:n.power,unit:j.unit,amperage:n.amperage,topInfo:void 0!==n.amperage?Ge(n.amperage,1,this._hass).full:void 0,isActive:n.power>M,isUnavailable:n.isUnavailable,x:v.solar.x,y:v.solar.y,radius:v.solar.radius,entityId:this._config.solar?.entity,styles:i,effects:a,isSecondary:!1,iconSize:i.icon_size_primary,...G(this._config.solar,this._config.solar?.entity,!0)},{id:"grid",label:this._config.grid?.name||ut("card.grid",e),icon:this._config.grid?.icon||Se,color:Oe(this._config.grid?.color,r.power>=0?ve:xe),value:Z.value,rawValue:r.power,unit:Z.unit,extraValues:O,amperage:r.amperage,topInfo:void 0!==r.amperage?Ge(r.amperage,1,this._hass).full:void 0,isActive:Math.abs(r.power)>M,isUnavailable:r.isUnavailable,x:v.grid.x,y:v.grid.y,radius:v.grid.radius,entityId:this._config.grid?.entity||this._config.grid?.entity_import||this._config.grid?.entity_export,styles:i,effects:a,isSecondary:!1,iconSize:i.icon_size_primary,...G(this._config.grid,this._config.grid?.entity||this._config.grid?.entity_import||this._config.grid?.entity_export,!0)},{id:"battery",label:this._config.battery?.name||ut("card.battery",e),icon:this._config.battery?.icon||Ae,color:L,value:Y.value,rawValue:s.power,unit:Y.unit,extraValues:q,topInfo:s.soc||(void 0!==s.amperage?Ge(s.amperage,1,this._hass).full:void 0),socPercent:s.socPercent,amperage:s.amperage,isActive:Math.abs(s.power)>M,isUnavailable:s.isUnavailable,x:v.battery.x,y:v.battery.y,radius:v.battery.radius,entityId:this._config.battery?.entity||this._config.battery?.entity_charge||this._config.battery?.entity_discharge,styles:i,effects:a,isSecondary:!1,iconSize:i.icon_size_primary,...G(this._config.battery,this._config.battery?.entity||this._config.battery?.entity_charge||this._config.battery?.entity_discharge,!0)},{id:"home",label:this._config.home?.name||ut("card.home",e),icon:this._config.home?.icon||ke,color:R,value:X.value,rawValue:h.homeConsumption,unit:X.unit,secondaryText:K.length>0?K.join(" | "):void 0,isActive:h.homeConsumption>M,isUnavailable:!!l.isConfigured&&l.isUnavailable,x:v.home.x,y:v.home.y,radius:v.home.radius,entityId:this._config.home?.entity,mixSegments:U,styles:i,effects:a,isSecondary:!1,iconSize:i.icon_size_primary,...G(this._config.home,this._config.home?.entity,!0)}];return d.forEach(e=>{const n=v[e.id];if(!n)return;const r=He(e.power,t,o,this._hass);Q.push({id:e.id,label:e.name||e.id,icon:e.icon||Me,color:Oe(e.color,"var(--energy-device-color, #00bcd4)"),value:r.value,rawValue:e.power,unit:r.unit,topInfo:void 0!==e.ampere?Ge(e.ampere,1,this._hass).full:void 0,isActive:e.power>M,isUnavailable:!1,x:n.x,y:n.y,radius:n.radius,entityId:e.entityId,styles:i,effects:a,isSecondary:!0,iconSize:i.icon_size_secondary,...G(e,e.entityId,!1)})}),V`
      <ha-card>
        ${this._config.title?V`<div class="card-header">${this._config.title}</div>`:""}

        ${p?"":V`
          <ha-alert alert-type="info">
            Configura almeno un'entità per visualizzare i flussi energetici in tempo reale.
          </ha-alert>
        `}

        ${_.length>0?V`
          <ha-alert alert-type="warning">
            Entità non trovate in Home Assistant: ${_.join(", ")}
          </ha-alert>
        `:""}

        ${this._configWarnings.map(e=>V`
          <ha-alert alert-type="warning">${e}</ha-alert>
        `)}

        ${c.map(e=>V`
          <ha-alert alert-type="warning">${e}</ha-alert>
        `)}

        <div class="flow-container">
          <svg class="flow-svg"
               viewBox="${x}"
               role="group"
               aria-label="${this._config.title||"Power Flow Card"}">
            
            ${function(e=[],t){const o=t?.particle_inner_glow??!0,i=t?.particle_soft_edge??!0;return H`
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
      ${e.map(e=>H`
        <radialGradient id="glow-arc-${e.id}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${o?"#ffffff":e.color}" stop-opacity="1" />
          <stop offset="35%" stop-color="${e.color}" stop-opacity="1" />
          <stop offset="70%" stop-color="${e.color}" stop-opacity="${i?"0.7":"1"}" />
          <stop offset="100%" stop-color="${e.color}" stop-opacity="${i?"0":"1"}" />
        </radialGradient>
      `)}
    </defs>
  `}(h.arcs,i)}
            <defs class="dynamic-defs"></defs>

            <!-- Layer 1: Wires -->
            <g class="wires-layer">
              ${(()=>{const e=h.arcs.filter(e=>e.id.startsWith("home-"));return h.arcs.map(t=>{const o=v[t.from],a=v[t.to];if(!o||!a)return H``;const n=t.id.startsWith("home-")?e.findIndex(e=>e.id===t.id):0,r=function(e,t,o,i,a=0,n=1,r){const s=r?.line_routing_mode||"bezier_curved",l=r?.bus_lane_spacing??8,d=r?.bus_corner_radius??20,c=Math.min(12,.4*e.radius),_=Math.min(12,.4*t.radius),p=Math.max(4,e.radius-c),h=Math.max(4,t.radius-_),m=t.x-e.x,u=t.y-e.y,g=Math.atan2(u,m),f=qe({x:e.x,y:e.y},p,g),b=qe({x:t.x,y:t.y},h,g+Math.PI);if("horizontal"===o){if("solar-home"===i){const o=qe({x:e.x,y:e.y},p,.1),i=qe({x:t.x,y:t.y},h,-Math.PI/2);return`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} Q ${t.x.toFixed(1)} ${e.y.toFixed(1)} ${i.x.toFixed(1)} ${i.y.toFixed(1)}`}if("battery-home"===i){const o=qe({x:e.x,y:e.y},p,-.1),i=qe({x:t.x,y:t.y},h,Math.PI/2);return`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} Q ${t.x.toFixed(1)} ${e.y.toFixed(1)} ${i.x.toFixed(1)} ${i.y.toFixed(1)}`}if("solar-battery"===i){const o=qe({x:e.x,y:e.y},p,Math.PI/2),i=qe({x:t.x,y:t.y},h,-Math.PI/2);return`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} L ${i.x.toFixed(1)} ${i.y.toFixed(1)}`}if(i&&i.startsWith("home-")){const o=t.y<e.y;if("orthogonal_bus"===s){const i=Math.floor(a/2),s=Math.max(0,Math.ceil(n/2)-1),c=((r?.invert_bus_lane_order?s-i:i)+.5)*l,_=o?e.y-c:e.y+c,m=Math.asin(Math.max(-.9,Math.min(.9,(_-e.y)/p))),u=e.x+Math.cos(m)*p,g=t.x,f=o?t.y+h:t.y-h,b=Math.min(d,.45*Math.abs(g-u),.45*Math.abs(f-_)),y=Math.max(6,b);if(o){const e=g-y,t=_-y;return`M ${u.toFixed(1)} ${_.toFixed(1)} L ${e.toFixed(1)} ${_.toFixed(1)} C ${(e+.55*y).toFixed(1)} ${_.toFixed(1)}, ${g.toFixed(1)} ${(_-.45*y).toFixed(1)}, ${g.toFixed(1)} ${t.toFixed(1)} L ${g.toFixed(1)} ${f.toFixed(1)}`}{const e=g-y,t=_+y;return`M ${u.toFixed(1)} ${_.toFixed(1)} L ${e.toFixed(1)} ${_.toFixed(1)} C ${(e+.55*y).toFixed(1)} ${_.toFixed(1)}, ${g.toFixed(1)} ${(_+.45*y).toFixed(1)}, ${g.toFixed(1)} ${t.toFixed(1)} L ${g.toFixed(1)} ${f.toFixed(1)}`}}{const o=qe({x:e.x,y:e.y},p,0),i=qe({x:t.x,y:t.y},h,Math.PI),a=Math.max(40,i.x-o.x),n=o.x+.45*a,r=o.y,s=o.x+.55*a,l=i.y;return`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} C ${n.toFixed(1)} ${r.toFixed(1)}, ${s.toFixed(1)} ${l.toFixed(1)}, ${i.x.toFixed(1)} ${i.y.toFixed(1)}`}}return`M ${f.x.toFixed(1)} ${f.y.toFixed(1)} L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`}if("solar-home"===i){const o=qe({x:e.x,y:e.y},p,Math.PI/2),i=qe({x:t.x,y:t.y},h,-Math.PI/2);return`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} L ${i.x.toFixed(1)} ${i.y.toFixed(1)}`}if("grid-battery"===i){const o=qe({x:e.x,y:e.y},p,0),i=qe({x:t.x,y:t.y},h,Math.PI);return`M ${o.x.toFixed(1)} ${o.y.toFixed(1)} L ${i.x.toFixed(1)} ${i.y.toFixed(1)}`}if(i&&i.startsWith("home-")){const o=t.x<e.x;if("orthogonal_bus"===s){const i=Math.floor(a/2),s=Math.max(0,Math.ceil(n/2)-1),c=((r?.invert_bus_lane_order?s-i:i)+.5)*l,_=o?e.x-c:e.x+c,m=Math.max(-.9,Math.min(.9,(_-e.x)/p)),u=Math.PI/2+Math.asin(m),g=e.y+Math.sin(u)*p,f=o?t.x+h:t.x-h,b=t.y,y=Math.min(d,.45*Math.abs(f-_),.45*Math.abs(b-g)),v=Math.max(6,y);if(o){const e=b-v,t=_-v;return`M ${_.toFixed(1)} ${g.toFixed(1)} L ${_.toFixed(1)} ${e.toFixed(1)} C ${_.toFixed(1)} ${(e+.55*v).toFixed(1)}, ${(_-.45*v).toFixed(1)} ${b.toFixed(1)}, ${t.toFixed(1)} ${b.toFixed(1)} L ${f.toFixed(1)} ${b.toFixed(1)}`}{const e=b-v,t=_+v;return`M ${_.toFixed(1)} ${g.toFixed(1)} L ${_.toFixed(1)} ${e.toFixed(1)} C ${_.toFixed(1)} ${(e+.55*v).toFixed(1)}, ${(_+.45*v).toFixed(1)} ${b.toFixed(1)}, ${t.toFixed(1)} ${b.toFixed(1)} L ${f.toFixed(1)} ${b.toFixed(1)}`}}{const i=qe({x:e.x,y:e.y},p,Math.PI/2),a=o?0:Math.PI,n=qe({x:t.x,y:t.y},h,a),r=Math.max(40,n.y-i.y),s=i.x,l=i.y+.45*r,d=n.x+(o?20:-20),c=i.y+.65*r;return`M ${i.x.toFixed(1)} ${i.y.toFixed(1)} C ${s.toFixed(1)} ${l.toFixed(1)}, ${d.toFixed(1)} ${c.toFixed(1)}, ${n.x.toFixed(1)} ${n.y.toFixed(1)}`}}return`M ${f.x.toFixed(1)} ${f.y.toFixed(1)} L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`}(o,a,m,t.id,n,e.length,i);return function(e,t,o){if(!e.isActive&&"hidden"===o?.inactive_wire_style)return H``;const i=e.isActive?e.color:e.targetColor||e.color,a=e.isActive?1:o?.inactive_wire_opacity??.35,n=!e.isActive&&"solid"!==o?.inactive_wire_style;return H`
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
              ${Q.map(e=>function(e,t,o,i,a,n,r,s,l){const d=s||e.styles||{},c=l||e.effects||{},_=[e.secondaryText,e.secondaryInfoText].filter(Boolean).join(" - "),p=`${e.label}: ${e.value} ${e.unit}${_?` (${_})`:""}`,h=2*Math.PI*e.radius;let m=[];const u=!1!==d.show_home_mix_ring;if(u&&e.mixSegments&&e.mixSegments.length>0&&0!==(e.rawValue??0)){let t=0;m=e.mixSegments.map(o=>{const i=o.percentage*h,a=-t;return t+=i,H`
        <circle class="node-mix-segment"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius}"
                fill="none"
                stroke="${o.color}"
                stroke-width="${d.node_border_width??3.5}"
                stroke-dasharray="${i.toFixed(2)} ${h.toFixed(2)}"
                stroke-dashoffset="${a.toFixed(2)}"
                transform="rotate(-90 ${e.x} ${e.y})" />
      `})}const g="solar"===e.id||"grid"===e.id||"battery"===e.id||"home"===e.id,f=void 0!==e.isSecondary?e.isSecondary:!g,b=Boolean(e.extraValues&&e.extraValues.length>0),y=Boolean(b&&(e.extraValues?.length||0)>=2),v=Boolean(e.topInfo),x=e.iconSize||(f?d.icon_size_secondary??16:d.icon_size_primary??18),w=d.spacing_text_above_icon??4,$=d.spacing_text_below_icon??4,z=e.x-x/2;let C=e.y-x/2,S=C-w-2,A=C+x+$+9,k=C+x+$+8;const M=d.font_size_extra??d.font_size_directional??8.5;let F=k+M+3;f?v?(C=e.y-x/2-1,S=C-w-2,A=C+x+$+8):(C=e.y-x-1,A=C+x+$+8):v&&y?(C=e.y-x/2-4,S=C-w-3,k=C+x+$+8,F=k+M+3):v&&!y?(C=e.y-x/2-3,S=C-w-3,A=C+x+$+9,k=A):!v&&y?(C=e.y-x-4,k=C+x+$+7,F=k+M+3):(C=e.y-x-2,A=C+x+$+9);const P=f?d.font_size_secondary??d.font_size_value??9:d.font_size_primary??d.font_size_value??10,E=d.font_size_unit??8,I=M,D=d.font_size_top_info??8,T=d.font_size_sub??9,L=e.labelFontSize??d.font_size_label??10,N=!1!==d.show_node_shadows,U=d.node_shadow_offset_y??4,O=d.node_shadow_blur??10,R=d.node_shadow_color?Oe(d.node_shadow_color,"rgba(0, 0, 0, 0.35)"):`rgba(0, 0, 0, ${d.node_shadow_opacity??.35})`,B=N?`drop-shadow(0 ${U}px ${O}px ${R})`:"none",W=!1!==e.showLabel,q=e.labelSpacing??d.spacing_label_below_node??14,V=void 0!==e.labelChipEnabled?Boolean(e.labelChipEnabled):Boolean(d.label_chip_enabled),G=e.labelChipOpacity??d.label_chip_opacity??.18,j=e.labelChipPaddingX??d.label_chip_padding_x??8,Z=e.labelChipPaddingY??d.label_chip_padding_y??3.5,Y=e.labelBorderRadius??d.label_border_radius??6,X=e.labelBorderWidth??d.label_border_width??1,K=e.labelColorMode??d.label_color_mode??"auto_contrast",Q=e.y+e.radius+q;let J=!1,ee=e.label.length,te=H`<tspan x="${e.x}">${e.label}</tspan>`;if(e.label.length>11)if(e.label.includes("/")){const t=e.label.split("/"),o=t[0]+"/",i=t.slice(1).join("/");J=!0,ee=Math.max(o.length,i.length),te=H`
        <tspan x="${e.x}" dy="0">${o}</tspan>
        <tspan x="${e.x}" dy="${(1.15*L).toFixed(1)}">${i}</tspan>
      `}else if(e.label.includes(" ")){const t=e.label.split(" "),o=Math.ceil(t.length/2),i=t.slice(0,o).join(" "),a=t.slice(o).join(" ");J=!0,ee=Math.max(i.length,a.length),te=H`
        <tspan x="${e.x}" dy="0">${i}</tspan>
        <tspan x="${e.x}" dy="${(1.15*L).toFixed(1)}">${a}</tspan>
      `}const oe=.72*L,ie=Math.max(28,ee*oe+2*j),ae=1.15*L,ne=J?1.25*L+ae+2*Z:1.25*L+2*Z,re=e.x-ie/2,se=Q-.95*L-Z;let le;le="auto_contrast"===K?V?Ye(e.color,G):"var(--secondary-text-color, #94a3b8)":"white"===K?"#ffffff":"black"===K?"#0f172a":"match_entity"===K?e.color:"custom"===K?Oe(e.labelColor||d.label_color,"#ffffff"):"var(--secondary-text-color, #94a3b8)";const de=Q+(J?1.25*L+ae:1.1*L)+4,ce=`\n    --node-hover-color: ${e.color};\n    --node-hover-glow-radius: ${d.hover_glow_radius??10}px;\n    --node-border-width: ${d.node_border_width??2.5}px;\n    --node-shadow-filter: ${B};\n    --font-size-value: ${P}px;\n    --font-size-unit: ${E}px;\n    --font-size-label: ${L}px;\n    --font-size-top-info: ${D}px;\n    --font-size-directional: ${I}px;\n    --font-size-sub: ${T}px;\n  `;let _e="";if(c.living_icons?.enabled&&e.isActive&&("home"===e.id||f)){const e=c.living_icons.load_animation||"rotate";"rotate"===e?_e="animate-rotate":"pulse"===e&&(_e="animate-pulse")}const pe="battery"===e.id,he=Boolean(pe&&c.living_icons?.enabled&&"liquid"===c.living_icons.battery_type),me=Boolean(pe&&c.living_icons?.enabled&&"gradient"===c.living_icons.battery_type),ue=Boolean(c.glassmorphism?.enabled),ge=(c.glassmorphism?.intensity??50)/50,fe=Boolean(ue&&!1!==c.glassmorphism?.neon_core);let be="";if(he){const t=e.socPercent??50,o=e.y+e.radius-t/100*(2*e.radius);be=`M ${e.x-e.radius} ${o} Q ${e.x-e.radius/2} ${o-3} ${e.x} ${o} T ${e.x+e.radius} ${o} L ${e.x+e.radius} ${e.y+e.radius} L ${e.x-e.radius} ${e.y+e.radius} Z`}let ye=e.x+.707*e.radius,ve=e.y-.707*e.radius;"top_left"===e.badgePosition?(ye=e.x-.707*e.radius,ve=e.y-.707*e.radius):"bottom_right"===e.badgePosition?(ye=e.x+.707*e.radius,ve=e.y+.707*e.radius):"bottom_left"===e.badgePosition&&(ye=e.x-.707*e.radius,ve=e.y+.707*e.radius);const xe="on"===e.switchState||null===e.switchState&&e.isActive,we=xe?e.badgeColorOn||"#4caf50":e.badgeColorOff||"#64748b",$e=e.badgeSize||("icon"===e.badgeStyle?15:9),ze=$e/2,Ce=Boolean(e.badgePulse&&xe&&e.isActive);return H`
    <g class="node-group ${"off"===e.switchState?"node-is-off":""}"
       tabindex="0"
       role="button"
       style="${ce}"
       aria-label="${p}"
       @pointerdown=${o=>t(o,e)}
       @pointermove=${e=>o(e)}
       @pointerup=${t=>i(t,e)}
       @pointercancel=${()=>a()}
       @pointerleave=${()=>a()}
       @contextmenu=${e=>e.preventDefault()}
       @keydown=${t=>r(t,e)}>

      <defs>
        ${he?H`
          <clipPath id="node-clip-${e.id}">
            <circle cx="${e.x}" cy="${e.y}" r="${e.radius-1}" />
          </clipPath>
        `:""}

        ${me?H`
          <radialGradient id="battery-glow-${e.id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="${e.color}" stop-opacity="${Math.min(.45,(e.socPercent??50)/100*.45).toFixed(2)}" />
            <stop offset="100%" stop-color="${e.color}" stop-opacity="0" />
          </radialGradient>
        `:""}

        ${ue?H`
          <linearGradient id="glass-glare-${e.id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="${(.28*ge).toFixed(2)}" />
            <stop offset="40%" stop-color="#ffffff" stop-opacity="${(.08*ge).toFixed(2)}" />
            <stop offset="65%" stop-color="#ffffff" stop-opacity="0" />
            <stop offset="100%" stop-color="#000000" stop-opacity="${(.22*ge).toFixed(2)}" />
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
      ${he?H`
        <path id="liquid-wave-${e.id}"
              class="node-liquid-wave"
              clip-path="url(#node-clip-${e.id})"
              fill="${e.color}"
              opacity="0.32"
              d="${be}" />
      `:""}

      <!-- Battery Dynamic Radial Gradient Glow -->
      ${me?H`
        <circle class="node-battery-glow"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius-2}"
                fill="url(#battery-glow-${e.id})"
                pointer-events="none" />
      `:""}

      <!-- Glassmorphism 3D Glare Filter -->
      ${ue?H`
        <circle class="node-glass-glare"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius-1}"
                fill="url(#glass-glare-${e.id})" />
      `:""}

      <!-- Neon Core Concentric Inner Glowing Ring -->
      ${fe?H`
        <circle class="node-neon-ring"
                cx="${e.x}"
                cy="${e.y}"
                r="${e.radius-3.5}"
                stroke="${e.color}"
                stroke-width="1.5"
                stroke-opacity="${(.65*ge).toFixed(2)}" />
      `:""}

      <!-- Top Info (e.g. SoC 65% or Amperage 1 A) -->
      ${v?H`
        <text class="node-top-info" x="${e.x}" y="${S.toFixed(1)}">
          ${e.topInfo}
        </text>
      `:""}

      <!-- Center Icon with direct pixel dimensions and Living Icon animation class -->
      <foreignObject x="${z.toFixed(1)}" y="${C.toFixed(1)}" width="${x.toFixed(1)}" height="${x.toFixed(1)}" style="overflow: visible;">
        <div class="node-icon-foreign ${_e}" xmlns="http://www.w3.org/1999/xhtml" style="width: ${x.toFixed(1)}px; height: ${x.toFixed(1)}px; display: flex; align-items: center; justify-content: center;">
          <ha-icon icon="${e.icon}" style="--mdc-icon-size: ${x.toFixed(1)}px; width: ${x.toFixed(1)}px; height: ${x.toFixed(1)}px; display: flex; align-items: center; justify-content: center;"></ha-icon>
        </div>
      </foreignObject>

      <!-- Values Inside Circle -->
      ${b?H`
        ${e.extraValues.map((t,o)=>{const i=0===o?k:F;return H`
            <text class="node-directional-value" 
                  x="${e.x}" 
                  y="${i.toFixed(1)}" 
                  style="${t.color?`fill: ${t.color};`:""}">
              ${t.text}
            </text>
          `})}
      `:H`
        <text class="node-value" x="${e.x}" y="${A.toFixed(1)}">
          ${e.isUnavailable?"--":H`<tspan>${e.value}</tspan>${e.unit?H` <tspan class="node-unit">${e.unit}</tspan>`:""}`}
        </text>
      `}

      <!-- Outside Label & Optional Chip Background -->
      ${W?H`
        ${V?H`
          <rect class="node-label-chip"
                x="${re.toFixed(1)}"
                y="${se.toFixed(1)}"
                width="${ie.toFixed(1)}"
                height="${ne.toFixed(1)}"
                rx="${Y}"
                ry="${Y}"
                fill="${e.color}"
                fill-opacity="${G.toFixed(2)}"
                stroke="${e.color}"
                stroke-opacity="${Math.min(1,2.2*G).toFixed(2)}"
                stroke-width="${X}"
                pointer-events="none" />
        `:""}
        <text class="node-label-outside" 
              x="${e.x}" 
              y="${Q.toFixed(1)}" 
              style="fill: ${le}; font-size: ${L}px;">
          ${te}
        </text>
      `:""}

      <!-- Optional Secondary Text -->
      ${e.secondaryText&&!b&&W?H`
        <text class="node-sub-outside" x="${e.x}" y="${de.toFixed(1)}">
          ${e.secondaryText}
        </text>
      `:""}

      <!-- Dedicated Secondary Info Text -->
      ${e.secondaryInfoText&&W?H`
        <text class="node-sub-outside node-secondary-info" x="${e.x}" y="${(de+(e.secondaryText&&!b?11:0)).toFixed(1)}">
          ${e.secondaryInfoText}
        </text>
      `:""}

      <!-- Status / Notification Badge -->
      ${e.badgeEnabled?H`
        <g class="node-badge-group ${Ce?"badge-pulsing":""}" 
           @pointerdown=${e=>e.stopPropagation()}
           @pointerup=${e=>e.stopPropagation()}
           @pointermove=${e=>e.stopPropagation()}
           @mousedown=${e=>e.stopPropagation()}
           @mouseup=${e=>e.stopPropagation()}
           @click=${t=>n(e,t)}
           style="cursor: pointer; transform-origin: ${ye.toFixed(1)}px ${ve.toFixed(1)}px;">
          <!-- Cutout ring to separate badge cleanly from node border -->
          <circle cx="${ye.toFixed(1)}" 
                  cy="${ve.toFixed(1)}" 
                  r="${(ze+1.8).toFixed(1)}" 
                  fill="var(--ha-card-background, var(--card-background-color, #1c1c1e))" />
          
          ${"icon"===e.badgeStyle?H`
            <circle cx="${ye.toFixed(1)}" 
                    cy="${ve.toFixed(1)}" 
                    r="${ze.toFixed(1)}" 
                    fill="${we}" />
            <foreignObject x="${(ye-ze).toFixed(1)}" 
                           y="${(ve-ze).toFixed(1)}" 
                           width="${$e.toFixed(1)}" 
                           height="${$e.toFixed(1)}" 
                           style="overflow: visible; pointer-events: none;">
              <div xmlns="http://www.w3.org/1999/xhtml" style="width: ${$e}px; height: ${$e}px; display: flex; align-items: center; justify-content: center;">
                <ha-icon icon="${xe?"mdi:power":"mdi:power-off"}" style="--mdc-icon-size: ${(.75*$e).toFixed(1)}px; color: #ffffff; width: ${$e}px; height: ${$e}px; display: flex; align-items: center; justify-content: center;"></ha-icon>
              </div>
            </foreignObject>
          `:"text"===e.badgeStyle?H`
            <rect x="${(ye-11).toFixed(1)}" 
                  y="${(ve-6.5).toFixed(1)}" 
                  width="22" 
                  height="13" 
                  rx="6.5" 
                  ry="6.5" 
                  fill="${we}" />
            <text x="${ye.toFixed(1)}" 
                  y="${(ve+3.5).toFixed(1)}" 
                  style="font-size: 7.5px; font-weight: 800; fill: #ffffff; text-anchor: middle; pointer-events: none;">
              ${xe?"ON":"OFF"}
            </text>
          `:H`
            <circle class="node-badge-dot" 
                    cx="${ye.toFixed(1)}" 
                    cy="${ve.toFixed(1)}" 
                    r="${ze.toFixed(1)}" 
                    fill="${we}" />
          `}
        </g>
      `:""}
    </g>
  `}(e,(e,t)=>this._gestureController.handlePointerDown(e,t),e=>this._gestureController.handlePointerMove(e),(e,t)=>this._gestureController.handlePointerUp(e,t),()=>this._gestureController.handlePointerCancel(),(e,t)=>this._handleBadgeClick(e,t),(e,t)=>this._handleNodeKeyDown(e,t),i,a))}
            </g>
          </svg>
        </div>
      </ha-card>
    `}};function ft(e){if(null!=e&&""!==e){if(Array.isArray(e))return e.map(e=>ft(e)).filter(e=>null!=e);if("object"==typeof e){const t={};for(const[o,i]of Object.entries(e))if(null!=i&&""!==i)if("object"==typeof i){const e=ft(i);void 0!==e&&(t[o]=e)}else t[o]=i;return t}return e}}function bt(e){if(!e||"object"!=typeof e)return e;const t={...ft(e)||{}};if(t.styles&&"object"==typeof t.styles&&(t.styles=at(t.styles)),t.solar&&(t.solar=tt(t.solar)),t.grid&&(t.grid=tt(t.grid)),t.battery&&(t.battery=tt(t.battery)),t.home&&(t.home=tt(t.home)),Array.isArray(t.devices)&&(t.devices=t.devices.map(e=>tt(e))),t.styles&&"object"==typeof t.styles){const e={};let o=!1;for(const[i,a]of Object.entries(t.styles)){a!==ge[i]&&(e[i]=a,o=!0)}o?t.styles=e:delete t.styles}if(t.effects&&"object"==typeof t.effects){const e={};let o=!1;for(const[i,a]of Object.entries(t.effects))if(a&&"object"==typeof a){const t=fe[i]||{},n={};let r=!1;for(const[e,o]of Object.entries(a)){o!==t[e]&&(n[e]=o,r=!0)}r&&(e[i]=n,o=!0)}o?t.effects=e:delete t.effects}const o=new Set(["type","card_version","solar","grid","battery","home","devices","styles","effects"]);for(const[e,i]of Object.entries(t))if(!o.has(e)){const o=be[e];void 0!==o&&i===o&&delete t[e]}return t}function yt(e,t="en"){if(e.label)return e.label;const o=e.name;if(!o)return"";const i=`editor.${o}`,a=ut(i,t);if(a!==i)return a;const n=`editor.section.${o}`,r=ut(n,t);return r!==n?r:o}function vt(e,t="en"){if(e.helper)return e.helper;const o=e.name;if(!o)return;const i=`editor.helper.${o}`,a=ut(i,t);return a!==i?a:void 0}function xt(e="en"){return[{name:"title",selector:{text:{}}},{name:"layout_mode",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ut("editor.option.layout_mode.auto",e)},{value:"horizontal",label:ut("editor.option.layout_mode.horizontal",e)},{value:"vertical",label:ut("editor.option.layout_mode.vertical",e)}]}}},{name:"auto_layout_breakpoint",selector:{number:{min:200,max:1200,step:10,unit_of_measurement:"px",mode:"slider"}}}]}function wt(e,t="en",o){const i=[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entity",selector:{entity:{domain:"sensor",device_class:"power"}}}];return"solar"===e?i.push({name:"color",selector:{ui_color:{default_color:"#ff9800"}}},{name:"invert",selector:{boolean:{}}}):"grid"===e?i.push({name:"entity_import",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"entity_export",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"color",selector:{ui_color:{default_color:"#f44336"}}},{name:"invert",selector:{boolean:{}}}):"battery"===e?(i.push({name:"entity_charge",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"entity_discharge",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"state_of_charge",selector:{entity:{domain:"sensor",device_class:"battery"}}},{name:"color_charge",selector:{ui_color:{default_color:"#4caf50"}}},{name:"color_discharge",selector:{ui_color:{default_color:"#9c27b0"}}},{name:"use_idle_color",selector:{boolean:{}}}),o?.use_idle_color&&i.push({name:"color_idle",selector:{ui_color:{default_color:"#94a3b8"}}}),i.push({name:"invert",selector:{boolean:{}}})):"home"===e&&i.push({name:"color",selector:{ui_color:{default_color:"#03a9f4"}}},{name:"invert",selector:{boolean:{}}}),i.push({name:"switch_entity",selector:{entity:{domain:["switch","light","fan","input_boolean","climate","media_player","cover","lock","vacuum","sensor"]}}},{name:"display_zero",selector:{boolean:{}}},{name:"display_zero_tolerance",selector:{number:{min:0,max:500,step:1,unit_of_measurement:"W"}}},{name:"show_label",selector:{boolean:{}}}),i.push({name:"secondary_info",type:"expandable",title:ut("editor.section.secondary_info",t),schema:[{name:"entity",selector:{entity:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:3,step:1}}}]}),i.push({name:"badge",type:"expandable",title:ut("editor.section.badge",t),schema:[{name:"badge_enabled",selector:{boolean:{}}},{name:"badge_style",selector:{select:{mode:"dropdown",options:[{value:"dot",label:ut("editor.option.badge_style.dot",t)},{value:"icon",label:ut("editor.option.badge_style.icon",t)},{value:"text",label:ut("editor.option.badge_style.text",t)}]}}},{name:"badge_position",selector:{select:{mode:"dropdown",options:[{value:"top_right",label:ut("editor.option.badge_position.top_right",t)},{value:"top_left",label:ut("editor.option.badge_position.top_left",t)},{value:"bottom_right",label:ut("editor.option.badge_position.bottom_right",t)},{value:"bottom_left",label:ut("editor.option.badge_position.bottom_left",t)}]}}},{name:"badge_size",selector:{number:{min:6,max:30,step:1,unit_of_measurement:"px",mode:"slider"}}},{name:"badge_color_on",selector:{ui_color:{default_color:"#4caf50"}}},{name:"badge_color_off",selector:{ui_color:{default_color:"#64748b"}}},{name:"badge_pulse",selector:{boolean:{}}},{name:"badge_quick_toggle",selector:{boolean:{}}},{name:"badge_tap_behavior",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ut("editor.option.badge_tap_behavior.auto",t)},{value:"toggle",label:ut("editor.option.badge_tap_behavior.toggle",t)},{value:"more-info-switch",label:ut("editor.option.badge_tap_behavior.more_info_switch",t)},{value:"more-info-sensor",label:ut("editor.option.badge_tap_behavior.more_info_sensor",t)},{value:"more-info",label:ut("editor.option.badge_tap_behavior.more_info",t)}]}}}]}),i.push({name:"label_chip",type:"expandable",title:ut("editor.section.label_chip",t),schema:[{name:"label_font_size",selector:{number:{min:6,max:25,step:.5,unit_of_measurement:"px"}}},{name:"label_spacing_below_node",selector:{number:{min:2,max:40,step:1,unit_of_measurement:"px"}}},{name:"label_chip_enabled",selector:{boolean:{}}},{name:"label_chip_opacity",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"label_chip_padding_x",selector:{number:{min:2,max:25,step:1,unit_of_measurement:"px"}}},{name:"label_chip_padding_y",selector:{number:{min:1,max:15,step:.5,unit_of_measurement:"px"}}},{name:"label_border_radius",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}},{name:"label_border_width",selector:{number:{min:0,max:4,step:.5,unit_of_measurement:"px"}}},{name:"label_color_mode",selector:{select:{mode:"dropdown",options:[{value:"auto_contrast",label:ut("editor.option.label_color_mode.auto_contrast",t)},{value:"white",label:ut("editor.option.label_color_mode.white",t)},{value:"black",label:ut("editor.option.label_color_mode.black",t)},{value:"match_entity",label:ut("editor.option.label_color_mode.match_entity",t)},{value:"secondary",label:ut("editor.option.label_color_mode.secondary",t)},{value:"custom",label:ut("editor.option.label_color_mode.custom",t)}]}}},{name:"label_color",selector:{ui_color:{}}}]}),i.push({name:"actions",type:"expandable",title:ut("editor.section.actions",t),schema:[{name:"tap_action",selector:{ui_action:{}}},{name:"tap_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ut("editor.option.more_info_target.auto",t)},{value:"switch",label:ut("editor.option.more_info_target.switch",t)},{value:"sensor",label:ut("editor.option.more_info_target.sensor",t)}]}}},{name:"hold_action",selector:{ui_action:{}}},{name:"hold_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ut("editor.option.more_info_target.auto",t)},{value:"switch",label:ut("editor.option.more_info_target.switch",t)},{value:"sensor",label:ut("editor.option.more_info_target.sensor",t)}]}}},{name:"double_tap_action",selector:{ui_action:{}}},{name:"double_tap_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ut("editor.option.more_info_target.auto",t)},{value:"switch",label:ut("editor.option.more_info_target.switch",t)},{value:"sensor",label:ut("editor.option.more_info_target.sensor",t)}]}}}]}),i}function $t(e="en"){return[{name:"node_dimensions",type:"expandable",title:ut("editor.section.node_dimensions",e),schema:[{name:"node_radius_primary",selector:{number:{min:10,max:60,step:1,unit_of_measurement:"px"}}},{name:"node_radius_secondary",selector:{number:{min:8,max:50,step:1,unit_of_measurement:"px"}}},{name:"icon_size_primary",selector:{number:{min:10,max:50,step:1,unit_of_measurement:"px"}}},{name:"icon_size_secondary",selector:{number:{min:8,max:40,step:1,unit_of_measurement:"px"}}},{name:"node_border_width",selector:{number:{min:.5,max:10,step:.5,unit_of_measurement:"px"}}}]},{name:"shadows",type:"expandable",title:ut("editor.section.shadows",e),schema:[{name:"show_node_shadows",selector:{boolean:{}}},{name:"hover_glow_radius",selector:{number:{min:0,max:60,step:1,unit_of_measurement:"px"}}},{name:"node_shadow_color",selector:{ui_color:{}}},{name:"node_shadow_blur",selector:{number:{min:0,max:40,step:1,unit_of_measurement:"px"}}},{name:"node_shadow_spread",selector:{number:{min:0,max:30,step:1,unit_of_measurement:"px"}}},{name:"node_shadow_offset_y",selector:{number:{min:-20,max:30,step:1,unit_of_measurement:"px"}}}]},{name:"typography",type:"expandable",title:ut("editor.section.typography",e),schema:[{name:"font_size_primary",selector:{number:{min:8,max:28,step:.5,unit_of_measurement:"px"}}},{name:"font_size_secondary",selector:{number:{min:6,max:22,step:.5,unit_of_measurement:"px"}}},{name:"font_size_unit",selector:{number:{min:5,max:18,step:.5,unit_of_measurement:"px"}}},{name:"font_size_extra",selector:{number:{min:6,max:18,step:.5,unit_of_measurement:"px"}}},{name:"font_size_sub",selector:{number:{min:6,max:18,step:.5,unit_of_measurement:"px"}}},{name:"font_size_top_info",selector:{number:{min:6,max:18,step:.5,unit_of_measurement:"px"}}},{name:"spacing_text_above_icon",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}},{name:"spacing_text_below_icon",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}}]},{name:"labels",type:"expandable",title:ut("editor.section.labels",e),schema:[{name:"show_labels",selector:{boolean:{}}},{name:"font_size_label",selector:{number:{min:6,max:22,step:.5,unit_of_measurement:"px"}}},{name:"spacing_label_below_node",selector:{number:{min:2,max:40,step:1,unit_of_measurement:"px"}}},{name:"label_color_mode",selector:{select:{mode:"dropdown",options:[{value:"auto_contrast",label:ut("editor.option.label_color_mode.auto_contrast",e)},{value:"white",label:ut("editor.option.label_color_mode.white",e)},{value:"black",label:ut("editor.option.label_color_mode.black",e)},{value:"match_entity",label:ut("editor.option.label_color_mode.match_entity",e)},{value:"secondary",label:ut("editor.option.label_color_mode.secondary",e)},{value:"custom",label:ut("editor.option.label_color_mode.custom",e)}]}}},{name:"label_color",selector:{ui_color:{}}},{name:"label_chip_enabled",selector:{boolean:{}}},{name:"label_chip_opacity",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"label_chip_padding_x",selector:{number:{min:2,max:25,step:1,unit_of_measurement:"px"}}},{name:"label_chip_padding_y",selector:{number:{min:1,max:15,step:.5,unit_of_measurement:"px"}}},{name:"label_border_radius",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}},{name:"label_border_width",selector:{number:{min:0,max:4,step:.5,unit_of_measurement:"px"}}}]},{name:"home_ring",type:"expandable",title:ut("editor.section.home_ring",e),schema:[{name:"show_home_mix_ring",selector:{boolean:{}}},{name:"home_glow_mode",selector:{select:{mode:"dropdown",options:[{value:"predominant",label:ut("editor.option.home_glow_mode.predominant",e)},{value:"custom",label:ut("editor.option.home_glow_mode.custom",e)}]}}}]},{name:"cables_and_bus",type:"expandable",title:ut("editor.section.cables_and_bus",e),schema:[{name:"line_routing_mode",selector:{select:{mode:"dropdown",options:[{value:"bezier_curved",label:ut("editor.option.line_routing_mode.bezier_curved",e)},{value:"orthogonal_bus",label:ut("editor.option.line_routing_mode.orthogonal_bus",e)}]}}},{name:"bus_lane_spacing",selector:{number:{min:2,max:30,step:1,unit_of_measurement:"px"}}},{name:"bus_corner_radius",selector:{number:{min:0,max:30,step:1,unit_of_measurement:"px"}}},{name:"invert_bus_lane_order",selector:{boolean:{}}},{name:"spacing_horizontal",selector:{number:{min:10,max:250,step:2,unit_of_measurement:"px"}}},{name:"spacing_vertical",selector:{number:{min:10,max:250,step:2,unit_of_measurement:"px"}}}]},{name:"wires",type:"expandable",title:ut("editor.section.wires",e),schema:[{name:"stroke_mode",selector:{select:{mode:"dropdown",options:[{value:"watt",label:ut("editor.option.stroke_mode.watt",e)},{value:"fixed",label:ut("editor.option.stroke_mode.fixed",e)},{value:"amperage",label:ut("editor.option.stroke_mode.amperage",e)}]}}},{name:"min_stroke",selector:{number:{min:.5,max:10,step:.5,unit_of_measurement:"px"}}},{name:"max_stroke",selector:{number:{min:1,max:20,step:.5,unit_of_measurement:"px"}}},{name:"inactive_wire_style",selector:{select:{mode:"dropdown",options:[{value:"dashed",label:ut("editor.option.inactive_wire_style.dashed",e)},{value:"solid",label:ut("editor.option.inactive_wire_style.solid",e)},{value:"hidden",label:ut("editor.option.inactive_wire_style.hidden",e)}]}}},{name:"inactive_wire_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}}}]},{name:"particle_dynamics",type:"expandable",title:ut("editor.section.particle_dynamics",e),schema:[{name:"speed_mode",selector:{select:{mode:"dropdown",options:[{value:"absolute",label:ut("editor.option.speed_mode.absolute",e)},{value:"relative",label:ut("editor.option.speed_mode.relative",e)}]}}},{name:"normalize_speed_by_length",selector:{boolean:{}}},{name:"min_duration",selector:{number:{min:.2,max:5,step:.1,unit_of_measurement:"s"}}},{name:"max_duration",selector:{number:{min:1,max:20,step:.1,unit_of_measurement:"s"}}}]},{name:"particles",type:"expandable",title:ut("editor.section.particles",e),schema:[{name:"particles_per_arc",selector:{number:{min:1,max:10,step:1}}},{name:"max_total_particles",selector:{number:{min:5,max:100,step:1}}},{name:"particle_size_offset",selector:{number:{min:-5,max:10,step:.5,unit_of_measurement:"px"}}},{name:"particle_inner_glow",selector:{boolean:{}}},{name:"particle_soft_edge",selector:{boolean:{}}}]}]}function zt(e="en"){return[{name:"meteor_trail",type:"expandable",title:ut("editor.section.meteor_trail",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"tail_length",selector:{number:{min:2,max:20,step:1}}},{name:"glow_intensity",selector:{number:{min:.1,max:2,step:.1,mode:"slider"}}}]},{name:"living_icons",type:"expandable",title:ut("editor.section.living_icons",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"battery_type",selector:{select:{mode:"dropdown",options:[{value:"gradient",label:ut("editor.option.battery_type.gradient",e)},{value:"liquid",label:ut("editor.option.battery_type.liquid",e)}]}}},{name:"battery_animated",selector:{boolean:{}}},{name:"load_animation",selector:{select:{mode:"dropdown",options:[{value:"rotate",label:ut("editor.option.load_animation.rotate",e)},{value:"pulse",label:ut("editor.option.load_animation.pulse",e)},{value:"none",label:ut("editor.option.load_animation.none",e)}]}}}]},{name:"glassmorphism",type:"expandable",title:ut("editor.section.glassmorphism",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"intensity",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"neon_core",selector:{boolean:{}}}]},{name:"impact_ripples",type:"expandable",title:ut("editor.section.impact_ripples",e),schema:[{name:"enabled",selector:{boolean:{}}},{name:"ripple_size",selector:{number:{min:5,max:50,step:1,unit_of_measurement:"px"}}},{name:"ripple_color",selector:{ui_color:{}}}]}]}function Ct(e="en",t){const o=[{name:"decimals",selector:{number:{min:0,max:3,step:1}}},{name:"w_to_kw_threshold",selector:{number:{min:100,max:1e4,step:50,unit_of_measurement:"W"}}},{name:"scale_curve",selector:{select:{mode:"dropdown",options:[{value:"sqrt",label:ut("editor.option.scale_curve.sqrt",e)},{value:"linear",label:ut("editor.option.scale_curve.linear",e)},{value:"log",label:ut("editor.option.scale_curve.log",e)}]}}},{name:"scale_min",selector:{number:{min:0,max:5e3,step:10,unit_of_measurement:"W"}}},{name:"scale_max",selector:{number:{min:500,max:5e4,step:100,unit_of_measurement:"W"}}},{name:"smoothing_factor",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"display_zero_tolerance",selector:{number:{min:0,max:50,step:.5,unit_of_measurement:"W"}}},{name:"residual_handling",selector:{select:{mode:"dropdown",options:[{value:"clamp",label:ut("editor.option.residual_handling.clamp",e)},{value:"absorb",label:ut("editor.option.residual_handling.absorb",e)},{value:"unbalanced",label:ut("editor.option.residual_handling.unbalanced",e)}]}}}];return"absorb"===t?.residual_handling&&o.push({name:"residual_absorb_target",selector:{select:{mode:"dropdown",options:[{value:"grid",label:ut("editor.option.residual_absorb_target.grid",e)},{value:"battery",label:ut("editor.option.residual_absorb_target.battery",e)}]}}}),o}function St(e="en"){return[{name:"id",selector:{text:{}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entity",selector:{entity:{domain:"sensor",device_class:"power"}}},{name:"switch_entity",selector:{entity:{domain:["switch","light","fan","input_boolean","climate","media_player","cover","lock","vacuum","sensor"]}}},{name:"entity_amperage",selector:{entity:{domain:"sensor",device_class:"current"}}},{name:"color",selector:{ui_color:{default_color:"#00bcd4"}}},{name:"include_in_home",selector:{boolean:{}}},{name:"invert",selector:{boolean:{}}},{name:"show_label",selector:{boolean:{}}},{name:"display_zero",selector:{boolean:{}}},{name:"display_zero_tolerance",selector:{number:{min:0,max:500,step:1,unit_of_measurement:"W"}}},{name:"secondary_info",type:"expandable",title:ut("editor.section.secondary_info",e),schema:[{name:"entity",selector:{entity:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:3,step:1}}}]},{name:"badge",type:"expandable",title:ut("editor.section.badge",e),schema:[{name:"badge_enabled",selector:{boolean:{}}},{name:"badge_style",selector:{select:{mode:"dropdown",options:[{value:"dot",label:ut("editor.option.badge_style.dot",e)},{value:"icon",label:ut("editor.option.badge_style.icon",e)},{value:"text",label:ut("editor.option.badge_style.text",e)}]}}},{name:"badge_position",selector:{select:{mode:"dropdown",options:[{value:"top_right",label:ut("editor.option.badge_position.top_right",e)},{value:"top_left",label:ut("editor.option.badge_position.top_left",e)},{value:"bottom_right",label:ut("editor.option.badge_position.bottom_right",e)},{value:"bottom_left",label:ut("editor.option.badge_position.bottom_left",e)}]}}},{name:"badge_size",selector:{number:{min:6,max:30,step:1,unit_of_measurement:"px",mode:"slider"}}},{name:"badge_color_on",selector:{ui_color:{default_color:"#4caf50"}}},{name:"badge_color_off",selector:{ui_color:{default_color:"#64748b"}}},{name:"badge_pulse",selector:{boolean:{}}},{name:"badge_quick_toggle",selector:{boolean:{}}},{name:"badge_tap_behavior",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ut("editor.option.badge_tap_behavior.auto",e)},{value:"toggle",label:ut("editor.option.badge_tap_behavior.toggle",e)},{value:"more-info-switch",label:ut("editor.option.badge_tap_behavior.more_info_switch",e)},{value:"more-info-sensor",label:ut("editor.option.badge_tap_behavior.more_info_sensor",e)},{value:"more-info",label:ut("editor.option.badge_tap_behavior.more_info",e)}]}}}]},{name:"label_chip",type:"expandable",title:ut("editor.section.label_chip",e),schema:[{name:"label_font_size",selector:{number:{min:6,max:25,step:.5,unit_of_measurement:"px"}}},{name:"label_spacing_below_node",selector:{number:{min:2,max:40,step:1,unit_of_measurement:"px"}}},{name:"label_chip_enabled",selector:{boolean:{}}},{name:"label_chip_opacity",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}},{name:"label_chip_padding_x",selector:{number:{min:2,max:25,step:1,unit_of_measurement:"px"}}},{name:"label_chip_padding_y",selector:{number:{min:1,max:15,step:.5,unit_of_measurement:"px"}}},{name:"label_border_radius",selector:{number:{min:0,max:20,step:1,unit_of_measurement:"px"}}},{name:"label_border_width",selector:{number:{min:0,max:4,step:.5,unit_of_measurement:"px"}}},{name:"label_color_mode",selector:{select:{mode:"dropdown",options:[{value:"auto_contrast",label:ut("editor.option.label_color_mode.auto_contrast",e)},{value:"white",label:ut("editor.option.label_color_mode.white",e)},{value:"black",label:ut("editor.option.label_color_mode.black",e)},{value:"match_entity",label:ut("editor.option.label_color_mode.match_entity",e)},{value:"secondary",label:ut("editor.option.label_color_mode.secondary",e)},{value:"custom",label:ut("editor.option.label_color_mode.custom",e)}]}}},{name:"label_color",selector:{ui_color:{}}}]},{name:"actions",type:"expandable",title:ut("editor.section.actions",e),schema:[{name:"tap_action",selector:{ui_action:{}}},{name:"tap_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ut("editor.option.more_info_target.auto",e)},{value:"switch",label:ut("editor.option.more_info_target.switch",e)},{value:"sensor",label:ut("editor.option.more_info_target.sensor",e)}]}}},{name:"hold_action",selector:{ui_action:{}}},{name:"hold_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ut("editor.option.more_info_target.auto",e)},{value:"switch",label:ut("editor.option.more_info_target.switch",e)},{value:"sensor",label:ut("editor.option.more_info_target.sensor",e)}]}}},{name:"double_tap_action",selector:{ui_action:{}}},{name:"double_tap_more_info_target",selector:{select:{mode:"dropdown",options:[{value:"auto",label:ut("editor.option.more_info_target.auto",e)},{value:"switch",label:ut("editor.option.more_info_target.switch",e)},{value:"sensor",label:ut("editor.option.more_info_target.sensor",e)}]}}}]}]}e([me({attribute:!1})],gt.prototype,"_config",void 0),e([ue()],gt.prototype,"_actualLayout",void 0),gt=e([_e("simple-power-flow-card")],gt),window.customCards=window.customCards||[],window.customCards.push({type:"simple-power-flow-card",name:"Simple Power Flow Card",description:"An elegant, adaptive power flow card with intelligent Bezier routing and RAF Particle Engine.",preview:!0,documentationURL:"https://github.com/ale8730/simple-power-flow-card"});let At=class extends de{constructor(){super(...arguments),this.devices=[],this.lang="en",this._expandedId=null}static{this.styles=r`
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
  `}_validateId(e,t){if(!e||!/^[a-zA-Z][a-zA-Z0-9_-]*$/.test(e))return ut("editor.error.invalid_id",this.lang);const o=this.devices.some((o,i)=>i!==t&&o.id===e);return o?ut("editor.error.duplicate_id",this.lang):null}_handleDeviceChanged(e,t){t.stopPropagation();const o=it(t.detail.value),i=[...this.devices];i[e]={...i[e],...o},this._fireChanged(i)}_handleMoveUp(e,t){if(t.stopPropagation(),e<=0)return;const o=[...this.devices],i=o.splice(e,1)[0];o.splice(e-1,0,i),this._fireChanged(o)}_handleMoveDown(e,t){if(t.stopPropagation(),e>=this.devices.length-1)return;const o=[...this.devices],i=o.splice(e,1)[0];o.splice(e+1,0,i),this._fireChanged(o)}_handleDelete(e,t){t.stopPropagation();const o=this.devices.filter((t,o)=>o!==e);this._fireChanged(o)}_handleAddDevice(){let e=this.devices.length+1,t=`device_${e}`;for(;this.devices.some(e=>e.id===t);)e++,t=`device_${e}`;const o=`${ut("editor.device_default_name",this.lang)} ${e}`,i={id:t,name:o,entity:"",color:"#00bcd4",include_in_home:!0},a=[...this.devices,i];this._expandedId=t,this._fireChanged(a)}_fireChanged(e){this.dispatchEvent(new CustomEvent("devices-changed",{bubbles:!0,composed:!0,detail:{devices:e}}))}render(){const e=St(this.lang);return V`
      <div class="device-list">
        ${this.devices.map((t,o)=>{const i=this._validateId(t.id,o),a=this._expandedId===t.id;return V`
            <div class="device-item">
              <ha-expansion-panel
                .expanded=${a}
                @expanded-changed=${e=>{e.detail.expanded?this._expandedId=t.id:this._expandedId===t.id&&(this._expandedId=null)}}
              >
                <div slot="header" class="panel-header">
                  <div class="panel-title">
                    <ha-icon .icon=${t.icon||"mdi:devices"}></ha-icon>
                    <span>${t.name||t.id||`${ut("editor.device_default_name",this.lang)} ${o+1}`}</span>
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
                  ${i?V`
                    <div class="id-warning">
                      <ha-icon icon="mdi:alert-circle"></ha-icon>
                      <span>${i}</span>
                    </div>
                  `:""}

                  <ha-form
                    .hass=${this.hass}
                    .data=${ot(t)}
                    .schema=${e}
                    .computeLabel=${e=>yt(e,this.lang)}
                    .computeHelper=${e=>vt(e,this.lang)}
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
            ${ut("editor.add_device",this.lang)}
          </mwc-button>
        </div>
      </div>
    `}};async function kt(){if(!customElements.get("ha-form")){try{const e=await(window.loadCardHelpers?.());if(e){const t=await e.createCardElement({type:"button"});await(t?.constructor?.getConfigElement?.());const o=await e.createCardElement({type:"entities",entities:[]});await(o?.constructor?.getConfigElement?.())}}catch(e){}if(!customElements.get("ha-form"))try{await Promise.race([customElements.whenDefined("ha-form"),new Promise(e=>setTimeout(e,500))])}catch(e){}}}e([me({attribute:!1})],At.prototype,"devices",void 0),e([me({attribute:!1})],At.prototype,"hass",void 0),e([me({type:String})],At.prototype,"lang",void 0),e([ue()],At.prototype,"_expandedId",void 0),At=e([_e("spfc-device-list")],At);let Mt=class extends de{constructor(){super(...arguments),this._componentsLoaded=!1,this._openSection="general"}static{this.styles=r`
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
  `}setConfig(e){const t=at(e.styles||{});this._config={...be,...e,styles:{...ge,...t},effects:nt(e.effects)}}async firstUpdated(){await kt(),this._componentsLoaded=!0}get _lang(){return this.hass?.language||this.hass?.locale?.language||"en"}_toggleSection(e,t){t?this._openSection=e:this._openSection===e&&(this._openSection=null)}_handleGeneralChanged(e){e.stopPropagation();const t={...this._config,...e.detail.value};this._fireConfigChanged(t)}_handleNodeChanged(e,t){t.stopPropagation();const o=it(t.detail.value),i=tt(this._config[e]||{}),a={...this._config,[e]:{...i,...o}};this._fireConfigChanged(a)}_handleDevicesChanged(e){e.stopPropagation();const t={...this._config,devices:e.detail.devices};this._fireConfigChanged(t)}_handleStylesChanged(e){e.stopPropagation();const t=function(e){if(!e)return{};const{node_dimensions:t,shadows:o,typography:i,labels:a,label_chip:n,home_ring:r,cables_and_bus:s,wires:l,particle_dynamics:d,particles:c,energy_mix:_,bus_routing:p,layout_spacing:h,...m}=e;return at({...m,...t||{},...o||{},...i||{},...a||{},...n||{},...r||{},...s||{},...l||{},...d||{},...c||{},..._||{},...p||{},...h||{}})}(e.detail.value),o={...at(this._config.styles||{},this._config),...t},i={...this._config,stroke_mode:o.stroke_mode??this._config.stroke_mode,speed_mode:o.speed_mode??this._config.speed_mode,min_stroke:o.min_stroke??this._config.min_stroke,max_stroke:o.max_stroke??this._config.max_stroke,min_duration:o.min_duration??this._config.min_duration,max_duration:o.max_duration??this._config.max_duration,max_total_particles:o.max_total_particles??this._config.max_total_particles,normalize_speed_by_length:o.normalize_speed_by_length??this._config.normalize_speed_by_length,styles:o};this._fireConfigChanged(i)}_handleEffectsChanged(e){e.stopPropagation();const t={...this._config,effects:e.detail.value};this._fireConfigChanged(t)}_handleAdvancedChanged(e){e.stopPropagation();const t={...this._config,...e.detail.value};this._fireConfigChanged(t)}_fireConfigChanged(e){const t=at(e.styles||{},e);this._config={...be,...e,stroke_mode:t.stroke_mode??e.stroke_mode,speed_mode:t.speed_mode??e.speed_mode,min_stroke:t.min_stroke??e.min_stroke,max_stroke:t.max_stroke??e.max_stroke,min_duration:t.min_duration??e.min_duration,max_duration:t.max_duration??e.max_duration,max_total_particles:t.max_total_particles??e.max_total_particles,normalize_speed_by_length:t.normalize_speed_by_length??e.normalize_speed_by_length,styles:{...ge,...t},effects:nt(e.effects)};const o=bt(e);this.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:o}}))}render(){if(!this._config||!this.hass)return V``;const e=this._lang;return V`
      <div class="card-config">
        <!-- 1. Generale -->
        <ha-expansion-panel
          .expanded=${"general"===this._openSection}
          @expanded-changed=${e=>this._toggleSection("general",e.detail.expanded)}
        >
          <div slot="header" class="section-header">
            <ha-icon icon="mdi:cog"></ha-icon>
            <span>${ut("editor.section.general",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._config}
              .schema=${xt(e)}
              .computeLabel=${t=>yt(t,e)}
              .computeHelper=${t=>vt(t,e)}
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
            <span>${ut("editor.section.solar",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${ot(this._config.solar||{})}
              .schema=${wt("solar",e,this._config.solar)}
              .computeLabel=${t=>yt(t,e)}
              .computeHelper=${t=>vt(t,e)}
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
            <span>${ut("editor.section.grid",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${ot(this._config.grid||{})}
              .schema=${wt("grid",e,this._config.grid)}
              .computeLabel=${t=>yt(t,e)}
              .computeHelper=${t=>vt(t,e)}
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
            <span>${ut("editor.section.battery",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${ot(this._config.battery||{})}
              .schema=${wt("battery",e,this._config.battery)}
              .computeLabel=${t=>yt(t,e)}
              .computeHelper=${t=>vt(t,e)}
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
            <span>${ut("editor.section.home",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${ot(this._config.home||{})}
              .schema=${wt("home",e,this._config.home)}
              .computeLabel=${t=>yt(t,e)}
              .computeHelper=${t=>vt(t,e)}
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
            <span>${ut("editor.section.devices",e)} (${(this._config.devices||[]).length})</span>
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
            <span>${ut("editor.section.styles",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${function(e,t){const o=at(e||{},t),i={...ge,...o};return{...i,node_dimensions:{node_radius_primary:i.node_radius_primary,node_radius_secondary:i.node_radius_secondary,icon_size_primary:i.icon_size_primary,icon_size_secondary:i.icon_size_secondary,node_border_width:i.node_border_width},shadows:{show_node_shadows:i.show_node_shadows,hover_glow_radius:i.hover_glow_radius,node_shadow_color:i.node_shadow_color,node_shadow_blur:i.node_shadow_blur,node_shadow_spread:i.node_shadow_spread,node_shadow_offset_y:i.node_shadow_offset_y},typography:{font_size_primary:i.font_size_primary,font_size_secondary:i.font_size_secondary,font_size_unit:i.font_size_unit,font_size_extra:i.font_size_extra,font_size_sub:i.font_size_sub,font_size_top_info:i.font_size_top_info,spacing_text_above_icon:i.spacing_text_above_icon,spacing_text_below_icon:i.spacing_text_below_icon},labels:{show_labels:i.show_labels,font_size_label:i.font_size_label,spacing_label_below_node:i.spacing_label_below_node,label_color_mode:i.label_color_mode,label_color:i.label_color,label_chip_enabled:i.label_chip_enabled,label_chip_opacity:i.label_chip_opacity,label_chip_padding_x:i.label_chip_padding_x,label_chip_padding_y:i.label_chip_padding_y,label_border_radius:i.label_border_radius,label_border_width:i.label_border_width},home_ring:{show_home_mix_ring:i.show_home_mix_ring,home_glow_mode:i.home_glow_mode},cables_and_bus:{line_routing_mode:i.line_routing_mode,bus_lane_spacing:i.bus_lane_spacing,bus_corner_radius:i.bus_corner_radius,invert_bus_lane_order:i.invert_bus_lane_order,spacing_horizontal:i.spacing_horizontal,spacing_vertical:i.spacing_vertical},wires:{stroke_mode:i.stroke_mode,min_stroke:i.min_stroke,max_stroke:i.max_stroke,inactive_wire_style:i.inactive_wire_style,inactive_wire_opacity:i.inactive_wire_opacity},particle_dynamics:{speed_mode:i.speed_mode,normalize_speed_by_length:i.normalize_speed_by_length,min_duration:i.min_duration,max_duration:i.max_duration},particles:{particles_per_arc:i.particles_per_arc,max_total_particles:i.max_total_particles,particle_size_offset:i.particle_size_offset,particle_inner_glow:i.particle_inner_glow,particle_soft_edge:i.particle_soft_edge}}}(this._config.styles||{},this._config)}
              .schema=${$t(e)}
              .computeLabel=${t=>yt(t,e)}
              .computeHelper=${t=>vt(t,e)}
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
            <span>${ut("editor.section.effects",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${nt(this._config.effects||{})}
              .schema=${zt(e)}
              .computeLabel=${t=>yt(t,e)}
              .computeHelper=${t=>vt(t,e)}
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
            <span>${ut("editor.section.advanced",e)}</span>
          </div>
          <div class="section-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._config}
              .schema=${Ct(e,this._config)}
              .computeLabel=${t=>yt(t,e)}
              .computeHelper=${t=>vt(t,e)}
              @value-changed=${this._handleAdvancedChanged}
            ></ha-form>
          </div>
        </ha-expansion-panel>
      </div>
    `}};e([me({attribute:!1})],Mt.prototype,"hass",void 0),e([ue()],Mt.prototype,"_config",void 0),e([ue()],Mt.prototype,"_componentsLoaded",void 0),e([ue()],Mt.prototype,"_openSection",void 0),Mt=e([_e("simple-power-flow-card-editor")],Mt);var Ft=Object.freeze({__proto__:null,get SimplePowerFlowCardEditor(){return Mt},get SpfcDeviceList(){return At},computeHelper:vt,computeLabel:yt,getAdvancedSchema:Ct,getDeviceSchema:St,getEffectsSchema:zt,getGeneralSchema:xt,getNodeSchema:wt,getStylesSchema:$t,loadHaComponents:kt});console.info("%c SIMPLE-POWER-FLOW-CARD %c v1.0.0 ","color: white; background: #0284c7; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;","color: #0284c7; background: #e0f2fe; font-weight: 700; border-radius: 0 4px 4px 0; padding: 2px 6px;");export{gt as SimplePowerFlowCard};
