# copy-to-clipboard

用于复制文字或图片的方法，返回`Promise`对象

## 使用方法

支持传入配置对象

| 对象属性 | 说明       |  类型  | 可选值      |
| -------- | ---------- | :----: | ----------- |
| type     | 复制类型   | string | text/base64 |
| value    | 要复制的值 | string | -           |

```javascript
import copyToClipboard from './you/path/to/copy-to-clipboard'

// 复制文字
// const option = {
//   type: 'text',
//   value: '复制赋值复制',
// }

// 复制图片
const option = {
  type: 'base64',
  value:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAAVSURBVBiVY/z//z8DbsCER24ESwMApeMDEeYHI7cAAAAASUVORK5CYII=',
}

copyToClipboard(option)
  .then(() => {
    // 复制成功
  })
  .catch(() => {
    // 复制失败
  })
```
