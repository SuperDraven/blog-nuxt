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
          <BreadcrumbItem>aaa</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div style="min-height: 200px;" >
            <Timeline>
              <TimelineItem>
                <p class="time">1976年</p>
                <p class="content">Apple I 问世</p>
              </TimelineItem>
              <TimelineItem>
                <p class="time">1984年</p>
                <p class="content">发布 Macintosh</p>
              </TimelineItem>
              <TimelineItem>
                <p class="time">2007年</p>
                <p class="content">发布 iPhone</p>
              </TimelineItem>
              <TimelineItem>
                <p class="time">2010年</p>
                <p class="content">发布 iPad</p>
              </TimelineItem>
              <TimelineItem>
                <p class="time">2011年10月5日</p>
                <p class="content">史蒂夫·乔布斯去世</p>
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

  export default {
        name: "index.vue",
    components: {
      BlogMenu,
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
