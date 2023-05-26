$.ajax("http://api.citybik.es/v2/networks")
.then((data) => {
    console.log(data)
    console.log(data.networks)
    console.log(data.networks[106])
    console.log(data.networks[106].name)
    console.log(data.networks[106].location.city)
})


