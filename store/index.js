export const state = () => ({
  entered: false // このステートが変更されるとアニメーションが🔥
})

export const getters = {
  entered: state => state.entered // 各コンポーネントのウォッチャで監視するので
}

export const mutations = {
  click (state) {
    state.entered = !state.entered // クリックされたらステートを切り替えます
  }
}
