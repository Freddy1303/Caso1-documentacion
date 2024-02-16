"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[1218],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return t?r.createElement(f,i(i({ref:a},p),{},{components:t})):r.createElement(f,i({ref:a},p))}));function f(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44448:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const n={},i="Filtros de conversaci\xf3n",l={unversionedId:"configuracion-adicional/Filtros-de-conversaci\xf3n",id:"configuracion-adicional/Filtros-de-conversaci\xf3n",title:"Filtros de conversaci\xf3n",description:"En este art\xedculo aprender\xe1s a como aplicar filtros avanzados para tus conversaciones. Al terminar de leer este art\xedculo tendr\xe1s la capacidad de filtrar conversaciones con m\xfaltiples atributos a la vez e incluso consultarlas con operadores AND(Y) y OR(O).",source:"@site/docs/configuracion-adicional/Filtros-de-conversaci\xf3n.md",sourceDirName:"configuracion-adicional",slug:"/configuracion-adicional/Filtros-de-conversaci\xf3n",permalink:"/caso1-documentacion/configuracion-adicional/Filtros-de-conversaci\xf3n",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Carpetas",permalink:"/caso1-documentacion/configuracion-adicional/Carpetas"},next:{title:"Formulario Website",permalink:"/caso1-documentacion/configuracion-adicional/Formulario-website"}},s={},c=[{value:"Atributos de filtro",id:"atributos-de-filtro",level:2},{value:"Seleccione el \xedcono de filtro",id:"seleccione-el-\xedcono-de-filtro",level:2},{value:"Ejemplo de filtro",id:"ejemplo-de-filtro",level:2},{value:"Guardar Filtros",id:"guardar-filtros",level:2},{value:"Borrar Filtros",id:"borrar-filtros",level:2}],p={toc:c},d="wrapper";function u(e){let{components:a,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"filtros-de-conversaci\xf3n"},"Filtros de conversaci\xf3n"),(0,o.kt)("p",null,"En este art\xedculo aprender\xe1s a como aplicar filtros avanzados para tus conversaciones. Al terminar de leer este art\xedculo tendr\xe1s la capacidad de filtrar conversaciones con m\xfaltiples atributos a la vez e incluso consultarlas con operadores ",(0,o.kt)("strong",{parentName:"p"},"AND(Y)")," y ",(0,o.kt)("strong",{parentName:"p"},"OR(O).")),(0,o.kt)("h2",{id:"atributos-de-filtro"},"Atributos de filtro"),(0,o.kt)("p",null,"Chatb\xfaho ofrece filtrar conversaciones por los siguientes atributos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estado de la conversaci\xf3n:")," Selecciona el estado del chat (Abiertas/Resueltas/Pendientes/Postpuestas/Todos)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Agente asignado:")," Sirve para mostrar todas las conversaciones asignadas a un agente."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bandeja de entrada:")," Sirve para mostrar todas las conversaciones que pertenezcan a la bandeja o canal"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Equipo:")," Sirve para mostrar todas las conversaciones que pertenezcan a un equipo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Etiquetas:")," Sirve para mostrar todas las conversaciones que pertenezcan a una etiqueta."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Idioma del navegador:")," Sirve para mostrar todas las conversaciones que pertenezcan a un idioma."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Creado el:")," Sirve para mostrar todas las conversaciones creadas en una fecha espec\xedfica."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ultima actividad:")," Sirve para mostrar todas las conversaciones realizadas en un periodo de tiempo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pa\xeds:")," Sirve para mostrar todas las conversaciones que pertenezcan a Pa\xeds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Enlaces de referencia:")," Sirve para mostrar todas las conversaciones que contengan una ruta o link de p\xe1gina.")),(0,o.kt)("h2",{id:"seleccione-el-\xedcono-de-filtro"},"Seleccione el \xedcono de filtro"),(0,o.kt)("p",null,"Primero seleccione el \xedcono de filtro."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:t(49658).Z,width:"620",height:"932"})),(0,o.kt)("p",null,"Ahora visualizar\xe1 la ventana emergente de filtros, que le permitir\xe1 seleccionar el tipo de filtro, el operador (igual a, no igual a, presente, no presente) y el valor."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:t(23304).Z,width:"803",height:"422"})),(0,o.kt)("h2",{id:"ejemplo-de-filtro"},"Ejemplo de filtro"),(0,o.kt)("p",null,"Para obtener todas las conversaciones ",(0,o.kt)("strong",{parentName:"p"},'"Resueltas"')," por el agente ",(0,o.kt)("strong",{parentName:"p"},'"Miriam"'),", configure los filtros de la siguiente manera."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:t(35040).Z,width:"803",height:"426"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Establezca el tipo de filtro como ",(0,o.kt)("strong",{parentName:"li"},'"Estado"'),", el operador como ",(0,o.kt)("strong",{parentName:"li"},'"Igual a"')," y el valor como ",(0,o.kt)("strong",{parentName:"li"},'"Resuelto"')),(0,o.kt)("li",{parentName:"ol"},'Establezca el "Nombre del asignado" como el tipo de filtro, ',(0,o.kt)("strong",{parentName:"li"},'"Igual a"')," como el operador y ",(0,o.kt)("strong",{parentName:"li"},'"Miriam"')," como el valor."),(0,o.kt)("li",{parentName:"ol"},"Presione ",(0,o.kt)("strong",{parentName:"li"},"Aplicar filtros")," y la lista de conversaciones ahora se filtrar\xe1 seg\xfan los ",(0,o.kt)("strong",{parentName:"li"},"criterios anteriores"),".")),(0,o.kt)("admonition",{title:"NOTA:",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Puede aplicar tantos filtros como desee combin\xe1ndolos con los operadores AND(Y) y OR(O) para crear consultas complejas y canalizar su lista a necesidades espec\xedficas.")),(0,o.kt)("h2",{id:"guardar-filtros"},"Guardar Filtros"),(0,o.kt)("p",null,"Para guardar el filtro creado, seleccione el bot\xf3n ",(0,o.kt)("strong",{parentName:"p"},'"Guardar Filtros".')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:t(1188).Z,width:"617",height:"926"})),(0,o.kt)("p",null,"Ingrese el ",(0,o.kt)("strong",{parentName:"p"},"nombre del filtro")," y se ubicar\xe1 en la secci\xf3n derecha de ",(0,o.kt)("strong",{parentName:"p"},"Carpetas.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:t(76799).Z,width:"619",height:"926"})),(0,o.kt)("h2",{id:"borrar-filtros"},"Borrar Filtros"),(0,o.kt)("p",null,"Para borrar los filtros y volver a la lista original, simplemente seleccione el bot\xf3n ",(0,o.kt)("strong",{parentName:"p"},'"Eliminar filtros".')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:t(17265).Z,width:"617",height:"926"})))}u.isMDXComponent=!0},49658:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/Filtros-de-conversacion-01-fe18bbb59a0e4b1e2ceee740317af1d6.jpg"},23304:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/Filtros-de-conversacion-02-cb6a7e198aeae5784089902b8479ee8b.png"},35040:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/Filtros-de-conversacion-03-6ac7f87896f36c8a5a4d1af219165032.png"},1188:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/Filtros-de-conversacion-04-d671c8631036f91e6969529957f50715.jpg"},76799:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/Filtros-de-conversacion-05-a08b29ef2aaf9e47766ece9e0f8fe7e4.jpg"},17265:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/Filtros-de-conversacion-06-6da422b8b6cb89be8b8c98fcf56884de.jpg"}}]);