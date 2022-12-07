class LocalStorageService {
  setItem(key, value) {
    return new Promise((resolve, reject) => {
      localStorage.setItem(key, value); //need to send the value in JSON format(JSON.stringify(value))
      resolve();
      reject('Error');
    });
  }
  getItem(key) {
    return new Promise((resolve, reject) => {
      const value = localStorage.getItem(key); //need to parse the value into an object(JSON.parse(value))
      resolve(value);
      reject('Error');
    });
  }
}
export default new LocalStorageService();
