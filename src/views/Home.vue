<style lang="less" scoped>
.home {
  background-color: rgb(60, 110, 110);
  padding: 20px 20px;
}
.carousel {
  max-width: 1000px;
  margin: auto;
}
.inner-carousel {
  height: 360px;
  background-color: aqua;
}

.content {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 50px;
  justify-content: center;

  .card {
    margin: 10px 20px;
    min-width: 390px;
    max-width: 400px;
    min-height: 200px;
  }
}
</style>


<template>
  <div class="home">
    <Carousel
      v-model="value3"
      :autoplay="setting.autoplay"
      :autoplay-speed="setting.autoplaySpeed"
      :dots="setting.dots"
      :radius-dot="setting.radiusDot"
      :trigger="setting.trigger"
      :arrow="setting.arrow"
      class="carousel"
    >
      <CarouselItem>
        <div class="inner-carousel">1</div>
      </CarouselItem>
      <CarouselItem>
        <div class="inner-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="inner-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="inner-carousel">4</div>
      </CarouselItem>
    </Carousel>
    <div class="content">
      <Card :bordered="false" class="card">
        <p slot="title">题目</p>
        <div slot="extra">日期</div>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
      <Card :bordered="false" class="card">
        <p slot="title">题目</p>
        <div slot="extra">日期</div>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
      <Card :bordered="false" class="card">
        <p slot="title">题目</p>
        <div slot="extra">日期</div>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
      <Card :bordered="false" class="card">
        <p slot="title">题目</p>
        <div slot="extra">日期</div>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
      <Card :bordered="false" class="card">
        <p slot="title">题目</p>
        <div slot="extra">日期</div>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
      <Card :bordered="false" class="card">
        <p slot="title">题目</p>
        <div slot="extra">日期</div>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      value3: 0,
      setting: {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: "inside",
        radiusDot: false,
        trigger: "hover",
        arrow: "hover"
      }
    };
  },
  components: {}
};
</script>
