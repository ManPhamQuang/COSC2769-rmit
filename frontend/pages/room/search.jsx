import { useRouter } from "next/router";
import NavBar from "../../components/navbar/NavBar";
import SearchResult from "../../components/searchResult/SearchResult";

const Search = () => {
    const router = useRouter();
    const { term } = router.query;

    return (
        <div>
            <NavBar />
            <SearchResult term={term} />
        </div>
    );
};

export default Search;
