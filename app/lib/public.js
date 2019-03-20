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
