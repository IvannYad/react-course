import Button from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/Panel';
import { produce } from 'immer';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {
  switch(action.type){
    case INCREMENT:
      state.count = state.count + 1;
      return;
    case DECREMENT:
      state.count = state.count - 1;
      return;
    case CHANGE_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      };
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  //const [ count, setCount ] = useState(initialCount);
  //const [ valueToAdd, setValueToAdd ] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0
  });

  const increment = () => {
    dispatch({
      type: INCREMENT
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT
    });
  };

  const handleChange = (event) => {
    event.preventDefault();

    const value  = parseInt(event.target.value) || 0;
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // setCount(oldCount => oldCount + valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
