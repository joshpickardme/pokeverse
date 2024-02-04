export default function Card({name, level, image, skill}) {
    return (
        <div className="card w-96 h-96 bg-base-100 shadow-xl">
            <figure><img src={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">Level {level}</div>
                </h2>
                <p>{skill}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    )
}