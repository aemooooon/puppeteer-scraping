import fs from 'fs'; // 导入 fs 模块，用于文件操作
import data from './data.json';

console.log(data);

// 定义文件夹对象
class Folder {
  constructor(title, link, icon) {
    this.title = title;
    this.link = link;
    this.icon = icon;
    this.children = [];
  }
}

// 广度优先搜索函数
function bfs(root) {
  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift(); // 从队列中取出一个节点
    result.push({ title: node.title, link: node.link, icon: node.icon });

    // 将该节点的子文件夹加入队列
    node.children.forEach(child => {
      queue.push(child);
    });
  }

  return result;
}

// 读取JSON文件
fs.readFile(data, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const root = JSON.parse(data); // 解析JSON数据为根节点对象
  const result = bfs(root); // 进行广度优先搜索
  console.log(result);
});
