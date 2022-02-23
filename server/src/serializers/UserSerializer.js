class UserSerializer {

  static async getUserDetail(user) {
    const allowedAttributes = ["name", "email", "id"];

    let serializedUser = {};
    for (const attribute of allowedAttributes) {
      serializedUser[attribute] = user[attribute];
    }

    serializedUser.expenses = await user.$relatedQuery("expenses")

    serializedUser.earnings =await user.$relatedQuery("earnings")

    serializedUser.taxProfile = await user.$relatedQuery("taxprofile")

    return serializedUser;
  }
}

export default UserSerializer;