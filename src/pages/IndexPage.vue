<template>
  <q-page class="">
    <!--あいさつ-->
    <div class="row q-gutter-md q-pt-md">
      <div>
        <img
          src="https://raw.githubusercontent.com/sakura7304moti/sharemoti2/master/src/assets/obachan.jpg"
          height="130"
          id="oba-profile"
        />
        <div class="profile-name" @click="router.replace('/imagelist')">
          韓国のおばあちゃん
        </div>
      </div>
      <balloon-left :text="obamessage" style="height: 120px" />
    </div>

    <!--ページリンク一覧-->
    <div class="q-pt-md">
      <div class="text-h4">おばあちゃんちの部屋</div>
      <!--Main-->
      <div class="row q-gutter-md">
        <!--名言集-->
        <q-card class="index-page-card">
          <img
            src="https://raw.githubusercontent.com/sakura7304moti/sharemoti2/master/src/assets/turizao.jpg"
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
            src="https://raw.githubusercontent.com/sakura7304moti/sharemoti2/master/src/assets/god_tamori.jpg"
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
            src="https://raw.githubusercontent.com/sakura7304moti/sharemoti2/master/src/assets/yaki_doi.jpg"
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
            src="https://raw.githubusercontent.com/sakura7304moti/sharemoti2/master/src/assets/senno_rikyu.png"
            style="cursor: pointer"
            @click="router.replace('/haiku')"
          />

          <q-card-section>
            <div class="text-h6">俳句王決定戦</div>
            <q-card-section class="q-pt-none">
              そこにワビサビはあるんか？
            </q-card-section>
          </q-card-section>
        </q-card>

        <!--学校-->
        <q-card class="index-page-card">
          <img
            src="https://raw.githubusercontent.com/sakura7304moti/sharemoti2/master/src/assets/panda.jpg"
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
            src="https://lh3.googleusercontent.com/fife/AK0iWDwokJGRrfsahwEt8ZTYQfr3sk4cEJXVadjbb1BIdxM0SHbZDgP5FEg9oI69zwt3OgxzA6mJJgsincemJ8WYB3EM4ejkQLtNjIop4ZwnPc7CTCqJm4_u3IHmdKs5fGJxtYNcsT-VU2bnc9E5aHGzmnZ6eZHOTuO5ffAQei74SGtFH4Xw6-Y_5bjbV9MjIs8FQGK0OGS9hs9Mfrj-4gESuCER8JCQTyw_HVtEV0hkCd3BrVE2PKlP9LW5FF32OwtpzqYlFUUvLCeXwcjQWeUC3mI6oIxwp9IPUKslRC4TT4vwJuZIrmh10Y9RMPV9LIV6ZvJDG81vD1CivYQzgJPhl5j2IDRl4wSBA-AJEbSX0MDRu9PrzEje4GYnugn5afy-EWZUlvyty6Al4BYVIq2xwcHBefGt79-eNl_bhgtFpd037-UVNrxzn1-AF5u10euztrxbjZ-tOULQkAKCAVzxYxw6dazgMUI9ENrjOMHaLlYmr3i4l0IJXQFt4YnjpGzB3zrJdaSeTSOOvNM0BBcmt0yxVL73hEkNVJmKSARt4Ymogt-tA3sTIaWod6Jbve9RuEijEF4S0GQh6vxI3Fp_-24NJxw3x6l_blkAfzb7mbHR28RSMCHi5CxVb_9XxCCt8cq5Ba3YsK7cNKxl9RH2EdzpG35vo0U6_c-JenQfbb8djTZZeHBCRNzG_Q0UVORF_38P2ek2kV2XEV0mYXYeKcauA1W_De0wRM5Pbg43Dn0eegegL04vg81kenyvnWi_hXI-dsI8fFB49v83GyDa-gp1CNRoAI50R-oRVUgvdK10VP95PLz65S1hM1mHOMvkJeWGVdDLD-YVCOZPMkQYuvgNjJnbd796lFQIzNP22pRDhiE3UP7KxifUKQDDPDn72tvL2-MJst1ViP7EiSkWin4C_RS1QB7Lv8J2hA0VeWly8amWsk19XTbRrz0-JwCEIxW_ELUXa1aa8-aS7M0yTQ7SOF_yKRU9ahW58j629SGWIlCkMn0IcHEb-bhAjGtXnf0cooY7MkRIduYWxlhW-iesemYYXomknPwoVc-n3W231xqJk8oTIW8yK3rLssIGkB-HjFL4ZDmO4eIKPMeS_PLTH0cfoWakCSetnEJ5C30Re9aE5eZzDsxcHJtpgm_RouTG_3nRzgFd8bUnqxBwo26HHGlsexNsSyaYA17S4yF63ZiV6ZkY6sddbZlkO3Ptx4b3jpDZmfBGPGpCcrk_FWDvMRPBuYt8eDH_DH2axi73JM97FMeLR53RqPx7YqTgqTgfDsHKUnZYQuyqRDaQmpiErGIUiZs_XJZZJz9vHs2j6IjPVkj_Rxvd8bACk3I2QiDcuvn1_r2iDK_TakPoSKfu1aHjQDIqB93CQFiMTTBiyM2m1r5dUas9Zz0QbPkE3--lz9d8YqLogtyHMMDAKlGDElS7K5xAf2h0r_iEW7Db871oztCoCeZolwPdrex4oPJJnCT1acRtGMRGC88jtcqFRR8-ki5N36Sv0T6nIpI4RNV_JYNyMGJZ8g=w1357-h934"
            style="cursor: pointer; height: 300px"
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

        <!--リフォーム履歴-->
        <q-card class="index-page-card">
          <img
            src="https://lh3.googleusercontent.com/fife/AK0iWDx18IVVH9revKCu1jDMxuxgYozZngYDPCY72lvj_ni82uakmMM7MStk3ZxhP5j6zRogANctZ8pXouHrbAcyisPzlbGLWrZMEmlPZfbrBdYG3q-m9EfamIhK6wrORFtM4WI6KHUKvqpmlyan-vCAS8pYtbXDf6Irtyp_jEtiFucm_rYkEBy6LTFoKTaRsFD3TRL2bbEOPXkzELevL92BhKEo3n7EtcN8ty7hv_7DB_0VuTxtFzwp-cmbjALeRKWMGh4uHes0zNxHqJ25hZ7BPiE8_RQWIiVVy0_NXZrr-sndmbml9jG_pedg7odR4spZg9KN7lmL5QKUesFrG6lNdnokRgXRwVj5KCm4VCZng7Up8Sy2eT-YKWp6vYzim1OW2xbwDFMqfcZEOq5bMhKEukUtEi8_LrMZgHnA342mIMDfLBOXd40L5mheD1072z7hCGMr6yKKxtqWfQ1TtlHJKdDcicyqmMP0R61K99IavBFrDpnGTvcI-LzvKxbc02VIAq5Y3Q9Xd6FCvlA8zA2244flAsIHlBdAT9shwnOzCqjYhzP0A6Ll8APjoE46RVRiqXYRYt6gM2z_F0s9yzYZ4XXjctHeHAlKexTfZziAS6Y_uM5rEA-NQ0QTwSPy-fcLK56ZyFoxSUmjMEYqSMhJ7B4icJvTs8Hp0xNf7QLJr-tPHo-_07pGmGWRFJq-_og2GpvhsKXTndnzMOxN6Ux04j7FNLSvckp9tCxgi3OoGuVAgHJFQLQwPwLnkpjL30o9W5AlOjyv3Q-XJOXjGNOeVootbGtcCA4GR8WXH1oQyZivePTc-wBYyvCntZ2c1v8-lxHNL_bQ8k3T32bEu09321wJhVjggqhGbPLOWEEgnS_gZzGGV6eJt8v8bF3aUksYQc3JAKPN0_BEDZxRhyyFF7zBBbeC1qLe9F4rUYz01WrxQz8DcZ3IItX5n9L-uVEubUEANf1FG670U8u0M_-7G4mBKLtmiCgHQ2--02IlNz3dd0e-SE_fMlw9lMPiNxlkC80rxsdLBumvBdtNSz-ALFwXR3ZaFtdpXmk2mBrEhpIDGaH8PcCYy3_Wpa0p129BLvvIjBciy8IOZ_CF6luc4td61zlTbPQd2tjEjd1HGZFUkgbLmt5MEdhjq7b8kHRh5urePlj4VAbqFNMo8J6omLAVQlyyhmmMc7X8E0aY2r0LYcbYR26JD8lCASFW8oTsCCSN5s0T_3d-h5TxmUYoCg3M0ZvaC4tWRMd2NXWWVP7MmstdB6oeYZ4J2rK-GHZAz1-VQNNN7ZT59wFGysw5GiKa8jBp1T53nqnwaUnfDkHKUFR_9nJEZxUh2rNnMXyqGWtOrHPvbWOHj41Lx--VDQrc9g78CdvHiKVpz-Ma07uRaVF5DgzJWDdn9oZeCPELRnTtVngDqKaftxo6XUEdhI2KSh9-9DSyOG5-03ANJBWFpJbFNTOgRqjqkJoLnZk3dBTSp1CSUQntd0FUf71mFbTCLRzdvU7ltd0izC-UaH3C92nDLjR5eNOLvw=w1920-h934"
            style="cursor: pointer"
            @click="router.replace('/history')"
          />

          <q-card-section>
            <div class="text-h6">リフォーム履歴</div>
            <q-card-section class="q-pt-none">
              リフォーム内容をここから見れるわよ。<br />
              見ないと土井カービィが世界一汚いトンネルの餌食になるわよ！<br />
              、、、まあ別にいっか<br />
              ヴォーーーイオイ(泣)(土井カービィ)
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
            src="https://raw.githubusercontent.com/sakura7304moti/sharemoti2/master/src/assets/mirai_osho.jpg"
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
            src="https://raw.githubusercontent.com/sakura7304moti/sharemoti2/master/src/assets/kirin.jpg"
            style="cursor: pointer"
            @click="router.replace('/voice')"
          />

          <q-card-section>
            <div class="text-h6">ボイスまとめ</div>
            <q-card-section class="q-pt-none">
              あのときの思い出をもう一度
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
            src="https://raw.githubusercontent.com/sakura7304moti/sharemoti2/master/src/assets/omuko.jpg"
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
            src="https://raw.githubusercontent.com/sakura7304moti/sharemoti2/master/src/assets/ichiro2.jpg"
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
            src="https://pbs.twimg.com/media/Fu9FR54agAAXCma?format=jpg&name=orig"
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
            src="https://pbs.twimg.com/media/Ft1B542aMAAzixq?format=jpg&name=orig"
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
            src="https://raw.githubusercontent.com/sakura7304moti/sharemoti2/master/src/assets/koyori.jpg"
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
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import balloonLeft from 'src/components/balloonLeft.vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'IndexPage',
  components: { balloonLeft },
  setup() {
    const router = useRouter();
    return {
      router,
      obamessage: `よく来たわね
ゆっくりしていきなさい
とりあえずお茶でもどうかしら
`,
    };
  },
});
</script>
<style>
#oba-profile {
  border-radius: 50%; /* 角丸半径を50%にする(=円形にする) */
  border: 3px solid #b4b4b4; /* 枠線を付加 */
}
.profile-name {
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
}
.index-page-card {
  width: 100%;
  max-width: 250px;
}
</style>
