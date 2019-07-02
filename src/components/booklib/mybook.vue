<template>
  <div class="mybook-container">
    <h3 class="title">预约信息</h3>
    <div class="no-book">
      <p>对不起，您暂时没有任何预约信息</p>
    </div>
    <!-- <ul class="book-list">
			
    </ul>-->

    <div style="margin-top:20px;">
      <!-- 操作按钮组 -->
      <el-button-group>
        <el-button type="default" icon="el-icon-edit">修改</el-button>
        <el-button type="default" icon="el-icon-delete">删除</el-button>
        <el-button type="default" icon="el-icon-view">查看</el-button>
        <el-button type="default" icon="el-icon-refresh-left">撤回</el-button>
      </el-button-group>

      <!-- 预约详情页面 -->
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="实验室名称" width="120">
          <template slot-scope="scope">{{ scope.row.libName }}</template>
        </el-table-column>
        <el-table-column prop="className" label="课程名称" width="120"></el-table-column>
        <el-table-column prop="teacher" label="任课老师" width="120"></el-table-column>
        <el-table-column prop="teacherPhone" label="任课老师联系方式" width="140"></el-table-column>
        <el-table-column prop="usePeopleNum" label="使用人数" width="120"></el-table-column>
        <el-table-column label="审核状态" width="120">
          <el-button type="danger" size="small">待审</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          libName: "思西503",
          className: "氧气的浓度实验",
          teacher: "张三",
          teacherPhone: "123234321",
          usePeopleNum: 32
        },
        {
          libName: "思西503",
          className: "氧气的浓度实验",
          teacher: "张三",
          teacherPhone: "123234321",
          usePeopleNum: 32
        },
        {
          libName: "思西503",
          className: "氧气的浓度实验",
          teacher: "张三",
          teacherPhone: "123234321",
          usePeopleNum: 32
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    // multipleSelection 记录了每一个被选中的元素
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val);
    }
  }
};
</script>

<style scoped="scoped">
.mybook-container {
}
.mybook-container .title {
  padding-bottom: 0.2rem;
  border-bottom: 2px solid #ccc;
}
.mybook-container .no-book {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.4rem;
  height: 4rem;
  border: 1px solid #ccc;
}
.mybook-container .el-button--small,
.el-button--small.is-round {
  padding: 5px 3px;
}
</style>
