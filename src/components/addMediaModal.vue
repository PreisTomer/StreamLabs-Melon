<template>
  <v-dialog v-model="modalState" width="600" height="350" @click:outside="emitCloseEvent">
    <div class="modal_container">
      <h2 class="modal_title">{{ content.title }}</h2>

      <div class="modal_content_wrapper">
        <div
         class="options_wrapper"
         v-for="(action, index) in content.actions"
         :key="index"
       >
       <button @click="emitSelection(action.value)">

         
          <h3 class="option_title">{{ action.title }}</h3>
          <p class="option_message">{{ action.message }}</p>
         </button>
        </div>
      
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "AddMediaModal",
  props: {
    show: {
      type: Boolean,
      required: false,
      default: false,
    },
    content: {
      type: Object,
      required: false,
      default: () => {
        return {};
      },
    },
  },
  data(){
    return {
      modalState: false
    }
  },
  methods:{
    emitCloseEvent(){
      this.$emit('close')
    },
    emitSelection(value){
      this.$emit('mediaSelected', value)
      this.emitCloseEvent()
    }
  },
  watch:{
    show(newVal){
      this.modalState = newVal

    }
  }
};
</script>

<style lang="scss" scoped>
.modal_container {
  border-radius: 8px;
  padding: 40px;
  background: #FFFFFFFF;
    text-align: center;


.modal_title{
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 40px;

}
  .modal_content_wrapper {
    display: flex;
    justify-content: space-between;
    .options_wrapper {
      width: 244px;
      height: 207px;
      background: #f5f8fa;
      display:flex;
      flex-direction: column;
      align-items: center;
          &:hover{
        background: #edf0f2;
    }
.option_title{
    font-size: 16px;
    margin-top: 32px;
    margin-bottom: 16px;


}
.option_message{
    font-size: 14px;
    max-width: 180px;
    line-height:18px;
  
}

    }
  }
}
</style>