import Image from "next/image";

export default function BlogImage({img, alt}){
    // console.log(img)
    return (
        <Image 
            src={img}
            width={200}
            height={105}
            alt={alt}
        />
    )
}