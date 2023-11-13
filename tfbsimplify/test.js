const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// 模拟存储发布的信息
let messages = [];

app.use(bodyParser.json());

// 处理信息提交
app.post('/api/submit', (req, res) => {
  const { message } = req.body;

  if (message) {
    // 存储信息
    messages.push({ message });
    console.log('信息已发布：', message);

    // 返回成功响应
    res.json({ success: true });
  } else {
    // 返回失败响应
    res.json({ success: false, error: '无效的信息。' });
  }
});

// 获取所有信息
app.get('/api/messages', (req, res) => {
  // 返回存储的所有信息
  res.json(messages);
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
