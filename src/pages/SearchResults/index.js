import ListOfGifs from '../../components/ListOfGifs/index';

export default function SearchResult({ params }) {
    const { keyword } = params;

    return (
        <>
            <ListOfGifs keyword={keyword} />
        </>
    )
}