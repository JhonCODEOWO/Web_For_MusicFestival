function iniciarApp(){crearGaleria(),scrollNav(),navegacionFija()}function navegacionFija(){const e=document.querySelector(".header"),o=document.querySelector(".sobre-festival"),t=document.querySelector("body");window.addEventListener("scroll",(function(){o.getBoundingClientRect().top<0?(console.log("Has pasado el elemento"),e.classList.add("fijo"),t.classList.add("body-scroll"),console.log(e)):(console.log("El elemento no ha sido rebasado"),e.classList.remove("fijo"),t.classList.remove("body-scroll"),console.log(e))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const o=e.target.attributes.href.value;document.querySelector(o).scrollIntoView({behavior:"smooth"}),console.log(e.target.attributes.href.value)}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");console.log(e);for(let t=1;t<=12;t++){const n=document.createElement("picture");n.innerHTML=`\n            <source srcset="build/img/thumb/${t}.webp" type="image/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/thumb/${t}.jpg" alt="imagen galeria">\n        `,n.onclick=function(){o(t)},e.appendChild(n)}function o(e){const o=document.createElement("picture");o.innerHTML=`\n            <source srcset="build/img/grande/${e}.webp" type="image/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg" alt="imagen galeria">\n        `;const t=document.createElement("DIV");t.appendChild(o),t.classList.add("overlay"),t.onclick=function(){t.remove();document.querySelector("body").classList.remove("fijar-body")};const n=document.createElement("P");n.textContent="X",n.classList.add("btn-cerrar"),n.onclick=function(){t.remove();document.querySelector("body").classList.remove("fijar-body")},t.appendChild(n);const c=document.querySelector("body");c.appendChild(t),c.classList.add("fijar-body")}}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));