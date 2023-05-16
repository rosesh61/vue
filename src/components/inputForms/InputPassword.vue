<template>
  <q-input
    v-bind="$attrs"
    :model-value="modelValue"
    @update:model-value="onInput"
    :type="type ? 'password' : 'text'"
  >
  <!--v-bind = 부모에게 받음
      model-value = model-value에 modelValue라는 이름으로 부모 v-model의 값을 상속 받겠다는 것.
      update = modelValue로 받아 @update:model-value로 입력값을 emit으로 부모로 보냄. emits 배열에 emit 명 등록. 밑에 method보기
      type = 밑에 append type이랑 연동 ? toggle형태 ?-->
    <template #prepend>
      <q-icon name="key" />
    </template>
    <template #append>
      <q-icon
        :name="type ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="type = !type"
      />   <!--toggle-->
    </template>
  </q-input>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "inputPassword",
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    modelModifiers: {
      // 수정자 가져옴
      default: () => ({}),
    },
  },
  data() {
    return {
      type: true,
    };
  },
  methods: {
    onInput(val) {
      this.$emit("update:modelValue", val);
    },
  },
});
</script>

<style></style>
