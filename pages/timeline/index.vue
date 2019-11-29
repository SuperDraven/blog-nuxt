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
          <BreadcrumbItem>时间轴</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div style="min-height: 200px;" >
            <Timeline>
              <TimelineItem v-for="item in data">
                <p class="time"><Time :time="item.create_at * 1000" type="datetime" /></p>
                <p class="content">{{ item.title }}</p>
              </TimelineItem>

            </Timeline>
          </div>
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
    name: "index.vue",
    data(){
      return {
        data:{}
      }
    },
    components: {
      BlogMenu,
     },
    created(){
      this.GetTimeLineList()
    },
    methods:{
    async  GetTimeLineList() {
        let req = await axios.get("api/timeline/list", {})
        if (req.data.data) {
          this.data = req.data.data
        }
      }
    }
    }
</script>

<style scoped>
  .time{
    font-size: 14px;
    font-weight: bold;
  }
  .content{
    padding-left: 5px;
  }
</style>
