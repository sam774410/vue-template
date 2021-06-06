const { reactive, ref, watch, onMounted, onUpdated } = Vue;


const App = {
  setup() {
    let msg = ref("HIII");
    let testa = 'test from vue 123';
    let mdate = ref("");
    let records = ref([]);

    onMounted(()=>{
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        // handle success
        
        records.value = response.data;
        console.log(records.value)
        // $('#table tbody tr').append('<td><a href="#" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a><a href="#" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete </a></td>');
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

      
    });

    onUpdated(()=>{
      /**
       * get nt & lookup id => picture
       */
      let nt = $("#nt").text();
      console.log(`my NT: ${nt}`)
    })
    
    let hi = () => {
      swal("Good job!", "You clicked the button!", "success");
    };

    let update_row = (idx)=> {
      // console.log(idx);
      console.log(records.value[idx])

    }
    
    let review_date = () =>{
      const fp = flatpickr("#myID", {
        minDate: "today",
      });
      fp.open();
    }

    watch(mdate, (_new, _old) => {
      console.log(_new, _old)
    })

    return { testa, msg, hi, review_date, mdate, records, update_row };


  },
};
App.delimiters = ["${", "}$"];

Vue.createApp(App).mount("#appp");