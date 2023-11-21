let menu=`<a href="/"><h3>Main page</h3></a><a href="/onePage"><h3>one page</h3></a><a href="/oK"><h3>two page</h3></a><a href="/three"><h3>three page</h3></a>`;
const aside=document.createElement('aside');
aside.innerHTML=`${menu}`;
document.querySelector('main').append(aside);
