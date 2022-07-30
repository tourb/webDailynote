<template>
  <nav class="navbar">
    <layout class="layout"><slot></slot></layout>
    <div class="bottomNav">
      <router-link to="/Money" class="item">
        <svg class="icon">
          <use xlink:href="#money" />
        </svg>
        记账
      </router-link>
      <router-link to="/Labels" class="item">
        <svg class="icon">
          <use xlink:href="#label" /></svg
        >标签
      </router-link>
      <router-link to="/Statistics" class="item">
        <svg class="icon">
          <use xlink:href="#tongji" /></svg
        >统计
      </router-link>
    </div>
  </nav>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import a from '@/assets/icons/label.svg'
// eslint-disable-next-line no-unused-vars
import b from '@/assets/icons/money.svg'
// eslint-disable-next-line no-unused-vars
import c from '@/assets/icons/tongji.svg'
import layout from '@/components/layout.vue'

export default {
  components: { layout },
  layout
}
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.navbar .layout {
  height: 100vh;
}
.icon {
  width: 32px;
  height: 32px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.bottomNav {
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.9);
  width: 100%;
  .item {
    flex: 1;
    justify-content: center;
    align-content: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
