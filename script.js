import { image } from "./modules/image.js";
import { link } from "./modules/link.js";
import { container } from './modules/container.js';
import { h1 } from './modules/h1.js';
import { form } from './modules/form.js';
import { h2 } from "./modules/h2.js";
import { ul } from "./modules/ul.js";


container('zachs-container', 'vertical', 'start', 'white');
// container('hotdrinks', 'vertical');
// container('colddrinks', 'vertical');
// container('pastries', 'vertical');

h1('this is my title', 'zachs-container', 'my-title', 'black');
ul(['house', 'coffee', 'taco', 'phone'], 'black', 20,'zachs-container');
// h2('this is my subtitle', 'zachs-container', 'my-sub-title');
// link('google', 'https://www.google.com', 'link to google', 20, 'my-link', 'zachs-container');
// image('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/640px-Soccerball.svg.png', 50, 'soccer-ball', 'picture of a soccer ball', 'zachs-container');
// form(['Name', 'Last Name', 'Age'], 'zachs-container');

/*
IDEA - for printing out the entire html for the user to pass along to someone else or study 

console.log(document.querySelector('#zachs-container').innerHTML);
*/
