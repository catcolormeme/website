import { ChainId } from "@icecreamswap/constants"

export const setRouteApiChainName = (chainId: ChainId) => {
    switch (chainId) {
        case ChainId.BSC_TESTNET:
            return "bsc_testnet"
        case ChainId.WHALE:
            return "whale"
        case ChainId.BSC:
            return "bsc"
        // case ChainId.TELOS:
        //     return "teloschain"
        // case ChainId.BASE:
        //     return "base"
        default:
            return ""
    }
}
