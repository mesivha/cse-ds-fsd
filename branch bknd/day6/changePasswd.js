const changePasswd = async(userDetails, FILE) => {
    const {email, password} = userDetails;
    if (!email || !password) {
        return {message: "Email and password are required"};
    }
    const existingUser = userDetails.filter(user => user.email === userDetails.email);   
    if(!existingUser) return {message: "User not found"};
    const updatedUserDetails = userDetails.map(
    (user) => user.email === email ? {...user, password} : user);
}