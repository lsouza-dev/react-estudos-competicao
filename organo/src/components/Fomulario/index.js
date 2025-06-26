import './formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = () => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time,setTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault();
        const dados = {
            'nome': nome,
            'cargo': cargo,
            'imagem': imagem,
            'time': time
        }

        console.log(dados)
    }

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    valor={nome}
                    setValor={setNome}
                    required={true}
                    label={'Nome'}
                    placeholder={'Digite seu nome'} />

                <CampoTexto
                    valor={cargo}
                    setValor={setCargo}
                    required={true}
                    label={'Cargo'}
                    placeholder={'Digite seu cargo'} />

                <CampoTexto
                    valor={imagem}
                    setValor={setImagem}
                    label={'Imagem'}
                    placeholder={'Informe o endereço da imagem'} />

                <ListaSuspensa 
                    valor={time}
                    setValor={setTime}
                    label={'Time'} 
                    itens={times} 
                    required = {true}
                    />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;