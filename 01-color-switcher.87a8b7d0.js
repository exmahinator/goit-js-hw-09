!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=null;e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,d=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(d)}))}();
//# sourceMappingURL=01-color-switcher.87a8b7d0.js.map
