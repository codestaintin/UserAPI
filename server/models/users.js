import bcrypt from 'bcrypt-nodejs';

const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // Associate Methods and Other class methods

  // Instance methods
  User.prototype.comparePassword = (user, password) => {
    return bcrypt.compareSync(password, user.password);
  };
  // Hooks
  User.hook('beforeCreate', (user) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;
  });
  User.signUpRules = () => {
    return {
      fullname: 'required|min:2',
      email: 'required|email',
      phone: 'required|min:6',
      password: 'required|min:6'
    };
  };

  User.signInRules = () => {
    return {
      email: 'required',
      password: 'required'
    };
  };

  return User;
};

export default userModel;
