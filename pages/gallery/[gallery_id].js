import { useRouter } from "next/dist/client/router";

const Gallery = () => {
    const router = useRouter()
    const { gallery_id } = router.query 

    return <p>Gallery: { gallery_id } </p>
}

export default Gallery