import { useNavigate } from 'react-router-dom';
function Home() {
    const irPara = useNavigate();
    const handleClick = () => {
        irPara('/sobre');
    };
    return (
        <div>
            <h1>Página Inicial</h1>
            <button onClick={handleClick}>Ir para Sobre</button>
        </div>
    );
}
export default Home;
