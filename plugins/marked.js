import marked from 'marked'

import hljs  from 'highlight.js'
// import 'highlight.js/styles/github.css';
import 'highlight.js/styles/default.css';

var rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  }
})

// marked.setOptions({
//   highlight: function (code) {
//     return hljs.highlightAuto(code).value;
//   }
// });
export default marked

