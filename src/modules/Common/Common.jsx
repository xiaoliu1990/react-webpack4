var common={
  title: function(title) {
    document.title = title;
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'display: none; width: 0; height: 0;';
    iframe.src = 'about:blank';
    const listener = () => {
      setTimeout(() => {
        iframe.removeEventListener('load', listener);
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 0);
      }, 0);
    };
    iframe.addEventListener('load', listener);
    document.body.appendChild(iframe);
  },
  getParameter:function(query, param){
    var iLen = param.length;
    var iStart = query.indexOf(param);
    if (iStart == -1)
      return "";
    iStart += iLen + 1;
    var iEnd = query.indexOf("&", iStart);
    if (iEnd == -1)
      return query.substring(iStart);
    return query.substring(iStart, iEnd);
  }
}
export default common;