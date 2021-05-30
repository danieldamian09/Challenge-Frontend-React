import React from 'react'

function Acumulativo({heroe}) {

    const {results} = heroe;

    if(!results) return null;

    // heroes.forEach(heroe => {
    //     const sum = Object.keys(heroe)
    //         .map(hekey => {
    //             return heroe[hekey]
    //         })
    //         .reduce((sum, el) =>{
    //             return sum + el;
    //         },0);
    //         console.log(sum)
    // });

    

    // console.log(heroes[0]);

    // const { heroe } = heroes[0];

    // const { powerstats } = heroes.results[0].powerstats;

    // console.log(powerstats)

    // function sumaPower (results)

    // heroes.forEach(heroe => {
    //     const sum = Object.keys(heroe)
    //     console.log(sum)
    // });

    



    return (
        <div>
            
        </div>
    )
}

export default Acumulativo
