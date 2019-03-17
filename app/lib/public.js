// 把图片转化为base64
function convertImgToBase64(url, callback, outputFormat = 'image/png') {
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