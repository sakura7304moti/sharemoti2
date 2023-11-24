<template>
  <q-page class="">
    <div id="page-main">
      <div class="text-h5 q-pb-md">お茶の間</div>
      <!--ネタ要素満載-->
      <div class="row q-gutter-md">
        <!--与謝野晶子による焼き直し劇場-->
        <div class="neta-talk" style="padding-right: 100px">
          <div class="row q-gutter-md q-pb-md">
            <div>
              <img
                src="../assets/yosao.png"
                height="130"
                width="140"
                id="oba-profile"
              />
              <div class="profile-name">
                未来から来た与謝野晶子<q-btn
                  @click.prevent.stop="selectWord()"
                  icon="autorenew"
                  color="primary"
                  size="md"
                  outline
                  dense
                />
              </div>
            </div>
            <balloon-left :text="word" style="height: 120px" />
          </div>
          <div class="row q-gutter-md">
            <div>
              <img src="../assets/obachan.jpg" height="130" id="oba-profile" />
              <div class="profile-name">韓国のおばあちゃん</div>
            </div>
            <balloon-left :text="obamessage" style="height: 120px" />
          </div>
        </div>
      </div>
      <!--ガノンヤーキー川柳-->

      <div class="row q-gutter-md q-pt-md" style="height: 500px">
        <div class="q-pr-md">
          <q-btn
            @click.prevent.stop="selectHaiku()"
            icon="autorenew"
            color="black"
            size="md"
            class=""
            outline
            dense
          />
        </div>
        <div class="haiku-box-big">
          <div style="font-family: HinaMincho-Regular; font-size: 36px">
            2023年やーきー川柳<br /><b>最優秀作品</b>
          </div>
          <div
            style="
              writing-mode: vertical-rl;
              font-family: haiku;
              font-size: 32px;
              margin-left: auto;
            "
          >
            <div style="margin-right: 100px">{{ haiku.first }}</div>
            <div style="margin-right: 20px">{{ haiku.second }}</div>
            <div style="margin-right: 20px">{{ haiku.third }}</div>
            <div style="margin-right: 20px">
              {{ haiku.poster }}
            </div>
          </div>
        </div>
      </div>

      <!--レゴマン名曲セレクション-->
      <div>
        <div class="row q-gutter-md">
          <div>
            <q-card>
              <q-card-section style="width: 500px">
                <div class="text-subtitle1">レゴマンプレミアムセレクション</div>
                <div
                  class="q-pa-md q-pt-lg"
                  style="height: 300px; overflow-y: scroll"
                >
                  <div v-for="song in songs" :key="song.link">
                    <q-field class="text-black q-pb-md" dense>
                      <q-btn
                        icon="play_arrow"
                        color="negative"
                        dense
                        @click.prevent="selectLink = song.link"
                        style="height: 32px"
                      />
                      <a
                        :href="song.link"
                        @click.prevent="selectLink = song.link"
                        style="text-decoration: none; width: 419px"
                        ><div
                          class="q-pt-md q-pl-md text-primary"
                          v-if="song.link == selectLink"
                        >
                          {{ song.name }}<q-icon name="music_note" />
                        </div>
                        <div class="q-pt-md q-pl-md text-black" v-else>
                          {{ song.name }}
                        </div></a
                      >
                    </q-field>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div>
            <YouTube
              v-if="selectLink != ''"
              :src="selectLink"
              @ready="true"
              ref="youtube"
              :vars="{ autoplay: 1, rel: 0 }"
            />
          </div>
        </div>
      </div>
      <!--リンクまとめ-->
      <hr />
      <div id="info-links" class="row q-gutter-md q-pt-md">
        <div id="notion-urls">
          <a
            class="row q-gutter-xs info-link-row"
            href="https://brindle-spring-0d6.notion.site/URL-2998ca28318d430cbdd7d5b7ad034ccf?pvs=4"
            target="_blank"
            rel="noopener"
          >
            <div>
              <img src="../assets/notion_icon.png" class="info-icon" />
            </div>
            <div class="text-subtitle1">Notion</div>
          </a>
        </div>
        <div id="google-urls">
          <a
            class="row q-gutter-xs info-link-row"
            href="https://drive.google.com/drive/folders/1XSRGqBx5FeJaOSJj9UtF3e2M7S3Z3PsG?usp=sharing"
            target="_blank"
            rel="noopener"
          >
            <div>
              <img src="../assets/google_drive_icon.png" class="info-icon" />
            </div>
            <div class="text-subtitle1">Googleドライブ</div>
          </a>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import balloonLeft from 'src/components/balloonLeft.vue';
