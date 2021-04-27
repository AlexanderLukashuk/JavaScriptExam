import instanceAPI from './api';

const PhotoAPI = {
    getPhotos(search) {
        return instanceAPI.get('photos/', {params: {search}});
    }
};

export default PhotoAPI;