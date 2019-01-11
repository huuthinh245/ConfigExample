import { observable, action } from 'mobx';

class NetworkStore {
  @observable network = null;

  @action listenNetwork(network) {
    this.network = network;
  }
}
const networkStore = new NetworkStore();

export default networkStore;
