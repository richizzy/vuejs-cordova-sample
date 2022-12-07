<template>
  <div id="alert" class="alert-message-container">
    <div v-if="type === 'alert'">
      <div class="InlineMessage InlineMessage--alert">
        <div>{{ userMessage }}</div>
        <div class="u-mT4" v-if="reason">Reason: {{ reason }}</div>
      </div>
    </div>
    <div v-else-if="type === 'success'">
      <div class="InlineMessage InlineMessage--success">
        <div>{{ userMessage }}</div>
        <div class="u-mT4" v-if="reason">Reason: {{ reason }}</div>
      </div>
    </div>
    <div v-else-if="type === 'critical'">
      <div class="InlineMessage InlineMessage--critical">
        <div>{{ userMessage }}</div>
        <div class="u-mT4" v-if="reason">Reason: {{ reason }}</div>
      </div>
    </div>
    <div v-else-if="type === 'info'">
      <div class="InlineMessage InlineMessage--info">
        <div>{{ userMessage }}</div>
        <div class="u-mT4" v-if="reason">Reason: {{ reason }}</div>
      </div>
    </div>
    <div v-else>
      <div class="InlineMessage InlineMessage--alert">
        <div>{{ userMessage }}</div>
        <div class="u-mT4" v-if="reason">Reason: {{ reason }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    // alert types available: "alert", "success", "critical", "info"
    type: {
      validator: value => {
        return ['alert', 'success', 'critical', 'info'].indexOf(value) !== -1;
      }
    },
    // alert message to the user
    userMessage: String,
    // error, if any, to log
    error: [Error, Object],
    reason: String
  }
};
</script>

<style scoped>
.alert-message-container {
  margin: auto 0;
  padding-top: 16px;
}
</style>
