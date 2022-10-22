// export { image } from "./modules/image.js";
// export { link } from "./modules/link.js";
// export { container } from './modules/container.js';
// export { h1 } from './modules/h1.js';
// export { form } from './modules/form.js';
// export { h2 } from "./modules/h2.js";
// export { h3 } from "./modules/h3.js";
// export { p } from "./modules/p.js";
// export { ul } from "./modules/ul.js";
// export { navbar } from "./modules/navbar.js";

// import { navbar } from "./modules/navbar.js";
import { container } from "./modules/container.js";
import { navbar } from "./modules/navbar.js";

container('cont', 'horizontal', 'start', 'lightblue');
navbar({'label': 'home', 'label2': 'about'}, 'https://www.allrecipes.com/thmb/VD3-aRi-sZHQ7keBLa5mFvq45Gs=/2000x2000/filters:no_upscale()/25473-the-perfect-basic-burger-ddmfs-1X1-1349-1-2661ab747b004738a4e31a51dc6330ab.jpg', 'red', 'cont');