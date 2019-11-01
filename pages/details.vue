<style>
  body{
    margin: 0 auto;
    font-family: "Microsoft YaHei", arial,sans-serif;
    color: #444444;
    line-height: 1;
    /*padding: 30px;*/
  }



  /*@media screen and (min-width: 768px) {*/
    /*body {*/
      /*width: 748px;*/
      /*margin: 10px auto;*/
    /*}*/
  /*}*/
  h1, h2, h3, h4 {
    color: #111111;
    font-weight: 400;
    margin-top: 1em;
  }

  h1, h2, h3, h4, h5 {
    font-family: Georgia, Palatino, serif;
  }
  h1, h2, h3, h4, h5, p , dl{
    margin-bottom: 16px;
    padding: 0;
  }
  h1 {
    font-size: 48px;
    line-height: 54px;
  }
  h2 {
    font-size: 36px;
    line-height: 42px;
  }
  h1, h2 {
    border-bottom: 1px solid #EFEAEA;
    padding-bottom: 10px;
  }
  h3 {
    font-size: 24px;
    line-height: 30px;
  }
  h4 {
    font-size: 21px;
    line-height: 26px;
  }
  h5 {
    font-size: 18px;
    list-style: 23px;
  }
  a {
    color: #0099ff;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  a:hover {
    text-decoration: none;
    color: #ff6600;
  }
  a:visited {
    /*color: purple;*/
  }
  ul, ol {
    padding: 0;
    padding-left: 24px;
    margin: 0;
  }
  /*li {*/
    /*line-height: 24px;*/
  /*}*/
  p, ul, ol {
    font-size: 16px;
    line-height: 24px;
  }

  ol ol, ul ol {
    list-style-type: lower-roman;
  }

  /*pre {
      padding: 0px 24px;
      max-width: 800px;
      white-space: pre-wrap;
  }
  code {
      font-family: Consolas, Monaco, Andale Mono, monospace;
      line-height: 1.5;
      font-size: 13px;
  }*/

  code, pre {
    border-radius: 3px;
    background-color:#f7f7f7;
    color: inherit;
  }

  code {
    font-family: Consolas, Monaco, Andale Mono, monospace;
    margin: 0 2px;
  }

  pre {
    line-height: 1.7em;
    overflow: auto;
    padding: 6px 10px;
    border-left: 5px solid #6CE26C;
  }

  pre > code {
    border: 0;
    display: inline;
    max-width: initial;
    padding: 0;
    margin: 0;
    overflow: initial;
    line-height: inherit;
    font-size: .85em;
    white-space: pre;
    background: 0 0;

  }

  code {
    color: #666555;
  }


  /** markdown preview plus 对于代码块的处理有些问题, 所以使用统一的颜色 */
  /*code .keyword {
    color: #8959a8;
  }

  code .number {
    color: #f5871f;
  }

  code .comment {
    color: #998
  }*/

  aside {
    display: block;
    float: right;
    width: 390px;
  }
  blockquote {
    border-left:.5em solid #eee;
    padding: 0 0 0 2em;
    margin-left:0;
  }
  blockquote  cite {
    font-size:14px;
    line-height:20px;
    color:#bfbfbf;
  }
  blockquote cite:before {
    content: '\2014 \00A0';
  }

  blockquote p {
    color: #666;
  }
  hr {
    text-align: left;
    color: #999;
    height: 2px;
    padding: 0;
    margin: 16px 0;
    background-color: #e7e7e7;
    border: 0 none;
  }

  dl {
    padding: 0;
  }

  dl dt {
    padding: 10px 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: bold;
  }

  dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  dd {
    margin-left: 0;
  }

  /* Code below this line is copyright Twitter Inc. */

  button,
  input,
  select,
  textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    *vertical-align: middle;
  }
  button, input {
    line-height: normal;
    *overflow: visible;
  }
  button::-moz-focus-inner, input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    cursor: pointer;
    -webkit-appearance: button;
  }
  input[type=checkbox], input[type=radio] {
    cursor: pointer;
  }
  /* override default chrome & firefox settings */
  input:not([type="image"]), textarea {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  input[type="search"] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  label,
  input,
  select,
  textarea {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: normal;
    line-height: normal;
    margin-bottom: 18px;
  }
  input[type=checkbox], input[type=radio] {
    cursor: pointer;
    margin-bottom: 0;
  }
  input[type=text],
  input[type=password],
  textarea,
  select {
    display: inline-block;
    width: 210px;
    padding: 4px;
    font-size: 13px;
    font-weight: normal;
    line-height: 18px;
    height: 18px;
    color: #808080;
    border: 1px solid #ccc;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  select, input[type=file] {
    height: 27px;
    line-height: 27px;
  }
  textarea {
    height: auto;
  }
  /* grey out placeholders */
  :-moz-placeholder {
    color: #bfbfbf;
  }
  ::-webkit-input-placeholder {
    color: #bfbfbf;
  }
  input[type=text],
  input[type=password],
  select,
  textarea {
    -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
    -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
    transition: border linear 0.2s, box-shadow linear 0.2s;
    -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  input[type=text]:focus, input[type=password]:focus, textarea:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
    -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
  }
  /* buttons */
  button {
    display: inline-block;
    padding: 4px 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 18px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    background-color: #0064cd;
    background-repeat: repeat-x;
    background-image: -khtml-gradient(linear, left top, left bottom, from(#049cdb), to(#0064cd));
    background-image: -moz-linear-gradient(top, #049cdb, #0064cd);
    background-image: -ms-linear-gradient(top, #049cdb, #0064cd);
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #049cdb), color-stop(100%, #0064cd));
    background-image: -webkit-linear-gradient(top, #049cdb, #0064cd);
    background-image: -o-linear-gradient(top, #049cdb, #0064cd);
    background-image: linear-gradient(top, #049cdb, #0064cd);
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    border: 1px solid #004b9a;
    border-bottom-color: #003f81;
    -webkit-transition: 0.1s linear all;
    -moz-transition: 0.1s linear all;
    transition: 0.1s linear all;
    border-color: #0064cd #0064cd #003f81;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  }
  button:hover {
    color: #fff;
    background-position: 0 -15px;
    text-decoration: none;
  }
  button:active {
    -webkit-box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  table {
    *border-collapse: collapse; /* IE7 and lower */
    border-spacing: 0;
    width: 100%;
  }
  table {
    border: solid #ccc 1px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    /*-webkit-box-shadow: 0 1px 1px #ccc;
    -moz-box-shadow: 0 1px 1px #ccc;
    box-shadow: 0 1px 1px #ccc;   */
  }
  table tr:hover {
    background: #fbf8e9;
    -o-transition: all 0.1s ease-in-out;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }
  table td, .table th {
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  table th {
    background-color: #dce9f9;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#ebf3fc), to(#dce9f9));
    background-image: -webkit-linear-gradient(top, #ebf3fc, #dce9f9);
    background-image:    -moz-linear-gradient(top, #ebf3fc, #dce9f9);
    background-image:     -ms-linear-gradient(top, #ebf3fc, #dce9f9);
    background-image:      -o-linear-gradient(top, #ebf3fc, #dce9f9);
    background-image:         linear-gradient(top, #ebf3fc, #dce9f9);
    /*-webkit-box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;
    -moz-box-shadow:0 1px 0 rgba(255,255,255,.8) inset;
    box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;*/
    border-top: none;
    text-shadow: 0 1px 0 rgba(255,255,255,.5);
    padding: 5px;
  }

  table td:first-child, table th:first-child {
    border-left: none;
  }

  table th:first-child {
    -moz-border-radius: 6px 0 0 0;
    -webkit-border-radius: 6px 0 0 0;
    border-radius: 6px 0 0 0;
  }
  table th:last-child {
    -moz-border-radius: 0 6px 0 0;
    -webkit-border-radius: 0 6px 0 0;
    border-radius: 0 6px 0 0;
  }
  table th:only-child{
    -moz-border-radius: 6px 6px 0 0;
    -webkit-border-radius: 6px 6px 0 0;
    border-radius: 6px 6px 0 0;
  }
  table tr:last-child td:first-child {
    -moz-border-radius: 0 0 0 6px;
    -webkit-border-radius: 0 0 0 6px;
    border-radius: 0 0 0 6px;
  }
  table tr:last-child td:last-child {
    -moz-border-radius: 0 0 6px 0;
    -webkit-border-radius: 0 0 6px 0;
    border-radius: 0 0 6px 0;
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    /*margin-right: 20px;*/
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
<template>
  <div class="layout demo-spin-article">
    <Layout>
      <Header>
        <BlogMenu></BlogMenu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>首页</BreadcrumbItem>
          <!--<BreadcrumbItem>Components</BreadcrumbItem>-->
          <BreadcrumbItem>{{ article.title }}</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div style="min-height: 200px;" v-html="compiledMarkdown">
            Content
          </div>
        </Card>
        <!--<Card style="margin-top: 20px">-->
        <!--<div style="min-height: 200px" >-->
          <!--<Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">-->
            <!--<FormItem label="" prop="desc">-->
              <!--<Input v-model="data.desc" type="textarea" :autosize="{minRows: 2,maxRows: 2}" placeholder="评论"></Input>-->
            <!--</FormItem>-->
            <!--<FormItem>-->
              <!--<Button type="primary" @click="handleSubmit('formCustom')">评论</Button>-->
              <!--&lt;!&ndash;<Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>&ndash;&gt;-->
            <!--</FormItem>-->
          <!--</Form>-->
        <!--</div>-->
        <!--</Card>-->
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
    <Modal v-model="password_show" draggable scrollable title="请输入密码" @on-ok="ok"
           @on-cancel="cancel">
      <div> <Input v-model="password" size="large" placeholder="请输入密码" /></div>
    </Modal>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>
<script>
  import BlogMenu from '~/components/BlogMenu.vue'
  import axios from '~/plugins/axios'
  import marked from '~/plugins/marked'

  export default {
    async asyncData(obj) {
      let id = ''

      if (obj.route.query.id) {
        id = obj.route.query.id
        if (!obj.route.query.password) {
          let req = await axios.get('api/article/show/' + id, {})
          let reqs = await axios.put('api/article/edit/pv/' + id, {})
          if (req.data.data) {
            obj.store.commit('increment', req.data.data)
          }
        return {res :req.data.data}
      } else {
          obj.store.commit('increment', {
            title:'loading',
            details:'loading',
            id:id
          })
        }
      }

    },
    data () {

      return {
        spinShow:true,
        password:'',
        password_show:true,
        data:{},
        loading : true
      }
    },
    methods: {
     async ok () {
       let req = await axios.post('api/article/passwordshow' , {
         "id":this.$store.state.k1.id,
         "password":this.password
       });
       if (req.status === 200) {
         this.$store.commit('increment', req.data.data)
         this.spinShow = false
       } else {
         this.password_show = true
       }
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      }
    },
    computed: {
      article:function(){
        if (this.$store.state.k1.title != 'loading') {
          this.spinShow = false
          this.password_show = false
        }
        return this.$store.state.k1
      },
      compiledMarkdown: function () {
        return marked(this.$store.state.k1.details, { sanitize: true })
      }
    },
    components: {
      BlogMenu
    }
  }
</script>
