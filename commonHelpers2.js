import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as p}from"./assets/vendor-992cd48f.js";import{h as c,A as o,a as i}from"./assets/common-b97fe7b2.js";const e={timePicker:document.querySelector("input#datetime-picker"),startBtn:document.querySelector("button[data-start]"),days:document.querySelector(".value[data-days]"),hours:document.querySelector(".value[data-hours]"),minutes:document.querySelector(".value[data-minutes]"),seconds:document.querySelector(".value[data-seconds]")};let r,n,l;const v=t=>{const d=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),y=Math.floor(t%864e5%36e5/6e4),T=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:f,minutes:y,seconds:T}},k=t=>Object.fromEntries(Object.entries(t).map(([s,a])=>[s,a.toString().padStart(2,"0")])),S=()=>{const t=n<r;t||(alert("Please choose a date in the future"),r=n),c(i.disabled,t?o.remove:o.set,e.startBtn)},b=()=>{n=new Date().getTime(),c(i.disabled,o.set,[e.startBtn,e.timePicker]),h(),l=setInterval(()=>{if(r-n<1e3){clearInterval(l),c(i.disabled,o.remove,e.timePicker);return}n+=1e3,h()},1e3)},h=()=>{const t=r-n,s=v(t),{days:a,hours:u,minutes:m,seconds:d}=k(s);e.days.textContent=a,e.hours.textContent=u,e.minutes.textContent=m,e.seconds.textContent=d},D=t=>{t&&(r=t[0].getTime(),n=new Date().getTime(),S())},M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:D};p(e.timePicker,M);c(i.disabled,o.set,e.startBtn);e.startBtn.addEventListener("click",b);
//# sourceMappingURL=commonHelpers2.js.map
