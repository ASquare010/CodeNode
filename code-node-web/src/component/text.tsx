interface Props 
{
    items: number[];
    title: string;
}

function Test({items, title}: Props)
{
    return (
        <>
            <h1>{title}</h1>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
        </>
    )

}

export default Test