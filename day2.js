const checkWeather=(temp)=>{
    if(temp>25){
        console.log("Жарко, иди в тень")
    }
    else if(temp<15){
        console.log("Холодно, надень куртку")
    }
    else{
        console.log("Отлично, иди гулять")
    }
};
checkWeather(30);
checkWeather(20);
checkWeather(10)