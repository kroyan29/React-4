import logo from './logo.svg';
import './App.css';
import React from "react";


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: 'Манвел', surname: 'Кроян', otchestva: 'ВАГАНИЧ', };
//   }
//   render() {
//     return <div>
//       Фамилия:  {this.state.surname}<br></br>Имя:  {this.state.name}<br></br>
//       Отчество:  {this.state.otchestva}
//     </div>;
//   }

// }

// ______________________________________


// class App extends React.Component {
//   showMessage() {
//     alert('Дарова братишка!');
//   }

//   render() {
//     return <div onClick={this.showMessage}>
//       нажми на меня
//     </div>;
//   }
// }

// ______________________________________

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: 'Манвел', surname: 'Кроян' };

//     this.showMessage = this.showMessage.bind(this);
//   }

//   showMessage() {
//     alert(this.state.name);
//   }

//   render() {
//     return <div onClick={this.showMessage}>
//       Кликни, чтобы знать как меня завут!
//     </div>;
//   }
// }


// ______________________________________

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: 'Манвел' };
//   }

//   changeName() {
//     this.setState({ name: 'Вахтанг' });
//   }

//   render() {
//     return <div  className='ppa'>
//       <p>Имя: {this.state.name}</p>
//       <button onClick={this.changeName.bind(this)} className='knop'>Сменить свое имя</button>
//     </div>;
//   }
// }

// ______________________________________

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: 'Манвел', surname: 'Кроян' };
//   }

//   changeName() {
//     this.setState({ name: 'Вахтанг', surname: 'Шаинян' });
//   }

//   render() {
//     return <div className='ppa'>
//       <p>Имя: {this.state.name}</p>
//       <p>Фамилия: {this.state.surname}</p>
//       <button onClick={this.changeName.bind(this)} className='knop'>Сменить свое имя</button>
//     </div>;
//   }
// }


// ______________________________________
// import cher from './hond-cher.webp';
// import bel from './hond-bel.jpg';
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Honda",
//       color: "белую",
//       year: 20,
//       imgUrl: bel
//     };
//   }
//   changeColor = () => {
//     this.setState({ color: "черную" });
//     this.setState({ imgUrl: cher });
//   }
//   render() {
//     return (
//       <div className='honda'>
//         <h1>My {this.state.brand} </h1>
//         <p>
//           Спасибо папаша за {this.state.color}  {this.state.brand}-у&nbsp;  &nbsp;
//           {this.state.year} века         </p>
//         <img src={this.state.imgUrl}></img>
//         <br></br>
//         <button
//           type="button"
//           onClick={this.changeColor} className='knop'
//         >Сменить цвет</button>
//       </div>
//     );
//   }
// }


// ______________________________________

const turtles = [
  {
    name: 'Коля',
  },
  {
    name: 'Вася',
  },
  {
    name: 'Петя',
  },
  {
    name: 'Иван',
  },
  {
    name: 'Дима',
  },
  
  
];
function App() {
  return (
    <div className='App'>
      {turtles.map(function (kayf) {

        return (
          <div className='kart'>
            <b>
              <ul>
                <li>{kayf.name}</li>
              </ul>
            </b>
            {/* <button
         type="button"
          onClick={this.changeColor} className='knop'
  >Сменить цвет</button> */}
          </div>
        );
      })}

    </div>
  );
}
// ______________________________________
export default App;
