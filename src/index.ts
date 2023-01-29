import App from './components/app/app';
import * as _ from 'lodash';
import './global.css';

const app = new App();
app.start();

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
