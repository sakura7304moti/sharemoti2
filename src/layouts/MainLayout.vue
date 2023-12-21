<template>
  <q-layout>
    <!--ヘッダー-->
    <q-header elevated class="bg-dark row">
      <div>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title>
            <a
              @click.prevent="router.replace('/')"
              class="text-white"
              style="cursor: pointer"
              >韓国のおばあちゃんち<q-tooltip
                :delay="1000"
                anchor="center right"
                self="center left"
                :offset="[10, 10]"
                >リビングに帰る</q-tooltip
              ></a
            >
          </q-toolbar-title>
        </q-toolbar>
      </div>
      <div style="margin: 0 0 0 auto; padding-right: 16px; padding-top: 5px">
        <page-settings></page-settings>
      </div>
    </q-header>
    <main-drawer
      v-if="setting.drawerType == 'default'"
      v-model="leftDrawerOpen"
    />
    <light-drawer
      v-if="setting.drawerType == 'light'"
      v-model="leftDrawerOpen"
    />

    <q-page-container>
      <router-view class="q-pa-md" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import PageSetting, { Setting } from 'src/components/PageSetting.vue';
import MainDrawer from 'src/components/drawer/MainDrawer.vue';
import LightDrawer from 'src/components/drawer/LightDrawer.vue';
import { LocalStrageObject } from 'src/utils/localStrageSupport';
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPinia, setActivePinia } from 'pinia';

export default defineComponent({
  name: 'MainLayout',
  components: {
    'page-settings': PageSetting,
    'main-drawer': MainDrawer,
    'light-drawer': LightDrawer,
  },

  setup() {
    const opened = ref(false);
    setActivePinia(createPinia());
    const leftDrawerOpen = computed(() => opened.value);
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
      leftDrawerOpen,
      toggleLeftDrawer() {
        opened.value = !opened.value;
      },
      router,
      setting,
    };
  },
});
</script>
<style>
@import '../css/q-table.css';
.menu-icon-image {
  width: 52px;
}
</style>
