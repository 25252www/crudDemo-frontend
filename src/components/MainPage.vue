<template>
  <div id="mainPage" >
    <h1>🍌</h1>
    <el-row class="line-display">
      <el-col :span="22" :offset="1">

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
              <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">Edit
              </el-button>
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
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.axios.get('/userAll').then(res => {
      this.tableData = res.data
      console.log(res.data);
    }).catch(function (error) {
      console.log(error);
    });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.axios.delete(
          '/user',
          {params:{
            id:row.id
            }}
      ).then(res=>{

      })
      console.log(index, row);
    }
  },
  setup() {
    return {
      search: ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{text-align: center;}
</style>
