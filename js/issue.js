document.getElementById('issueForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const message = document.getElementById('message').value;

  // 使用 AJAX 或 Fetch API 将信息发送到后端
  fetch('/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // 信息发布成功，跳转回主页
        window.location.href = 'home.html';
      } else {
        alert('发布失败，请重试。');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('出现错误，请稍后重试。');
    });
});
