//import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
//import SWAPI from '../api/SWAPI';
import PhotoAPI from '../api/PhotoAPI';
import People from './people';
import Photo from './Photo';
import {Formik, Form, Field} from 'formik';

/*const Welcome = (props) => {
    //const wlcm = `Welcome ${props.name}`
    //return <span>Welcome {props.name}</span>
    //return <span>{wlcm}</span>
    const [Clock, setClock] = useState(new Date().toLocaleString('ru-RU', {timeStyle:'medium'}));

    useEffect(() => {
        let tick = () => {
            setClock(new Date().toLocaleString('ru-RU', {timeStyle:'medium'}));
        };
        let inter = setInterval(() => {
            tick();
            clearInterval(inter);
        }, 1000);
    }, [Clock]);

    return <div>Welcome {props.name} current time is {Clock}</div>
}*/

const Welcome = () => {
    //let people = null;
    //const [people, setPeople] = useState(null);
    //const [home, setHome] = useState([]);
    
    /*let getPeople = async (value) => {
        let data = await SWAPI.getPeopleWithParam(value);
        //console.log(data);
        setPeople(data.data.results);
    };*/
    
    const [photo, setPhoto] = useState(null);

    let getPhoto = async (value) => {
        let data = await PhotoAPI.getPhotos(value);
        setPhoto(data.data);
        //console.log(PhotoAPI.getPhotos(value));
        console.log(data.data);
    }

    //useEffect(() => {
        //let data;
        //let getPeople = async () => {
            //data = await SWAPI.getPeople();
            //data = await SWAPI.getPeopleWithParam('r2');
            //people = data.data.results;
            //console.log(data.data.results);
            //data.data.results.forEach((item) => {
                //setHome([...home, (new URL(item.homeworld).pathname).split('/')[3]]);
                //let dataHome;
                //item.homeworld = SWAPI.getHome((new URL(item.homeworld).pathname).split('/')[3]).then();        
                //SWAPI.getHome((new URL(item.homeworld).pathname).split('/')[3]).then(data => setHome([...home, data]));
                //SWAPI.getHome((new URL(item.homeworld).pathname).split('/')[3]).then(data => setHome([...home, data]));
                //return item.homeworld = dataHome;
            //});
            //console.log(data.data.results);
            //setPeople(data.data.results);
            //console.log(data.data.results);
            //console.log(home);
            //console.log(people);
            //console.log(data);
            //console.log(people);
        //};
        //getPeople();
    //}, [])


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

                <button type="submit" class="form__search-button">Submit</button>
            </Form>
        </Formik>
        {!!photo && photo.map((item, index) => {
            //return <div>key={item.name}>{item.name}</div>
            return <div class="bodyPage"><img class="photo" src={item.urls.raw}></img></div>
        })}
    </>
}

export default Welcome;