import Home from './routes/Home.svelte';
import Lorem from './routes/Lorem.svelte';
import About from './routes/About.svelte';
import Contact from './routes/Contact.svelte'
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Home,
    '/lorem/:repeat': Lorem,
    '/about': About,
    '/contact': Contact,
    // The catch-all route must always be last
    '*': NotFound
};
