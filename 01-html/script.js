// ============================================
// JavaScript：让网页"动"起来
// 套路永远是三件事：选中元素 → 监听动作 → 做点事情
// ============================================

// 先打印一句"你好"到"控制台"（浏览器里按 F12 或右键→检查，点 Console 标签能看到）
console.log("Hello，栩源的第一个 JavaScript！");

// ---------- 按钮1：点一下换背景色 ----------

// let = 声明一个"变量"（相当于一个能装东西的盒子）
// document.getElementById("changeColor") = 按 id 找到那个按钮
let btnColor = document.getElementById("changeColor");

// addEventListener("click", function(){...}) = "监听点击"，
// 点一下，就执行花括号 { } 里的代码
btnColor.addEventListener("click", function () {
  // 改 body 的背景色为浅蓝（还记得 CSS 里的 background-color 吗？这里用 JS 改它）
  document.body.style.backgroundColor = "#fff3cd";
  console.log("背景色已换成浅蓝"); // 同时在控制台打一句
});

// ---------- 按钮2：点一下弹出当前时间 ----------

let btnTime = document.getElementById("showTime");

btnTime.addEventListener("click", function () {
  let now = new Date();          // new Date() = 拿到"现在这一刻"
  alert("栩源，现在是：" + now.toLocaleTimeString()); // 弹出提示框，显示几点几分几秒
});
