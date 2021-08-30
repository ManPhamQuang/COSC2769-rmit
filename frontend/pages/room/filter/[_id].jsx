import { useRouter } from "next/router";
import axios from "../../../components/axios";
import useSWR from "swr";
import FilterCategories from "../../../components/FilterCategories";

const roomFetcher = (url) => axios.get(url).then((res) => res.data.data);

export default function filter() {
    const router = useRouter();
    const _id = router.query._id;
    const url = `/rooms/?category=${_id}&limit=10000`;

    const { data, roomErr } = useSWR(
        _id ? url : null,
        _id ? roomFetcher : null
    );

    return (
        <div className="pt-20">
            {data && (
                <div>
                    <FilterCategories rooms={data.rooms} />
                </div>
            )}
        </div>
    );
}
