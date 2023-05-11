import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Restarants from "../Restarants/Restarants";
import SearchInput from "../SearchInput/SearchInput";
import SearchList from "../SearchList/SearchList";

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }
    return(
        <section className="restaurants">
            <Banner />

            <SearchInput onChange={handleChange} value={searchQuery} />
            {searchQuery
                ? <SearchList value={searchQuery} />
                : <Restarants />
            }

        </section>
    )
}

export default HomePage ;