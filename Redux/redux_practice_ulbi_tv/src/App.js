import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  
  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const addCustomers = () => {
    dispatch(fetchCustomers())
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className={'app'}>
      <div style={{fontSize:'3rem'}}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => addCustomers()}>Получить клиентов из Базы</button>
      </div>
      { customers.length > 0 ?
        <div>
          { customers.map(customer => 
              <div
                key={customer.id}
                onClick={() => removeCustomer(customer)}
                style={{fontSize: '2rem', border: '1px solid black', padding: '10px', marginTop: 5}}
              >
                {customer.name}
              </div>
          )}
        </div>
        :
        <div style={{fontSize: '2rem', marginTop: 20}}>
          Клиенты отсутствуют!
        </div>
      }
    </div>
  );
}

export default App;