import WordList2Api from 'src/api/WordList2Api';
import HaikuListApi from 'src/api/HaikuListApi';
import YouTube from 'vue3-youtube';
export default defineComponent({
  name: 'InfoPage',
  components: { balloonLeft, YouTube },
  setup() {
    const selectLink = ref('');
    const songs = ref([
      {
        name: 'おぼっちゃまんぼ',
        link: 'https://youtu.be/7Ou700QHIvc',
      },
      {
        name: 'チャイコソルジャー',
        link: 'https://www.youtube.com/watch?v=dYj6cL70kG0',
      },
      {
        name: '幸せなら手をたたこう',
        link: 'https://www.youtube.com/watch?v=V5jEm-F5Z2s',
      },
      {
        name: '夜のとばりよさようなら',
        link: 'https://youtu.be/vkWZ0G2zS58',
      },
      {
        name: 'アバチャレ',
        link: 'https://youtu.be/Klyss7XxN-I',
      },
      {
        name: 'チャイアウェイ・キャスタウェイ',
        link: 'https://youtu.be/g0p_jI6T2WQ',
      },
    ] as Song[]);

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
    getWords();
    const selectWord = function () {
      word.value = words.value[Math.floor(Math.random() * words.value.length)];
    };

    //俳句をランダムに取得
    const haiku = ref({
      id: -1,
      first: '',
      second: '',
      third: '',
      poster: '',
      detail: '',
      createAt: '',
      updateAt: '',
    } as Haiku);
    const haikus = ref([] as Haiku[]);
    const getHaikus = async function () {
      await HaikuListApi.search({
        id: -1,
        haikuText: '',
        poster: '',
        detail: '',
      }).then((response) => {
        if (response) {
          haikus.value.splice(0);
          response.records.forEach((it) => haikus.value.push(it));
          selectHaiku();
        }
      });
    };
    getHaikus();
    const selectHaiku = function () {
      haiku.value =
        haikus.value[Math.floor(Math.random() * haikus.value.length)];
    };

    return {
      obamessage: `いやだああああぁぁぁ
`,
      songs,
      selectLink,
      word,
      selectWord,
      haiku,
      selectHaiku,
    };
  },
});
interface Song {
  name: string;
  link: string;
}
interface Haiku {
  id: number;
  first: string;
  second: string;
  third: string;
  poster: string;
  detail: string;
  createAt: string;
  updateAt: string;
}
</script>
<style>
/*image */
.info-icon {
  height: 30px;
}
/*link a tag */
.info-link-row {
  transition: color 0.3s;
  text-decoration: none;
}

.info-link-row:hover {
  text-decoration: underline;
}
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
/*fonts */
@font-face {
  font-family: 'haiku';
  src: url(../fonts/haiku2.ttf) format('truetype');
}
@font-face {
  font-family: 'HinaMincho-Regular';
  src: url(../fonts/HinaMincho-Regular.ttf) format('truetype');
}
/*haiku-box-big */
.haiku-box-big {
  width: 400px;
  margin: 2em 0;
  position: relative;
  padding: 0.5em 1.5em;
  border-top: solid 2px black;
  border-bottom: solid 2px black;
}
.haiku-box-big:before,
.haiku-box-big:after {
  content: '';
  position: absolute;
  top: -10px;
  width: 2px;
  height: -webkit-calc(100% + 20px);
  height: calc(100% + 20px);
  background-color: black;
}
.haiku-box-big:before {
  left: 10px;
}
.haiku-box-big:after {
  right: 10px;
}
.haiku-box-big div {
  margin: 0;
  padding: 0;
}
</style>
