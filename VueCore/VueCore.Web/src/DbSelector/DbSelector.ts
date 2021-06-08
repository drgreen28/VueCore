import Vue from 'vue'
import Component from 'vue-class-component'
import WithRender from './DbSelectorTemplate.html'
import Axios from 'axios'

@WithRender
@Component
export default class DbSelector extends Vue {

    selectedContext: string = "";
    contexts: any = []


    async beforeMount() {
        //let con = await Axios.get('/api/Log/GetDbs');
        //this.contexts = con.data;

        //let sel = await Axios.get('/api/Log/GetCurrentDb');
        //this.selectedContext = sel.data;
    }

    async updateContext(e) {
        //await Axios.get('/api/Log/UpdateContext/' + e);
        //this.$root.$emit('refreshComponents');
    }
}
