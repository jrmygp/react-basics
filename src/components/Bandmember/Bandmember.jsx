import member from "./member.jpeg"

const Bandmember = () => {
    return (
        <div className="band-member-card">
        <p>Name</p>
        <img src={member} alt="" />
      </div>
    )
}

export default Bandmember