<template>
 <div class="container mt-5">
<!--   <vxe-toolbar>-->
<!--     <template v-slot:buttons>-->
<!--       <vxe-button @click="filterNameEvent">筛选 Name</vxe-button>-->
<!--       <vxe-button @click="filterAgeEvent">筛选 Age</vxe-button>-->
<!--       <vxe-button @click="updateNameFilterEvent">更改 Name 的筛选条件</vxe-button>-->
<!--       <vxe-button @click="$refs.xTable.clearFilter($refs.xTable.getColumnByField('age'))">清除 Age 的筛选条件</vxe-button>-->
<!--       <vxe-button @click="$refs.xTable.clearFilter()">清除所有的筛选条件</vxe-button>-->
<!--     </template>-->
<!--   </vxe-toolbar>-->
   <div>
     <p>工具栏位置随意放</p>
       <vxe-toolbar
         custom
         print
         ref="xToolbar"
         :refresh="{query: findList}"  >
         <template v-slot:buttons>
           <vxe-button @click="value8 = true">插入</vxe-button>
           <vxe-button >保存</vxe-button>
           <vxe-modal v-model="value8" title="记忆功能的窗口" width="600" height="400" resize remember>
             <template v-slot>
               <vxe-form :data="formData3" :rules="formRules3" title-align="right" title-width="60">
                 <vxe-form-item title="基本信息" span="24" title-align="left" title-width="200px" :title-prefix="{icon: 'fa fa-address-card-o'}"></vxe-form-item>
                 <vxe-form-item title="名称" field="name" span="12" :item-render="{name: 'input', attrs: {placeholder: '请输入名称'}}"></vxe-form-item>
                 <vxe-form-item title="昵称" field="nickname" span="12" :item-render="{name: 'input', attrs: {placeholder: '请输入昵称'}}"></vxe-form-item>
                 <vxe-form-item title="性别" field="sex" span="12" >
<!--                   :item-render="{name: '$select', options: sexList}"-->
                   <vxe-pulldown ref="xDown1">
                     <template v-slot>
                       <vxe-input v-model="value1" placeholder="可搜索的下拉框" @focus="focusEvent1" @keyup="keyupEvent1"></vxe-input>
                     </template>
                     <template v-slot:dropdown>
                       <div class="my-dropdown1">
                         <div class="list-item1" v-for="item in list1" :key="item.value" @click="selectEvent1(item)">
                           <i class="fa fa-user-o"></i>
                           <span>{{ item.label }}</span>
                         </div>
                       </div>
                     </template>
                   </vxe-pulldown>

                 </vxe-form-item>


                 <vxe-form-item title="年龄" field="age" span="12" :item-render="{name: 'input', attrs: {type: 'number', placeholder: '请输入年龄'}}"></vxe-form-item>
                 <vxe-form-item title="其他信息" span="24" title-align="left" title-width="200px" :title-prefix="{icon: 'fa fa-info-circle'}"></vxe-form-item>
                 <vxe-form-item title="地址" field="address" span="24" :item-render="{name: 'textarea', attrs: {placeholder: '请输入地址'}}"></vxe-form-item>
                 <vxe-form-item align="center" span="24">
                   <template v-slot>
                     <vxe-button type="submit" status="primary">提交</vxe-button>
                     <vxe-button type="reset">重置</vxe-button>
                   </template>
                 </vxe-form-item>
               </vxe-form>
             </template>
           </vxe-modal>
         </template>

       </vxe-toolbar>
   </div>
   <vxe-table
     show-overflow
     row-key
     resizable
     round
     :loading="loading"
     :tree-config="{children: 'children',line: true}"
     :data="tableData"
     :checkbox-config="{labelField: 'id', highlight: true}"
     @checkbox-change="selectChangeEvent">
     <vxe-table-column type="checkbox" title="ID" width="180" tree-node></vxe-table-column>
     <vxe-table-column field="name" title="Name" show-overflow="tooltip"></vxe-table-column>
     <vxe-table-column field="sex" title="Sex"></vxe-table-column>
     <vxe-table-column field="date" title="Date"></vxe-table-column>
     <template v-slot:empty>
            <span style="color: red;">
              <img src="@/assets/img/img1.gif">
              <p>不用再看了，没有更多数据了！</p>
            </span>
     </template>
   </vxe-table>

 </div>
