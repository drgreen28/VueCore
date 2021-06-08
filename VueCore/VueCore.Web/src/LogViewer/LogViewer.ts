import Vue from 'vue'
import Component from 'vue-class-component'
import WithRender from './LogViewerTemplate.html'
import Axios from 'axios'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import vXmlTree from "v-xml-tree";
import '../css/custom.css'

@WithRender
@Component({
    components: {
        Datetime,
        vXmlTree
    }
})
export default class LogViewer extends Vue {

    isBusy: boolean = false;
    filter: string = '';
    rows: number = 1;
    perPage: number = 20;
    currentPage: number = 1;
    pageOptions: any = [20, 50, 100, {
        value: Number.MAX_SAFE_INTEGER,
        text: "Show All"
    }];

    errors: server.elmahErrorModel[] = <server.elmahErrorModel[]>[];
    fields: any = [
        {
            key: 'message',
            sortable: true,
            stickyColumn: true
        },
        {
            key: 'user',
            sortable: true
        },
        {
            key: 'timeUtc',
            sortable: true,
            tdClass: 'timeUtcColumn'
        }
    ]

    fromDate: string = new Date().toISOString();
    toDate: string = new Date().toISOString();

    async beforeMount() {
        this.isBusy = true;
        let d = new Date();
        let threeDaysAgo = d.setDate(d.getDate() - 3);
        this.fromDate = new Date(threeDaysAgo).toISOString();
        let response = await this.getLogs();
        //this.errors = response.data;
        this.rows = this.errors.length;
        this.isBusy = false;
    }

    async mounted() {
        this.$root.$on('refreshComponents', async () => {
            this.refresh();
        });
    }

    async refresh() {
        this.isBusy = true;
        let response = await this.getLogs();
        //this.errors = response.data;
        this.isBusy = false;
    }

    async getLogs() {
        //return await Axios.get('/api/Log/GetLogs/' + this.fromDate + '/' + this.toDate)
    }
}
