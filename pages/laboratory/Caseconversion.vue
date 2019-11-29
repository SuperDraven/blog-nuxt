<template>
<div class="layout">
  <Layout>
    <Header>
      <BlogMenu></BlogMenu>
    </Header>
    <Content :style="{padding: '0 50px'}">
      <Breadcrumb :style="{margin: '20px 0'}">
        <BreadcrumbItem>首页</BreadcrumbItem>
        <BreadcrumbItem>分类</BreadcrumbItem>
        <BreadcrumbItem>Layout</BreadcrumbItem>
      </Breadcrumb>
      <Card>
        <List item-layout="vertical">
          <Form ref="formCustom">
            <FormItem label="">
              <Input  v-model="data.input"  type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入字母" />
            </FormItem>
            <FormItem>

              <Button type="primary" @click="Converttouppercase()">转换为大写</Button>
              <Button type="primary" @click="Converttolowercase()">转换为小写2</Button>

              <!--<Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>-->
            </FormItem>
          </Form>
        </List>
      </Card>
    </Content>
    <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
  </Layout>
</div>
</template>


<script>
  import BlogMenu from '~/components/BlogMenu.vue'
  import axios from '~/plugins/axios'

  export default {
      name: "Caseconversion",
      data(){
        return {
          data:{}
        }
      },
     methods:{
     async  Converttouppercase() {
         let req = await axios.post("api/laboratory/LaboratoryConverttouppercase", this.data)
         this.data.input = req.data.data
       },
       async Converttolowercase() {
         let req = await axios.post("api/laboratory/LaboratoryConverttolowercase", this.data)
         this.data.input = req.data.data
       },
     },

      components: {
        BlogMenu,
      }
    }
</script>

<style scoped>

</style>
