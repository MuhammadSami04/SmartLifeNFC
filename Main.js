// import logo from './logo.svg';
import './App.css';
import{useEffect,useState} from "react";

function App() {
  const [name, setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [description,setDescription] = useState('');
  const [transactions,setTransactions] = useState('');

// useEffect(()=>{
//    getTransactions().then(setTransactions);
// })
// async function getTransactions(){
//   const url = process.env.REACT_APP_API_URL+'/transactions';
//   const response = await fetch(url);
//   return await response.json();
// }
  // function addNewTransaction(ev){
  //   ev.preventDefault();
  //   const url = process.env.REACT_APP_API_URL+'/transaction';
  //   const price = name.split(' ')[0];
  //   fetch(url,{
  //     method: 'POST',
  //     headers: {'Content-type':'application/json'},
  //     body: JSON.stringify({
  //       price,
  //       name:name.substring(price.length+1),
  //       description,
  //       datetime,
  //     })
  //   }).then(response => {
  //     response.json().then(json =>{
  //       setName('');
  //       setDatetime('');
  //       setDescription('');
  //       console.log('result',json);
  //     });
  //   })
  // }
  async function fetchTransactions() {
    try {
      const url = process.env.REACT_APP_API_URL + '/transactions';
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setTransactions(data);
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  function addNewTransaction(ev) {
    ev.preventDefault();
    const price = name.split(' ')[0];
    const url = process.env.REACT_APP_API_URL + '/transaction';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        price,
        name: name.substring(price.length + 1),
        description,
        datetime,
      })
    })
      .then((response) => {
        response.json().then((json) => {
          setName('');
          setDatetime('');
          setDescription('');
          console.log('Result', json);
          fetchTransactions(); // Fetch updated transactions after adding a new one
        });
      })
      .catch((error) => {
        console.error('Error adding transaction:', error);
      });
  }
  

  let balance = 0;
  for(const transaction of transactions){
    balance = balance + transaction.price;
  }
  balance = balance.toFixed(2);
 
  
  return (
    <main>
      <h1>₹{balance}<span>.00</span></h1>
      <form onSubmit={addNewTransaction} >
        <div className="basic">
        <input type="text" 
        value={name}
        onChange={ev => setName(ev.target.value)}
        placeholder={'+200 new samsung tv'}/>
        <input type="datetime-local" value={datetime} 
        onChange={ev => setDatetime(ev.target.value)}/>
        </div>
        <div className="description">
        <input type="text" 
        value={description} 
        onChange={ev=>setDescription(ev.target.value)}
        placeholder={'description'}/>
        </div>
        <button type="submit">Add new transaction</button>
        
      </form>
      <div className="transactions">
        {transactions.length > 0 && transactions.map(transaction => (
            <div className="transaction">
        <div className="left">
          <div className="name">{transaction.name}</div>
          <div className="description">{transaction.description}</div>
        </div>
        <div className="right">
          <div className={"price " +(transaction.price<0?'red':'green')}>{transaction.price}</div>
          <div className="datetime">2022-12-18 15:45</div>
        </div>
      </div>
        ))}
      
      </div>
    </main>
  );
}

export default Main;
