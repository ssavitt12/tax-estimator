
import { Earnings } from "../models/index.js"

class EarningsSerializer {
    static async getEarnings(earnings, userId) {
        const user = await earnings.$relatedQuery("user")

        const allowedAttributes = [
            "id",
            "userId",
            "uber",
            "lyft",
            "ubereats",
            "doordash",
            "grubhub",
            "instacart",
            "other",
        ]
    }
    static async getDetail(earnings) {
        const user = await earnings.$relatedQuery("user")

        return {
            ...this.getSummary(earnings),
            userName: user.name
        }
    }

    static async getDetailCollection(earnings) {
        return Promise.all(earnings.map((earning) => {
            return this.getDetail(earning)
        }))
    }
}

export default EarningsSerializer