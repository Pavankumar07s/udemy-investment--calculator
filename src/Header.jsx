import Logo from './assets/logo.png';
export default function Header(){
    return(
        <>
        <div id="header">
        <img src={Logo}alt="" />
        <h1>Investment calculator</h1>
        </div>
        </>
    );

}