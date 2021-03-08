import './styles.css';
import fetchCountries from './js/fetchCountries';
import pageRender from './js/page-render';
import debounce from 'lodash.debounce';
import pnotify from '../node_modules/pnotify/dist/es/PNotify';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';

const refs = {
    input: document.querySelector('#country__input'),
    list: document.querySelector('.countries__list'),
    container: document.querySelector('.country__container')
}

function findCountries() {
    
    if(refs.input.value === '') {
        refs.list.innerHTML = '';
        refs.container.innerHTML = '';
    }

    if(refs.input.value) {

    fetchCountries(refs.input.value)
    .then(array => { 
        pageRender(array);
    })
    .catch(()=> {
        pnotify.error('wrong country');
    });
    } 
};

refs.input.addEventListener('input', debounce(findCountries, 500));

