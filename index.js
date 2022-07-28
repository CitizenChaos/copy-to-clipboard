/**
 * dataURL转Blob
 *
 * @param {*} dataurl
 * @return {*}
 */
const dataURLToBlob = (dataurl) => {
  let arr = dataurl.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

/**
 * 复制base64
 *
 * @param {*} base64
 * @return {*}
 */
const copyBlobToClipboard = (base64) => {
  return new Promise((resolve, reject) => {
    let blob = dataURLToBlob(base64)
    navigator.clipboard
      .write([
        new window.ClipboardItem({
          [blob.type]: blob,
        }),
      ])
      .then(
        () => {
          resolve(true)
        },
        () => {
          reject(new Error('复制失败'))
        }
      )
  })
}

/**
 * 复制文本
 *
 * @param {*} text
 * @return {*}
 */
const copyTextToClipboard = (text) => {
  return new Promise((resolve, reject) => {
    navigator.clipboard.writeText(text).then(
      () => {
        resolve(true)
      },
      () => {
        reject(new Error('复制失败'))
      }
    )
  })
}

const copyToClipboard = (opt = { type: null, value: null }) => {
  return new Promise((resolve, reject) => {
    if (opt.type === 'text') {
      copyTextToClipboard(opt.value)
        .then((res) => {
          resolve(res)
        })
        .catch(() => {
          reject(new Error('复制失败'))
        })
    } else if (opt.type === 'base64') {
      copyBlobToClipboard(opt.value)
        .then((res) => {
          resolve(res)
        })
        .catch(() => {
          reject(new Error('复制失败'))
        })
    } else {
      reject(new Error('参数错误'))
    }
  })
}

export default copyToClipboard
