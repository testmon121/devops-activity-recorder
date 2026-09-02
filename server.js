const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>ระบบบันทึกกิจกรรม (Activity Recorder)</h1><p>ระบบพร้อมทำงานเรียบร้อยแล้ว</p>');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});