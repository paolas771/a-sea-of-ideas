import Image from "next/image";

export default function BlogImage({img, alt, width, height}){
    // console.log(img)
    return (
        <Image 
            src={img}
            width={width}
            height={height}
            alt={alt}
            className="content_image"
        />
    )
}