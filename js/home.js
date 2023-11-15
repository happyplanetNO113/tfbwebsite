window.onload = function () {
  // 修改图片src属性
  var number = 1;
  function fun() {
    number++;
    // 判断number是否大于3
    if (number > 3) {
      number = 1;
    }
    // 获取img对象
    var img = document.getElementById("img");
    img.src = "img/" + number + ".jpg";
  }
  // 定义定时器
  setInterval(fun, 5000);
}

// 获取页面元素
const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault(); // 阻止默认行为

  // 获取搜索词
  const searchTerm = searchInput.value;

  // 跳转到结果页面，并将搜索词作为查询参数传递
  window.location.href = 'results.html?q=' + encodeURIComponent(searchTerm);
});
