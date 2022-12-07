<template>
  <div id="about">
    <div id="content" class="u-pV7 u-pA3">
      <div class="Grid">
        <div class="Container u-sm-size3of4 u-md-size3of4 u-lg-size6of12 u-sizeFull">
          <div class="u-textCenter u-sizeFull u-mB6 feedback-label">What do you think of the Mobile Quotes?</div>
          <div>
            <div class="u-textCenter u-sizeFull improve-label">Help us improve by providing your</div>
            <div class="u-textCenter u-sizeFull improve-label">valuable feedback</div>
            <div class="u-sizeFull u-pH4">
              <span class="comment-label"> Your Comments</span>
            </div>
            <div class="u-sizeFull u-pH4">
              <span class="feedback-comment-label"> Please either provide feedback or rate the tool above</span>
            </div>
            <div class="u-sizeFull u-pH4">
              <span class="other-label"> Your Name</span>
            </div>
            <div class="u-sizeFull u-pH4">
              <span class="other-label"> Your Email Address </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feedback',
  components: {},
  props: {},
};
</script>

<style scoped>
.feedback-label {
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
.improve-label {
  font-family: 'Source Sans Pro Light';
  font-size: calc(1.2rem + 0.390625vw);
  display: inline-block;
  width: 80%;
}
.comment-label {
  text-align: left;
  font-family: 'Source Sans Pro Light';
  font-size: calc(1rem + 0.390625vw);
  color: #105fa8;
  display: inline-block;
  width: 80%;
  padding-right: 0rem;
  margin-top: 8rem;
}
.other-label {
  text-align: left;
  font-family: 'Source Sans Pro Light';
  font-size: calc(1rem + 0.390625vw);
  display: inline-block;
  width: 100%;
  padding-right: 0rem;
  margin-top: 8rem;
  border-bottom: 0.1rem solid lightgray;
}
.feedback-comment-label {
  text-align: left;
  font-family: 'Source Sans Pro Light';
  font-size: calc(0.6rem + 0.390625vw);
  display: inline-block;
  width: 100%;
  padding-right: 0rem;
  margin-top: 8rem;
  border-top: 0.2rem solid #105fa8;
}
.label-center {
  display: inline-block;
  width: 50%;
  text-align: center;
  padding-right: 0rem;
}
</style>
