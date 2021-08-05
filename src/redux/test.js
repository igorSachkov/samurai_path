import { toBindingIdentifierName } from "@babel/types"
import  {appReducer, initializedSuccess}  from "./appReducer"


let initialStore = {
    initialized: false
}

it(`ititialized should be true`, ()=> {
    let newState = appReducer(initialStore, initializedSuccess)

    expect(newState.initialized).toBe(true)
})