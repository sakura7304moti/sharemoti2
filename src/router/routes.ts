import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  /*おばあちゃんち */
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/wordList',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/WordListPage.vue') }],
  },
  {
    path: '/nameList',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NameListPage.vue') }],
  },
  {
    path: '/school',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SchoolListPage.vue') },
    ],
  },
  {
    path: '/info',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/InfomationPage.vue') },
    ],
  },
  {
    path: '/yaki',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/YakiListPage.vue') }],
  },
  {
    path: '/haiku',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HaikuListPage.vue') },
    ],
  },
  {
    path: '/karaoke',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/KaraokeListPage.vue') },
    ],
  },
  {
    path: '/voice',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/VoiceListPage.vue') },
    ],
  },
  {
    path: '/radio',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/RadioListPage.vue') },
    ],
  },
  {
    path: '/img',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ImageListPage.vue') },
    ],
  },
  {
    path: '/ssbu',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/SsbuListPage.vue') }],
  },
  {
    path: '/twitter',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TwitterPage.vue') }],
  },
  {
    path: '/holosong',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HoloSongPage.vue') }],
  },
  {
    path: '/holoalbum',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HoloAlbumPage.vue') },
    ],
  },
  {
    path: '/test',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ComponentTestPage.vue') },
    ],
  },

  /*Scraper */
  {
    path: '/scraper/',
    component: () => import('layouts/ScraperLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ScraperIndexPage.vue') },
    ],
  },
  {
    path: '/scraper/twitter',
    component: () => import('layouts/ScraperLayout.vue'),
    children: [{ path: '', component: () => import('pages/TwitterPage.vue') }],
  },
  {
    path: '/scraper/hololewd',
    component: () => import('layouts/ScraperLayout.vue'),
    children: [{ path: '', component: () => import('pages/HololewdPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
