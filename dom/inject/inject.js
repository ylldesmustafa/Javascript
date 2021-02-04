/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

const injectDoc = document.getElementById('inject');
const center = document.createElement('center');
const link1 = document.createElement('a');

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
h2.appendChild(link1);
link1.appendChild(node2);
link1.href = "https://codepen.io/ayunas-the-scripter/pen/WNQgpqB";
center.appendChild(h2);

//<hr1>
horizontalLine = document.createElement("hr");
horizontalLine.setAttribute("width", "1200px");
document.body.appendChild(horizontalLine);

// <p1>
const paraOne = document.createElement('p');
const node3 = document.createTextNode("I love ");
const node4 = document.createTextNode("HTML");
const node5 = document.createTextNode(" for the following reasons: ");
horizontalLine.appendChild(paraOne);
paraOne.appendChild(node3);
paraOne.appendChild(node4);
paraOne.appendChild(node5);
//node4.style.fontStyle = 'italic';
//italics.appendChild(node4);
injectDoc.appendChild(horizontalLine);
horizontalLine.appendChild(paraOne);

// <ol>, <li>
const orderedList = document.createElement('ol');
const itemOne = document.createElement('li');
const listItem1 = document.createTextNode('I learned it quicky.');
const itemTwo = document.createElement('li');
const listItem2 = document.createTextNode('I can make pages quickly using code.');
const itemThree = document.createElement('li');
const listItem3 = document.createTextNode("It's fun.");
horizontalLine.appendChild(orderedList);
orderedList.appendChild(itemOne);
orderedList.appendChild(itemTwo);
orderedList.appendChild(itemThree);
itemOne.appendChild(listItem1);
itemTwo.appendChild(listItem2);
itemThree.appendChild(listItem3);

// <hr2>
horizontalLine = document.createElement("hr");
horizontalLine.setAttribute("width", "1200px");
document.body.appendChild(horizontalLine);

//<p2>,
const paraTwo = document.createElement('p');
const node6 = document.createTextNode("My instructor's email address is: ");
const link2 = document.createElement('a');
link2.href = "mailto:ayunas@teksystems.com";
const link2Node = document.createTextNode('ayunas@teksystems.com');
injectDoc.appendChild(paraTwo);
horizontalLine.appendChild(paraTwo);
paraTwo.appendChild(node6);
paraTwo.appendChild(link2);
paraTwo.appendChild(link2Node);

//h1
const bottomHeader = document.createElement('h1');
const node7 = document.createTextNode('Have a great day!');
const paraThree = document.createElement('p');
const node8 = document.createTextNode("I really look forward to learning how to code!  Have a great day. -[Team 'Git'er Done']");
injectDoc.appendChild(bottomHeader);
bottomHeader.appendChild(node7);
bottomHeader.appendChild(paraThree);
paraThree.appendChild(node8);