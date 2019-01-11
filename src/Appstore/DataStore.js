import { observable, action, computed } from 'mobx';

class DataStore {
  @observable data = [];

  @observable check = 'fetch start';

  @action async fetchData() {
    const res = await fetch('https://facebook.github.io/react-native/movies.json');
    const json = await res.json();
    this.check = 'fetch success';
    // this.data = json.movies;
    for (let i = 0; i < json.movies.length; i++) {
      this.data.push(json.movies[i]);
    }
  }

  @action delete() {
    this.data = [];
  }

  @computed get dataSource() {
    return this.data.slice();
  }
}

const dataStore = new DataStore();
export default dataStore;
