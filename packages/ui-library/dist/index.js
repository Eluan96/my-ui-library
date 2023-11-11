"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateState = exports.mount = void 0;
const snabbdom_1 = require("snabbdom");
// import { classModule } from 'snabbdom/modules/class';
// import { propsModule } from 'snabbdom/modules/props';
// import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
const patch = (0, snabbdom_1.init)([snabbdom_1.classModule, snabbdom_1.propsModule, snabbdom_1.eventListenersModule]);
let state = { count: 0 };
let onUpdate = () => { };
const updateState = (newState) => {
    state = Object.assign(Object.assign({}, state), newState);
    onUpdate();
};
exports.updateState = updateState;
const mount = (element, template) => {
    onUpdate = () => {
        const newVNode = template(state, updateState);
        patch(element, newVNode);
    };
    onUpdate();
};
exports.mount = mount;
