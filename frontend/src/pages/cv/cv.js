import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../componentes/navbar/navbar'
import './cv.css';
import api from '../../services/api';

const Cv = () => {

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    // console.log(address);
    setForm({ ...form, address: address.data.logradouro, city: address.data.localidade, 
      uf: address.data.uf, district: address.data.bairro });
  };

  const createCandidate = async (candidate) => {
    try {
      const user = await api.post('/register', form);
      if (user.status === 200) {
        alert('Cadastro enviado com sucesso!');
      } 

    } catch (error) {
      alert('Usuário já cadastrado ou dados incompletos');

    } 
  };

  const [form, setForm] = useState({
    name: '',    
    job: '',
    date: '',    
    maritalStatus: '',
    gender: '',
    cep: '',
    address: '', 
    addressNumber: '',
    district: '',
    city: '',
    uf: '',
    cell: '',
    email: '',
    cpf: '',
    phone1: '',
    phone2: '',
    rg: '',
    vehicle: '',
    cnh: ''
  });

  useEffect (() => {
    console.log(form);
  }, [form]);




  return (
    <>      
      <div>
        <Navbar />
        </div>
      <div>
        <h3>Cadastre o seu currículo no formulário abaixo:</h3>
      </div>


      <section id='container'>
      <form className="form">
      
      <h2 id='titulo'>Dados Pessoais</h2>
      <div id="form-row">    
      <fieldset>
        <label>Nome Completo <span>*</span></label>
        <input required size="40"
        onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }} value={form.name}></input>
      </fieldset>

      <fieldset>
        <label>Cargo Pretendido <span>*</span></label>
        <input required onChange={(e) => {
          setForm({ ...form, job: e.target.value });
        }} value={form.job}></input>
      </fieldset>
      </div>

      <div id="form-row">
      <fieldset>
        <label>Data de Nascimento <span>*</span></label>
        <input required type="date" onChange={(e) => {
          setForm({ ...form, date: e.target.value });
        }} value={form.date}></input>
      </fieldset>

      <fieldset>
        <label>Estado Civil</label>
        <select onChange={(e) => {
          setForm({ ...form, maritalStatus: e.target.value });
        }} value={form.maritalStatus}>
          <option value=""> </option>
          <option value="solteira">Solteira(o)</option>
          <option value="casada">Casada(o)</option> 
          <option value="divorciada">Divorciada(o)</option>
          <option value="viuva">Viúva(o)</option>
        </select>
      </fieldset>

      <fieldset>
        <label>Gênero</label>
        <select onChange={(e) => {
          setForm({ ...form, gender: e.target.value });
        }} value={form.gender}>
          <option value=""> </option>
          <option value="Mulher - cisgênero">Mulher - cisgênero</option>
          <option value="Homem - cisgênero">Homem - cisgênero</option>
          <option value="Mulher - transgênero">Mulher - transgênero</option>                     
          <option value="Homem - transgênero">Homem - transgênero</option>
          <option value="Não binário">Não binário</option>
          <option value="outro">Outro</option>
        </select>
      </fieldset>      

      <fieldset>
        <label>CEP <span>*</span></label>
        <input id='cep' size="20" maxlength="9" 
        required onBlur={() => {
          fetchAddress();
        }} onChange={(e) => {
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep}></input>
      </fieldset>
      </div>

      <div id="form-row">

      <fieldset>
        <label>Endereço <span>*</span></label>
        <input required size="75"
        onChange={(e) => {
          setForm({ ...form, address: e.target.value });
        }} value={form.address}></input>
      </fieldset>

      <fieldset>
        <label>Número <span>*</span></label>
        <input required onChange={(e) => {
          setForm({ ...form, addressNumber: e.target.value });
        }} value={form.addressNumber}></input>
      </fieldset>
      </div>

      <div id="form-row">
      <fieldset>
        <label>Bairro <span>*</span></label>
        <input required onChange={(e) => {
          setForm({ ...form, district: e.target.value });
        }} value={form.district}></input>
      </fieldset>

      <fieldset>
        <label>Cidade <span>*</span></label>
        <input required onChange={(e) => {
          setForm({ ...form, city: e.target.value });
        }} value={form.city}></input>
      </fieldset>

      <fieldset>
        <label>Estado <span>*</span></label>
        <input required id="uf" onChange={(e) => {
          setForm({ ...form, uf: e.target.value });
        }} value={form.uf}></input>
      </fieldset>
      </div>

      <div id="form-row">
          <fieldset>
        <label>Telefone Fixo 1</label>
        <input onChange={(e) => {
          setForm({ ...form, phone1: e.target.value });
        }} value={form.phone1}></input>
      </fieldset>

      <fieldset>
        <label>Telefone Fixo 2</label>
        <input onChange={(e) => {
          setForm({ ...form, phone2: e.target.value });
        }} value={form.phone2}></input>
      </fieldset>

      <fieldset>
        <label>Celular <span>*</span></label>
        <input required onChange={(e) => {
          setForm({ ...form, cell: e.target.value });
        }} value={form.cell}></input>
      </fieldset>
      

      <fieldset>
        <label>E-mail <span>*</span></label>
        <input required size="35"
        onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email}></input>
      </fieldset>
      </div>

      <h2 id='titulo2'>Documentos</h2>

      <div id="form-row">
      <fieldset>
        <label>Identidade </label>
        <input onChange={(e) => {
          setForm({ ...form, rg: e.target.value });
        }} value={form.rg}></input>
      </fieldset>

      <fieldset>
        <label>CPF <span>*</span></label>
        <input required minLength='11' onChange={(e) => {
          setForm({ ...form, cpf: e.target.value });
        }} value={form.cpf}></input>        
        {/* <ErrorSpan isError={cpfError}>CPF inválido</ErrorSpan> */}
      </fieldset>      

      <fieldset>
        <label>Possui Veículo</label>
        <select onChange={(e) => {
          setForm({ ...form, vehicle: e.target.value });
        }} value={form.vehicle}>
          <option value=""> </option>
          <option value="sim">Sim</option>
          <option value="nao">Nao</option>
        </select>
      </fieldset>

      <fieldset>
        <label>Habilitação</label>
        <select onChange={(e) => {
          setForm({ ...form, cnh: e.target.value });
        }} value={form.cnh}>
          <option value=""> </option>
          <option value="Não possui">Não possui</option>
          <option value="Categoria A">Categoria A</option>
          <option value="Categoria B">Categoria B</option>
          <option value="Categoria AB">Categoria AB</option>
          <option value="Categoria C">Categoria C</option>
          <option value="Categoria D">Categoria D</option>
          <option value="Categoria E">Categoria E</option>
        </select>
      </fieldset>
      </div> 

      <div id='button'>
        <button onClick={() => createCandidate()}>Enviar</button>
      </div>
      
      </form>
      </section>

    </>
  );
};

export default Cv;
