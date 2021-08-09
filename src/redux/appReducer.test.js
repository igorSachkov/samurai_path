import  {appReducer, initializedSuccess}  from "./appReducer"




it(`ititialized should be true`, ()=> {
    let initialStore = {
        initialized: false
    }
    let newStore = appReducer(initialStore, initializedSuccess())
    expect(newStore.initialized).toBe(true)
})