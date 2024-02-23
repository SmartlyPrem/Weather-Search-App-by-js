const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moiveBox = document.querySelector("#movie-box")

const getMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    showMovies(data.results)
    // console.log(data);
}
getMovies(APIURL);

const showMovies = (data) => {
    moiveBox.innerHTML = "";
    data.forEach(
        (item) => {
            moiveBox.innerHTML += `
            <div class="box">
                <img src="${IMGPATH + item.poster_path}" alt="">
                <div class="overlay">
                    <div class="title">
                        <h2>${item.original_title}</h2>
                        <span>
                            "${item.vote_average}"
                        </span>
                    </div>
                    <h3>Overview:</h3>
                    <p>${item.overview}</p>
                </div>
            </div>
            `
        }
    )
    }
document.querySelector("#search").addEventListener(
    "keyup",
    function (event){
        if(event.target.value != ""){
            getMovies(SEARCHAPI + event.target.value)
        }else{
            getMovies(APIURL)
        }
    }
)

