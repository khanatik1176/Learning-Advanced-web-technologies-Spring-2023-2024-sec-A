const register = () => {
    return (
        <div className="register">
            <h1 reg-title> Registration Page</h1>
            
            <div className="form-area">
            <form action="">
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Email"></input>
                <input type="email" placeholder="Address"></input>
                <input type="password" placeholder="Phone Number"></input>
                <input type="password" placeholder="Gender"></input>
                <button type="submit"className="register-btn" >Register</button>
            </form>
            </div>
        </div>
    )
}

export default register;