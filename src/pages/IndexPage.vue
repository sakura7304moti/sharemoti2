<template>
  <q-page class="">
    <!--あいさつ-->
    <div class="row q-gutter-md q-pt-md">
      <div>
        <img src="../assets/obachan.jpg" height="130" id="oba-profile" />
        <div class="profile-name" @click="router.replace('/imagelist')">
          韓国のおばあちゃん
        </div>
      </div>
      <balloon-left :text="obamessage" style="height: 120px" />
    </div>

    <main-index v-if="setting.indexType == 'default'" />
    <light-index v-if="setting.indexType == 'light'" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import balloonLeft from 'src/components/balloonLeft.vue';
import MainIndex from 'src/components/index/MainIndex.vue';
import LightIndex from 'src/components/index/LightIndex.vue';
import { useRouter } from 'vue-router';
import { LocalStrageObject } from 'src/utils/localStrageSupport';
import { Setting } from 'src/components/PageSetting.vue';
export default defineComponent({
  name: 'IndexPage',
  components: {
    balloonLeft,
    'main-index': MainIndex,
    'light-index': LightIndex,
  },
  setup() {
    const router = useRouter();
    const model = new LocalStrageObject();
    const setting = ref({
      indexType: 'default',
      drawerType: 'default',
    } as Setting);

    const getValue = model.getterValue<Setting>('page-setting');
    if (getValue) {
      setting.value = getValue;
    }

    return {
      router,
      obamessage: `よく来たわね
ゆっくりしていきなさい
とりあえずお茶でもどうかしら
`,
      setting,
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
