const app = Vue.createApp({
    data : function() {
        return {
            coursesData: [],
            picked: "",
        }
    },
    methods :{

    },
    created() {
        fetch("./sections.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            this.coursesData = data;
            return data;
        })
        .catch((err) => {
            console.log(err);
        });
    },
    computed: {
        byTitle: function() {
            return this.coursesData.filter( course =>
                 course.title.toLowerCase().includes(this.picked.toLowerCase()));        
        }
    },
    mounted() {
   
        },
})
app.mount("#appArea");
