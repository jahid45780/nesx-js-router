const DynamicPage = ({params}) => {
    // console.log(params);
    return (
        <div>
            <p> this dynamic page {params.id} </p>
        </div>
    );
};

export default DynamicPage;