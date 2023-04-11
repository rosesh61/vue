//전역으로 둠 -> 어느페이지를 가든 적용되게함
function getMixin(vm){
    const {title} = vm.$options;
    if(title){
      return typeof title ==="function" ? title.call(vm) : title;
    }
  }
  
  const serverMixin = {
    //server side
    created(){
      const title = getMixin(this);
      if(title){
        this.$ssrContex.title = title;  //ssrContex = >서브사이트에 갖고있는 파일?
      }
    }
  }
  
  const clientMixin = {
    mounted(){
      const title = getMixin(this);
      if(title){
        document.title = title;
      }
    }
  }
  
  export default process.env.NODE_ENV === 'development' ? clientMixin : serverMixin;