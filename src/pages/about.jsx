
import { useNavigate } from 'react-router-dom';
export function About() {
    const irPara = useNavigate();
    const handleClick = () => {
        irPara('/');
    };
    return (
        <>
            <h1>olaa</h1>
            <button onClick={handleClick}>Ir para home</button>

        </>
    )
}