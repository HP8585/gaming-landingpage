import { useStore } from "vuex";

export function scrollNews(){
    const store = useStore();

    if (store.getters.getSection5) {
        // Make sure the element exists
        store.getters.getSection5.element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn('Element not found');
    }
}