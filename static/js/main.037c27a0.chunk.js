(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),o=n.n(a),s=n(2),i=n(0),b=function(e){var t=e.title,n=e.children;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:t}),n]})},j=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(i.jsx)(b,{title:"Please leave feedback",children:Object(i.jsx)("div",{children:t.map((function(e){return Object(i.jsx)("button",{style:{marginRight:"5px"},type:"button",onClick:function(e){n(e)},name:e,children:e},e)}))})})},d=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(i.jsxs)(b,{title:"Statistics",children:[Object(i.jsxs)("p",{children:["Good: ",t]}),Object(i.jsxs)("p",{children:["Neutral: ",n]}),Object(i.jsxs)("p",{children:["Bad: ",c]}),Object(i.jsxs)("p",{children:["Total: ",r]}),Object(i.jsxs)("p",{children:["Positive feedback: ",a," %"]})]})},u=function(e){var t=e.message;return Object(i.jsx)("p",{children:t})},l=function(e){var t=e.children;return Object(i.jsx)("div",{children:t})};function h(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),o=Object(s.a)(a,2),b=o[0],h=o[1],O=Object(c.useState)(0),f=Object(s.a)(O,2),x=f[0],g=f[1],p=function(){return n+b+x};return Object(i.jsxs)(l,{children:[Object(i.jsx)(j,{onLeaveFeedback:function(e){console.log(e),console.log(e.target);var t=e.target.name;switch(console.log(t),t){case"good":r((function(e){return e+1}));break;case"neutral":h((function(e){return e+1}));break;case"bad":g((function(e){return e+1}));break;default:return}},options:Object.keys({good:n,neutral:b,bad:x})}),p()?Object(i.jsx)(d,{good:n,neutral:b,bad:x,total:p(),positivePercentage:Number(Math.round(n/p()*100))}):Object(i.jsx)(u,{message:"No feedback given"})]})}o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.037c27a0.chunk.js.map