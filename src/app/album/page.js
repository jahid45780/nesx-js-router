import Image from "next/image";

const AlbumPage = () => {
    return (
        <div>
            <h1> using img site </h1>
            <Image src='https://i.ibb.co/020bz1H/IMG-20240222-135441-removebg-preview.png' 
               width={500} height={500} alt="jahid-png"
            ></Image>
        </div>
    );
};

export default AlbumPage;