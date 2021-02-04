/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/


const injectDoc = document.getElementById('inject');
const center = document.createElement('center');
const link = document.createElement('a');

//h1
const h1 = document.createElement('h1');
const i = document.createElement('i');
const node1 = document.createTextNode('HTML Practice Exercise TEKcamp');
injectDoc.appendChild(center);
center.appendChild(h1);
h1.style.fontStyle = 'italic';
h1.appendChild(node1);

//h2
const h2 = document.createElement('h2');
const node2 = document.createTextNode("TEKsystems 'TEKcamp'");
h2.appendChild(link);
link.appendChild(node2);
link.href = "https://codepen.io/ayunas-the-scripter/pen/WNQgpqB";
center.appendChild(h2);

//<hr1>
horizontalLine = document.createElement("hr");
horizontalLine.setAttribute("width", "1200px");
document.body.appendChild(horizontalLine);

// <p1>, <ol>, <li>
const paraOne = document.createElement('p1');
const node3 = document.createTextNode("I love ");
const node4 = document.createTextNode("HTML");
const node5 = document.createTextNode(" for the following reasons: ");
horizontalLine.appendChild(paraOne);
paraOne.appendChild(node3);
paraOne.appendChild(node4);
//node4.style.fontStyle = 'italic';


const numList = document.createElement('ol');
const list = document.createElement('li');


//<p2>,




// // <hr2>
// elem = document.createElement("hr");
// elem.setAttribute("width", "1200px");
// document.body.appendChild(elem);