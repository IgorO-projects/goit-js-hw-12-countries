import countryTemplate from '../templates/country-template.hbs';
import pnotify from '../../node_modules/pnotify/dist/es/PNotify';
import '../../node_modules/pnotify/dist/PNotifyBrightTheme.css';

const refs = {
    list: document.querySelector('.countries__list'),
    container: document.querySelector('.country__container')
}

function pageRender (array) {
        refs.list.innerHTML = '';
        refs.container.innerHTML = '';

        if(array.length > 10) {
            pnotify.error('Too many matches found. Please enter a more specific query!');
        } else if(array.length === 1) {
            refs.container.innerHTML = countryTemplate(array);
        }
        else {
            array.map (country => {
                refs.list.insertAdjacentHTML('beforeend', `<li>${country.name}</li>`);
            })
        }
}

export default pageRender;