</template>

<script>
export default {
  name: "Limits",
  data () {
    return {
      loading: false,
      allAlign: null,
      tableData: null,
      value1: '',
      value8: false,
      list1: [],
      formData3: {
        name: '',
        nickname: '',
        sex: '',
        age: 26,
        address: null
      },
      formRules3: {
        name: [
          { required: true, message: '请输入名称' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
        ],
        nickname: [
          { required: true, message: '请输入昵称' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ]
      },
      toolbarButtons: [
        { code: 'btn1', name: 'app.body.button.insert' },
        {
          name: '下拉按钮',
          dropdowns: [
            { name: '按钮111', code: 'btn2' },
            { name: '按钮222', code: 'btn3' }
          ]
        }
      ]
    }
  },
  created () {
    const list1 = []
    for (let index = 0; index < 20; index++) {
      list1.push({ label: `选项${index}`, value: index })
    }
    this.data1 = list1
    this.list1 = list1

    this.loading = true
    setTimeout(() => {
    this.tableData = [{
      name: 'test111111111111111111111111111111111111111',
      sex: '男',
      date: '2019-08',
      children: [
        {
          name: 'test2',
          sex: '女',
          date: '2019-08',
          children: [
            {
              name: 'test3',
              sex: '男',
              date: '2019-08',
            },
            {
              name: 'test11',
              sex: '男',
              date: '2019-08',
            }
          ]
        },
        {
          name: 'test7',
          sex: '女',
          date: '2019-08',
          children: [
            {
              name: 'test9',
              sex: '男',
              date: '2019-08',
            }
          ]
        }
      ]
    },
      {
        name: 'test4',
        sex: '男',
        date: '2019-08',
        children: [
          {
            name: 'test5',
            sex: '女',
            date: '2019-08',
          },
          {
            name: 'test15',
            sex: '女',
            date: '2019-08',
          }
        ]
      }]
      this.loading = false
    }, 1000)
      },
  methods: {
    findList () {

      this.loading = true
      // return new Promise(resolve => {
        setTimeout(() => {
          this.tableData =[{
            name: 'test111111111111111111111111111111111111111',
            sex: '男',
            date: '2019-08',
            children: [
              {
                name: 'test2',
                sex: '女',
                date: '2019-08',
                children: [
                  {
                    name: 'test3',
                    sex: '男',
                    date: '2019-08',
                  },
                  {
                    name: 'test11',
                    sex: '男',
                    date: '2019-08',
                  }
                ]
              },
              {
                name: 'test7',
                sex: '女',
                date: '2019-08',
                children: [
                  {
                    name: 'test9',
                    sex: '男',
                    date: '2019-08',
                  }
                ]
              }
            ]
          },
            {
              name: 'test4',
              sex: '男',
              date: '2019-08',
              children: [
                {
                  name: 'test5',
                  sex: '女',
                  date: '2019-08',
                },
                {
                  name: 'test15',
                  sex: '女',
                  date: '2019-08',
                }
              ]
            }]
          this.loading = false
          // resolve()
        }, 300)
      // })
    },
    focusEvent1 () {
      this.$refs.xDown1.showPanel()
    },
    keyupEvent1 () {
      const { value1 } = this
      this.list1 = value1 ? this.data1.filter(item => item.label.indexOf(value1) > -1) : this.data1
    },
    selectEvent1 (item) {
      this.value1 = item.label
      this.$refs.xDown1.hidePanel().then(() => {
        this.list1 = this.data1
      })
    },
    selectChangeEvent ({ records }) {
      console.info(`勾选${records.length}个树形节点`, records)
    }
  }

}
</script>

<style scoped>
.tree-node-icon {
  width: 24px;
  text-align: center;
}
button{
  border: 0;
  outline: none;
  box-shadow: none;
}
.my-dropdown1 {
  height: 200px;
  overflow: auto;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
}
.list-item1:hover {
  background-color: #f5f7fa;
}
.my-dropdown2 {
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
}
.list-item2:hover {
  background-color: #f5f7fa;
}
.my-dropdown3 {
  width: 400px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
.my-dropdown4 {
  width: 600px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
</style>
