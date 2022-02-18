
import { Earnings } from "../models/index.js"

class EarningsSerializer {
    static async getSummary(earnings, userId) {
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

        let serializedEarnings = {}
        for (const attribute of allowedAttributes) {
            serializedEarnings[attribute] = earnings[attribute]
        }
    
        return {
            ...this.getSummary(earnings),
            userName: user.name
        }
    }

    static async getDetailCollection(earnings, userId) {
        return Promise.all(earnings.map((earning) => {
            return this.getDetail(earning, userId)
        }))
    }
}

export default EarningsSerializer