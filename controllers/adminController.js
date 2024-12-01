// Admin registeration
const adminregister = async (req, res) => {
  try {
    // get admin data from req.body
    const { email, ...rest } = req.body;
    // check if required fields are present
    if (!email || Object.keys(rest).length === 0) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    // check if admin already exists
    const isAdminExist = await Admin.findOne({ email });
    if (isAdminExist) {
      return res.status(409).json({ message: "admin already exists" });
    }
    // admin password hashing
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(rest.password, saltRounds);
    // Create admin and save in database
    const admin = new Admin({ email, ...rest, password: hashedPassword });
    await admin.save();

    // generate token
    const token = generateToken({
      _id: admin.id,
      email: admin.email,
      role: "admin",
    });
    res.cookie("token", token);
    // send response
    res.json({
      success: true,
      message: "Create admin",
      admin,
    });
  } catch (error) {
    console.log(404).json({ error });
  }
};
// Login admin
const adminLogin = async (req, res) => {
  try {
  } catch (error) {}
};
// Logout admin
const logoutAdmin = async (req, res) => {
  try {
  } catch (error) {}
};
// Forget password
const forgetAdminPassword = async (req, res) => {
  try {
  } catch (error) {}
};
// Update admin
const updateAdmin = async (req, res) => {
  try {
  } catch (error) {}
};
// Check admin
const checkAdmin = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  adminregister,
  adminLogin,
  logoutAdmin,
  forgetAdminPassword,
  updateAdmin,
  checkAdmin,
};
