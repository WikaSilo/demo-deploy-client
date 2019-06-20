const app = new Vue({
  el: '#app',
  data: {
    todos: [{
      "id": 1,
      "title": "belajar javascript",
      "created": "naruto",
      "image": "https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest?cb=20170621101134",
      "check": false
    }, {
      "id": 2,
      "title": "master vue",
      "created": "sasuke",
      "image": "https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest?cb=20170621055519&path-prefix=id",
      "check": false
    }, {
      "id": 3,
      "title": "masak",
      "created": "sakura",
      "image": "https://vignette.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png/revision/latest?cb=20170726101444",
      "check": true
    }],
    newTodo: {
      title: '',
      image: '',
      created: '',
      check: false
    },
    question: '',
    answer: '',
    gif: ''
  },
  computed: {
    titleApp() {
      return `Ninja Konoha - ${this.todos.length}`
    }
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      if (this.question.length !== 0) {
        this.answer = 'loading...'
        this.getAnswerApi()
      } else {
        this.answer = ''
        this.gif = ''
      }
    }
  },
  methods: {
    createNewData() {
      this.todos.push(data)
      this.newTodo = {
        title: '',
        image: '',
        created: '',
        check: false
      }
      //! HIT DATABASE CREATE
    },
    deleteTodo(input) {
      let filter = this.todos.filter(element => {
        if (element.id !== input) {
          return element
        }
      })
      //! HIT DATABASE DELETE
    },
    updateTodo(input) {
      this.todos = this.todos.map(element => {
        if (element.id === input) {
          element.check = !element.check
        }
        return element
      })
    },
    getAnswerApi() {
      axios({
        method: 'get',
        url: 'https://yesno.wtf/api'
      })
        .then(response => {
          this.answer = response.data.answer
          this.gif = response.data.image
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  // ! RENDER CREATED
})