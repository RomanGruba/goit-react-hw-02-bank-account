(window.webpackJsonphomework3=window.webpackJsonphomework3||[]).push([[0],{17:function(t,a,e){t.exports=e(35)},35:function(t,a,e){"use strict";e.r(a);var n=e(1),r=e.n(n),c=e(2),l=e.n(c),o=e(6),s=e(10),i=e(11),u=e(15),m=e(12),d=e(16),b=e(5),h=e.n(b),p=e(7),E={deposit:"Deposit",withdraw:"Withdraw"},w=function(t){var a=t.transaction,e=t.addTransaction,n=t.handleSubmitTransaction;return r.a.createElement("section",{className:"controls"},r.a.createElement("input",{type:"number",name:"transaction",value:a,onChange:e}),r.a.createElement("button",{type:"button",onClick:n,name:E.deposit},"Deposit"),r.a.createElement("button",{type:"button",onClick:n,name:E.withdraw},"Withdraw"))},f=function(t){var a=t.allDeposits,e=t.allWithdraws,n=t.balance;return r.a.createElement("section",{className:"balance"},r.a.createElement("span",null,"\u2b06\ufe0f",a,"$"),r.a.createElement("span",null,"\u2b07\ufe0f",e,"$"),r.a.createElement("span",null,"Balance: ",n,"$"))},y=(e(30),function(t){function a(){var t,e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=Object(u.a)(this,(t=Object(m.a)(a)).call.apply(t,[this].concat(r)))).state={transactions:[],transaction:"",balance:0,allDeposits:0,allWithdraws:0},e.addTransaction=function(t){e.setState({transaction:t.target.value})},e.notify=function(t){return Object(p.b)(t)},e.handleSubmitTransaction=function(t){t.preventDefault();var a=new Date,n={year:"numeric",month:"long",timezone:"UTC",hour:"numeric",minute:"numeric",second:"numeric"};if("Deposit"===t.target.name&&e.state.transaction>0){var r={id:h.a.generate(),amount:e.state.transaction,type:t.target.name,date:a.toLocaleString("en",n)};e.setState(function(t){return{transactions:[].concat(Object(o.a)(t.transactions),[r]),balance:t.balance+Number(r.amount),allDeposits:t.allDeposits+Number(r.amount),transaction:""}})}else"0"===e.state.transaction&&e.notify("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!");if("Withdraw"===t.target.name&&e.state.balance>=e.state.transaction&&e.state.transaction>0){var c={id:h.a.generate(),amount:e.state.transaction,type:t.target.name,date:a.toLocaleString("en",n)};e.setState(function(t){return{transactions:[].concat(Object(o.a)(t.transactions),[c]),balance:t.balance-Number(c.amount),allWithdraws:t.allWithdraws+Number(c.amount),transaction:""}})}else"Withdraw"===t.target.name&&e.state.balance<=e.state.transaction&&e.notify("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},e}return Object(d.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){var t=this.state,a=t.transaction,e=t.allDeposits,n=t.allWithdraws,c=t.balance;return r.a.createElement("div",{className:"dashboard"},r.a.createElement(w,{transaction:a,addTransaction:this.addTransaction,handleSubmitTransaction:this.handleSubmitTransaction}),r.a.createElement(f,{allDeposits:e,allWithdraws:n,balance:c}),r.a.createElement(p.a,null),r.a.createElement("table",{className:"history"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,this.state.transactions.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.type),r.a.createElement("td",null,t.amount,"$"),r.a.createElement("td",null,t.date))}))))}}]),a}(n.Component));l.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3ae77821.chunk.js.map