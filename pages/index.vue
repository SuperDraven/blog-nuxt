<template>
  <div class="layout">
    <Layout>
      <Header>
        <BlogMenu></BlogMenu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>首页</BreadcrumbItem>
          <!--<BreadcrumbItem>Components</BreadcrumbItem>-->
          <!--<BreadcrumbItem>Layout</BreadcrumbItem>-->
        </Breadcrumb>
        <Row>

          <Col span="16"><Card><div style="min-height: 200px;">
            <List item-layout="vertical" :loading="loading">
              <ListItem v-for="item in data.article" :key="item.title" >
                <ListItemMeta  :avatar="item.avatar" :title="item.title" :description="item.describe"  />
                <p v-html="item.details"  style="overflow:hidden;text-overflow:ellipsis;height: 20px;"></p>
                <template slot="action">
                  <li>
                    <Icon type="md-eye" /> {{ item.pv }}
                  </li>
                  <li>
                    <Icon type="ios-thumbs-up-outline" /> 234
                  </li>
                  <li>
                    <Icon type="ios-chatbubbles-outline" /> 345
                  </li>
                  <Button  type="info" @click="jump(item.id)">阅读详情</Button>
                </template>
                <template slot="extra">
                  <!--<img v-if="item.group_photo[0] != 'undefined'" :src="item.group_photo[0]" style="width: 280px">-->
                </template>
              </ListItem>
            </List>
          </div></Card></Col>
          <Col span="6">
            <Card style="margin: 0 auto">
              <Icon type="logo-github" />
            <Tag color="primary">primary</Tag>
            <Tag color="success">success</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="yellow">yellow</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
            <Tag color="#FFA2D3">Custom Color</Tag>
          </Card>
            <Card style="margin: 0 auto">
              <Tag :color="item.color" v-for="item in data.label">{{ item.title }}</Tag>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<script>
import BlogMenu from '~/components/BlogMenu.vue'
import axios from '~/plugins/axios'
export default {
  data () {
    return {
      data:{
        article:[
          {
            title: 'This is title 1',
            group_photo:[
              'aaa'
            ],
            description: 'This is description, this is description, this is description.',
            avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
            content: 'This is the content, this is the content, this is the content, this is the content.'
          }
        ],
        label:[]
      },
      loading : true
    }
  },
  methods :{
    jump(id) {
      console.log(11)
      this.$router.push({path: '/details', query: {id: id}})
    },
    async GetLabelList() {
      let req = await  axios.get('api/labellist', {})
      console.log(req)
      if (req.data.data) {
        this.data.label =req.data.data
        this.loading = false
      }
    },
   async GetArticleList () {
      let req = await axios.get('api/articlelist', {})
     console.log(req)
     if (req.data.data) {
        this.data.article =req.data.data
        this.loading = false
     }
    }
  },
  created() {
    this.GetArticleList()
    this.GetLabelList()
  },
  components: {
    BlogMenu
  }
}
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-footer-center{
    text-align: center;
  }
</style>
