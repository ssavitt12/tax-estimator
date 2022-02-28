class UserSerializer {

  static getSummary(users) {
    const allowedAttributes = ["id", "name", "email"]

    const serializedUsers = users.map((user) => {
      let serializedUser = {}
      for (const attribute of allowedAttributes) {
        serializedUser[attribute = use[attribute]]
      }
      return serializedUser
    })
    return serializedUsers
  }

  static async getDetails(user) {
    const allowedAttributes = ["id", "name", "email"];

    let serializedUser = {}
    for (const attribute of allowedAttributes) {
      serializedUser[attribute] = user[attribute]
    }
    serializedUser.tasks = await user.$relatedQuery("taxes")
    return serializedUser
  }
}

export default UserSerializer;