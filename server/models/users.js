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
  // Associate Methods

  // Instance methods
  // User.prototype.comparePassword = function (password) {
  //   return bcrypt.compareSync(password, this.password);
  // };

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
  return User;
};

export default userModel;
