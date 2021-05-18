<template>
  <div id="mainPage">
    <h1>🍌</h1>
    <el-row class="line-display">
      <el-col :span="22" :offset="1">
        <!--        <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>-->
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
              prop="id"
              label="编号"
          >
          </el-table-column>
          <el-table-column
              prop="email"
              label="邮箱"
          >
          </el-table-column>
          <el-table-column
              prop="password"
              label="密码"
          >
          </el-table-column>
          <el-table-column
              prop="username"
              label="姓名"
          >
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <!--              <el-button-->
              <!--                  size="mini"-->
              <!--                  @click="handleEdit(scope.$index, scope.row)">Edit-->
              <!--              </el-button>-->
              <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">Delete
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!--    <el-dialog-->
    <!--        title="添加用户"-->
    <!--        v-model="dialogVisible"-->
    <!--        width="30%"-->
    <!--        :before-close="handleClose">-->
    <!--      <el-form ref="create" :model="create" label-width="100px">-->
    <!--        <el-form-item label="编号" prop="id">-->
    <!--          <el-input v-model="create.id"></el-input>-->
    <!--        </el-form-item>-->
    <!--        <el-form-item label="邮箱" prop="email">-->
    <!--          <el-input v-model="create.email"></el-input>-->
    <!--        </el-form-item>-->
    <!--        <el-form-item label="密码" prop="password">-->
    <!--          <el-input v-model="create.password"></el-input>-->
    <!--        </el-form-item>-->
    <!--        <el-form-item label="姓名" prop="username">-->
    <!--          <el-input v-model="create.username"></el-input>-->
    <!--        </el-form-item>-->
    <!--      </el-form>-->
    <!--      <template #footer>-->
    <!--    <span class="dialog-footer">-->
    <!--      <el-button @click="dialogVisible = false">取 消</el-button>-->
    <!--      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
    <!--    </span>-->
    <!--      </template>-->
    <!--    </el-dialog>-->

  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      tableData: [],
      // dialogVisible: false，
      // form:{}
    }
  },
  //VUE生命周期钩子
  created() {
    this.getTableData()
  },
  //VUE实例里的方法
  methods: {
    getTableData() {
      this.axios({
        method: "get",
        url: "/userAll",
      }).then(res => {
        this.tableData = res.data
        console.log(res.data);
      }).catch(function (error) {
        console.log(error);
      });
    },
    // handleEdit(index, row) {
    //   console.log(index, row);
    // },
    handleDelete(index, row) {
      //发送两次请求，设计的不好，且不能及时更新
      // this.axios({
      //   method: "delete",
      //   url: "/user",
      //   params: {
      //     id: row.id
      //   }
      // })
      console.log(index, row);
      // this.getTableData();
    },
    //   handleClose() {
    //     this.axios({
    //       method: "post",
    //       url: "/user",
    //       data: this.form
    //     })
    //     this.getTableData()
    //   }
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
</style>
