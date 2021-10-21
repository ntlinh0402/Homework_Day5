let weather=prompt("Insert temperature:")
if (weather>40||weather<-12){
    console.log("Không sống nổi")
}else if(weather>=25){
    console.log("Nóng")
}else if(weather>=15){
    console.log("Mát")
}else if(weather>=0){
    console.log("lạnh")
}else{
    console.log("Sieu lanh")
}