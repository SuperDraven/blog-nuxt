<template>
  <div>
  <ListItem v-for="item in articlelist" :key="item.title" v-if="item.disclosure != 2" >
    <ListItemMeta  :avatar="item.avatar" :title="item.title" :description="item.describe"  />
    <p v-html="item.details"  style="overflow:hidden;text-overflow:ellipsis;height: 20px;"></p>
    <template slot="action">
      <li>
        <Icon type="md-eye" /> {{ item.pv }}
      </li>

      <!--<li>-->
      <!--<Icon type="ios-chatbubbles-outline" /> 345-->
      <!--</li>-->
      <p>
        <Button  type="info" @click="jump(item.id)">阅读详情</Button>
      </p>
    </template>
    <!--<p  style="overflow:hidden;text-overflow:ellipsis;height: 20px;">aaaa</p>-->
    <template slot="extra">
      <!--<img v-if="item.group_photo[0] != 'undefined'" :src="item.group_photo[0]" style="width: 280px">-->
    </template>
  </ListItem>
  </div>
</template>

<script>
    export default {
        name: "articleListItem",
        props: {
          articlelist: [],
        },
      data () {
        return {
          articlelist:[
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
          loading : true
        }
      },
      methods:{
        jump(id) {
          console.log(11)
          this.$router.push({path: '/details/', query: {id: id}})
        },
      }
    }
</script>

<style scoped>

</style>
