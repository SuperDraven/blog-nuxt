<template>
  <div class="layout">
    <Layout>
      <Header>
        <BlogMenu></BlogMenu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <List item-layout="vertical">
            <articleLIstitem :articlelist="article"></articleLIstitem>
          </List>
        </Card>
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<script>
  import BlogMenu from '~/components/BlogMenu.vue'
  import articleLIstitem from '~/components/articleListItem.vue'
  import axios from '~/plugins/axios'
  export default {
    async asyncData(obj) {
      let id = ''

      console.log(obj.route.params.id)
      // /article/GetCategoryArticleList/:id
      if (obj.route.params.id) {
        id = obj.route.params.id
        let req = await axios.get('api/article/GetCategoryArticleList/' + id, {})
        if (req.data.data) {
          obj.store.commit('increment', req.data.data)
        }
      }
    },
    data () {
      return {
        data: [
          {
            title: 'This is title 1',
            description: 'This is description, this is description, this is description.',
            avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
            content: 'This is the content, this is the content, this is the content, this is the content.'
          },
          {
            title: 'This is title 2',
            description: 'This is description, this is description, this is description.',
            avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
            content: 'This is the content, this is the content, this is the content, this is the content.'
          },
          {
            title: 'This is title 3',
            description: 'This is description, this is description, this is description.',
            avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
            content: 'This is the content, this is the content, this is the content, this is the content.'
          }
        ]
      }
    },
    computed: {
      article:function(){
        return this.$store.state.k1
      },
    },
    name: "_id",
      components: {
        BlogMenu,
        articleLIstitem
      }
    }
</script>

<style scoped>

</style>
