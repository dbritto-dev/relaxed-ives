export default async function Page({ params }: {
    params: { locale: string, slug: string }
}) {
    return <div>{JSON.stringify(params)}</div>
}