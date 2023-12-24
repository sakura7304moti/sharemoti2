<template>
  <!--与謝野晶子による焼き直し劇場-->
  <div class="row q-gutter-md">
    <div class="neta-talk" style="margin-right: 100px">
      <div class="row q-gutter-md q-pb-md">
        <div>
          <img
            src="src/assets/yosao.png"
            height="130"
            width="140"
            id="oba-profile"
          />
          <div class="profile-name">
            未来から来た与謝野晶子<q-btn
              @click.prevent.stop="selectWord()"
              icon="autorenew"
              color="black"
              size="sm"
              outline
              dense
            />
          </div>
        </div>
        <balloon-left :text="word" style="height: 120px" />
      </div>
      <div class="row q-gutter-md">
        <div>
          <img src="src/assets/obachan.jpg" height="130" id="oba-profile" />
          <div class="profile-name">韓国のおばあちゃん</div>
        </div>
        <balloon-left :text="obamessage" style="height: 120px" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import WordList2Api from 'src/api/main/WordList2Api';
import balloonLeft from '../balloonLeft.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'word-info',
  components: {
    'balloon-left': balloonLeft,
  },
  setup() {
    //名言をランダムに取得
    const word = ref('...');
    const words = ref([] as string[]);
    const getWords = async function () {
      await WordList2Api.search({ text: '' }).then((response) => {
        if (response) {
          words.value.splice(0);
          words.value = response.records.map((it) => it.word ?? '');
          word.value =
            response.records[
              Math.floor(Math.random() * response.records.length)
            ].word ?? '';
          selectWord();
        }
      });
    };

    const selectWord = function () {
      word.value = words.value[Math.floor(Math.random() * words.value.length)];
    };
    getWords();
    return {
      obamessage: `いやだああああぁぁぁ
`,
      word,
      selectWord,
    };
  },
});
</script>
<style>
/*pfofile */
#oba-profile {
  border-radius: 50%; /* 角丸半径を50%にする(=円形にする) */
  border: 3px solid #b4b4b4; /* 枠線を付加 */
}
.profile-name {
  text-align: center;
  font-weight: lighter;
  font-size: 1rem;
}
</style>
