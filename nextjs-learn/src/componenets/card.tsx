const Card = ({children}: {children: React.ReactNode}) => {
    const cardStyle = {
        paddding : "100px",
        margin:"10px",
        boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",
        border:"1px solid #ddd",
        display:"flex",
        justifyContent:"center",
        aligenItems:"centr",
    };

    return <div  style={cardStyle}>{children}</div>
}


export default Card;