<template>
  <div id="about">
    <div id="content" class="u-pV7 u-pA3">
      <div class="Grid">
        <div class="Container u-sm-size3of4 u-md-size3of4 u-lg-size6of12 u-sizeFull">
          <div class="u-textCenter u-sizeFull u-mB6 about-label">About</div>
          <div class="label-border">
            <div class="u-sizeFull u-pH4">
              <span class="quotes-heading-label"> Quotes for Sales Professionals </span>
            </div>
            <div class="u-sizeFull u-pH4">
              <span class="other-label"> Application Version: 3.7.1-R </span>
            </div>
            <div class="u-sizeFull u-pH4">
              <span class="other-label"> Last Synced: N/A </span>
            </div>
            <div class="u-sizeFull u-pH4">
              <span class="other-label"> N/A </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {},
  props: {},
};
</script>

<style scoped>
.about-label {
  font-family: 'Source Sans Pro Light';
  font-size: calc(2rem + 0.390625vw);
  display: inline-block;
  padding-right: 0rem;
}
.quotes-heading-label {
  text-align: left;
  font-family: 'Source Sans Pro Light';
  font-size: calc(1.8rem + 0.390625vw);
  display: inline-block;
  width: 80%;
  margin-top: 2rem;
}
.other-label {
  text-align: left;
  font-family: 'Source Sans Pro Light';
  font-size: calc(1rem + 0.390625vw);
  display: inline-block;
  width: 80%;
  padding-right: 0rem;
  margin-top: 2rem;
}
.label-center {
  display: inline-block;
  width: 50%;
  text-align: center;
  padding-right: 0rem;
}
.label-border {
  padding-left: 2rem;
  border-left: 0.1rem solid lightgray;
  border-right: 0.1rem solid lightgray;
  border-top: 0.5rem solid #105fa8;
  border-bottom: 0.1rem solid lightgray;
  width: 100%;
}
</style>
