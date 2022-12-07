const AlertService = {
  handleAlert(page, type, userMessage, error, reason) {
    page.alert.type = type;
    page.alert.userMessage = userMessage;
    page.alert.error = error;
    page.alert.reason = reason;
    if (error) {
      console.error(error);
      // return to dashboard when error response status is 401(unauthorized)
      if (error.response && error.response.status === 401) {
        window.location = window.location.origin + page.$store.state.dashboardContextRoot;
      }
    }
    window.scrollTo(0, 0);
  },
  clearAlert(page) {
    this.handleAlert(page, null, null, null, null);
  }
};

export default AlertService;
