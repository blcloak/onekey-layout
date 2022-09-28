import cusTable from './lib/components/custable.vue'
import searchForm from './lib/components/searchForm.vue'
import './lib/assets/one_common.css'

const components = [cusTable, searchForm];

const install = function (Vue) {
    components.forEach((component) => {
        console.log(component.name);
        Vue.component(component.name, component);
    });
};

export { cusTable, searchForm };
