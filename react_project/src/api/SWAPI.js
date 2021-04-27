import instanceAPI from './api';

const SWAPI = {
    getPeople() {
        return instanceAPI.get('people/');
    },
    getPeopleWithParam(search) {
        return instanceAPI.get('people/', {params: {search}});
    },
    getHome(id) {
        return instanceAPI.get(`planets/${id}`);
    },
    getPhoto() {
        return instanceAPI.get('photo/');
    }
};

export default SWAPI;