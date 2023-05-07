import React, { Component } from 'react'
import './css/final.css'
import Header from './header';
class App extends Component {
  constructor() {
    super();
    this.state = { todo: [] }
  }
  addTodo = (e) => {
    let td = this.state.todo;
    console.log(e);
    console.log('jamInput :', this.jamInput);
    console.log('aktivitas : ', this.aktivitasInput);
    e.preventDefault();
    let jamAwal = this.jamAwal.value
    let jamAkhir = this.jamAkhir.value
    let aktivitas = this.aktivitasInput.value
    this.setState({
      todo: [...td, { jamAwal, jamAkhir, aktivitas }]
    })
    this.formulir.reset()
  }
  removeTodo = (i) => {
    this.state.todo.splice(i, 1);
    this.setState({
      todo: this.state.todo
    })
  }
  render() {
    return (
      <div class="container px-12">
        <Header />
        <form ref={elem => this.formulir = elem} class="mt-12 text-center mb-3">

          <input class="border  border-black rounded-2xl  p-2" type="time" ref={elem => this.jamAwal = elem} placeholder='Jam Aktivitas' />
          <span class="text-2xl"> - </span>
          <input class="border mr-5 border-black  px-2 rounded-2xl  p-2" type="time" ref={elem => this.jamAkhir = elem} placeholder='Jam Aktivitas' />
          <input class="border mr-5 border-black  px-2 rounded-2xl  p-2" type="text" ref={elem => this.aktivitasInput = elem} placeholder='Jenis Aktivitas' />
          <button class="border border-blue-600 px-4 py-2 rounded-2xl hover:text-white hover:bg-blue-700 duration-500" onClick={this.addTodo}>Simpan</button>
        </form>
        <hr />

        <div className='container mt-4 w-96 mx-auto'>
          <ul>
            {this.state.todo.map((data, i) => {
              return (

                <li key={i} >
                  <div className='flex justify-center '>
                    <button class="border border-red-500 my-3 hover:text-white rounded-2xl px-4 py-2 mr-12 hover:bg-red-600 duration-500" onClick={() => this.removeTodo(i)}>hapus</button>
                    <p className='self-center text-xl'>{data.jamAwal} - {data.jamAkhir} : {data.aktivitas}</p>
                  </div>
                  <hr />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default App;