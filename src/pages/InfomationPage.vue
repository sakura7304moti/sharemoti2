<template>
  <q-page class="">
    <div id="page-main">
      <div class="text-h5 q-pb-md">お茶の間</div>

      <!--ネタ要素満載-->
      <div style="display: flex; flex-wrap: wrap">
        <word-info />
        <haiku-info />
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
import WordInfo from 'src/components/info/WordInfo.vue';
import HaikuInfo from 'src/components/info/HaikuInfo.vue';
export default defineComponent({
  name: 'InfoPage',
  components: { 'word-info': WordInfo, 'haiku-info': HaikuInfo },
  setup() {
    return {};
  },
});
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
</style>
