var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Vue from 'vue';
import Component from 'vue-class-component';
import WithRender from './LogViewerTemplate.html';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';
import vXmlTree from "v-xml-tree";
import '../css/custom.css';
let LogViewer = class LogViewer extends Vue {
    constructor() {
        super(...arguments);
        this.isBusy = false;
        this.filter = '';
        this.rows = 1;
        this.perPage = 20;
        this.currentPage = 1;
        this.pageOptions = [20, 50, 100, {
                value: Number.MAX_SAFE_INTEGER,
                text: "Show All"
            }];
        this.errors = [];
        this.fields = [
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
        ];
        this.fromDate = new Date().toISOString();
        this.toDate = new Date().toISOString();
    }
    beforeMount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isBusy = true;
            let d = new Date();
            let threeDaysAgo = d.setDate(d.getDate() - 3);
            this.fromDate = new Date(threeDaysAgo).toISOString();
            let response = yield this.getLogs();
            //this.errors = response.data;
            this.rows = this.errors.length;
            this.isBusy = false;
        });
    }
    mounted() {
        return __awaiter(this, void 0, void 0, function* () {
            this.$root.$on('refreshComponents', () => __awaiter(this, void 0, void 0, function* () {
                this.refresh();
            }));
        });
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isBusy = true;
            let response = yield this.getLogs();
            //this.errors = response.data;
            this.isBusy = false;
        });
    }
    getLogs() {
        return __awaiter(this, void 0, void 0, function* () {
            //return await Axios.get('/api/Log/GetLogs/' + this.fromDate + '/' + this.toDate)
        });
    }
};
LogViewer = __decorate([
    WithRender,
    Component({
        components: {
            Datetime,
            vXmlTree
        }
    })
], LogViewer);
export default LogViewer;
//# sourceMappingURL=LogViewer.js.map