<template>
  <!--ページリンク一覧-->
  <div class="q-pt-md">
    <div class="text-h4">おばあちゃんちの部屋</div>
    <!--Main-->
    <div class="row q-gutter-md">
      <!--名言集-->
      <q-card class="index-page-card">
        <img
          src="../../assets/turizao.jpg"
          style="cursor: pointer"
          @click="router.replace('/wordList')"
        />

        <q-card-section>
          <div class="text-h6">名言集</div>
          <q-card-section class="q-pt-none">
            占い師の言葉を信じて釣りに没頭している
          </q-card-section>
        </q-card-section>
      </q-card>

      <!--あだ名一覧-->
      <q-card class="index-page-card">
        <img
          src="../../assets/god_tamori.jpg"
          style="cursor: pointer"
          @click="router.replace('/nameList')"
        />

        <q-card-section>
          <div class="text-h6">あだ名一覧</div>
          <q-card-section class="q-pt-none">
            数年に一度ゴットタモリが空から舞い降りる。これを見た人は今年の金運アップ間違いなし。ただし上強メテオの撃墜される確率もアップする。
          </q-card-section>
        </q-card-section>
      </q-card>

      <!--焼き直し条約-->
      <q-card class="index-page-card">
        <img
          src="../../assets/yaki_doi.jpg"
          style="cursor: pointer"
          @click="router.replace('/yaki')"
        />

        <q-card-section>
          <div class="text-h6">焼き直し条約</div>
          <q-card-section class="q-pt-none">
            自宅で映画鑑賞中の土井カービィ。最近コナンの映画にハマっており、スケボーに乗ろうと思ったが、走ったほうが早いことに気づいてからは、ぱくーくと一緒に毎朝ランニングをしている。たまに通報されるが大体ぱくーくは逃げきれて、土井カービィが捕まる。
          </q-card-section>
        </q-card-section>
      </q-card>

      <!--俳句-->
      <q-card class="index-page-card">
        <img
          src="../../assets/yoshi.jpg"
          style="cursor: pointer"
          @click="router.replace('/haiku')"
        />

        <q-card-section>
          <div class="text-h6">俳句王決定戦</div>
          <q-card-section class="q-pt-none">
            これはもう言わなくてもわかるね？すき家にGOだ
          </q-card-section>
        </q-card-section>
      </q-card>

      <!--学校-->
      <q-card class="index-page-card">
        <img
          src="../../assets/panda.jpg"
          style="cursor: pointer"
          @click="router.replace('/school')"
        />

        <q-card-section>
          <div class="text-h6">学校一覧</div>
          <q-card-section class="q-pt-none">
            社会に出てから行けばよかったと後悔する人が後を絶たない
          </q-card-section>
        </q-card-section>
      </q-card>

      <!--共有リンクまとめ-->
      <q-card class="index-page-card">
        <img
          src="../../assets/matlix_cleanup.png"
          style="cursor: pointer"
          @click="router.replace('/info')"
        />

        <q-card-section>
          <div class="text-h6">お茶の間</div>
          <q-card-section class="q-pt-none">
            お茶でも飲んで、ゆっくりしていきなさい。<br />
            GoogleDriveとNotionのリンクはここから飛べるわよ。
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

    <!--おみあげ-->
    <div class="text-h4 q-pt-md">お土産</div>
    <div class="row q-gutter-md">
      <!--カラオケ-->
      <q-card class="index-page-card">
        <img
          src="../../assets/mirai_osho.jpg"
          style="cursor: pointer"
          @click="router.replace('/karaoke')"
        />

        <q-card-section>
          <div class="text-h6">カラオケの思い出</div>
          <q-card-section class="q-pt-none">
            奇跡的に未来に帰る瞬間を目撃した
          </q-card-section>
        </q-card-section>
      </q-card>

      <!--ボイス-->
      <q-card class="index-page-card">
        <img
          src="../../assets/itiro.jpg"
          style="cursor: pointer"
          @click="router.replace('/voice')"
        />

        <q-card-section>
          <div class="text-h6">2040年ボイス</div>
          <q-card-section class="q-pt-none">
            ここの画像募集中。それまではイチローで我慢しなさい。
          </q-card-section>
        </q-card-section>
      </q-card>

      <!--スマブラ-->
      <q-card class="index-page-card">
        <img
          src="https://www.smashbros.com/assets_v2/img/top/hero02.jpg"
          style="cursor: pointer"
          @click="router.replace('/ssbu')"
        />

        <q-card-section>
          <div class="text-h6">スマブラクリップ集</div>
          <q-card-section class="q-pt-none">
            感動するなら今のうちやで！
          </q-card-section>
        </q-card-section>
      </q-card>

      <!--オム子レイディオ-->
      <q-card class="index-page-card">
        <img
          src="../../assets/omuko.jpg"
          style="cursor: pointer"
          @click="router.replace('/radio')"
        />

        <q-card-section>
          <div class="text-h6">オム子レイディオ</div>
          <q-card-section class="q-pt-none">
            オム子のラジオ放送局。<br />
            普段は自家用ヘリで出勤しているが、たまに土井カービィに運んでもらっている。
            ちなみに土井カー運送は10kmで200円。まれに復帰ミスして落っこちるのが難点。<br />
            空で移動したいならオム子空港に行こう。復帰力の低い人でも安心よ。
          </q-card-section>
        </q-card-section>
      </q-card>

      <!--画像-->
      <q-card class="index-page-card">
        <img
          src="../../assets/ichiro2.jpg"
          style="cursor: pointer"
          @click="router.replace('/img')"
        />

        <q-card-section>
          <div class="text-h6">イチローの国立美術館</div>
          <q-card-section class="q-pt-none">
            なんだこれは、、、なんていい景色なんだ、、、
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

    <!--Scraper-->
    <div class="text-h4 q-pt-lg">おまけ</div>
    <div class="row q-gutter-md">
      <!--Twitter-->
      <q-card class="index-page-card">
        <img
          src="../../assets/aqua.jpg"
          style="cursor: pointer"
          @click="router.replace('/twitter')"
        />

        <q-card-section>
          <div class="text-h6">twitter</div>
          <q-card-section class="q-pt-none">
            twitterの画像をスクレイピングしたよ
          </q-card-section>
        </q-card-section>
      </q-card>
      <!--YouTube-->
      <q-card class="index-page-card">
        <img
          src="../../assets/shion.jpg"
          style="cursor: pointer"
          @click="router.replace('/holosong')"
        />

        <q-card-section>
          <div class="text-h6">cover</div>
          <q-card-section class="q-pt-none">
            YouTubeの歌ってみたをまとめたよ
          </q-card-section>
        </q-card-section>
      </q-card>

      <!--Album-->
      <q-card class="index-page-card">
        <img
          src="../../assets/koyori.jpg"
          style="cursor: pointer"
          @click="router.replace('/holoalbum')"
        />

        <q-card-section>
          <div class="text-h6">original</div>
          <q-card-section class="q-pt-none">
            ホロライブのオリ曲(動画)をまとめたよ
          </q-card-section>
        </q-card-section>
      </q-card>

      <!--Memory-->
      <q-card class="index-page-card">
        <img
          src="https://pbs.twimg.com/media/F_Xt-HYaIAAiVIm?format=jpg"
          style="cursor: pointer"
          @click="router.replace('/holomemory')"
        />

        <q-card-section>
          <div class="text-h6">memory</div>
          <q-card-section class="q-pt-none">
            ホロライブの記念配信をまとめたよ
          </q-card-section>
        </q-card-section>
      </q-card>

      <!--Archive-->
      <q-card class="index-page-card">
        <img
          src="https://pbs.twimg.com/media/F3E-ZdNboAA8Qmo?format=jpg"
          style="cursor: pointer"
          @click="router.replace('/holoarchive')"
        />

        <q-card-section>
          <div class="text-h6">archive</div>
          <q-card-section class="q-pt-none">
            ホロライブのYouTube動画をまとめたよ
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'main-index',
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>
<style>
.index-page-card {
  width: 100%;
  max-width: 250px;
}
</style>
