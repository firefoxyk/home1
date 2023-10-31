import { Component, ReactNode } from "react";
import axios from 'axios';
import { error } from "console";
import './Button.css';

interface ButtonProps{
    onClick: (text:string, isValid:boolean)=>void;
}

interface ButtonState{
    urlAdress: string
}

export class Button extends Component<ButtonProps, ButtonState> {    

    constructor(props: any) {
        super(props);
        this.state = {
            urlAdress: ''
        };
    }

    click = () =>{
        const isTrueVal = !this.state.urlAdress || this.validateWebsiteUrl(this.state.urlAdress);

        if(!isTrueVal || this.state.urlAdress.trim() == '')
        {
            this.props.onClick('Пустая строка!', false);
        }
        else{
            axios.get(this.state.urlAdress)
            .then(res => {
                console.log(res)
                this.props.onClick(res.data.fact, true);
            })
            .catch (error=>{
                console.log(error.cause)
                this.props.onClick('Не тот адрес', false);
            })
            ;
        }
    }

    validateWebsiteUrl = (websiteUrl: string) => {
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    
        return regex.test(websiteUrl);
      };

    setUri = (e: any) => {
        this.setState({ urlAdress: e.target.value });
    }

    render() {
        return <div className = 'componentStyle'>
            <label>Введите URL, возвращающий JSON например, https://catfact.ninja/fact </label>
            <div> <input type="text" onChange={ this.setUri }></input></div>
            <div><button onClick={ this.click }>ТЫК!</button></div>
        </div>;
    }
}
