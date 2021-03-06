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
import WithRender from './DbSelectorTemplate.html';
let DbSelector = class DbSelector extends Vue {
    constructor() {
        super(...arguments);
        this.selectedContext = "";
        this.contexts = [];
    }
    beforeMount() {
        return __awaiter(this, void 0, void 0, function* () {
            //let con = await Axios.get('/api/Log/GetDbs');
            //this.contexts = con.data;
            //let sel = await Axios.get('/api/Log/GetCurrentDb');
            //this.selectedContext = sel.data;
        });
    }
    updateContext(e) {
        return __awaiter(this, void 0, void 0, function* () {
            //await Axios.get('/api/Log/UpdateContext/' + e);
            //this.$root.$emit('refreshComponents');
        });
    }
};
DbSelector = __decorate([
    WithRender,
    Component
], DbSelector);
export default DbSelector;
//# sourceMappingURL=DbSelector.js.map