import './style.css';
import Trash from '../../assets/red-trash-can-icon.png';

function Home() {

  let users = [{
    id: '123456',
    name: 'Maria José',
    age: 33,
    email: 'majo@gmail.com'
  },
  {
    id: '654321',
    name: 'José Maria',
    age: 40,
    email: 'joma@gmail.com'
  }]

  return (
    <div className='container'>
      <form action="">
        <h1>Cadastrar usuário</h1>
        <input placeholder='Nome' name='name' type="text" />
        <input placeholder='Idade' name='age' type="number" />
        <input placeholder='Email' name='email' type="email" />
        <button>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>

          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
