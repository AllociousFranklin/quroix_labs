import Image from "next/image";
export default function Loading() {
    return (
        <div className="loading-screen" >
            <div className="loading-image-box" >
                <Image src="/images/loading.gif" className="loading-image" alt="Loading Image"  width={1920} height={1080} />
            </div>
      </div>
    )
}