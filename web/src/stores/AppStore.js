import { configure, observable, action } from 'mobx';

configure({
    enforceActions: 'always',
});

class AppStore {
    @observable currentPage = 'Main';

    @action
    resetStore = () => {
        currentPage = 'Main';
    };

}

const appStore = new AppStore();
export default appStore;
