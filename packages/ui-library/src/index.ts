
import { init, VNode, classModule, propsModule, eventListenersModule } from 'snabbdom';
// import { classModule } from 'snabbdom/modules/class';
// import { propsModule } from 'snabbdom/modules/props';
// import { eventListenersModule } from 'snabbdom/modules/eventlisteners';

const patch = init([classModule, propsModule, eventListenersModule]);

interface State {
  count: number;
}

let state: State = { count: 0 };
let onUpdate: () => void = () => {};

const updateState = (newState: Partial<State>): void => {
  state = { ...state, ...newState };
  onUpdate();
}

const mount = (element: Element, template: (state: State, updateState: (newState: Partial<State>) => void) => VNode): void => {
  onUpdate = () => {
    const newVNode = template(state, updateState);
    patch(element, newVNode);
  };

  onUpdate();
}

export { mount, updateState };


