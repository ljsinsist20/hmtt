import Vue from 'vue'
export default {
    install() {
        Vue.directive('fofo', {
            inserted(el) {
                el = el.querySelector('input')
                el.focus()
            }
        })
    }
}