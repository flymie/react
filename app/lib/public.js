// 用于生成 action creator 的函数
export const makeActionCreator = (type, ...argNames) => function (...args) {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};

// 把图片转化为base64
export const convertImgToBase64 = (url, callback, outputFormat = 'image/png') => {
  let canvas = document.createElement('CANVAS');
  const ctx = canvas.getContext('2d');
  const image = new Image();
  image.crossOrigin = 'Anonymous';
  image.onload = function () {
    canvas.height = image.height;
    canvas.width = image.width;
    ctx.drawImage(image, 0, 0);
    const dataURL = canvas.toDataURL(outputFormat);
    callback.call(this, dataURL);
    canvas = null;
  };
  image.src = url;
};

// 从url的search拿字段
export const searchToYouWantFn = (str) => {
  const queryObj = {};
  const searchStr = str.match(new RegExp('\\?(.*)'))[1];
  const reg = /([^=&]+)=([^&]*)/g;
  const querys = searchStr.match(reg);
  if (querys) {
    querys.forEach((v) => {
      const query = v.match(new RegExp('([^=]*)=(.*)'));
      const key = query[1];
      const value = query[2].replace(/(^")|("$)/g, '');
      queryObj[key] = decodeURIComponent(value);
    });
  }
  return queryObj;
};

export const filterEmptyProp = (obj) => {
  if (typeof obj !== 'object') return obj;
  const result = {};
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (obj[key] !== '') {
      result[key] = filterEmptyProp(obj[key]);
    }
  }
  return result;
};

/**
 * 这是工作用于fetch post文件下载文件的方式。
 */
// * downloadTemplate(action) {
//   const res = yield downloadTemplateApi(action.props);
//   res.blob().then((blob) => {
//     const elink = document.createElement('a');
//     elink.style.display = 'none';
//     elink.href = window.URL.createObjectURL(blob);
//     document.body.appendChild(elink);
//     const fileName = res.headers.get('Content-Disposition');
//     elink.download = fileName;
//     elink.click();
//     window.URL.revokeObjectURL(elink.href);
//     document.body.removeChild(elink);
//   });
// };
