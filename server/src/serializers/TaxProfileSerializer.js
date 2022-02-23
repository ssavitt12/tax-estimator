import { TaxProfile } from "../models/index.js";
import permissions from "../services/permissions.js";

class TaxProfileSerializer {
  static getSummary(taxProfiles) {
    return permissions(taxProfiles, [
      "userFilingStatus",
      "userHomeState",
      ]);
  }

    static async getDetail(taxProfiles) {
      const user = await taxProfiles.$relatedQuery("user")

      return {
        ...this.getSummary(taxProfiles),
        userName: user.name
      }
    }

  static async getTaxProfileCollectionDetails(taxProfiles) {
    return Promise.all(taxProfiles.map((taxprofile) => {
        return this.getDetail(taxprofile);
      })
    );
  }
}

export default TaxProfileSerializer;


