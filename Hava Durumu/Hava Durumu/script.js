const url ='https://api.openweathermap.org/data/2.5/'   // Api nin kendi linkinin URL kısmı burası her yerde ayanı. Oyuzden Url ye atadık.
const key = '95b2e94ae051f5b2ddd5acb211152d16'  // Key ise Api için gerekli her User a atanmış bir key - API için gereklilik.
const zipCode = `http://api.openweathermap.org/geo/1.0/zip?zip=alpha-2,TR&appid=95b2e94ae051f5b2ddd5acb211152d16` // Burada ise zipCode Şehirin Enlem Boylam olayını bu ayarlıyor . Üst taraftaki Apı de ona göre Şehiri gösteriyor.

const setQuery = (e) => {   // e burada girilen tuşu yakalıyor. Eğer Key Code 13 ise ..... 
    if (e.keyCode == '13') // Enter a bastığımda kod çalışıyor.
        getResult(searchBar.value); // Search Bardaki veriyi value e çeviryor.
}


const getResult = (cityName) => { // yukardaki getResult dan gelen Veriyi (searchBar.value == CityName gibi yani )
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`; // burada Query oluşturduk Url yukardaki değişkenden geliyor, CityName de zaten fonk. un içinde yazdık. Keyde yukarda tanımlı
    fetch(query) //  Fetch ile queryi okuyoruz . 
    .then(weather => { 
        return weather.json(); // weatherı Json  a çeviridk. 
    })
    .then(displayResult) // sonrasında Display result ı çalıştırdık 
}

const displayResult = (result) => { 
    let city = document.querySelector('.city'); // . index.html deki .city ye veriyi değiştirdik. 
    city.innerText = `${result.name}, ${result.sys.country}` // innerText le yaptık bunu result name 

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C` // city gibi aaynı mantık - gelen veriyi - benım default alarak yazdığım kıssıma yazıyoruz. 


    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description
    
    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)} / ${Math.round(result.main.temp_max)} °C `
}

const searchBar = document.getElementById('searchBar');  // searcBardaki veriyi yakaladık
searchBar.addEventListener('keypress',setQuery); // burada kod dinleniyor , keyress olunca, setquery açalışıyor. 

