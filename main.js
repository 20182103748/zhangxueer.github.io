/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world';
//以下为练习代码

let iceCream = 'chocolate';
if (iceCream = 'chocolate'){
	alert('我最喜欢巧克力冰淇淋了');
}else {
	alert('但巧克力是我的最爱啊。。');
}
alert('hello!');

function multiply(num1,num2) {
	let outcome = num1 * num2;
	return outcome;
}
multiply(4,1);
multiply(2,10);
multiply(3,9);
*/
let myimage = document.querySelector('img');

myimage.onclick = function() {
	let mysrc = myimage.getAttribute('src');
	if(mysrc === 'Google图片.webp') {
		myimage.setAttribute('src','images/logo10.png');
	}else {
		myimage.setAttribute('src','Google图片.webp');
	}
}
/*设置图像切换器*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
/*获取新按钮和标题的引用，并保存至变量中：*/

/*
function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = '欢迎来到内蒙古师范大学校园网络平台，' + myName;
}
对以上函数更新setUserName() 来检查用户是否输入了 null 或者空名字*/
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '欢迎来到内蒙古师范大学校园网络平台，' + myName;
  }
}
/*如果 myName 没有值或值为 null，就再次从头运行setUserName()。
如果有值（上面的表达式结果不为真），就把值存储到 localStorage 并且设置标题。*/

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '欢迎来到内蒙古师范大学校园网络平台，' + storedName;
}/*初始化代码，因为它在页面初次读取时进行构造工作：
取非运算符（逻辑非，用 ! 表示）来检测 'name' 数据是否存在。
若不存在，调用 setUserName() 创建。若存在（即用户上次访问时设置过），
调用 getItem() 获取保存的名字，
像上文的 setUserName() 那样设置 textContent。*/

myButton.onclick = function() {
   setUserName();
}/*给为按钮设置 onclick 事件处理器。按钮按下时运行 setUserName() 函数。这样用户就可以通过按这个按钮来自由设置新名字了：*/
