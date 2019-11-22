import { configure, observable, action } from 'mobx';

configure({
    enforceActions: 'always',
});

class AppStore {
    @observable currentPage = 'Main';

    @action
    resetStore = () => {
        this.currentPage = 'Main';
    };

    @action
    setCurrentPage = (page) => {
        this.currentPage = page;
    }

}

const appStore = new AppStore();
export default appStore;
