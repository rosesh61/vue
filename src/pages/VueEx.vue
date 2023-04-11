<template class="q-pa-md q-gutter-md">
	<q-card-section>Message: {{ msg }}</q-card-section>
	<q-card-section>Using text interpolation: {{ rawHtml }}</q-card-section>
  <q-card-section>Using v-html directive: <span v-html="rawHtml"></span></q-card-section>
  <q-card-section>
    <q-btn
      unelevated
      color="primary" 
      type="a"
      target="_blank"
      v-bind:id="linkId"
      v-bind:href="link.to"
      :title="link.title"
      :label="link.label"
    ></q-btn>
  </q-card-section>
  <q-card-section>
    <q-btn :disable="isButtonDisabled" label="버튼 보이기"></q-btn>
  </q-card-section>
  <q-card-section>
    {{ number + 1 }}
  </q-card-section>
  <q-separator />
  <q-card-section>{{ ok ? "YES" : "NO" }}</q-card-section>
  <q-separator />
  <q-card-section>
    {{ message.split("").reverse().join("") }} <!--reverse - 거꾸로 출력-->
  </q-card-section>
  <q-separator />
  <q-card-section :id="`list-${id}`"> list-{{ id }} </q-card-section>
  <q-card-section class="text-h6">
    {{ calculateDate() }}
  </q-card-section>

  <q-card-section v-if="!seen"> Now you see me </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator />
  <q-btn @click="awesome = !awesome" label="toggle"></q-btn>
  <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator />
  <q-card-section v-if="type == 'A'"> A </q-card-section>
  <q-card-section v-else-if="type === 'B'"> B </q-card-section>
  <q-card-section v-else-if="type === 'C'"> C </q-card-section>
  <q-card-section v-else> Not A/B/C </q-card-section>

  <!--반응형 기초-->
  <div class="q-pa-md row items-start">
  <q-btn @click="increment" label="카운트" color="primary"></q-btn>
  <q-card-section>methodCount is: {{ methodCount }}</q-card-section>
  </div>

  <q-card-section>
  <q-input v-model="inputData"
    outlined
    bottom-slots
    label="DebounceEx"
    counter
    :dense="true"
  />
  </q-card-section>
  <q-separator />

  <!--계산된 속성-->
  <q-card-section>책을 가지고 있다: {{ publishedBooksMessage }}</q-card-section>
	<q-separator />

  <q-card-section class="text-h6">
    {{ toTitleDate }}
    {{ calculateDate() }}
  </q-card-section>
	<q-separator />

  <q-card-section class="text-h6">
    {{ fullName }}
  </q-card-section>
	<q-separator />

  <!--HTML클래스 바인딩-->
  <q-card-section class="static" :class="{active:isActive, 'text-h3': hasError}"> change color</q-card-section>
  <div class="static active"></div>

  <q-card-section :class="[{active:isActive}, errorClass]"> change color</q-card-section>
  <div class="active text-danger"></div>

  <div class="foo bar" id="hi"></div>
  <div class="foo bar baz boo"></div>
  <!-- MyComponent 템플릿에서 $attrs 속성을 사용  :id="$attrs.id" 추가 -->
  <q-card-section :class="{foo:true, bar:true}" :id="$attrs.id">안녕!</q-card-section>

  <q-card-section :style="styleObject"> 인라인 스타일 바인딩</q-card-section>

  <q-card-section :style="[baseStyles, overridingStyles]"> 배열바인딩</q-card-section>

  <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] }"></div>

  <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>

  <!--v-else-->
  <q-btn @click="awesome = !awesome" label="toggle"></q-btn>
  <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
  <q-card-section v-else> on no! </q-card-section>

  <!--v-else-if-->
  <q-card-section v-if="type == 'A'"> A </q-card-section>
  <q-card-section v-else-if="type === 'B'"> B </q-card-section>
  <q-card-section v-else-if="type === 'C'"> C </q-card-section>
  <q-card-section v-else> Not A/B/C </q-card-section>

  <div class="q-pa-md row items-start q-gutter-md">
  <q-card v-if="ok" dark bordered class="bg-grey-9 my-card">
    <q-card-section>
      <div class="text-h6">Our Changing Planet</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>
    <q-separator dark inset />
    <q-card-section>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </q-card-section>
  </q-card>
  </div>

  <div class="q-pa-md row items-start q-gutter-md">
	<q-card
	  v-show="ok"
	  dark
	  bordered
	  class="my-card text-white"
	  style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
	>
	  <q-card-section>
	    <div class="text-h6">Our Changing Planet</div>
	    <div class="text-subtitle2">by John Doe</div>
	  </q-card-section>
	  <q-separator dark inset />
	  <q-card-section>
	    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
	    tempor incididunt ut labore et dolore magna aliqua.
	  </q-card-section>
	</q-card>
  </div>

  <div class="q-pa-md">
    <q-list v-for="(item,idx) in listItems" :key="idx" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{ idx + 1 }}. {{ item.message }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator/>  

  <div class="q-pa-md">
  <q-list v-for="(item, index) in tupleListItems" :key="index" bordered separator>
    <q-item clickable v-ripple>
      <q-item-section v-for="(childItem, index) in item.children" :key="index">
        <q-item-section>{{ item.message }} - {{ childItem }}</q-item-section>
      </q-item-section>
    </q-item>
  </q-list>
  </div>
  <q-separator />

  <div class="q-pa-md">
  <q-list
    v-for="(value, key, index) in myObject"
    :key="index"
    bordered
    separator
  >
    <q-item clickable v-ripple>
      <q-item-section
        >{{ index + 1 }}. {{ key }} : {{ value }}</q-item-section
      >
    </q-item>
  </q-list>
  </div>
  <q-separator />

  <q-card-section>{{ filterItems }}</q-card-section>

  <q-list v-for="n in evenNumbers" :key="n" bordered separator>
  <q-item clickable v-ripple>
    <q-item-section>{{ n }}</q-item-section>
  </q-item>
  </q-list>

  <q-list v-for="(numbers, index) in sets" :key="index" bordered separator>
  <q-item v-for="n in even(numbers)" :key="n" clickable v-ripple>
    <q-item-section><q-item-label class="text-h6 text-weight-bolder text-center">{{ n }}</q-item-label></q-item-section>
  </q-item>
  </q-list>

  <div class="q-pa-md row items-start">
  <q-btn @click="count++" label="카운트" color="primary"></q-btn>
  <q-card-section>Count is: {{ count }}</q-card-section>
  </div>
  <q-separator />

  <!-- `greet`는 위에서 정의한 메서드의 이름입니다. -->
<div class="q-pa-md row items-start">
  <!--https://quasar.dev/quasar-plugins/notify#introduction -->
  <q-btn
    @click="greet"
    label="greet"
    color="secondary"
    class="q-ma-sm"
  ></q-btn>
  <!--https://quasar.dev/quasar-plugins/dialog#introduction-->
  <q-btn label="Alert" color="primary" @click="alert" class="q-ma-sm" />
  <q-btn label="Confirm" color="primary" @click="confirm" class="q-ma-sm" />
  <q-btn label="Prompt" color="primary" @click="prompt" class="q-ma-sm" />
  </div>
  <q-separator />

  <div class="q-pa-md row items-start">
    <q-btn
      @click="say('안녕')"
      label="안녕이라고 말하기"
      color="secondary"
      class="q-ma-sm"
    ></q-btn>
    <q-btn
      @click="say('잘가')"
      label="잘가라고 말하기"
      color="secondary"
      class="q-ma-sm"
    ></q-btn>
  </div>

  <div class="q-pa-md row items-start">
  <q-btn
    @click="warn('아직 양식을 제출할 수 없습니다.', $event)"
    label="아직 양식을 제출할 수 없습니다."
    color="secondary"
    class="q-ma-sm"
  ></q-btn>
  <q-btn
    @click="(event) => warn('아직 양식을 제출할 수 없습니다1.', event)"
    label="아직 양식을 제출할 수 없습니다1"
    color="secondary"
    class="q-ma-sm"
  ></q-btn>
  </div>
  <q-separator />

  <div class="q-pa-md row items-start">
  <!-- 클릭 이벤트 전파가 중지됩니다. -->
	  <q-btn label="stop" color="primary" @click.stop="doThis" class="q-ma-sm" />

  <!-- submit 이벤트가 더 이상 페이지 리로드하지 않습니다. -->
	  <q-form
      label="prevent"
      color="primary"
      @submit.prevent="doThis"
      class="q-ma-sm"
    >
	    <q-input v-model="name" />
	    <q-btn label="submit" type="submit"></q-btn>
	  </q-form>

    <!-- 수식어를 연결할 수 있습니다. -->
    <q-btn
      label="stopPrevent"
      color="primary"
      @click.stop.prevent="doThis()"
      class="q-ma-sm"
    />

    <!-- 이벤트에 핸들러 없이 수식어만 사용할 수 있습니다. -->
    <q-form
      label="prevent"
      color="primary"
      @submit.prevent
      class="q-ma-sm"
    >
      <q-input v-model="name" />
      <q-btn label="submit" type="submit"></q-btn>
    </q-form>

    <!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행됩니다. -->
    <!-- 예를 들어 자식 엘리먼트에서 클릭 액션이 있으면 핸들러가 실행되지 않습니다. -->

    <q-btn label="self" color="primary" @click.self="doThis" class="q-ma-sm" />
  </div>
  
  <q-card-section class="col-4">
      <q-input
        outlined
        bottom-slots
        v-model.lazy="text"
        label="Label"
        counter
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="place"/>
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint> Field hint </template>
      </q-input>
    </q-card-section>

    메세지 입력하기 : {{ text }}
    <q-input
        outlined
        bottom-slots
        v-model.lazy="text"
        label="Label"
        counter
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="place"/>
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint> Field hint </template>
    </q-input>

    <span>여러 줄 메세지:</span>
    <p style="white-space: pre-line;">{{ textArea}}</p>
    <div class="q-pa-md" style="max-width: 300px">
      <q-input
        v-model="textArea"
        filled
        type="textarea"
      />
    </div>

    <!--select https://quasar.dev/vue-components/option-group-->
    <q-card-section class="col-4 q-mt-md">
      <q-option-group
        v-model="group"
        :options="opts"
        color="green"
        type="checkbox"
      />
      {{ group }}
    </q-card-section>

    <!--checkbox https://quasar.dev/vue-components/radio-->
    <q-card-section class="col-4 q-mt-md">
      <q-radio v-model="color" val="teal" label="Teal" color="teal" />
      <q-radio v-model="color" val="orange" label="Orange" color="orange" />
      <q-radio v-model="color" val="red" label="Red" color="red" />
      <q-card-seciton>
        {{ color }}
      </q-card-seciton>
    </q-card-section>

    <!--select  https://quasar.dev/vue-components/select-->
    <q-card-section class="col-4">
      <q-select
        filled
        bottom-slots
        v-model="model"
        :options="options"
        label="Label"
        counter
        dense
        :options-dense="false"
      >
        <template v-slot:prepend>
          <q-icon name="place" @click.stop.prevent />
        </template>
        <template v-slot:append>
          <q-icon
            name="close"
            @click.stop.prevent="model = ''"
            class="cursor-pointer"
          />
        </template>

        <template v-slot:hint> Field hint </template>
      </q-select>
    </q-card-section>

    <!--toggle https://quasar.dev/vue-components/toggle-->
    <q-card-section class="col-4 q-mt-md">
      <q-toggle v-model="value" color="green" label="On Right"  true-value="네"
        false-value="아니오"/> {{value}}
    </q-card-section>

    <!--toggle https://quasar.dev/vue-components/toggle-->
    <q-card-section class="col-4 q-mt-md">
      <q-toggle v-model="value1" color="green" label="On Right"  :true-value="dynamicTrueValue"
        :false-value="dynamicFalseValue"/> 
			{{value1}}
    </q-card-section>

    <q-card-section class="col-4 q-mt-md">
      <q-radio v-model="color1" :val="first" label="Teal" color="teal" />
      <q-radio v-model="color1" :val="second" label="Orange" color="orange" />
      <q-card-section>
        {{ color1 }}
      </q-card-section>
    </q-card-section>

    <!--감시자-->
    <p>
      예/아니오 질문:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>

    <input ref="input" />

    <ul>
      <li v-for="item in list" ref="items">
        {{ item }}
      </li>
    </ul>

</template>
<script>
import { date } from 'quasar'  //date객체 추가
import { debounce } from 'lodash-es'
import ClassChild from "components/ClassChild.vue";

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ')

import { nextTick } from 'vue'

export default {
  name:'vueEx',
  title:"Vue Basic",
  components:{},
  data(){
    return{
      msg:"hello Vue",
     
      rawHtml: `<span style="color: red">빨간색이어야 합니다.</span>`,
     
      linkId: "vue",
	      link: {
	        to: "http://vuejs.org",
	        title: "뷰 공식 사이트",
	        label: "Vuejs.org",
	      },

        isButtonDisabled: true,

        ok: true,  //true이면 Yes출력, false이면 No출력
				number: 1000,
	      message:
	        "지금까지 템플릿의 단순한 속성만 있었습니다. 그러나 Vue는 실제로 모든 데이터가 내에서 JavaScript 강화의 모든 기능을 지원합니다.",
	      id: "hyun",

        seen: true,
	      awesome: true,
	      type: "B",

        methodCount: 1,

        obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
        },

        inputData:'',

        author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
         ]
        }, 
        str:'',
        firstName: 'John',
        lastName: 'Doe',

        isActive: true,
        hasError: false, 

        classObject: {
          active: true,
          'text-h3': false
        },
        styleObject: {
          color: 'red',
          fontSize: '13px'
        },

        baseStyles:{
          textDecorationLine:'underline',
          textDecorationThickness: '5px',
          textDecorationColor: 'red',
        },
        overridingStyles:{
          color:'blue',
          fontSize:'35px',
        },
        awesome: true,

        type: "B",
        ok: true,

        listItems: [{ message: "Foo" }, { message: "Bar" }],  
        
        parentMessage: 'Parent',
		    listItems: [{ message: "Foo" }, { message: "Bar" }],  

        tupleListItems: [{ message: "Foo", children:["baby"] }, { message: "Bar",children:['child'] }],
        
        myObject: {
          title: 'Vue에서 목록을 작성하는 방법',
          author: '홍길동',
          publishedAt: '2016-04-10'
        },

        items: [{ message: "Foo" }, { message: "Bar" }],
        numbers: [1, 2, 3, 4, 5],

        sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]],

        count: 0,

        name: "Vue.js",

        text: "",

        textArea: "",

        group: ["op1"],
        opts: [
          {
            label: "Option 1",
            value: "op1",
          },
          {
            label: "Option 2",
            value: "op2",
          },
          {
            label: "Option 3",
            value: "op3",
          },
        ],
        color: "",
        options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
        model: null,

        value:"네", //toggle1

        value1:"No",
        dynamicTrueValue:"Yes",
			  dynamicFalseValue:"No", //동적인 값 바인딩

        color1:"", //라디오
        first:"첫번째선택",
        second:"두번째선택",
        
        //감시자
        question: '',
        answer: '질문에는 일반적으로 물음표가 포함됩니다.',

        list: [ //v-for내부에서 ref사용
        /* ... */
        ], 
      }
    },
  
  computed:{
    // 계산된 값을 반환하는 속성
    publishedBooksMessage() {
      // `this`는 컴포넌트 인스턴스를 가리킵니다.
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    toTitleDate() {
      const timeStamp = Date.now();
      const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
      return formattedString;
    },
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // 참고: 분해 할당 문법을 사용함.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    },
    filterItems() {
      return (this.items = this.items.filter((item) =>
        item.message.match(/Foo/)
      ));
    },
    evenNumbers() {
    return this.numbers.filter(n => n % 2 === 0)
    },
  },

  watch:{
    inputData: debounce(function(newVal,oldVal){
	      // 처리로직 작성
	      console.log(newVal,oldVal);
	    },500),
    
    // 질문이 변경될 때마다 이 함수가 실행됩니다
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    },

    //깊은감시자
    someObject: {
      handler(newValue, oldValue) {
        // 참고:
        // someObject가 다른 객체로 교체되지 않는 한,
        // newValue와 oldValue는 같습니다.
        // 둘 다 동일한 객체를 참고하고 있기 때문입니다!
      },
      deep: true
    },
    //열성적인 감시자
    question: {
      handler(newQuestion) {
        // 이제 컴포넌트 생성 시
        // `beforeCreate`와 `created` 훅 사이에
        // 한 번 실행됩니다.
      },
      // 열성적으로 콜백 실행
      immediate: true
    },

    //콜백실행타이밍
    key: {
      handler() {},
      flush: 'post'
    }
  },

  mounted(){
    this.increment()

    console.log(`컴포넌트가 마운트 됐습니다.`)

    this.$refs.input.focus() //ref로 접근하기

    console.log(this.$refs.items) //v-for 내부에서 ref사용하기

  },


  methods:{
    calculateDate() {
      const timeStamp = Date.now();
      const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
      return formattedString;
		},

    increment() {
      this.methodCount++
      nextTick(() => {
        // 업데이트된 DOM에 접근 가능
      })
    },

    mutateDeeply() {
      // 변경 사항이 감지됩니다.
      this.obj.nested.count++
      this.obj.arr.push('baz')
    },
    click: debounce(function () {
      // ... 클릭에 응답 ...
    }, 500),

    //리렌더링 발생 -> 반복돼서 두번뜸 (*어떤거지움 ?)
    calculateDate() {     
	    setInterval(()=>{
        const timeStamp = Date.now();
        const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm:ss");
        this.str = formattedString;
      }, 1000);
      return this.str; // binding 되는 변수 필요
	  }, 
    even(numbers) {
      return numbers.filter(number => number % 2 === 0)
    },
    greet(e) {
			// `this`는 메서드가 활성화된 현재 인스턴스를 가리킵니다.
      this.$q.notify({
        message: `hello ${this.name}!`,
        caption: "5 minutes ago",
        color: "secondary",
      });
    },
    say(message) {
      alert(message)
    },
    warn(message, event){
    if (event) {
      event.preventDefault();
      this.$q
      .dialog({
        title: "Alert",
        message: `${message}`,
      })
      .onOk(() => {
        // console.log('OK')
      })
      .onCancel(() => {
        // console.log('Cancel')
      })
      .onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      });
     }
    },

    doThis(event) {
      console.log(event)
      this.$q.notify({
        color: "green-5",
        textColor: "white",
        icon: "warning",
        message: `doThis pointerType`,
      });
      console.log("doThis pointerType", event);
    },
    doThat(event) {
      this.$q.notify({
        color: "yellow-5",
        textColor: "white",
        icon: "warning",
        message: `doThat pointerType`,
      });
      console.log("doThat event", event);
    },
    async getAnswer() {
      this.answer = '생각 중...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer === 'yes' ? '네' : '아니오'
      } catch (error) {
        this.answer = '에러! API에 연결할 수 없습니다. ' + error
      }
    },
  },

  components: { 
    ClassChild 
  
  }, // 추가


  plugins: [
    'Notify',
  ],
  

}
</script>

<style scoped>
	.active{
	  color:red;
	}

  .foo {
	  background-color: red;
	  color:white;
	}
	.bar{
	  color:white;
	}

  #hi{
  font-size:3em;
  color:darkorchid;
  }
  .my-card {
	  width: 100%;
	  max-width: 250px;
	}
</style>

<!-- 컴포넌트가 사용될 때  -->
<class-child></class-child>
<!-- 컴포넌트가 사용시 클래스 추가 -->
<class-child :class="[baz, boo]"></class-child>
<!-- 컴포넌트가 사용시 active 클래스 추가 -->
<class-child :class="{ active: isActive }"></class-child>
<class-child id="hi"></class-child>
