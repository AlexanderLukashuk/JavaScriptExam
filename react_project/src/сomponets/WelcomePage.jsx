import React, { useState, useEffect } from 'react';
import PhotoAPI from '../api/PhotoAPI';
import Photo from './Photo';
import {Formik, Form, Field} from 'formik';

const WelcomePage = () => {
    
    const [photo, setPhoto] = useState(null);

    let getPhoto = async (value) => {
        let data = await PhotoAPI.getPhotos(value);
        setPhoto(data.data);
        //console.log(PhotoAPI.getPhotos(value));
        console.log(data.data);
    }

    return <>
        <Formik
            initialValues={{
                firstName: '',
            }}
            onSubmit={(value) => {getPhoto(value)}}
            >
            <Form class="form">
                <label htmlFor="Поиск" class="form__search">Поиск</label>
                <Field id="firstName" name="firstName" placeholder="" class="form__search-field" />

                <button type="submit" class="form__search-button">Искать</button>
            </Form>
        </Formik>
        {!!photo && photo.map((item, index) => {
            return <div class="bodyPage"><img class="photo" src={item.urls.raw}></img></div>
        })}
    </>
}

export default WelcomePage;