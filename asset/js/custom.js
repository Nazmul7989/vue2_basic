Vue.component('test',{
    data(){
        return{
            name: 'Md Nazmul Hasan'
        }
    },
    template: `<h2>{{ name }}</h2>`
})
new Vue({

    el: '#app',
    data: {
        demo: 'hello world',
    },
    methods: {
        newMethod(){
           app2.newInstance = 'Changed'
        }
    }


});

var app2 = new Vue({
    data: {
        newInstance: 'This is new instance'
    }
}).$mount('#app2');
