//import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MyComponent from '../src/index.vue'

describe('index.vue', () => {
    // 检查原始组件选项
    it('has a created hook', () => {
        expect(typeof MyComponent.mounted).toBe('function')
    })
})