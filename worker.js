//by: https://github.com/zou-yu/worker-mailer
import { WorkerMailer } from 'worker-mailer'

// 连接到 SMTP 服务器
const mailer = await WorkerMailer.connect({
  credentials: {
    username: 'bob@acme.com',
    password: 'password',
  },
  authType: 'plain',
  host: 'smtp.acme.com',
  port: 587,
  secure: true,
})

// 发送邮件
await mailer.send({
  from: { name: 'Bob', email: 'bob@acme.com' },
  to: { name: 'Alice', email: 'alice@acme.com' },
  subject: '来自 Worker Mailer 的问候',
  text: '这是一条纯文本消息',
  html: '<h1>你好</h1><p>这是一条 HTML 消息</p>',
})
