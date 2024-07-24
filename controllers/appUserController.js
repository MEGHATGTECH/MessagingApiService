const AppUsers = require("../models/AppUsers");



exports.userLogin = async (req, res) => {
    try {
        const user = req.body;
        var existingUser = await AppUsers.findOne(
            { email: user.email, password: user.password },
            "name email logo"
        ).exec(); // find is user exist or not
        // if (!User) {
        //     User = await createUser(user)  // create user if not exist
        // }

        if (existingUser) {

            return res.status(200).json({
                code: 200,
                message: "success",
                data: {
                    id: existingUser._id,
                    name: existingUser.name,
                    email: existingUser.email,
                    logo:existingUser.logo
                },
            });
        } else {
            return res.status(200).json({
                code: 200,
                message: "not_found",
                data: null,
            });
        }

    } catch (error) {
        return res.error("Error occurred while updating user", error.message);
    }
};






exports.registerUser = async (req, res) => {
    try {
        const user = req.body;
        var existingUser = await AppUsers.findOne(
            { email: user.email },
            "name email logo"
        ).exec(); // find is user exist or not
        // if (!User) {
        //     User = await createUser(user)  // create user if not exist
        // }

        if (existingUser || !user.email) {
            return res.status(200).json({
                code: 200,
                message: "already_exists",
                data: null,
            });
        } else {

            await createUser(user)

            return res.status(200).json({
                code: 200,
                message: "success",
                data: null,
            });
        }

    } catch (error) {
        return res.error("Error occurred while creating user", error.message);
    }
};

async function createUser(user) {

    const userdata = new AppUsers({
        name: user.name,
        email: user.email,
        logo: user?.logo || "",
        password: user.password,
    }).save();

    return userdata;
}



exports.getUserList = async (req, res) => {
    try {
        const userList = await AppUsers.find(
            {isActive:true}
        ).select("name email logo").lean()
       
        return res.status(200).json({
            code: 200,
            message: "success",
            data: userList
        });

        

    } catch (error) {
        return res.error("Error occurred while updating user", error.message);
    }
};