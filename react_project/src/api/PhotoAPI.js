import instanceAPI from './api';

const PhotoAPI = {
    getPhotos(search) {
        return instanceAPI.get('photos/', {params: {search}});
    },
    getPhotos() {
        return instanceAPI.get('photos/');
    }
};

export default PhotoAPI;