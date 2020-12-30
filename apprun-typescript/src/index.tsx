// http://github.com/yysun/apprun
// https://apprun.js.org/#play/9

/** @jsx app.h */
import { app, Component, customElement } from "apprun";

const styles = `.my-counter * {
  font-size: 200%;
}

.my-counter span {
  width: 4rem;
  display: inline-block;
  text-align: center;
}

.my-counter button {
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 10px;
  background-color: seagreen;
  color: white;
}`;

const add = (state, num) => state + num;

@customElement('my-counter')
class Counter extends Component {
  state = 0;
  view = state => <div class="my-counter">
    <style>{styles}</style>
    <button $onclick={[add, -1]}>-</button>
    <span>{state}</span>
    <button $onclick={[add, +1]}>+</button>
  </div>;
}

