import{w as o}from"./writeEffect-CMmsdElH.js";import{a as r}from"./animationSetup-BlZU8nMj.js";import"./index-By2Mmxtu.js";const a=n=>n.forEach(i=>i.currentNode.textContent=""),f=async(n,i)=>{const{options:e,elements:s}=r(n,i);a(s);for(const t of s)await o(t,e),e.keepCursorOnFinish?!(s.indexOf(t)===s.length-1)&&t.currentNode.classList.replace("typing","finished-typing"):t.currentNode.classList.replace("typing","finished-typing"),typeof e.keepCursorOnFinish=="number"&&setTimeout(()=>{t.currentNode.classList.replace("typing","finished-typing")},e.keepCursorOnFinish);return e.dispatch("done"),{update(){},destroy(){}}};export{f as default};