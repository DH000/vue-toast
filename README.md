# vue-toast

A mobile toast plugin for vue.

## Introduction

A mobile toast plugin for vue.

## Useage

It's simple.

```javascript

//first import plugin

import VueToast    from './plugins/vue-toast/lib/index'

//and register the plugin on vue.

Vue.use(VueToast)

//last , you can call it .

this.$toast.show("hello,toast")

or

this.$toast.show("hello,toast",{
  duration:3000
})

```
