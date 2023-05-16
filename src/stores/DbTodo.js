import { defineStore } from "pinia";
import { uid } from "quasar";
import { LocalStorage } from 'quasar'


export default defineStore("useDbTodo", {

  state:()=>({
    tasks:[],
  }),

  getters : {

  },

  actions: {   //parameter만 넣고 처리는 store에서 진행
    insertDbTodo(title){   //추가
      if(this.tasks){
        this.tasks.unshift({
          id: uid(),
          title,
          done:'N'
        });
      }else{
        this.tasks=[];
        this.tasks.push({
          id: uid(),
          title,
          done:'N'
        })
      }

      LocalStorage.set("todo", this.tasks);
    },
    listDbTodo(){    //list불러오기
      this.tasks = LocalStorage.getItem("todo");
    },
    removeDbTodo(id){   //삭제
      // 배열 안 오브젝트일때 idx
      const idx = this.tasks.findIndex(task=>task.id == id);
      //삭제 array.splice(시작 index, 제거 index, 추가 요소)
      this.tasks.splice(idx,1);
      LocalStorage.set("todo", this.tasks);
    },
    editDbTodo(item){   //수정
      //배열에서 수정하되 done은 'n'으로
      const idx = this.tasks.findIndex(task=>task == item);
      item.done = 'N';
      this.tasks.splice(idx,1,item);
      LocalStorage.set("todo", this.tasks);
    }

  }
})
