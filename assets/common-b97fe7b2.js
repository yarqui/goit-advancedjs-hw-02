const s={disabled:"disabled"},o={set:"set",remove:"remove",toggle:"toggle"},c=(e,r,t)=>{switch(Array.isArray(t)||(t=[t]),r){case o.toggle:t.forEach(a=>a.toggleAttribute(e));break;case o.set:t.forEach(a=>a.setAttribute(e,""));break;case o.remove:t.forEach(a=>a.removeAttribute(e));break;default:console.log("Invalid attribute passed")}};export{o as A,s as a,c as h};
//# sourceMappingURL=common-b97fe7b2.js.map
