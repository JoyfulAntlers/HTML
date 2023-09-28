copy=(text:any)=>{
  const input = document.createElement('input')
  input.value = text // 设置复制内容
  document.body.appendChild(input) // 添加临时实例
  input.select() // 选择实例内容
  document.execCommand('Copy') // 执行复制
  document.body.removeChild(input) // 删除临时实例
  console.log('复制成功！')//可以加一个友好提示给用户
}