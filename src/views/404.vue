<template>
  <div class="bg-wrap">
    <div class="container">
      404 Page
    </div>
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
    background-color: rgba(0,0,0,0.3);
    border-radius: 1.2em;
    color: #fefefe;
    overflow: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    width: auto;
    height: auto;
    max-height: 80%;
    min-width: 82%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: height 1s ease;
    transition: top 1s ease;
    padding: 100px 10px;
    font-size: 16px;
    font-weight: bold;
  }

  @media (min-width: 771px){
    .container {
      min-width: 40%;
    }
  }
</style>
