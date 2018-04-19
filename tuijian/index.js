var app = new Vue({
  el: '#app',
  data: {
    boolean: [
      {
        name: '是',
        key: true
      },
      {
        name: '否',
        key: false
      }
    ],
    query: {
      types: ['广告', '频道', '回声', '新碟', '音乐杂志'],
      versions: ['普通版', '国际版'],
    },
    special: {
      query: {
        date: new Date(),
        version: '普通版',
      },
      total: 8,
      loading: false,
      addSelect: false,
      addList: ['频道', '广告'],
      list: [
        {
          id: '13327',
          weight: 100,
          img: 'https://al-qn-echo-image-cdn.app-echo.com/9474fc6a867b0fd3bff0ad7bc95c0ae9.png?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/200/q/100',
          name: '周杰伦专场',
          // status 0 表示未上线  1 表示上线
          status: 1,
          type: '频道',
          sounds: '8首',
          isStage: false,
          onlineDate: '2018年4月20日',
          onlineTime: '18:00'
        },
        {
          id: '15560',
          weight: 98,
          img: 'https://qn-qn-echo-image-cdn.app-echo.com/Fs9L4RTK70VEZmcRvvYaAvF41YWy?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/200/q/100',
          name: '林俊杰专场',
          // status 0 表示未上线  1 表示上线
          status: 0,
          type: '频道',
          sounds: '8首',
          isStage: false,
          onlineDate: '2018年4月20日',
          onlineTime: '16:00'
        }, 
        {
          id: '14453',
          weight: 30,
          img: 'https://al-qn-echo-image-cdn.app-echo.com/Fv3h0a1B6corVBHA5ntqHU5QxU3a?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/500/q/100',
          name: '不知道是谁反正就是封面啊啊啊啊啊',
          // status 0 表示未上线  1 表示上线
          status: 0,
          type: '频道',
          sounds: '8首',
          isStage: false,
          onlineDate: '2018年4月20日',
          onlineTime: '20:00'
        }
      ],
      edit: {
        editing: false,
        isWeight: false,
        id: '',
        weight: 0
      }
    },
    timeOptions: {
      disabledDate(time) {
        // return time.getTime() > Date.now()
      }
    },
    // 绑定的通用权重值
    weight: 0
  },
  watch: {
  },  
  methods: {
    // 特色频道
    addSpecial: function (name) {
      console.log(name)
      this.special.addSelect = false
    },
    // 获取列表数据通用方法
    getData: function (options) {
      var  _ = this
      console.log(options)
      _[options].loading = true
      setTimeout(function () {
        _[options].loading = false
      }, 500)
    },

    // 编辑权重值
    editWeight: function (op, data) {
      // 记录当前修改的对象
      var obj = this[op]
      // 设置编辑的id
      obj.edit.editing = true
      obj.edit.isWeight = true
      obj.edit.id = data.id
      this.weight = data.weight
      this.$nextTick(function () {
        this.$refs.weight.focus()        
      })
    },

    endWeight: function (op) {
      var _ = this
      var weight = ~~this.weight
      var obj = Object.assign(this[op])
      // 处理数据 赋值修改的权重值
      obj.list = obj.list.map(function (val, index) {
        val.weight = val.id === obj.edit.id ? weight : val.weight
        return val
      })
      this.$nextTick(function () {
        obj.edit.editing = false
        obj.edit.isWeight = false
        obj.loading = true
        // 执行排序
        _.listSort('special')
      })
    },

    // 列表排序
    listSort: function (op) {
      var obj = this[op]
      var arr = JSON.parse(JSON.stringify(obj.list))
      // 插入排序
      for (var i = 1; i < arr.length; i ++) {
        var key = arr[i]
        var j = i - 1
        while (j >= 0 && arr[j].weight < key.weight) {
          arr[j + 1] = arr[j]
          j--
        }
        arr[j + 1] = key
      }
      obj.list = arr
      obj.loading = false
    }
  },
})

//监听特色频道  修改筛选条件 更新数据
app.$watch('special.query.date', function (newVal, oldVal) {
  if (newVal !== oldVal && newVal !== null) {
    console.log('timeupdate')
    app.getData('special')
  }
})

app.$watch('special.query.version', function (newVal, oldVal) {
  if (newVal !== oldVal && newVal !== null) {
    console.log('versionupdate')
    app.getData('special')
  }
})