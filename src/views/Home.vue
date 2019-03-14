<style lang="less" scoped>
.home {
  background-color: rgba(205, 218, 255, 0.5);
  padding: 20px 20px;
}
.carousel {
  max-width: 1000px;
}
.content {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 50px;
  justify-content: center;

  .card {
    margin: 10px 20px;
    min-width: 350px;
    max-width: 350px;
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
        <div class="inner-carousel">
          <img :src="Carouse1" alt="Carouse1">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="inner-carousel">
          <img :src="Carouse2" alt="Carouse2">
        </div>
      </CarouselItem>
      <!-- <CarouselItem>
        <div class="inner-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="inner-carousel">4</div>
      </CarouselItem> -->
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
import Carouse2 from "@/static/images/carouse1.jpg";
import Carouse1 from "@/static/images/carouse2.jpg";

export default {
  name: "home",
  data() {
    return {
      value3: 0,
      Carouse1,
      Carouse2,
      setting: {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: "outside",
        radiusDot: false,
        trigger: "hover",
        arrow: "hover"
      }
    };
  },
  components: {}
};
</script>
