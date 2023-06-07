import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./locations.css"

export const LocationsList = () => {
    const [locations, setLocations] = useState([])
/*     const [filteredLocations, setFiltered] = useState([]) */


    const storeLocation = localStorage.getItem("kandy_user")
    const storeLocationObject = JSON.parse(storeLocation)
    const navigate = useNavigate()

/*     useEffect(
        () => {
                const locationAddresses = locations.filter(location => location.address === true)
                setFiltered(locationAddresses)
        },
        []
    ) */

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
                .then(response => response.json())
                .then((locationArray) => {
                    setLocations(locationArray)
                })

        },
        []
    )


return <>

    <h2>Store Locations</h2>
    <article className="locations">
        {
            locations.map(
                (location) => {
                    return <section className="location" key={`location--${location.address}`}>
                        <header>{location.address}</header>
                        <footer>{location.squareFootage}</footer>
                    </section>
                }
            )
        }

    </article>
</>

    }



    