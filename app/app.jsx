import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
  const [address, setAddress] = useState('https://kharkiv.rc.ollyfood.com/ru/');
  return(
    <div>
      <h3>Приложение для тестирования document.referrer</h3>
      <p>Вводим адрес и нажимаем перейти</p>
      <p>
      {'Куда переходим '}
      <input style={{width: '500px'}} value={address} onChange={({target : { value }})=>setAddress(value)} />
      </p>
      <br/>
      <a href={address}>Перейти</a>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
