<template>
  <div class="bg-wrap">
    <div class="container"></div>
  </div>
</template>

<script>
export default { }
</script>

<style lang="less" scoped>
  .bg-wrap {
    height: 100%;
    width: 100%;    
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 990px;
    height: 440px;
    background: url('../common/img/404.jpg');
  }
</style>
