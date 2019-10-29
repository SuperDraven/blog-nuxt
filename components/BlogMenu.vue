<template>
 <div>
   <Menu mode="horizontal" theme="dark" active-name="1">
     <div class="layout-logo"></div>
     <div class="layout-nav">
       <MenuItem name="1" to="/">
         <Icon type="ios-navigate"></Icon>
         首页
       </MenuItem>
       <MenuItem name="2">
         <Icon type="ios-keypad"></Icon>
         时间轴
       </MenuItem>
       <Submenu name="3">
         <template slot="title">
           <Icon type="ios-stats" />
           分类
         </template>
         <MenuGroup title="分类">
           <MenuItem name="3-1" v-for="item in data" :to="'/class/'+item.id">{{ item.title }}</MenuItem>
         </MenuGroup>
       </Submenu>
     </div>
     <!--<div class="layout-register">-->
       <!--<MenuItem name="3">-->
         <!--<Icon type="ios-paper"></Icon>-->
         <!--登陆-->
       <!--</MenuItem>-->
       <!--<MenuItem name="3">-->
         <!--<Icon type="ios-paper"></Icon>-->
         <!--注册-->
       <!--</MenuItem>-->
     <!--</div>-->
   </Menu>
 </div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    data () {
      return {
        data:{},
        theme1: 'primary'
      }
    },
    created() {
      this.GetCategoryList();
      console.log(this.data)
    },
    methods:{
    async GetCategoryList() {
      let req = await  axios.get('api/categorylist', {})
      if (req.data.data) {
        this.data =req.data.data
      }
    }
    },
    name: 'BlogMenu'
  }
</script>

<style scoped>
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
  .layout-register {
    margin-right: 20px;
  }
  .layout-nav{
    width: 421px;
    margin: 0 auto;
    /*margin-right: 20px;*/
  }
</style>
