import Link from "next/link";


const NotFound = () => {
    return (
        <div>
            <h1> 404 !! page not found </h1>
            <Link href="/">Return Home</Link>
        </div>
    );
};

export default NotFound;