import { image } from "./image.js";
import { link } from "./link.js";
import { container } from './container.js';
import { h1 } from './h1.js';
import { form } from './form.js';
import { h2 } from "./h2.js";


// container('zachs-container', 'vertical');
container('hotdrinks', 'vertical');
container('colddrinks', 'vertical');
container('pastries', 'vertical');

h1('this is my title', 'zachs-container', 'my-title');
h2('this is my subtitle', 'zachs-container', 'my-sub-title');
link('google', 'https://www.google.com', 'link to google', 20, 'my-link', 'zachs-container');
image('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/640px-Soccerball.svg.png', 50, 'soccer-ball', 'picture of a soccer ball', 'zachs-container');
form(['Name', 'Last Name', 'Age'], 'zachs-container');
