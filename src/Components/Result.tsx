import './Result.css'

interface Props{
    textIn:string;
    isValid:boolean;
}

export function Result(props:Props){
    let styleName = 'usualStyle';
    if(props.isValid == false)
    {
        styleName = 'errorStyle';
    }
    return <div className={styleName}>
        {props.textIn}
    </div>;
}
