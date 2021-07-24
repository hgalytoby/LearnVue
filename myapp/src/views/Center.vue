<template>
  Center
  <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-radio v-model="radio" label="1">20</el-radio>
    <el-radio v-model="radio" label="2">25</el-radio>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    <el-alert
      title="成功提示的文案"
      type="success">
    </el-alert>
    <el-button :plain="true" @click="open">打開訊息</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
    <el-button type="text" @click="openMessage">點擊 Message Box</el-button>
    <el-button type="text" @click="confirmMessage">送出 Message Box</el-button>
  </el-row>
      <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
import auth from '@/tools/auth'
import { h } from 'vue'
import { ElMessage } from 'element-plus'

export default {
  name: 'Center',
  setup () {
    return {
      open () {
        ElMessage('訊息提示')
      },
      openVn () {
        ElMessage({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        })
      }
    }
  },
  data () {
    return {
      radio: '1',
      value: false
    }
  },
  methods: {
    isLogin () {
      console.log('in')
      return false
    },
    openMessage () {
      this.$alert('这是一段内容', '標題名稱', {
        confirmButtonText: '確定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    },
    confirmMessage () {
      this.$confirm('送出刪除檔案, 是否繼續?', '提示', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        cancelButtonClass: 'btn-custom-cancel',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '刪除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('局部檢查')
    // next(vm => {
    //   if (vm.isLogin()) {
    //     console.log('123')
    //   } else {
    //     console.log(456)
    //     next('/login')
    //   }
    // })
    if (auth.isLogin()) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>

<style lang="scss">
.btn-custom-cancel {
  float: right;
  margin-left: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
