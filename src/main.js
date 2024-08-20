import './index.css'
import climaLogo from '/clima.svg'

document.querySelector('#app').innerHTML = `
    <section>
        <h1>Conoce el clima</h1>
        <img src="${climaLogo}" width="200" /> 
        <div class="result">
            <p>Indique de que ciudad quiere conocer el clima</p>
        </div>
        <form action="" method="POST" class="get-weather">
            <input type="text" name="city" id="city" placeholder="Seleccione Ciudad" />
            <input type="submit" name="" id="" value="Buscar Información" />
        </form>   
    </section>
`