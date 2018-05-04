// axios
var instance = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5aec12bc32ada312d6e49fb4/echo6.5'
})


var app = new Vue({
  el: '#app',
  data: {
    query: {
      types: ['广告', '频道', '回声', '新碟', '音乐杂志'],
      versions: ['普通版', '国际版'],
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
    },
    special: {
      query: {
        date: new Date(),
        version: '普通版',
      },
      total: 8,
      loading: false,
      addSelect: false,
      addList: [
        {
          name: '频道',
          type: 'channel'
        },
        {
          name: '广告',
          type: 'advertisement'
        }
      ],
      list: [],
      edit: {
        editing: false,
        adding: false,
        isWeight: false,
        id: '',
        type: 'channel',
        weight: 0,
        loading: false,
        // 储存新增和编辑数据的容器
        addObj: {
          channel: {
            id: '',
            name: '',
            describe: '',
            version: '普通版',
            isStage: false,
            online: new Date(Date.now() + 3600 * 1000),
            weight: 1
          },
          advertisement: {
            
          }
        }
      }
    },
    searchChannel: {
      // 0表示没搜索 1表示正在搜索中 2表示搜索失败 3 表示搜索成功
      searchStatus: 0,
      id: '',
      name: '',
      describe: '',
      img: ''
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
    // 添加通用方法
    adding: function (op, type, row) {
      this.resetSearch()
      console.log(type)
      // var obj = JSON.parse(JSON.stringify(this[op]))
      var obj = _.assign({}, this[op])  
      obj.addSelect = false
      obj.edit.adding = true
      obj.edit.editing = false
      obj.edit.loading = false
      obj.edit.type = type
      // 如果有id 表示是编辑状态
      if (row) {
        obj.edit.editing = true
        obj.edit.addObj[type] = _.assign({}, row)
        obj.edit.id = row.id
        this.searchChannel = {
          searchStatus: 2,
          id: row.id,
          name: row.name,
          describe: row.describe,
          img: row.img
        }
      }
      this[op] = obj
    },

    remove: function (op, row) {
      this.$confirm('确认删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 执行删除
        var list = [].concat(this[op].list)
        _.remove(list, function (item) {
          return item.id === row.id
        })
        this[op].list = list
        this.msg('删除成功', 'success')
      }).catch(() => {
        this.msg('已取消删除', 'info')        
      })
    },

    // 获取列表数据通用方法
    getData: function (options) {
      var that = this
      console.log(options)
      that[options].loading = true
      if (options === 'special') {
        that.getSpecialData(options)
      }
    },

    // 获取特色频道
    getSpecialData () {
      var that = this
      instance.get('/special').then(function (res) {
        var data = res.data.special
        var list = _.map(data, function (o) {
          o.online = new Date(o.online)
          o.onlineDate = that.resetTime(o.online, 'year')
          o.onlineTime = that.resetTime(o.online, 'time')
          o.status = Date.now() > Date.parse(o.online) ? 1 : 0
          return o
        })
        that.special.list = list
        that.special.loading = false      
      }).catch(function (error) {
        that.msg('请求失败!')
        that.special.loading = false      
      })
    },

    // 编辑权重值
    editWeight: function (op, data) {
      // 记录当前修改的对象
      var obj = _.assign({}, this[op])
      // 设置编辑的id
      obj.edit.editing = true
      obj.edit.isWeight = true
      obj.edit.id = data.id
      this.weight = data.weight
      this[op] = obj
      this.$nextTick(function () {
        this.$refs.weight.focus()        
      })
    },

    endWeight: function (op) {
      var that = this
      var weight = ~~this.weight
      var obj = Object.assign(this[op])
      // 处理数据 赋值修改的权重值
      obj.list = _.map(obj.list, function (val, index) {
        val.weight = val.id === obj.edit.id ? weight : val.weight
        return val
      })
      this.$nextTick(function () {
        obj.edit.editing = false
        obj.edit.isWeight = false
        obj.loading = true
        // 执行排序
        that.listSort(op)
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
    },

    // 添加子项时候进行频道搜索
    chooseChannel: function (op, child) {
      var obj = this[op]
      var item = obj.edit.addObj[child]
      if (item.id.length <= 0) {
        this.msg('请输入正确的频道ID')
        return false
      }
      this.getChannelData(~~item.id)
    },

    // 获取频道信息
    getChannelData: function (id) {
      id = id.toString()
      var that = this
      if (this.searchChannel.searchStatus === 1) {
        return false
      }
      this.resetSearch()
      this.searchChannel.searchStatus = 1
      //模拟数据处理
      var o = _.filter(mockData.channels, function (item) {
        return item.id === id
      })
      setTimeout(function () {
        if (o.length > 0) {
          var obj = o[0]
          that.searchChannel.id = obj.id
          that.searchChannel.name = obj.name         
          that.searchChannel.img = obj.pic
          that.searchChannel.describe = obj.info 
          that.searchChannel.searchStatus = 2          
        } else {
          that.searchChannel.id = ''          
          that.searchChannel.searchStatus = 3
        }
      }, 1000)
    },

    // 添加子项
    addSpecialItem: function (child) {
      var that = this
      if (child === 'channel') {
        // 频道添加
        if (this.searchChannel.id === '') {
          this.msg('请选择频道')
          return false
        }
        var obj = _.assign({}, this.special.edit.addObj[child])
        var o = {
          id: that.searchChannel.id,
          weight: obj.weight,
          img: that.searchChannel.img,
          name: that.searchChannel.name,
          // status 0 表示未上线  1 表示上线
          status: Date.now() > Date.parse(obj.online) ? 1 : 0,
          type: this.special.edit.type,
          version: obj.version,
          sounds: '8首',
          isStage: obj.isStage,
          online: obj.online,
          onlineDate: that.resetTime(obj.online, 'year'),
          onlineTime: that.resetTime(obj.online, 'hour')
        }
        // 判断当前列表是否存在id
        // 表示编辑的位置
        var i = _.findIndex(this.special.list, function (val) {
          return val.id === that.special.edit.id
        })

        // 判断新增 编辑的是否存在于原始列表
        var j = _.findIndex(this.special.list, function (val) {
          return val.id === o.id
        })

        if (this.special.edit.editing) {
          // 如果edit id 和 o.id一样 表示没有新查询频道 只是编辑
          if (j !== -1 && this.special.edit.id !== o.id) {
            this.msg('频道已经添加了')
            return false
          }
          this.special.list[i] = o
          this.msg('保存成功', 'success')          
        } else {
          if (j !== -1) {
            this.msg('频道已经添加了')
            return false
          }
          this.special.list.push(o)
          this.msg('添加成功', 'success')          
        }
        this.listSort('special')
        this.special.edit.adding = false          
      }
    },

    specialClose: function () {
      if (this.special.edit.type === 'channel') {
        this.resetSearch()
        this.special.edit.addObj.channel.id = ''
        console.log('add channel close')
      }
    },

    resetTime: function (d, type) {
      var date = new Date(d)
      if (type === 'year') {
        return moment(date).format('YYYY[年]MM[月]DD[日]')
      } else {
        return moment(date).format('HH:mm')
      }
    },

    // 关闭弹窗
    cancelModel: function (op) {
      this[op].edit.adding = false
    },
  
    // 初始化搜索
    resetSearch: function () {
      this.searchChannel = {
        searchStatus: 0,
        id: '',
        name: '',
        describe: '',
        img: ''
      }
    },

    // 消息提示
    msg: function (data, type, time) {
      this.$message({
        message: data,
        type: type || 'error',
        duration: time || 1000
      })    
    }
  },
  mounted () {
    // 获取特色频道数据
    this.getData('special')
  }
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


// 模拟数据 mock
var mockData = {
  channels: [
    {
      id: '1',
      name: '3D音乐奇幻旋律馆',
      info: "echo独家3D音乐，颠覆你的听觉体验",
      pic: 'https://al-qn-echo-image-cdn.app-echo.com/FqQlWfVj9384hIaTVIjYgsVQsFdg'
    },
    {
      id: '2',
      name: '欧美流行指南',
      info: "集结最新最精的欧美流行内容",
      pic: 'https://al-qn-echo-image-cdn.app-echo.com/Fp-e_oa1y0kZskHzdxSqQyLxhNvj'
    },
    {
      id: '3',
      name: '周杰伦专场',
      info: '杰伦哥哥的音乐棒棒的',
      pic: 'https://al-qn-echo-image-cdn.app-echo.com/9474fc6a867b0fd3bff0ad7bc95c0ae9.png?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/200/q/100'
    },
    {
      id: '4',
      name: '林俊杰专场',
      info: '超级爱jj',
      pic: 'https://qn-qn-echo-image-cdn.app-echo.com/Fs9L4RTK70VEZmcRvvYaAvF41YWy?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/200/q/100'
    }
  ],
  special: [
    {
      id: '3',
      weight: 100,
      img: 'https://al-qn-echo-image-cdn.app-echo.com/9474fc6a867b0fd3bff0ad7bc95c0ae9.png?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/200/q/100',
      name: '周杰伦专场',
      describe: '杰伦哥哥的音乐棒棒的',
      // status 0 表示未上线  1 表示上线
      status: 1,
      type: 'channel',
      sounds: '8首',
      isStage: false,
      version: '普通版',
      online: 'Fri Apr 20 2018 20:00:00 GMT+0800 (CST)',
    },
    {
      id: '4',
      weight: 98,
      img: 'https://qn-qn-echo-image-cdn.app-echo.com/Fs9L4RTK70VEZmcRvvYaAvF41YWy?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/200/q/100',
      name: '林俊杰专场',
      describe: '超级爱jj',      
      // status 0 表示未上线  1 表示上线
      status: 0,
      type: 'channel',
      sounds: '8首',
      isStage: false,
      version: '普通版',      
      online: 'Fri Apr 23 2018 20:00:00 GMT+0800 (CST)',          
    }, 
    {
      id: '14453',
      weight: 30,
      img: 'https://al-qn-echo-image-cdn.app-echo.com/Fv3h0a1B6corVBHA5ntqHU5QxU3a?imageMogr2/auto-orient/quality/100%7CimageView2/0/w/500/q/100',
      name: '不知道是谁反正就是封面啊啊啊啊啊',
      // status 0 表示未上线  1 表示上线
      status: 0,
      type: 'advertisement',
      sounds: '8首',
      isStage: false,
      version: '国际版',
      online: 'Fri Apr 21 2018 20:00:00 GMT+0800 (CST)',          
    }
  ]
}
